using JsonFileCrud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonFileCrud.Services.Contracts.Database;

public interface IDatabaseService
{
    Task<Models.Database> AddDatabaseAsync(Models.Database database);
    Task<Models.Database> UpdateDatabaseAsync(Models.Database database);
    Task<Models.Database> DeleteDatabaseAsync(int databaseId);
    Task<Models.Database> GetDatabaseByIdAsync(int databaseId);
    Task<IEnumerable<Models.Database>> GetAllDatabasesAsync();
}
