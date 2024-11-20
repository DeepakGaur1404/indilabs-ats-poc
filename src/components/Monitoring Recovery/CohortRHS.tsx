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
  ResponsiveContainer,
} from "recharts";
const staticRevisedJsonDataSettlement = {
  "1.0": {
    "zero%": 6.8359375,
    "partial%": 20.703125,
    "full%": 72.4609375
  },
  "2.0": {
    "zero%": 18.37837837837838,
    "partial%": 32.432432432432435,
    "full%": 49.18918918918919
  },
  "3.0": {
    "zero%": 31.318681318681318,
    "partial%": 46.15384615384615,
    "full%": 22.52747252747253
  },
  "4.0": {
    "zero%": 19.047619047619047,
    "partial%": 50.0,
    "full%": 30.952380952380953
  },
  "5.0": {
    "zero%": 13.793103448275861,
    "partial%": 62.06896551724138,
    "full%": 24.137931034482758
  },
  "6.0": {
    "zero%": 26.190476190476193,
    "partial%": 59.523809523809526,
    "full%": 14.285714285714285
  },
  "7.0": {
    "zero%": 50.0,
    "partial%": 50.0,
    "full%": 0.0
  },
  "8.0": {
    "zero%": 0.0,
    "partial%": 100.0,
    "full%": 0.0
  }
}
type Props = {
  activeButton: any;
  //   setActiveButton: any;
  selectedCategoryButton: any;
  selectedCategoryAll: any;

};
const colors = [
  //   "#8EB5F4",
  "#DC3C49",
  "#FFB200",
  // "#FA7B33",
  "#496CD5",

  "#34B53A",
  "#808080",
  "#A020F0",
];

interface DataPoint {
  "zero%"?: number;
  "partial%"?: number;
  "full%"?: number;

}

interface ChartData {
  name: string;
  [key: string]: number | string | undefined;
}


const CohortRHS = ({
  activeButton,
  selectedCategoryButton,
  selectedCategoryAll,

}: Props) => {
  //recovery
  const [data, setData] = useState<ChartData[]>([]);
  const [dataUnique, setDataUnique] = useState<ChartData[]>([]);
  const [selectedCategoriesAll, setselectedCategoriesAll] = useState();
  const [error, setError] = useState<string | null>(null);
  const [staticRevisedJsonDataSettlement,setStaticRevisedJsonDataSettlement]=useState<any>()
  useEffect(() => {
    fetchData("cohort_completion_settlement");
    
  }, []);
  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/settlements?blob=cohort_completion_settlement`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };
   
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data,"fetched data");
      setStaticRevisedJsonDataSettlement(result.data);
      
    } catch (err: any) {
      setError(err.message);
    }
  };
  const processDataPos = (data: Record<string, DataPoint> | null | undefined): ChartData[] => {
    console.log("Raw data received for processing:", data); // Log incoming data
  
    if (!data) {
      console.warn("Data is undefined or null, returning an empty array.");
      return [];
    }
  
    const processedData = Object.entries(data).map(([version, values]) => ({
      name: version,
      ...values,
    }));
  
    console.log("Processed data:", processedData); // Log processed data
    return processedData;
  };
  
  
  useEffect(() => {
    if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "all" &&
      selectedCategoryAll === "pos"
    ) {
      const allDataPos: ChartData[] = processDataPos(staticRevisedJsonDataSettlement);
      console.log("allData pos", allDataPos);
      setData(allDataPos);
    }

  }, [
    activeButton,
    selectedCategoryButton,
    selectedCategoryAll,
    selectedCategoriesAll,
    staticRevisedJsonDataSettlement
  ]);

  useEffect(() => {
    setselectedCategoriesAll(selectedCategoryAll);
  }, [
    selectedCategoryAll,staticRevisedJsonDataSettlement

  ]);
  const formatYAxisTick = (tick: any) => {
    // if (tick == 0) {
    return `${tick}%`;
    // } else {
    // return `${Math.floor(tick).toLocaleString()}`;
    // }
  };
  const getMonthLabel = (tick: any) => {
    const tickMapping: any = {
      "1.0": "Jan",
      "2.0": "Feb",
      "3.0": "Mar",
      "4.0": "Apr",
      "5.0": "May",
      "6.0": "Jun",
      "7.0": "Jul",
      "8.0": "Aug"
      // Add more mappings if needed
    };

    return tickMapping[tick] || tick;  // Default to tick value if no mapping is found
  };

  return (
    <div className="w-full xl:w-[100%] relative  ml-3 h-[405px]  flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3 mt-5">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans']">
          Contribution %
        </h1>
        <p
          className="
      text-[14px] italic text-[#6A7691] font-[400]
          font-['DM Sans' !important]
           top-1/2 transform -translate-y-1/2 -rotate-90
         customClassfour cohort_textrhs
  "
          style={{ zIndex: 100 }}
        >
          % Payers
        </p>
        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7">
          {selectedCategoriesAll === "pos" &&
            activeButton === "$Recovery" &&
            selectedCategoryButton === "all" && staticRevisedJsonDataSettlement
            ? Object.keys(staticRevisedJsonDataSettlement["1.0"]).map(
              (series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colors[index % colors.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              )
            )
            : selectedCategoriesAll === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "all"
              ? Object.keys(staticRevisedJsonDataSettlement["1.0"]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )


              : null}
        </div>
      </div>
      {activeButton === "$Recovery" && (
        <>
          <ResponsiveContainer width="100%" height={325}>
            <BarChart
              data={data}
              margin={{ top: 10, right: 0, left: 30, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="7 7" vertical={false} />
              <XAxis
                dataKey="name"
                fontWeight={400}
                fontSize={12}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
                tickFormatter={getMonthLabel}
              />
              <YAxis
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                domain={[0, "dataMax"]}
                width={28}
                tickLine={false}
                axisLine={false}
                ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                tickFormatter={formatYAxisTick}
                // ticks={arrTicks()}
                interval={0}
              />
              <Tooltip
                formatter={(value, name) => {
                  const formattedValue =
                    typeof value === "number" && value !== 0
                      ? `${value.toFixed(2)}%`
                      : `${value}%`;
                  return [formattedValue, `${name}`];
                }}
                labelFormatter={(label) => getMonthLabel(label)}  
              />


              {selectedCategoriesAll === "pos" &&
                selectedCategoryButton === "all" ? (
                <>
                  <Bar
                    dataKey="full%"
                    stackId="a"
                    fill="#496CD5"
                    barSize={25}
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar dataKey="partial%" stackId="a" fill="#FFB200" barSize={25} />
                  {/* <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} /> */}

                  <Bar
                    dataKey="zero%"
                    stackId="a"
                    fill="#DC3C49"
                    barSize={25}
                    radius={[4, 4, 0, 0]}
                  />
                </>
              ) : null}
            </BarChart>
          </ResponsiveContainer>
          <p className="-mt-[10px]  text-center text-[14px] italic text-[#6A7691] font-[400] font-['DM Sans'] benchmark_text customClasssix ">
            No of Installments
          </p>
        </>
      )}
    </div>
  );
};

export default CohortRHS;
