using NUnit.Framework;
using AnglianWaterFloodWarningApi;
using AnglianWaterFloodWarningApi.Controllers;
using Moq;
using Microsoft.Extensions.Logging;
using AnglianWaterFloodWarningApi.Models;
using System.Threading.Tasks;
using System;

namespace AnglianWaterFloodWarningApi.Test
{
    public class FloodControllerUnitTest
    {
        FloodController floodController;
        FloodData floodData;
        [SetUp]
        public void Setup()
        {
            floodData = new FloodData();
        }

        [Test]
        public async Task FloodController_PostFloodData_floodData_is_saved_successfully()
        {
            Mock<ILogger<FloodController>> loggerFactoryMock = new Mock<ILogger<FloodController>>();
            Mock<RepositoryService<FloodData>> repositoryServiceMock = new Mock<RepositoryService<FloodData>>();
            repositoryServiceMock.Setup(x => x.Create(floodData)).Returns(valueFunc);
            floodController = new FloodController(repositoryServiceMock.Object, loggerFactoryMock.Object);
            await floodController.PostFloodData(floodData);
            repositoryServiceMock.Verify(option => option.Create(floodData));
            Assert.Pass();
        }

        private async Task<FloodData> valueFunc()
        {
            return floodData;
        }
    }
}