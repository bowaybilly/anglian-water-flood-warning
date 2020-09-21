using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnglianWaterFloodWarningApi.Models
{
    /// <summary>
    /// Used repository pattern to wrap all my models that will be performing CRUD 
    /// operations
    /// </summary>
    /// <typeparam name="T">Model type</typeparam>
    public class RepositoryService<T> where T:class
    {
        private readonly FloodContext floodContext;
        public RepositoryService()
        {

        }
        public RepositoryService(FloodContext floodContext)
        {
            this.floodContext = floodContext;
        }
        /// <summary>
        /// Creates a new entity by persisting data
        /// </summary>
        /// <param name="data">data to save</param>
        /// <returns></returns>
        public virtual async Task<T> Create(T data)
        {
            this.floodContext.Add(data);
            this.floodContext.SaveChanges();
            return data;
        }
        public async Task<IQueryable<T>> GetAll(T data)
        {
            return this.floodContext.Set<T>().AsQueryable();
        }
    }
}
