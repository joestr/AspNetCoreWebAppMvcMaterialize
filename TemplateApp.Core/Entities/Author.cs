using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemplateApp.Core.Entities
{
    public class Author
    {
        public Guid Id { get; set; }
        public string Salutation { get; set; }
        public string Prefix { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Suffix { get; set; }

        public Author(Data.Entities.Author author)
        {
            this.Id = author.Id;
            this.Salutation = author.Salutation;
            this.Prefix = author.Prefix;
            this.FirstName = author.FirstName;
            this.LastName = author.LastName;
            this.Suffix = author.Suffix;
        }
    }
}
