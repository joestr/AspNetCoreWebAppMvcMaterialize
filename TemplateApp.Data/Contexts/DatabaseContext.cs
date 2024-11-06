using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using TemplateApp.Data.Entities;

namespace TemplateApp.Data.Contexts
{
    public class DatabaseContext : DbContext
    {
        #region Variables for seeding
        
        private static Guid AuthorKarlMarxGuid = Guid.Parse("5f4546a4-701b-4b2c-ae1e-c4a67b1e6ed9");
        private static Guid BookManifestDerKommunistischenParteiGuid = Guid.Parse("21396dd4-d045-418a-8aea-bc5f8bae30a5");
        private static Guid BookDasKapitalGuid = Guid.Parse("e4219615-344c-4858-a148-f016d2c220eb");
        
        #endregion
        
        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }

        public DatabaseContext()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Author>(entity =>
            {
                entity.HasKey(author => author.Id);
            });
            
            modelBuilder.Entity<Book>(entity =>
            {
                entity.HasKey(book => book.Id);
                entity.HasOne(b => b.Author)
                    .WithMany(c => c.Books)
                    .HasForeignKey(book => book.AuthorId)
                    .OnDelete(DeleteBehavior.Restrict);
            });

            #region Seed data

            SeedAuthors(modelBuilder);
            SeedBooks(modelBuilder);

            #endregion
            
            base.OnModelCreating(modelBuilder);
        }

        #region Seeding methods
        
        private void SeedAuthors(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Author>().HasData(
                new Author()
                {
                    Id = AuthorKarlMarxGuid,
                    FirstName = "Karl",
                    LastName = "Marx",
                    Salutation = "",
                    Prefix = "",
                    Suffix = ""
                });
        }

        private void SeedBooks(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().HasData(
                new Book()
                {
                    Id = BookManifestDerKommunistischenParteiGuid,
                    Description = "",
                    Title = "Manifest der Kommunistischen Partei",
                    Subtitle = "",
                    AuthorId = AuthorKarlMarxGuid
                },
                new Book()
                {
                    Id = BookDasKapitalGuid,
                    Description = "",
                    Title = "Das Kapital",
                    Subtitle = "Kritik der politischen Ökonomie",
                    AuthorId = AuthorKarlMarxGuid
                });
        }
        
        #endregion
    }
}
