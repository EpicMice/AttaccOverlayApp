#pragma checksum "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "01a79d201867ca70232af6a9b15eb9418431913b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(attaccoverlay.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
namespace attaccoverlay.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\_ViewImports.cshtml"
using attaccoverlay;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemMetadataAttribute("RouteTemplate", "/index222")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"01a79d201867ca70232af6a9b15eb9418431913b", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"57d9f0a4e0d91e7c2146faba5e8459056dbcd574", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"
    <script src=""https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.js""></script>
    <script src=""https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.js""></script>
    <script src=""https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.min.js""></script>
    <script src=""https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.js""></script>

");
#nullable restore
#line 8 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
      
        string SourcePath = "";
        if (ViewBag.Request == null)
        {
            SourcePath = "index";
        }
        else
        {
            string[] pathvalues = ViewBag.Request.Path.Value.Split("/");

            if (pathvalues.Length == 0)
            {
                SourcePath = "index";
            }
            else
            {
                SourcePath = pathvalues[1] == "" ? "index" : pathvalues[1];
            }

            Console.WriteLine(SourcePath);            
        }

        switch (SourcePath.ToLower())
        {
            case "index":

#line default
#line hidden
#nullable disable
            WriteLiteral("                <div id=\"source_dom_element\"></div>\r\n");
#nullable restore
#line 34 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                if (ViewBag.PageData != null)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <script>var PageData=");
#nullable restore
#line 36 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                                    Write(ViewBag.PageData);

#line default
#line hidden
#nullable disable
            WriteLiteral(";</script>\r\n");
#nullable restore
#line 37 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                }

#line default
#line hidden
#nullable disable
            WriteLiteral("                <script");
            BeginWriteAttribute("src", " src=\"", 1261, "\"", 1302, 1);
#nullable restore
#line 38 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
WriteAttributeValue("", 1267, Url.Content("/js/Classes/Data.js"), 1267, 35, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" type=\"text/javascript\"></script>\r\n                <script");
            BeginWriteAttribute("src", " src=\"", 1361, "\"", 1420, 1);
#nullable restore
#line 39 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
WriteAttributeValue("", 1367, Url.Content("/js/Composite/Frontpage/Frontpage.jsx"), 1367, 53, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" type=\"module\"></script>\r\n");
#nullable restore
#line 40 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                break;

            case "login":

#line default
#line hidden
#nullable disable
            WriteLiteral("                <div id=\"source_dom_element\"></div>\r\n");
#nullable restore
#line 44 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                 if (ViewBag.PageData != null)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <script>var PageData=");
#nullable restore
#line 46 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                                    Write(ViewBag.PageData);

#line default
#line hidden
#nullable disable
            WriteLiteral(";</script>\r\n");
#nullable restore
#line 47 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                }

#line default
#line hidden
#nullable disable
            WriteLiteral("                <script");
            BeginWriteAttribute("src", " src=\"", 1732, "\"", 1773, 1);
#nullable restore
#line 48 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
WriteAttributeValue("", 1738, Url.Content("/js/Classes/Data.js"), 1738, 35, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" type=\"text/javascript\"></script>\r\n                <script");
            BeginWriteAttribute("src", " src=\"", 1832, "\"", 1891, 1);
#nullable restore
#line 49 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
WriteAttributeValue("", 1838, Url.Content("/js/Composite/Loginpage/Loginpage.jsx"), 1838, 53, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" type=\"module\"></script>\r\n");
#nullable restore
#line 50 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                break;

            case "dashboard":
                if (ViewBag.PageDataMap != null && ViewBag.PageDataMap.ContainsKey("login_status") && ViewBag.PageDataMap["login_status"] == true)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <div id=\"source_dom_element\"></div>\r\n");
#nullable restore
#line 56 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                     if (ViewBag.PageData != null)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <script>var PageData=");
#nullable restore
#line 58 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                                        Write(ViewBag.PageData);

#line default
#line hidden
#nullable disable
            WriteLiteral(";</script>\r\n");
#nullable restore
#line 59 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <script");
            BeginWriteAttribute("src", " src=\"", 2398, "\"", 2439, 1);
#nullable restore
#line 60 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
WriteAttributeValue("", 2404, Url.Content("/js/Classes/Data.js"), 2404, 35, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" type=\"text/javascript\"></script>\r\n                    <script");
            BeginWriteAttribute("src", " src=\"", 2502, "\"", 2569, 1);
#nullable restore
#line 61 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
WriteAttributeValue("", 2508, Url.Content("/js/Composite/Dashboardpage/Dashboardpage.jsx"), 2508, 61, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" type=\"module\"></script>\r\n");
#nullable restore
#line 62 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                }
                else
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <div id=\"source_dom_element\"></div>\r\n");
#nullable restore
#line 66 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                    if (ViewBag.PageData != null)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <script>var PageData=");
#nullable restore
#line 68 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                                        Write(ViewBag.PageData);

#line default
#line hidden
#nullable disable
            WriteLiteral(";</script>\r\n");
#nullable restore
#line 69 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <script");
            BeginWriteAttribute("src", " src=\"", 2911, "\"", 2952, 1);
#nullable restore
#line 70 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
WriteAttributeValue("", 2917, Url.Content("/js/Classes/Data.js"), 2917, 35, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" type=\"text/javascript\"></script>\r\n                    <script");
            BeginWriteAttribute("src", " src=\"", 3015, "\"", 3074, 1);
#nullable restore
#line 71 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
WriteAttributeValue("", 3021, Url.Content("/js/Composite/Frontpage/Frontpage.jsx"), 3021, 53, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" type=\"module\"></script>\r\n");
#nullable restore
#line 72 "C:\Users\Home PC\WebLib\AttaccOverlayPlatformGit\Pages\Index.cshtml"
                }
                break;
        }

    

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Pages_Index> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<Pages_Index> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<Pages_Index>)PageContext?.ViewData;
        public Pages_Index Model => ViewData.Model;
    }
}
#pragma warning restore 1591
