using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonCrudWebAPI.Services.Exceptions.Database;

public class DatabaseAlreadyExistsException : ApplicationException
{
    public DatabaseAlreadyExistsException() { }
    public DatabaseAlreadyExistsException(string message) : base(message) { }
}
