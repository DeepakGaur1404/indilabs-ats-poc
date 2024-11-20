import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  showButtons?: any;
  setSelectedSegment: any;
};

function OfferSegementation(props: Props) {
  const [activeData, setActiveData] = useState<any>();
  const navigate = useNavigate();
  const { showButtons } = props;
  console.log("activeData value", activeData);

  const strategyTableData = [
    {
      segmentName: "High Payer",
      Volume: "13%",
      CurrentKPI: "40%",
      Benchmark: "16%",

      id: 0,
    },
    {
      segmentName: "Medium Payer",
 
      Volume: "39%",
      CurrentKPI: "33%",
      Benchmark: "12%",
      id: 1,
    },
    {
        segmentName: "Low Payer",
  
        Volume: "48%",
        CurrentKPI: "29%",
        Benchmark: "6%",
        id: 2,
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
      <h1 className=" text-[#000000] font-[500] text-[16px] font-['DM Sans'] p-1 mb-1 leading-[18px]">
        Segmentation
      </h1>
      <table className="w-full" cellPadding={16}>
        <thead>
          <tr className="border-b-[1px] border-[#F3F4F6] flex justify-between items-center px-3">
            <th className="text-[#9CA4B6] text-[12px]  font-[400] font-['DM Sans' !important] w-[24%] text-left -ml-2">
              Segments
            </th>
            <th className="text-[#9CA4B6] text-[12px]  font-[400] font-['DM Sans' !important] w-[24%] ">
              % WO Amount
                 </th>
            <th className="text-[#9CA4B6] text-[12px]  font-[400] font-['DM Sans' !important] w-[24%]">
            % Rec from Settlements
            </th>
            <th className="text-[#9CA4B6] text-[12px]  font-[400] font-['DM Sans' !important] w-[24%]">
            % Rec No-Settlements
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {strategyTableData.map((each, idx) => (
            <tr
              onClick={() => {
                onClickButtons(each.id, each.segmentName);
              }}
              className={` h-[70px] w-full rounded-xl mt-[10px]  text-center flex justify-evenly items-center text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important] ${
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
              <td className="w-[24%] text-left text-[#161D29] text-[14px]  font-[400] font-['DM Sans'] ">{each.segmentName}</td>
              <td  className="w-[24%] -ml-3 text-center text-[#161D29] text-[14px]  font-[400] font-['DM Sans']"
              >
                {each.Volume}
              </td>
              <td
                className="w-[24%] text-center text-[#161D29] text-[14px]  font-[400] font-['DM Sans']"
              >
                {each.CurrentKPI}
              </td>
              <td
                className="w-[24%] text-center text-[#161D29] text-[14px]  font-[400] font-['DM Sans']"
              >
                {each.Benchmark}
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default OfferSegementation;
