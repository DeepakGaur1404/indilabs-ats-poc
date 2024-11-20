import React, { useEffect, useState } from "react";
// import yellow from "../../assets/images/uparrowYellow.svg";
// import Red from "../../assets/images/uparrowRed.svg";
// import "./Custom.scss";
// import RedDownArrow from "../../assets/icons/red-down-shift.png";
import RedDownArrow from "../../assets/icons/red-down-shift.png";
import shiftOrange from "../../assets/icons/shift-orange.svg";
// import AllocationRadialBarChart from "./allocationSharePiechart";
// import AllocationShareScatterChart from "./allocationShareScatterChart";
// import { GetCityData } from "../../api/api";
import { GetCityData } from "../../api/api";
import AllocationButtons from "../AllocationEngine/AllocationButtons";
import SegVolumeBadTable from "../AllocationEngine/segVolumeBadTable";
import AllocationStackedBarChart from "../AllocationEngine/allocationStackedBarChart";
import { useNavigate } from "react-router-dom";
import {
  Allocation,
  ExclusionCriteria,
  IAllocationData,
  ImpactAnalysis,
  Overall,
} from "../../redux/model/dashboard.model";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import "../../NewPages/AllocationEngine/Custom.scss";
import PerformanceDashboard from "../../components/PerformanceDashboardHeader/PerformanceDashboard";
import HomeDashboard from "../../components/PerformanceDashboardHeader/HomeDashboard";
import OfferSegementation from "./OfferSegementations";
import OfferSettlementBar from "./OfferSettlementBar";

import StrategySimulation from "../StrategySimulation";


const categories = [
    { id: "segmentation", name: "Segmentation" },
    { id: "startegy", name: "Strategy" },
  ];



const ReviewExecution = () => {
  const [buttons, setButtons] = useState(0);
  const [activeButton, setActiveButton] = useState<string>("all");
  const [selectedSegment, setSelectedSegment] = useState<string>("High Payer");
  const [selectedCategory, setselectedCategory] = useState("segmentation");
  const [optimizeBtn, setOptimizeBtn] = useState(false);
  const handleCategoryClick = async (cityId: string) => {
    setselectedCategory(cityId);
  };

  const showButtons = (num: number) => {
    setButtons(num);
  };
  const navigateToOptimizeStrategy = () => {
    setOptimizeBtn(true);
    // navigate("/strategy/allocationEngine/reviewPerformance");
  };
  const navigate = useNavigate();
  return (
    <div className="p-0 lg:p-[28px] responsivePageWrapper bg-[#FAFAFB] relative">

    


      <div className="bg-[#FAFAFB] rounded-xl p-2 lg:p-[28px] flex flex-col">
      <HomeDashboard />
      <div className="flex mt-5 ml-2">
          <div className=" flex justify-between rounded-xl B1TabsContain">
            {categories.map((city, index) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClick(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  selectedCategory === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === categories.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>
        <>
          
           {selectedCategory === "segmentation"  && (  
          <div className="w-[100%] flex gap-5 mt-4 flex-wrap xl:flex-nowrap">
        
            <OfferSegementation    showButtons={showButtons}
              setSelectedSegment={setSelectedSegment} />
            <OfferSettlementBar  selectedSegment={selectedSegment} />
    
          </div>
           )}

           {selectedCategory === "startegy" && (
             <StrategySimulation/>
           )}
        </>
        <div className="self-end mt-8 flex justify-center gap-2 flex-wrap">
          <button
            onClick={() => navigate(-1)}
            className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium "
          >
            Back
          </button>
          <button
            onClick={navigateToOptimizeStrategy}
            className="bg-primary py-2.5 px-9 border border-primary rounded-3xl text-white"
            style={{ background: "#6750A4" }}
          >
            Review Execution
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewExecution;
