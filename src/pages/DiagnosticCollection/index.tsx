import React, { useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import HotspotExpanded from "../../components/DiagnosticsCollection/HotspotExpanded";
import DiagnosticsCard from "../../components/DiagnosticsCollection/DiagnosticsDetails";
import Button from "../../components/Button";
import MonitoringRecoverySubtabsDashboardHeader from "../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
import MonitoringCollectionDashboardHeader from "../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
import { useNavigate } from "react-router-dom";

const reviewHotspots = () => {};

const Diagnostics: React.FC = () => {
  const [isDiagnostic, setIsDiagnostic] = useState(false);
  const navigate = useNavigate();
  const [selectedSegment, setSelectedSegment] = useState<string | null>(
    "Recovery % @ 12MOB%"
  );

  return (
    <>
      <div className="px-[6px] h-full  lg:px-[49px]  lg:pt-[59px] -mt-10 lg:pb-20  bg-[#fafafb]">
        <MonitoringCollectionDashboardHeader />
        <div className=" w-[100%] flex items-start justify-center ml-3 mt-6 cursor-pointer">
          <div className="w-[100%] md:flex items-start flex justify-start gap-[42px] flex-wrap lg:flex-nowrap">
            <div className="md:w-[49%] sm:mb-5 md:mb-0">
              <HotspotExpanded
                setDiagnostic={() => setIsDiagnostic(true)}
                onSegmentSelect={setSelectedSegment}
              />
            </div>
            <div className="md:w-[49%] flex flex-col">
              <DiagnosticsCard />
            </div>
          </div>
        </div>
        <div className="w-[100%] flex items-center justify-end gap-5 mt-8">
          <button
            className="self-end w-20 h-10 px-4 py-2.5  rounded-3xl border border-zinc-500 text-center text-[#6750a4] text-sm font-medium"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <Button
            onClick={reviewHotspots}
            width="170px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Review Trends
          </Button>
          <Button
            onClick={reviewHotspots}
            width="190px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Optimize Strategy
          </Button>
        </div>
      </div>
    </>
  );
};

export default Diagnostics;
