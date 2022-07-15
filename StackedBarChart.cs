namespace InfluxApi
{
	public class StackedBarChart
	{
		public string name;
		public List<Object> data;

		public StackedBarChart()
		{
			data = new List<Object>();
		}
	}

	public class StackedBarChartWrapper
	{
		public List<Object> time;
		public List<StackedBarChart> stackedBarData;
		public StackedBarChartWrapper()
		{
			time = new List<Object>();
			stackedBarData = new List<StackedBarChart>();
		}
	}
}
