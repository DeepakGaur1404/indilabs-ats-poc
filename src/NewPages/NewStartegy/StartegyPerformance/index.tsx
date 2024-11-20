import React from "react";
import { useEffect, useState } from "react";

import Treatments from "../../RecoveryStackBar";

import { useNavigate } from "react-router-dom";

import TestDailyIntensityChart from "./TestDailyIntensityChart";
import CycleLiquidationChart from "./CycleLiquidationChart";
import HomeDashboard from "../../../components/PerformanceDashboardHeader/HomeDashboard";
import PercentCycleLiquidationChart from "./PercentCycleLiquidation";
import IntensityvsResolutionChart from "./IntensityvsResolutionChart";
import StartegyDailyIntensityChart from "./StartegyDailyIntensityChart";
import AllocationofStrategyActions from "./AllocationofStrategyActions";

const StrategyPerformance: React.FC = () => {
  const [selectedSegment, setSelectedSegment] =
    useState<string>("Very High Risk");

  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState<string>(
    "Strategy_Performance"
  );

  const [CategoryButton, setCategoryButton] = useState<string>("all");

  const Buttons = [
    { id: "Strategy_Performance", label: "Strategy Performance" },
    { id: "Test_Performance", label: "Test Performance" },
  ];

  const CategoriesButtons = [
    { id: "all", label: "All" },
    { id: "high_risk", label: "High Risk" },
    { id: "medium_risk", label: "Medium Risk" },
    { id: "low_risk", label: "Low Risk" },
  ];

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
  };

  const handleCategoryClick = async (buttonId: string) => {
    setCategoryButton(buttonId);
  };
  return (
    <div className="m-1 flex flex-col gap-5 bg-[#FAFAFB]  pt-5 md:m-0 rounded-xl">
      <div className="w-[100%] bg-[#FAFAFB] flex  gap-2 justify-between items-center flex-wrap">
        <div className="w-[100%] mt-2 lg:px-[48px]">
          <HomeDashboard />
        </div>
        <div className="flex p-2 lg:ml-12 gap-4 flex-col">
          <div className="flex ">
            <div className=" flex w-full  rounded-xl B1TabsContain">
              {Buttons.map((buttons, index) => (
                <div
                  key={buttons.id}
                  onClick={() => handleProductClick(buttons.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10
                 border p-4 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                   activeButton === buttons.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#fafafb]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === Buttons.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {buttons.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex ">
            <div className=" flex w-full justify-between rounded-xl B1TabsContain">
              {CategoriesButtons.map((buttons, index) => (
                <div
                  key={buttons.id}
                  onClick={() => handleCategoryClick(buttons.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10
                 border p-4 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                   CategoryButton === buttons.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#fafafb]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === CategoriesButtons.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {buttons.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  ml-2 mr-2  mb-5 ">
        {activeButton === "Strategy_Performance" && (
          <>
            <div className="flex flex-col  items-start  justify-center lg:px-7  -mt-4 w-full">
              <div
                className={`w-full flex flex-col xl:flex-row  p-2
           items-center justify-between xl:gap-1`}
              >
                <StartegyDailyIntensityChart />
                {/* <AllocationofStrategyActions /> */}
              </div>
              <div
                className={`w-full flex flex-col xl:flex-row  p-2
           items-center justify-between xl:gap-1`}
              >
                <PercentCycleLiquidationChart />
                <IntensityvsResolutionChart />
              </div>
            </div>
          </>
        )}

        {activeButton === "Test_Performance" && (
          <>
            <div className="flex flex-col  items-start  justify-center gap-10 lg:px-4 w-full -mt-[6px]">
              <Treatments selectedSegment={selectedSegment} />
              <div
                className={` lg:px-7 -mt-4 ml-1
          `}
              >
                <div className="rounded-xl shadow p-3 bg-[white] w-full flex flex-col xl:flex-row  items-center justify-between xl:gap-1">
                  <TestDailyIntensityChart />
                  <CycleLiquidationChart />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StrategyPerformance;
