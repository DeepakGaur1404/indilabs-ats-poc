import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
// import MonitoringCollectionDashboardHeader from "../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";

import ExecutionDashboardRecovery from "../../components/ExecutionRecoveryDashboard/ExecutionDashboardRecover";
import PerformanceDashboard from "../../components/PerformanceDashboardHeader/PerformanceDashboard";

const data = [
  {
    name: "Jan",
    uv: 1.7,
    pv: 6.1,
  },
  {
    name: "Feb",
    uv: 0,
    pv: 7.7,
  },
  {
    name: "Mar",
    uv: 1.0,
    pv: 6.5,
  },
  {
    name: "Apr",
    uv: 1.0,
    pv: 6.2,
  },
  {
    name: "May",
    uv: 2.0,
    pv: 5.5,
  },
  {
    name: "Jun",
    uv: 1.0,
    pv: 6.5,
  },
];

const StrategyAdherenceControlsData = [
  {
    controls: "% of accounts not worked",
    limit: 8,
    actual: 10,
  },
  {
    controls: "Penetration rate over/under target",
    limit: 30,
    actual: 10,
  },
  {
    controls: "Capacity below threshold",
    limit: 20,
    actual: 20,
  },
  {
    controls: ">60 DPD non payers with no offer",
    limit: 5,
    actual: 5,
  },
  {
    controls: "Offer to non-eligible customer",
    limit: 18,
    actual: 5,
  },
  {
    controls: "Settlement offer exceeding discount%",
    limit: 5,
    actual: 10,
  },
  {
    controls: ">90 DPD accounts not assigned to Agency",
    limit: 5,
    actual: 5,
  },
  {
    controls: "<$100 balances assigned to agency",
    limit: 18,
    actual: 5,
  },
];

const OperationalControlsData = [
  {
    controls: "Contact attempts not in compliance",
    limit: 1,
    actual: 5,
  },
  {
    controls: "Complaints as % of contacts",
    limit: 0.5,
    actual: 0.4,
  },
  {
    controls: "Complaints not worked for > 5 days",
    limit: 5,
    actual: 7,
  },
  {
    controls: "Hardship accounts with no callbacks for > 30 days",
    limit: 5,
    actual: 6,
  },
  {
    controls: "VC/PVC accounts with no activity for > 60 days",
    limit: 1,
    actual: 2,
  },
  {
    controls: "Short calls as % of all RPCs",
    limit: 5,
    actual: 5,
  },
  {
    controls: "Call avoidance flags",
    limit: 5,
    actual: 4,
  },
  {
    controls: "> 20 min AHT calls as % of all RPCs",
    limit: 10,
    actual: 7,
  },
  {
    controls: "idle time as % of production time",
    limit: 15,
    actual: 10,
  },
  {
    controls: "New agency assignment not worked for >24hrs",
    limit: 1,
    actual: 5,
  },
  {
    controls: "Agency accounts not worked for >3 days",
    limit: 5,
    actual: 2,
  },
  {
    controls: "Hardship accounts assigned to Agency",
    limit: 0,
    actual: 1,
  },
];

const ExecutionRecovery = () => {
  const [activeTabs, SetActiveTabs] = useState("controls");

  const handleTabClickControls = () => {
    SetActiveTabs("controls");
  };

  const handleTabClickCompliance = () => {
    SetActiveTabs("compliance");
  };

  const controlsLimitStyles = (index: number) => {
    if (index === 3 || index === 6) {
      return {
        backgroundColor: "#ED0E00",
        color: "white",
        height: "25px",
        borderRadius: "2px",
      };
    }
    if (index === 5) {
      return {
        backgroundColor: "#F9C700",
        height: "25px",
        color: "white",
        borderRadius: "2px",
      };
    }
    return {};
  };

  const complianceLimitStyles = (index: number) => {
    if (index === 2 || index === 9) {
      return {
        backgroundColor: "#ED0E00",
        color: "white",
        height: "25px",
        borderRadius: "2px",
      };
    }
    if (index === 3 || index === 11) {
      return {
        backgroundColor: "#F9C700",
        height: "25px",
        color: "white",
        borderRadius: "2px",
      };
    }
    return {};
  };

  return (
    <div className="flex gap-5  flex-col">
      <div className="flex flex-col bg-[#FAFAFB] p-5 px-[4.2rem]">
         {/* <ExecutionDashboardRecovery />  */}
        <PerformanceDashboard />
        {/* <MonitoringCollectionDashboardHeader /> */}

        <div className="w-[100%] flex justify-start gap-12 flex-wrap mt-7 ml-2 ">
          <div className="flex gap-10 ml-2 border-b-[1px] border-[#E0E3E8] w-1/2">
            <button
              className={`font-['DM Sans'] text-${
                activeTabs === "controls" ? "black" : "#000000"
              } text-[black] text-[16px] font-[500] leading-5`}
              style={{
                borderBottom:
                  activeTabs === "controls" ? "2px solid #5C4E8E" : "none",
                width: "65px",
                color: activeTabs !== "controls" ? "#9CA4B6" : "inherit",
              }}
              onClick={handleTabClickControls}
            >
              Controls
            </button>
            <button
              className={`font-['DM Sans'] text-${
                activeTabs === "compliance" ? "black" : "#9CA4B6"
              } text-[#9CA4B6] text-[16px] font-[500] leading-5`}
              style={{
                borderBottom:
                  activeTabs === "compliance" ? "2px solid #5C4E8E" : "none",
                width: "92px",
              }}
              onClick={handleTabClickCompliance}
            >
              Compliance
            </button>
          </div>
          {activeTabs === "controls" && (
            <div className="flex w-[100%] gap-7 -mt-4 ">
              <div className="w-[100%]  h-full bg-white  rounded-xl py-5 px-4 gap-1 border border-gray-100">
                <p className="font-[DM Sans] font-[500] text-[16px] leading-[18px]">
                  Strategy Adherence Controls
                </p>
                <table className="w-[100%]">
                  <thead className="flex justify-between w-[100%] p-3 border-b border-gray-100">
                    <th className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans'] leading-[18px] w-[271px] text-left">
                      Controls
                    </th>
                    <th className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans'] leading-[18px] w-[59px]">
                      Limit
                    </th>
                    <th className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans'] leading-[18px] w-[59px] ">
                      Actual
                    </th>
                  </thead>
                  <tbody className="mt-5 w-[100%]">
                    {StrategyAdherenceControlsData.map((each, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 flex justify-between py-3 px-3  w-[100%]"
                      >
                        <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] w-[271px]  break-all">
                          {each.controls}
                        </td>
                        <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] w-[59px] text-center ">
                          {each.actual}%
                        </td>
                        <td
                          className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] w-[59px] text-center"
                          style={controlsLimitStyles(index)}
                        >
                          {each.limit}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-[100%] p-4  h-max border bg-[white] flex items-center flex-col  border-gray-100 rounded-xl ">
                <div className="flex   justify-between w-[100%]">
                  <p className="font-[DM Sans] font-[500] text-[16px] leading-[18px]">
                    Strategy Adherence Controls
                  </p>
                  <div className="flex items-center gap-4 mr-3">
                    <div className="flex items-center gap-1 ">
                      <div className="w-[13px] h-[14px] bg-[#34B53A] rounded-[10px]"></div>
                      <div className=" text-[#000000] text-[12px] font-[400] font-['DM Sans']">
                        Within CL
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-[13px] h-[14px] bg-[#ED0E00] rounded-[10px]"></div>
                      <div className="text-[#000000] text-[12px] font-[400] font-['DM Sans']">
                        Exceed CL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[113%] h-[410px] flex items-centerr">
                  <ResponsiveContainer className=" flex items-center  w-[100%]">
                    <BarChart
                      width={800}
                      // height={100}
                      data={data}
                      margin={{
                        top: 20,
                        right: 45,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        className="text-[#3B414B] text-[12px] font['DM Sans'] font-[400]"
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 9]}
                        ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        className="text-[#3B414B] text-[12px] font['DM Sans'] font-[400]"
                      />
                      <Tooltip />
                      <Bar
                        dataKey="pv"
                        stackId="a"
                        fill="#34B53A"
                        barSize={10}
                        shape={(props: any) => {
                          const { x, y, width, height, ...rest } = props;
                          const radius =
                            props.payload.name === "Feb"
                              ? [10, 10, 10, 10]
                              : [0, 0, 10, 10];
                          return (
                            <Rectangle
                              x={x}
                              y={y}
                              width={width}
                              height={height}
                              {...rest}
                              radius={radius}
                            />
                          );
                        }}
                      />
                      <Bar
                        dataKey="uv"
                        stackId="a"
                        fill="#ED0E00"
                        barSize={10}
                        shape={(props: any) => {
                          const { x, y, width, height, ...rest } = props;
                          const radius =
                            props.payload.name === "Feb"
                              ? [10, 10, 0, 0]
                              : [10, 10, 0, 0];
                          return (
                            <Rectangle
                              x={x}
                              y={y}
                              width={width}
                              height={height}
                              {...rest}
                              radius={radius}
                            />
                          );
                        }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
          {activeTabs === "compliance" && (
            <div className="flex w-[100%] -mt-4 gap-7">
              <div className="w-[100%] h-full  rounded-xl py-5 px-4 gap-1 border bg-[white]  border-gray-100">
                <p className="font-[DM Sans] font-[500] text-[16px] leading-[18px]">
                  Operational Controls
                </p>
                <table className="w-[100%]">
                  <thead className="flex justify-between w-[100%] p-3 border-b border-gray-100">
                    <th className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans'] leading-[18px] w-[271px] text-left">
                      Controls
                    </th>
                    <th className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans'] leading-[18px] w-[59px]">
                      Limit
                    </th>
                    <th className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans'] leading-[18px] w-[59px]">
                      Actual
                    </th>
                  </thead>
                  <tbody className="mt-5 w-[100%]">
                    {OperationalControlsData.map((each, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 flex justify-between py-3 px-3 w-[100%]"
                      >
                        <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] w-[271px] text-left">
                          {each.controls}
                        </td>
                        <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] w-[59px] text-center ">
                          {each.limit}%
                        </td>
                        <td
                          className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] w-[59px] text-center"
                          style={complianceLimitStyles(index)}
                        >
                          {each.actual}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-[100%]  p-4  h-max border bg-[white] flex items-center flex-col  border-gray-100 rounded-xl ">
                <div className="flex justify-between w-[100%]">
                  <p className="font-[DM Sans] font-[500] text-[16px] leading-[18px]">
                    Strategy Adherence Controls
                  </p>
                  <div className="flex items-center gap-4 mr-3">
                    <div className="flex items-center gap-1 ">
                      <div className="w-[13px] h-[14px] bg-[#34B53A] rounded-[10px]"></div>
                      <div className=" text-[#000000] text-[12px] font-[400] font-['DM Sans']">
                        Within CL
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-[13px] h-[14px] bg-[#ED0E00] rounded-[10px]"></div>
                      <div className="text-[#000000] text-[12px] font-[400] font-['DM Sans']">
                        Exceed CL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[113%] h-[410px] flex items-center">
                  <ResponsiveContainer className=" flex items-center  w-[100%]">
                    <BarChart
                      // width={400}
                      // height={100}
                      data={data}
                      margin={{
                        top: 20,
                        right: 45,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        className="text-[#3B414B] text-[12px] font['DM Sans'] font-[400]"
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 9]}
                        ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        className="text-[#3B414B] text-[12px] font['DM Sans'] font-[400]"
                      />
                      <Tooltip />
                      <Bar
                        dataKey="pv"
                        stackId="a"
                        fill="#34B53A"
                        barSize={10}
                        shape={(props: any) => {
                          const { x, y, width, height, ...rest } = props;
                          const radius =
                            props.payload.name === "Feb"
                              ? [10, 10, 10, 10]
                              : [0, 0, 10, 10];
                          return (
                            <Rectangle
                              x={x}
                              y={y}
                              width={width}
                              height={height}
                              {...rest}
                              radius={radius}
                            />
                          );
                        }}
                      />
                      <Bar
                        dataKey="uv"
                        stackId="a"
                        fill="#ED0E00"
                        barSize={10}
                        shape={(props: any) => {
                          const { x, y, width, height, ...rest } = props;
                          const radius =
                            props.payload.name === "Feb"
                              ? [10, 10, 0, 0]
                              : [10, 10, 0, 0];
                          return (
                            <Rectangle
                              x={x}
                              y={y}
                              width={width}
                              height={height}
                              {...rest}
                              radius={radius}
                            />
                          );
                        }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
   
  );
};

export default ExecutionRecovery;
