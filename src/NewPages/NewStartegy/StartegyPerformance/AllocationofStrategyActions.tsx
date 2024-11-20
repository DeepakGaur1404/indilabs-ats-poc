import React, { useEffect, useState } from "react";


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
const staticRevisedJsonDataSettlementData = {
  "1": {
    "Hold": 20,
    "Email": 15,
    "Message": 15,
    "Whatsapp": 30,
    "Call": 20,
    "Field": 0,
    "Pre-Legal": 0,
  },
  "2": {
    "Hold": 20,
    "Email": 15,
    "Message": 15,
    "Whatsapp": 30,
    "Call": 20,
    "Field": 0,
    "Pre-Legal": 0,
  },
  "3": {
    "Hold": 20,
    "Email": 15,
    "Message": 15,
    "Whatsapp": 30,
    "Call": 20,
    "Field": 0,
    "Pre-Legal": 0,
  },
 "4": {
    "Hold": 10,
    "Email": 15,
    "Message": 20,
    "Whatsapp": 25,
    "Call": 30,
    "Field": 0,
    "Pre-Legal": 0,
  },
  "5": {
    "Hold": 10,
    "Email": 12,
    "Message": 16,
    "Whatsapp": 27,
    "Call": 35,
    "Field": 0,
    "Pre-Legal": 0,
  },
  "6": {
    "Hold": 0,
    "Email": 10,
    "Message": 20,
    "Whatsapp": 30,
    "Call": 32,
    "Field": 8,
    "Pre-Legal": 0,
  },
  "7": {
    "Hold": 0,
    "Email": 8,
    "Message": 12,
    "Whatsapp": 35,
    "Call": 35,
    "Field": 10,
    "Pre-Legal": 0,
  },
  "8": {
    "Hold": 0,
    "Email": 8,
    "Message": 12,
    "Whatsapp": 35,
    "Call": 35,
    "Field": 10,
    "Pre-Legal": 0,
  },
  "9": {
    "Hold": 0,
    "Email": 5,
    "Message": 12,
    "Whatsapp": 35,
    "Call": 35,
    "Field": 13,
    "Pre-Legal": 0,
  },
  "10": {
    "Hold": 0,
    "Email": 5,
    "Message": 12,
    "Whatsapp": 35,
    "Call": 35,
    "Field": 13,
    "Pre-Legal": 0,
  },
  "11": {
    "Hold": 0,
    "Email": 5,
    "Message": 12,
    "Whatsapp": 30,
    "Call": 35,
    "Field": 18,
    "Pre-Legal": 0,
  },
  "12": {
    "Hold": 0,
    "Email": 5,
    "Message": 12,
    "Whatsapp": 30,
    "Call": 35,
    "Field": 18,
    "Pre-Legal": 0,
  },
  "13": {
    "Hold": 0,
    "Email": 5,
    "Message": 10,
    "Whatsapp": 25,
    "Call": 40,
    "Field": 20,
    "Pre-Legal": 0,
  },
  "14": {
    "Hold": 0,
    "Email": 5,
    "Message": 10,
    "Whatsapp": 25,
    "Call": 40,
    "Field": 20,
    "Pre-Legal": 0,
  },
  "15": {
   "Hold": 0,
    "Email": 5,
    "Message": 8,
    "Whatsapp": 20,
    "Call": 45,
    "Field": 22,
    "Pre-Legal": 0,
  },
  "16": {
    "Hold": 0,
    "Email": 5,
    "Message": 8,
    "Whatsapp": 20,
    "Call": 45,
    "Field": 22,
    "Pre-Legal": 0,
  },
  "17": {
    "Hold": 0,
    "Email": 5,
    "Message": 5,
    "Whatsapp": 21,
    "Call": 47,
    "Field": 22,
    "Pre-Legal": 0,
  },
  "18": {
    "Hold": 0,
    "Email": 5,
    "Message": 4,
    "Whatsapp": 18,
    "Call": 50,
    "Field": 23,
    "Pre-Legal": 0,
  },
  "19": {
    "Hold": 0,
    "Email": 4,
    "Message": 4,
    "Whatsapp": 18,
    "Call": 50,
    "Field": 24,
    "Pre-Legal": 0,
  },
  "20": {
    "Hold": 0,
    "Email": 3,
    "Message": 3,
    "Whatsapp": 14,
    "Call": 55,
    "Field": 25,
    "Pre-Legal": 0,
  },
  "21": {
    "Hold": 0,
    "Email": 3,
    "Message": 3,
    "Whatsapp": 14,
    "Call": 53,
    "Field": 22,
    "Pre-Legal": 5,
  },
  "22": {
    "Hold": 0,
    "Email": 0,
    "Message": 6,
    "Whatsapp": 14,
    "Call": 51,
    "Field": 24,
    "Pre-Legal": 5,
  },
  "23": {
    "Hold": 0,
    "Email": 0,
    "Message": 6,
    "Whatsapp": 12,
    "Call": 50,
    "Field": 25,
    "Pre-Legal": 7,},
  "24": {
   "Hold": 0,
    "Email": 0,
    "Message": 6,
    "Whatsapp": 12,
    "Call": 47,
    "Field": 25,
    "Pre-Legal": 10,
  },
  "25": {
    "Hold": 0,
    "Email": 0,
    "Message": 6,
    "Whatsapp": 10,
    "Call": 45,
    "Field": 25,
    "Pre-Legal": 14,
  },
  "26": {
    "Hold": 0,
    "Email": 0,
    "Message": 4,
    "Whatsapp": 12,
    "Call": 38,
    "Field": 27,
    "Pre-Legal": 19,
  },
  "27": {
    "Hold": 0,
    "Email": 0,
    "Message": 3,
    "Whatsapp": 7,
    "Call": 30,
    "Field": 35,
    "Pre-Legal": 25,
  },

  "28": {
    "Hold": 0,
    "Email": 0,
    "Message": 0,
    "Whatsapp": 5,
    "Call": 25,
    "Field": 40,
    "Pre-Legal": 30,
  },
  "29": {
    "Hold": 0,
    "Email": 0,
    "Message": 0,
    "Whatsapp": 0,
    "Call": 15,
    "Field": 50,
    "Pre-Legal": 35,
  },
  "30": {
    "Hold": 0,
    "Email": 0,
    "Message": 0,
    "Whatsapp": 0,
    "Call": 15,
    "Field": 50,
    "Pre-Legal": 35,
  },

}
type Props = {
//   activeButton: any;
//   //   setActiveButton: any;
//   selectedCategoryButton: any;
//   selectedCategoryAll: any;

};
const colors = [
  
  "#DEDEDE",
  "#FFB200",
  "#FF8C4C",
  "#70DD60",
  "#BBF429",
  "#11ADD8",
  "#DE303F"
];

interface DataPoint {
//   "zero%"?: number;
//   "partial%"?: number;
//   "full%"?: number;
  "Hold"?: number;
  "Email"?: number;
  "Message"?: number;
  "Whatsapp"?: number;
  "Call"?: number;
  "Field"?: number;
  "Pre-Legal"?: number;
}

interface ChartData {
  name: string;
  [key: string]: number | string | undefined;
}


const AllocationofStrategyActions = ({
//   activeButton,
//   selectedCategoryButton,
//   selectedCategoryAll,

}: Props) => {
  //recovery
  const [data, setData] = useState<ChartData[]>([]);
  const [dataUnique, setDataUnique] = useState<ChartData[]>([]);
  const [selectedCategoriesAll, setselectedCategoriesAll] = useState();
  const [error, setError] = useState<string | null>(null);
  const [staticRevisedJsonDataSettlement,setStaticRevisedJsonDataSettlement]=useState<any>(staticRevisedJsonDataSettlementData)

//   useEffect(() => {
//     fetchData("cohort_completion_settlement");
    
//   }, []);
//   const fetchData = async (blob: any) => {
//     const url = `https://indilab-apim.azure-api.net/api/settlements?blob=cohort_completion_settlement`;
//     const headers = {
//       "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
//     };
   
//     try {
//       const response = await fetch(url, { method: "GET", headers });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const result = await response.json();
//       console.log(result.data,"fetched data");
//       setStaticRevisedJsonDataSettlement(result.data);
      
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };
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
    // if (
    //   activeButton === "$Recovery" &&
    //   selectedCategoryButton === "all" &&
    //   selectedCategoryAll === "pos"
    // ) {
      const allDataPos: ChartData[] = processDataPos(staticRevisedJsonDataSettlement);
      console.log("allData pos", allDataPos);
      setData(allDataPos);
    // }

  }, [
    // activeButton,
    // selectedCategoryButton,
    // selectedCategoryAll,
    selectedCategoriesAll,
    staticRevisedJsonDataSettlement
  ]);

//   useEffect(() => {
//     setselectedCategoriesAll(selectedCategoryAll);
//   }, [
//     selectedCategoryAll,staticRevisedJsonDataSettlement

//   ]);
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
    <div className="w-full xl:w-[55%] relative  ml-3 h-[368px]  flex flex-col justify-center items-center p-3 bg-white py-3  border-[#E3E3E3] border-[1px] rounded-xl">
      <div className="w-[100%] flex flex-wrap  md:flex justify-between lg: px-0 my-3 mt-4">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans']">
        % Allocation of Strategy Actions
        </h1>
      
        <div className="flex items-end gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-3">
         
           {staticRevisedJsonDataSettlement 
            ? Object.keys(staticRevisedJsonDataSettlement["1"]).map(
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
            : 
              Object.keys(staticRevisedJsonDataSettlement["1.0"]).map(
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
            }

           
        </div>
      </div>
    
        <>
          <ResponsiveContainer width="100%" height={310}>
            <BarChart
              data={data}
              margin={{ top: 10, right: 0, left: 10, bottom: 5 }}
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
                // tickFormatter={getMonthLabel}
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


            
                <>
             
                  <Bar
                    dataKey="Hold"
                    stackId="a"
                    fill="#DEDEDE"
                    barSize={10}
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar dataKey="Email" stackId="a" fill="#FFB200" barSize={10} />
                  <Bar dataKey="Message" stackId="a" fill="#FF8C4C" barSize={10} />
                  <Bar dataKey="Whatsapp" stackId="a" fill="#70DD60" barSize={10} />
                  <Bar dataKey="Call" stackId="a" fill="#BBF429" barSize={10} />
                  <Bar dataKey="Field" stackId="a" fill="#11ADD8" barSize={10} />
                  <Bar
                    dataKey="Pre-Legal"
                    stackId="a"
                    fill="#DE303F"
                    barSize={10}
                    radius={[4, 4, 0, 0]}
                  />
                </>
            
            </BarChart>
          </ResponsiveContainer>
     
        </>
     
    </div>
  );
};

export default AllocationofStrategyActions;
