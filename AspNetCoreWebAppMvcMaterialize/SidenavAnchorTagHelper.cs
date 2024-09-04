using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Text.Encodings.Web;

namespace AspNetCoreWebAppMvcMaterialize
{
    public class SidenavAnchorTagHelper : AnchorTagHelper
    {
        public SidenavAnchorTagHelper(IHtmlGenerator generator) : base(generator)
        {
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            base.Process(context, output);

            var contextController = (string)ViewContext.RouteData.Values["controller"];
            var contextAction = (string)ViewContext.RouteData.Values["action"];

            if (contextController?.Equals(this.Controller) == true && contextAction?.Equals(this.Action) == true)
            {
                output.PreElement.AppendHtml("<li class=\"active\">");
                
            }
            else
            {
                output.PreElement.AppendHtml("<li>");
            }

            output.PostElement.AppendHtml("</li>");

            output.TagName = "a";
        }
    }
}
