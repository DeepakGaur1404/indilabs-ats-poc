import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PerformanceDashboard from "../../components/PerformanceDashboardHeader/PerformanceDashboard";
import NewDiagnostics from "../../components/Diagnostics/NewDiagnostics";
import Top5Drivers from "../../components/Diagnostics/Top5Drivers";
import ExpectedRecovery from "../../components/Diagnostics/ExpectedRecovery";
import Segmentation from "../../components/Diagnostics/Segmentation";
import TwoCards from "../../components/Diagnostics/TwoCards";
import ActualBalance from "../../components/Diagnostics/ActualBalance";

import HomeDashboard from "../../components/PerformanceDashboardHeader/HomeDashboard";
import DiagnosticSegementation from "../../components/Diagnostics/DiagnosticSegementation";
import HotspotExpanded from "../../components/Diagnostics/HotspotExpanded";
import DiagnosticsCard from "../../components/Diagnostics/DiagnosticsDetails";
import ShareOfBalance from "../../components/Diagnostics/ShareOfBalance";
import DiagnosticSegementationDashboard from "../../components/Diagnostics/DiagnosticSegementationDashboard";

import AUCROCCurve from "../../components/Diagnostics/AUCROCurve";
import ConfusionMatrix from "../../components/Diagnostics/ConfusionMatrix";

const categories = [
  { id: "segmentation", name: "Segmentation" },
  { id: "insights", name: "Insights" },
  { id: "validation", name: "Validation" },
];

const matrixData = [
  [500, 500], // True 0 row
  [500, 500], // True 1 row (scaled for simplicity)
];



const Diagnostics: React.FC = () => {
  const [isDiagnostic, setIsDiagnostic] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<any>("MOB_woe");
  const [selectedCategory, setselectedCategory] = useState("segmentation");
  const[data, setData] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [balanceData, setBalanceData] = useState<any>({});

  const handleCategoryClick = async (cityId: string) => {
    setselectedCategory(cityId);
  };

  const navigate = useNavigate();

  const handleDriverClick = (driver: any) => {
    setSelectedSegment(driver);
  };

  useEffect(() => {
    fetchData("diagnostics_insights");
  },[]);
  
  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/diagnostics?blob=diagnostics_insights`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };
  
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data, "fetched data");
      setData(result.data);
      console.log(data, "data immediately after setData"); // Confirm state update in the same function
    } catch (err: any) {
      setError(err.message);
    }
  };
  
  useEffect(() => {
    fetchSegementaionData("diagnostics_segmentation");
  }, []);

  const fetchSegementaionData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/diagnostics?blob=diagnostics_segmentation`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };

    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data, "fetched data");
      setBalanceData(result.data["write-off pool"]);
      // Confirm state update in the same function
    } catch (err: any) {
      // setError(err.message);
    }
  };

  return (
    // <div className="px-[6px] h-full lg:px-[49px] lg:pt-[59px] -mt-10 lg:pb-20 bg-[#fafafb]">
    //   {/* {selectedCategory === "segmentation" ? (
    //     <DiagnosticSegementationDashboard />
    //   ) : (
    //     // <HomeDashboard />
    //     <DiagnosticInsightandvalidationHeader />
    //   )} */}
    //  <DiagnosticSegementationDashboard balanceData = {balanceData}/>

    //   {/* <div className="w-[100%] flex mt-6 ml-2"> */}
    //   <div className="flex flex-row items-center w-[100%] mt-5 ml-2">
    //     <div className="w-[30%]">
    //       <NewDiagnostics />
    //     </div>

    //     <div className="flex  ml-4">
    //       <div className=" flex justify-between rounded-xl B1TabsContain">
    //         {categories.map((city, index) => (
    //           <div
    //             key={city.id}
    //             onClick={() => handleCategoryClick(city.id)}
    //             className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //               selectedCategory === city.id
    //                 ? " bg-[#E8DEF8] "
    //                 : "bg-[#fafafb]"
    //             } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //               index === categories.length - 1 ? "rounded-r-[4px]" : ""
    //             }`}
    //           >
    //             {city.name}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     {/* </div> */}
    //   </div>

    //   <div className="flex flex-row  w-[100%]  gap-4">
    //     <div className="space-y-4 w-[30%] mt-3 ml-2">
    //       <Top5Drivers
    //         onDriverClick={handleDriverClick}
    //         selectedSegment={selectedSegment}
    //         selectedCategory={selectedCategory}
    //       />
    //       <TwoCards selectedCategory={selectedCategory} />
    //     </div>

    //     <div className="w-[70%] ml-3">
    //       {selectedCategory === "segmentation" && (
    //         <>
    //           <DiagnosticSegementation />
    //           {/* <div className="w-[100%] flex items-center justify-end gap-5 mt-8">
    //         <button
    //           className="self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500 text-center text-[#6750a4] text-sm font-medium"
    //           onClick={() => navigate(-1)}
    //         >
    //           Back
    //         </button>
    //         <Button
    //           onClick={() => {}}
    //           width="180px"
    //           height="40px"
    //           fontSize="14px"
    //           padding="5px"
    //           borderRadius="30px"
    //         >
    //           Review Hotspots
    //         </Button>
    //       </div> */}
    //         </>
    //       )}
    //       {selectedCategory === "insights" && (
    //         <div className="bg-[white] w-[100%] shadow rounded-xl p-4 mt-3">
    //           <p className="text-[black] font-['DM Sans'] font-[700] text-[16px] leading-[21px] ">
    //             Header
    //           </p>
    //           <div className="flex flex-wrap 2xl:gap-4 xl:gap-3 gap-4  mt-3 w-[100%]">
    //             <ExpectedRecovery selectedSegment={selectedSegment} data={data}/>
    //             <Segmentation selectedSegment={selectedSegment} data={data}/>
    //             <ActualBalance selectedSegment={selectedSegment} data={data}/>
    //             <ShareOfBalance selectedSegment={selectedSegment} data={data}/>
    //           </div>
    //           {/* <div className="CommonBodyWrap">
    //       <div className="h-[80vh] flex items-center justify-center">
    //         <div className="bg-yellow-200 p-6 rounded-lg shadow-lg text-center">
    //           <h1 className="text-2xl font-bold mb-2">Work in Progress</h1>
    //           <p className="text-gray-700">This page is under construction.</p>
    //         </div>
    //       </div>
    //     </div> */}
    //         </div>
    //       )}

    //       {selectedCategory === "validation" && (
    //         <div className="md:w-[100%] pb-2 mt-3 bg-[white] shadow rounded-xl">
    //           <AUCROCCurve  />
    //           <ConfusionMatrix />
    //           {/* <ConfusionMatrix selectedSegment={selectedSegment} /> */}
    //         </div>
    //         // <div className=" w-[100%] flex items-start justify-center ml-3 mt-6 cursor-pointer">
    //         //   <div className="w-[100%] md:flex items-start flex justify-start gap-[42px] flex-wrap lg:flex-nowrap">
    //         //     <div className="md:w-[49%] sm:mb-5 md:mb-0">
    //         //       <HotspotExpanded
    //         //         setDiagnostic={() => setIsDiagnostic(true)}
    //         //         onSegmentSelect={setSelectedSegment}
    //         //       />
    //         //     </div>
    //         //     <div className="md:w-[49%] flex flex-col">
    //         //       <DiagnosticsCard />
    //         //     </div>
    //         //   </div>
    //         // </div>
    //         // <div className="bg-[white] mt-3 rounded-xl">
    //         //     <div className="CommonBodyWrap">
    //         //   <div className="h-[80vh] flex items-center justify-center">
    //         //     <div className="bg-yellow-200 p-6 rounded-lg shadow-lg text-center">
    //         //       <h1 className="text-2xl font-bold mb-2">Work in Progress</h1>
    //         //       <p className="text-gray-700">This page is under construction.</p>
    //         //     </div>
    //         //   </div>
    //         // </div>
    //         // </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className="CommonBodyWrap">
    <div className="h-[80vh] flex items-center justify-center">
      <div className="bg-yellow-200 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-2">Work in Progress</h1>
        <p className="text-gray-700">This page is under construction.</p>
      </div>
    </div>
  </div>
  );
};

export default Diagnostics;
