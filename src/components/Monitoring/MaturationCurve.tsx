import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    Xvalue: "1",
    "1-2": 0.0,
    "2-3": 0.0,
    "3-4": 0.0,
    "4-5": 0.0,
    "5-6": 0.0,
  },
  {
    Xvalue: "2",
    "1-2": 0.1,
    "2-3": 0.08,
    "3-4": 0.06,
    "4-5": 0.03,
    "5-6": 0.02,
  },
  {
    Xvalue: "3",
    "1-2": 0.13,
    "2-3": 0.1,
    "3-4": 0.07,
    "4-5": 0.05,
    "5-6": 0.03,
  },
  {
    Xvalue: "4",
    "1-2": 0.16,
    "2-3": 0.12,
    "3-4": 0.08,
    "4-5": 0.06,
    "5-6": 0.05,
  },
  {
    Xvalue: "5",
    "1-2": 0.2,
    "2-3": 0.14,
    "3-4": 0.1,
    "4-5": 0.08,
    "5-6": 0.07,
  },
  {
    Xvalue: "6",
    "1-2": 0.23,
    "2-3": 0.15,
    "3-4": 0.12,
    "4-5": 0.1,
    "5-6": 0.08,
  },
  {
    Xvalue: "7",
    "1-2": 0.25,
    "2-3": 0.17,
    "3-4": 0.14,
    "4-5": 0.11,
    "5-6": 0.1,
  },
  {
    Xvalue: "8",
    "1-2": 0.28,
    "2-3": 0.19,
    "3-4": 0.15,
    "4-5": 0.13,
    "5-6": 0.12,
  },
  {
    Xvalue: "9",
    "1-2": 0.3,
    "2-3": 0.2,
    "3-4": 0.17,
    "4-5": 0.14,
    "5-6": 0.11,
  },
  {
    Xvalue: "10",
    "1-2": 0.32,
    "2-3": 0.22,
    "3-4": 0.19,
    "4-5": 0.17,
    "5-6": 0.12,
  },
  {
    Xvalue: "11",
    "1-2": 0.34,
    "2-3": 0.24,
    "3-4": 0.21,
    "4-5": 0.18,
    "5-6": 0.13,
  },
  {
    Xvalue: "12",
    "1-2": 0.36,
    "2-3": 0.26,
    "3-4": 0.23,
    "4-5": 0.19,
    "5-6": 0.15,
  },
  {
    Xvalue: "13",
    "1-2": 0.38,
    "2-3": 0.28,
    "3-4": 0.25,
    "4-5": 0.21,
    "5-6": 0.17,
  },
  {
    Xvalue: "14",
    "1-2": 0.4,
    "2-3": 0.3,
    "3-4": 0.27,
    "4-5": 0.23,
    "5-6": 0.19,
  },
  {
    Xvalue: "15",
    "1-2": 0.42,
    "2-3": 0.32,
    "3-4": 0.29,
    "4-5": 0.25,
    "5-6": 0.21,
  },
  {
    Xvalue: "16",
    "1-2": 0.44,
    "2-3": 0.34,
    "3-4": 0.31,
    "4-5": 0.27,
    "5-6": 0.23,
  },
  {
    Xvalue: "17",
    "1-2": 0.46,
    "2-3": 0.36,
    "3-4": 0.33,
    "4-5": 0.29,
    "5-6": 0.25,
  },
  {
    Xvalue: "18",
    "1-2": 0.48,
    "2-3": 0.38,
    "3-4": 0.35,
    "4-5": 0.31,
    "5-6": 0.27,
  },
  {
    Xvalue: "19",
    "1-2": 0.5,
    "2-3": 0.4,
    "3-4": 0.37,
    "4-5": 0.33,
    "5-6": 0.29,
  },
  {
    Xvalue: "20",
    "1-2": 0.52,
    "2-3": 0.42,
    "3-4": 0.39,
    "4-5": 0.35,
    "5-6": 0.31,
  },
  {
    Xvalue: "21",
    "1-2": 0.54,
    "2-3": 0.44,
    "3-4": 0.41,
    "4-5": 0.37,
    "5-6": 0.33,
  },
  {
    Xvalue: "22",
    "1-2": 0.56,
    "2-3": 0.46,
    "3-4": 0.43,
    "4-5": 0.39,
    "5-6": 0.35,
  },
  {
    Xvalue: "23",
    "1-2": 0.58,
    "2-3": 0.48,
    "3-4": 0.45,
    "4-5": 0.41,
    "5-6": 0.37,
  },
  {
    Xvalue: "24",
    "1-2": 0.6,
    "2-3": 0.5,
    "3-4": 0.47,
    "4-5": 0.43,
    "5-6": 0.39,
  },
  {
    Xvalue: "25",
    "1-2": 0.62,
    "2-3": 0.52,
    "3-4": 0.49,
    "4-5": 0.45,
    "5-6": 0.41,
  },
  {
    Xvalue: "26",
    "1-2": 0.64,
    "2-3": 0.54,
    "3-4": 0.51,
    "4-5": 0.47,
    "5-6": 0.43,
  },
  {
    Xvalue: "27",
    "1-2": 0.66,
    "2-3": 0.56,
    "3-4": 0.53,
    "4-5": 0.49,
    "5-6": 0.45,
  },
  {
    Xvalue: "28",
    "1-2": 0.68,
    "2-3": 0.58,
    "3-4": 0.55,
    "4-5": 0.51,
    "5-6": 0.47,
  },
  {
    Xvalue: "29",
    "1-2": 0.7,
    "2-3": 0.6,
    "3-4": 0.57,
    "4-5": 0.53,
    "5-6": 0.49,
  },
  {
    Xvalue: "30",
    "1-2": 0.72,
    "2-3": 0.62,
    "3-4": 0.59,
    "4-5": 0.55,
    "5-6": 0.51,
  },
  {
    Xvalue: "31",
    "1-2": 0.74,
    "2-3": 0.64,
    "3-4": 0.61,
    "4-5": 0.57,
    "5-6": 0.53,
  },
  {
    Xvalue: "32",
    "1-2": 0.76,
    "2-3": 0.66,
    "3-4": 0.63,
    "4-5": 0.59,
    "5-6": 0.55,
  },
  {
    Xvalue: "33",
    "1-2": 0.78,
    "2-3": 0.68,
    "3-4": 0.65,
    "4-5": 0.61,
    "5-6": 0.57,
  },
  {
    Xvalue: "34",
    "1-2": 0.8,
    "2-3": 0.7,
    "3-4": 0.67,
    "4-5": 0.63,
    "5-6": 0.59,
  },
  {
    Xvalue: "35",
    "1-2": 0.82,
    "2-3": 0.72,
    "3-4": 0.69,
    "4-5": 0.65,
    "5-6": 0.61,
  },
  {
    Xvalue: "36",
    "1-2": 0.84,
    "2-3": 0.74,
    "3-4": 0.71,
    "4-5": 0.67,
    "5-6": 0.63,
  },
];
const MaturationCurve = () => {
  return (
    <div className="w-[100%] mt-6 rounded-xl py-3 px-4 shadow bg-white">
      <div className="w-full flex justify-between mb-3">
        <h1 className="text-center text-black text-base font-medium leading-normal">
          Maturation Curve
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#4169E1",
                width: "12.484px",
                height: "12.484px",
                marginRight: "5px",
              }}
            />
            <span>Seg A maturation</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#FFB200",
                width: "12.484px",
                height: "12.484px",
                marginRight: "5px",
              }}
            />
            <span>Seg B maturation</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#5C4E8E",
                width: "12.484px",
                height: "12.484px",
                marginRight: "5px",
              }}
            />
            <span>Seg C maturation</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#34B53A",
                width: "12.484px",
                height: "12.484px",
                marginRight: "5px",
              }}
            />
            <span>Seg D maturation</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#6A7691",
                width: "12.484px",
                height: "12.484px",
                marginRight: "5px",
              }}
            />
            <span>Seg E maturation</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={356}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="Xvalue"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis fontSize={10} width={25} tickLine={false} axisLine={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="1-2"
            name="1-2"
            stroke="#1967D2"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="2-3"
            name="2-3"
            stroke="#FFB200"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="3-4"
            name="3-4"
            stroke="#5C4E8E"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="4-5"
            name="4-5"
            stroke="#34B53A"
            strokeWidth={5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="5-6"
            name="5-6"
            stroke="#6A7691"
            strokeWidth={5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MaturationCurve;
