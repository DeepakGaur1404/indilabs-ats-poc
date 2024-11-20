import React, { useState } from "react";
import MonitoringRecoverySubtabsDashboardHeader from "../../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
import Button from "../../../components/Button";
import PerformanceDashboard from "../../../components/PerformanceDashboardHeader/PerformanceDashboard";
import DelinquencySettlementRecovery from "../../../components/Monitoring Recovery/DelinquencySettlementRecovery";
import ForwardFlowRatesSettlementRecovery from "../../../components/Monitoring Recovery/ForwardFlowRatesSettlementRecovery";
import MonitoringCollectionDashboardHeader from "../../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
// import "../Monitoring.scss"
import { useNavigate } from "react-router-dom";
import HomeDashboard from "../../../components/PerformanceDashboardHeader/HomeDashboard";
const Buttons = [
  { id: "$Recovery", label: "$ Value" },
  // { id: "uniquePayer", label: "# Accounts" },
  // { id: "uniquePayer", label: "Unique Payer" },
];

// const categoriesButton = [
//   { id: "All", name: "All" },
//   { id: "MUM", name: "Mum" },
//   { id: "BLR", name: "Blr" },
//   { id: "DEL", name: "Del" },
//   { id: "HYD", name: "Hyd" },
//   { id: "KOL", name: "Kol" },
//   { id: "Others", name: "Others" },
// ];

const categoriesButton = [
  { id: "all", name: "All" },
  { id: "MAHARASHTRA", name: "MH" },
  { id: "UTTAR PRADESH", name: "UP" },
  { id: "TAMILNADU", name: "TN" },
  { id: "MADHYA PRADESH", name: "MP" },
  { id: "KARNATAKA", name: "KAR" },
  { id: "HARYANA", name: "HR" },

  { id: "ANDHRA PRADESH", name: "AP" },
  { id: "TELANGANA", name: "TEL" },
  { id: "GUJARAT", name: "GUJ" },
  { id: "DELHI", name: "DEL" },
  { id: "OTHERS", name: "Others" },
];

const categories = [
  { id: "pos", name: "POS" },
  { id: "mob", name: "Vintage" },
  // { id: "agency", name: "Agency" },
  //   { id: "segments", name: "Segments" },
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
const DistributionRecovery: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("$Recovery");
  const [selectedCategoryButton, setselectedCategoryButton] = useState("all");
  const [selectedCategoryAll, setselectedCategoryAll] = useState("pos");
  const [selectedCategoryMum, setselectedCategoryMum] = useState("pos");
  const [selectedCategoryKar, setselectedCategoryKar] = useState("pos");
  const [selectedCategoryDel, setselectedCategoryDel] = useState("pos");
  const [selectedCategoryTg, setselectedCategoryTg] = useState("pos");
  const [selectedCategoryTn, setselectedCategoryTn] = useState("pos");
  const [selectedCategoryKol, setselectedCategoryKol] = useState("pos");
  const [selectedCategoryRomg, setselectedCategoryRomg] = useState("pos");
  const [selectedCategoryGj, setselectedCategoryGj] = useState("pos");
  const [selectedCategoryMp, setselectedCategoryMp] = useState("pos");
  const [selectedCategoryAp, setselectedCategoryAp] = useState("pos");
  const [selectedCategoryOthers, setselectedCategoryOthers] = useState("pos");
  const [selectedCategoryHR, setselectedCategoryHR] = useState("pos");
  const [selectedCategoryUP, setselectedCategoryUP] = useState("pos");
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
  const handleCategoryClickTn = async (cityId: string) => {
    setselectedCategoryTn(cityId);
  };
  const handleCategoryClickKar = async (cityId: string) => {
    setselectedCategoryKar(cityId);
  };
  const handleCategoryClickDel = async (cityId: string) => {
    setselectedCategoryDel(cityId);
  };
  const handleCategoryClickRomg = async (cityId: string) => {
    setselectedCategoryRomg(cityId);
  };
  const handleCategoryClickAp = async (cityId: string) => {
    setselectedCategoryAp(cityId);
  };
  const handleCategoryClickGj = async (cityId: string) => {
    setselectedCategoryGj(cityId);
  };
  const handleCategoryClickTg = async (cityId: string) => {
    setselectedCategoryTg(cityId);
  };
  const handleCategoryClickKol = async (cityId: string) => {
    setselectedCategoryKol(cityId);
  };
  const handleCategoryClickMp = async (cityId: string) => {
    setselectedCategoryMp(cityId);
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

  const handleCategoryClickHR = async (cityId: string) => {
    setselectedCategoryHR(cityId);
  };
  const handleCategoryClickUP = async (cityId: string) => {
    setselectedCategoryUP(cityId);
  };
  return (
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5 w-full">
        {/* <PerformanceDashboard/> */}
        <HomeDashboard />
      </div>
      <div className=" w-full flex flex-col gap-5 mt-4 items-start ml-[73px] mb-4">
        <div className="flex ">
          <div className=" flex w-full justify-between rounded-xl B1TabsContain">
            {Buttons.map((buttons, index) => (
              <div
                key={buttons.id}
                onClick={() => handleProductClick(buttons.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 
                 border p-4 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                   activeButton === buttons.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#fafafb]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === Buttons.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {buttons.label}
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className=" flex justify-between  rounded-xl B1TabsContain">
            {categoriesButton.map((city, index) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClickButton(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  selectedCategoryButton === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === categoriesButton.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>

        {selectedCategoryButton === "all" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickAll(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryAll === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "KARNATAKA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickKar(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryKar === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "TAMILNADU" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickTn(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryTn === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "DELHI" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickDel(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryDel === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "TELANGANA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickTg(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryTg === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "MAHARASHTRA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickMum(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryMum === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "ROMG" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickRomg(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryRomg === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "ANDHRA PRADESH" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickAp(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryAp === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "GUJARAT" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickGj(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryGj === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "KOLKATA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickKol(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryKol === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "MADHYA PRADESH" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickMp(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryMp === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "OTHERS" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickOthers(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryOthers === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategoryButton === "UTTAR PRADESH" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickUP(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryUP === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "HARYANA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickHR(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryHR === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col  items-start  justify-center gap-7 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
        <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
          <DelinquencySettlementRecovery
            activeButton={activeButton}
            selectedCategoryButton={selectedCategoryButton}
            selectedCategoryAll={selectedCategoryAll}
            selectedCategoryTn={selectedCategoryTn}
            selectedCategoryKar={selectedCategoryKar}
            selectedCategoryMum={selectedCategoryMum}
            selectedCategoryRomg={selectedCategoryRomg}
            selectedCategoryDel={selectedCategoryDel}
            selectedCategoryTg={selectedCategoryTg}
            selectedCategoryAp={selectedCategoryAp}
            selectedCategoryGj={selectedCategoryGj}
            selectedCategoryKol={selectedCategoryKol}
            selectedCategoryMp={selectedCategoryMp}
            selectedCategoryOthers={selectedCategoryOthers}
            setselectedCategoryAll={setselectedCategoryAll}
            setselectedCategoryMum={setselectedCategoryMum}
            setselectedCategoryKol={setselectedCategoryKol}
            setselectedCategoryKar={setselectedCategoryKar}
            setActiveButton={setActiveButton}
            setselectedCategoryButton={setselectedCategoryButton}
            setselectedCategoryOthers={setselectedCategoryOthers}
            setselectedCategoryAp={setselectedCategoryAp}
            setselectedCategoryMp={setselectedCategoryMp}
            setselectedCategoryGj={setselectedCategoryGj}
            setselectedCategoryRomg={setselectedCategoryRomg}
            setselectedCategoryTn={setselectedCategoryTn}
            setselectedCategoryTg={setselectedCategoryTg}
            setselectedCategoryDel={setselectedCategoryDel}
            selectedCategoryHR={selectedCategoryHR}
            selectedCategoryUP={selectedCategoryUP}
          />
          {/* <ForwardFlowRatesSettlementRecovery /> */}
        </div>

        <div className="w-full flex items-center justify-end gap-5 mt-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium "
          >
            Back
          </button>
          <Button
            // onClick={reviewHotspots}
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

export default DistributionRecovery;
