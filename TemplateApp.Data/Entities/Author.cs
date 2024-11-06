using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemplateApp.Data.Entities
{
    public class Author : IEquatable<Author>
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Salutation { get; set; } = "";
        public string Prefix { get; set; } = "";
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string Suffix { get; set; } = "";
        public List<Book> Books = [];

        public bool Equals(Author? other)
        {
            if (other is null) return false;
            if (ReferenceEquals(this, other)) return true;
            return Books.Equals(other.Books) && Id.Equals(other.Id) && Salutation == other.Salutation && Prefix == other.Prefix && FirstName == other.FirstName && LastName == other.LastName && Suffix == other.Suffix;
        }

        public override bool Equals(object? obj)
        {
            if (obj is null) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != GetType()) return false;
            return Equals((Author)obj);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Books, Id, Salutation, Prefix, FirstName, LastName, Suffix);
        }

        public static bool operator ==(Author? left, Author? right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(Author? left, Author? right)
        {
            return !Equals(left, right);
        }
    }
}
