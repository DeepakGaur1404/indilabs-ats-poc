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

interface DataPoint {
  month: string;
  "1-2": number;
  "2-3": number;
  "3-4": number;
}

type PropsType = {
  title: string;
  data: any;
};

const DailyCycleLiquidation = ({ title, data }: any) => {
  const formatYAxisTick = (tick: any) => `${tick}%`;

  return (
    <div className="w-full xl:w-[48%] h-[325px] mt-10 rounded-lg py-4 2xl:p-3 shadow-md bg-white">
      <div className="w-full flex justify-between px-5 mt-2 mb-3 gap-3">
        <h1 className="text-center text-black text-sm 2xl:text-base font-medium leading-normal">
          {title} Cycle Liquidation
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#4169E1",
                width: "10px",
                height: "10px",
                marginRight: "5px",
              }}
            />
            <span className="text-sm">Cycle 1</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#FFB200",
                width: "10px",
                height: "10px",
                marginRight: "5px",
              }}
            />
            <span className="text-sm">Cycle 2</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#5C4E8E",
                width: "10px",
                height: "10px",
                marginRight: "5px",
              }}
            />
            <span className="text-sm">Cycle 3</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#34B53A",
                width: "10px",
                height: "10px",
                marginRight: "5px",
              }}
            />
            <span className="text-sm">Cycle 4</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="95%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="x"
            fontSize={10}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <YAxis
            fontSize={10}
            domain={[0, "dataMax"]}
            width={25}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Cycle 1"
            name="1-2"
            stroke="#4169E1"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Cycle 2"
            name="2-3"
            stroke="#FFB200"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Cycle 3"
            name="3-4"
            stroke="#5C4E8E"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Cycle 4"
            name="3-4"
            stroke="#34B53A"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyCycleLiquidation;
