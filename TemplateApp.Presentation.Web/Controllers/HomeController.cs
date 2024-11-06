using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;
using TemplateApp.ViewModels;
using TemplateApp.ViewModels.Partial;

namespace TemplateApp.Controllers
{
    public class HomeController : Controller
    {
        private static string FuelPriceRefreshTableIdentifier = "FuelPriceTable";

        private readonly ILogger<HomeController> _logger;
        private readonly List<IDictionary<string, object>> _tableData;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;

            _tableData = new List<IDictionary<string, object>>();
            var row = new Dictionary<string, object>();
            row.Add("ID", 3);
            row.Add("Name", "Super");
            row.Add("Price", 1.429M);
            _tableData.Add(row);
            var row2 = new Dictionary<string, object>();
            row2.Add("ID", 4);
            row2.Add("Name", "Diesel");
            row2.Add("Price", 1.401M);
            _tableData.Add(row2);
            var row3 = new Dictionary<string, object>();
            row3.Add("ID", 5);
            row3.Add("Name", "Racing Diesel");
            row3.Add("Price", 1.594M);
            _tableData.Add(row3);
            var row4 = new Dictionary<string, object>();
            row4.Add("ID", 6);
            row4.Add("Name", "Super Plus");
            row4.Add("Price", 1.610M);
            _tableData.Add(row4);
            var row5 = new Dictionary<string, object>();
            row5.Add("ID", 7);
            row5.Add("Name", "Super Plus Plus");
            row5.Add("Price", 1.710M);
            _tableData.Add(row5);
        }

        public IActionResult Index()
        {
            if (User.Identity?.IsAuthenticated == true)
            {
                return new RedirectToActionResult("Start", "Home", null);
            }

            return View();
        }

        private RefreshTablePartialViewModel BuildFuelPriceTable()
        {
            var allData = _tableData;

            var result = new RefreshTablePartialViewModel(
                FuelPriceRefreshTableIdentifier,
                allData,
                allData.Count,
                allData.Count,
                Url.Action("FuelPriceTable", "Home"));
            result.FillFromQueryCollection(Request.Query);

            var filteredData = allData;
            if (!string.IsNullOrEmpty(result.SearchTerm))
            {
                filteredData = filteredData
                    .Where(entry => entry.Values.Any(value => value.ToString().Contains(result.SearchTerm)))
                    .ToList();
                result.Count = filteredData.Count;
            }

            var pagedData = filteredData
                .Skip(result.PerPageItemCount * (result.Page - 1))
                .Take(result.PerPageItemCount)
                .ToList();
            result.Entries = pagedData;

            return result;
        }

        //[Authorize]
        public IActionResult Start()
        {
            var viewModel = new HomeStartViewModel();

            viewModel.FuelPriceTable = BuildFuelPriceTable();

            return View(viewModel);
        }

        public IActionResult FuelPriceTable()
        {
            var viewModel = BuildFuelPriceTable();

            return View("Partials/_RefreshTablePartial", viewModel);
        }
    }
}
