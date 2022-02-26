using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class offresController : ControllerBase
    {
        private readonly TicketContext _context;

        public offresController(TicketContext context)
        {
            _context = context;
        }

        // GET: api/offres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<offre>>> Getoffre()
        {
            return await _context.offre.ToListAsync();
        }

        // GET: api/offres/5
        [HttpGet("{id}")]
        public async Task<ActionResult<offre>> Getoffre(int id)
        {
            var offre = await _context.offre.FindAsync(id);

            if (offre == null)
            {
                return NotFound();
            }

            return offre;
        }

        // PUT: api/offres/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putoffre(int id, offre offre)
        {
            if (id != offre.idOffre)
            {
                return BadRequest();
            }

            _context.Entry(offre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!offreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/offres
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<offre>> Postoffre(offre offre)
        {
            _context.offre.Add(offre);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getoffre", new { id = offre.idOffre }, offre);
        }

        // DELETE: api/offres/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<offre>> Deleteoffre(int id)
        {
            var offre = await _context.offre.FindAsync(id);
            if (offre == null)
            {
                return NotFound();
            }

            _context.offre.Remove(offre);
            await _context.SaveChangesAsync();

            return offre;
        }

        private bool offreExists(int id)
        {
            return _context.offre.Any(e => e.idOffre == id);
        }
    }
}
