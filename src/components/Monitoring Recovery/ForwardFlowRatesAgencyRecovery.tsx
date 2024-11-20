import React, { useEffect, useState } from "react";
import yellowimpactball from "../../assets/images/yellowimpactball.png";
import lightorangeimpactball from "../../assets/images/lightorangeimpactball.png";
import middleorangeimpactball from "../../assets/images/middleorangeimpactball.png";
import darkorangeimpactball from "../../assets/images/darkorangeimpactball.png";
import redimpactball from "../../assets/images/redimpactball.png";
import peachimpactball from "../../assets/images/peachimpactball.png";
import "../../NewPages/AllocationEngine/Allocation.scss";
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
  Line,
  Layer,
} from "recharts";
import Location from "../../pages/Monitoring/Location";
import { number } from "yup";
import { direction } from "html2canvas/dist/types/css/property-descriptors/direction";

type Props = {
  // Category: any;
  // categoriesMatric: any;
  // setIsCategoryVisible: any;
  // isCategoryVisible: any;
 selectedCategoryButton: any;
  activeButton:any
  data:any
  
};

const ForwardFlowRatesAgencyRecovery = ({
  // Category,
  // setIsCategoryVisible,
 selectedCategoryButton,
  // activeButton,
 data
}: // isCategoryVisible,
Props) => {
  console.log("Category value",selectedCategoryButton);
  const [impactAssessmentData, setImpactAssessmentData] = useState<any>();
  const [impactAssessmentDataMetrics, setImpactAssessmentDataMeterics] =
    useState<any>();
  const [loader, setLoader] = useState(false);
  // const [data, setData]=useState<any>()
  const Loader = () => {
    return <span className="loader"></span>;
  };
  // const handleDoubleClick = () => {
  //   setIsCategoryVisible(false);
  // };
  const CustomTooltip = ({ active, payload }: any) => {
    console.log("Payload", payload);
    if (active && payload && payload.length) {
      const { "% Recovery": performancePercentage, total_payment, agency_code } = payload[0].payload;
      const pos_percentage = payload[0].payload["pos_percentage"]; 

      return (
        <div className="custom-tooltip bg-white p-4 shadow rounded">
          <p className="label text-black">{`Agency Code: ${agency_code}`}</p>
          <p className="label text-black">{`Total Payment: ${total_payment.toFixed(2)}`}</p>
          <p className="label text-black">{`Performance %: ${performancePercentage.toFixed(2)}%`}</p>
          <p className="intro text-black">{`Volume %: ${pos_percentage ? pos_percentage.toFixed(2) : 'N/A'}%`}</p>
        </div>
      );
    }

    return null;
};



useEffect(()=>{ 
  if (selectedCategoryButton === "MAHARASHTRA") {
    const MRRCoordinates = data?.rhs["MAHARASHTRA"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  
  } 
  else if (selectedCategoryButton === "TAMIL NADU") {
    const MRRCoordinates = data?.rhs["TAMIL NADU"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  
  } else if (selectedCategoryButton === "UTTAR PRADESH") {
    const MRRCoordinates = data?.rhs["UTTAR PRADESH"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  } else if (selectedCategoryButton === "MADHYA PRADESH") {
    const MRRCoordinates = data?.rhs["MADHYA PRADESH"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  } else if (selectedCategoryButton === "KARNATAKA") {
    const MRRCoordinates = data?.rhs["KARNATAKA"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  } else if (selectedCategoryButton === "HARYANA") {
    const MRRCoordinates = data?.rhs["HARYANA"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  } else if (selectedCategoryButton === "ANDHRA PRADESH") {
    const MRRCoordinates = data?.rhs["ANDHRA PRADESH"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  } else if (selectedCategoryButton === "GUJARAT") {
    const MRRCoordinates = data?.rhs["GUJARAT"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  } else if (selectedCategoryButton === "DELHI") {
    const MRRCoordinates = data?.rhs["DELHI"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  } else if (selectedCategoryButton === "TELANGANA") {
    const MRRCoordinates = data?.rhs["TELANGANA"][0]?.rhs || []; 
    setImpactAssessmentDataMeterics(MRRCoordinates); 
  }
  
},[selectedCategoryButton])
  
 
  const getYDomainAndTicks = (data: any) => {
    const maxTickCount = 8; // Set the maximum number of ticks you want
  
    if (!data || data.length === 0) {
      return {
        domain: [0, 90], // Use 0 as the minimum by default
        ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
      };
    }
  
    const yValues = data.map((item: any) => item.pos_percentage);
    const maxY = Math.max(...yValues); // Get the maximum value
    const ReferenceY = maxY -0.1;
    const minY = Math.min(...yValues);
  const  RefernceInital = minY  + 2
  const ReferenceYY = maxY - 2
    // Set the domain to [0, maxY]
    const domain = [0, maxY];
  
    // Calculate the tick interval based on max value and desired tick count
    const tickInterval = maxY / (maxTickCount); // Reduce by 1 to ensure full ticks
  
    const ticks = [];
    for (let i = 0; i <= maxY; i += tickInterval) {
      ticks.push(i.toFixed(2)); // Use fixed precision as needed
    }
  
    // Ensure the last tick is always equal to maxY
    if (!ticks.includes(maxY.toFixed(2))) {
      ticks.push(maxY.toFixed(2));
    }
  
    return { domain, ticks, maxY, ReferenceY,RefernceInital  , ReferenceYY};
  };
  
  const getXDomainAndTicksxaxis = (data: any) => {
    const maxTickCount = 8; // Set the maximum number of ticks you want
  
    if (!data || data.length === 0) {
      return {
        domain: [0, 5], // Default domain if no data is available
        ticks: [0, 1, 2, 3, 4, 5],
      };
    }
  
    const xValues = data.map((item: any) => item['% Recovery']);
    const maxX = Math.max(...xValues); // Get the maximum value
    const Reference = maxX /3/4 * 10.5;
    const minX = Math.min(...xValues);
    // const RefernceXInital = minX === 0.0 ? minX + 0.2 : minX + 0.2;
    const RefernceXInital = 
   selectedCategoryButton === "DELHI"
      ? minX + 1.6 // Increase more for "DELHI"
      :selectedCategoryButton === "ANDHRA PRADESH"
      ? minX + 1// Increase slightly for "ANDHRA PRADESH"
      : minX + 0.2; // Default increment for other categories
  
    console.log("ReferXinitali:", RefernceXInital)
    // Set the domain to [0, maxX]
    const domain = [0, maxX];
  
    // Adjust the tick interval based on max value
    const tickInterval = maxX / (maxTickCount ); // Reduce by 1 to ensure full ticks
    const ticks = [];
  
    // Generate ticks from 0 to maxX with the finer interval
    for (let i = 0; i <= maxX; i += tickInterval) {
      ticks.push(i.toFixed(2)); // Keep precision with 2 decimal places
    }
  
    // Ensure the last tick is always equal to maxX
    if (!ticks.includes(maxX.toFixed(2))) {
      ticks.push(maxX.toFixed(2));
    }
  
    return { domain, ticks, maxX, Reference , RefernceXInital};
  };
  
  // Usage Example
  const { domain, ticks, maxY, ReferenceY,RefernceInital,ReferenceYY } = getYDomainAndTicks(impactAssessmentDataMetrics);
  const { domain: xDomain, ticks: xTicks, maxX, Reference,RefernceXInital } = getXDomainAndTicksxaxis(impactAssessmentDataMetrics);
  
  
  const formatYAxisTick = (tick: any) => {
    // if (tick == 0) {
    //   return `${tick}`;
    // } else {
    return `${tick.toFixed(1)}%`;
    // }
  };

  return (
    <div className="w-full relative xl:w-[48%] h-[460px] mt-10 rounded-lg py-4 p-3 -mr-2 shadow-md bg-white">
      
 <div className="w-full flex flex-wrap md:flex justify-between lg:px-0 my-1">
          <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans']">
          Agency Allocation
            </h1>
            <div className="flex items-center gap-2 lg:gap-7 mr-3">
            
                <div  className="flex items-center">
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
                    Large
                  </span>
                </div>
            </div>
          </div>
      <p
        className="
      text-[14px] italic text-[#6A7691] font-[400]
          font-['DM Sans' !important]
           top-1/2 transform -translate-y-1/2 -rotate-90
         customClassfour agency_text
  "
        style={{ zIndex: 100 }}
      >
        Volume %
      </p>
      {loader ? (
        <Loader />
      ) : (
        <>
          <ResponsiveContainer
            style={{ marginLeft: 10, marginTop: -26 }}
            width="95%"
            height={400}
          >
            <ScatterChart
              width={600}
              height={600}
              margin={{ top: 43, bottom: -1, right: 8, left: 10 }}
            >
              <CartesianGrid stroke="#9ca3af" />
              <XAxis
                type="number"
                dataKey="% Recovery"
                fontSize={14}
                // tickCount={12}
                 domain={xDomain}
                 ticks={xTicks.map(Number)}
                // domain={[0.0, 5.0]}
                // ticks={[0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]}
                axisLine={false}
                tickLine={false}
                // tick={true}
                tick={{ fill: "black" }}
                tickFormatter={formatYAxisTick}
                width={70}
              />
              <YAxis
                type="number"
                dataKey="pos_percentage"
                 domain={domain}
                  ticks={ticks.map(Number)}
                // domain={[0.0, 25.0]}
                // padding={{top:1}}
                fontSize={14}
                // ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}
                // ticks={[0, 5, 10, 15, 20, 25]}
                // ticks={majorTicks}
                interval={0}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "black" }}
                 tickFormatter={formatYAxisTick}
                // width={80}
              />

              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomTooltip />}
                labelStyle={{ display: "none" }}
              />
            <ReferenceLine segment={[{ x: 0, y: RefernceInital }, { x: Reference, y: ReferenceY }]} stroke="Red" strokeDasharray="5 5"  strokeWidth={1} />  
              <ReferenceLine segment={[{ x: 0, y: 0 }, { x: maxX, y: maxY }]} stroke="#9ca3af" strokeDasharray="5 5"  strokeWidth={1} /> 
              <ReferenceLine segment={[{ x: RefernceXInital, y: 0 }, { x: maxX, y: ReferenceYY }]} stroke="Red" strokeDasharray="5 5"   strokeWidth={1} /> 
              <Scatter
                name="Data"
                data={impactAssessmentDataMetrics}
                fill="#4169E1"
                // shape={<CustomDot />}
              />
            </ScatterChart>
          </ResponsiveContainer>

          <p className="-mt-[1px]  text-center text-[14px] italic text-[#6A7691] font-[400] font-['DM Sans'] benchmark_text customClasssix ">
            Performance %
          </p>
        </>
      )}
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip">
            <rect x="5" y="23" width="700" height="600" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ForwardFlowRatesAgencyRecovery;
