import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/common/Sidebar";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import RiskMonitoringExpanded from "../../components/Monitoring/RiskMoniteringExpanded";
import Button from "../../components/Button";
import ImpactAssessment from "../../components/Monitoring/ImpactAssessment";
import download from "../../assets/images/download.png";
import MonitoringCollectionDashboardHeader from "../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
import { useNavigate} from "react-router-dom";
const downloadReports = () => {};

const runDiagnostics = () => {};

const Monitoring: React.FC = () => {
  const [categories, setCategories] = useState("All");
  console.log("setCategories value", categories);
  let navigate = useNavigate();
  // const [monitoringbalanceData, setMonitoringbalanceData] = useState<any>();
  // const [monitoringmonthData, setMonitoringmonthData] = useState<any>();
  // const [monitoringunitData, setunitData] = useState<any>();

  useEffect(() => {}, []);

  return (
    <div className="CommonBodyWrap">
      <div className="px-[6px] lg:px-[59px] lg:pt-[47px] bg-[#fafafb]">
        <DashboardHeader />
      </div>
      {/* <div className="w-full flex justify-end items-center mt-1 -ml-14">
        <div className="w-[150px] h-[40px] flex justify-around items-center">
          <div className="w-[18px] h-[18px]">
            <img src={download} alt="download" />
          </div>
          <div className="w-[116px] h-[20px] text-[#6750A4] text-[14px] font-[500] font-['DM Sans']">
            Download Report
          </div>
        </div>
      </div> */}
      <div className="flex flex-wrap  items-start  justify-center  px-[6px] lg:px-[59px]  bg-[#fafafb]">
        <div className=" w-full flex items-start gap-4 justify-start flex-wrap">
          <RiskMonitoringExpanded setCategory={setCategories} />
          <ImpactAssessment Category={categories} />
        </div>
        <div className="w-full flex items-center justify-end gap-3 mt-8 mr-2 mb-8">
          <button onClick={() => navigate(-1)} className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium ">
            Back
          </button>
          {/* <Button
            onClick={downloadReports}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Download Reports
          </Button> */}
          <Button
            onClick={runDiagnostics}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Run Diagnostics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
