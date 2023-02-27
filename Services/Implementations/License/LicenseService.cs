using AutoMapper;
using JsonCrudWebAPI.Infrastructure.Contracts.License;
using JsonCrudWebAPI.Infrastructure.Entitites;
using JsonCrudWebAPI.Models;
using JsonCrudWebAPI.Services.Contracts.License;
using JsonCrudWebAPI.Services.Exceptions.License;

namespace JsonCrudWebAPI.Services.Implementations.License;

public class LicenseService : ILicenseService
{
    private readonly ILicenseRepository licenseRepository;
    private readonly IMapper mapper;

    public LicenseService(ILicenseRepository licenseRepository, IMapper mapper)
    {
        this.licenseRepository = licenseRepository;
        this.mapper = mapper;
    }

    public async Task<Models.Licence> AddLicenceAsync(Models.Licence license)
    {
        ModelNullValidate(license);
        var licenseEntity = MapLicense(license);
        if (licenseEntity != null)
        {
            licenseEntity = await licenseRepository.AddLicenceAsync(licenseEntity);
            return mapper.Map<Models.Licence>(licenseEntity);
        }
        throw new LicenseAlreadyExistsException($"A License with {license.LicenceId} already exists");
    }

    public Task<Models.Licence> DeleteLicenceAsync(Models.Licence license)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<Models.Licence>> GetAllLicenseAsync()
    {
        var licenseEntityList = await licenseRepository.GetAllLicenseAsync();
        return mapper.Map<List<Models.Licence>>(licenseEntityList);
    }

    public async Task<Models.Licence> GetLicenseByIdAsync(int licenseId)
    {
        var licenseEntity = await licenseRepository.GetLicenseByIdAsync(licenseId);
        if (licenseEntity == null)
            throw new LicenseNotFoundException($"A license with {licenseId} does not exist");
        return mapper.Map<Models.Licence>(licenseEntity);
    }

    public Task<Models.Licence> UpdateLicenceAsync(Models.Licence license)
    {
        throw new NotImplementedException();
    }

    private static void ModelNullValidate(Models.Licence licence)
    {
        if (licence == null)
            throw new ArgumentException("Invalid License Details");
    }

    private Infrastructure.Entitites.Licence MapLicense(Models.Licence licence) => mapper.Map<Infrastructure.Entitites.Licence>(licence);
}
