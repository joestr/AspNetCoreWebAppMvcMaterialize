using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace TemplateApp.Presentation.Web
{
    public class NavAnchorTagHelper : AnchorTagHelper
    {
        public NavAnchorTagHelper(IHtmlGenerator generator) : base(generator)
        {
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            base.Process(context, output);

            var contextController = (string)ViewContext.RouteData.Values["controller"];
            var contextAction = (string)ViewContext.RouteData.Values["action"];
            if (contextController?.Equals(this.Controller) == true && contextAction?.Equals(this.Action) == true)
            {
                output.AddClass("active", HtmlEncoder.Default);
            }
            output.TagName = "a";
        }
    }
}
