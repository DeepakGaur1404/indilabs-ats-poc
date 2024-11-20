import React from "react";
import Sidebar from "../../components/common/Sidebar";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import MaturationCurve from "../../components/Monitoring/MaturationCurve";
import PaidNotPaid from "../../components/Monitoring/PaidNotPaid";
import DailyCycleLiquidation from "../../components/Monitoring/DailyCycleLiquidation";
import SubTabs from "../../components/SubTabs/SubTabs";
// import LineBarChart from "../../components/LineBarChart/LineBarChart";
import RiskLineBarChart from "../../components/LineBarChart/riskTierBarChart";
// import IncreaseBalRiskTierChart from "../../components/LineBarChart/increaseBalRiskTierChart";
import Button from "../../components/Button";
import IncreaseInBal from "../../components/Monitoring/IncreaseInBal";

type Props = {};

const reviewHotspots = () => {};

function Distribution({}: Props) {
  return (
    <>
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5">
        <DashboardHeader />
        <SubTabs
          isDropDown={true}
          page="distribution"
          tabs={["Cycle", "Risk Tier", "MOB", "Channels", "Income"]}
        />
      </div>
      <div className="flex flex-wrap rounded-lg  items-start  justify-center  p-[6px] lg:px-[59px] bg-[#fafafb]">
        <div className="w-full mt-5  rounded-2xl border shadow-md flex items-center justify-between  flex-wrap">
          <RiskLineBarChart />
          {/* <PaidNotPaid /> */}
          <IncreaseInBal />
          {/* <IncreaseBalRiskTierChart/> */}
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-5 mt-[150px] pr-[60px]">
        <button className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium ">
          Back
        </button>
        <Button
          onClick={reviewHotspots}
          width="200px"
          height="40px"
          fontSize="14px"
          padding="5px"
          borderRadius="30px"
        >
          Review Hotspots
        </Button>
      </div>
    </>
  );
}

export default Distribution;
