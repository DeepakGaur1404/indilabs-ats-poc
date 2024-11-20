import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Entry $",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Liquidation Rate",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "$Collected",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Residual Risk",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Cost",
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

export default function Performance() {
  const [radarChartName, setradarChartName] = useState("");

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/strategy" || pathname === "/strategy/recovery") {
      setradarChartName("Comparison");
    } else {
      setradarChartName("Performance");
    }
  }, []);

  return (
    <div
      className={`${
        radarChartName === "Comparison"
          ? "xl:w-[49%] min-w-[310px] md:w-[98%] h-[449px] ml-1 xl:ml-6 mt-10"
          : "xl:w-[34%]"
      } min-w-[310px] w-[100%] md:w-[48%] bg-white rounded-xl border-2 overflow-x-auto`}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-[16px] text-[#000000] font-[500] font-['DM Sans' !important] ">
          {radarChartName}
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-[25px] h-[10px] bg-[#8EB5F5] border rounded-xl"></div>
            <div className="text-[13px] font-['calibri' !important]">
              Champion
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[25px] h-[10px] bg-[#A090D5] border rounded-xl"></div>
            <div className="text-[13px] font-['calibri' !important]">
              Challenger
            </div>
          </div>
        </div>
      </div>

      <RadarChart
        cx={300}
        cy={250}
        outerRadius={100}
        width={500}
        height={400}
        data={data}
        className={`${
          radarChartName === "Comparison"
            ? "-mt-[30px] ml-[40px]"
            : "-mt-[100px] -ml-[90px]"
        }`}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          tick={{
            fontSize: 14,
            fill: "#000",
            fontFamily: "calibri",
            fontWeight: 400,
          }}
        />
        {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8FC1F5"
          fill="#8FC1F5"
          fillOpacity={0.6}
          dot={true}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#826CD6"
          fill="#826CD6"
          fillOpacity={0.4}
          dot={true}
        />
        {/* <Legend /> */}
      </RadarChart>
    </div>
  );
}
