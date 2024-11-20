import React, { useEffect, useState } from "react";
// import Sidebar from "../../../components/common/Sidebar";
import DashboardHeader from "../../../components/DshboardHeader/DashboardHeader";
import PaidNotPaid from "../../../components/Monitoring/PaidNotPaid";
import DCAVolumeSharePieChart from "../../../components/Monitoring/DCAVolumeSharePieChart";
import TemperatureGrapgh from "../../../components/Monitoring/TemperatureGrapgh";

const Agency: React.FC = () => {
  const [activeBucket, setActiveBucket] = useState("B1");
  const testValues = [1, 2, 3, 4];
  const [selectedCity, setSelectedCity] = useState("Pune");
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

  return (
    <div className="w-[100%] px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5 CommonBodyWrap">
      <DashboardHeader />
      <div className=" flex flex-col justify-start items-start gap-3 lg:flex-row lg:items-center  ">
        <div className="w-[100%] max-w-[500px] flex justify-between border-solid border rounded-xl B1TabsContain">
          {/* {BGroups.map((button) => (
                <div
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`text-center text-sm font-normal font-['DM Sans'] h-10 w-[57px] border-r-2 flex align-center justify-center items-center cursor-pointer ${
                    activeBucket === button.id ? " bg-violet-400 " : "bg-gray-100"
                  } `}
                >
                  {button.label}
                </div>
              ))} */}
          {BGroups.map((button, index) => (
            <div
              key={button.id}
              onClick={() => handleButtonClick(button.label)}
              className={`text-center text-lg font-[600] font-['calibri'] h-10 text-[#2E2D31] w-[100%] border border-gray-400 flex align-center justify-center items-center cursor-pointer ${
                activeBucket === button.label ? " bg-[#E8DFF8] " : "bg-white"
              } ${index === 0 ? "rounded-l-md" : ""} ${
                index === BGroups.length - 1 ? "rounded-r-md" : ""
              }`}
            >
              {button.label}
            </div>
          ))}
        </div>
        {/* ))} */}
        {/* </div> */}
        {/* <div className="w-[100%] self-stretch px-3 py-5 rounded-lg justify-end items-center gap-10 flex">
          <div className="text-gray-500 text-xl font-medium font-['calibri']">
            Overall Health
          </div>
          <div className="w-[55%]">
          <TemperatureGrapgh />
          </div>
        
        </div> */}
      </div>
      <div className="w-[100%] flex justify-between items-center flex-wrap  -mt-10 mb-3">
        <PaidNotPaid setSelectedCity={setSelectedCity} />
        <DCAVolumeSharePieChart
          bucketName={activeBucket}
          selectedCity={selectedCity}
        />
      </div>
    </div>
  );
};

export default Agency;