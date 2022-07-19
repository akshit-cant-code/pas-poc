namespace InfluxApi.Store
{
    public interface IMailAddressStore
    {
        void Add(string endpoint, List<string> mailAddress);
        List<string> GetMailAddressList(string endpoint);
    }
}
