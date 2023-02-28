using AutoMapper;
using JsonFileCrud.Infrastructure.Contracts.License;
using JsonFileCrud.Models;
using JsonFileCrud.Services.Contracts.License;
using JsonFileCrud.Services.Exceptions.License;

namespace JsonFileCrud.Services.Implementations.License;

public class LicenseService : ILicenseService
{
    private readonly ILicenseRepository licenseRepository;
    private readonly IMapper mapper;

    public LicenseService(ILicenseRepository licenseRepository, IMapper mapper)
    {
        this.licenseRepository = licenseRepository;
        this.mapper = mapper;
    }

    public async Task<Licence> AddLicenceAsync(Licence license)
    {
        ModelNullValidate(license);
        var licenseEntity = MapLicense(license);
        if (licenseEntity != null)
        {
            licenseEntity = await licenseRepository.AddLicenceAsync(licenseEntity);
            return mapper.Map<Licence>(licenseEntity);
        }
        throw new LicenseAlreadyExistsException($"A License with {license.LicenceId} already exists");
    }

    public Task<Licence> DeleteLicenceAsync(Licence license)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<Licence>> GetAllLicenseAsync()
    {
        var licenseEntityList = await licenseRepository.GetAllLicenseAsync();
        return mapper.Map<List<Licence>>(licenseEntityList);
    }

    public async Task<Licence> GetLicenseByIdAsync(int licenseId)
    {
        var licenseEntity = await licenseRepository.GetLicenseByIdAsync(licenseId);
        if (licenseEntity == null)
            throw new LicenseNotFoundException($"A license with {licenseId} does not exist");
        return mapper.Map<Licence>(licenseEntity);
    }

    public Task<Licence> UpdateLicenceAsync(Licence license)
    {
        throw new NotImplementedException();
    }

    private static void ModelNullValidate(Licence licence)
    {
        if (licence == null)
            throw new ArgumentException("Invalid License Details");
    }

    private Infrastructure.Entitites.Licence MapLicense(Licence licence) => mapper.Map<Infrastructure.Entitites.Licence>(licence);
}
