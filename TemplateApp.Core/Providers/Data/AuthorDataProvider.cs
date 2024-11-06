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
    public class AuthorDataProvider
    {
        public DatabaseContext DatabaseContext { get; set; }

        public AuthorDataProvider(DatabaseContext databaseContext)
        {
            DatabaseContext = databaseContext;
        }

        public List<Author> GetAuthors()
        {
            var dbAuthors = DatabaseContext.Authors.ToList();

            var result = dbAuthors.Select(dbAuthor => new Author(dbAuthor)).ToList();

            return result;
        }
    }
}
