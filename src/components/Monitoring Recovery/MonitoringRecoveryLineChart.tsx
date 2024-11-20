import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
type Props = {
  categoriesMatricHeatMap: any;
  staticDataRecoveryPerformance: any;
};

interface SeriesData {
  sub_segment: string | null;
  value: number[];
}
interface State {
  state: string;
  series: SeriesData[];
  bars: {
    bar: {
      sub_segment: string;
      value: number;
    };
  }[];
}

const getStartIndex = (numValues: number): number => {
  const lengthMapping: any = {
    12: 0,
    11: 1,
    10: 2,
    9: 3,
    8: 4,
    7: 5,
    6: 6,
    5: 7,
    4: 8,
    3: 9,
    2: 10,
    1: 11,
  };
  return lengthMapping[numValues];
};

const allMonths = [
  "Jun-23",
  "Jul-23",
  "Aug-23",
  "Sep-23",
  "Oct-23",
  "Nov-23",
  "Dec-23",
  "Jan-24",
  "Feb-24",
  "Mar-24",
  "Apr-24",
  "May-24",
];

const MonitoringRecoveryLineChart = ({
  categoriesMatricHeatMap,
  staticDataRecoveryPerformance,
}: Props) => {
  //   const zoneTicks = [2, 5, 8];
  //   const zoneLabels: { [key: number]: string } = {
  //     2: "Zone 1",
  //     5: "Zone 2",
  //     8: "Zone 3",
  //   };

  //   const tickFormatter = (tick: number) => zoneLabels[tick];

  //   const CustomDot = (props: any) => {
  //     const { cx, cy } = props;
  //     return (
  //       <circle
  //         cx={cx}
  //         cy={cy}
  //         r={6}  // Set the radius to 6 for a diameter of 12
  //         stroke="white"
  //         strokeWidth={2}
  //         fill="green"
  //       />
  //     );
  //   };

  const CustomTooltip = (props: any) => {
    const { payload } = props;
    console.log("payload customTooltip value", payload);

    if (payload && payload.length) {
      const { month } = payload[0].payload;
      const { value } = payload[0];

      return (
        <div className="custom-tooltip bg-white p-4 shadow rounded">
          <p className="label text-black">{` Month : ${month}`}</p>
          <p className="intro text-black">{`Value : ${value.toFixed(2)}`}</p>
        </div>
      );
    }

    return null;
  };
  const getStateData = (stateName: string) => {
    return staticDataRecoveryPerformance.states.find(
      (state: State) => state.state === stateName
    );
  };

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

    const numberOfTicks = 7; // You can adjust the number of ticks as needed
    let stepSize = maxNum / numberOfTicks;

    // Adjust maxNum to the next multiple of stepSize
    maxNum = Math.ceil(maxNum / stepSize) * stepSize;

    let num1 = 0;

    for (let i = 0; i <= numberOfTicks; i++) {
      arr.push(parseFloat(num1.toFixed(2)));
      num1 += stepSize;
    }

    return arr;
  };

  const getChartData = (series: SeriesData[]) => {
    let chartData: any[] = new Array(allMonths.length)
      .fill(null)
      .map((_, i) => ({
        month: allMonths[i],
      }));

    series.forEach((seriesData) => {
      console.log(
        seriesData.value.length,
        "seriesData.series.value.length value"
      );
      const startIndex = getStartIndex(seriesData.value.length);
      seriesData.value.forEach((value, index) => {
        chartData[startIndex + index][seriesData.sub_segment || "NULL"] = value;
      });
    });

    return chartData;
  };

  const selectedStateData =
    getStateData(categoriesMatricHeatMap) ||
    staticDataRecoveryPerformance.states[0];
  const chartData = getChartData(selectedStateData.series);
  console.log(chartData, "chartData");

  const CustomDot = (props: any) => {
    const { cx, cy } = props;
    const outerRadius = 8; // Set the outer radius
    const innerRadius = 4; // Set the inner radius to create space between stroke and fill

    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={outerRadius}
          stroke="white"
          strokeWidth={2}
          fill="none" // Ensure the outer circle has no fill
        />
        <circle
          cx={cx}
          cy={cy}
          r={innerRadius}
          strokeWidth={1}
          fill="white" // Fill color for the inner circle
        />
      </g>
    );
  };

  const formatYAxisTick = (tick: any) => {
    return `${tick}.0`;
  };
  console.log("categoriesMatricHeatMap", categoriesMatricHeatMap);

  return (
    <div className=" w-[100%]  mt-10 h-[500px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2 overflow-y-auto">
      <h1 className="text-start min-w-[190px] text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
        Monthly Assessment
      </h1>
      <ResponsiveContainer width="99%" height={430}>
        <LineChart data={chartData} margin={{ top: 10, right: 5 }}>
          <defs>
            <linearGradient id="combinedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F72D1B" stopOpacity={1} />
              <stop offset="50%" stopColor="#FFDD00" stopOpacity={1} />
              <stop offset="100%" stopColor="#06D262" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            fontWeight={400}
            fontSize={12}
            fontFamily="DM Sans"
            fill={"#3B414B"}
            axisLine={false}
            tickLine={false}
            padding={{ right: 60, left: 15 }}
          />
          <YAxis
            fontSize={11}
            fontWeight={400}
            fontFamily="DM Sans"
            fill={"#3B414B"}
            width={35}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxisTick}
            domain={[0, 3]}
            ticks={[0, 1, 2, 3]}
            padding={{ top: 10, bottom: 5 }}

            // ticks={arrTicks(chartData)}
          />
          <CartesianGrid
            strokeDasharray="none"
            vertical={false}
            horizontal={false}
            fill="url(#combinedGradient)"
          />
          {/* {/ {/ {/ <Tooltip /> /} /} /} */}
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={<CustomTooltip payload={chartData} />}
          />
          {/* {/ {/ {/ {/ <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> /} /} /} /} */}
          {staticDataRecoveryPerformance.states.map((state: any, index: any) =>
            state.series.map((series: any) => (
              <Line
                key={index + series.sub_segment}
                type="linear"
                dot={<CustomDot />}
                strokeWidth={3}
                stroke="white"
                dataKey={series.sub_segment}
                name={series.sub_segment}
                fillOpacity={1}
                activeDot={{ r: 8 }}
              />
            ))
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonitoringRecoveryLineChart;
