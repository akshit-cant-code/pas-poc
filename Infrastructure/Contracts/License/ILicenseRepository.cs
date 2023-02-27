using JsonCrudWebAPI.Infrastructure.Entitites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonCrudWebAPI.Infrastructure.Contracts.License;

public interface ILicenseRepository
{
    Task<Licence> AddLicenceAsync(Licence license);
    Task<Licence> UpdateLicenceAsync(Licence license);
    Task<Licence> DeleteLicenceAsync(int licenseId);
    Task<Licence> GetLicenseByIdAsync(int licenseId);
    Task<IEnumerable<Licence>> GetAllLicenseAsync();

}
