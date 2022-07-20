namespace InfluxApi
{
    public class NotificationRule
    {
        public NotificationRule()
        {
            statusRules = new List<StatusRule>();
        }
        public string? description { get; set; }
        public string? endpointID { get; set; }
        public string? every { get; set; }
        public string? name { get; set; }
        public string? offset { get; set; }
        public string? orgID { get; set; }
        public string? status { get; set; }
        public List<StatusRule> statusRules { get; set; }
        public string? type { get; set; }
    }

    public class StatusRule
    {
        public string? currentLevel { get; set; }
    }

    public class RulesWrapper
    {
        public List<NotificationRule> notificationRules { get; set; }
    }
}
