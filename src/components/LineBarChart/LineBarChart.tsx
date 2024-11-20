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
} from "recharts";
import { IoIosArrowForward } from "react-icons/io";

const data = [
  {
    month: "Jan",
    cost: 30,
    liquidated: 15,
    roi: 95,
  },
  {
    month: "Feb",
    cost: 35,
    liquidated: 18,
    roi: 97,
  },
  {
    month: "Mar",
    cost: 42,
    liquidated: 20,
    roi: 106,
  },
  {
    month: "Apr",
    cost: 38,
    liquidated: 22,
    roi: 78,
  },
  {
    month: "May",
    cost: 45,
    liquidated: 25,
    roi: 80,
  },
  {
    month: "Jun",
    cost: 50,
    liquidated: 28,
    roi: 102,
  },
];

const colors = ["#FFB200", "#4339F2", "#FF7A00"];
const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

const LineBarChart: React.FC = () => {
  return (
    <div className="w-full h-[354px] bg-white rounded-lg shadow-md p-3">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-black text-sm font-semibold">
          Return on Investment
        </h1>
        <button className="flex text-[#6750a4] items-center text-xs justify-center gap-2">
          Review
          <span>
            <IoIosArrowForward className="text-[#6750a4] w-4 h-4" />
          </span>
        </button>
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
          <YAxis fontSize={10} tickLine={false} width={20} axisLine={false} />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            iconSize={10}
            iconType="circle"
            formatter={(value, entry, index) => (
              <span
                style={{
                  color: CUSTOM_LEGEND_COLORS[index],
                  marginRight: 10,
                  marginLeft: 5,
                }}
              >
                {index === 0 ? `$Cost` : index === 1 ? `$Liquidated` : `RoI`}
              </span>
            )}
          />

          <Bar
            dataKey="liquidated"
            stackId="b"
            fill={colors[0]}
            barSize={8}
            shape={(props:any) => <rect {...props} rx={4} ry={4} />}
          />
          <Bar
            dataKey="cost"
            stackId="a"
            fill={colors[1]}
            barSize={8}
            shape={(props:any) => <rect {...props} rx={4} ry={4} />}
          />

          <Line
            type="monotone"
            dataKey="roi"
            stroke="#FF7A00"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineBarChart;
