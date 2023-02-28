using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonFileCrud.Services.Mapper;

public class DatabaseMapper : Profile
{
    public DatabaseMapper()
    {
        this.CreateMap<Infrastructure.Entitites.Database, Models.Database>().ReverseMap();
    }
}
