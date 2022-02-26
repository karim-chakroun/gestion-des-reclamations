using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Candidature
    {
        [Key]
        public int IdDemande { get; set; }
        public string nom { get; set; }
        public string Email { get; set; }
        public int idOffre { get; set; }
        public string Date { get; set; }

        public string Diplome { get; set; }
        public string Description { get; set; }
        public string Cv { get; set; }

        public string Competence { get; set; }

        public string Experience { get; set; }
        public string ConnaissanceLinguistique { get; set; }
        public string Status { get; set; }
        [ForeignKey("idOffre")]
        public offre offre { get; set; }
    }
}
