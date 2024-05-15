import React from 'react';
import { Area } from '@ant-design/plots';
// import { Area } from '@ant-design/charts';

const BasicAreaChart = () => {
  // Sample data for the chart
  const data = [
    { year: 'Monday', value: 0 },
    { year: 'Tuesday', value: 3 },
    { year: 'Wednesday', value: 4 },
    { year: 'Thursday', value: 3.5 },
    { year: 'Friday', value: 5 },
    { year: 'Saturday', value: 4.9 },
    { year: 'Sunday', value: 6 },
  ];

  // Configuration options for the chart
  const config = {
    data: data,
    xField: 'year',
    yField: 'value',
    // height: 400,
    point: {
      size: 5,
      shape: 'diamond'
    },
    autoFit: true
  };

  return <Area {...config} />;
};

export default BasicAreaChart;
