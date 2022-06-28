using System.Collections;
public class ScatterChart
{
    public string name { get; set; }
    public string type { get; set; } = "scatter";

    public List<List<Object>> data = new List<List<Object>>();
}