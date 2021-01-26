using attaccoverlay.Pages;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SessionHandler;
using Microsoft.AspNetCore.Http;
using System.Net.WebSockets;
using System.Threading;
using attaccoverlay.Middleware;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Html;
using Newtonsoft.Json;
using System.Net;
using System.Text;
using System.Net.Http;
using System.IO;
using System.Net.Http.Headers;
using ControllerModels;

namespace attaccoverlay.Controllers
{

    /*API CONTROLLER*/
    public class HomeController : Controller
    {

        public HomeController(IHttpContextAccessor context)
        {

        }

        [HttpGet("/")]
        [HttpGet("/{a?}")]
        [HttpGet("/index/{page}")]
        public IActionResult MainRoute(string page, [FromServices] SessionService sserv)
        {
            //session.CheckSession("bad session", "bad token").Wait();
            ViewBag.Request = HttpContext.Request;
            JObject pagedata = new JObject();

            pagedata.Add("login_status", sserv.SessionData.HasKey("username"));
            ViewBag.PageDataMap = pagedata;
            ViewBag.PageData = new HtmlString(pagedata.ToString(Formatting.None));

            return View("/Pages/Index.cshtml");
        }

        [HttpGet("/dashboard/editor/space")]
        public IActionResult EditorSpace(string page, [FromServices] SessionService sserv)
        {
            //session.CheckSession("bad session", "bad token").Wait();
            ViewBag.Request = HttpContext.Request;
            JObject pagedata = new JObject();

            pagedata.Add("login_status", sserv.SessionData.HasKey("username"));
            ViewBag.PageDataMap = pagedata;
            ViewBag.PageData = new HtmlString(pagedata.ToString(Formatting.None));

            return View("/Pages/EditorSpace.cshtml");
        }

        [HttpPost("/Actions/Login")]
        public async Task<IActionResult> ActionLogin([FromForm] string username,[FromForm] string password, [FromServices] SessionService sserv)
        {
            Console.WriteLine(username + ":" + password);
            JObject credentials = new JObject();
            credentials.Add("username", username);
            credentials.Add("password", password);

            HttpClient client = new HttpClient();
            var request = await client.PostAsync("https://Attacc.tv/Actions/ProxyLogin", 
                new StringContent(credentials.ToString(Formatting.None), 
                Encoding.UTF8, "application/json"));

            string result = "";

            if (request.IsSuccessStatusCode)
            {
                result = await request.Content.ReadAsStringAsync();

                if (result == "login successful")
                {
                    Console.WriteLine(result);
                    sserv.SessionData.AddValue(nameof(username), username);
                    sserv.SessionData.AddValue(nameof(password), password);
                    sserv.SessionManager.CommitSession(sserv.SessionData);
                }
            }

            return Ok(result);
        }

        [HttpGet("/receiver/{user}")]
        public async Task Receiver(string user, [FromServices] SessionService sserv, [FromServices] IHttpContextAccessor ica, [FromServices] SocketService sockserv)
        {
            await Task.Delay(0);
            return;
        }
        //other api calls
    }
}
