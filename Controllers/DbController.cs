using JsonCrudWebAPI.Models;
using JsonCrudWebAPI.Services.Contracts.Database;
using JsonCrudWebAPI.Services.Exceptions.Database;
using Microsoft.AspNetCore.Mvc;

namespace InfluxApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DbController : ControllerBase
    {
        private readonly IDatabaseService databaseService;
        private readonly ILogger<DbController> logger;
        public DbController(IDatabaseService databaseService, ILogger<DbController> logger)
        {
            this.databaseService = databaseService;
            this.logger = logger;
        }

        /// <summary>
        /// Gets all databases asynchronously
        /// </summary>
        /// <returns>List<Database></returns>.
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("/api/jsonDbs")]
        public async Task<ActionResult<List<Database>>> GetAllDatabaseAsync()
        {
            if (!ModelState.IsValid)
            {
                logger.LogError("There is some error");
                return BadRequest("There is some error");
            }
            try
            {
                var databaseList = await databaseService.GetAllDatabasesAsync();
                return Ok(databaseList);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return NotFound(ex.Message);
            }
        }

        /// <summary>
        /// Get Database by id asynchronously
        /// </summary>
        /// <param name="databaseId"></param>
        /// <returns>Database</returns>
        [HttpGet]
        [ProducesResponseType(statusCode: 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("/api/jsonDb/{databaseId}")]
        public async Task<ActionResult<Database>> GetDatabaseByIdAsync(int databaseId)
        {
            if (!ModelState.IsValid)
            {
                logger.LogError("There is some error");
                return BadRequest("There is some error");
            }
            try
            {
                var database = await databaseService.GetDatabaseByIdAsync(databaseId);
                return Ok(database);
            }
            catch (DatabaseNotFoundException ex)
            {
                logger.LogError(ex.Message);
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return NotFound(ex.Message);
            }
        }


        /// <summary>
        /// Adds Database Asynchronously
        /// </summary>
        /// <param name="database"></param>
        /// <returns>Database</returns>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        [Route("/api/jsonDb")]
        public async Task<ActionResult<Database>> AddDatabaseAsync([FromBody] Database database)
        {
            if (!ModelState.IsValid)
            {
                logger.LogError("Invalid Database object sent from client.");
                return new BadRequestObjectResult(ModelState);
            }
            try
            {
                var databaseModel = await databaseService.AddDatabaseAsync(database);
                if (databaseModel != null)
                {
                    logger.LogInformation($"New database with {database.DatabaseId} created");
                    return Created("/api/database", databaseModel);
                }
                return BadRequest("Unable to add Database");
            }
            catch (DatabaseAlreadyExistsException ex)
            {
                logger.LogError(ex.Message);
                return Conflict(ex.Message);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return Conflict(ex.Message);
            }
        }



    }
}
