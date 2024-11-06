using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TemplateApp.Data.Migrations.SqliteMigrations
{
    /// <inheritdoc />
    public partial class AddAuthorIdToBook : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_Authors_AuthorId",
                table: "Books");

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "Id", "FirstName", "LastName", "Prefix", "Salutation", "Suffix" },
                values: new object[] { new Guid("5f4546a4-701b-4b2c-ae1e-c4a67b1e6ed9"), "Karl", "Marx", "", "", "" });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "AuthorId", "Description", "Subtitle", "Title" },
                values: new object[,]
                {
                    { new Guid("21396dd4-d045-418a-8aea-bc5f8bae30a5"), new Guid("5f4546a4-701b-4b2c-ae1e-c4a67b1e6ed9"), "", "", "Manifest der Kommunistischen Partei" },
                    { new Guid("e4219615-344c-4858-a148-f016d2c220eb"), new Guid("5f4546a4-701b-4b2c-ae1e-c4a67b1e6ed9"), "", "Kritik der politischen Ökonomie", "Das Kapital" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Books_Authors_AuthorId",
                table: "Books",
                column: "AuthorId",
                principalTable: "Authors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_Authors_AuthorId",
                table: "Books");

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("21396dd4-d045-418a-8aea-bc5f8bae30a5"));

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: new Guid("e4219615-344c-4858-a148-f016d2c220eb"));

            migrationBuilder.DeleteData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: new Guid("5f4546a4-701b-4b2c-ae1e-c4a67b1e6ed9"));

            migrationBuilder.AddForeignKey(
                name: "FK_Books_Authors_AuthorId",
                table: "Books",
                column: "AuthorId",
                principalTable: "Authors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
