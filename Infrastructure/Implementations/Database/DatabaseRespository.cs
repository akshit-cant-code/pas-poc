using JsonFileCrud.Infrastructure.Contracts.Database;
using JsonFileCrud.Infrastructure.Entitites;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonFileCrud.Infrastructure.Implementations.Database;

public class DatabaseRespository : IDatabaseRepository
{
    public async Task<Entitites.Database> AddDatabaseAsync(Entitites.Database database)
    {
        var databases = await ReadJsonFile();
        var lastDatabase = databases.LastOrDefault();
        database.DatabaseId = lastDatabase.DatabaseId + 1;
        databases.Add(database);
        var databseJson = JsonConvert.SerializeObject(databases);
        File.WriteAllText(@"D:\My Individual Projects\JsonFileCrud\JsonFileCrud.Infrastructure\Data\MOCK_DATABASE_DATA.json", databseJson);
        return database;
    }

    public Task<Entitites.Database> DeleteDatabaseAsync(int databaseId)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<Entitites.Database>> GetAllDatabasesAsync()
    {
        return await ReadJsonFile();
    }

    public async Task<Entitites.Database> GetDatabaseByIdAsync(int databaseId)
    {
        var databases = await ReadJsonFile();
        return databases.Where(x => x.DatabaseId == databaseId).FirstOrDefault();
    }

    public Task<Entitites.Database> UpdateDatabaseAsync(Entitites.Database database)
    {
        throw new NotImplementedException();
    }

    private static async Task<List<Entitites.Database>> ReadJsonFile()
    {
        var taskCompletion = new TaskCompletionSource<List<Entitites.Database>>();
        using StreamReader reader = new(@"D:\My Individual Projects\JsonFileCrud\JsonFileCrud.Infrastructure\Data\MOCK_DATABASE_DATA.json");
        string json = reader.ReadToEnd();
        List<Entitites.Database> databases = JsonConvert.DeserializeObject<List<Entitites.Database>>(json);
        taskCompletion.SetResult(databases);
        return await taskCompletion.Task;
    }
}
