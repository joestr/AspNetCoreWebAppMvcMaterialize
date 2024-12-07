
using Newtonsoft.Json;

namespace TemplateApp.Presentation.Web.Misc;

public class WebAppComponentViewModel<T> : IWebAppJavaScriptClass
{
    public string Identifier { get; set; } = "";
    public string RefreshUrl { get; set; } = "";
    public List<WebAppRefreshOnEvent> RefreshOnEvents { get; set; } = [];
    public string RefreshOnEventsJson => JsonConvert.SerializeObject(this.RefreshOnEvents);
    public bool IncludeContent { get; set; } = true;
    public bool IncludeScript { get; set; } = true;

    public WebAppComponentViewModel()
    {
    }

    public WebAppComponentViewModel(string identifier, string refreshUrl, List<WebAppRefreshOnEvent> refreshOnEvents)
    {
        Identifier = identifier;
        RefreshUrl = refreshUrl;
        RefreshOnEvents = refreshOnEvents;
    }

    public string GetClassName()
    {
        var classNameString = typeof(T).Name;
        return classNameString.Substring(0, classNameString.Length - "ViewModel".Length);
    }
}