import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Label,
  Legend,
} from "recharts";

const COLORS = ["#E5E3ED", "#C9C4D9", "#776BA1"];
const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

type Data = {
  STP: number;
  FCR: number;
  Manual: number;
};

const data: Data = {
  STP: 5,
  FCR: 40,
  Manual: 55,
};

const PieChartComponent: React.FC = () => {
  const dataItems = Object.keys(data).map((key) => ({
    name: key,
    value: data[key as keyof Data],
  }));

  const totalValue = dataItems.reduce((total, item) => total + item.value, 0);

  dataItems.forEach((item) => {
    item.value = (item.value / totalValue) * 100;
  });

  return (
    <div className="w-full h-[350px] flex flex-col justify-start items-center shadow-md px-5  py-3 rounded-lg bg-white  ">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-black text-sm font-semibold">
          Automated Resolutions
        </h1>
        <button className="flex text-[#6750a4] items-center text-xs justify-center gap-2">
          Review
          <span>
            <IoIosArrowForward className="text-[#6750a4] w-4 h-4" />
          </span>
        </button>
      </div>
      <ResponsiveContainer width={250} height={280}>
        <PieChart>
          <Pie
            data={dataItems}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
              const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

              return (
                <text
                  x={x}
                  y={y}
                  fill="black"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                >
                  {`${value.toFixed(0)}%`}
                </text>
              );
            }}
          >
            {dataItems.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
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
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
