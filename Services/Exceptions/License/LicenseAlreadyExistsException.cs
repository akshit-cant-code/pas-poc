using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonCrudWebAPI.Services.Exceptions.License;

public class LicenseAlreadyExistsException : ApplicationException
{
    public LicenseAlreadyExistsException() { }
    public LicenseAlreadyExistsException(string message) : base(message) { }
}
