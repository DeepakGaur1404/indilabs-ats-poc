import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { x: "1", Apr: 11000, May: 10500, Jun: 10000 },
  { x: "2", Apr: 11100, May: 10600, Jun: 10100 },
  { x: "3", Apr: 11200, May: 10700, Jun: 10200 },
  { x: "4", Apr: 12000, May: 11700, Jun: 11200 },
  { x: "5", Apr: 13000, May: 12700, Jun: 12200 },
  { x: "6", Apr: 11100, May: 10600, Jun: 10100 },
  { x: "7", Apr: 11000, May: 10500, Jun: 10000 },
  { x: "8", Apr: 11000, May: 10500, Jun: 10000 },
  { x: "9", Apr: 11100, May: 10600, Jun: 10100 },
  { x: "10", Apr: 11200, May: 10700, Jun: 10200 },
  { x: "11", Apr: 12000, May: 11700, Jun: 11200 },
  { x: "12", Apr: 13000, May: 12700, Jun: 12200 },
  { x: "13", Apr: 11100, May: 10600, Jun: 10100 },
  { x: "14", Apr: 11000, May: 10500, Jun: 10000 },
  { x: "15", Apr: 11000, May: 10500, Jun: 10000 },
  { x: "16", Apr: 11100, May: 10600, Jun: 10100 },
  { x: "17", Apr: 11200, May: 10700, Jun: 10200 },
  { x: "18", Apr: 12000, May: 11700, Jun: 11200 },
  { x: "19", Apr: 13000, May: 12700, Jun: 12200 },
  { x: "20", Apr: 11100, May: 10600, Jun: 10100 },
  { x: "21", Apr: 11000, May: 10500, Jun: 10000 },
  { x: "22", Apr: 11000, May: 10500, Jun: 10000 },
  { x: "23", Apr: 11100, May: 10600, Jun: 10100 },
  { x: "24", Apr: 11200, May: 10700, Jun: 10200 },
  { x: "25", Apr: 12000, May: 11700, Jun: 11200 },
  { x: "26", Apr: 13000, May: 12700, Jun: 12200 },
  { x: "27", Apr: 11100, May: 10600, Jun: 10100 },
  { x: "28", Apr: 11000, May: 10500, Jun: 10000 },
  { x: "29", Apr: 11000, May: 10500, Jun: 10000 },
  { x: "30", Apr: 11100, May: 10600, Jun: 10100 },
];

const colors = ["#4339F2", "#FFB200", "#34B53A"];

const DailyWorkableLine: React.FC = () => {
  return (
    <div className="w-full lg:w-[48%] h-[325px] mt-10 flex flex-col justify-center items-center shadow-md p-3 xl:px-4 rounded-lg bg-white py-3">
      <div className="w-full flex justify-between mt-2 mb-5 gap-3">
        <h1 className="text-center text-black text-base font-medium leading-normal">
          Daily Workable Inventory
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center">
            <div
              className="legend-color rounded-sm"
              style={{
                backgroundColor: "#4169E1",
                width: "10px",
                height: "10px",
                marginRight: "5px",
              }}
            />
            <span>Apr</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color rounded-sm"
              style={{
                backgroundColor: "#FFB200",
                width: "10px",
                height: "10px",
                marginRight: "5px",
              }}
            />
            <span>May</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color rounded-sm"
              style={{
                backgroundColor: "#34B53A",
                width: "10px",
                height: "10px",
                marginRight: "5px",
              }}
            />
            <span>Jun</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="x" fontSize={9} axisLine={false} tickLine={false} />
          <YAxis
            fontSize={10}
            domain={[-1, 1]}
            width={35}
            axisLine={false}
            tickLine={false}
            ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Apr"
            stroke={colors[0]}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="May"
            stroke={colors[1]}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Jun"
            stroke={colors[2]}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyWorkableLine;
