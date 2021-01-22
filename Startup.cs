using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using React.AspNet;
using JavaScriptEngineSwitcher.V8;
using JavaScriptEngineSwitcher.Extensions.MsDependencyInjection;
using SessionHandler;
using attaccoverlay.Middleware;
using System.Net.WebSockets;
using System.Threading.Tasks;
using System;
using System.Threading;

namespace attaccoverlay
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>(); 
            services.AddSingleton<SessionManager>();
            services.AddScoped<SessionService>();
            services.AddDistributedMemoryCache();
            services.AddJsEngineSwitcher(options => options.DefaultEngineName = V8JsEngine.EngineName).AddV8();
            services.AddScoped<SocketController>();
            services.AddReact();
            services.AddRazorPages(); 

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseReact(config=> { });

            app.MapWhen(context => context.Request.Path.Value.StartsWith("/images"),
            appBuilder => appBuilder.UseStaticFiles());

            app.MapWhen(context => context.Request.Path.Value.EndsWith(".js"),
            appBuilder => appBuilder.UseStaticFiles());

            app.MapWhen(context => context.Request.Path.Value.Contains("/Attaccv2"),
            appBuilder => appBuilder.UseStaticFiles());

            app.MapWhen(context => context.Request.Path.Value.EndsWith(".jsx"),
            appBuilder => appBuilder.UseStaticFiles());

            app.MapWhen(context => context.Request.Path.Value.EndsWith(".map"),
            appBuilder => appBuilder.UseStaticFiles());

            app.MapWhen(context => context.Request.Path.Value.EndsWith(".css"),
            appBuilder => appBuilder.UseStaticFiles());

            app.MapWhen(context => context.Request.Path.Value.EndsWith(".ico"),
            appBuilder => appBuilder.UseStaticFiles());

            app.UseRouting();

            app.UseAuthorization();

            app.UseWebSockets();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "Default", pattern: "{controller=Home}/{action}");
                endpoints.MapControllers();
                endpoints.MapRazorPages();
            });
        }

        private async Task Echo(HttpContext context, WebSocket webSocket)
        {
            var buffer = new byte[1024 * 4];
            WebSocketReceiveResult wsresult = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer),
            CancellationToken.None);
            while (!wsresult.CloseStatus.HasValue)
            {
                await webSocket.SendAsync(new ArraySegment<byte>(buffer, 0, wsresult.Count), wsresult.MessageType,
                wsresult.EndOfMessage, CancellationToken.None);
                wsresult = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            }
            await webSocket.CloseAsync(wsresult.CloseStatus.Value, wsresult.CloseStatusDescription,
            CancellationToken.None);
        }

    }

}
