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

interface ExpandRecoveryProps {
  selectedSegment: any;
  data:any;
}

interface SegmentData {
  low: number[];
  "medium/high": number[];
}

interface Data {
  [key: string]: {
    recovery: SegmentData;
  };
}

const getColorBySubSegment = ["#FFB200", "#4169E1"];


const ExpandRecovery: React.FC<ExpandRecoveryProps> = ({ selectedSegment, data }) => {
  const segmentData = data[selectedSegment as keyof typeof data]?.recovery;
  const xAxisLabels = data[selectedSegment]?.xaxis || []; 
  
  const chartData = segmentData
    ? Object.keys(segmentData["medium/high"]).map((key, index) => ({
        name: xAxisLabels[index]?.replace("interest_rate", "Int rate")
                                  .replace("loan_amount", "Loan amnt")
                                  .replace("loan_term", "Loan term")
                                  .replace("_woe", "")
                                  .replace(/_/g, " ")
                                  .trim() || "",
        Low: segmentData.low[index],
        "Medium/High": segmentData["medium/high"][index],
      }))
    : [];

  const arrTicks = (chartData: any[]): number[] => {
    let arr: number[] = [];
    let maxNum = 0;

    if (chartData && chartData.length > 0) {
      maxNum = Math.max(
        ...chartData.flatMap((item) => {
          return Object.values(item).filter(
            (value): value is number => typeof value === "number"
          );
        })
      );
    } else {
      return [0];
    }

    const numberOfTicks = 6;
    let stepSize = maxNum / numberOfTicks;
    maxNum = Math.ceil(maxNum / stepSize) * stepSize;
    let num1 = 0;
    for (let i = 0; i <= numberOfTicks; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += stepSize;
    }

    return arr;
  };

  const formatYAxisTick = (tick: any) => (tick === 0 ? `${tick}` : `${tick}%`);

  return (
    <div className="w-[100%] xl:w-[49%] border-[#E3E3E3] border-[1px] h-[321px] bg-white rounded-xl py-4 px-3 gap-3">
      <div className="flex justify-between">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
          Expected Recovery
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: getColorBySubSegment[0],
                width: "12.48px",
                height: "12.48px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[13px] font-[400] text-[#000000] font-['DM Sans']">
              L
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: getColorBySubSegment[1],
                width: "12.48px",
                height: "12.48px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[13px] font-[400] text-[#000000] font-['DM Sans']">
              H/M
            </span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="99%" height={280}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 5, left: 5, bottom: 42 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            fontWeight={400}
            fontFamily="DM Sans"
            fontSize={11}
            fill={"#3B414B"}
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            angle={-70}
            dy={0}
            dx={-4}
            textAnchor="end"
            interval={0} // Show all labels as provided from backend
          />
          <YAxis
            fontWeight={400}
            fontSize={11}
            fill={"#3B414B"}
            fontFamily="DM Sans"
            domain={[0, "dataMax"]}
            ticks={arrTicks(chartData)}
            width={35}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatYAxisTick}
            
          />
          <Tooltip
            formatter={(value, name) => {
              const formattedValue =
                typeof value === "number" ? `${value.toFixed(1)}%` : value;
              return [formattedValue, `${name}`];
            }}
          />
          <Line
            type="linear"
            dataKey="Low"
            name="L"
            stroke={getColorBySubSegment[0]}
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="linear"
            dataKey="Medium/High"
            name="H/M"
            stroke={getColorBySubSegment[1]}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};


export default ExpandRecovery;
