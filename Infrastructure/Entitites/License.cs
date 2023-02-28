using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonFileCrud.Infrastructure.Entitites;

public class Licence
{

    /// <summary>
    /// Gets or sets LicenceId
    /// </summary>
    public int LicenceId { get; set; }

    /// <summary>
    /// Gets or sets ServerIP
    /// </summary>
    public string ServerIP { get; set; }

    /// <summary>
    /// Gets or sets ProductKey
    /// </summary>

    public string ProductKey { get; set; }


    /// <summary>
    /// Gets or sets LicenceEdition
    /// </summary>
    public string LicenseEdition { get; set; }
}


