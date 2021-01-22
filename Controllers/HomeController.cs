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
        [HttpGet("/index/{a?}")]
        public IActionResult MainRoute([FromServices] SessionService sserv)
        {
           
            //session.CheckSession("bad session", "bad token").Wait();

            Console.WriteLine("HOME");
            ViewBag.Request = HttpContext.Request;

            return View("/Pages/Index.cshtml");
        }

        //client socket attempting to connect
        //makes server request
        //server checks incoming connection with request details / or fails
        //server pulls stream

        [HttpPost("/receiver/{user}")]
        public IActionResult Receiver(string user, [FromServices] SessionService sserv, [FromServices] IHttpContextAccessor ica)
        {
            if (ica.HttpContext.WebSockets.IsWebSocketRequest)
            {
                Console.WriteLine("Retrieving Connection...");
            }

            return Ok("ok");
        }



        //other api calls

    }
}
