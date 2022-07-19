using System.Collections.Concurrent;

namespace InfluxApi.Store
{
    public class MailAddressStore : IMailAddressStore
    {
        private static ConcurrentDictionary<string, List<string>> _dictionary = new ConcurrentDictionary<string, List<string>>(); 
        public void Add(string endpoint,List<string> mailAddress)
        {
            _dictionary.AddOrUpdate(endpoint, mailAddress, (a, b) => mailAddress);
        }
        public List<string> GetMailAddressList(string endpoint)
        {
            _dictionary.TryGetValue(endpoint, out List<string> mailAddressList);
            return mailAddressList;
        }
    }
}
