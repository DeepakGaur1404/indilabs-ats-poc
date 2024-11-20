import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  showButtons?: any;
  setSelectedSegment: any;
};

function SegVolumeBadTableRecovery(props: Props) {
  const [activeData, setActiveData] = useState<any>();
  const navigate = useNavigate();
  const { showButtons } = props;
  console.log("activeData value", activeData);

  const strategyTableData = [
    {
      segmentName: "Very High Payer",
      Volume: 12000,
      CurrentKPI: "65%",
      Benchmark: "68%",
      Performance: "Review",
      id: 0,
    },
    {
      segmentName: "High Payer",
      Performance: "Review",
      Volume: 6200,
      CurrentKPI: "35%",
      Benchmark: "30%",
      id: 1,
    },
    {
      segmentName: "Medium Payer",
      Performance: "Review",
      Volume: 2455,
      CurrentKPI: "25%",
      Benchmark: "20%",
      id: 2,
    },
    {
      segmentName: "Low Payer",
      Performance: "Review",
      Volume: 8000,
      CurrentKPI: "20%",
      Benchmark: "18%",
      id: 3,
    },
    {
      segmentName: "Very Low Payer",
      Performance: "Review",
      Volume: 1560,
      CurrentKPI: "20%",
      Benchmark: "18%",
      id: 4,
    },
  ];

  const onClickButtons = (id: number, segment: string) => {
    console.log(segment);

    // if (segment == "Medium Risk") {
    //   // alert("ajsahsahsajhgs");
    //   props.setSelectedSegment("Medium Risk");
    // } else {
    //   props.setSelectedSegment("Very High Risk");
    // }
    props.setSelectedSegment(segment);
    setActiveData(id);
    showButtons(id);
    localStorage.setItem("segment", JSON.stringify(segment));
  };

  
  const navigateToReviewPerformance = () => {
    navigate("/strategy/allocationEngine/reviewPerformance/recovery");
  };

  return (
    <div className="min-w-[300px] w-[100%] sm:w-[72%] md:w-[77.3%] lg:w-[73%]  xl:w-[50%] bg-white pt-3 pl-3 pr-3 -ml-2 rounded-xl border-2 lg:ml-1 overflow-x-auto">
      <h1 className=" text-[#000000] font-[500] text-[16px] font-['DM Sans'] mb-1 leading-[18px]">
        Segmentation
      </h1>
      <table className="w-full" cellPadding={16}>
        <thead>
          <tr className="border-b-[1px] border-[#F3F4F6] flex justify-evenly">
            <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[16%] text-start">
              Segment
            </th>
            <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[16%] ml-6">
              Volume
            </th>
            <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[17%]">
              Current KPI
            </th>
            <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[16%]">
              Benchmark
            </th>
            <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[16%]">
              Performance
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {strategyTableData.map((each, idx) => (
            <tr
              onClick={() => {
                onClickButtons(each.id, each.segmentName);
              }}
              className={` h-[60px] rounded-xl mt-[10px] text-center flex justify-evenly items-center text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important] ${
                each.id !== activeData
                  ? "border-b-[1px] border-[#F3F4F6]"
                  : null
              }
               ${
                 each.id === activeData &&
                 "border-[#5C4E8E] border-[2px] z-10 shadow-lg"
               } 
              
              cursor-pointer `}
            >
              <td className="-ml-6">{each.segmentName}</td>
              <td
                className={`${
                  idx === 0 || idx === 4
                    ? "relative right-[21px]"
                    : idx === 2
                    ? "relative right-[15px]"
                    : idx === 3
                    ? "relative left-[2px]"
                    : "relative right-[2px]"
                }`}
              >
                {each.Volume}
              </td>
              <td
                className={`${
                  idx === 0
                    ? "relative right-[10px]"
                    : idx === 1
                    ? "relative left-[6px]"
                    : idx === 2
                    ? "bg-[#10B981] py-[1px] mr-1 rounded-sm text-[#FFFFFF]"
                    : idx === 3
                    ? "bg-[#F9C700] py-[1px] mr-1 rounded-sm relative left-[10px]  text-[#FFFFFF]"
                    : idx === 4 &&
                      "bg-[#F9C700] py-[1px] relative right-[6px]  rounded-sm  text-[#FFFFFF]"
                }`}
              >
                {each.CurrentKPI}
              </td>
              <td
                className={`${
                  (idx === 1 || idx === 3) && "relative left-[8px]"
                }`}
              >
                {each.Benchmark}
              </td>
              <td
                className={`text-[#6750A4] text-[12px]  font-[500] font-['DM Sans' !important] ${
                  (idx === 1 || idx === 3) && "relative left-[4px]"
                }`}
                onClick={() => {
                  navigateToReviewPerformance();
                }}
              >
                {each.Performance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SegVolumeBadTableRecovery;
