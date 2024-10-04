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
