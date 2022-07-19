namespace InfluxApi
{
    public class DBConfig
    {
        public DBConfig()
        {
            thresholds = new List<Threshold>();
            query = new Query();
        }

        public string name { get; set; }
        public string orgID { get; set; }
        public Query query { get; set; }
        public string status { get; set; } = "active";
        public string every { get; set; } 
        public string offset { get; set; } 
        public string statusMessageTemplate { get; set; }
        public List<Threshold> thresholds { get; set; }
        public string type { get; set; } = "threshold";
    }
    public class ApiModel
    {
        public string? name { get; set; }
        public string? orgID { get; set; }
        public string? query { get; set; }
        public string? type { get; set; }
        public string? every { get; set; }
        public string? offset { get; set; }
        public string? thresholdType { get; set; }
        public decimal? thresholdValue { get; set; }
        public string? postType { get; set; }
    }

    public class AggregateWindow
    {
        public string period { get; set; }
        public bool fillValues { get; set; }
    }

    public class BuilderConfig
    {
        public BuilderConfig()
        {
            buckets = new List<string>();
            tags = new List<Tag>();
            functions = new List<Function> { new Function() { name = "max" } };
            aggregateWindow = new AggregateWindow() { fillValues = false, period = "1m" };
        }
        public List<string> buckets { get; set; }
        public List<Tag> tags { get; set; }
        public List<Function> functions { get; set; }
        public AggregateWindow aggregateWindow { get; set; }
    }

    public class Function
    {
        public string name { get; set; }
    }

    public class Query
    {
        public Query()
        {
            builderConfig = new BuilderConfig();
        }
        public string editMode { get; set; } = "builder";
        public string name { get; set; }
        public string text { get; set; }
        public BuilderConfig builderConfig { get; set; }
    }



    public class Tag
    {
        public Tag()
        {
            values = new List<string>();
        }
        public string key { get; set; }
        public List<string> values { get; set; }
        public string aggregateFunctionType { get; set; }
    }

    public class Threshold
    {
        public bool allValues { get; set; }
        public string level { get; set; }
        public string type { get; set; }
        public decimal? value { get; set; }
    }




}
