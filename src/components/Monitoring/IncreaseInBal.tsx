// LineChart.tsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "",
  },
  {
    name: "Dec 2021",
    Line1: 0,
    Line2: 0,
    Line3: 0,
    Line4: 0,
    Line5: 0,
    Line6: 0,
  },
  {
    name: "Dec 2022",
    Line1: 9,
    Line2: 11,
    Line3: 12,
    Line4: 13,
    Line5: 22,
    Line6: 27,
  },
];

const IncreaseInBal: React.FC = () => {
  const formatPercent = (tick: any) => `${tick}%`;
  const [hoveredLine, setHoveredLine] = useState<string | null>(null);

  const handleLineMouseOver = (dataKey: string) => {
    setHoveredLine(dataKey);
  };

  const handleLineMouseLeave = () => {
    setHoveredLine(null);
  };

  return (
    <div className="w-[50%] h-[369px] bg-white   pb-3 pl-3 pr-3 ">
      <div className="flex flex-col w-full items-center justify-center mb-7 mt-2 gap-5">
        <h1 className="text-black text-base font-medium font-['DM Sans']">
          Increase in Bal by Risk Tier (YoY)
        </h1>
        <div className="flex flex-col px-2 items-center justify-center  flex-wrap w-full gap-4">
          <div className="flex items-center justify-around w-full">
            <div className="flex items-center ">
              <div
                className="legend-color"
                style={{
                  backgroundColor: "#79747E",
                  width: "13px",
                  height: "13px",
                  marginRight: "5px",
                  borderRadius: "3px",
                }}
              />
              <span className="text-black text-base font-medium font-['DM Sans'] leading-3">
                Super Prime
              </span>
            </div>
            <div className="flex items-center  ">
              <div
                className="legend-color"
                style={{
                  backgroundColor: "#EC0E00",
                  width: "13px",
                  height: "13px",
                  marginRight: "5px",
                  borderRadius: "3px",
                }}
              />
              <span className="text-black text-base font-medium font-['DM Sans'] leading-3">
                Prime Plus
              </span>
            </div>
            <div className="flex items-center  ">
              <div
                className="legend-color"
                style={{
                  backgroundColor: "#6750A4",
                  width: "13px",
                  height: "13px",
                  marginRight: "5px",
                  borderRadius: "3px",
                }}
              />
              <span className="text-black text-base font-medium font-['DM Sans'] leading-3">
                Prime
              </span>
            </div>
          </div>
          <div className="flex items-center justify-around w-full">
            <div className="flex items-center  ">
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
                Near Prime
              </span>
            </div>
            <div className="flex items-center  ">
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
                Sub Prime
              </span>
            </div>
            <div className="flex items-center  ">
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
              <span className="text-black text-base font-medium font-['DM Sans'] leading-3">
                Overall
              </span>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ right: 30, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            fontSize={10}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            fontSize={10}
            width={50}
            tickFormatter={formatPercent}
            axisLine={false}
            tickLine={false}
          >
            <Label
              value="% Increase in avg balance"
              angle={-90}
              position="outside"
              offset={0}
              dx={-25}
              style={{
                textAnchor: "middle",
                fontSize: 16,
                fontStyle: "italic",
              }}
            />
          </YAxis>
          <Tooltip
            content={({ active, label, payload }) => {
              if (active && hoveredLine) {
                const value =
                  payload &&
                  payload.find((entry) => entry.dataKey === hoveredLine)?.value;
                return <div className="custom-tooltip">{value}%</div>;
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="Line1"
            stroke="#8884d8"
            strokeWidth={2}
            radius={0}
            name="Line1"
            onMouseOver={() => handleLineMouseOver("Line1")}
            onMouseLeave={handleLineMouseLeave}
          />
          <Line
            type="monotone"
            dataKey="Line2"
            stroke="#82ca9d"
            strokeWidth={2}
            radius={0}
            name="Line2"
            onMouseOver={() => handleLineMouseOver("Line2")}
            onMouseLeave={handleLineMouseLeave}
          />
          <Line
            type="monotone"
            dataKey="Line3"
            stroke="#82ca9d"
            strokeWidth={2}
            radius={0}
            name="Line3"
            onMouseOver={() => handleLineMouseOver("Line3")}
            onMouseLeave={handleLineMouseLeave}
          />
          <Line
            type="monotone"
            dataKey="Line4"
            stroke="#ffc658"
            strokeDasharray="3 3"
            strokeWidth={2}
            radius={0}
            name="Line4"
            onMouseOver={() => handleLineMouseOver("Line4")}
            onMouseLeave={handleLineMouseLeave}
          />
          <Line
            type="monotone"
            dataKey="Line5"
            stroke="#6a7b7e"
            strokeWidth={2}
            radius={0}
            name="Line5"
            onMouseOver={() => handleLineMouseOver("Line5")}
            onMouseLeave={handleLineMouseLeave}
          />
          <Line
            type="monotone"
            dataKey="Line6"
            stroke="#ffcc00"
            strokeWidth={2}
            radius={0}
            name="Line6"
            onMouseOver={() => handleLineMouseOver("Line6")}
            onMouseLeave={handleLineMouseLeave}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncreaseInBal;
