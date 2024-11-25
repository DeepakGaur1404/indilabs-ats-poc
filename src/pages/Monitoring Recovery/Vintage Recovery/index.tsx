import React, { useEffect, useState } from "react";
// import Sidebar from "../../../components/common/Sidebar";
import DashboardHeader from "../../../components/DshboardHeader/DashboardHeader";
import Button from "../../../components/Button";
import SubTabs from "../../../components/SubTabs/SubTabs";
import VintageRecoveryChart from "../../../components/Monitoring Recovery/VintageRecoveryChart";
import MonitoringRecoverySubtabsDashboardHeader from "../../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
import MonitoringCollectionDashboardHeader from "../../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
// import "../Monitoring.scss";
import { useNavigate } from "react-router-dom";
import PerformanceDashboard from "../../../components/PerformanceDashboardHeader/PerformanceDashboard";
import HomeDashboard from "../../../components/PerformanceDashboardHeader/HomeDashboard";
// const Buttons = [
//   { id: "$Recovery", label: "$ Value" },
//   // { id: "uniquePayer", label: "# Accounts" },
//   // { id: "uniquePayer", label: "Unique Payer" },
// ];
const newcategories = [
  { id: "All", name: "All" },
  { id: "Prem_OS", name: "Prem OS" },
  { id: "Policy_Year", name: "Policy Year" },
  { id: "Prem_Frequency", name: "Prem Frequency" },
  { id: "Product", name: "Product" },
];
const PremOSCategories = [
  { id: "<20K", name: "<20K" },
  { id: "20K-50K", name: "20K-50K" },
  { id: "50K-150K", name: "50K-150K" },
  { id: ">150K", name: ">150K" },
];
const PolicyYearCategories = [
  { id: "13M", name: "13M" },
  { id: "27M", name: "27M" },
  { id: "37M", name: "37M" },
  { id: ">150K", name: ">150K" },
];
const PremFrequencyCategories = [
  { id: "Annual", name: "Annual" },
  { id: "20K-50K", name: "20K-50K" },
  { id: "50K-150K", name: "50K-150K" },
  { id: ">150K", name: ">150K" },
];
const ProductCategories = [
  { id: "Traditional", name: "Traditional" },
  { id: "Term", name: "Term" },
  { id: "ULIP", name: "ULIP" },
  
];


// const categories = [
//   // { id: "all", name: "All" },
//   // { id: "pos_seg", name: "POS" },
//   // { id: "location", name: "Location" },
//   // { id: "segment", name: "Segments" },
// ];

const subCategories = [
  { id: "<1L", name: "<1L" },
  { id: "1-5L", name: "1-5L" },
  { id: "5-10L", name: "5-10L" },
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

const VintageRecovery: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("$Recovery");
  const [selectedCategory, setselectedCategory] = useState("all");
  const [newselectedCategory, setnewselectedCategory] = useState("All");
  const [PremOSCategorie, setPremOSCategorie] = useState("<20K");
  const [PolicyYear, setPolicyYear] = useState("13M");
   const [PremFrequency, setPremFrequency] = useState("Annual");
   const [Product, setProduct] = useState("Traditional");
  const [selectedSubCategory, setselectedSubCategory] = useState("<1L");
  const [selectedSubCategoryTwo, setselectedSubCategoryTwo] = useState("Score");
  let navigate = useNavigate();
  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
  };

  const handleCategoryClick = async (cityId: string) => {
    setselectedCategory(cityId);
  };
 
  const handleSubCategoryClick = async (cityId: string) => {
    setselectedSubCategory(cityId);
  };
  const newhandleCategoryClick = async (cityId: string) => {
    setnewselectedCategory(cityId);
  };
  const handlePolicyYearCategoriesClick = async (cityId: string) => {
    setPolicyYear(cityId);
  };
  const handlePremOSCategoriesClick = async (cityId: string) => {
    setPremOSCategorie(cityId);
  };
  const handlePremFrequencyCategoriesClick = async (cityId: string) => {
    setPremFrequency(cityId);
  };
  const handleProductCategoriesClick = async (cityId: string) => {
    setProduct(cityId);
  };
  const handleSubCategoryTwoClick = async (cityId: string) => {
    setselectedSubCategoryTwo(cityId);
  };
  const [staticData, setStaticData] = useState<null>(null);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchData("recovery_vintage");
  }, []);
  
  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/vintage/?blob=recovery_vintage`;
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
      setStaticData(result.data);
      console.log(data, "data immediately after setData"); // Confirm state update in the same function
    } catch (err: any) {
      setError(err.message);
    }
  };
  
  // Log updated data once setData completes
  useEffect(() => {
    if (staticData) {
      console.log(staticData, "Updated data****");
    }
  }, [staticData]);
  
  
  const tabs = [
    { label: "Pre-Due", width: "65px" },
    { label: "Early Lapse", width: "92px" },
    { label: "Late Lapse", width: "92px" },
    { label: "Deep Lapse", width: "92px" },
  ];
  
  const handleTabClick = (tab:any) => {
    SetActiveTabs(tab); // Adjust to your state update logic
  };
  const [activeTabs, SetActiveTabs] = useState("Pre-Due");

  return (
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5 w-full">
        {/* {/ <PerformanceDashboard /> /} */}
        <HomeDashboard />
      </div>
      <div className="flex gap-10 ml-20 mt-10 border-b-[1px] border-[#E0E3E8] w-3/4">
    {tabs.map((tab) => (
      <button
        key={tab.label}
        className={`font-['DM Sans'] text-${
          activeTabs === tab.label ? "black" : "#9CA4B6"
        } text-[16px] font-[500] leading-5`}
        style={{
          borderBottom: activeTabs === tab.label ? "2px solid #5C4E8E" : "none",
          width: tab.width,
          color: activeTabs !== tab.label ? "#9CA4B6" : "inherit",
        }}
        onClick={() => handleTabClick(tab.label)}
      >
        {tab.label}
      </button>
    ))}
  </div>
      <div className=" w-full flex flex-col gap-5 mt-4 items-start ml-[73px] mb-4">
      <div className="flex ">
          <div className=" w-max flex justify-between  rounded-xl B1TabsContain">
            {newcategories.map((city, index) => (
              <div
                key={city.id}
                onClick={() => newhandleCategoryClick(city.id)}
                className={`w-max text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  newselectedCategory === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === newcategories.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>
        {newselectedCategory === "Prem_OS" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {PremOSCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handlePremOSCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    PremOSCategorie=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === PremOSCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
         {newselectedCategory === "Policy_Year" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {PolicyYearCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handlePolicyYearCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    PolicyYear=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === PolicyYearCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
         {newselectedCategory === "Prem_Frequency" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {PremFrequencyCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handlePremFrequencyCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    PremFrequency=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === PremFrequencyCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
          {newselectedCategory === "Product" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {ProductCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handleProductCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    Product=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === ProductCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* <div className="flex ">
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
            {categories.map((city, index) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClick(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  selectedCategory === city.id
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
        </div> */}

        {selectedCategory === "pos_seg" && (
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

        {selectedCategory === "segment" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesSegment.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryTwoClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryTwo === city.id
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
      </div>
      <div className="flex flex-col  items-start  justify-center gap-7 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
        <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
          {/* <VintageRecoveryChart
            activeButton={activeButton}
            selectedCategory={selectedCategory}
            selectedSubCategoryTwo={selectedSubCategoryTwo}
            selectedSubCategory={selectedSubCategory}
            staticData={staticData}
          /> */}
        </div>

        {/* <div className="w-full flex items-center justify-end gap-5 mt-8">
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
        </div> */}
      </div>
    </div>
  );
};

export default VintageRecovery;
