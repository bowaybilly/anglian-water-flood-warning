# Anglian water flooding application
## Frontend
 UI/UX
  - Designed and developed frontend using Angular 9
  - Material Design components for Angular was used to provide visual appeal
 

Architecture
 - I used DRY principles for creating frontend components and services. 
 - Test framework used was jasmine and karma

Libraries used
 - Angular material 
 - ng-Bootstrap and Bootstrap

## Backend
- Aspnet core 2.2  and Microsoft EntityFrameWork 2.2.0
`

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
`

### How application works
When application starts

1. Application loads all flood warnings within the UK. 
2. All locations within the UK are loaded.
3. Location can be selected by entering location name to filter and then selecting location  of interest.
3. As data changes every 15 minutes, you have the option of refreshing loaded data.
![image](https://user-images.githubusercontent.com/44766686/93723388-17222000-fb96-11ea-994b-8be0bc12728e.png)

