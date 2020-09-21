using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnglianWaterFloodWarningApi.Models
{
    public class FloodData
    {
        public long Id { get; set; }
        public string RequestUrl { get; set; }
        public string ResponseBody { get; set; }
        public DateTime? Created { get; set; }
    }
}
