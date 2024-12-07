using TemplateApp.Presentation.Web.ViewModels.Partial;
using TemplateApp.ViewModels.Partial;

namespace TemplateApp.ViewModels
{
    public class HomeStartViewModel
    {
        public RefreshTablePartialViewModel? FuelPriceTable { get; set; }
        public TabsViewModel Tabs { get; set; }
    }
}
