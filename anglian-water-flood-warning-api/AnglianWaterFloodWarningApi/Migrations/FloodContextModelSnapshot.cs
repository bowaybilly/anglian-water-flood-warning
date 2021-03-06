﻿// <auto-generated />
using System;
using AnglianWaterFloodWarningApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AnglianWaterFloodWarningApi.Migrations
{
    [DbContext(typeof(FloodContext))]
    partial class FloodContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AnglianWaterFloodWarningApi.Models.FloodData", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("Created")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(new DateTime(2020, 9, 18, 10, 50, 10, 946, DateTimeKind.Local).AddTicks(1702));

                    b.Property<string>("RequestUrl");

                    b.Property<string>("ResponseBody");

                    b.HasKey("Id");

                    b.ToTable("FloodDatas");
                });
#pragma warning restore 612, 618
        }
    }
}
