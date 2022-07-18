using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;
using Newtonsoft.Json;
using System.Text;

namespace InfluxApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DatabaseController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public DatabaseController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        [HttpPost]
        [Route("Check")]
        public async Task<IActionResult> CreateCheck([FromBody] ApiModel configValues)
        {
            DBConfig postData = new DBConfig();
            postData.name = configValues.name;
            postData.orgID = "79652bcd0afaf280";
            postData.thresholds.Add(
                new Threshold() { allValues = false, type = "greater", value = 35, level = configValues.type });
            postData.query.builderConfig.buckets.Add("POC");
            Tag postTag1 = new Tag { key = "_measurement", values = new List<string> { "airSensors" }, aggregateFunctionType = "filter" };
            Tag postTag2 = new Tag { key = "_field", values = new List<string> { "humidity" }, aggregateFunctionType = "filter" };
            Tag postTag3 = new Tag { key = "sensor_id", values = new List<string>(), aggregateFunctionType = "filter" };
            postData.query.builderConfig.tags.Add(postTag1);
            postData.query.builderConfig.tags.Add(postTag2);
            postData.query.builderConfig.tags.Add(postTag3);
            var json = JsonConvert.SerializeObject(postData);

            if (HttpPost(json, @"http://localhost:8086/api/v2/checks").Result)
                return Ok("Success");
            else
                return BadRequest("Creation Failed");
        }

        [HttpPost]
        [Route("NotificationEndpoint")]
        public async Task<IActionResult> CreateNotificationEndpoint([FromBody] NotificationEndpoint configValues)
        {
            NotificationEndpoint postData = new NotificationEndpoint();
            postData.name = configValues.name;
            postData.orgID = "79652bcd0afaf280";
            postData.url = configValues.url;

            var json = JsonConvert.SerializeObject(postData);

            if (HttpPost(json, @"http://localhost:8086/api/v2/notificationEndpoints").Result)
                return Ok("Success");
            else
                return BadRequest("Creation Failed");
        }

        [HttpPost]
        [Route("NotificationRule")]
        public async Task<IActionResult> CreateNotificationRule([FromBody] NotificationRule configValues)
        {
            NotificationRule postData = new NotificationRule();
            postData.name = configValues.name;
            postData.endpointID = configValues.endpointID;
            postData.orgID = "79652bcd0afaf280";
            postData.type = "http";
            postData.statusRules.Add(new StatusRule { currentLevel = "CRIT" });
            postData.status = "active";
            postData.every = "10m";
            //
            var json = JsonConvert.SerializeObject(postData);
            if (HttpPost(json, @"http://localhost:8086/api/v2/notificationRules").Result)
                return Ok("Success");
            else
                return BadRequest("Creation Failed");


        }

        private async Task<bool> HttpPost(string json, string url)
        {
            var response = false;
            try
            {
                var httpRequestMessage = new HttpRequestMessage(
                        HttpMethod.Post,
                        url)
                {
                    Headers =
            {

                { "Authorization", "Token _ABiC-uU5Nd0CQ9WlwKN_c2S7esianEwVAq8FZ4iC74EbnMF8ucgh39XdwX-T-XiZBbPpQQESSfpBrwIrsMXfg==" }
            },
                    Content = new StringContent(json.ToString(), Encoding.UTF8, "application/json")

                };


                var httpClient = _httpClientFactory.CreateClient();
                var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

                if (httpResponseMessage.IsSuccessStatusCode)
                {
                    response = true;
                }
            }
            catch (Exception)
            {

                response = false;
            }
            return response;

        }
        [HttpGet]
        [Route("EndpointsList")]
        public async Task<IActionResult> HttpGet()
        {
            var orgID = "79652bcd0afaf280";
            EndpointsListWrapper model = new EndpointsListWrapper();
            try
            {
                var httpRequestMessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        @"http://localhost:8086/api/v2/notificationEndpoints?orgID=" + orgID)
                {
                    Headers =
            {

                { "Authorization", "Token _ABiC-uU5Nd0CQ9WlwKN_c2S7esianEwVAq8FZ4iC74EbnMF8ucgh39XdwX-T-XiZBbPpQQESSfpBrwIrsMXfg==" }
            }

                };


                var httpClient = _httpClientFactory.CreateClient();
                var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

                if (httpResponseMessage.IsSuccessStatusCode)
                {
                    using var contentStream =
                     await httpResponseMessage.Content.ReadAsStreamAsync();

                    model = await System.Text.Json.JsonSerializer.DeserializeAsync<EndpointsListWrapper>(contentStream);
                }
            }
            catch (Exception)
            {


            }
            return Ok(model);

        }

        [HttpPost]
        [Route("Mail")]
        public void Mail([FromBody] EndpointValues values)
        {
            if (values._check_name == "CRIT")
                SendEmail(values._check_name, values.humidity);
        }

        private void SendEmail(string level, double? humidity)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("himanshu.saxena@globallogic.com"));
            email.To.Add(MailboxAddress.Parse("ashish.payal@globallogic.com"));
            email.Subject = "Endpoint Test || PAS POC";
            email.Body = new TextPart(TextFormat.Plain) { Text = $"This is test email coming from PAS POC team for Http Endpoint testing with level : {level} for humidity : {humidity}" };

            // send email
            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("himanshu.saxena@globallogic.com", "Real@123");
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
