using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class mcv : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cv",
                table: "Candidature",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Candidature",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cv",
                table: "Candidature");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Candidature");
        }
    }
}
