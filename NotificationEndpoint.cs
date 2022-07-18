namespace InfluxApi
{
    public class NotificationEndpoint
    {
        public string? id { get; set; }
        public string? name { get; set; }
        public string? orgID { get; set; }
        public string? status { get; set; } = "active";
        public string? type { get; set; } = "http";
        public string? authMethod { get; set; } = "none";
        public string? method { get; set; } = "POST";
        public string? url { get; set; }
    }
    public class EndpointsListWrapper
    {
        public List<NotificationEndpoint> notificationEndpoints { get; set; }
    }
}
