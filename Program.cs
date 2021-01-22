using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace attaccoverlay
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var h = CreateHostBuilder(args).Build();
            h.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseUrls("https://*:443", "https://*:80");
                    webBuilder.UseStartup<Startup>();
                });
    }
}
