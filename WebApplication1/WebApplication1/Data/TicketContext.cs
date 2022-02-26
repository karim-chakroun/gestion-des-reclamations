using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class TicketContext : DbContext
    {
        public TicketContext (DbContextOptions<TicketContext> options)
            : base(options)
        {
        }

        public DbSet<WebApplication1.Models.Ticket> Ticket { get; set; }

        public DbSet<WebApplication1.Models.offre> offre { get; set; }

        public DbSet<WebApplication1.Models.Candidature> Candidature { get; set; }
    }
}
