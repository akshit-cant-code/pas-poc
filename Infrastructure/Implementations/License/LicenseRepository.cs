using JsonFileCrud.Infrastructure.Contracts.License;
using JsonFileCrud.Infrastructure.Entitites;
using Newtonsoft.Json;

namespace JsonFileCrud.Infrastructure.Implementations.License;

public class LicenseRepository : ILicenseRepository
{
    public async Task<Licence> AddLicenceAsync(Licence license)
    {
        var licenses = await ReadJsonFile();
        var lastLicense = licenses.LastOrDefault();
        license.LicenceId = lastLicense.LicenceId + 1;
        license.LicenseEdition = "License Edition";
        licenses.Add(license);
        var licensesJson = JsonConvert.SerializeObject(licenses);
        File.WriteAllText(@"D:\My Individual Projects\JsonFileCrud\JsonFileCrud.Infrastructure\Data\MOCK_LICENSE_DATA.json", licensesJson);
        return license;
    }

    public Task<Licence> DeleteLicenceAsync(int licenseId)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<Licence>> GetAllLicenseAsync()
    {
        return await ReadJsonFile();
    }

    public async Task<Licence> GetLicenseByIdAsync(int licenseId)
    {
        var licenses = await ReadJsonFile();
        return licenses.Where(x => x.LicenceId == licenseId).FirstOrDefault();

    }

    public Task<Licence> UpdateLicenceAsync(Licence license)
    {
        throw new NotImplementedException();
    }

    private static async Task<List<Licence>> ReadJsonFile()
    {
        var taskCompletion = new TaskCompletionSource<List<Licence>>();
        using StreamReader reader = new(@"D:\My Individual Projects\JsonFileCrud\JsonFileCrud.Infrastructure\Data\MOCK_LICENSE_DATA.json");
        string json = reader.ReadToEnd();
        List<Licence> licences = JsonConvert.DeserializeObject<List<Licence>>(json);
        taskCompletion.SetResult(licences);
        return await taskCompletion.Task;
    }
}
