using attaccoverlay.Pages;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SessionHandler;

namespace attaccoverlay.Controllers
{

    /*API CONTROLLER*/
    public class HomeController : Controller
    {

        public HomeController()
        {
        }

        [HttpGet("/")]
        [HttpGet("/{a?}")]
        [HttpGet("/index/{a?}")]
        public IActionResult MainRoute([FromServices] SessionManager session)
        {
            SessionData session_data = default(SessionData);
            Console.WriteLine(Request.Cookies[nameof(session_data.Session_ID).ToLower()]);
            session_data = session.CheckSession(Request.Cookies[nameof(session_data.Session_ID).ToLower()], Request.Cookies[nameof(session_data.Token).ToLower()]).Result;

            Console.WriteLine(session_data.Session_ID + ":" + session_data.Token);

            if(session_data.Token== "failed_token")
            {
                Console.WriteLine("FAILED");
            }
            else
            {
                Response.Cookies.Append(nameof(session_data.Session_ID).ToLower(), session_data.Session_ID);
                Response.Cookies.Append(nameof(session_data.Token).ToLower(), session_data.Token);
            }


            //session.CheckSession("bad session", "bad token").Wait();

            Console.WriteLine("HOME");
            ViewBag.Request = HttpContext.Request;

            return View("/Pages/Index.cshtml");
        }

        //other api calls

    }
}
