using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNetCoreWebAppMvcMaterialize.Core.Entities;
using AspNetCoreWebAppMvcMaterialize.Data.Contexts;
using Microsoft.EntityFrameworkCore;

namespace AspNetCoreWebAppMvcMaterialize.Core.Providers.Data
{
    public class BookDataProvider
    {
        public DatabaseContext DatabaseContext { get; set; }

        public BookDataProvider(DatabaseContext databaseContext)
        {
            DatabaseContext = databaseContext;
        }

        public List<Book> GetBooks()
        {
            var dbBooks = DatabaseContext.Books.ToList();

            var result = dbBooks.Select(dbBook => new Book(dbBook)).ToList();

            return result;
        }
    }
}
