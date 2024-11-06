using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TemplateApp.Core.Entities;
using TemplateApp.Data.Contexts;

namespace TemplateApp.Core.Providers.Data
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
