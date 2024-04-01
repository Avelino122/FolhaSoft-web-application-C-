using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using folhaSoftware.Models;

namespace folhaSoftware.Controllers
{
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> _logger;

        public AccountController(ILogger<AccountController> logger)
        {
            _logger = logger;
        }

        public IActionResult login()
        {
            _logger.LogInformation("Acessando a página de login");
            return View();
        }
    }
}
