namespace InfluxApi
{
    public class EndpointValues
    {
        public string _check_id { get; set; }
        public string _check_name { get; set; }
        public string _level { get; set; }
        public string _message { get; set; }
        public string _source_measurement { get; set; }
        public long _source_timestamp { get; set; }
        public DateTime _time { get; set; }
        public double humidity { get; set; }
        public string sensor_id { get; set; }
        public string _notification_endpoint_name { get; set; }
    }
}
