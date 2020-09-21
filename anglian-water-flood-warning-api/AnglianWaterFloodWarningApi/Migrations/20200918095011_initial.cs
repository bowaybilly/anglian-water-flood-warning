using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AnglianWaterFloodWarningApi.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FloodDatas",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RequestUrl = table.Column<string>(nullable: true),
                    ResponseBody = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: true, defaultValue: new DateTime(2020, 9, 18, 10, 50, 10, 946, DateTimeKind.Local).AddTicks(1702))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FloodDatas", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FloodDatas");
        }
    }
}
