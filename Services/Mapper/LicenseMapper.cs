using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonFileCrud.Services.Mapper;

public class LicenseMapper : Profile
{
    public LicenseMapper()
    {
        this.CreateMap<Infrastructure.Entitites.Licence, Models.Licence>().ReverseMap();
    }
}
