import React, { useState } from "react";
import MonitoringRecoverySubtabsDashboardHeader from "../../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
import Button from "../../../components/Button";
import DelinquencySettlementRecovery from "../../../components/Monitoring Recovery/DelinquencySettlementRecovery";
import ForwardFlowRatesSettlementRecovery from "../../../components/Monitoring Recovery/ForwardFlowRatesSettlementRecovery";
import MonitoringCollectionDashboardHeader from "../../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
// import "../Monitoring.scss"
import { useNavigate} from "react-router-dom";
const Buttons = [
  { id: "$Recovery", label: "$ Recovery" },
  { id: "uniquePayer", label: "Unique Payer" },
];
const categoriesButton = [
  { id: "All", name: "All" },
  { id: "MUM", name: "Mum" },
  { id: "BLR", name: "Blr" },
  { id: "DEL", name: "Del" },
  { id: "HYD", name: "Hyd" },
  { id: "KOL", name: "Kol" },
  { id: "Others", name: "Others" },
];

const categories = [
  { id: "mob", name: "MOB" },
  { id: "placement", name: "Placement" },

  { id: "agency", name: "Agency" },
  { id: "segments", name: "Segments" },
];

const subCategories = [
  { id: "<6", name: "<6" },
  { id: "6-12", name: "6-12" },
  { id: "12-18", name: "12-18" },
  { id: "18-24", name: "18-24" },
  { id: "24-36", name: "24-36" },
  { id: "36+", name: "36+" },
];

const subCategoriesPlacements = [
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
  { id: "6+", name: "6+" },
];

const subCategoriesAgents = [
  { id: "DCA1", name: "DCA1" },
  { id: "DCA2", name: "DCA2" },
  { id: "DCA3", name: "DCA3" },
  { id: "DCA4", name: "DCA4" },
  { id: "DCA5", name: "DCA5" },
];

const subCategoriesAgentsUniquePayer = [
  { id: "DCA1", name: "DCA1" },
  { id: "DCA2", name: "DCA2" },
  { id: "DCA3", name: "DCA3" },
  { id: "DCA4", name: "DCA4" },
  { id: "DCA5", name: "DCA5" },
  { id: "Others", name: "Others" },
];

const subCategoriesLocation = [
  { id: "MUM", name: "Mum" },
  { id: "BLR", name: "Blr" },
  { id: "DEL", name: "Del" },
  { id: "PUN", name: "Pun" },
  { id: "HYD", name: "Hyd" },
  { id: "KOL", name: "Kol" },
  { id: "Others", name: "Others" },
];
const subCategoriesSegment = [
  { id: "Score", name: "Score" },
  { id: "Age", name: "Age" },
  { id: "Industry", name: "Industry" },
  { id: "Employment", name: "Employment" },
  { id: "Seg5", name: "Seg5" },
  { id: "Others", name: "Others" },
];
const subCategoriesSegmentUniquePayer = [
  { id: "Seg1", name: "Seg1" },
  { id: "Seg2", name: "Seg2" },
  { id: "Seg3", name: "Seg3" },
  { id: "Seg4", name: "Seg4" },
  { id: "Seg5", name: "Seg5" },
  { id: "Others", name: "Others" },
];
const SettlementRecovery: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("$Recovery");
  const [selectedCategoryButton, setselectedCategoryButton] = useState("All");
  const [selectedCategoryAll, setselectedCategoryAll] = useState("mob");
  const [selectedCategoryMum, setselectedCategoryMum] = useState("mob");
  const [selectedCategoryBlr, setselectedCategoryBlr] = useState("mob");
  const [selectedCategoryDel, setselectedCategoryDel] = useState("mob");
  const [selectedCategoryHyd, setselectedCategoryHyd] = useState("mob");
  const [selectedCategoryKol, setselectedCategoryKol] = useState("mob");
  const [selectedCategoryOthers, setselectedCategoryOthers] = useState("mob");
  const [selectedSubCategory, setselectedSubCategory] = useState("<6");
  const [selectedSubCategoryTwo, setselectedSubCategoryTwo] = useState("1");
  const [selectedSubCategoryAgency, setselectedSubCategoryAgency] =
    useState("DCA1");
  const [
    selectedSubCategoryUniquePayerAgency,
    setselectedSubCategoryUniquePayerAgency,
  ] = useState("DCA1");
  const [selectedSubCategoryPayment, setselectedSubCategoryPayment] =
    useState("PA");
  const [selectedSubCategoryLocation, setselectedSubCategoryLocation] =
    useState("MUM");
  const [selectedSubCategorySegments, setselectedSubCategorySegments] =
    useState("Score");

  const [
    selectedSubCategoryUniquePayerSegments,
    setselectedSubCategoryUniquePayerSegments,
  ] = useState("Seg1");
  const [delinquencyGraphTitle, setdelinquencyGraphTitle] = useState("MOB");
  const [forwardFlowRateTitle, setforwardFlowRateTitle] =
    useState("% Recovery");
    let navigate = useNavigate();
  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
    if (buttonId === "$Recovery") {
      setdelinquencyGraphTitle("MOB");
      setforwardFlowRateTitle("% Recovery");
    } else if (buttonId === "uniquePayer") {
      setdelinquencyGraphTitle("MOB");
      setforwardFlowRateTitle("% Recovery");
    }
  };

  const handleCategoryClickButton = async (cityId: string) => {
    setselectedCategoryButton(cityId);
  };

  const handleCategoryClickAll = async (cityId: string) => {
    setselectedCategoryAll(cityId);
  };
  const handleCategoryClickMum = async (cityId: string) => {
    setselectedCategoryMum(cityId);
  };
  const handleCategoryClickBlr = async (cityId: string) => {
    setselectedCategoryBlr(cityId);
  };
  const handleCategoryClickDel = async (cityId: string) => {
    setselectedCategoryDel(cityId);
  };
  const handleCategoryClickHyd = async (cityId: string) => {
    setselectedCategoryHyd(cityId);
  };
  const handleCategoryClickKol = async (cityId: string) => {
    setselectedCategoryKol(cityId);
  };
  const handleCategoryClickOthers = async (cityId: string) => {
    setselectedCategoryOthers(cityId);
  };
  const handleSubCategoryClick = async (cityId: string) => {
    setselectedSubCategory(cityId);
  };

  const handleSubCategoryTwoClick = async (cityId: string) => {
    setselectedSubCategoryTwo(cityId);
  };
  const handleSubCategoryAgencyClick = async (cityId: string) => {
    setselectedSubCategoryAgency(cityId);
  };

  const handleSubCategoryUniquePayerAgencyClick = async (cityId: string) => {
    setselectedSubCategoryUniquePayerAgency(cityId);
  };

  const handleSubCategoryPaymentClick = async (cityId: string) => {
    setselectedSubCategoryPayment(cityId);
  };
  const handleSubCategoryLocationClick = async (cityId: string) => {
    setselectedSubCategoryLocation(cityId);
  };
  const handleSubCategorySegmentClick = async (cityId: string) => {
    setselectedSubCategorySegments(cityId);
  };
  const handleSubCategoryUniquePayerSegmentClick = async (cityId: string) => {
    setselectedSubCategoryUniquePayerSegments(cityId);
  };
  return (
    // <div className="CommonBodyWrap bg-[#fafafb]">
    //   <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5 w-full">
    //     <MonitoringCollectionDashboardHeader />
    //   </div>
    //   <div className=" w-full flex flex-col gap-5 mt-8 items-start ml-20 mb-8">
    //     <div className="flex ">
    //       <div className=" flex w-full justify-between rounded-xl B1TabsContain">
    //         {Buttons.map((buttons, index) => (
    //           <div
    //             key={buttons.id}
    //             onClick={() => handleProductClick(buttons.id)}
    //             className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 
    //              border p-4 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //                activeButton === buttons.id
    //                  ? " bg-[#E8DEF8] "
    //                  : "bg-[#fafafb]"
    //              } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //               index === Buttons.length - 1 ? "rounded-r-[4px]" : ""
    //             }`}
    //           >
    //             {buttons.label}
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="flex">
    //       <div className=" flex justify-between  rounded-xl B1TabsContain">
    //         {categoriesButton.map((city, index) => (
    //           <div
    //             key={city.id}
    //             onClick={() => handleCategoryClickButton(city.id)}
    //             className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //               selectedCategoryButton === city.id
    //                 ? " bg-[#E8DEF8] "
    //                 : "bg-[#fafafb]"
    //             } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //               index === categoriesButton.length - 1 ? "rounded-r-[4px]" : ""
    //             }`}
    //           >
    //             {city.name}
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {selectedCategoryButton === "All" && (
    //       <div className="flex">
    //         <div className=" flex w-full justify-between  rounded-xl">
    //           {categories.map((city, index) => (
    //             <div
    //               key={city.id}
    //               onClick={() => handleCategoryClickAll(city.id)}
    //               className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //                 selectedCategoryAll === city.id
    //                   ? " bg-[#E8DEF8] "
    //                   : "bg-[#fafafb]"
    //               } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //                 index === categories.length - 1 ? "rounded-r-[4px]" : ""
    //               }`}
    //             >
    //               {city.name}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //     {selectedCategoryButton === "MUM" && (
    //       <div className="flex">
    //         <div className=" flex w-full justify-between  rounded-xl">
    //           {categories.map((city, index) => (
    //             <div
    //               key={city.id}
    //               onClick={() => handleCategoryClickMum(city.id)}
    //               className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //                 selectedCategoryMum === city.id
    //                   ? " bg-[#E8DEF8] "
    //                   : "bg-[#fafafb]"
    //               } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //                 index === categories.length - 1 ? "rounded-r-[4px]" : ""
    //               }`}
    //             >
    //               {city.name}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //     {selectedCategoryButton === "BLR" && (
    //       <div className="flex">
    //         <div className=" flex w-full justify-between  rounded-xl">
    //           {categories.map((city, index) => (
    //             <div
    //               key={city.id}
    //               onClick={() => handleCategoryClickBlr(city.id)}
    //               className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //                 selectedCategoryBlr === city.id
    //                   ? " bg-[#E8DEF8] "
    //                   : "bg-[#fafafb]"
    //               } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //                 index === categories.length - 1 ? "rounded-r-[4px]" : ""
    //               }`}
    //             >
    //               {city.name}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //     {selectedCategoryButton === "DEL" && (
    //       <div className="flex">
    //         <div className=" flex w-full justify-between  rounded-xl">
    //           {categories.map((city, index) => (
    //             <div
    //               key={city.id}
    //               onClick={() => handleCategoryClickDel(city.id)}
    //               className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //                 selectedCategoryDel === city.id
    //                   ? " bg-[#E8DEF8] "
    //                   : "bg-[#fafafb]"
    //               } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //                 index === categories.length - 1 ? "rounded-r-[4px]" : ""
    //               }`}
    //             >
    //               {city.name}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //     {selectedCategoryButton === "HYD" && (
    //       <div className="flex">
    //         <div className=" flex w-full justify-between  rounded-xl">
    //           {categories.map((city, index) => (
    //             <div
    //               key={city.id}
    //               onClick={() => handleCategoryClickHyd(city.id)}
    //               className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //                 selectedCategoryHyd === city.id
    //                   ? " bg-[#E8DEF8] "
    //                   : "bg-[#fafafb]"
    //               } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //                 index === categories.length - 1 ? "rounded-r-[4px]" : ""
    //               }`}
    //             >
    //               {city.name}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //     {selectedCategoryButton === "KOL" && (
    //       <div className="flex">
    //         <div className=" flex w-full justify-between  rounded-xl">
    //           {categories.map((city, index) => (
    //             <div
    //               key={city.id}
    //               onClick={() => handleCategoryClickKol(city.id)}
    //               className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //                 selectedCategoryKol === city.id
    //                   ? " bg-[#E8DEF8] "
    //                   : "bg-[#fafafb]"
    //               } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //                 index === categories.length - 1 ? "rounded-r-[4px]" : ""
    //               }`}
    //             >
    //               {city.name}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //     {selectedCategoryButton === "Others" && (
    //       <div className="flex">
    //         <div className=" flex w-full justify-between  rounded-xl">
    //           {categories.map((city, index) => (
    //             <div
    //               key={city.id}
    //               onClick={() => handleCategoryClickOthers(city.id)}
    //               className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //                 selectedCategoryOthers === city.id
    //                   ? " bg-[#E8DEF8] "
    //                   : "bg-[#fafafb]"
    //               } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //                 index === categories.length - 1 ? "rounded-r-[4px]" : ""
    //               }`}
    //             >
    //               {city.name}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   <div className="flex flex-col  items-start  justify-center gap-7 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
    //     <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
    //       <DelinquencySettlementRecovery />

    //       <ForwardFlowRatesSettlementRecovery />
    //     </div>

    //     <div className="w-full flex items-center justify-end gap-5 mt-4 mb-4">
    //       <button onClick={() => navigate(-1)} className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium ">
    //         Back
    //       </button>
    //       <Button
    //         // onClick={reviewHotspots}
    //         width="200px"
    //         height="40px"
    //         fontSize="14px"
    //         padding="5px"
    //         borderRadius="30px"
    //       >
    //         Review Hotspots
    //       </Button>
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

export default SettlementRecovery;
