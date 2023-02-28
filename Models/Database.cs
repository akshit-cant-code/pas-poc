using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonFileCrud.Models;
    public class Database
    {
        /// <summary>
        /// Gets or sets DatabaseId
        /// </summary>
        public int DatabaseId { get; set; }

        /// <summary>
        /// Gets or sets ServerHost
        /// </summary>

        public string ServerHost { get; set; }

        /// <summary>
        /// Gets or sets ServerPort
        /// </summary>

        public int ServerPort { get; set; }

        /// <summary>
        /// Gets or sets UseTLS
        /// </summary>

        public bool UseTLS { get; set; }

        /// <summary>
        /// Gets or sets Token
        /// </summary>

        public string Token { get; set; }
    }
