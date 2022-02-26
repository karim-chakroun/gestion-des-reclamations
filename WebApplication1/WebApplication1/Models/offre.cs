using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class offre
    {
        [Key]
        public int idOffre { get; set; }
        public string Titre { get; set; }
        public string Description { get; set; }
        public  float Salaire{ get; set; }
        public string DatePub{ get; set; }
        public virtual IList<Candidature> Candidatures { get; set; }
    }
}
