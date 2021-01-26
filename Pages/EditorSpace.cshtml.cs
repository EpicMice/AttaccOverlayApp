using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace attaccoverlay.Pages
{
    public class EditorSpaceModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public EditorSpaceModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Console.WriteLine("received request");
        }
    }
}
