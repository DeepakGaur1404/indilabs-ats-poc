import React, { useEffect, useState } from "react";
import "../../NewPages/AllocationEngine/Allocation.scss";
import Arrow2 from "../../assets/images/y-axisArrow2.svg";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  LabelList,
  ReferenceLine,
  Cell,
} from "recharts";
import Location from "../../pages/Monitoring/Location";
import { number } from "yup";
import { direction } from "html2canvas/dist/types/css/property-descriptors/direction";

type Props = {
  Category: any;
  categoriesMatric: any;
  setIsCategoryVisible: any;
  isCategoryVisible: any;
  // categoriesMatricHeatMap: any;
  categoriesMatricHeatMap: any;
  dataHeatmap: any;
};

const HeatmapVintageChart = ({
  Category,
  categoriesMatric,
  setIsCategoryVisible,
  isCategoryVisible,
  // categoriesMatricHeatMap,
  categoriesMatricHeatMap,
  dataHeatmap,
}: Props) => {
  console.log("Category value", categoriesMatricHeatMap);
  const [impactAssessmentData, setImpactAssessmentData] = useState<any>();
  const [impactAssessmentDataMetrics, setImpactAssessmentDataMeterics] =
    useState<any>();
  const [valueAtRisk, setValueAtRisk] = useState<any>();
  const [selectedMetrics, setselectedMetrics] = useState<any>();
  const [loader, setLoader] = useState(false);
  const Loader = () => {
    return <span className="loader"></span>;
  };
  const handleDoubleClick = () => {
    setIsCategoryVisible(false);
  };
  const CustomTooltip = ({ active, payload }: any) => {
    console.log("Payload", payload);
    if (active && payload && payload.length) {
      const { Latest_Performance, Segment, Size } = payload[0].payload;
      const yUpdated = payload[0].payload["Y_Coordinate"];
      const monthLable = payload[0].payload["Month"];
      return (
        <div className="custom-tooltip bg-white p-4 shadow rounded">
          {/* <p className="label text-black">{` ${Segment}`}</p>*/}
           <p className="label text-black">{` ${monthLable}`}</p> 
          <p className="label text-black">{`Latest Performance : ${Latest_Performance.toFixed(
            3
          )}`}</p>
          {/* <p className="label text-black">{`Circle-Size : ${
            Size.toFixed(4) * 200
          }`}</p> */}
          {/* <p className="intro text-black">{`YTD_VR : ${yUpdated.toFixed(
            3
          )}`}</p> */}
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    
     if (categoriesMatricHeatMap=== "Vintage") {
        setselectedMetrics (dataHeatmap?.VintageMetrics || []);
     }
   
    setImpactAssessmentDataMeterics(selectedMetrics);
    setLoader(false);
  }, [categoriesMatricHeatMap, selectedMetrics]);

  const CustomDot = (props: any) => {
    const { cx, cy, payload, X_Coordinate } = props;
    const Size = payload.Size * 100;
    const Color = payload.Color;
    // const nameofState = payload.Segment;

    return (
      <g className="cursor-pointer" onDoubleClick={handleDoubleClick}>
      <foreignObject
        x={cx - 55}
        y={cy}
        width={"60%"}
        height={"60%"}
        // style={{ display: "flex", flexDirection: "column" }}
        // clipPath="url(#clip)"
      >
        <div
          style={{
            border: "2px solid #EEEEEE ",
            width: `${"40%"}`,
            height: `${"20%"}`,
            // borderRadius: "100%",
            backgroundColor: Color,
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
        
        </div>
      </foreignObject>
    </g>
    );
  };
  const getMonthLabel = (tick: any) => {
    const tickMapping: any = {
      "1": "Feb2023",
      "2": "Mar2023",
      "3": "Apr2023",
      "4": "May2023",
      "5": "Jun2023",
      "6": "Jul2023",
      "7": "Aug2023",
      "8": "Sep2023",
      "9": "Oct2023",
      "10": "Nov2023",
      "11": "Dec2023",
      "12": "Jan2024",
      "13": "Feb2024",
      "14": "Mar2024",
      "15": "Apr2024",
      "16": "May2024",
      "17": "Jun2024",
      
    };
    return tickMapping[tick] || tick;  // Default to tick value if no mapping is found
  };

const getMonthLabelYaxis=(tick: any) => {
  const tickMapping: any = {
    "1": "V1",
    "2": "V2",
    "3": "V3",
    "4": "V4",
    "5": "V5",
    "6": "V6",
    "7": "V7",  
  };
  return tickMapping[tick] || tick;  // Default to tick value if no mapping is found
};

  return (
    <>
     
      <div className="relative w-[100%]  mb-10 h-[590px] p-3 bg-white rounded-xl shadow flex-col justify-center  flex gap-5 2xl:w-[100%]">
        <div className="px-2 ">
          <p className="text-black text-[16px] font-[500] font-['DM Sans'] text-left  mb-1">Monthly Assessment</p></div>
        {loader ? (
          <Loader />
        ) : (
          <>
            <ResponsiveContainer
              height={500}
              width="98%"
              style={{ marginLeft: 0, marginTop: -26, marginRight:20 }}
            >
              <ScatterChart
                width={700}
                height={600}
                margin={{ top: 20, bottom: 35, right: 20, left: 10 }}
              >
            {/* <CartesianGrid stroke="#DEDEDE" />  */}
                <XAxis
                  type="number"
                  dataKey={"x_coordinate_month"}
                  fontSize={14}
                  // domain={xDomain}
                  // ticks={xTicks.map(Number)}
                  domain={[0, 17]}
                  ticks={[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
                  ]}
                  angle={-70}
                  dy={25}
                  dx={-35}
                  tickFormatter={getMonthLabel}
                  axisLine={false}
                  tickLine={false}
                  // tick={{ fill: "black" }}
                  // textAnchor="end"
                  // dx={4}
                 
                />
                <YAxis
                  type="number"
                  dataKey="y_coordinate_segment"
                  // domain={domain}
                  // ticks={ticks.map(Number)}
                  domain={[0, 7]}
                  ticks={[1, 2, 3,4,5 ,6, 7]}
                  fontSize={14}
                  interval={0}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "black" }}
                  tickFormatter={getMonthLabelYaxis}
                  dy={35}
                   dx={-2}
                />

                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  content={<CustomTooltip />}
                  labelStyle={{ display: "none" }}
                />
              

                <Scatter
                  name="Data"
                  data={impactAssessmentDataMetrics}
                  // fill="#8884d8"
                  shape={<CustomDot />}
                >
                  {/* {impactAssessmentDataMetrics.map(
                    (entry: any, index: number) => (
                      <Cell
                        key={`cell-${index}`}
                        stroke="#141313"
                        fill={entry.Color !== "None" ? entry.Color : "#8884d8"} // Default color if 'None'
                      />
                    )
                  )} */}
                </Scatter>
                <LabelList dataKey="Color" />
              </ScatterChart>
            </ResponsiveContainer>
          </>
        )}
      </div>
    </>
  );
};

export default HeatmapVintageChart;