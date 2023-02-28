using FluentValidation.AspNetCore;
using JsonFileCrud.Infrastructure.Contracts.Database;
using JsonFileCrud.Infrastructure.Contracts.License;
using JsonFileCrud.Infrastructure.Implementations.Database;
using JsonFileCrud.Infrastructure.Implementations.License;
using JsonFileCrud.Services.Contracts.Database;
using JsonFileCrud.Services.Contracts.License;
using JsonFileCrud.Services.Implementations.Database;
using JsonFileCrud.Services.Implementations.License;
using JsonFileCrud.Services.Mapper;
using JsonFileCrud.Services.Validations;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHttpClient();
builder.Services.AddControllers();
builder.Services.AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<LicenseValidator>());
builder.Services.AddSingleton<ILicenseRepository, LicenseRepository>();
builder.Services.AddScoped<ILicenseService, LicenseService>();
builder.Services.AddScoped<IDatabaseRepository, DatabaseRespository>();
builder.Services.AddScoped<IDatabaseService, DatabaseService>();
builder.Services.AddAutoMapper(typeof(LicenseMapper));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.CustomSchemaIds(type => type.ToString());
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "CRUD API",
        Description = "An ASP.NET Core Web API for basic CRUD",
        TermsOfService = new Uri("https://example.com/terms"),
        Contact = new OpenApiContact
        {
            Name = "Udit X",
            Url = new Uri("https://example.com/contact")
        },
        License = new OpenApiLicense
        {
            Name = "Udit Chauhan",
            Url = new Uri("https://example.com/license")
        }
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

app.UseHttpsRedirection();
app.UseCors(options => options.WithOrigins("*").AllowAnyMethod().AllowAnyHeader());
app.UseRouting();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.MapControllers();

app.Run();
