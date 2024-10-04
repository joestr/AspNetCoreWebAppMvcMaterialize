using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AspNetCoreWebAppMvcMaterialize.Data.Entities
{
    public class Book : IEquatable<Book>
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Title { get; set; } = "";
        public string Subtitle { get; set; } = "";
        public string Description { get; set; } = "";
        public Author Author { get; set; } = new ();

        public bool Equals(Book? other)
        {
            if (other is null) return false;
            if (ReferenceEquals(this, other)) return true;
            return Id.Equals(other.Id) && Title == other.Title && Subtitle == other.Subtitle && Description == other.Description && Author.Equals(other.Author);
        }

        public override bool Equals(object? obj)
        {
            if (obj is null) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != GetType()) return false;
            return Equals((Book)obj);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, Title, Subtitle, Description, Author);
        }

        public static bool operator ==(Book? left, Book? right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(Book? left, Book? right)
        {
            return !Equals(left, right);
        }
    }
}
