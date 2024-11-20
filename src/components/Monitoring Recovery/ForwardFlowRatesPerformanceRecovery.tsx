import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { checkDomainOfScale } from "recharts/types/util/ChartUtils";

type Props = {
  forwardFlowRatePerformanceTitle: string;
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
  selectedSubCategoryAgency: string;
  selectedSubCategoryPayment: string;
  selectedSubCategoryLocation: string;
  selectedSubCategorySegments: string;
  performanceRecoveryGraphData: any;
  activeButton: string;
  performanceRecoveryUniquePayerGraphData: any;
  setIsWide: any;
  isWide: any;
  staticDataRecoveryPerformance: any;
  staticDataUniquePerformance: any;
  selectedState: any;
  hoveredState: any;
  hoveredSubSegment:any
};

interface DataItem {
  month: string;
  [key: string]: number | string;
}

interface DataPoint {
  month: string;
  "Monthly Recovery Rate": number;
}

interface DataPointForUnique {
  month: string;
  "Unique Payer Rate": number;
}

interface LineChartProps {
  data: DataPoint[];
}

interface LineChartPropsForUnique {
  dataUnique: DataPointForUnique[];
}

const ForwardFlowRatesPerformanceRecovery = ({
  forwardFlowRatePerformanceTitle,
  selectedCategory,
  selectedSubCategory,
  selectedSubCategoryTwo,
  selectedSubCategoryAgency,
  selectedSubCategoryPayment,
  selectedSubCategoryLocation,
  selectedSubCategorySegments,
  performanceRecoveryGraphData,
  performanceRecoveryUniquePayerGraphData,
  activeButton,
  setIsWide,
  isWide,
  staticDataRecoveryPerformance,
  staticDataUniquePerformance,
  selectedState,
  hoveredState,
  hoveredSubSegment
}: Props) => {
  const [selectedActiveButton, setselectedActiveButton] = useState("");
  const [selectedCategories, setselectedCategory] = useState("");
  const [selectedSubCategories, setselectedSubCategory] = useState("");
  const [selectedSubCategoriesTwo, setselectedSubCategoryTwo] = useState("");
  const [selectedSubCategoriesAgency, setselectedSubCategoryAgency] =
    useState("");
  const [selectedSubCategoriesPayment, setselectedSubCategoryPayment] =
    useState("");
  const [selectedSubCategoriesLocation, setselectedSubCategoryLocation] =
    useState("");
  const [selectedSubCategoriesSegments, setselectedSubCategorySegments] =
    useState("");
  // const [
  //   selectedSubCategoriesSegmentsUniquePayer,
  //   setselectedSubCategoriesSegmentsUniquePayer,
  // ] = useState("");
  // const [
  //   selectedSubCategoriesAgencyUniquePayer,
  //   setselectedSubCategoriesAgencyUniquePayer,
  // ] = useState("");
  console.log(selectedState, "selectedState.....");
  console.log(hoveredState, "hoveredState value");

  useEffect(() => {
    setselectedActiveButton(activeButton);
    setselectedCategory(selectedCategory);
    setselectedSubCategory(selectedSubCategory);
    setselectedSubCategoryTwo(selectedSubCategoryTwo);
    setselectedSubCategoryAgency(selectedSubCategoryAgency);
    setselectedSubCategoryPayment(selectedSubCategoryPayment);
    setselectedSubCategoryLocation(selectedSubCategoryLocation);
    setselectedSubCategorySegments(selectedSubCategorySegments);
  }, [
    activeButton,
    selectedCategory,
    selectedSubCategory,
    selectedSubCategoryTwo,
    selectedSubCategoryAgency,
    selectedSubCategoryPayment,
    selectedSubCategoryLocation,
    selectedSubCategorySegments,
  ]);

  const formatYAxisTick = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed(1)}%`;
    }
  };
  const colors = [
    "#6F91EA",
    "#4339F2",
    "#34B53A",
    "#FFB200",
    "#FA7B33",
    "#79747E",
    "#3182bd",
    "#9F90D4",
    "#5C4E8E",
    "#6A7691",
    "#4169E1",
    "#E5E3ED",
    "#C9C4D9",
    "#776BA1",
    "#EF4444",
  ];

  const generateDynamicSubSegments = (length: number) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const endMonth = 4; // May
    const endYear = 2024;

    const subSegments = [];

    for (let i = 0; i < length; i++) {
      const monthIndex = (endMonth - i + 12) % 12;
      const yearAdjustment = monthIndex > endMonth ? 1 : 0;
      const year = endYear - Math.floor(i / 12) - yearAdjustment;
      subSegments.push(`${months[monthIndex]} ${year}`);
    }

    return subSegments.reverse();
  };

  const findMaxLength = (seriesData: any[]): number => {
    let maxLength = 0;
    seriesData.forEach((series) => {
      if (series.value.length > maxLength) {
        maxLength = series.value.length;
      }
    });
    return maxLength;
  };

  const seriesData =
    selectedActiveButton === "$Recovery" && selectedCategories === "vintage"
      ? staticDataRecoveryPerformance?.vintage.find((item: any) => item.series)
          ?.series || []
      : // : selectedActiveButton === "$Recovery" &&
      //   selectedCategories === "placement"
      // ? performanceRecoveryGraphData?.placement.find((item: any) => item.series)
      //     ?.series || []
      selectedActiveButton === "$Recovery" && selectedCategories === "location"
      ? staticDataRecoveryPerformance?.location.find((item: any) => item.series)
          ?.series || []
      : selectedActiveButton === "$Recovery" && selectedCategories === "agency"
      ? staticDataRecoveryPerformance?.agency.find((item: any) => item.series)
          ?.series || []
      : (selectedActiveButton === "$Recovery" &&
          selectedCategories === "pos" &&
          staticDataRecoveryPerformance?.pos.find((item: any) => item.series)
            ?.series) ||
        [];

  const seriesUniqueData =
    selectedActiveButton === "uniquePayer" && selectedCategories === "vintage"
      ? staticDataUniquePerformance?.vintage.find((item: any) => item.series)
          ?.series || []
      : selectedActiveButton === "uniquePayer" && selectedCategories === "pos"
      ? staticDataUniquePerformance?.pos.find((item: any) => item.series)
          ?.series || []
      : selectedActiveButton === "uniquePayer" &&
        selectedCategories === "location"
      ? staticDataUniquePerformance?.location.find((item: any) => item.series)
          ?.series || []
      : (selectedActiveButton === "uniquePayer" &&
          selectedCategories === "agency" &&
          staticDataUniquePerformance?.agency.find((item: any) => item.series)
            ?.series) ||
        [];
  const getSeriesDataXAxis = (category: string, data: any) => {
    switch (category) {
      case "vintage":
        return data && data?.vintage[1]?.series || [];
      case "agency":
        return data && data.agency[1]?.series || [];
      case "location":
        return data && data.location[1]?.series || [];
      case "pos":
        return data && data.pos[1]?.series || [];
      default:
        return [];
    }
  };

  const seriesDataXAxis = getSeriesDataXAxis(
    selectedCategories,
    staticDataRecoveryPerformance
  );

  const maxLength = findMaxLength(seriesDataXAxis);

  const dynamicSubSegments = generateDynamicSubSegments(maxLength);

  const data: DataItem[] = seriesData.reduce((acc: any, series: any) => {
    const valueLength = series?.value.length;
    const offset = maxLength - valueLength;

    series?.value.forEach((value: any, index: any) => {
      const month = dynamicSubSegments[offset + index]; // Adjusted index to start storing values from the correct offset

      if (!acc[offset + index]) {
        acc[offset + index] = { month };
      }
      acc[offset + index][series.sub_segment] = value;
    });

    return acc;
  }, [] as DataItem[]);
  console.log("vintage data", data);

 
  const filterDataBySelectedState = (
    data: DataItem[],
    selectedState: string
  ): DataItem[] => {
    
    return data.map((item) => {
      const filteredItem: DataItem = { month: item.month };
  
      // Include all sub-segments
      Object.keys(item).forEach((key) => {
        if (key !== "month") {
          filteredItem[key] = item[key];
        }
      });
  
      return filteredItem;
    });
  };
  
  const filteredData = filterDataBySelectedState(data, selectedState);
  const getOpacityBySubSegment = (subSegment: string | null) => {
    if (!hoveredSubSegment) {
      return 1; // Default opacity when no bar is hovered
    }
    return subSegment === hoveredSubSegment ? 1 : 0.2; // Highlight hovered line, dim others
  };  

  const dataUnique: DataItem[] = seriesUniqueData.reduce(
    (acc: any, series: any) => {
      const valueLength = series?.value.length;
      const offset = maxLength - valueLength;

      series?.value.forEach((value: any, index: any) => {
        const month = dynamicSubSegments[offset + index]; // Adjusted index to start storing values from the correct offset

        if (!acc[offset + index]) {
          acc[offset + index] = { month };
        }
        acc[offset + index][series.sub_segment] = value;
      });

      return acc;
    },
    [] as DataItem[]
  );
  // console.log(dataUnique,"dataUnique......");
  // const filterDataBySelectedStateUnique = (
  //   data: DataItem[],
  //   selectedState: string
  // ): DataItem[] => {
  //   if (!selectedState && hoveredState) return data;

  //   return data
  //     .map((item) => {
  //       const filteredItem: DataItem = { month: item.month };
  //       if (item[selectedState] !== undefined) {
  //         filteredItem[selectedState] = item[selectedState];
  //       }
  //       return filteredItem;
  //     })
  //     .filter((item) => Object.keys(item).length > 1); // Filter out items that only have the 'month' key
  // };
  // const filteredDataUnique = filterDataBySelectedStateUnique(
  //   dataUnique,
  //   selectedState
  // );
  const filterDataBySelectedStateUnique = (
    data: DataItem[],
    selectedState: string
  ): DataItem[] => {
    // If no specific state is selected, return all data
    if (!selectedState && hoveredState) return data;
  
    // If a state is selected, return the data with all sub-segments
    return data.map((item) => {
      const filteredItem: DataItem = { month: item.month };
  
      // Add all sub-segments, but only keep the selectedState's data visible
      Object.keys(item).forEach((key) => {
        filteredItem[key] = item[key];
      });
  
      return filteredItem;
    });
  };
  
  const filteredDataUnique = filterDataBySelectedStateUnique(
    dataUnique,
    selectedState,
  
  );
  
  const arrTicks: any = (data: DataItem[]): number[] => {
    let arr: number[] = [];
    let maxNum = 0;

    if (data && data.length > 0) {
      maxNum = Math.max(
        ...data.flatMap((item) => {
          return Object.values(item).filter(
            (value): value is number => typeof value === "number"
          );
        })
      );
    } else {
      return [0];
    }

    // Calculate the step size based on the maximum number and the desired number of ticks
    const numberOfTicks = 6; // You can adjust the number of ticks as needed
    const stepSize = maxNum / (numberOfTicks - 1);

    let num1 = 0;
    for (let i = 0; i < numberOfTicks; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += stepSize;
    }

    return arr;
  };

  const arrUniqueTicks: any = (dataUnique: DataItem[]): number[] => {
    let arr: number[] = [];
    let maxNum = 0;

    if (dataUnique && dataUnique.length > 0) {
      maxNum = Math.max(
        ...dataUnique.flatMap((item) => {
          return Object.values(item).filter(
            (value): value is number => typeof value === "number"
          );
        })
      );
    } else {
      return [0];
    }

    const numberOfTicks = 8;
    const stepSize = maxNum / (numberOfTicks - 1); // Subtract 1 to include maxNum in ticks

    for (let i = 0; i < numberOfTicks; i++) {
      arr.push(parseFloat((stepSize * i).toFixed(1)));
    }

    return arr;
  };

  const containerClass = isWide ? "w-[49%] " : "w-[48%] ";

  return (
    <div
      className={`w-full xl:${containerClass} ${
        isWide ? "flex-col" : "flex-col"
      }  h-[415px]  rounded-lg py-4 p-3 -mr-2 shadow-md bg-white`}
    >
      <div className="w-full flex justify-between px-0 -mt-2 mb-3">
        <h1 className="text-start min-w-[190px] text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          {forwardFlowRatePerformanceTitle}
        </h1>
        <div className={`${isWide ? "max-w-[650px] max-h-[70px] lg:gap-2 gap-1 relative left-2 " : ""} flex items-center flex-wrap ml-2 gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-3`}>
          {selectedCategories === "vintage" &&
          selectedActiveButton === "$Recovery"
            ? staticDataRecoveryPerformance?.vintage[1] &&
              staticDataRecoveryPerformance?.vintage[1].series &&
              staticDataRecoveryPerformance?.vintage[1]?.series.map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series.sub_segment}
                    </span>
                  </div>
                )
              )
            : selectedCategories === "pos" &&
              selectedActiveButton === "$Recovery"
            ? staticDataRecoveryPerformance?.pos[1] &&
              staticDataRecoveryPerformance?.pos[1].series &&
              staticDataRecoveryPerformance?.pos[1]?.series.map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series.sub_segment}
                    </span>
                  </div>
                )
              )
            : selectedCategories === "location" &&
              selectedActiveButton === "$Recovery"
            ? staticDataRecoveryPerformance?.location[1] &&
              staticDataRecoveryPerformance?.location[1].series &&
              staticDataRecoveryPerformance?.location[1]?.series.map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series.sub_segment}
                    </span>
                  </div>
                )
              )
            : selectedCategories === "agency" &&
              selectedActiveButton === "$Recovery"
            ? staticDataRecoveryPerformance?.agency[1] &&
              staticDataRecoveryPerformance?.agency[1].series &&
              staticDataRecoveryPerformance?.agency[1]?.series.map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series.sub_segment}
                    </span>
                  </div>
                )
              )
            : selectedCategories === "vintage" &&
              selectedActiveButton === "uniquePayer"
            ? staticDataUniquePerformance?.vintage[1] &&
              staticDataUniquePerformance?.vintage[1].series &&
              staticDataUniquePerformance?.vintage[1]?.series.map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series.sub_segment}
                    </span>
                  </div>
                )
              )
            : selectedCategories === "location" &&
              selectedActiveButton === "uniquePayer"
            ? staticDataUniquePerformance?.location[1] &&
              staticDataUniquePerformance?.location[1].series &&
              staticDataUniquePerformance?.location[1]?.series.map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series.sub_segment}
                    </span>
                  </div>
                )
              )
            : selectedCategories === "pos" &&
              selectedActiveButton === "uniquePayer"
            ? staticDataUniquePerformance?.pos[1] &&
              staticDataUniquePerformance?.pos[1].series &&
              staticDataUniquePerformance?.pos[1]?.series.map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series.sub_segment}
                    </span>
                  </div>
                )
              )
            : selectedCategories === "agency" &&
              selectedActiveButton === "uniquePayer" &&
              staticDataUniquePerformance?.agency[1] &&
              staticDataUniquePerformance?.agency[1].series &&
              staticDataUniquePerformance?.agency[1]?.series.map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series.sub_segment}
                    </span>
                  </div>
                )
              )}
        </div>
      </div>
      {selectedActiveButton === "$Recovery" && (
        <ResponsiveContainer width="99%" height={310}>
          <LineChart
            data={selectedState && !hoveredState ? filteredData : data}
            margin={{ left: 15, top: 25, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              angle={-70}
              dy={0}
              dx={-4}
              textAnchor="end"
              fontSize={10}
              fontWeight={400}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              axisLine={false}
              tickLine={false}
              padding={{ left: 25, right: 15 }}
            />
            <YAxis
              fontSize={11}
              fontWeight={400}
              // fontStyle={"DM Sans"}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              // domain={[0, 3]}
              width={25}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              // ticks={[0, 2, 4, 6, 8]}
              ticks={arrTicks(data)}
              domain={[0, "dataMax"]}
            />
            <Tooltip
              formatter={(value) => {
                // Convert the value to a string and split on the decimal point
                const [integer, decimal] = value.toString().split(".");
                // Format the decimal part to two digits
                const formattedDecimal = decimal
                  ? decimal.substring(0, 2)
                  : "00";
                // Return the formatted value as a percentage
                return `${integer}.${formattedDecimal}%`;
              }}
            />
            {seriesData.map((series: any, index: any) => (
              <Line
                key={index}
                type="linear"
                dataKey={series.sub_segment}
                name={`${series.sub_segment}`}
                stroke={colors[index % colors.length]}
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
                opacity={getOpacityBySubSegment(series.sub_segment)} 
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}

      {selectedActiveButton === "uniquePayer" && (
        // forwardFlowRatePerformanceTitle===
        <ResponsiveContainer width="99%" height={310}>
          <LineChart
            data={
              selectedState && !hoveredState ? filteredDataUnique : dataUnique
            }
            margin={{ left: 15, top: 25, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              angle={-70}
              dy={0}
              dx={-4}
              textAnchor="end"
              fontSize={10}
              fontWeight={400}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              axisLine={false}
              tickLine={false}
              padding={{ left: 25, right: 15 }}
            />
            <YAxis
              fontSize={11}
              fontWeight={400}
              // fontStyle={"DM Sans"}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              // domain={[0, 3]}
              width={25}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              // ticks={[0, 2, 4, 6, 8]}
              ticks={arrUniqueTicks(dataUnique)}
              domain={[0, "dataMax"]}
            />
            <Tooltip
              formatter={(value) => {
                // Convert the value to a string and split on the decimal point
                const [integer, decimal] = value.toString().split(".");
                // Format the decimal part to two digits
                const formattedDecimal = decimal
                  ? decimal.substring(0, 2)
                  : "00";
                // Return the formatted value as a percentage
                return `${integer}.${formattedDecimal}%`;
              }}
            />
            {seriesUniqueData.map((series: any, index: any) => (
              <Line
                key={index}
                type="linear"
                dataKey={series.sub_segment}
                name={`${series.sub_segment}`}
                stroke={colors[index % colors.length]}
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
                opacity={getOpacityBySubSegment(series.sub_segment)}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ForwardFlowRatesPerformanceRecovery;
