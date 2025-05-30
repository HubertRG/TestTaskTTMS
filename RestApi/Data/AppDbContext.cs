using RestApi.Models;
using Microsoft.EntityFrameworkCore;

namespace RestApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Phone> Phones { get; set; }
    }
}