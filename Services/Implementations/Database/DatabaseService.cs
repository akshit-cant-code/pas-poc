using AutoMapper;
using JsonFileCrud.Infrastructure.Contracts.Database;
using JsonFileCrud.Services.Contracts.Database;
using JsonFileCrud.Services.Exceptions.Database;

namespace JsonFileCrud.Services.Implementations.Database;

public class DatabaseService : IDatabaseService
{
    private readonly IDatabaseRepository databaseRepository;
    private readonly IMapper mapper;

    public DatabaseService(IDatabaseRepository databaseRepository, IMapper mapper)
    {
        this.databaseRepository = databaseRepository;
        this.mapper = mapper;
    }

    public async Task<Models.Database> AddDatabaseAsync(Models.Database database)
    {
        ModelNullValidate(database);
        var databaseEntity = MapDatabase(database);
        if (databaseEntity != null)
        {
            databaseEntity = await databaseRepository.AddDatabaseAsync(databaseEntity);
            return mapper.Map<Models.Database>(databaseEntity);
        }
        throw new DatabaseAlreadyExistsException($"A Database with {database.DatabaseId} already exists");
    }

    public Task<Models.Database> DeleteDatabaseAsync(int databaseId)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<Models.Database>> GetAllDatabasesAsync()
    {
        var databaseEntityList = await databaseRepository.GetAllDatabasesAsync();
        return mapper.Map<List<Models.Database>>(databaseEntityList);
    }

    public async Task<Models.Database> GetDatabaseByIdAsync(int databaseId)
    {
        var databaseEntity = await databaseRepository.GetDatabaseByIdAsync(databaseId);
        if (databaseEntity == null)
            throw new DatabaseNotFoundException($"A database with {databaseId} does not exist");
        return mapper.Map<Models.Database>(databaseEntity);
    }

    public Task<Models.Database> UpdateDatabaseAsync(Models.Database database)
    {
        throw new NotImplementedException();
    }

    private static void ModelNullValidate(Models.Database database)
    {
        if (database == null)
            throw new ArgumentException("Invalid database details");
    }

    private Infrastructure.Entitites.Database MapDatabase(Models.Database database) => mapper.Map<Infrastructure.Entitites.Database>(database);
}
