using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using SessionHandler;
using System;
using System.Buffers;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace attaccoverlay.Middleware
{

    public partial class SocketController
    {
        public static ConcurrentDictionary<string, string> _Reception = new ConcurrentDictionary<string, string>();

        //Platform:ID,sockets
        public static ConcurrentDictionary<string, List<WebSocket>> _WorkingSockets = new ConcurrentDictionary<string, List<WebSocket>>();

        public readonly RequestDelegate _next;

        public SocketController(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            if (!context.WebSockets.IsWebSocketRequest)
            {
                _next.Invoke(context).Wait();
                return;
            }

            CancellationToken ct = context.RequestAborted;

            await context.WebSockets.AcceptWebSocketAsync().ContinueWith((socket) =>
            {
                WebSocket current_socket = socket.Result;
                while (true)
                {
                    string response = null;
                    if (ct.IsCancellationRequested)
                    {
                        break;
                    }
                    //cancel after 2 seconds.
                    if (current_socket.State != WebSocketState.Open)
                    {
                        Console.WriteLine("NOT OPEN");
                        break;
                    }

                    response = ReceiveStringAsync(current_socket, ct).Result;

                    if (string.IsNullOrEmpty(response))
                    {
                        if (current_socket.State != WebSocketState.Open)
                        {
                            Console.WriteLine("Socket quit");
                            break;
                        }
                        continue;
                    }
                    else
                    {
                        //response good;
                        Console.WriteLine(response);
                    }
                }
            });
        }

        public static async Task<string> ReceiveStringAsync(WebSocket socket, CancellationToken ct = default)
        {
            var buffer = new ArraySegment<byte>(new byte[8192]);
            using (var ms = new MemoryStream())
            {
                WebSocketReceiveResult result;
                do
                {
                    ct.ThrowIfCancellationRequested();

                    result = await socket.ReceiveAsync(buffer, ct);
                    ms.Write(buffer.Array, buffer.Offset, result.Count);
                } while (!result.EndOfMessage);

                ms.Seek(0, SeekOrigin.Begin);
                if (result.MessageType != WebSocketMessageType.Text)
                {
                    return null;
                }

                using (var reader = new StreamReader(ms, Encoding.UTF8))
                {
                    return await reader.ReadToEndAsync();
                }
            }
        }
    }

    public class SocketContact
    {
        public string session_guid;
        public WebSocket socket;
        public int ID;
        public string lastcontact;
    }

    public class SocketService
    {

        public static ConcurrentDictionary<string, List<SocketContact>> SocketCache = new ConcurrentDictionary<string, List<SocketContact>>();
        //
        public SocketService(IHttpContextAccessor ica, SessionService sserv)
        {
            List<SocketContact> into = new List<SocketContact>();
            if (ica.HttpContext.WebSockets.IsWebSocketRequest)
            {
                Console.WriteLine("Retrieving Connection... "+sserv.SessionData.Session_ID);
                SocketCache.TryAdd(sserv.SessionData.Session_ID, into);
                var hold = ica.HttpContext.WebSockets.AcceptWebSocketAsync();
                hold.Wait();
                Task.Run(() =>
                {
                    Task<WebSocket> t = hold;
                    WebSocket socket = t.Result;
                    //this is checking if the session_id is correct.
                    //this should always be the case.
                    //Get
                    var buffer = new ArraySegment<byte>(new byte[2048]);
                    WebSocketReceiveResult result;
                    using (var ms = new MemoryStream())
                    {
                        do
                        {
                            result = socket.ReceiveAsync(buffer, CancellationToken.None).Result;
                            ms.Write(buffer.Array, buffer.Offset, result.Count);
                        } while (!result.EndOfMessage);

                        ms.Seek(0, SeekOrigin.Begin);
                        using (var reader = new StreamReader(ms, Encoding.UTF8))
                        {
                            string resp;
                            Console.WriteLine(resp = reader.ReadToEndAsync().Result);
                            if (resp == sserv.SessionData.Session_ID)
                            {
                                Console.WriteLine("GOOD MATCH");
                                if (!SocketCache.ContainsKey(resp))
                                {
                                    Console.WriteLine("BAD MATCH");
                                    return;
                                }
                            }
                            else
                            {
                                Console.WriteLine("BAD MATCH");
                                return;
                            }
                            Console.WriteLine(resp + ":" + sserv.SessionData.Session_ID);
                        }
                    }

                    if (!SocketCache.TryGetValue(sserv.SessionData.Session_ID, out into))
                    {
                    }
                    
                    if (into.Count == 0)
                    {
                        Console.WriteLine("p00000");
                        into.Add(new SocketContact { session_guid = sserv.SessionData.Session_ID, socket = socket, ID = 1 });
                    }
                    else if (into.Count == 1)
                    {
                        Console.WriteLine("p11111");
                        into.Add(new SocketContact { session_guid = sserv.SessionData.Session_ID, socket = socket, ID = into[0].ID + 1 });
                    }else
                    if (into.Count >= 2)
                    {
                        Console.WriteLine("p22222");
                        string aggregate = "," + string.Join(",", into.Select(e=>e.ID)) + ",";
                        Console.WriteLine(aggregate);
                        int nextint = 0;
                        string added = "";
                        for (int i = 0; i < into.Count + 5; i++)
                        {
                            if (aggregate.Contains(","+i+","))
                            {
                            }
                            else
                            {
                                if (i < into.Count)
                                {
                                    nextint=(into[i].ID + (into[i].ID * new Random().Next(2, 5)));
                                }
                                else
                                {
                                    nextint=(i * new Random().Next(2, 5));
                                }
                                if (!aggregate.Contains("," + nextint + ","))
                                {
                                    added += nextint + ",";
                                    Console.WriteLine(added);
                                }                            
                            }
                        }

                        Console.WriteLine(added+":::"+aggregate);
                        string chose = added.Replace(",,",",").Split(",")[0];
                        Console.WriteLine(chose + "::CHOSE");
                        into.Add(new SocketContact { session_guid = sserv.SessionData.Session_ID, socket = socket, ID = int.Parse(chose), });
                    }

                    if (into != null)
                    {
                        Console.WriteLine("Web Socket Counts: " + into.Count);
                    }
                    else
                    {
                        Console.WriteLine("INTO IS NULL");
                    }
                }).Wait();
            }
        }
    }
}
