using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonCrudWebAPI.Infrastructure.Contracts.Database;

public interface IDatabaseRepository
{
    Task<Entitites.Database> AddDatabaseAsync(Entitites.Database database);
    Task<Entitites.Database> UpdateDatabaseAsync(Entitites.Database database);
    Task<Entitites.Database> DeleteDatabaseAsync(int databaseId);
    Task<Entitites.Database> GetDatabaseByIdAsync(int databaseId);
    Task<IEnumerable<Entitites.Database>> GetAllDatabasesAsync();
}
