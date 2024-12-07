using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TemplateApp.Data.Contexts;

namespace TemplateApp.Core.Services
{
    /// <summary>
    /// Represents an entry point for database contexts to be registered.
    /// </summary>
    public static class DatabaseContextService
    {
        public static void RegisterDatabaseService(this IServiceCollection serviceCollection, IConfiguration configuration)
        {

            var sqliteConnectionString = configuration.GetConnectionString("Sqlite");
            var msSqlServerConnectionString = configuration.GetConnectionString("MsSqlServer");

            if (sqliteConnectionString != null)
            {
                serviceCollection.AddDbContext<DatabaseContext>(options =>
                    options.UseSqlite(sqliteConnectionString));
            }
        }
    }
}
