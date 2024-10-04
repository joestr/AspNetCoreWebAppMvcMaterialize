using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNetCoreWebAppMvcMaterialize.Core.Providers.Data;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreWebAppMvcMaterialize.Core.Services
{
    public class DataProviderService
    {
        public static void RegisterDataProviders(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<AuthorDataProvider>();
        }
    }
}
