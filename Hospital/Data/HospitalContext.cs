using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Hospital.Models;

namespace Hospital.Data
{
    public class HospitalContext : DbContext
    {
        public HospitalContext (DbContextOptions<HospitalContext> options)
            : base(options)
        {
        }

        public DbSet<Hospital.Models.Doctor> Doctor { get; set; }

        public DbSet<Hospital.Models.Patient> Patient { get; set; }

        public DbSet<Hospital.Models.Vaccine> Vaccine { get; set; }
    }
}
