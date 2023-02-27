using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonCrudWebAPI.Services.Exceptions.Database;

public class DatabaseNotFoundException : ApplicationException
{
    public DatabaseNotFoundException() { }
    public DatabaseNotFoundException(string message) : base(message) { }
}
