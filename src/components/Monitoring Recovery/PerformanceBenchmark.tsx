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
  ReferenceLine,
  Scatter,
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
 
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
  selectedBenchmarkCategory:string;
  selectedCategory: string;
 
  staticData:any;
//   staticData:any;
};
const PerformanceBenchmarkChart = ({
  activeButton,
 
  selectedCategory,
  selectedSubCategory,
  selectedBenchmarkCategory,
  selectedSubCategoryTwo,
  staticData

}: Props) => {
  const formatYAxisTick = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed(0)}%`;
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


  const handleMouseLeave = () => {
    setHoveredLine(null); // Reset the hovered line when mouse leaves
  };
  const arrTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (dataRecovery) {
      maxNum = Math.max(
        ...dataRecovery?.map((item: any) => (item["Q1"] ? item["Q1"] : 0)),
        
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
      return [`${value.toFixed(2)}%`, `Current Performance`];
    }
   
     else if (name === "Q_Benchmark") {
      return [`${value.toFixed(2)}%`, `Benchmark`];
    } else {
      return null;
    }
  };

  const toFilterData = (param: any) => {
    console.log(param, "param....");

    let arr: any = [];
    const maxArr = param?.map((item: any) => [...item.mob]);
    maxArr.map((item: any) => {
      arr = [...arr, ...item];
    });
    const data: any = [...new Array(Math.max(...arr))].map((_, i) => ({
      name: i + 1,
      Q1: param[0]?.percentage[i],
  
      Q_Benchmark: param[1]?.percentage[i],
    }));
    setDataRecovery(data);
  };
  
  useEffect(() => {
    if (!staticData) return;
    if (selectedBenchmarkCategory === "Pre_Due" && staticData.Pre_Due) {
        toFilterData(staticData.Pre_Due);
      } 
      else if (selectedBenchmarkCategory === "Early_Stage" && staticData.Early_Stage) {
        toFilterData(staticData.Early_Stage);
      } 
      else if (selectedBenchmarkCategory === "Late_Stage" && staticData.Late_Stage) {
        toFilterData(staticData.Late_Stage);
      } 
    else if (selectedBenchmarkCategory === "Write_Offs" && staticData.Write_Offs) {
        toFilterData(staticData.Write_Offs);
      } 
//    else if (selectedCategory === "pos_seg" && staticData.pos_seg) {
//       let ld: StaticDataItem[] = []; // Explicitly type `ld`
      
//       if (selectedSubCategory === "<1L") {
//         ld = staticData.pos_seg.filter((item:any) => item.sub_segment === "<1L");
//       } else if (selectedSubCategory === "1-5L") {
//         ld = staticData.pos_seg.filter((item:any) => item.sub_segment === "1-5L");
//       } else if (selectedSubCategory === "5-10L") {
//         ld = staticData.pos_seg.filter((item:any) => item.sub_segment === "5-10L");
//       } else if (selectedSubCategory === ">=10L") {
//         ld = staticData.pos_seg.filter((item:any) => item.sub_segment === ">=10L");
//       }
      
//       toFilterData(ld);
//     } else if (staticData.Pre_Due) {
//       toFilterData(staticData.Pre_Due);
//     } 
    else {
      toFilterData([]);
    }
   
  }, [activeButton, selectedBenchmarkCategory,  staticData]);
  // Add staticData to the dependency array
  const dataRecoverys = Array.from({ length: 30 }, (_, i) => ({
    name: i + 1,
    // Q1: Math.random() * 100,
    Q_Benchmark: Math.random() * 100,
  }));
  
 

//   const milestones = generateMilestonesFraction(dataRecoverys, 6); 
const calculateMilestones = (dataLength:any) => {
    const interval = Math.floor(dataLength / 6); // Divide into 3 equal parts
    return [ interval,interval*3, interval*5,]; // Milestones at 1/3, 2/3, and the end
  };
  const milestones = calculateMilestones(dataRecovery.length);
  const getYValueForMilestone = (xValue: number) => {
    const point:any = dataRecovery.find((data:any) => data.name === xValue);
    return point ? point.Q_Benchmark : 0;
  };
  console.log("Milestones:", milestones);
  console.log("Scatter Data:", milestones.map((milestone) => ({
    x: milestone,
    y: getYValueForMilestone(milestone),
  })));
  return (
    <div className="w-full xl:w-[100%] h-[500px]  rounded-lg py-1 p-4 shadow-md bg-white">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
        Performance Benchmark
        </h1>
        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7" >
          <div className="flex items-center">
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
            Benchmark
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
            Current Performance
            </span>
          </div>
        
          <div className="flex items-center ">
            <div
              className="legend-line"
              style={{
                width: "20px", // Length of the line
                height: "5px", // No height for a horizontal line
                marginRight: "5px",
                borderBottom: "2px Dotted #616060", // Dotted horizontal line
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            Milestone
            </span>
          </div>
        </div>
      </div>
      {activeButton === "Benchmark" && (
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={dataRecovery} margin={{ left: 20  ,top:10 ,bottom:20}}>
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
            //   dy={-4}
            // ticks={[10,20,30,40,50,60,70,80,90,100]}
            />
            <Tooltip formatter={tooltipFormatter} />
            {milestones.map((milestone, index) => {
  const yValue = getYValueForMilestone(milestone);
  return (
    <React.Fragment key={`milestone-${index}`}>
      {/* Reference Line */}
      <ReferenceLine
        segment={[
          { x: milestone, y: 0 },
          { x: milestone, y: yValue },
        ]}
        stroke="#716F6F"
        strokeDasharray="2 2"
        strokeWidth={2}
      />

      {/* Scatter Points */}
      <Scatter
        data={[{ x: milestone, y: yValue }]} // Ensure correct mapping of x and y values
        fill="red"
        shape={(props:any) => (
          <circle cx={props.cx} cy={props.cy} r={25} fill="red" /> // Reduce radius for better visibility
        )}
      />
    </React.Fragment>
  );
})}

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
              type="linear"
              dataKey="Q_Benchmark"
              stroke="#DC3C49"
              strokeWidth={3}
              strokeDasharray="7 7"
              activeDot={{ stroke: 'red', strokeWidth: 2, r: 8 }}
              dot={false}
              legendType="none"
              // opacity={hoveredLine === null || hoveredLine === "Q_Benchmark" ? 1 : 0.2} // Similar for benchmark
            />
          </LineChart>

        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PerformanceBenchmarkChart;
