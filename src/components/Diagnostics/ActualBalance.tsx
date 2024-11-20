import React, { PureComponent } from "react";
import { BarChart } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from "recharts";

interface ActualBalanceProps {
  selectedSegment: string;
  data:any;
}



const getColorBySubSegment = [ "#FFB200","#4169E1"];

const formatYAxisTick = (tick: any) => {
  if (tick === 0) {
    return `${tick}`;
  } else {
    return `${tick}`;
  }
};
const ActualBalance: React.FC<ActualBalanceProps> = ({ selectedSegment, data }) => {
  const segmentData = data[selectedSegment as keyof typeof data]?.balances;
  const xAxisLabels = data[selectedSegment as keyof typeof data]?.xaxis || [];

  const chartData = segmentData
    ? Object.keys(segmentData["medium/high"]).map((key, index) => ({
        name: xAxisLabels[index]
          ?.replace("interest_rate", "Int rate")
          .replace("loan_amount", "Loan amnt")
          .replace("loan_term", "Loan term")
          .replace("_woe", "")
          .replace(/_/g, " ")
          .trim() || "",
        Low: segmentData.low[index],
        "Medium/High": segmentData["medium/high"][index],
      }))
    : [];

    const arrTicks: any = (chartData: any[]): number[] => {
      const maxNum = chartData.length
        ? Math.max(
            ...chartData.flatMap(item =>
              Object.values(item).filter(value => typeof value === "number") as number[]
            )
          )
        : 0;
    
      const numberOfTicks = 6;
      const stepSize = maxNum / numberOfTicks;
      const arr = Array.from({ length: numberOfTicks + 1 }, (_, i) => parseFloat((i * stepSize).toFixed(1)));
    
      return arr;
    };
    
  const formatNumberMillion = (num: number) => {
    return num >= 1e6 ? (num / 1e6).toFixed(2) : "0";
  };

  return (
    <div className="w-[100%] xl:w-[49%] border-[#E3E3E3] border-[1px] h-[321px] bg-white rounded-xl py-4 px-3 gap-3">
      <div className="flex justify-between">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
          Actual Balances (millions)
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{ backgroundColor: getColorBySubSegment[0], width: "12.48px", height: "12.48px", marginRight: "5px", borderRadius: "3px" }}
            />
            <span className="text-[13px] font-[400] text-[#000000] font-['DM Sans']">L</span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{ backgroundColor: getColorBySubSegment[1], width: "12.48px", height: "12.48px", marginRight: "5px", borderRadius: "3px" }}
            />
            <span className="text-[13px] font-[400] text-[#000000] font-['DM Sans']">H/M</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="99%" height={280}>
        <BarChart data={chartData} margin={{ top: 20, right: 5, left: 5, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            interval={0} // Ensures each label is displayed without skipping
            fontWeight={400}
            fontFamily="DM Sans"
            fontSize={11}
            fill="#3B414B"
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            angle={-70}
            dx={-4}
            textAnchor="end"
          />
          <YAxis
            fontWeight={400}
            fontSize={9}
            fill="#3E4259"
            fontFamily="DM Sans"
            domain={[0, "dataMax"]}
            ticks={arrTicks(chartData)}
            width={35}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatNumberMillion}
          />
          <Tooltip formatter={(value: any) => `₹ ${Math.floor(value).toLocaleString()}`} />
          <Bar dataKey="Low" fill="#FFB200" name="L" barSize={10} radius={[10, 10, 10, 10]} />
          <Bar dataKey="Medium/High" name="H/M" fill="#4339F2" barSize={10} radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActualBalance;
