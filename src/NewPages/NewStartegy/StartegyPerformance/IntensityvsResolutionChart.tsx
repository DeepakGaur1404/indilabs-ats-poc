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
  ComposedChart,
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
    10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 81, 82, 85, 80,
    86, 88, 82, 84, 87, 80, 86, 88, 82, 84, 87,
  ],
  med_risk: [
    2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 35, 40, 45, 50,
    55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  ],
  // low_risk: [0],
  name: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ],
};

const getColorBySubSegment = ["#4169E1", "#FFB200", "#79747E"];

const formatYLeftAxisTick = (tick: any) =>
  tick === 0 ? `${tick}` : `${tick}%`;
const formatYRightAxisTick = (tick: any) =>
  tick === 0 ? `${tick}` : `${tick}`;
const IntensityvsResolutionChart: React.FC = ({}) => {
  const segmentData = data;

  const chartData = segmentData
    ? Object.keys(segmentData.high_risk).map((key, index) => ({
        name: segmentData.name,
        high_risk: segmentData.high_risk[index],
        med_risk: segmentData.med_risk[index],
        // low_risk: segmentData.low_risk[index],
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
    <div className="w-full xl:w-[55%] ml-3 h-[368px]  flex flex-col justify-center items-center bg-[white] border-[#E3E3E3] border-[1px] rounded-xl">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 ">
        <div className="flex justify-between p-3 w-full">
          <p className="text-[black] text-start font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
            Intensity vs Resolution%
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
                  Cum Resolution %
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
                  Cum Intensity
                </span>
              </div>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="99%" height={310}>
          <ComposedChart
            data={chartData}
            margin={{ top: 20, right: 10, left: 20, bottom: 0 }}
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
              //  padding={{ left: 10, right: 10 }}
              interval={0}
              // angle={-70}
              // dy={0}
              // dx={-4}
              // textAnchor="end"
            />
            <YAxis
              yAxisId="left"
              fontWeight={400}
              fontSize={11}
              fill={"#3B414B"}
              fontFamily="DM Sans"
              domain={[0, "dataMax"]}
              ticks={arrTicks(chartData)}
              width={35}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatYLeftAxisTick}
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
              yAxisId="right"
              orientation="right"
              fontWeight={400}
              fontSize={11}
              fill={"#3B414B"}
              fontFamily="DM Sans"
              domain={[0, "dataMax"]}
              ticks={arrTicks(chartData)}
              width={35}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatYRightAxisTick}
            />
            {/* <Tooltip
              formatter={(value, name) => {
                const formattedValue =
                  typeof value === "number" ? `${value.toFixed(1)}` : value;
                return [formattedValue, `${name}`];
              }}
            /> */}

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="high_risk"
              name="Cum Resolution %"
              stroke={getColorBySubSegment[0]}
              dot={false}
              strokeWidth={2}
            />
            {/* <Line
              yAxisId="right"
              type="monotone"
              dataKey="med_risk"
              name="Cum Intensity"
              stroke={getColorBySubSegment[1]}
              dot={false}
              strokeWidth={2}
            /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IntensityvsResolutionChart;
