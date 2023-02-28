using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonFileCrud.Infrastructure.Contracts.License;

public interface ILicenseRepository
{
    Task<Entitites.Licence> AddLicenceAsync(Entitites.Licence license);
    Task<Entitites.Licence> UpdateLicenceAsync(Entitites.Licence license);
    Task<Entitites.Licence> DeleteLicenceAsync(int licenseId);
    Task<Entitites.Licence> GetLicenseByIdAsync(int licenseId);
    Task<IEnumerable<Entitites.Licence>> GetAllLicenseAsync();

}
