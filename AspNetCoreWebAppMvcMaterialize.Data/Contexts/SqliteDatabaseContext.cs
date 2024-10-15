using Microsoft.EntityFrameworkCore;

namespace AspNetCoreWebAppMvcMaterialize.Data.Contexts
{
    public class MsSqlServerDatabaseContext : DatabaseContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder = optionsBuilder.UseSqlite();
            base.OnConfiguring(optionsBuilder);
        }
    }
}
