namespace InfluxApi
{
	public class LineChart
	{
		public List<Object> time { get; set; }
		public List<Object> data { get; set; }

		public LineChart()
		{
			time = new List<Object>();
			data = new List<Object>();
		}

	}
}
