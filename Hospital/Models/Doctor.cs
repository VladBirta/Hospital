using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Models
{
    public class Doctor
    {

        public Guid ID { get; set; }

        public string name { get; set; }

        public string department { get; set; }

        public string vaccinated { get; set; }


    }
}
