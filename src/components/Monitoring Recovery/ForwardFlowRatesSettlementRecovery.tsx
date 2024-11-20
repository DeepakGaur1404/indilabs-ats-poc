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
    "1-2": 18,
    "2-3": 29,
    "3-4": 48,
  },
  {
    month: "Feb",
    "1-2": 19,
    "2-3": 34,
    "3-4": 44,
  },
  {
    month: "Mar",
    "1-2": 20,
    "2-3": 35,
    "3-4": 41,
  },
  {
    month: "Apr",
    "1-2": 25,
    "2-3": 35,
    "3-4": 40,
  },
  {
    month: "May",
    "1-2": 29,
    "2-3": 37,
    "3-4": 40,
  },
  {
    month: "Jun",
    "1-2": 22,
    "2-3": 35,
    "3-4": 41,
  },
  {
    month: "Jul",
    "1-2": 29,
    "2-3": 36,
    "3-4": 49,
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

const ForwardFlowRatesSettlementRecovery: React.FC = () => {
  const formatYAxisTick = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick}%`;
    }
  };

  return (
    <div className="w-full xl:w-[48%] h-[325px] mt-10 rounded-lg py-4 p-3 -mr-2 shadow-md bg-white">
      <div className="w-full flex justify-between px-0 mt-2 mb-3">
        <h1 className="text-center text-[16px] font-[500] text-[#000000] font-['DM Sans']">
          % Recovery
        </h1>
        <div className="flex items-center flex-wrap gap-3 lg:gap-5">
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#6F91EA",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              &lt;6
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#2e25e7",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              6-12
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#50ac3e",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              12-18
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#f4b133",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              18-24
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#e87634",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              24-30
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#929292",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              36+
            </span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ left: 14, right: 7, top: 7 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            fontWeight={400}
            fontSize={12}
            fontFamily="DM Sans"
            fill={"#3B414B"}
            axisLine={false}
            tickLine={false}
            padding={{ left: 25, right: 25 }}
          />
          <YAxis
            fontWeight={400}
            fontSize={11}
            fontFamily="DM Sans"
            fill={"#3B414B"}
            domain={[0, 70]}
            // padding={{ top: 10 }}
            width={25}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxisTick}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
            interval={0}
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

export default ForwardFlowRatesSettlementRecovery;
