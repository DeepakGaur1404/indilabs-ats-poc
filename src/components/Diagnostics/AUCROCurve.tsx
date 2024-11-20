import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data: any = {
  "MOB": {
    recovery: {
      low: [0, 0.2, 0.4, 0.6, 0.8, 1],
      "medium/high": [0.0, 0.82, 0.86, 0.90, 0.96, 1],
      name: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
};

const getColorBySubSegment = ["#FFB200", "#4169E1"];

const formatYAxisTick = (tick: any) => (tick === 0 ? `${tick}` : `${tick}`);

const AUCROCCurve: React.FC = () => {
  const segmentData = data.MOB.recovery;

  const chartData = segmentData.low.map((lowValue: number, index: number) => ({
    name: segmentData.name[index],
    Low: lowValue,
    "Medium/High": segmentData["medium/high"][index],
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

    const numberOfTicks = 5;
    let stepSize = maxNum / numberOfTicks;
    maxNum = Math.ceil(maxNum / stepSize) * stepSize;
    let num1 = 0;
    for (let i = 0; i <= numberOfTicks; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += stepSize;
    }

    return arr;
  };

  return (
    <div className="w-[100%] xl:w-[100%] h-[340px] b rounded-xl p-4 gap-3 mb-2">
      <div className="border border-[#E3E3E3] rounded-xl p-2">
        <div className="flex justify-between p-1">
          <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
            AUC-ROC Curve
          </p>
          <div className="flex items-center flex-wrap gap-3 lg:gap-3">
            <div className="flex items-center gap-3">
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
                AUC-ROC Curve
              </span>
            </div>
            <div className="flex items-center">
              <div
                className="legend-line"
                style={{
                  width: "25px",
                  height: "6px",
                  marginRight: "5px",
                  borderBottom: "4px dashed #E51B1B",
                }}
              />
              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                Random Classifier
              </span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="99%" height={280}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 5, left: 15, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              label={{
                value: "False Positive Rate",
                position: "insideBottom",
                offset: -10,
                fontSize: 12,
                fontFamily: "DM Sans",
              }}
              dataKey="name"
              fontWeight={400}
              fontFamily="DM Sans"
              fontSize={11}
              fill={"#3B414B"}
              axisLine={false}
              tickLine={false}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              label={{
                value: "True Positive Rate",
                angle: -90,
                position: "insideLeft",
                offset: 0,
                dx: -8,
                dy: 8,
                fontSize: 12,
                fontFamily: "DM Sans",
                fill: "#3B414B",
                style: { textAnchor: "middle" },
              }}
              dataKey="Medium/High"
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
            <Line
              type="linear"
              dataKey="Low"
              name="Random Classifier"
              stroke="#E51B1B"
              dot={false}
              strokeWidth={2}
              strokeDasharray="7 7"
            />
            <Line
              type="linear"
              dataKey="Medium/High"
              name="AUC-ROC Curve"
              stroke={getColorBySubSegment[1]}
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AUCROCCurve;
