using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonFileCrud.Services.Exceptions.License;

public class LicenseNotFoundException : ApplicationException
{
    public LicenseNotFoundException() { }
    public LicenseNotFoundException(string message) : base(message) { }
}
