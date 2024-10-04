using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNetCoreWebAppMvcMaterialize.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreWebAppMvcMaterialize.Core.Services
{
    public class DatabaseContextService
    {
        public static void RegisterDatabaseContexts(IServiceCollection serviceCollection, IConfiguration configuration)
        {
            serviceCollection.AddDbContext<DatabaseContext>(options =>
            {
                configuration.GetConnectionString("Sqlite");
            });
        }
    }
}
