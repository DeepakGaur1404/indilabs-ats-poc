// import React from "react";
import { PieChart, Pie, Cell } from "recharts";

// const data01 = [
//   { name: "Group A", value: 400, fill: "#254B91" },
//   { name: "Group B", value: 300, fill: "#EDCB50" },
//   { name: "Group C", value: 300, fill: "gray" },
//   { name: "Group D", value: 200, fill: "#F78C05" }
// ];
// const data02 = [
//   { name: "A1", value: 100, fill: "#254B91" },
//   { name: "A2", value: 300, fill: "#EDCB50" },
//   { name: "B1", value: 100, fill: "gray" },
//   { name: "B2", value: 80, fill: "#F78C05" },

// ];
// const data03 = [
//   { name: "Category X", value: 150, fill: "#254B91" },
//   { name: "Category Y", value: 250, fill: "#EDCB50" },
//   { name: "Category Z", value: 100, fill: "gray" },
//   { name: "Category Z", value: 100, fill: "#F78C05" },
// ];

const data01 = [
  { name: "Group A", value: 25, fill: "#254B91" },
  { name: "Group B", value: 25, fill: "#EDCB50" },
  { name: "Group C", value: 25, fill: "gray" },
  { name: "Group D", value: 25, fill: "#F78C05" },
];
const data02 = [
  { name: "A1", value: 100, fill: "#254B91" },
  { name: "A2", value: 300, fill: "#EDCB50" },
  { name: "B1", value: 100, fill: "gray" },
  { name: "B2", value: 80, fill: "#F78C05" },
];
const data03 = [
  { name: "Category X", value: 150, fill: "#254B91" },
  { name: "Category Y", value: 250, fill: "#EDCB50" },
  { name: "Category Z", value: 100, fill: "gray" },
  { name: "Category Z", value: 100, fill: "#F78C05" },
];

// const COLORS = ["#254B91", "#EDCB50", "gray", "#F78C05"];
const COLORS = ["#4472C4", "#FFC011", "#A5A5A5", "#ED7D30"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      style={{
        fontFamily: "calibri",
        fontWeight: "bold",
        fontSize: "14px",
        fill: "black",
        textAnchor: "middle",
        dominantBaseline: "middle",
      }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function DCAVolumeSharePieChart({
  bucketName,
  selectedCity,
}: any) {
  return (
    <div className="w-[100%] h-[447px] overflow-x-auto p-5 mt-10 shadow-md bg-white flex flex-col justify-start items-start lg:w-[49%] lg:items-center rounded-2xl">
      <div className="flex items-center gap-2">
        <h1 className=" text-gray-500 text-2xl font-['calibri']  font-[400] leading-8 mb-1">
          Location Volume Share
        </h1>
        <div className="pt-0 pb-0 pl-4 pr-4 font-['calibri'] border-2 border-gray-400 rounded text-lg font-medium text-blue-500">
          {bucketName}
        </div>
        <div className="pt-0 pb-0 pl-5 pr-5 font-['calibri'] border-2 border-gray-400 rounded text-lg font-medium text-blue-500">
          {selectedCity}
        </div>
      </div>
      <div className="flex items-center -mt-5 ">
        {/* <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={40}
            outerRadius={60}
            fill="#82ca9d"
          
          />
          
          <Pie
            data={data02}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={65}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
          <Pie
            data={data03}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={95}
            outerRadius={120}
            fill="#82ca9d"
            label
          />
        </PieChart> */}
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="41%"
            innerRadius="26%"
            fill="#8884d8"
            dataKey="value"
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={data02}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="58%"
            innerRadius="41%"
            fill="#8884d8"
            dataKey="value"
          >
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={data02}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="77%"
            innerRadius="58%"
            fill="#8884d8"
            dataKey="value"
          >
            {data03.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="flex flex-col gap-2">
          <div className="min-w-[80px] flex items-center gap-2">
            <div className="bg-[#4472C4] w-[13px] h-[13px] border"></div>
            <div className="text-gray-600  font-medium text-[12px]">
              Location 1
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#FFC011] w-[13px] h-[13px] border"></div>
            <div className="text-gray-600 font-medium text-[12px]">
              Location 2
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#A5A5A5] w-[13px] h-[13px] border"></div>
            <div className="text-gray-600 font-medium text-[12px]">
              Location 3
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#ED7D30] w-[13px] h-[13px] border"></div>
            <div className="text-gray-600 font-medium text-[12px]">
              Location 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
