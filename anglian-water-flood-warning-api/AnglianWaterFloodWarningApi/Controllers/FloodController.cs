using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnglianWaterFloodWarningApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AnglianWaterFloodWarningApi.Controllers
{

    /// <summary>
    /// Explicit routing strategy used to cater for versioning later in app lifecycle
    /// </summary>
    [Route("api/v1/flood")]
    [ApiController]
    public class FloodController : ControllerBase
    {
        private readonly RepositoryService<FloodData> repositoryService;
        private readonly ILogger<FloodController> loggerFactory;
         
        public FloodController(RepositoryService<FloodData>  repositoryService,ILogger<FloodController> loggerFactory)
        {
            this.repositoryService = repositoryService;
            this.loggerFactory = loggerFactory;
        }
        //POST api/v1/flood/data
        [HttpPost("data")]
        public async Task<ActionResult<bool>> PostFloodData([FromBody] FloodData floodData){

            if (!ModelState.IsValid)
            {
                loggerFactory.LogError("Bad flood data sent in request");
                return BadRequest(floodData);
            }
            else
            {
                loggerFactory.LogError("Successfully saved flood data");
                floodData.Created = DateTime.Now;
                var response=repositoryService.Create(floodData);
            }
            return true;
        }
    }


     

}
