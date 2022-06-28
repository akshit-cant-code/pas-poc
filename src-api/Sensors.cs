namespace InfluxApi
{
    public class Sensors
    {

        public String Type = "scatter";

        public String _field { get; set; }

        public double Value { get; set; }

        public DateTime time { get; set; }

    }
}