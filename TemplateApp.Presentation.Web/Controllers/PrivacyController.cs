using TemplateApp.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace TemplateApp.Controllers
{
    public class PrivacyController : Controller
    {
        private readonly ILogger<PrivacyController> _logger;

        public PrivacyController(ILogger<PrivacyController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
