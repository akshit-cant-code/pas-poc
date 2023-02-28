using JsonFileCrud.Models;
using JsonFileCrud.Services.Contracts.License;
using JsonFileCrud.Services.Exceptions.License;
using Microsoft.AspNetCore.Mvc;

namespace JsonFileCrud.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LicenseController : ControllerBase
{
    private readonly ILicenseService licenseService;
    private readonly ILogger<LicenseController> logger;

    public LicenseController(ILicenseService licenseService, ILogger<LicenseController> logger)
    {
        this.licenseService = licenseService;
        this.logger = logger;
    }

    /// <summary>
    /// Gets all licenses asynchronously
    /// </summary>
    /// <returns>List<License></returns>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Route("/api/licenses")]
    public async Task<ActionResult<List<Licence>>> GetAllLicenseAsync()
    {
        if (!ModelState.IsValid)
        {
            this.logger.LogError("There is some error");
            return BadRequest("There is some error");
        }
        try
        {
            var licenseList = await this.licenseService.GetAllLicenseAsync();               
            return Ok(licenseList);
        }
        catch (Exception ex)
        {
            this.logger.LogError(ex.Message);
            return NotFound(ex.Message);
        }
    }

    /// <summary>
    /// Get License by id asynchronously
    /// </summary>
    /// <param name="licenseId"></param>
    /// <returns>License</returns>
    [HttpGet]
    [ProducesResponseType(statusCode: 200)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Route("/api/license/{licenseId}")]
    public async Task<ActionResult<Licence>> GetLicenseByIdAsync(int licenseId)
    {
        if (!ModelState.IsValid)
        {
            this.logger.LogError("There is some error");
            return BadRequest("There is some error");
        }
        try
        {
            var license = await licenseService.GetLicenseByIdAsync(licenseId);                
            return Ok(license);
        }
        catch (LicenseNotFoundException ex)
        {
            this.logger.LogError(ex.Message);
            return NotFound(ex.Message);
        }
        catch (Exception ex)
        {
            this.logger.LogError(ex.Message);
            return NotFound(ex.Message);
        }
    }


    /// <summary>
    /// Adds License Asynchronously
    /// </summary>
    /// <param name="license"></param>
    /// <returns>License</returns>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status409Conflict)]
    [Route("/api/license")]
    public async Task<ActionResult<Licence>> AddLicenseAsync([FromBody] Licence license)
    {
        if (!ModelState.IsValid)
        {
            this.logger.LogError("Invalid License object sent from client.");
            return new BadRequestObjectResult(ModelState);
        }
        try
        {
            var licenseModel =  await licenseService.AddLicenceAsync(license);
            if (licenseModel != null)
            {
                logger.LogInformation($"New License with {license.LicenceId} created");
                return Created("/api/license", licenseModel);
            }
            return BadRequest("Unable to add License");
        }
        catch(LicenseAlreadyExistsException ex)
        {
            logger.LogError(ex.Message);
            return Conflict(ex.Message);
        }
        catch(Exception ex)
        {
            logger.LogError(ex.Message);
            return Conflict(ex.Message);
        }
    }
}
