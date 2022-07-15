using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace InfluxApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class InfluxClientController : ControllerBase
	{
		private readonly ILogger<InfluxClientController> _logger;
		private readonly IHttpClientFactory _httpClientFactory;

		public InfluxClientController(ILogger<InfluxClientController> logger, IHttpClientFactory httpClientFactory)
		{
			_logger = logger;
			_httpClientFactory = httpClientFactory;
		}

		[HttpPost]
		public async Task<IActionResult> Post([FromBody] QueryModel queryModel)
		{

			var orgID = "9f33fd00c2dfd5bc";
			var retentionPolicy = "RP_POC";
			var database = "POC";
			var influxQuery = queryModel.Query;// "select * from airSensors where time > now() - 2d group by *";
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

				switch (queryModel.Graph)
				{
					case "Point":
						{
							List<ScatterChart> result2 = new List<ScatterChart>();
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
							return Ok(result2);
						}
					case "Table":
						{
							break;
						}
					case "Line":
						{
							List<LineChart> result2 = new List<LineChart>();
							if (data != null)
							{
								foreach (var item in data.Take(1))
								{
									LineChart chart2 = new LineChart();
									foreach (var col in item.values)
									{
										chart2.time.Add(col[0]);
										chart2.data.Add(col[2]);
									}

									result2.Add(chart2);
								}
							}
							return Ok(result2);
						}
					case "Pie":
						{
							PieChart result2 = new PieChart();
							if (data != null)
							{

								foreach (var item in data.Take(8))
								{
									List<Object> list = new List<Object>();
									list.Add("value: " + item.values.FirstOrDefault()[2]);
									list.Add("name: " + GetCardSetupForPie(item.tags.sensor_id));
									result2.data.Add(list);
								}

							}
							return Ok(result2);
						}
					case "Bar":
						{
							break;
						}
					case "StackedBar":
						{
							StackedBarChartWrapper result2 = new StackedBarChartWrapper();
							if (data != null)
							{
								foreach (var item in data.Take(3))
								{
									StackedBarChart chart2 = new StackedBarChart();
									chart2.name = GetMachineName(item.tags.sensor_id);
									foreach (var col in item.values)
									{
										if (!result2.time.Contains(col[0]))
										{
											result2.time.Add(col[0]);
										}

										var customList = GenerateCustomListForStackedBar(col, item.tags.sensor_id);
										chart2.data.Add(customList);
									}

									result2.stackedBarData.Add(chart2);
								}
							}
							return Ok(result2);
						}
					case "HeatMap":
						{
							break;
						}
					case "Gauge":
						{
							break;
						}
					default:
						break;
				}
			}
			return null;
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

		private object GenerateCustomListForStackedBar(List<object> allValues, string sensorName)
		{
			switch (sensorName)
			{
				case "TLM0100":
					return allValues[1];
				case "TLM0101":
					return allValues[2];
				case "TLM0102":
					return allValues[3];
				default:
					return allValues[2];
			}
		}
		private string GetMachineName(string data)
		{
			if (data == "TLM0100")
				return "Machine 1";
			if (data == "TLM0101")
				return "Machine 2";
			if (data == "TLM0102")
				return "Machine 3";
			return "Machine 4";
		}

		private string GetCardSetupForPie(string data)
		{
			switch (data)
			{
				case "TLM0100":
					return "CardSetup1";
				case "TLM0101":
					return "CardSetup2";
				case "TLM0102":
					return "CardSetup3";
				case "TLM0103":
					return "CardSetup4";
				case "TLM0200":
					return "CardSetup5";
				case "TLM0201":
					return "CardSetup6";
				case "TLM0202":
					return "Cardsetup7";
				case "TLM0203":
					return "Cardsetup8";
				default:
					return "CardSetup9";
			}
		}

	}
}

