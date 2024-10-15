using Microsoft.EntityFrameworkCore;

namespace AspNetCoreWebAppMvcMaterialize.Data.Contexts
{
    public class SqliteDatabaseContext : DatabaseContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder = optionsBuilder.UseSqlite();
            base.OnConfiguring(optionsBuilder);
        }
    }
}
