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
    public class CandidaturesController : ControllerBase
    {
        private readonly TicketContext _context;

        public CandidaturesController(TicketContext context)
        {
            _context = context;
        }

        // GET: api/Candidatures
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidature>>> GetCandidature()
        {
            return await _context.Candidature.ToListAsync();
        }

        // GET: api/Candidatures/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Candidature>> GetCandidature(int id)
        {
            var candidature = await _context.Candidature.FindAsync(id);

            if (candidature == null)
            {
                return NotFound();
            }

            return candidature;
        }

        // PUT: api/Candidatures/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidature(int id, Candidature candidature)
        {
            if (id != candidature.IdDemande)
            {
                return BadRequest();
            }

            _context.Entry(candidature).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidatureExists(id))
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

        // POST: api/Candidatures
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Candidature>> PostCandidature(Candidature candidature)
        {
            _context.Candidature.Add(candidature);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCandidature", new { id = candidature.IdDemande }, candidature);
        }

        // DELETE: api/Candidatures/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Candidature>> DeleteCandidature(int id)
        {
            var candidature = await _context.Candidature.FindAsync(id);
            if (candidature == null)
            {
                return NotFound();
            }

            _context.Candidature.Remove(candidature);
            await _context.SaveChangesAsync();

            return candidature;
        }

        private bool CandidatureExists(int id)
        {
            return _context.Candidature.Any(e => e.IdDemande == id);
        }
    }
}
