using System.Collections;
public class ScatterChart
{
    public string name { get; set; }
    public string type { get; set; } = "scatter";

    public int symbolSize { get; set; } = 5;

    public List<List<Object>> data = new List<List<Object>>();
}