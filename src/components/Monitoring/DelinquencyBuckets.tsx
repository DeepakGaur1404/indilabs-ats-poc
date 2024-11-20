import React from "react";
import rightarrow from "../../assets/images/rightarrow.svg";

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

const data = [
  {
    month: "Jan",
    B1: 30,
    B2: 15,
    B3: 95,
    B4: 64,
    B5: 73,
    B6: 87,
  },
  {
    month: "Feb",
    B1: 35,
    B2: 18,
    B3: 97,
    B4: 64,
    B5: 73,
    B6: 87,
  },
  {
    month: "Mar",
    B1: 42,
    B2: 20,
    B3: 106,
    B4: 64,

    B5: 73,
    B6: 87,
  },
  {
    month: "Apr",
    B1: 38,
    B2: 22,
    B3: 78,
    B4: 64,
    B5: 73,
    B6: 87,
  },
  {
    month: "May",
    B1: 45,
    B2: 25,
    B3: 80,
    B4: 64,
    B5: 73,
    B6: 87,
  },
  {
    month: "Jun",
    B1: 50,
    B2: 28,
    B3: 102,
    B4: 64,

    B5: 73,
    B6: 87,
  },
  {
    month: "Jul",
    B1: 50,
    B2: 28,
    B3: 102,
    B4: 64,

    B5: 73,
    B6: 87,
  },
];

const colors = [
  "#6F91EA",
  "#4339F2",
  "#34B53A",
  "#FFB200",
  "#FA7B33",
  "#909090",
];

const DelinquencyBuckets: React.FC = () => {
  return (
    <div className="w-full xl:w-[48%] ml-3 h-[325px] mt-10 flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3 mt-5">
        <h1 className="text-start text-black text-base font-medium leading-normal">
          Delinquency Buckets
        </h1>
        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7">
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
            <span>B1</span>
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
            <span>B2</span>
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
            <span>B3</span>
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
            <span>B4</span>
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
            <span>B5</span>
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
            <span>B6</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="7 7" vertical={false} />
          <XAxis
            dataKey="month"
            fontSize={10}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            fontSize={10}
            domain={[0, "dataMax"]}
            width={28}
            tickLine={false}
            axisLine={false}
            ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
          />
          <Tooltip />

          <Bar
            dataKey="B1"
            stackId="a"
            fill={colors[0]}
            barSize={10}
            radius={[0, 0, 10, 10]}
          />
          <Bar dataKey="B2" stackId="a" fill={colors[1]} barSize={10} />
          <Bar dataKey="B3" stackId="a" fill={colors[2]} barSize={10} />
          <Bar dataKey="B4" stackId="a" fill={colors[3]} barSize={10} />
          <Bar dataKey="B5" stackId="a" fill={colors[4]} barSize={10} />
          <Bar
            dataKey="B6"
            stackId="a"
            fill={colors[5]}
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DelinquencyBuckets;
