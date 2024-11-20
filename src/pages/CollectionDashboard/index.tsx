import React from "react";
import CounterCard from "../../components/CollectionDashboard/CounterCard";
import RiskMonitoring from "../../components/CollectionDashboard/RiskMonitoring";
import Hotspot from "../../components/CollectionDashboard/Hotspot";
import TestPipline from "../../components/CollectionDashboard/TestPipline";
import Labels from "../../components/CollectionDashboard/Labels";
import PieChartComponent from "../../components/PieChart/PieChart";
import BarChartComponent from "../../components/BarChart/BarChart";
import LineBarChart from "../../components/LineBarChart/LineBarChart";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import Button from "../../components/Button";

type Props = {};

const download = () => {};

const index = (props: Props) => {
  const text1 = "STEP 1: Monitoring & DIagnostics";
  const text2 = "STEP 2: Strategy Optimisation";
  const text3 = "STEP 3: Execution";
  const cProps = [
    {
      a1: "05",
      a2: "Hotspots",
      a3: +2,
      a4: "Potential risk: $250k",
      clr: "text-yellow-400",
    },
    {
      a1: "4.3",
      a2: "ROI Value",
      a3: -10,
      a4: "Improvement Opportunity: $150k",
      clr: "text-emerald-500",
    },
    {
      a1: "40%",
      a2: "STP Rate",
      a3: -5,
      a4: "Improvement Opportunity: $150k",
      clr: "text-yellow-400",
    },
  ];

  return (
    <>
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#FAFAFB] ">
        <DashboardHeader />
      </div>
      <div className="md:flex lg:flex xl:flex flex-wrap bg-[#FAFAFB] lg:px-[50px]">
        <div className="w-full lg:w-1/2 xl:w-1/3  p-4 md:p-2 lg:p-2 xl:p-4">
          <div className="w-full flex   h-[917px] p-4 shadow bg-[#f2effe] rounded-xl  flex-col justify-start items-start gap-3 ">
            <Labels text={text1} />
            <CounterCard data={cProps[0]} />
            <RiskMonitoring />
            <Hotspot />
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 p-4 md:p-2 lg:p-2 xl:p-4">
          <div className="w-full flex  h-[917px] p-4 bg-[#fff8f1] rounded-xl shadow flex-col justify-start items-start gap-3 ">
            <Labels text={text2} />
            <CounterCard data={cProps[1]} />
            <LineBarChart />
            <TestPipline />
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3  p-4 md:p-2 lg:p-2 xl:p-4">
          <div className="w-full flex   h-[917px] p-4 bg-[#e8f3ed] rounded-xl shadow flex-col justify-start items-start gap-3 ">
            <Labels text={text3} />
            <CounterCard data={cProps[2]} />
            <PieChartComponent />

            <BarChartComponent />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap  items-end  justify-end gap-7 p-[6px] lg:p-[59px] bg-[#FAFAFB]">
        <div className="w-[960px] flex  xl:w-[1050px] 2xl:w-[1500px] justify-end mt-8 ml-8">
          <Button
            onClick={download}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Download Report
          </Button>
        </div>
      </div>
    </>
  );
};

export default index;
