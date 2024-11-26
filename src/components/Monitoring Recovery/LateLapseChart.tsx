import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const lineColors = [
  "#FFB200",
  "#34B53A",
  "#5C4E8E",
  "#4339F2",
  "#20DFD9",
  "#158BDF",
  "#DC3C49",
];
type Props = {
  activeButton: string;

  LLData:any
  newselectedCategory:any;
   activeTabs:any;
   PremOSCategorie:any
   PremFrequency:any
   PolicyYear :any
   Product:any
};
const LateLapseChart = ({
  activeButton,
  
  LLData,
  newselectedCategory,
   activeTabs,
   PremOSCategorie,PremFrequency,PolicyYear ,Product
}: Props) => {
  const formatYAxisTick = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed(1)}%`;
    }
  };
 
  interface StaticDataItem {
    sub_segment: string;
    
  }
  
  interface StaticData {
    all: StaticDataItem[];
    pos_seg: StaticDataItem[];
  }
  const [dataRecovery, setDataRecovery] = useState([]);
  //   const [allData, SetalllData] = useState([]);
 
  const [segmentData, SetSegmentData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [hoveredLine, setHoveredLine] = useState(null);
  const handleMouseEnter = (lineKey:any) => {
    setHoveredLine(lineKey); // Set the hovered line
  };
// useEffect(()=>{
// setStaticData(data)
// },[staticData])

  const handleMouseLeave = () => {
    setHoveredLine(null); // Reset the hovered line when mouse leaves
  };
  const arrTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (dataRecovery) {
      maxNum = Math.max(
        ...dataRecovery?.map((item: any,i:any) => (item["Q1"] ? item["Q1"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q2"] ? item["Q2"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q3"] ? item["Q3"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q4"] ? item["Q4"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q5"] ? item["Q5"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q6"] ? item["Q6"] : 0)),
        ...dataRecovery?.map((item: any) =>
          item["Q_Benchmark"] ? item["Q_Benchmark"] : 0
        )
      );
    } else {
      return [0];
    }
    let num1 = 0;
    for (let i = 0; i <= 10; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 10;
    }
    console.log(maxNum, "arr.maxnum..");

    return arr;
  };

  const tooltipFormatter = (value: any, name: any) => {
    if (name === "Q1") {
      return [`${value.toFixed(2)}%`, `2023Q2`];
    } else if (name === "Q2") {
      return [`${value.toFixed(2)}%`, `2023Q3`];
    } else if (name === "Q3") {
      return [`${value.toFixed(2)}%`, `2023Q4`];
    } else if (name === "Q4") {
      return [`${value.toFixed(2)}%`, `2024Q1`];
    } else if (name === "Q5") {
      return [`${value.toFixed(2)}%`, `2024Q2`];
    } else if (name === "Q6") {
      return [`${value.toFixed(2)}%`, `2024Q3`];
    } else if (name === "Q_Benchmark") {
      return [`${value.toFixed(2)}%`, `2024Q4`];
    } else {
      return null;
    }
  };

  const toFilterData = (param: any) => {
    console.log(param, "param....");
  
    let arr: any = [];
    const maxArr = param?.map((item: any) => [...item.M]); // Extract all M values
    maxArr.forEach((item: any) => {
      arr = [...arr, ...item];
    });
  
    const data: any = param[0]?.M.map((month: string, i: number) => ({
      name: month, // Use month names from the 'M' array
      Q1: param[0]?.percentage[i] || null, // Ensure safe access to percentage values
      Q2: param[1]?.percentage[i] || null,
      Q3: param[2]?.percentage[i] || null,
      Q4: param[3]?.percentage[i] || null,
      Q5: param[4]?.percentage[i] || null,
      Q6: param[5]?.percentage[i] || null,
      Q_Benchmark: param[6]?.percentage[i] || null,
    }));
  
    setDataRecovery(data);
  };

console.log(dataRecovery,"dataRecovery");

 
 
  console.log(LLData["PREM OS"],"LLData[PREM OS]...........");
  
  useEffect(() => {
   if (activeTabs==="Late Lapse"&& newselectedCategory==="All"&& LLData.all){
    toFilterData(LLData.all)
   }
   else if (activeTabs==="Late Lapse"&& newselectedCategory==="Prem_OS"&& LLData["PREM OS"]){
      let ld: StaticDataItem[] = []; 
        if (PremOSCategorie === "<20K" && LLData["PREM OS"]) {
          ld = LLData["PREM OS"].filter((item:any) => item.sub_segment === "<=20k");
        } else if (PremOSCategorie === "20K-50K" && LLData["PREM OS"]) {
          ld = LLData["PREM OS"].filter((item:any) => item.sub_segment === ">20k, <=50k");
        } else if (PremOSCategorie === "50K-150K" && LLData["PREM OS"]) {
          ld = LLData["PREM OS"].filter((item:any) => item.sub_segment === ">50k, <=150k");
        }else if (PremOSCategorie === ">150K" && LLData["PREM OS"]) {
          ld = LLData["PREM OS"].filter((item:any) => item.sub_segment === ">150k");
        }
        
        toFilterData(ld);
   }
 
   else if (activeTabs==="Late Lapse"&& newselectedCategory==="Prem_Frequency"&& LLData["PREM FREQ"]){
    let ld: StaticDataItem[] = []; 
      if (PremFrequency === "Monthly") {
        ld = LLData["PREM FREQ"].filter((item:any) => item.sub_segment === "Monthly");
      } else if (PremFrequency === "Quarterly") {
        ld = LLData["PREM FREQ"].filter((item:any) => item.sub_segment === "Quarterly");
      } else if (PremFrequency === "Semi Ann") {
        ld = LLData["PREM FREQ"].filter((item:any) => item.sub_segment === "Semi Ann");
      }else if (PremFrequency === "Annual") {
        ld = LLData["PREM FREQ"].filter((item:any) => item.sub_segment === "Annual");
      }
      
      toFilterData(ld);
 }  

 else if (activeTabs==="Late Lapse"&& newselectedCategory === "Policy_Year"&& LLData["POLICY YEAR"]){
  let ld: StaticDataItem[] = []; 
    if (PolicyYear  === "13M") {
      ld = LLData["POLICY YEAR"].filter((item:any) => item.sub_segment === "13M");
    } else if (PolicyYear  === "25M") {
      ld = LLData["POLICY YEAR"].filter((item:any) => item.sub_segment === "25M");
    } else if (PolicyYear  === "61M") {
      ld = LLData["POLICY YEAR"].filter((item:any) => item.sub_segment === "61M");
    }else if (PolicyYear  === "49M") {
      ld = LLData["POLICY YEAR"].filter((item:any) => item.sub_segment === "49M");
    }
    
    toFilterData(ld);
} 
else if (activeTabs==="Late Lapse"&& newselectedCategory==="Prem_Frequency"&& LLData["PREM FREQ"]){
  let ld: StaticDataItem[] = []; 
    if (PremFrequency === "Monthly") {
      ld = LLData["PREM FREQ"].filter((item:any) => item.sub_segment === "Monthly");
    } else if (PremFrequency === "Quarterly") {
      ld = LLData["PREM FREQ"].filter((item:any) => item.sub_segment === "Quarterly");
    } else if (PremFrequency === "Semi Ann") {
      ld = LLData["PREM FREQ"].filter((item:any) => item.sub_segment === "Semi Ann");
    }else if (PremFrequency === "Annual") {
      ld = LLData["PREM FREQ"].filter((item:any) => item.sub_segment === "Annual");
    }
    
    toFilterData(ld);
}  
else if (activeTabs==="Late Lapse"&& newselectedCategory==="Product"&& LLData["PRODUCT TYPE"]){
  let ld: StaticDataItem[] = []; 
    if (Product === "Traditional") {
      ld = LLData["PRODUCT TYPE"].filter((item:any) => item.sub_segment === "TRADITIONAL");
    } else if (Product === "ULIP") {
      ld = LLData["PRODUCT TYPE"].filter((item:any) => item.sub_segment === "ULIP");
    } 
    
    
    toFilterData(ld);
}      
    else {
      toFilterData([]);
    }
  }, [newselectedCategory,activeTabs,PremOSCategorie,PremFrequency,PolicyYear,Product ]);
  // Add staticData to the dependency array
  
  return (
    <div className="w-full xl:w-[100%] h-[500px]  rounded-lg py-1 p-4 ml-2 shadow-md bg-white">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
        Cumulative Retention %
        </h1>
        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7" >
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
            2023Q2
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#34B53A",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            2023Q3
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#5C4E8E",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            2023Q4
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#4339F2",

                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            2024Q1
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#20DFD9",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            2024Q2
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#158BDF",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            2024Q3
            </span>
          </div>
          <div className="flex items-center ">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#DC3C49",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            2024Q4
            </span>
          </div>
        </div>
      </div>
      {/* {activeButton === "$Recovery" && ( */}
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={dataRecovery} margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="0 0" vertical={false} />
            <XAxis
              dataKey="name"
              fontWeight={500}
              fontSize={12}
              fontFamily="DM Sans"
              axisLine={false}
              tickLine={false}
              padding={{ left: 22, right: 10 }}
            />
            <YAxis
              fontWeight={500}
              fontSize={12}
              fontFamily="DM Sans"
              domain={[0, "dataMax"]}
              width={35}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              ticks={arrTicks()}
            />
            <Tooltip formatter={tooltipFormatter} />

            {lineColors.map(
              (item, idx) =>
                idx < 6 && (
                  <Line
                key={`Q${idx + 1}`}
                type="monotone"
                dataKey={`Q${idx + 1}`}
                stroke={item}
                strokeWidth={3}
                dot={false}
                // opacity={hoveredLine === null || hoveredLine === `Q${idx + 1}` ? 1 : 0.2} // Apply opacity based on hover
              />
                )
            )}
           
           <Line
              type="monotone"
              dataKey="Q_Benchmark"
              stroke="#DC3C49"
              strokeWidth={3}
              dot={false}

            /> 
          </LineChart>
        </ResponsiveContainer>
      {/* )} */}
    </div>
  );
};

export default LateLapseChart;