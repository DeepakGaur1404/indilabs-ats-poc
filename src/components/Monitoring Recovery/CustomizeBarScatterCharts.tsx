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
  Scatter,
  ComposedChart,
} from "recharts";
import { string } from "yup";

type Props = {
  customizeBarScatterTitle: string;
  activeButton: any;
  selectedCategory: string;
  setIsWide: any;
  isWide: any;
  handleStateHover: any;
  staticDataUniquePerformance: any;
  staticDataRecoveryPerformance: any;
  setHoveredState: any;
  setHoveredSubSegment: any;
};

const colors = ["#4169E1", "#FFB200"];

const CustomizeBarScatterPeroformanceRecovery = ({
  customizeBarScatterTitle,
  activeButton,
  selectedCategory,
  setIsWide,
  handleStateHover,
  isWide,
  staticDataUniquePerformance,
  staticDataRecoveryPerformance,
  setHoveredState,
  setHoveredSubSegment,
}: Props) => {
  const [data, setData] = useState<
    { Placements: string; B1: number; Target: number; value: any }[]
  >([]);
  const [dataUnique, setDataUnique] = useState<
    { Placements: string; B1: number; Target: number }[]
  >([]);
  const [mobdata, setmobData] = useState([]);

  const [locationdata, setlocationData] = useState([]);
  const [agencydata, setagencyData] = useState([]);
  const [mobUdata, setmobUData] = useState([]);
  const [tosdata, setTosData] = useState([]);
  const [tosUdata, setTosUData] = useState([]);

  const [locationUdata, setlocationUData] = useState([]);
  const [agencyUdata, setagencyUData] = useState([]);
  const [placementdata, setplacementData] = useState([]);
  const [segmentdata, setsegmentData] = useState([]);
  const [paymentdata, setpaymentData] = useState([]);
 

  const handleMouseOver = (state: any, value: any) => {
    handleStateHover(state); 
    setHoveredState(false);
    setHoveredSubSegment(state);
  };
  const handleBarLeave = () => {
    setHoveredState(true); // Reset active index on bar leave
     setHoveredSubSegment(null);
  };

  const tooltipFormatter = (value: any, name: any) => {
    if (name === "B1") {
      return [`₹ : ${Math.floor(value).toLocaleString()}`];
    }
    return [value, name];
  };

  const tooltipFormattertwo = (value: any, name: any) => {
    if (name === "B1") {
      return [`#: ${Math.floor(value).toLocaleString()}`];
    }
    return [value, name];
  };

  const toFilterData = (param: any) => {
    const data = param?.bars.map((item: any, i: any) => ({
      Placements: item?.bar.sub_segment,
      B1: item?.bar.value,
      Target: item?.point.value,
      value: i,
    }));
    setData(data);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const hasWidePlacement = data.length > 6;
      setIsWide(hasWidePlacement);
      // console.log("Wide placement detected:", hasWidePlacement);
    }
  }, [data]);
  const containerClass = isWide ? "w-[49%] " : "w-[50%] ";

  useEffect(() => {
    setmobData(staticDataRecoveryPerformance?.vintage);
    setlocationData(staticDataRecoveryPerformance?.location);
    setagencyData(staticDataRecoveryPerformance?.agency);
    setTosData(staticDataRecoveryPerformance?.pos);

  }, [staticDataRecoveryPerformance]);
  // console.log(mobdata, "...mobdata");
  // console.log(staticDataRecoveryPerformance?.vintage, "...staticDataRecoveryPerformance?.vintage");
  // console.log(selectedCategory,"...selectedCategory");

   
  useEffect(() => {
     if (activeButton ==="$Recovery") {
    if (selectedCategory === "vintage") {
      if (mobdata && mobdata.length > 0) {
        toFilterData(mobdata[0]); 
      }
    }
    if (selectedCategory === "location") {
      if (locationdata && locationdata.length > 0) {
        toFilterData(locationdata[0]);// Only access mobdata[0] if mobdata is valid
      }
      
    }
    if (selectedCategory === "agency") {
      if (agencydata && agencydata.length > 0) {
        toFilterData(agencydata[0]);
      }
     
    }

    if (selectedCategory === "pos") {
      if (tosdata && tosdata.length > 0) {
        toFilterData(tosdata[0]);
      }
    }
      }
  }, [mobdata, activeButton, selectedCategory]);

  const formatNumber = (num: any) => {
    if (num >= 1e7) {
      return (num / 1e7).toFixed(2);
    } else if (num >= 1e5) {
      return (num / 1e7).toFixed(2);
    } else {
      return num.toString();
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

  const arrTicks = () => {
    let arr: any = [];
    let maxNum = 0;

    if (data) {
      maxNum = Math.max(
        ...data.map((item) => item.B1),
        ...data.map((item) => item.Target)
      );
    }

    if (maxNum <= 0) {
      return arr;
    }

    const numTicks = 7;
    const step = Math.ceil(maxNum / numTicks);

    if (step <= 0 || !isFinite(step)) {
      return arr;
    }

    for (let i = 0; i <= numTicks; i++) {
      let tick = step * i;
      arr.push(tick);
    }

    const lastTick = Math.ceil(maxNum);
    if (arr[arr.length - 1] !== lastTick) {
      arr.push(lastTick);
    }

    return arr;
  };

  const arrTicksUnique = () => {
    let arr: any = [];
    let maxNum = 0;

    if (dataUnique) {
      maxNum = Math.max(...dataUnique.map((item) => item.B1));
    }

    if (maxNum <= 0) {
      return arr;
    }

    const numTicks = 7;
    const step = Math.ceil(maxNum / numTicks);

    if (step <= 0 || !isFinite(step)) {
      return arr;
    }

    for (let i = 0; i <= numTicks; i++) {
      let tick = step * i;
      arr.push(tick);
    }

    const lastTick = Math.ceil(maxNum);
    if (arr[arr.length - 1] !== lastTick) {
      arr.push(lastTick);
    }

    return arr;
  };

  //uniquepair
  const toFilterUniqueData = (param: any) => {
    const data = param?.bars.map((item: any) => ({
      Placements: item.bar.sub_segment,
      B1: item.bar.value,
      //   Target: item.point.value,
    }));
    setDataUnique(data);
  };

  useEffect(() => {
    if (selectedCategory == "vintage") {
      if (mobUdata && mobUdata.length > 0) {
        toFilterUniqueData(mobUdata[0]);
      }
     
    }
    if (selectedCategory == "location") {
      if (locationUdata && locationUdata.length > 0) {
        toFilterUniqueData(locationUdata[0]);
      }
     
    }
    if (selectedCategory == "agency") {
      if (agencyUdata && agencyUdata.length > 0) {
        toFilterUniqueData(agencyUdata[0]);
      }
      
    }
    if (selectedCategory == "pos") {
      if (tosUdata && tosUdata.length > 0) {
        toFilterUniqueData(tosUdata[0]);
      }
     
    }
  }, [activeButton, selectedCategory]);
  useEffect(() => {
    setmobUData(staticDataUniquePerformance?.vintage);
    setlocationUData(staticDataUniquePerformance?.location);
    setagencyUData(staticDataUniquePerformance?.agency);
    setTosUData(staticDataUniquePerformance?.pos);
  }, [staticDataUniquePerformance]);

  // const arrTicksUnique = () => {
  //   let arr: any = [];
  //   let maxNum = 0;

  //   if (dataUnique) {
  //     maxNum = Math.max(
  //       ...dataUnique.map((item) => item.B1)
  //       // ...dataUnique.map((item) => item.Target)
  //     );
  //   }

  //   if (maxNum <= 0) {
  //     return arr;
  //   }

  //   const numTicks = 10;
  //   const step = Math.ceil(maxNum / numTicks);

  //   if (step <= 0 || !isFinite(step)) {
  //     return arr;
  //   }

  //   for (let i = 0; i <= numTicks; i++) {
  //     let tick = step * i;
  //     arr.push(tick);
  //   }

  //   if (arr[arr.length - 1] !== Math.ceil(maxNum)) {
  //     arr.push(Math.ceil(maxNum));
  //   }

  //   return arr;
  // };
  return (
    <div
      className={`w-full xl:${containerClass} ml-3 h-[415px]  flex 
      ${isWide ? "flex-col" : "flex-col"} 
      justify-center items-center shadow-md p-3 rounded-lg bg-white py-3`}
    >
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3 ">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] -mt-4 relative -top-6">
          {customizeBarScatterTitle}
        </h1>
        {customizeBarScatterTitle === "Recovery (millions) " ? (
          <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7">
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
              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                MTD Recovery (Min-Max)
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
                Target
              </span>
            </div>
          </div>
        ) : null}
      </div>
      {customizeBarScatterTitle === "Recovery (millions)" &&
        activeButton === "$Recovery" && (
          <ResponsiveContainer width="100%" height={315}>
            <ComposedChart
              data={data}
              margin={{
                top: isWide ? 18 : 20,
                right: 0,
                left: 28,
                bottom: isWide ? 65 : 0,
              }}
              barCategoryGap="10%"
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="Placements"
                angle={isWide ? -70 : 0}
                dy={1}
                dx={isWide ? -4 : 28}
                textAnchor="end"
                fontWeight={400}
                fontSize={isWide ? 10 : 14}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
                padding={{ left: 10 }}
              />
              <YAxis
                fontWeight={400}
                fontSize={11}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={34}
                tickLine={false}
                axisLine={false}
                ticks={arrTicks()}
                tickFormatter={formatNumberMillion}
              />
              <Tooltip
                content={({ payload, label }: any) => {
                  if (payload && payload.length) {
                    const data = payload[0].payload;
                    const value = payload[0].value;
                    const target = data.Target;

                    handleMouseOver(data.Placements, value);

                    return (
                      <div className="bg-white border-2  w-max h-max py-2.5 px-2.5">
                        <p className="text-[#000000]">{`${label}`}</p>
                        <p className="text-[#4169E1]">{`₹: ${Math.floor(
                          value
                        ).toLocaleString()}`}</p>
                        <p className="text-[#FFB200]">{`Target: ${target}`}</p>
                      </div>
                    );
                  } else {
                    handleBarLeave();
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="B1"
                stackId="a"
                fill={colors[0]}
                radius={[5, 5, 5, 5]}
                // onMouseOver={(data, idx) =>
                //   //  selectedCategory === "location" &&
                //   handleMouseOver(data.Placements, idx)
                // }
                // onMouseLeave={handleBarLeave}
              />
              <Scatter dataKey="Target" fill="#FFB200" />
            </ComposedChart>
          </ResponsiveContainer>
        )}

      {customizeBarScatterTitle === "Unique Payers" &&
        activeButton === "uniquePayer" && (
          <ResponsiveContainer width="98%" height={315}>
            <ComposedChart
              // <BarChart
              data={dataUnique}
              margin={{
                top: isWide ? 18 : 20,
                right: 0,
                left: 28,
                bottom: isWide ? 65 : 0,
              }}
              barCategoryGap="8%"
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="Placements"
                angle={isWide ? -70 : 0}
                dy={0}
                dx={isWide ? -4 : 28}
                textAnchor="end"
                fontWeight={400}
                fontSize={isWide ? 10 : 14}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                fontWeight={400}
                fontSize={11}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={28}
                tickLine={false}
                axisLine={false}
                ticks={arrTicksUnique()}
                tickFormatter={formatNumber}
                // interval={50}
              />
               <Tooltip
                content={({ payload, label }: any) => {
                  if (payload && payload.length) {
                    const data = payload[0].payload;
                    const value = payload[0].value;

                    handleMouseOver(data.Placements, value);

                    return (
                      <div className="bg-white border-2  w-max h-max py-2.5 px-2.5">
                        <p className="text-[#000000]">{`${label}`}</p>
                        <p className="text-[#4169E1]">{`#: ${Math.floor(
                          value
                        ).toLocaleString()}`}</p>
                      </div>
                    );
                  } else {
                    handleBarLeave();
                  }
                  return null;
                }}
              /> 

             <Bar
                dataKey="B1"
                stackId="a"
                fill={colors[0]}
                // barSize={62}
                radius={[5, 5, 5, 5]}
                // onMouseOver={(dataUnique, idx) =>
                //   // selectedCategory === "location"
                //   // &&
                //   handleMouseOver(dataUnique.Placements, idx)
                // }
                // onMouseLeave={handleBarLeave}
              /> 
               {/* <Tooltip formatter={tooltipFormattertwo} />
              <Bar
                dataKey="B1"
                stackId="a"
                fill={colors[0]}
                // barSize={62}
                radius={[5, 5, 5, 5]}
                onMouseOver={(dataUnique, idx) =>
                  // selectedCategory === "location"
                  // &&
                  handleMouseOver(dataUnique.Placements, idx)
                }
                onMouseLeave={handleBarLeave}
              /> */}
              {/* {/ {/ {/ <Scatter dataKey="Target" fill="#FFB200" /> /} /} /} */}
            </ComposedChart>
          </ResponsiveContainer>
        )}
    </div>
  );
};

export default CustomizeBarScatterPeroformanceRecovery;
