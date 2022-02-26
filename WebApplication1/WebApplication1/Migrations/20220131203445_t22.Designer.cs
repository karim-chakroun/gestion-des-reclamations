﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplication1.Data;

namespace WebApplication1.Migrations
{
    [DbContext(typeof(TicketContext))]
    [Migration("20220131203445_t22")]
    partial class t22
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.21")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebApplication1.Models.Candidature", b =>
                {
                    b.Property<int>("IdDemande")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Competence")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ConnaissanceLinguistique")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Diplome")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Experience")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("idOffre")
                        .HasColumnType("int");

                    b.Property<string>("nom")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdDemande");

                    b.HasIndex("idOffre");

                    b.ToTable("Candidature");
                });

            modelBuilder.Entity("WebApplication1.Models.Ticket", b =>
                {
                    b.Property<int?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Agent")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DateT")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NameT")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("customer")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Ticket");
                });

            modelBuilder.Entity("WebApplication1.Models.offre", b =>
                {
                    b.Property<int>("idOffre")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DatePub")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("Salaire")
                        .HasColumnType("real");

                    b.Property<string>("Titre")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idOffre");

                    b.ToTable("offre");
                });

            modelBuilder.Entity("WebApplication1.Models.Candidature", b =>
                {
                    b.HasOne("WebApplication1.Models.offre", "offre")
                        .WithMany("Candidatures")
                        .HasForeignKey("idOffre")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
