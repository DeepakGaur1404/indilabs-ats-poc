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
    month: "Jan",
    "1-2": 30,
    "2-3": 15,
    "3-4": 5,
  },
  {
    month: "Feb",
    "1-2": 35,
    "2-3": 18,
    "3-4": 7,
  },
  {
    month: "Mar",
    "1-2": 42,
    "2-3": 20,
    "3-4": 6,
  },
  {
    month: "Apr",
    "1-2": 38,
    "2-3": 22,
    "3-4": 8,
  },
  {
    month: "May",
    "1-2": 45,
    "2-3": 25,
    "3-4": 10,
  },
  {
    month: "Jun",
    "1-2": 50,
    "2-3": 28,
    "3-4": 12,
  },
  {
    month: "Jul",
    "1-2": 55,
    "2-3": 30,
    "3-4": 15,
  },
];

interface DataPoint {
  month: string;
  "1-2": number;
  "2-3": number;
  "3-4": number;
}

interface LineChartProps {
  data: DataPoint[];
}

const ForwardFlowRates: React.FC = () => {
  const formatYAxisTick = (tick: any) => `${tick}%`;

  return (
    <div className="w-full xl:w-[48%] h-[325px] mt-10 rounded-lg py-4 p-3 -mr-2 shadow-md bg-white">
      <div className="w-full flex justify-between px-0 mt-2 mb-3">
        <h1 className="text-center text-black text-base font-medium leading-normal">
          Forward Flow Rates
        </h1>
        <div className="flex items-center flex-wrap gap-3 lg:gap-5">
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
            <span>1-2</span>
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
            <span>2-3</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#34B53A",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span>3-4</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="95%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            fontSize={12}
            axisLine={false}
            tickLine={false}
            padding={{ left: 14 }}
          />
          <YAxis
            fontSize={10}
            domain={[0, "dataMax"]}
            width={25}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxisTick}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="1-2"
            name="1-2"
            stroke="#4169E1"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="2-3"
            name="2-3"
            stroke="#FFB200"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="3-4"
            name="3-4"
            stroke="#34B53A"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForwardFlowRates;
