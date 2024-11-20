import React from "react";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { IoIosArrowForward } from "react-icons/io";

const data = [
  {
    month: "Super Primes",
    cost: 2,
    liquidated: 4,
    roi: 95,
  },
  {
    month: "Prime Plus",
    cost: 4,
    liquidated: 8,
    roi: 97,
  },
  {
    month: "Prime",
    cost: 2,
    liquidated: 10,
    roi: 106,
  },
  {
    month: "Near Prime",
    cost: 4,
    liquidated: 8,
    roi: 78,
  },
  {
    month: "Subprime",
    cost: 2,
    liquidated: 10,
    roi: 80,
  },
  {
    month: "Overall",
    cost: 4,
    liquidated: 12,
    roi: 102,
  },
];

// const customYAxisTicks = [0, 2, 4, 6, 8, 10, 12];
const colors = ["#FFB200", "#4339F2", "#FF7A00"];
const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

const RiskLineBarChart: React.FC = () => {
  return (
    <div className="w-[50%] h-[369px] bg-white  pb-3 pl-3 pr-3 ">
      <div className="flex justify-between w-full items-center mb-7 mt-2">
        <h1 className="text-black text-base font-medium font-['DM Sans']">
          Avg Balance by Risk Tier (YoY)
        </h1>
        <div className="flex items-center gap-2 first-letter:lg:gap-3">
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
            <span className="text-black text-base font-medium font-['DM Sans'] leading-3">
              Jun 2022
            </span>
          </div>
          <div className="flex items-center ml-5">
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
            <span className="text-black text-base font-medium font-['DM Sans'] leading-3">
              Jul 2022
            </span>
          </div>
        </div>
        {/* <button className="flex text-[#6750a4] items-center text-xs justify-center gap-2">
          Review
          <span>
            <IoIosArrowForward className="text-[#6750a4] w-4 h-4" />
          </span>
        </button> */}
      </div>
      <ResponsiveContainer width="100%" height={308}>
        <ComposedChart
          data={data}
          margin={{ top: 20, bottom: 5 }}
          barGap={0}
          barCategoryGap={0}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            fontSize={10}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            fontSize={10}
            tickLine={false}
            width={50}
            axisLine={false}
            ticks={[0, 2, 4, 6, 8, 10, 12]}
          >
            <Label
              value="Avg Balance"
              angle={-90}
              position="outside"
              offset={0}
              dx={-15}
              style={{
                textAnchor: "middle",
                fontSize: 16,
                fontStyle: "italic",
              }}
            />
          </YAxis>
          <Tooltip />
          {/* s */}

          <Bar
            dataKey="liquidated"
            stackId="b"
            fill={colors[0]}
            barSize={12}
            shape={(props:any) => <rect {...props} rx={6} ry={6} />}
          />
          <Bar
            dataKey="cost"
            stackId="a"
            fill={colors[1]}
            barSize={12}
            shape={(props:any) => <rect {...props} rx={6} ry={6} />}
          />

          {/* <Line
            type="monotone"
            dataKey="roi"
            stroke="#FF7A00"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskLineBarChart;
