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
 
        high_risk: [120, 100, 80, 60, 40, 30, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,],
        med_risk: [120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 20,20, 20,20, 20,20, 20,20, 20,20, 20,20, 20,20, 20,20, 20,20, 20,],
        low_risk: [120, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 30,30, 30, 30,30, 30, 30,30, 30, 30,30, 30, 30,30, 30, 30,30, 30, 30,30, 30, 30],
      name: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
      ]
   
}


const getColorBySubSegment = [ "#4169E1","#FFB200","#79747E"];


const formatYAxisTick = (tick: any) => (tick === 0 ? `${tick}` : `${tick}%`);

const PercentCycleLiquidationChart: React.FC = ({  }) => {

    const chartData = data.name.map((_:any, index:any) => ({
        name: data.name[index],
        high_risk: data.high_risk[index],
        med_risk: data.med_risk[index],
        low_risk: data.low_risk[index],
      }));

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
    const lineKeys = Object.keys(data).filter((key) => key !== "name");
  return (
    <div className="w-full xl:w-[45%] ml-3 h-[368px]  flex flex-col justify-center items-center bg-[white] border-[#E3E3E3] border-[1px] rounded-xl  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 ">
      <div className="flex  justify-between w-full p-3">
        <p className="text-[black] text-start font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
        % Cycle Liquidation
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
          margin={{ top: 20, right: 10, left: 20, bottom: 0 }}
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
            // padding={{ left: 10, right: 10 }}
            interval={0}
            // angle={-70}
            // dy={0}
            // dx={-4}
            // textAnchor="end"
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

{lineKeys.map((key, index) => (
              <Line
                key={key}
                type="monotone"
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

export default PercentCycleLiquidationChart;
