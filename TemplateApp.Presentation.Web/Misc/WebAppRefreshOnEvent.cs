namespace TemplateApp.Presentation.Web.Misc;

public class WebAppRefreshOnEvent
{
    public string Name { get; set; }
    public string Function { get; set; }

    public WebAppRefreshOnEvent(string name, string function)
    {
        Name = name;
        Function = function;
    }

    public WebAppRefreshOnEvent(string className, string identifier, string eventIdentifier, string function)
    {
        Name = $"{className}_{identifier}_{eventIdentifier}";
        Function = function;
    }
}