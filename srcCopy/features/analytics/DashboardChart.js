import React from "react";
import { Column } from "@ant-design/plots";

const DashboardChart = ({ companyMonthly, companyMonthlyTrips }) => {
  const brandColor = "#2B3674";

  const getMonth = (val) => {
    if (val == 1) return "Jan";
    if (val == 2) return "Feb";
    if (val == 3) return "Mar";
    if (val == 4) return "Apr";
    if (val == 5) return "May";
    if (val == 6) return "Jun";
    if (val == 7) return "Jul";
    if (val == 8) return "Aug";
    if (val == 9) return "Sept";
    if (val == 10) return "Oct";
    if (val == 11) return "Nov";
    if (val == 12) return "Dec";
  };

  const data2 = companyMonthly
    ? companyMonthly?.map((e) => ({
        year: getMonth(e._id.month),
        value: e?.total_earning || e?.trips_count,
      }))
    : [];

  console.log(data2);

  let data = [
    {
      year: "Jan",
      value: 0,
    },
    {
      year: "Feb",
      value: 0,
    },
    {
      year: "Mar",
      value: 0,
    },
    {
      year: "Apr",
      value: 0,
    },
    {
      year: "May",
      value: 0,
    },

    {
      year: "Jun",
      value: 0,
    },
    {
      year: "Jul",
      value: 0,
    },
    {
      year: "Aug",
      value: 0,
    },
    {
      year: "Sept",
      value: 0,
    },
    {
      year: "Oct",
      value: 0,
    },

    {
      year: "Nov",
      value: 0,
    },

    {
      year: "Dec",
      value: 0,
    },
  ];

  data = data.map((obj) => {
    const newDataObj = data2.find((newObj) => newObj.year === obj.year);
    console.log(newDataObj);
    if (newDataObj) {
      return { ...obj, value: newDataObj.value };
    } else {
      return obj;
    }
  });

  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "",
    color: ({ type }) => {
      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
      },
      offset: 10,
    },
    legend: true,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    yAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return (
    <Column
      {...config}
      onReady={(plot) => {
        plot.on("plot:click", (evt) => {
          const { x, y } = evt;
          const { xField } = plot.options;
          const tooltipData = plot.chart.getTooltipItems({ x, y });
        });
      }}
    />
  );
};
export default DashboardChart;
