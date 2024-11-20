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
  ReferenceLine,
} from "recharts";



interface SegmentData {
  high_risk: number[];
  med_risk: number[];
  low_risk: number[];
}

interface Data {
  [key: string]: {
    recovery: SegmentData;
  };
}


const data: any = {
 
      high_risk: [
        3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 3.9, 3.8, 3.7, 3.6,
        3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 3.9, 3.8, 3.7, 3.6,
        3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 3.9, 3.8, 3.7, 3.6
      ],
      med_risk: [
        0.0, 0.82, 0.86, 0.90, 0.96, 1, 0.9, 0.85, 0.82, 0.78,
        0.76, 0.74, 0.72, 0.70, 0.68, 0.66, 0.64, 0.62, 0.60, 0.58,
        0.56, 0.54, 0.52, 0.50, 0.48, 0.46, 0.44, 0.42, 0.40, 0.38
      ],
      low_risk: [
        1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
        2.0, 1.9, 1.8, 1.7, 1.6, 1.5, 1.4, 1.3, 1.2, 1.1,
        1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9
      ],
      name: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
      ]
    }
 


const getColorBySubSegment = [ "#4169E1","#FFB200","#79747E"];


const formatYAxisTick = (tick: any) => (tick === 0 ? `${tick}` : `${tick}`);

const StrategyDailyIntensityChart: React.FC = ({  }) => {

  const segmentData = data

  const chartData = segmentData
    ? Object.keys(segmentData.high_risk).map((key, index) => ({
        name:  segmentData.name,
        high_risk: segmentData.high_risk[index],
        med_risk: segmentData.med_risk[index],
        low_risk: segmentData.low_risk[index],
      }))
    : [];

    // const chartData = segmentData ? segmentData.low.map((lowValue:any, index:any) => ({
    //   name: segmentData.name,
    //   Low: lowValue,
    //   "Medium/High": segmentData["medium/high"][index],
    // })) : [];

    const arrTicks: any = (chartData: any[]): number[] => {
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
    const lineKeys = Object.keys(segmentData).filter((key) => key !== "name");
  return (
    <div className="w-full xl:w-[45%] ml-3 h-[368px] bg-[white]  flex flex-col justify-center items-center border-[#E3E3E3] border-[1px] rounded-xl">
      <div className="w-full flex flex-wrap  md:flex justify-between lg:px-0">
     <div className="flex justify-between p-3 w-full"> 
        <p className="text-[black] text-start font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
        Daily Intensity
        </p>
        <div className="flex items-center flex-wrap gap-3 lg:gap-3">
          <div className=" flex items-center gap-3">
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
              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              High Risk
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
              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              Med Risk
              </span>
            </div>
            <div className="flex items-center">
              <div
                className="legend-color"
                style={{
                  backgroundColor: getColorBySubSegment[2],
                  width: "12.48px",
                  height: "12.48px",
                  marginRight: "5px",
                  borderRadius: "3px",
                }}
              />
              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              Low Risk
              </span>
            </div>
         
            
          </div>
        </div>
       </div> 
      
      <ResponsiveContainer width="99%" height={310}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
          //  label={{
          //   value: "False Positive Rate",
          //   position: "insideBottom",
          //   offset: -10,
          //   fontSize: 12,
          //   fontFamily: "DM Sans",
          // }}
            dataKey="name"
            fontWeight={400}
            fontFamily="DM Sans"
            fontSize={11}
            fill={"#3B414B"}
            axisLine={false}
            tickLine={false}
            // padding={{ left: 10, right: 10 }}
            interval={0}
            // angle={-70}
            // dy={0}
            // dx={-4}
            // textAnchor="end"
          />
          <YAxis
          // label={{
          //   value: "True Positive Rate",
          //   angle: -90, // Rotate the label vertically
          //   position: "insideLeft", // Keep the label inside the chart, aligned left
          //   offset: 0, // Adjust this to move the label closer or further from the Y-axis
          //   dx: -8, // Fine-tune horizontal positioning
          //   dy: 8, // Fine-tune vertical positioning (should help center it)
          //   fontSize: 12,
          //   fontFamily: "DM Sans",
          //   fill: "#3B414B",
          //   style: { textAnchor: "middle" }, // Ensure label is centered properly
          // }}
            //  dataKey="medium/high"
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
                  typeof value === "number" ? `${value.toFixed(1)}` : value;
                return [formattedValue, `${name}`];
              }}
            />

{lineKeys.map((key, index) => (
              <Line
                key={key}
                type="linear"
                dataKey={key}
                name={key.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                stroke={getColorBySubSegment[index]}
                dot={false}
                strokeWidth={2}
              />
            ))}
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StrategyDailyIntensityChart;
