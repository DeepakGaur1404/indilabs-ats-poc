import React from "react";
import rightarrow from "../../assets/images/rightarrow.svg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    B1: 240,
    B2: 150,
  },
  {
    month: "Feb",
    B1: 230,
    B2: 130,
  },
  {
    month: "Mar",
    B1: 260,
    B2: 165,
  },
  {
    month: "Apr",
    B1: 230,
    B2: 130,
  },
  {
    month: "May",
    B1: 230,
    B2: 100,
  },
  {
    month: "Jun",
    B1: 240,
    B2: 120,
  },
  {
    month: "Jul",
    B1: 250,
    B2: 150,
  },
];

const colors = ["#4169E1", "#FFB200"];

const MTDPerformanceRecovery = () => {
  return (
    <div className="w-full xl:w-[48%] ml-3 h-[355px] mt-10 flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3">
        <h1 className="text-start text-black text-base font-medium leading-normal">
          Recovery$
        </h1>
        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7">
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#4169E1",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span>MTD Recovery (Min-Max)</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#FFB200",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span>Target</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="98%" height={270}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          barGap={0}
          barCategoryGap={0}
        >
          <CartesianGrid strokeDasharray="5 5" vertical={false} />
          <XAxis
            dataKey="month"
            fontSize={10}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            fontSize={10}
            domain={[0, 450]}
            width={28}
            tickLine={false}
            axisLine={false}
            ticks={[0, 2.75, 5.5, 8.25, 11]}
            // interval={50}
          />
          <Tooltip />

          <Bar
            dataKey="B1"
            stackId="a"
            fill={colors[0]}
            barSize={10}
            radius={[0, 0, 10, 10]}
          />
          <Bar
            dataKey="B2"
            stackId="a"
            fill={colors[1]}
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MTDPerformanceRecovery;
