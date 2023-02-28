using JsonFileCrud.Models;

namespace JsonFileCrud.Services.Contracts.License;

public interface ILicenseService
{
    Task<Licence> AddLicenceAsync(Licence license);
    Task<Licence> UpdateLicenceAsync(Licence license);
    Task<Licence> DeleteLicenceAsync(Licence license);
    Task<Licence> GetLicenseByIdAsync(int licenseId);
    Task<IEnumerable<Licence>> GetAllLicenseAsync();

}
