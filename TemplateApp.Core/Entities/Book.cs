using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemplateApp.Core.Entities
{
    public class Book
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = "";
        public string Subtitle { get; set; } = "";
        public string Description { get; set; } = "";
        public Guid AuthorId { get; set; }

        public Book(Data.Entities.Book book)
        {
            this.Id = book.Id;
            this.Title = book.Title;
            this.Subtitle = book.Subtitle;
            this.Description = book.Description;
            this.AuthorId = book.AuthorId;
        }
    }
}
