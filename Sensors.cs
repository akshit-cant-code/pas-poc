namespace InfluxApi
{
    public class Sensors
    {

        public String Type = "scatter";

        public String _field { get; set; }

        public double Value { get; set; }

        public DateTime time { get; set; }
        public List<Result> results { get; set; }

    }
    public class Result
    {
        public int statement_id { get; set; }
        public List<Series> series { get; set; }
    }

    public class Tags
    {
        public string sensor_id { get; set; }
    }

    public class Series
    {
        public string name { get; set; }
        public Tags tags { get; set; }
        public List<string> columns { get; set; }
        public List<List<object>> values { get; set; }
    }


}