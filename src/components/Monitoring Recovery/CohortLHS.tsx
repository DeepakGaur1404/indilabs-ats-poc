import React, { useEffect, useState } from "react";
import rightarrow from "../../assets/images/rightarrow.svg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  LineChart,
  ReferenceLine,
  ComposedChart,
} from "recharts";

type Props = {
  delinquencyGraphTitle: string;
  activeButton: string;
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
  selectedSubCategoryLocation: string;
  selectedSubCategoryTOS: string;
  selectedSubCategoryAgency: string;
  selectedSubCategorySegments: string;
  selectedSubCategoryPayment: string;
  selectedSubCategoryUniquePayerSegments: string;
  portfolioRecoveryGraphData: any;
  portfolioRecoveryUniquePayerGraphData: any;
  delinquencyUniqueGraphTitle: any;
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
    sub_segment: any;
    value: any;
  }
];

interface Entry {
  month: string;
  sub_segment: string;
  active_recovery_balance: number;
  recovery: number;
  value: number;
}


const colors = ["#4169E1", "#FFB200"];

const CohortLHS = ({
  delinquencyGraphTitle,
  activeButton,
  selectedCategory,
  selectedSubCategory,
  selectedSubCategoryTwo,
  selectedSubCategoryLocation,
  selectedSubCategoryTOS,
  selectedSubCategoryAgency,
  selectedSubCategorySegments,
  selectedSubCategoryPayment,
  selectedSubCategoryUniquePayerSegments,
  portfolioRecoveryGraphData,
 
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
  const [selectedSubCategoriesTOS, setselectedSubCategoryTOS] = useState("");
 
  const [selectedSubCategoriesSegments, setselectedSubCategorySegments] =
    useState("");
  const [
    selectedSubCategoriesSegmentsUniquePayer,
    setselectedSubCategoriesSegmentsUniquePayer,
  ] = useState("");


 
 

  
 
  const formatYAxisTick = (tick: any) => {
    const value = tick ;
    if (value === 0) {
      return `${value}`;
    } else {
      return `${value.toFixed(0)}%`;
    }
  };

  useEffect(() => {
    setselectedActiveButton(activeButton);
    setselectedCategory(selectedCategory);
    setselectedSubCategory(selectedSubCategory);
    setselectedSubCategoryTwo(selectedSubCategoryTwo);
    setselectedSubCategoryAgency(selectedSubCategoryAgency);
    setselectedSubCategoryPayment(selectedSubCategoryPayment);
    setselectedSubCategoryLocation(selectedSubCategoryLocation);
    setselectedSubCategorySegments(selectedSubCategorySegments);
    setselectedSubCategoryTOS(selectedSubCategoryTOS);
    setselectedSubCategoriesSegmentsUniquePayer(
      selectedSubCategoryUniquePayerSegments
    );
    // fetchNewdata();
  }, [
    activeButton,
    selectedCategory,
    selectedSubCategory,
    selectedSubCategoryTwo,
    selectedSubCategoryAgency,
    selectedSubCategoryPayment,
    selectedSubCategoryLocation,
    selectedSubCategoryTOS,
    selectedSubCategorySegments,
    selectedSubCategoryUniquePayerSegments,
  ]);


  const graphData = portfolioRecoveryGraphData
  ? Object.keys(portfolioRecoveryGraphData).map(key => ({
      month: key,
      recovery_percentage: portfolioRecoveryGraphData[key].recovery_percentage,
      avg_waiver: portfolioRecoveryGraphData[key].avg_waiver,
    }))
  : [];  
     

  const arrGraphTicks = () => {
    let arr = [];
    let maxNum = 0;
    
    if (graphData && graphData.length > 0) {
      maxNum = Math.max(
        ...graphData.map((item) => item.avg_waiver || 0)  // Make sure we're referencing avg_waiver based on new data format
      );
    } else {
      return [0];  // Return [0] if there's no data
    }
  
    let increment = maxNum / 5;  // Set the increment as 1/5th of the max value
    for (let i = 0; i <= 5; i++) {
      arr.push(parseFloat((i * increment).toFixed(1)));
    }
  
    console.log("Updated arrGraphTicks values", arr);
    return arr;
  };
  
  const arrGraphleft = () => {
    let arr = [];
    let maxNum = 0;
  
    if (graphData && graphData.length > 0) {
      maxNum = Math.max(
        ...graphData.map((item) => item.recovery_percentage || 0)  // Update according to the new data structure
      );
    } else {
      return [0];  // Return [0] if there's no data
    }
  
    let increment = Math.ceil(maxNum / 5);  // Set increment to divide the max number into 5 parts
    for (let i = 0; i <= 5; i++) {
      arr.push(i * increment);
    }
  
    console.log("Updated arrGraphleft values", arr);
    return arr;
  };
  
  return (
    <div className="w-full xl:w-[100%] relative ml-3 h-[405px]  flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          {delinquencyGraphTitle}
        </h1>
        <p
        className="
      text-[14px] italic text-[#6A7691] font-[400]
          font-['DM Sans' !important]
           top-1/2 transform -translate-y-1/2 -rotate-90
         customClassfour cohort_text ml-4
  "
        style={{ zIndex: 100 }}
      >
         Recovery %
      </p>
        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7 mr-3">
          <div className="flex items-center ">
         
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
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              {delinquencyGraphTitle === "Total Accounts"
                ? "Accounts (left scale)"
                : "Recovery %"}
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#FFB200",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              {delinquencyGraphTitle === "Total Accounts"
                ? "Average Payment (right scale,thousands)"
                : "Average Waiver"}
            </span>
          </div>
        </div>
       
      </div>
      {delinquencyGraphTitle === "Recovery % and Waiver % by Installments" &&
        selectedActiveButton === "$Recovery" && (
            
         <>
          <ResponsiveContainer width="99%" height={330}>
            <ComposedChart
              margin={{ top: 20, right: 10, left: 30, bottom: 10 }}
              barGap={0}
              barCategoryGap={0}
              data={graphData}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="month"
                // angle={-70}
                // dy={0}
                // dx={-4}
                // textAnchor="end"
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
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
                tickFormatter={formatYAxisTick }
                // tickFormatter={formatNumberMillion}
                axisLine={false}
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
                 tickFormatter={formatYAxisTick }
                axisLine={false}
                tickLine={false}
                // tickFormatter={formatYAxisTick}
                ticks={arrGraphTicks()}
              />

<Tooltip
   formatter={(value: any, name) => {
    const formattedValue =
      typeof value === "number" && name === "Average Waiver %"
        ? `${parseFloat(value.toFixed(2)).toLocaleString()}%`
        : typeof value === "number"
        ? `${parseFloat(value.toFixed(2)).toLocaleString()}%`
        : `${parseFloat(value.toFixed(2)).toLocaleString()}%`;
    return [formattedValue, `${name}`];
  }}
/>

            
               <Bar
               yAxisId="left"
               dataKey="recovery_percentage"
               name="Recovery %"
               stackId="a"
               fill={colors[0]}
               radius={[5, 5, 5, 5]}
               barSize={35}
             />
         
             <Line
               yAxisId="right"
               type="linear"
               dataKey="avg_waiver"
               name="Average Waiver %"
               stroke="#FFB200"
               strokeWidth={3}
               dot={false}
               activeDot={{ r: 8 }}
             />
            </ComposedChart>
          </ResponsiveContainer>
        <p className="-mt-[10px]  text-center text-[14px] italic text-[#6A7691] font-[400] font-['DM Sans'] benchmark_text customClasssix ">
        No of Installments
      </p>
      </>
        )}
      
    </div>
  );
};

export default CohortLHS;
