using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "offre",
                columns: table => new
                {
                    idOffre = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titre = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Salaire = table.Column<float>(nullable: false),
                    DatePub = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_offre", x => x.idOffre);
                });

            migrationBuilder.CreateTable(
                name: "Ticket",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameT = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    DateT = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    customer = table.Column<string>(nullable: true),
                    Agent = table.Column<string>(nullable: true),
                    ImageName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ticket", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Candidature",
                columns: table => new
                {
                    IdDemande = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nom = table.Column<int>(nullable: false),
                    Email = table.Column<int>(nullable: false),
                    idOffre = table.Column<int>(nullable: false),
                    Date = table.Column<string>(nullable: true),
                    Diplome = table.Column<string>(nullable: true),
                    Competence = table.Column<string>(nullable: true),
                    Experience = table.Column<string>(nullable: true),
                    ConnaissanceLinguistique = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidature", x => x.IdDemande);
                    table.ForeignKey(
                        name: "FK_Candidature_offre_idOffre",
                        column: x => x.idOffre,
                        principalTable: "offre",
                        principalColumn: "idOffre",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Candidature_idOffre",
                table: "Candidature",
                column: "idOffre");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Candidature");

            migrationBuilder.DropTable(
                name: "Ticket");

            migrationBuilder.DropTable(
                name: "offre");
        }
    }
}
