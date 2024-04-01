using Microsoft.AspNetCore.Mvc;

namespace folhaSoftware.Controllers
{
    public class InicioController : Controller
    {
        public IActionResult Telainicio()
        {
            return View();
        }
    }
}
