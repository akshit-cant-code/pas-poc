using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using InfluxDB.Client;
using System.Text;

namespace InfluxApi.Controllers;

[ApiController]
[Route("[controller]")]
public class InfluxClientController : ControllerBase
{
    private readonly ILogger<InfluxClientController> _logger;

    public InfluxClientController(ILogger<InfluxClientController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetInfluxClient")]
    public async Task<List<ScatterChart>> Get([FromQuery] string query)
    {
        List<ScatterChart> result = new List<ScatterChart>();
        const string token = "ExHMZbplDNEB2lBFJn7MpRPbkC6FcxAvqMLaLCD03j_Fke3swvmwPprSfAKsGlqVBQ5-zeQGml4W4imwE3jXMQ==";
        const string org = "ashish.payal@globallogic.com";

        try
        {
            var influxDBClient = InfluxDBClientFactory.Create("https://us-east-1-1.aws.cloud2.influxdata.com", token);
            // query = @" import ""influxdata/influxdb/sample"" option v = {timeRangeStart: -1h, timeRangeStop: now()} sample.data(set: ""airSensor"") |> range(start: v.timeRangeStart, stop: v.timeRangeStop) |> filter(fn: (r) => r[""_measurement""] == ""airSensors"") |> filter(fn: (r) => r[""_field""] == ""temperature"" or r[""_field""] == ""co"" or r[""_field""] == ""humidity"") ";
            query = @" import ""influxdata/influxdb/sample"" option v = {timeRangeStart: -1d, timeRangeStop: now()} sample.data(set: ""usgs"") |> range(start: v.timeRangeStart, stop: v.timeRangeStop) |> filter(fn: (r) => r[""_measurement""] == ""earthquake"") |> filter(fn: (r) => r[""_field""] == ""depth"" or r[""_field""] == ""nst"" or r[""_field""] == ""sig"" or r[""_field""] == ""gap"" or r[""_field""] == ""lat"") ";
            var queryApi = influxDBClient.GetQueryApi();

            var sensors = await queryApi.QueryAsync<Sensors>(query, org);
            var field = sensors.GroupBy(a => a._field).ToList();

            foreach (var item in field)
            {
                ScatterChart chart = new ScatterChart();

                chart.name = GetMachineName(item.Key);
                chart.data = new List<List<Object>>();
                foreach (var chartdata in item)
                {
                    List<Object> value = new List<Object>();
                    value.Add(chartdata.time);
                    value.Add(chartdata.Value);
                    chart.data.Add(value);
                }
                result.Add(chart);
            }

            influxDBClient.Dispose();
        }
        catch (Exception ex)
        {
            throw ex;
        }
        return result;
    }
    private string GetMachineName(string data)
    {
        if (data == "depth")
            return "Machine 1";
        if (data == "nst")
            return "Machine 2";
        if (data == "sig")
            return "Machine 3";
        if (data == "gap")
            return "Machine 4";
        if (data == "lat")
            return "Machine 5";
        return "Machine1";
    }

}