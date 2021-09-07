using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital.Data;
using Hospital.Models;

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly HospitalContext _context;

        public PatientsController(HospitalContext context)
        {
            _context = context;
        }

        // GET: api/Patients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatient()
        {
            return await _context.Patient.ToListAsync();
        }

        // GET: api/Patients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatient(Guid id)
        {
            var patient = await _context.Patient.FindAsync(id);

            if (patient == null)
            {
                return NotFound();
            }

            return patient;
        }

        // PUT: api/Patients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatient(Guid id, Patient patient)
        {
            if (id != patient.ID)
            {
                return BadRequest();
            }

            _context.Entry(patient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientExists(id))
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

        // POST: api/Patients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        // public async Task<ActionResult<Patient>> PostPatient(Patient patient)
        //{
        //  _context.Patient.Add(patient);
        //  await _context.SaveChangesAsync();

        //   return CreatedAtAction("GetPatient", new { id = patient.ID }, patient);
        // }

        [HttpPost]
        public async Task PostPatient([FromBody] Patient patient)
        {
            if (patient.ID == Guid.Empty)
            {
                patient.ID = Guid.NewGuid();
            }

            _context.Patient.Add(patient);
            await _context.SaveChangesAsync();

        }

        // DELETE: api/Patients/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeletePatient(Guid id)
        // {
        // var patient = await _context.Patient.FindAsync(id);
        // if (patient == null)
        // {
        //   return NotFound();
        // }

        //_context.Patient.Remove(patient);
        //await _context.SaveChangesAsync();

        // return NoContent();
        //}

        [HttpDelete("{id}")]
        public async Task DeletePatient(Guid id)
        {
            Patient patient = await _context.Patient.FindAsync(id);
            if (patient != null)
            {

                _context.Patient.Remove(patient);
                await _context.SaveChangesAsync();

            }
        }

        private bool PatientExists(Guid id)
        {
            return _context.Patient.Any(e => e.ID == id);
        }
    }
}
