import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";

type Props = {
  delinquencyGraphTitle: string;
  delinquencyUniqueGraphTitle: string;
  activeButton: string;
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
  selectedSubCategoryLocation: string;
  selectedSubCategoryAgency: string;
  selectedSubCategoryTOS: string;
  selectedSubCategorySegments: string;
  selectedSubCategoryPayment: string;
  selectedSubCategoryUniquePayerSegments: string;
  portfolioRecoveryGraphData: any;
  // portfolioRecoveryUniquePayerGraphData: any;
};

type SubCategories = [
  {
    month: any;
    segment: any;
    active_recovery_balance: any;
    recovery: any;
  },
  {
    month: any;
    segment: any;
    value: any;
  }
];

interface Entry {
  month: string;
  segment: string;
  active_recovery_balance: number;
  recovery: number;
  value: number;
}

const colors = ["#4169E1", "#FFB200"];

const NewSettlementRhs = ({
  delinquencyGraphTitle,
  delinquencyUniqueGraphTitle,
  activeButton,
  selectedCategory,
  selectedSubCategory,
  selectedSubCategoryTwo,
  selectedSubCategoryLocation,
  selectedSubCategoryAgency,
  selectedSubCategoryTOS,
  selectedSubCategorySegments,
  selectedSubCategoryPayment,
  // selectedSubCategoryUniquePayerSegments,
  portfolioRecoveryGraphData,
  // portfolioRecoveryUniquePayerGraphData,
}: Props) => {
  const [selectedActiveButton, setselectedActiveButton] = useState("");
  const [selectedCategories, setselectedCategory] = useState("");
  const [selectedSubCategories, setselectedSubCategory] = useState("");
  const [selectedSubCategoriesTwo, setselectedSubCategoryTwo] = useState("");
  const [selectedSubCategoriesAgency, setselectedSubCategoryAgency] =
    useState("");
  const [selectedSubCategoriesTOS, setselectedSubCategoryTOS] = useState("");
  const [selectedSubCategoriesPayment, setselectedSubCategoryPayment] =
    useState("");
  const [selectedSubCategoriesLocation, setselectedSubCategoryLocation] =
    useState("");
  const [selectedSubCategoriesSegments, setselectedSubCategorySegments] =
    useState("");
  const [
    selectedSubCategoriesSegmentsUniquePayer,
    setselectedSubCategoriesSegmentsUniquePayer,
  ] = useState("");
  const [
    selectedSubCategoriesAgencyUniquePayer,
    setselectedSubCategoriesAgencyUniquePayer,
  ] = useState("");
  useEffect(() => {
    setselectedActiveButton(activeButton);
    setselectedCategory(selectedCategory);
    setselectedSubCategory(selectedSubCategory);
    setselectedSubCategoryTwo(selectedSubCategoryTwo);
    setselectedSubCategoryAgency(selectedSubCategoryAgency);
    setselectedSubCategoryTOS(selectedSubCategoryTOS);
    setselectedSubCategoryPayment(selectedSubCategoryPayment);
    setselectedSubCategoryLocation(selectedSubCategoryLocation);
    setselectedSubCategorySegments(selectedSubCategorySegments);
    // setselectedSubCategoriesAgencyUniquePayer(
    //   selectedSubCategoryUniquePayerAgency
    // );
    // setselectedSubCategoriesSegmentsUniquePayer(
    //   selectedSubCategoryUniquePayerSegments
    // );
  
  }, [
    portfolioRecoveryGraphData,
    activeButton,
    selectedCategory,
    selectedSubCategory,
    selectedSubCategoryTwo,
    selectedSubCategoryAgency,
    selectedSubCategoryPayment,
    selectedSubCategoryLocation,
    selectedSubCategoryTOS,
    selectedSubCategorySegments,
    // selectedSubCategoryUniquePayerSegments,
  ]);
  const [graphData, setGraphData] = useState<any[]>([]);

  // Format the data to merge entries by month
  useEffect(() => {
    let mergedData: Record<string, any> = {};

    if (activeButton === "$Recovery") {
        if (selectedCategory === "all" && portfolioRecoveryGraphData?.All) {
            // Process all data
            mergedData = portfolioRecoveryGraphData.All.reduce((acc: Record<string, any>, item: any) => {
                const month = item.Month;
                if (!acc[month]) {
                    acc[month] = { month };
                }
                acc[month] = { ...acc[month], ...item };
                return acc;
            }, {});
        } else if (selectedCategory === "location" && portfolioRecoveryGraphData?.Location) {
            // Process location data, filtering by selectedSubCategoryLocation
            mergedData = portfolioRecoveryGraphData.Location.reduce((acc: Record<string, any>, item: any) => {
                const month = item.Month;

                console.log("Current Item:", item);
                console.log("Selected Location:", selectedSubCategoryLocation);

                // Normalize case for comparison
                if (item.segment.toLowerCase() === selectedSubCategoryLocation.toLowerCase()) {
                    if (!acc[month]) {
                        acc[month] = { month };
                    }
                    acc[month] = { ...acc[month], ...item };
                }
                return acc;
            }, {});
        } else if (selectedCategory === "pos" && portfolioRecoveryGraphData?.POS) {
            // Process POS data, filtering by selectedSubCategoryTOS
            mergedData = portfolioRecoveryGraphData.POS.reduce((acc: Record<string, any>, item: any) => {
                const month = item.Month;
                if (item.segment === selectedSubCategoryTOS) {
                    if (!acc[month]) {
                        acc[month] = { month };
                    }
                    acc[month] = { ...acc[month], ...item };
                }
                return acc;
            }, {});
        }

        // Multiply Recovery_% by 100
        Object.values(mergedData).forEach(item => {
            if (item["Recovery_%"]) {
                item["Recovery_%"] = item["Recovery_%"] * 100;
            }
        });

        
        // Convert the merged data back to an array
        setGraphData(Object.values(mergedData));
    } else {
        // Clear the graph data if no valid category is selected
        setGraphData([]);
    }
}, [portfolioRecoveryGraphData, activeButton, selectedCategory, selectedSubCategoryLocation, selectedSubCategoryTOS]);

  

  // Format large numbers as millions
  const formatYAxisTick = (tick: any) => {
    const value = tick;
    if (value === 0) {
      return `${value}`;
    } else {
      return `${value.toFixed(1)}%`;
    }
  };
  const formatNumberMillion = (num: any) => {
    if (num === 0) {
      return "0";
    } else if (num >= 1e7) {
      // 10 million and above
      return (num / 1e6).toFixed(2);
    } else if (num >= 1e6) {
      // 1 million to 10 million
      return (num / 1e6).toFixed(2);
    } else if (num >= 1e5) {
      // 100,000 to 1 million
      return (num / 1e6).toFixed(2);
    } else {
      // Less than 100,000
      return (num / 1e6).toFixed(2); // You can adjust this if needed
    }
  };
  const arrGraphTicks = () => {
    let arr = [0];
    let maxNum = 0;
    if (graphData) {
      maxNum = Math.max(...graphData?.map((item: any) => item["Recovery_%"]));
    } else {
      return [0];
    }
    console.log("maxNum value rhs", maxNum);

    let num1 = 0;
    for (let i = 0; i <= 10; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 10;
    }
    return arr ;
  };
  const arrGraphleft = () => {
    let arr = [0];
    let maxNum = 0;
    if (graphData) {
      maxNum = Math.max(...graphData?.map((item: any) => item?.recovery));
    } else {
      return [0];
    }
    let num1 = 0;
    let increment = Math.ceil(maxNum / 10);

    for (let i = 0; i <= 10; i++) {
      arr.push(num1);
      num1 += increment;
    }

    return arr;
  };
  const getMonthLabel = (tick: string) => {
    const date = new Date(tick);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
};
  return (
    <div className="w-full xl:w-[100%] ml-3 h-[405px] flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3">
      <div className="w-full flex flex-wrap justify-between lg:px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          {delinquencyUniqueGraphTitle}
        </h1>
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#4169E1",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000]">
              Recovery (left scale)
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#FF7A00",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000]">
              Recovery % (right scale)
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="99%" height={315}>
        <ComposedChart
          margin={{ top: 10, right: 35, left: 10, bottom: 25 }}
          data={graphData}
        >
          <CartesianGrid strokeDasharray="5 5" vertical={false} />
          <XAxis
                dataKey="month"
                angle={-70}
                dy={0}
                dx={-4}
                textAnchor="end"
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
                tickFormatter={getMonthLabel}
                interval={0}
              />
              <YAxis
                yAxisId="left"
                fontWeight={400}
                fontSize={9}
                fill={"#3E4259"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={28}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatNumberMillion}
                ticks={arrGraphleft()}
                interval={0}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                fontSize={11}
                fontWeight={400}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={25}
                axisLine={false}
                tickLine={false}
                tickFormatter={formatYAxisTick}
                ticks={arrGraphTicks()}
              />
      <Tooltip
  formatter={(value: any, name) => {
    const formattedValue =
      typeof value === "number" && name ==="Recovery %"
        ? `${(value).toFixed(1)}%`
        : typeof value === "number"
        ? `₹ ${Math.floor(value).toLocaleString()}`
        : `₹ ${parseFloat(value.toFixed(2)).toLocaleString()}`;
    return [formattedValue, `${name}`];
  }}
  labelFormatter={(label) => getMonthLabel(label)} 
/>
          <Bar
                yAxisId="left"
                dataKey="recovery"
                name="Recovery"
                stackId="a"
                 fill="#4169E1"
                barSize={10}
                radius={[10, 10, 10, 10]}
              />
              <Line
                yAxisId="right"
                type="linear"
                dataKey="Recovery_%"
                name="Recovery %"
                stroke="#FF7A00"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewSettlementRhs;
