using RestApi.Data;
using RestApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneController : ControllerBase
    {
        private readonly AppDbContext _db;
        public PhoneController(AppDbContext db) => _db = db;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Phone>>> Get() =>
            await _db.Phones.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Phone>> Get(int id)
        {
            var phone = await _db.Phones.FindAsync(id);
            if (phone == null) return NotFound();
            return phone;
        }

        [HttpPost]
        public async Task<ActionResult<Phone>> Post(Phone p)
        {
            _db.Phones.Add(p);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = p.Id }, p);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Phone p)
        {
            if (id != p.Id) return BadRequest();
            _db.Entry(p).State = EntityState.Modified;
            await _db.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var phone = await _db.Phones.FindAsync(id);
            if (phone == null) return NotFound();
            _db.Phones.Remove(phone);
            await _db.SaveChangesAsync();
            return NoContent();
        }
    }

}