import { Column } from "@ant-design/plots";
import React from "react";
import ReactDOM from "react-dom";

const DoubleBars = () => {
  const config = {
    data: [
      {
        name: "Unverified Product",
        月份: "Jan.",
        月均降雨量: 18.9,
      },
      {
        name: "Unverified Product",
        月份: "Feb.",
        月均降雨量: 28.8,
      },
      {
        name: "Unverified Product",
        月份: "Mar.",
        月均降雨量: 39.3,
      },
      {
        name: "Unverified Product",
        月份: "Apr.",
        月均降雨量: 81.4,
      },
      {
        name: "Unverified Product",
        月份: "May",
        月均降雨量: 47,
      },
      {
        name: "Unverified Product",
        月份: "Jun.",
        月均降雨量: 20.3,
      },
      {
        name: "Unverified Product",
        月份: "Jul.",
        月均降雨量: 24,
      },
      {
        name: "Unverified Product",
        月份: "Aug.",
        月均降雨量: 35.6,
      },
      {
        name: "Verified Product",
        月份: "Jan.",
        月均降雨量: 12.4,
      },
      {
        name: "Verified Product",
        月份: "Feb.",
        月均降雨量: 23.2,
      },
      {
        name: "Verified Product",
        月份: "Mar.",
        月均降雨量: 34.5,
      },
      {
        name: "Verified Product",
        月份: "Apr.",
        月均降雨量: 99.7,
      },
      {
        name: "Verified Product",
        月份: "May",
        月均降雨量: 52.6,
      },
      {
        name: "Verified Product",
        月份: "Jun.",
        月均降雨量: 35.5,
      },
      {
        name: "Verified Product",
        月份: "Jul.",
        月均降雨量: 37.4,
      },
      {
        name: "Verified Product",
        月份: "Aug.",
        月均降雨量: 42.4,
      },
    ],
    xField: "月份",
    yField: "月均降雨量",
    colorField: "name",
    group: true,
    style: {
      // 矩形四个方向的内边距
      inset: 5,
      // 矩形单个方向的内边距
      // insetLeft:5,
      // insetRight:20,
      // insetBottom:10
      // insetTop:10
    },
  };
  return <Column {...config} />;
};

export default DoubleBars;
