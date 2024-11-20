import React from "react";
// import Sidebar from "../../../components/common/Sidebar";
import DashboardHeader from "../../../components/DshboardHeader/DashboardHeader";
import DelinquencyBuckets from "../../../components/Monitoring/DelinquencyBuckets";
import ForwardFlowRates from "../../../components/Monitoring/ForwardFlowRates";
import BenchmarkTable from "../../../components/Monitoring/BenchmarkTable";
import Button from "../../../components/Button";
import SubTabs from "../../../components/SubTabs/SubTabs";
import "../Monitoring.scss"
import { useNavigate} from "react-router-dom";
const reviewHotspots = () => {};

const Portfolio: React.FC = () => {
  let navigate = useNavigate();
  return (
    <div className="CommonBodyWrap">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5 w-full">
        <DashboardHeader />
        {/* <SubTabs isDropDown={false} tabs={["All", "Internal","Agencies"]} /> */}
      </div>
      <div className="flex flex-col  items-start  justify-center gap-7 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
        <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
          <DelinquencyBuckets />

          <ForwardFlowRates />
        </div>
        <div className="w-full BenchmarkTableMain">
          <BenchmarkTable />
        </div>
        <div className="w-full flex items-center justify-end gap-5 mt-8">
          <button onClick={() => navigate(-1)} className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium ">
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
      </div>
    </div>
  );
};

export default Portfolio;