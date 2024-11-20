import React, { useEffect, useState } from "react";
// import "./Custom.scss";
// import SegVolumeBadTable from "./segVolumeBadTable";
import { useNavigate } from "react-router-dom";
import TemperatureGrapgh from "../components/Monitoring/TemperatureGrapgh";
import DashboardHeader from "../components/DshboardHeader/DashboardHeader";
import PaidNotPaid from "../components/Monitoring/PaidNotPaid";
import Performance from "./AllocationEngine/performance";

// import {
//   Allocation,
//   ExclusionCriteria,
//   IAllocationData,
//   ImpactAnalysis,
//   Overall,
// } from "../../redux/model/dashboard.model";
// import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
// import "./Allocation.scss";

// declare module "recharts" {
//   interface RadialBarProps {
//     minAngle?: number;
//     label?: any;
//     background?: any;
//     clockWise?: any;
//     dataKey?: any;
//   }
// }

// const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500"];
// const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

const StrategyNew = () => {
  const [buttons, setButtons] = useState(0);
  const [reviewBtn, setReviewBtn] = useState(false);
  const [optimizeBtn, setOptimizeBtn] = useState(false);
  const [activeBucket, setActiveBucket] = useState("b1");
  const navigate = useNavigate();
  const [selectedSegment, setSelectedSegment] = useState<string>("VHR");

  const BGroups = [
    { id: "b1", label: "B1" },
    { id: "b2", label: "B2" },
    { id: "b3", label: "B3" },
    { id: "b4", label: "B4" },
    { id: "b5", label: "B5" },
    { id: "b6", label: "B6" },
  ];

  const handleButtonClick = async (buttonId: string) => {
    setActiveBucket(buttonId);
  };

  //   useEffect(() => {
  //   }, [activeButton]);

  // const Loader = () => {
  //   return <span className="loader"></span>;
  // };

  const navigateToReviewExecution = () => {
    setReviewBtn(true);
    navigate("/strategy/reviewExecution");
  };

  const navigateToReviewPerformance = () => {
    setOptimizeBtn(true);
    // navigate("/strategy/reviewExecution");
  };

  //   const showButtons = (num: number) => {
  //     setButtons(num);
  //   };

  return (
    <div className="p-0 lg:p-[28px] responsivePageWrapper bg-[#FAFAFB]  relative">
      <DashboardHeader />
      <div className="bg-[#FAFAFB] rounded-xl p-2 lg:p-[28px] mt-5 ml-2 flex flex-col">
        <div className=" w-full flex flex-wrap justify-between items-center">
          <div className=" flex min-w-[240px] justify-start items-center rounded-xl">
            {BGroups.map((button, index) => (
              <div
                key={button.id}
                onClick={() => handleButtonClick(button.id)}
                className={`text-center text-[14px] text-[#1D192B] font-[500] font-[''DM Sans'' !important] h-10 w-[62px] border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  activeBucket === button.id ? " bg-[#E8DEF8] " : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === BGroups.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {button.label}
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center">
            <TemperatureGrapgh />
          </div>
        </div>

        <div className="w-[100%] flex gap-2 flex-wrap xl:flex-nowrap">
          <PaidNotPaid />
          <Performance />
        </div>

        <div className="w-full mt-3 flex justify-end  items-center gap-2 flex-wrap">
          <button onClick={() => navigate(-1)} className="w-[85px] h-10 px-4 py-2.5 rounded-[100px] border border-[#79747E] justify-center items-center inline-flex text-center text-[#6750A4] font-[500] text-[14px] font-['DM Sans'] leading-tight ">
            Back
          </button>
          <button
            onClick={navigateToReviewExecution}
            className="bg-[#6750A4] py-2.5 px-9 border border-primary font-[500] text-[14px] font-['DM Sans'] rounded-3xl text-[#FFFFFF]"
            style={{ background: "#6750A4" }}
          >
            Simulation Engine
          </button>
          <button
            onClick={navigateToReviewPerformance}
            className="bg-[#6750A4] py-2.5 px-9 border border-primary rounded-3xl text-[#FFFFFF] font-[500] text-[14px] font-['DM Sans']"
            style={{ background: "#6750A4" }}
          >
            Review Execution
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrategyNew;
