import React from "react";
import TestPipeLine from "./TestPipeLine";
import Performance from "./performance";
import PLImpactChart from "./PLImpactChart";
import SegmentTable from "./SegmentTable";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import TestId from "./TestId";
import Treatment from "./Treatments";
import SequenceAttributes from "./SequenceAttributes";
import ArrowForward from "../../assets/images/arrowforwardios.png";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import AllocationStackedBarChart from "./allocationStackedBarChart";
import OptimizeStackedBarChart from "./optimizeStackedBarChart";

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

  const BGroups = [
    { id: "b1", label: "B1" },
    { id: "b2", label: "B2" },
    { id: "b3", label: "B3" },
    { id: "b4", label: "B4" },
    { id: "b5", label: "B5" },
    { id: "b6", label: "B6" },
  ];

  const Breadcrumbs = [
    { id: 0, label: "Pune" },
    { id: 1, label: "All" },
    { id: 2, label: "B1" },
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

  const handleBreadcrumbClick = async (buttonId: number) => {
    setActiveBreadcrumb(buttonId);
  };

  return (
    <div className="m-1 flex flex-col gap-5 bg-[#FAFAFB] pl-2 pr-2 pt-5 md:m-0 rounded-xl">
      <div className="w-[96%] bg-[#FAFAFB] flex items-center gap-2 justify-between ml-6 flex-wrap">
        <div className="w-[100%] mt-2">
          <DashboardHeader />
        </div>
        <div className="bg-[#FAFAFB] flex justify-between p-2 ml-2 gap-1 flex-wrap">
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

          {Breadcrumbs.map((buttons, index) => (
            <div className="flex justify-between items-center gap-2">
              <div
                key={buttons.id}
                onClick={() => handleBreadcrumbClick(buttons.id)}
                className={`text-center text-[#6750A4] text-[12px] font-[500] font-['DM Sans' !important]  w-full p-2  flex align-center justify-center items-center cursor-pointer ${
                  activeBreadcrumb === buttons.id && "border-b border-[#6750A4]"
                }`}
              >
                {buttons.label}
              </div>
              <div className="w-[20px] h-[20px] mt-3">
                {index === 3 ? "" : <img src={ArrowForward} alt="arrow" />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-[#FAFAFB] ml-2 mr-2">
        {/* <SegmentTable
          showTestIdComponent={showTestIdComponent}
          showTestIdCompo={showTestIdComp}
          segmentData={segmentValue}
        /> */}
        <OptimizeStackedBarChart selectedSegment={selectedSegment} />
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
      {/* {!showTestIdComp && ( */}
      <div className=" mr-3 flex ml-2 gap-2 xl:ml-8 md:mr-0 flex-wrap">
        <TestPipeLine />
        <PLImpactChart />
        <Performance />
      </div>
      {/* )} */}
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
