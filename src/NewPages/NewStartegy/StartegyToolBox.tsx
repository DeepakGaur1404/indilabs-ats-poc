import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeDashboard from "../../components/PerformanceDashboardHeader/HomeDashboard";

const toolBoxData = [
  {
    title: "Treatments",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mattis et egestas et cursus nunc.",
  },
  {
    title: "Contact",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mattis et egestas et cursus nunc.",
  },
  {
    title: "Agency",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mattis et egestas et cursus nunc.",
  },
  {
    title: "Offers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mattis et egestas et cursus nunc.",
  },
  {
    title: "Settlements",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mattis et egestas et cursus nunc.",
  },
  {
    title: "Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mattis et egestas et cursus nunc.",
  },
];

const StartegyToolBox = () => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const navigate = useNavigate();

  const handleTabClick = (index: any, title: string) => {
    setActiveTab(index);
    switch (title) {
      case "Treatments":
        navigate("/strategy/reviewExecution");
        break;
      case "Contact":
        navigate("");
        break;
      case "Agency":
        navigate("");
        break;
      case "Offers":
        navigate("");
        break;
      case "Settlements":
        navigate("");
        break;
      case "Sale":
        navigate("");
        break;
      default:
        navigate("");
    }
  };

  return (
    <div className=" px-[6px] h-[100vh] lg:px-[49px] lg:pt-[59px] -mt-10 lg:pb-20 bg-[#fafafb]">
      <HomeDashboard />

      <p className="text-[#000000] font-[500] font-['DM Sans'] text-[16px] leading-6 mt-5 ml-3">
        Strategy Toolbox
      </p>

      <div className="flex flex-wrap gap-[22px] p-3">
        {toolBoxData.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index, tab.title)}
            className={`w-full lg:w-[269px] h-[130px] bg-white rounded-xl shadow p-4 gap-1 flex flex-col justify-center items-center cursor-pointer
                                  ${
                                    activeTab === index
                                      ? "border-violet-600 border-2"
                                      : ""
                                  }`}
          >
            <h3 className="text-[#161D29] font-[600] font-['DM Sans'] text-[16px] leading-6">
              {tab.title}
            </h3>
            <p className="text-[#9CA4B6] font-[400] font-['DM Sans'] text-[12px] leading-[18px] text-center">
              {tab.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full gap-2 flex justify-end absolute bottom-2 right-5">
          <button
            onClick={() => navigate(-1)}
            className=" px-5 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium "
          >
            Back
          </button>
          </div>
    </div>
  );
};

export default StartegyToolBox;
