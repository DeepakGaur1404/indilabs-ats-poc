import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import HomeDashboard from "../../../../components/PerformanceDashboardHeader/HomeDashboard";

import Button from "../../../../components/Button";
import NewSettlementRhs from "../../../../components/Monitoring Recovery/NewSettlementRhs";
import NewSettlementLhs from "../../../../components/Monitoring Recovery/NewSettlementLhs";
import CohortLHS from "../../../../components/Monitoring Recovery/CohortLHS";
import VintageRecoveryChart from "../../../../components/Monitoring Recovery/VintageRecoveryChart";
import CohortVintageGraph from "../../../../components/Monitoring Recovery/CohortVintageGraph";
import DelinquencySettlementRecovery from "../../../../components/Monitoring Recovery/DelinquencySettlementRecovery";
import CohortRHS from "../../../../components/Monitoring Recovery/CohortRHS";

const Buttons = [
  // { id: "writeOff", label: "Write Off" },
  { id: "$Recovery", label: "Recovery @ 6 months" },
     { id: "uniquePayer", label: "Cumulative Recovery" },
];
const categoriesButton = [
  { id: "all", name: "All" },]


const categories = [
  { id: "all", name: "" },
  { id: "pos", name: "POS" }
 
];

const subCategories = [
  { id: "V1", name: "V1" },
  { id: "V2", name: "V2" },
  { id: "V3", name: "V3" },
  { id: "V4", name: "V4" },
  { id: "V5", name: "V5" },
  { id: "V6", name: "V6" },
  { id: "V7", name: "V7" },
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
  { id: "Very Small", name: "Very Small" },
  { id: "Small", name: "Small" },
  { id: "Medium", name: "Medium" },
  { id: "Large", name: "Large" },
  // { id: "DCA5", name: "DCA5" },
];

const subCategoriesPayment = [
  { id: "PA", name: "PA" },
  { id: "FFS", name: "FFS" },
];
const subCategoriesLocation = [
  { id: "UP", name: "UP" },
  { id: "MH", name: "MH" },
  { id: "TN", name: "TN" },
  { id: "MP", name: "MP" },
  { id: "KA", name: "KA" },
  { id: "HR", name: "HR" },
  { id: "AP", name: "AP" },
  { id: "TG", name: "TG" },
  { id: "GJ", name: "GJ" },
  { id: "RJ", name: "RJ" },
  // { id: "DL", name: "DL" },
  { id: "OTHERS", name: "OTHERS" },
];
const subCategoriesTOS = [
  { id: "<1Lakh", name: "<1Lakh" },
  { id: ">=1 - 5Lakh", name: ">=1 - 5Lakh" },
  { id: ">=5 - 10Lakh", name: ">=5 - 10Lakh" },
  { id: ">=10L", name: ">=10L" },
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

interface RecoveryItem {
  [key: string]: {
    name: string;
    value: string;
  };
}
// const recoveryStaticData ={
//   "1.0": {
//       "recovery_percentage": 83.60318748140317,
//       "avg_waiver": 61.18844829154344
//   },
//   "2.0": {
//       "recovery_percentage": 60.837818089087015,
//       "avg_waiver": 57.348434591877236
//   },
//   "3.0": {
//       "recovery_percentage": 35.881918522541376,
//       "avg_waiver": 61.784279323979526
//   },
//   "4.0": {
//       "recovery_percentage": 45.46114261772884,
//       "avg_waiver": 60.97890081770419
//   },
//   "5.0": {
//       "recovery_percentage": 38.58809194325734,
//       "avg_waiver": 59.487857711328616
//   },
//   "6.0": {
//       "recovery_percentage": 33.377452342630136,
//       "avg_waiver": 61.12738473024299
//   },
//   "7.0": {
//       "recovery_percentage": 7.738645418326693,
//       "avg_waiver": 20.902786394203616
//   },
//   "8.0": {
//       "recovery_percentage": 26.957681940700805,
//       "avg_waiver": 13.572030418102585
//   }
// }

const Cohort: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("$Recovery");
  const [recoveryData, setRecoveryData] = useState<RecoveryItem[]>([]);
  const [uniqueData, setUniqueData] = useState<RecoveryItem[]>([]);
  const [selectedCategory, setselectedCategory] = useState("all");
  const [selectedSubCategory, setselectedSubCategory] = useState("V1");
  const [selectedSubCategoryTwo, setselectedSubCategoryTwo] = useState("1");
  const [selectedSubCategoryAgency, setselectedSubCategoryAgency] =
    useState("Very Small");
    const [selectedCategoryButton, setselectedCategoryButton] = useState("all");
    const [selectedCategoryAll, setselectedCategoryAll] = useState("pos");
  // const [
  //   selectedSubCategoryUniquePayerAgency,
  //   setselectedSubCategoryUniquePayerAgency,
  // ] = useState("Very Small");
  const [selectedSubCategoryPayment, setselectedSubCategoryPayment] =
    useState("PA");
  const [selectedSubCategoryLocation, setselectedSubCategoryLocation] =
    useState("UP");
  const [selectedSubCategoryTOS, setselectedSubCategoryTOS] =
    useState("<1Lakh");

  const [selectedSubCategorySegments, setselectedSubCategorySegments] =
    useState("Score");

  const [
    selectedSubCategoryUniquePayerSegments,
    setselectedSubCategoryUniquePayerSegments,
  ] = useState("Seg1");

  const [delinquencyGraphTitle, setdelinquencyGraphTitle] = useState(
    "Recovery % and Waiver % by Installments"
  );

  const [delinquencyUniqueGraphTitle, setdelinquencyUniqueGraphTitle] =
    useState("Recovery (millions)");

  const [forwardFlowRateTitle, setforwardFlowRateTitle] = useState(
    "Monthly Recovery % (Coincidental)"
  );

  const [portfolioRecoveryGraphData, setPortfolioRecoveryGraphData] =
    useState<any>();
  const [
    portfolioRecoveryUniquePayerGraphData,
    setPortfolioRecoveryUniquePayerGraphData,
  ] = useState<any>();

  const [portfolioRecoveryFlowGraphData, setPortfolioRecoveryFlowGraphData] =
    useState<any>();
  const [portfolioUniqueFlowGraphData, setPortfolioUniqueFlowGraphData] =
    useState<any>();
  let navigate = useNavigate();
  // const [loader, setLoader] = useState(true);

  // const Loader = () => {
  //   return <span className="loader"></span>;
  // };

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
    if (buttonId === "$Recovery" || buttonId === "writeOff") {
      // setdelinquencyGraphTitle("Monthly Recovery");
      setdelinquencyGraphTitle("Recovery % and Waiver % by Installments");
      setdelinquencyUniqueGraphTitle("Recovery (millions)");
      setforwardFlowRateTitle("Monthly Recovery % (Coincidental)");
    } else if (buttonId === "uniquePayer") {
      setdelinquencyGraphTitle("Total Accounts");
      setforwardFlowRateTitle("Unique Payer Rate");
      setdelinquencyUniqueGraphTitle("Payer%");
    }
  };

  const handleCategoryClick = async (cityId: string) => {
    setselectedCategory(cityId);
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



  const handleSubCategoryPaymentClick = async (cityId: string) => {
    setselectedSubCategoryPayment(cityId);
  };
  const handleSubCategoryLocationClick = async (cityId: string) => {
    setselectedSubCategoryLocation(cityId);
  };
  const handleSubCategoryTOSClick = async (cityId: string) => {
    setselectedSubCategoryTOS(cityId);
  };
  // const handleSubCategoryTOSClickUnique = async (cityId: string) => {
  //   setselectedSubCategoryTOSUnique(cityId);
  // };
  const handleSubCategorySegmentClick = async (cityId: string) => {
    setselectedSubCategorySegments(cityId);
  };
  const handleSubCategoryUniquePayerSegmentClick = async (cityId: string) => {
    setselectedSubCategoryUniquePayerSegments(cityId);
  };

  // useEffect(() => {
  //   setPortfolioRecoveryGraphData(recoveryStaticData);
    
  // }, []);

  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchData("cohort_recovery_settlement");
    
  }, []);
  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/settlements?blob=cohort_recovery_settlement`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };
   
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data,"fetched data");
      setPortfolioRecoveryGraphData(result.data);
      
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] flex flex-col gap-5 w-full">
        {/* <PerformanceDashboard /> */}
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
        {selectedCategory === "mob" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategory === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "placement" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesPlacements.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryTwoClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryTwo === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesPlacements.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "pos" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesTOS.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryTOSClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryTOS === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesTOS.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "agency" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesAgents.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryAgencyClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryAgency === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesAgents.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "location" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesLocation.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryLocationClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryLocation === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesLocation.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "segments" &&
          (activeButton === "$Recovery" || activeButton === "writeOff") && (
            <div className="flex">
              <div className=" flex w-full justify-between  rounded-xl">
                {subCategoriesSegment.map((city, index) => (
                  <div
                    key={city.id}
                    onClick={() => handleSubCategorySegmentClick(city.id)}
                    className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                      selectedSubCategorySegments === city.id
                        ? " bg-[#E8DEF8] "
                        : "bg-[#fafafb]"
                    } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                      index === subCategoriesSegment.length - 1
                        ? "rounded-r-[4px]"
                        : ""
                    }`}
                  >
                    {city.name}
                  </div>
                ))}
              </div>
            </div>
          )}

        {selectedCategory === "segments" && activeButton === "uniquePayer" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesSegmentUniquePayer.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() =>
                    handleSubCategoryUniquePayerSegmentClick(city.id)
                  }
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryUniquePayerSegments === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesSegmentUniquePayer.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col  items-start  justify-center gap-6 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
       {activeButton==="$Recovery"&& <div
          className={`w-full flex flex-col xl:flex-row 
          } items-center justify-between xl:gap-6`}
        >
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            <CohortLHS
              delinquencyGraphTitle={delinquencyGraphTitle}
              delinquencyUniqueGraphTitle={delinquencyUniqueGraphTitle}
              activeButton={activeButton}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
              selectedSubCategoryTwo={selectedSubCategoryTwo}
              selectedSubCategoryLocation={selectedSubCategoryLocation}
              selectedSubCategoryAgency={selectedSubCategoryAgency}
              selectedSubCategoryTOS={selectedSubCategoryTOS}
              selectedSubCategorySegments={selectedSubCategorySegments}
              selectedSubCategoryPayment={selectedSubCategoryPayment}
              selectedSubCategoryUniquePayerSegments={
                selectedSubCategoryUniquePayerSegments
              }
              portfolioRecoveryGraphData={portfolioRecoveryGraphData}
              portfolioRecoveryUniquePayerGraphData={
                portfolioRecoveryUniquePayerGraphData
              }
            />{" "}
          </div>
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
          <CohortRHS
            activeButton={activeButton}
            selectedCategoryButton={selectedCategoryButton}
            selectedCategoryAll={selectedCategoryAll}
            />
          </div>
        </div>}
        {activeButton==="uniquePayer"&&
        <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
        <CohortVintageGraph
          activeButton={activeButton}
          selectedCategory={selectedCategory}
          selectedSubCategoryTwo={selectedSubCategoryTwo}
          selectedSubCategory={selectedSubCategory}
        />
      </div>}
        <div className="w-full flex items-center justify-end gap-5 mt-8">
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

export default Cohort;
