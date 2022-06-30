using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using InfluxDB.Client;
using System.Text;
using Microsoft.Net.Http.Headers;
using System.Text.Json;

namespace InfluxApi.Controllers;

[ApiController]
[Route("[controller]")]
public class InfluxClientController : ControllerBase
{
    private readonly ILogger<InfluxClientController> _logger;
    private readonly IHttpClientFactory _httpClientFactory;

    public InfluxClientController(ILogger<InfluxClientController> logger, IHttpClientFactory httpClientFactory)
    {
        _logger = logger;
        _httpClientFactory = httpClientFactory;
    }

    [HttpGet(Name = "GetInfluxClient")]
    public async Task<List<ScatterChart>> Get([FromQuery] string query)
    {


        //List<ScatterChart> result = new List<ScatterChart>();
        //const string token = "ExHMZbplDNEB2lBFJn7MpRPbkC6FcxAvqMLaLCD03j_Fke3swvmwPprSfAKsGlqVBQ5-zeQGml4W4imwE3jXMQ==";
        //const string org = "ashish.payal@globallogic.com";

        //try
        //{
        //    var influxDBClient = InfluxDBClientFactory.Create("https://us-east-1-1.aws.cloud2.influxdata.com", token);
        //    query = @" import ""influxdata/influxdb/sample"" option v = {timeRangeStart: -1h, timeRangeStop: now()} sample.data(set: ""airSensor"") |> range(start: v.timeRangeStart, stop: v.timeRangeStop) |> filter(fn: (r) => r[""_measurement""] == ""airSensors"") |> filter(fn: (r) => r[""_field""] == ""temperature"" or r[""_field""] == ""co"" or r[""_field""] == ""humidity"") ";
        //    var queryApi = influxDBClient.GetQueryApi();

        //    var sensors = await queryApi.QueryAsync<Sensors>(query, org);
        //    var field = sensors.GroupBy(a => a._field).ToList();

        //    foreach (var item in field)
        //    {
        //        ScatterChart chart = new ScatterChart();

        //        chart.name = GetMachineName(item.Key);
        //        chart.data = new List<List<Object>>();
        //        foreach (var chartdata in item)
        //        {
        //            List<Object> value = new List<Object>();
        //            value.Add(chartdata.time);
        //            value.Add(chartdata.Value);
        //            chart.data.Add(value);
        //        }
        //        result.Add(chart);
        //    }

        //    influxDBClient.Dispose();
        //}
        //catch (Exception ex)
        //{
        //    throw ex;
        //}






        //----------------Test--------------
        List<ScatterChart> result2 = new List<ScatterChart>();
        var orgID = "9f33fd00c2dfd5bc";
        var retentionPolicy = "RP_POC";
        var database = "POC";
        var influxQuery = query;// "select * from airSensors where time > now() - 2d group by *";
        var httpRequestMessage = new HttpRequestMessage(
           HttpMethod.Get,
           @"https://us-east-1-1.aws.cloud2.influxdata.com/query?orgID=" + orgID + "&db=" + database + "&retention_policy=" + retentionPolicy + "&q=" + influxQuery)
        {
            Headers =
            {

                { "Authorization", "Token ExHMZbplDNEB2lBFJn7MpRPbkC6FcxAvqMLaLCD03j_Fke3swvmwPprSfAKsGlqVBQ5-zeQGml4W4imwE3jXMQ==" }
            }
        };

        var httpClient = _httpClientFactory.CreateClient();
        var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

        if (httpResponseMessage.IsSuccessStatusCode)
        {
            using var contentStream =
                await httpResponseMessage.Content.ReadAsStreamAsync();

            var model = await JsonSerializer.DeserializeAsync<Sensors>(contentStream);
            var data = model?.results.Select(a => a.series).FirstOrDefault();



            if (data != null)
            {
                foreach (var item in data.Take(3))
                {
                    ScatterChart chart2 = new ScatterChart();
                    chart2.data = new List<List<Object>>();
                    chart2.name = GetMachineName(item.tags.sensor_id);
                    foreach (var col in item.values)
                    {

                        var customList = GenerateCustomList(col, item.tags.sensor_id);


                        chart2.data.Add(customList);



                    }

                    result2.Add(chart2);
                }
            }


        }







        //----------------End---------------

        return result2;
    }

    private List<object> GenerateCustomList(List<object> allValues, string sensorName)
    {
        List<Object> list = new List<Object>();
        list.Add(allValues[0]);
        switch (sensorName)
        {

            case "TLM0100":
                list.Add(allValues[1]);
                break;

            case "TLM0101":
                list.Add(allValues[2]);
                break;

            case "TLM0102":
                list.Add(allValues[3]);
                break;


        }

        return list;
    }
    private string GetMachineName(string data)
    {
        if (data == "TLM0100")
            return "Machine 1";
        if (data == "TLM0101")
            return "Machine 2";
        if (data == "TLM0102")
            return "Machine 3";
        return "Machine1";
    }

}