using Microsoft.AspNetCore.Razor.Language;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnglianWaterFloodWarningApi.Models
{
    public class FloodContext:DbContext
    {
        public FloodContext(DbContextOptions<FloodContext>  dbContextOptions):base(dbContextOptions)
        {

        }
        
        public DbSet<FloodData> FloodDatas { get; set; }
        
    }
}
