import React, { useEffect, useState } from "react";
import yellowimpactball from "../../assets/images/yellowimpactball.png";
import lightorangeimpactball from "../../assets/images/lightorangeimpactball.png";
import middleorangeimpactball from "../../assets/images/middleorangeimpactball.png";
import darkorangeimpactball from "../../assets/images/darkorangeimpactball.png";
import redimpactball from "../../assets/images/redimpactball.png";
import peachimpactball from "../../assets/images/peachimpactball.png";
import "../../NewPages/AllocationEngine/Allocation.scss";
import Monitoring from "../../assets/images/monitoringrisk.svg";
import Arrow1 from "../../assets/images/x-axisArrow1.svg";
import Arrow2 from "../../assets/images/y-axisArrow2.svg";
import { IoIosArrowForward } from "react-icons/io";
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
  categoriesMatricmonitoring: any;
  data: any;
};

const ImpactAssessmentRecovery = ({
  Category,
  categoriesMatric,
  setIsCategoryVisible,
  isCategoryVisible,
  // categoriesMatricHeatMap,
  categoriesMatricmonitoring,
  data,
}: Props) => {
  console.log("Category value", categoriesMatric);
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
      const { X_Coordinate, Segment, Size } = payload[0].payload;
      const yUpdated = payload[0].payload["Y_Coordinate"];
      const monthLable = payload[0].payload["Month"];
      return (
        <div className="custom-tooltip bg-white p-4 shadow rounded">
          <p className="label text-black">{` ${Segment}`}</p>
          <p className="label text-black">{` ${monthLable}`}</p>
          <p className="label text-black">{`Performance : ${X_Coordinate.toFixed(
            3
          )}`}</p>
          {/* <p className="label text-black">{`Circle-Size : ${
            Size.toFixed(4) * 200
          }`}</p> */}
          <p className="intro text-black">{`YTD_VR : ${yUpdated.toFixed(
            3
          )}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomDot = (props: any) => {
    const { cx, cy, payload, X_Coordinate } = props;
    const Size = payload.Size * 100;
    const Color = payload.Color;
    const nameofState = payload.Segment;

    const getColor = (color: string) => {
      switch (color) {
        case "red":
          return "red";
        case "green":
          return "green";
        case "pink":
          return "pink";
        case "orange":
          return "orange";
        case "violet":
          return "violet";
        case "yellow":
          return "yellow";
        default:
          return "#FFFFFF"; // Default color
      }
    };
    const backgroundColor = getColor(payload.color);

    return (
      <g className="cursor-pointer" onDoubleClick={handleDoubleClick}>
        <foreignObject
          x={cx - 20}
          y={cy - 20}
          width={Size}
          height={Size}
          // style={{ display: "flex", flexDirection: "column" }}
          // clipPath="url(#clip)"
        >
          <div
            style={{
              border: "1px solid #CDD1DB ",
              width: `${
                payload.Size >= 0.1
                  ? Size
                  : payload.Size <= 0.1
                  ? Size * 1.1
                  : Size
              }px`,
              height: `${
                payload.Size >= 0.1
                  ? Size
                  : payload.Size <= 0.1
                  ? Size * 1.2
                  : Size
              }px`,
              borderRadius: "100%",
              backgroundColor: Color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="flex justify-center text-center items-center">
              <p
                style={{
                  color: X_Coordinate < 0 ? "black" : "white",
                }}
                className="text-[12px] text-center font-['DM Sans']  font-[500]"
              >
                {nameofState}
              </p>
            </div>
          </div>
        </foreignObject>
      </g>
    );
  };
  useEffect(() => {
    // let selectedMetrics: any[] = [];

    if (categoriesMatricmonitoring === "Location") {
      setselectedMetrics(data?.StateMetrics || []);
    } else if (categoriesMatricmonitoring === "POS") {
      setselectedMetrics(data?.POSMetrics || []);
    } else if (categoriesMatricmonitoring === "Vintage") {
      setselectedMetrics(data?.VintageMetrics || []);
    }
    let xMin = 0,
      xMax = 0,
      yMin = 0,
      yMax = 0;

    if (categoriesMatricmonitoring === "Location" && data?.StateLimits) {
      xMin = data.StateLimits["-x_max"];
      xMax = data.StateLimits["x_max"];
      yMin = data.StateLimits["-y_max"];
      yMax = data.StateLimits["y_max"];
    } else if (categoriesMatricmonitoring === "POS" && data?.POSLimits) {
      xMin = data.POSLimits["-x_max"];
      xMax = data.POSLimits["x_max"];
      yMin = data.POSLimits["-y_max"];
      yMax = data.POSLimits["y_max"];
    } else if (
      categoriesMatricmonitoring === "Vintage" &&
      data?.VintageLimits
    ) {
      xMin = data.VintageLimits["-x_max"];
      xMax = data.VintageLimits["x_max"];
      yMin = data.VintageLimits["-y_max"];
      yMax = data.VintageLimits["y_max"];
    }

    // setselectedMetrics(
    //   selectedMetrics.map((item: any) => {
    //     if (isNaN(parseFloat(item.X_Coordinate))) {
    //       item.X_Coordinate = 0;
    //     }
    //     return item;
    //   })
    // );

    console.log("selectedMetrics", selectedMetrics);
    setImpactAssessmentDataMeterics(selectedMetrics);
    setValueAtRisk(data?.ValueAtRisk);
    setLoader(false);
  }, [categoriesMatricmonitoring, selectedMetrics]);

  const getYDomainAndTicks = (data: any) => {
    if (!data || data.length === 0) {
      return {
        domain: [-90, 90],
        ticks: [
          -90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50,
          60, 70, 80, 90,
        ],
      };
    }

    const yValues = data.map((item: any) => item["Y_Coordinate"]);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    const minAdjusted = minY > 0 ? 0 : Math.floor(minY) - 1;
    const maxAdjusted = maxY < 0 ? 0 : Math.ceil(maxY) + 1;
    const maxRange = Math.max(Math.abs(minAdjusted), Math.abs(maxAdjusted));
    const domain = [-maxRange, maxRange];
    const tickInterval = maxRange / 7;
    const ticks = [];
    for (let i = 0; i <= maxRange; i += tickInterval) {
      ticks.push(Number(i.toFixed(0)));
      if (i !== 0) ticks.unshift(Number(-i.toFixed(0)));
    }

    console.log(ticks, "ticks....");

    return { domain, ticks, minY, maxY };
  };

  // Example usage:
  const {
    domain,
    ticks,
    minY = 0,
    maxY = 0,
  } = getYDomainAndTicks(impactAssessmentDataMetrics);

  const getXDomainAndTicksxaxis = (data: any) => {
    if (!data || data.length === 0) {
      return {
        domain: [0, 5],
        ticks: [0, 1, 2, 3, 4, 5],
      };
    }
    const xValues = data.map((item: any) => item.X_Coordinate);
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minAdjusted = minX > 0 ? 0 : Math.floor(minX * 10) / 10;
    const maxAdjusted = maxX < 0 ? 0 : Math.ceil(maxX * 10) / 10;

    const maxRange = Math.max(Math.abs(minAdjusted), Math.abs(maxAdjusted));
    const domain = [minAdjusted, maxAdjusted];
    const tickInterval = maxRange / 6;
    const ticks: number[] = [];
    for (let i = 0; i <= maxRange; i += tickInterval) {
      ticks.push(Number(i.toFixed(1)));
      if (i !== 0) ticks.unshift(Number(-i.toFixed(1)));
    }
    return { domain, ticks, minX: minAdjusted, maxX: maxAdjusted };
  };
  const {
    domain: xDomain,
    ticks: xTicks,
    minX = 0,
    maxX = 0,
  } = getXDomainAndTicksxaxis(impactAssessmentDataMetrics);

  return (
    <>
      <h1 className="text-black text-[16px] font-[500] font-['DM Sans'] text-left  mb-1 customClassOpper -mt-3">
        Impact Assessment
      </h1>
      <div className="relative w-[100%] mb-10 h-[590px] p-3 bg-white rounded-xl shadow flex-col justify-center  flex gap-5 2xl:w-[100%]">
        <div className="px-2 flex justify-center items-center mt-6">
          <div className=" w-[max] flex items-center gap-2 py-1 px-1 ">
            <img src={Monitoring} alt="" />
            <p className="text-[black] font-[500] text-[16px] font-['DM Sans']">
              Value at Risk:
            </p>
            <span className="text-[#EF0000] font-[700] text-[16px] font-['DM Sans']">
              ₹{valueAtRisk != null ? valueAtRisk.toFixed(0) : "0.00"} M
            </span>
          </div>
        </div>
        <p
          className=" flex justify-center  
     text-[14px]  text-[#000000] font-[600] 
    font-['DM Sans' !important] 
    -rotate-90 
     frequency_text2 customClassfour  -ml-11
  "
          style={{ zIndex: 100 }}
        >
          Positive contribution to P&L{" "}
          <img
            src={Arrow2}
            alt=" "
            className="rotate-90 px-12 -mt-8"
            style={{ filter: "grayscale(100%)", opacity: 0.2 }}
          />{" "}
          Negative contribution to P&L
        </p>
        <p
          className="
     text-[14px]  text-[#ADADAD] font-[600] 
    font-['DM Sans' !important] 
    -rotate-90 
     frequency_text customClassfour  -ml-6
  "
          style={{ zIndex: 100 }}
        >
          YTD Value at Risk (₹ millions)
        </p>

        {loader ? (
          <Loader />
        ) : (
          <>
            <ResponsiveContainer
              height={500}
              width="98%"
              style={{ marginLeft: 18, marginTop: -26 }}
            >
              <ScatterChart
                width={700}
                height={600}
                margin={{ top: 40, bottom: 10, right: 8, left: 10 }}
              >
                <CartesianGrid stroke="#DEDEDE" />
                <XAxis
                  type="number"
                  dataKey={"X_Coordinate"}
                  fontSize={14}
                  domain={xDomain}
                  ticks={xTicks.map(Number)}
                  //  domain={[-5, 5]}
                  //  ticks={[-5,-4,-3,-2,-1, 0,1,2,3,4,5]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "black" }}
                  textAnchor="end"
                  dx={4}
                />
                <YAxis
                  type="number"
                  dataKey="Y_Coordinate"
                  domain={domain}
                  ticks={ticks.map(Number)}
                  fontSize={14}
                  interval={0}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "black" }}
                  // width={95}
                  // hide={true}
                />

                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  content={<CustomTooltip />}
                  labelStyle={{ display: "none" }}
                />
                <ReferenceLine y={0} stroke="#141313" />
                <ReferenceLine x={0} stroke="#141313" />

                <Scatter
                  name="Data"
                  data={impactAssessmentDataMetrics}
                  fill="#8884d8"
                  shape={<CustomDot />}
                />
              </ScatterChart>
            </ResponsiveContainer>

            <div
              className="px-2"
              style={{
                position: "absolute",
                top: "18%",
                left: "12%",
                transform: "translate(-50%, -50%)",
                fontFamily: "DM Sans",
                color: "#5F4B06",
                // fontStyle: "italic",
                fontWeight: "500",
                fontSize: "11px",
                zIndex: 1,
                cursor: "pointer",
                backgroundColor: "#FBE472",
                paddingLeft: "8px",
                paddingRight: "8px",
                borderRadius: "3px",
              }}
            >
              Bright Spot
            </div>

            <div
              style={{
                position: "absolute",
                top: "18%",
                left: "93%",
                transform: "translate(-50%, -50%)",
                fontFamily: "DM Sans",
                color: "#FFFFFF",
                fontWeight: "500",
                fontSize: "11px",
                zIndex: 1,
                cursor: "pointer",
                backgroundColor: "#E51B1B",
                paddingLeft: "8px",
                paddingRight: "8px",
                borderRadius: "3px",
              }}
              className="hotspot_text"
            >
              High Risk
            </div>

            <div
              className="customClassfive "
              style={{
                position: "absolute",
                top: "80%",
                left: "12%",
                transform: "translate(-50%, -50%)",
                fontFamily: "DM Sans",
                color: "#0B4913",
                // fontStyle: "italic",
                fontWeight: "500",
                fontSize: "11px",
                zIndex: 1,
                cursor: "pointer",
                backgroundColor: "#ABD974",
                paddingLeft: "8px",
                paddingRight: "8px",
                borderRadius: "3px",
              }}
            >
              High Return
            </div>

            <div
              style={{
                position: "absolute",
                top: "80%",
                left: "93%",
                transform: "translate(-50%, -50%)",
                fontFamily: "DM Sans",
                color: "#FFFFFF",
                // fontStyle: "italic",
                fontWeight: "500",
                fontSize: "11px",
                zIndex: 1,
                cursor: "pointer",
                backgroundColor: "#F36513",
                paddingLeft: "8px",
                paddingRight: "8px",
                borderRadius: "3px",
              }}
              className="Blind_Text customClassfive"
            >
              Early Warning
            </div>

            <p className="-mt-[25px] pb-1 text-center text-[14px] text-[#ADADAD] font-[600] font-['DM Sans'] benchmark_text customClasssix ">
              Performance in the month
            </p>
            <p className="  -mt-[15px] w-[100%] flex justify-center item center text-center text-[14px] text-[#000000] font-[600] font-['DM Sans'] benchmark_text customClasssix ">
              Better than benchmark{" "}
              <img
                className="px-2 "
                src={Arrow1}
                alt=""
                style={{ filter: "grayscale(100%)", opacity: 0.2 }}
              />
              Worse than benchmark
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
    </>
  );
};

export default ImpactAssessmentRecovery;
