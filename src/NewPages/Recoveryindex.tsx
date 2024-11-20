import React from "react";
import TestPipeLine from "./AllocationEngine/TestPipeLine";
import Performance from "./AllocationEngine/performance";
import PLImpactChart from "./AllocationEngine/PLImpactChart";
// import SegmentTable from "./SegmentTable";
import { useEffect, useState } from "react";
// import { HiPlus } from "react-icons/hi";
// import TestId from "./TestId";
// import Treatment from "./Treatments";
// import SequenceAttributes from "./SequenceAttributes";
import ArrowForward from "../assets/images/arrowforwardios.png";
import HomeDashboard from "../components/PerformanceDashboardHeader/HomeDashboard";
// import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
// import AllocationStackedBarChart from "./allocationStackedBarChart";
// import OptimizeStackedBarChart from "./optimizeStackedBarChart";
import Treatments from "./RecoveryStackBar";
import PerformanceDashboard from "../components/PerformanceDashboardHeader/PerformanceDashboard";

import { useNavigate } from "react-router-dom";

import DailyIntensityChart from "./NewStartegy/StartegyPerformance/TestDailyIntensityChart";
import CycleLiquidationChart from "./NewStartegy/StartegyPerformance/CycleLiquidationChart";
const getSegmentFromLocalStorage = () => {
  const segValue = localStorage.getItem("segment");
  if (segValue === undefined || segValue === null) {
    return "VHR";
  } else {
    return JSON.parse(segValue);
  }
};

const ReviewPerformance: React.FC = () => {
  const [activeBucket, setActiveBucket] = useState("b1");
  const [activeBreadcrumb, setActiveBreadcrumb] = useState(3);
  const [showTestIdComp, setShowTestIdComp] = useState(false);
  const [showSequenceCond, setShowSequenceCond] = useState(false);
  const [segmentValue, setSegmentValue] = useState(
    getSegmentFromLocalStorage()
  );
  const [selectedSegment, setSelectedSegment] =
    useState<string>("Very High Risk");
  const [treatment, setTreatment] = useState<any>(null);
  const [performance, setPerformance] = useState<any>(null);
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState<string>("Strategy_Performance");

  const [CategoryButton, setCategoryButton] = useState<string>("all");

  const Buttons = [
    { id: "Strategy_Performance", label: "Strategy Performance" },
   { id: "Test_Performance", label: "Test Performance" },
  ];

  const CategoriesButtons = [
    { id: "all", label: "All" },
   { id: "high_risk", label: "High Risk" },
   { id: "medium_risk", label: "Medium Risk" },
   { id: "low_risl", label: "Low Risk" },
  ];

  const BGroups = [
    { id: "b1", label: "B1" },
    { id: "b2", label: "B2" },
    { id: "b3", label: "B3" },
    { id: "b4", label: "B4" },
    { id: "b5", label: "B5" },
    { id: "b6", label: "B6" },
  ];

  const Breadcrumbs = [
    { id: 0, label: "All" },
    { id: 1, label: "B1" },
    { id: 2, label: "Pune" },
    { id: 3, label: "Very High Risk" },
  ];

  const tableNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const showSequence = () => {
    setShowSequenceCond(true);
  };

  const handleButtonClick = async (buttonId: string) => {
    setActiveBucket(buttonId);
  };

  const showTestIdComponent = () => {
    setShowTestIdComp(true);
  };

  const handleBreadcrumbClick = (buttonId: number) => {
    setActiveBreadcrumb(buttonId);
    if (buttonId === 0 || buttonId === 1 || buttonId === 2) {
      navigate("/strategy/reviewExecution"); // Navigate using React Router
    }
  };

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
  }

  const handleCategoryClick = async (buttonId: string) => {
    setCategoryButton(buttonId);
  }
  return (
    <div className="m-1 flex flex-col gap-5 bg-[#FAFAFB] pl-2 pr-2 pt-5 md:m-0 rounded-xl">
      <div className="w-[96%] bg-[#FAFAFB] flex items-center gap-2 justify-between ml-6 flex-wrap">
        <div className="w-[100%] mt-2">
          {/* <DashboardHeader /> */}
         {/* <PerformanceDashboard /> */}
         <HomeDashboard />
        </div>
        <div className="bg-[#FAFAFB] flex p-2 ml-2 gap-4 flex-col">
          {/* <div className="min-w-[310px] flex justify-start  rounded-xl B1TabsContain overflow-x-auto flex-wrap">
            {BGroups.map((button, index) => (
              <div
                key={button.id}
                onClick={() => handleButtonClick(button.id)}
                className={`text-center text-[18px] font-medium font-['Calibri' !important] h-10 w-[78px] border border-gray-400 flex align-center justify-center items-center cursor-pointer ${
                  activeBucket === button.id
                    ? " bg-violet-200 "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-md" : ""} ${
                  index === BGroups.length - 1 ? "rounded-r-md" : ""
                }`}
              >
                {button.label}
              </div>
            ))}
          </div> */}
          {/* {showTestIdComp && (
            <div className=" flex items-center gap-3">
              <p className="text-[22px]">Treatments</p>
              <button
                type="button"
                className="text-[21px] border bg-[#3D5EB8] mb-3 text-white pl-3 pr-3 rounded-md lg:mb-0"
              >
                {segmentValue}
              </button>
            </div>
          )} */}

          {/* <div>
            <div className="flex items-center p-2 gap-2">
              <p className="text-[#6750A4] text-[12px]  font-[500] font-['DM Sans' !important]">
                Pune
              </p>
              <img src={ArrowForward} alt="arrow" />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center p-2 gap-2">
              <p className="text-[#6750A4] text-[12px] flex self-center  font-[500] font-['DM Sans' !important]">
                All
              </p>
              <div className="ml-2">
                <img src={ArrowForward} alt="arrow" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center p-2 gap-2">
              <p className="text-[#6750A4] text-[12px] flex justify-center  font-[500] font-['DM Sans' !important]">
                B1
              </p>
              <div className="ml-2">
                <img src={ArrowForward} alt="arrow" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center p-2 gap-2">
              <p className="text-[#6750A4] text-[12px] border-b-[1px] border-[#6750A4]  font-[500] font-['DM Sans' !important]">
                Very High Risk
              </p>
            </div>
          </div> */}
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
                onClick={() =>  handleCategoryClick(buttons.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10
                 border p-4 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                   CategoryButton === buttons.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#fafafb]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === CategoriesButtons.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {buttons.label}
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
      
      <div className="flex flex-col  ml-2 mr-2">
        {/* <SegmentTable
          showTestIdComponent={showTestIdComponent}
          showTestIdCompo={showTestIdComp}
          segmentData={segmentValue}
        /> */}
      {activeButton === "Test_Performance" && (
  <>
    <Treatments selectedSegment={selectedSegment} />
    <div className="flex flex-col  items-start  justify-center gap-10 mb-12 mt-5 lg:px-[30px]  bg-[#fafafb] w-full">
        <div
          className={`w-full flex flex-col xl:flex-row bg-[white] p-4 rounded-xl shadow
           items-center justify-between xl:gap-1`}
        >
    <DailyIntensityChart />
        <CycleLiquidationChart />
        </div>
</div>
  </>
)}

       
        {/* <div className="w-[95%] flex items-center ml-6">
          <div className="w-[20%] flex items-center gap-1 border-2 ">
            <HiPlus className="text-violet-800" size={35} />
            <button
              onClick={() => setShowTestIdComp(true)}
              type="button"
              className={`w-[90%] p-1 border-2 rounded-md font-['calibri' !important] font-[400] text-gray-500 ${
                showTestIdComp && "bg-violet-300 text-gray-800 font-[500]"
              }`}
            >
              Add/Edit
            </button>
          </div>

          <table className="w-[80%]" cellPadding={5}>
            <tbody>
              <tr className="border-2">
                {tableNumber.map((each) => (
                  <td className="border-2 text-center font-['calibri' !1important] font-[500s]">
                    {each}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
       {/* {!showTestIdComp && (
      <div className=" mr-3 flex ml-2 gap-2 xl:ml-8 md:mr-0 flex-wrap">
        <TestPipeLine />
        <PLImpactChart />
        <Performance />
      </div> 
     )}  */}
      {/* {showTestIdComp && (
        <div className="flex gap-6 ml-5 flex-wrap">
          <div className="flex flex-col gap-2">
            <TestId showSequence={showSequence} setTreatment={setTreatment} />
            {showSequenceCond && (
              <SequenceAttributes
                treatment={treatment}
                setPerformance={setPerformance}
              />
            )}
          </div>
          <Treatment performance={performance} />
        </div>
      )} */}
    </div>
  );
};

export default ReviewPerformance;
