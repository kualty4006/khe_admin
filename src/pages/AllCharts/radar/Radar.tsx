import React from "react";
import ReactApexChart from "react-apexcharts";

const Radar = () => {
  const series = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ];
  const options = {
    chart: {
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.2,
    },
    markers: {
      size: 0,
    },
    colors: ["#038edc", "#5FD0F5", "#51d28c"],
    xaxis: {
      categories: ["2014", "2015", "2016", "2017", "2018", "2019"],
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        height={350}
      />
    </React.Fragment>
  );
};

export default Radar;
