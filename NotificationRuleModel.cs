namespace InfluxApi
{
    public class NotificationRuleModel
    {
        public string? name { get; set; }
        public string? endPointID { get; set; }
        public string? every { get; set; }
        public string? offset { get; set; }
        public string? conditionType { get; set; }
    }
}
