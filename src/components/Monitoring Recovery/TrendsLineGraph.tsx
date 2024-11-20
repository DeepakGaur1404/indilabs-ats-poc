import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  staticDataRecoveryPerformance: any;
  selectedCategoryButtonTrends: string;
  activeButton: any;
  staticDataUniqueAgency: any;
  selectedStateH: any;
  hoveredState: any;
  hoveredSubSegment: any;
};

interface SeriesData {
  sub_segment: string | null;
  value: number[];
}

interface DataItem {
  month: string;
  [key: string]: number | string;
}

// Updated type for the new data format
interface StateSeries {
  location: string;
  sub_segment: string | null;
  value: number[];
}

const allMonths = [
  "Jan 2023",
  "Feb  2023",
  "Mar 2023",
  "Apr 2023",
  "May 2023",
  "Jun 2023",
  "Jul 2023",
  "Aug 2023",
  "Sep 2023",
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
  "Jan 2024",
  "Feb 2024",
  "Mar 2024",
  "Apr 2024",
  "May 2024",
];

const findMaxLength = (seriesData: StateSeries[]): number => {
  let maxLength = 0;
  seriesData.forEach((series) => {
    if (series.value.length > maxLength) {
      maxLength = series.value.length;
    }
  });
  return maxLength;
};

const getStartIndex = (numValues: number): number => {
  const lengthMapping: any = {
    17: 0,
    16: 1,
    15: 2,
    14: 3,
    13: 4,
    12: 5,
    11: 6,
    10: 7,
    9: 8,
    8: 9,
    7: 10,
    6: 11,
    5: 12,
    4: 13,
    3: 14,
    2: 15,
    1: 16,
    0: 17,
  };
  return lengthMapping[numValues];
};

const TrendsLineGraph = ({
  staticDataRecoveryPerformance,
  selectedCategoryButtonTrends,
  activeButton,
  staticDataUniqueAgency,
  selectedStateH,
  hoveredState,
  hoveredSubSegment,
}: Props) => {
  const [selectedCategories, setSelectedCategory] = useState("");

  const formatYAxisTick = (tick: any) => {
    if (tick === 0) {
      return `${tick}`;
    } else {
      return `${tick}%`;
    }
  };

  const valueColorMapping: { [key: string]: string } = {
    "Very Small": "#6F91EA",
    Small: "#4339F2",
    Med: "#34B53A",
    Large: "#FFB200",
    Inhouse: "#FA7B33",
  };

  const getColorBySubSegment = (subSegment: string | null) => {
    if (subSegment && valueColorMapping[subSegment]) {
      return valueColorMapping[subSegment];
    }
    return "#79747E";
  };

  useEffect(() => {
    setSelectedCategory(selectedCategoryButtonTrends);
  }, [selectedCategoryButtonTrends]);

  const getStateData = (location: string) => {
    // Ensure staticDataRecoveryPerformance and agency are defined
    if (!staticDataRecoveryPerformance || !staticDataRecoveryPerformance.agency || !staticDataRecoveryPerformance.agency.series) {
      console.error('staticDataRecoveryPerformance or its properties are undefined');
      return [];
    }
  
    // Filter the series based on location and handle NaN values inside the array
    return staticDataRecoveryPerformance.agency.series
      .filter((state: StateSeries) => state.location === location)
      .map((state: StateSeries) => {
        // Ensure state.value is an array and replace NaN values in the array with 0
        if (Array.isArray(state.value)) {
          state.value = state.value.map(val => isNaN(val) ? 0 : val);
        }
        return state;
      });
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

  const getChartData = (series: StateSeries[]) => {
    let chartData: any[] = new Array(allMonths.length)
      .fill(null)
      .map((_, i) => ({
        month: allMonths[i],
      }));

    series.forEach((seriesData) => {
      const startIndex = getStartIndex(seriesData.value.length);
      seriesData.value.forEach((value, index) => {
        chartData[startIndex + index][seriesData.sub_segment || "NULL"] =
          isNaN(value) ? 0 : value; // Handle NaN values
      });
    });

    return chartData;
  };

  const selectedStateData =
    getStateData(selectedCategories) || staticDataRecoveryPerformance.agency.series[0];
  const chartData = getChartData(selectedStateData);

  const filterDataBySelectedState = (data: DataItem[], selectedStateH: any): DataItem[] => {
    if (!selectedStateH && hoveredState) return data;

    return data.map((item) => {
      const filteredItem: DataItem = { month: item.month };
      Object.keys(item).forEach((key) => {
        if (key !== "month") {
          filteredItem[key] = item[key];
        }
      });
      return filteredItem;
    });
  };

  const filteredData = filterDataBySelectedState(chartData, selectedStateH);

  const getOpacityBySubSegment = (subSegment: string | null) => {
    if (!hoveredSubSegment) {
      return 1;
    }
    return subSegment === hoveredSubSegment ? 1 : 0.2;
  };
  const desiredOrder = ["Very Small", "Small", "Med", "Large", "Inhouse"];

  // Sort selectedStateData based on the defined order
  const sortedSeriesData = selectedStateData.sort((a:any, b:any) => {
    const aIndex = desiredOrder.indexOf(a.sub_segment);
    const bIndex = desiredOrder.indexOf(b.sub_segment);
    // Handle cases where the segment is not in the desired order
    return (aIndex === -1 ? Infinity : aIndex) - (bIndex === -1 ? Infinity : bIndex);
  });
  return (
    <div className="w-full xl:w-[48%] h-[380px] mt-10 rounded-lg py-4 p-3 -mr-2 shadow-md bg-white">
      <div className="w-full flex justify-between px-0 mt-2 mb-3">
        <h1 className="text-center text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          {activeButton === "$Recovery" ? "Recovery % (Coincidental)" : "Unique Payer %"}
        </h1>
        <div className="flex items-center flex-wrap gap-3 lg:gap-3">
        {sortedSeriesData.map((seriesData:any, index:any) => (
      <div className="flex items-center" key={index}>
        <div
          className="legend-color"
          style={{
            backgroundColor: getColorBySubSegment(seriesData.sub_segment),
            width: "13px",
            height: "13px",
            marginRight: "5px",
            borderRadius: "3px",
          }}
        />
        <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
          {seriesData.sub_segment === null ? "NULL" : seriesData.sub_segment}
        </span>
      </div>
    ))}
        </div>
      </div>
      {activeButton === "$Recovery" && (
        <ResponsiveContainer width="99%" height={300}>
          <LineChart data={selectedStateH && !hoveredState ? filteredData : chartData} margin={{ left: 15, top: 25, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              fontWeight={400}
              fontSize={10}
              angle={-70}
              dy={20}
              dx={-4}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              axisLine={false}
              tickLine={false}
              padding={{ left: 25, right: 15 }}
            />
            <YAxis
              fontSize={11}
              fontWeight={400}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              width={25}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              domain={[0, "dataMax"]}
              ticks={arrTicks(chartData)}
            />
            <Tooltip
              formatter={(value, name) => {
                const formattedValue =
                  typeof value === "number" ? `${value.toFixed(2)}%` : value;
                return [formattedValue, `${name}`];
              }}
            />{" "}
            {selectedStateData.map((seriesData: any, index: any) => (
              <Line
                key={index}
                type="linear"
                dataKey={seriesData.sub_segment || "NULL"}
                stroke={getColorBySubSegment(seriesData.sub_segment)}
                strokeWidth={2.5}
                dot={false}
                opacity={getOpacityBySubSegment(seriesData.sub_segment)}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TrendsLineGraph;
