using InfluxApi.Store;
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
        private readonly IMailAddressStore _mailStore;
        public DatabaseController(IHttpClientFactory httpClientFactory,IMailAddressStore mailStore)
        {
            _httpClientFactory = httpClientFactory;
            _mailStore = mailStore;
        }
        [HttpPost]
        [Route("Check")]
        public async Task<IActionResult> CreateCheck([FromBody] ApiModel configValues)
        {
            DBConfig postData = new DBConfig();
            postData.name = configValues.name;
            postData.every = configValues.every;
            postData.offset = configValues.offset;
            postData.query.text = configValues.query;
            postData.orgID = "1faf8523c7348c45";
            postData.thresholds.Add(
                new Threshold() { allValues = false, type = configValues.thresholdType, value = configValues.thresholdValue, level = configValues.type });
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
            postData.orgID = "1faf8523c7348c45";
            postData.url = configValues.url;
            var emailList = configValues.email.Split(";");

            _mailStore.Add(configValues.name, emailList.ToList());

            var json = JsonConvert.SerializeObject(postData);

            if (HttpPost(json, @"http://localhost:8086/api/v2/notificationEndpoints").Result)
                return Ok("Success");
            else
                return BadRequest("Creation Failed");
        }

        [HttpPost]
        [Route("NotificationRule")]
        public async Task<IActionResult> CreateNotificationRule([FromBody] NotificationRuleModel configValues)
        {
            NotificationRule postData = new NotificationRule();
            postData.name = configValues.name;
            postData.endpointID = configValues.endPointID;
            postData.orgID = "1faf8523c7348c45";
            postData.type = "http";
            postData.statusRules.Add(new StatusRule { currentLevel = configValues.conditionType });
            postData.status = "active";
            postData.every = configValues.every;
            postData.offset = configValues.offset;
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

                { "Authorization", "Token 183j5EYhmgebr3lzVRHzk4-wehpTynY4Nf9MdWbjasBdLLkldvVjlDbqWTW1CgOKGnogD-reudV_YjbxODCqLQ==" }
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
        public async Task<IActionResult> GetEndpoints()
        {
            var orgID = "1faf8523c7348c45";
            EndpointsListWrapper model = new EndpointsListWrapper();
            try
            {
                var httpRequestMessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        @"http://localhost:8086/api/v2/notificationEndpoints?orgID=" + orgID)
                {
                    Headers =
            {

                { "Authorization", "Token 183j5EYhmgebr3lzVRHzk4-wehpTynY4Nf9MdWbjasBdLLkldvVjlDbqWTW1CgOKGnogD-reudV_YjbxODCqLQ==" }
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

        [HttpGet]
        [Route("RulesList")]
        public async Task<IActionResult> GetRules()
        {
            var orgID = "1faf8523c7348c45";
            RulesWrapper model = new RulesWrapper();
            try
            {
                var httpRequestMessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        @"http://localhost:8086/api/v2/notificationRules?orgID=" + orgID)
                {
                    Headers =
            {

                { "Authorization", "Token 183j5EYhmgebr3lzVRHzk4-wehpTynY4Nf9MdWbjasBdLLkldvVjlDbqWTW1CgOKGnogD-reudV_YjbxODCqLQ==" }
            }

                };


                var httpClient = _httpClientFactory.CreateClient();
                var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

                if (httpResponseMessage.IsSuccessStatusCode)
                {
                    using var contentStream =
                     await httpResponseMessage.Content.ReadAsStreamAsync();

                    model = await System.Text.Json.JsonSerializer.DeserializeAsync<RulesWrapper>(contentStream);
                }
            }
            catch (Exception)
            {


            }
            return Ok(model);

        }

        [HttpGet]
        [Route("ChecksList")]
        public async Task<IActionResult> GetChecks()
        {
            var orgID = "1faf8523c7348c45";
            CheckListWrapper model = new CheckListWrapper();
            try
            {
                var httpRequestMessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        @"http://localhost:8086/api/v2/checks?orgID=" + orgID)
                {
                    Headers =
            {

                { "Authorization", "Token 183j5EYhmgebr3lzVRHzk4-wehpTynY4Nf9MdWbjasBdLLkldvVjlDbqWTW1CgOKGnogD-reudV_YjbxODCqLQ==" }
            }

                };


                var httpClient = _httpClientFactory.CreateClient();
                var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

                if (httpResponseMessage.IsSuccessStatusCode)
                {
                    using var contentStream =
                     await httpResponseMessage.Content.ReadAsStreamAsync();

                    model = await System.Text.Json.JsonSerializer.DeserializeAsync<CheckListWrapper>(contentStream);
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
            if (values._level.ToLower() == "crit")
                SendEmail(values._level, values.humidity,_mailStore.GetMailAddressList(values._notification_endpoint_name));
        }

        private void SendEmail(string level, double? humidity,List<string> mailAddressList)
		{
            if (mailAddressList != null && mailAddressList.Count > 0)
			{
                try
                {
                    InternetAddressList list = new InternetAddressList();
                    foreach (var address in mailAddressList)
                    {
                        list.Add(MailboxAddress.Parse(address));
                    }
                    var email = new MimeMessage();
                    email.From.Add(MailboxAddress.Parse("himanshu.saxena@globallogic.com"));
                    email.To.AddRange(list);
                    email.Subject = "Endpoint Test || PAS POC";
                    email.Body = new TextPart(TextFormat.Plain) { Text = $"This is test email coming from PAS POC team for Http Endpoint testing with level : {level} for humidity : {humidity}" };

                    // send email
                    using var smtp = new SmtpClient();
                    smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                    smtp.Authenticate("himanshu.saxena@globallogic.com", "Real@123");
                    smtp.Send(email);
                    smtp.Disconnect(true);

                }
                catch (Exception)
                {
                }
            }
           
            
        }
    }
}
