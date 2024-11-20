import React from "react";

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
import { IoIosArrowForward } from "react-icons/io";

const data = [
  {
    month: "Jan",
    Deployed: 30,
    "On Track": 15,
    Delayed: 5,
  },
  {
    month: "Feb",
    Deployed: 35,
    "On Track": 18,
    Delayed: 7,
  },
  {
    month: "Mar",
    Deployed: 42,
    "On Track": 20,
    Delayed: 6,
  },
  {
    month: "Apr",
    Deployed: 38,
    "On Track": 22,
    Delayed: 8,
  },
  {
    month: "May",
    Deployed: 45,
    "On Track": 25,
    Delayed: 10,
  },
  {
    month: "Jun",
    Deployed: 50,
    "On Track": 28,
    Delayed: 12,
  },
  {
    month: "Jul",
    Deployed: 55,
    "On Track": 30,
    Delayed: 15,
  },
  {
    month: "Aug",
    Deployed: 58,
    "On Track": 32,
    Delayed: 16,
  },
  {
    month: "Sep",
    Deployed: 60,
    "On Track": 34,
    Delayed: 18,
  },
  {
    month: "Oct",
    Deployed: 62,
    "On Track": 35,
    Delayed: 20,
  },
  {
    month: "Nov",
    Deployed: 65,
    "On Track": 38,
    Delayed: 22,
  },
  {
    month: "Dec",
    Deployed: 70,
    "On Track": 40,
    Delayed: 25,
  },
];
const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500"];
const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

const BarChartComponent: React.FC = () => {
  return (
    <div className="w-full h-[354px] flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white ">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-black text-sm font-semibold">Strategy Changes</h1>
        <button className="flex text-[#6750a4] items-center text-xs justify-center gap-2">
          Review
          <span>
            <IoIosArrowForward className="text-[#6750a4] w-4 h-4" />
          </span>
        </button>
      </div>
      <ResponsiveContainer width="100%" height={308}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            fontSize={10}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            fontSize={10}
            width={25}
            axisLine={false}
            tickLine={false}
            ticks={[0, 50, 100]}
          />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            iconSize={10}
            iconType="circle"
            formatter={(value, entry, index) => (
              <span
                style={{
                  color: CUSTOM_LEGEND_COLORS[index],
                  marginRight: 5,
                  marginLeft: 0,
                }}
              >
                {value}
              </span>
            )}
          />
          <Bar
            dataKey="Deployed"
            stackId="a"
            fill="#4339F2"
            barSize={8}
            radius={[0, 0, 10, 10]}
          />
          <Bar dataKey="On Track" stackId="a" fill="#FFB200" barSize={8} />
          <Bar
            dataKey="Delayed"
            stackId="a"
            fill="#B7B8C1"
            barSize={8}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
