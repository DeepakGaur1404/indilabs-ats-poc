import React, { useEffect, useState } from "react";
// import yellow from "../../assets/images/uparrowYellow.svg";
// import Red from "../../assets/images/uparrowRed.svg";
// import "./Custom.scss";
// import RedDownArrow from "../../assets/icons/red-down-shift.png";
import RedDownArrow from "../assets/icons/red-down-shift.png";
import shiftOrange from "../assets/icons/shift-orange.svg";
// import AllocationRadialBarChart from "./allocationSharePiechart";
// import AllocationShareScatterChart from "./allocationShareScatterChart";
// import { GetCityData } from "../../api/api";
import { GetCityData } from "../api/api";
import AllocationButtons from "./AllocationEngine/AllocationButtons";
import SegVolumeBadTable from "./AllocationEngine/segVolumeBadTable";
import AllocationStackedBarChart from "./AllocationEngine/allocationStackedBarChart";
import { useNavigate } from "react-router-dom";
import {
  Allocation,
  ExclusionCriteria,
  IAllocationData,
  ImpactAnalysis,
  Overall,
} from "../redux/model/dashboard.model";
import DashboardHeader from "../components/DshboardHeader/DashboardHeader";
import "../NewPages/AllocationEngine/Custom.scss";
import PerformanceDashboard from "../components/PerformanceDashboardHeader/PerformanceDashboard";
import HomeDashboard from "../components/PerformanceDashboardHeader/HomeDashboard";
// import "./Allocation.scss";
// import { ResponsiveContainer } from "recharts";

// declare module "recharts" {
//   interface RadialBarProps {
//     minAngle?: number;
//     label?: any;
//     background?: any;
//     clockWise?: any;
//     dataKey?: any;
//   }
// }

// const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500"];
// const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

const ReviewExecution = () => {
  const [buttons, setButtons] = useState(0);
  const [reviewBtn, setReviewBtn] = useState(false);
  const [optimizeBtn, setOptimizeBtn] = useState(false);
  const [b2, setB2] = useState(false);
  const [selectedCity, setSelectedCity] = useState("all");
  const [activeBucket, setActiveBucket] = useState("b1");
  const [activeButton, setActiveButton] = useState<string>("all");
  const [allocationData, setAllocationData] = useState<Allocation[]>();
  const [exclusion_criteria, setExclusion_criteria] =
    useState<ExclusionCriteria>();
  const [loader, setLoader] = useState(false);
  const [overall, setOverall] = useState<Overall>();
  const [impact_analysis, setImpact_analysis] = useState<ImpactAnalysis>();
  const navigate = useNavigate();

  // scatter chart
  const [minResolveRate, setMinResolveRate] = useState<number>(70); // Default to 70 if you like
  const [maxResolveRate, setMaxResolveRate] = useState<number>(100); // Default to 100 if you like
  const [resultArray, setResultArray] = useState<number[]>([]);
  const [cityData, setCityData] = useState<any>([]);

  const [maxAllocationData, setMaxAllocationData] = useState<number>();
  const [minAllocationData, setMinAllocationData] = useState<number>();
  const [resultArrayList, setResultArrayList] = useState<number[]>([]);
  const [selectedSegment, setSelectedSegment] = useState<string>("All");

  const cities = [
    { id: "all", name: "All" },
    { id: "pune", name: "Pune" },
    { id: "delhi", name: "Delhi" },
    { id: "mumbai", name: "Mumbai" },

    { id: "hyderabad", name: "Hyderabad" },
    { id: "chennai", name: "Chennai" },
    { id: "nagpur", name: "Nagpur" },
    { id: "bangalore", name: "Bangalore" },
    { id: "goa", name: "Goa" },
    { id: "kolkata", name: "Kolkata" },
  ];
  const BGroups = [
    { id: "b1", label: "B1" },
    { id: "b2", label: "B2" },
    { id: "b3", label: "B3" },
    { id: "b4", label: "B4" },
    { id: "b5", label: "B5" },
    { id: "b6", label: "B6" },
  ];
  const Buttons = [
    { id: "all", label: "All" },
    { id: "credit_card", label: "Cards" },
    { id: "home_loan", label: "Loans" },
    { id: "auto_loan", label: "Auto" },
    { id: "personal_loan", label: "BNPL" },
  ];
  const colorObject: any = {
    DCA002: "bg-[#5AD8A6]",
    DCA003: "bg-[#5B8FF9]",
    DCA005: "bg-[#F6BD16]",

    DCA007: "bg-[#0000008a]",
    DCA015: "bg-[#4482C2]",
    DCA018: "bg-[#F6BD16]",
    // new colors
    DCA009: "bg-[#F6BD16]",
    DCA010: "bg-[#5AD8A6]",
    DCA008: "bg-[#5AD8A6]",
    DCA012: "bg-[#F6BD16]",
    DCA016: "bg-[#5AD8A6]",
    DCA017: "bg-[#F6BD16]",
    DCA019: "bg-[#4679a7]",
    DCA020: "bg-[#F6BD16]",
    DCA014: "bg-[#F6BD16]",
    DCA041: "bg-[#84aedc]",
    DCA072: "bg-[#b8cde8]",
    //
  };
  const colorObjectNew: any = [
    "bg-[#4679a7]",
    "bg-[#4482C2]",
    "bg-[#84aedc]",
    "bg-[#b8cde8]",
  ];
  // #4679a7",'#4482C2','#84aedc','#b8cde8

  // };
  const handleCityClick = async (cityId: string) => {
    // await fetchData(cityId, activeBucket);

    setSelectedCity(cityId);
  };

  const handleButtonClick = async (buttonId: string) => {
    // await fetchData(selectedCity, buttonId);

    setActiveBucket(buttonId);
  };

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
  };

  const fetchData = async (city: string, bucket: string) => {
    setLoader(true);

    const res = await GetCityData({ city, bucket, activeButton });

    if (res.status === 200) {
      setAllocationData(res.data.allocations);
      setExclusion_criteria(res.data?.exclusion_criteria);
      setOverall(res.data?.overall);
      setImpact_analysis(res.data?.impact_analysis);
      setLoader(false);

      //
      // scatter Chart data
      const resolveRates = res.data.allocations.map(
        (obj: { resolve_rate: any }) => obj.resolve_rate
      );

      const minResolveRate = Math.min(...resolveRates) - 4;
      const maxResolveRate = Math.max(...resolveRates) + 4;
      setMinResolveRate(minResolveRate);
      setMaxResolveRate(maxResolveRate);

      const resultAllocationArray = res.data.allocations
        .map(
          (obj: {
            previous_month_allocated_percentage: any;
            current_month_allocated_percentage: any;
          }) => [
            obj.previous_month_allocated_percentage,
            obj.current_month_allocated_percentage,
          ]
        )
        .flat();

      const minAllocationvalue = Math.min(...resultAllocationArray) - 4;
      const maxAllocationvalue = Math.max(...resultAllocationArray) + 4;

      setMaxAllocationData(maxAllocationvalue);
      setMinAllocationData(minAllocationvalue);

      const resultAllocationArrayList = Array.from(
        {
          length: Math.ceil((maxAllocationvalue - minAllocationvalue) / 2) + 1,
        },
        (_, idx) => minAllocationvalue + idx * 2
      );

      setResultArrayList(resultAllocationArrayList);

      const resultArray = Array.from(
        { length: Math.ceil((maxResolveRate - minResolveRate) / 2) + 1 },
        (_, idx) => minResolveRate + idx * 2
      );
      setResultArray(resultArray);
      setCityData(res?.data?.allocations);

      //
    }
    // dispatch(saveDashboardData(res.data))
  };
  // useEffect(() => {
  //   fetchData(selectedCity, activeBucket);
  // }, [activeButton]);

  // const Loader = () => {
  //   return <span className="loader"></span>;
  // };

  console.log("allocationData", allocationData);

  const navigateToOptimizeStrategy = () => {
    setOptimizeBtn(true);
    navigate("/strategy/performance");
  };

  const showButtons = (num: number) => {
    setButtons(num);
  };

  return (
    <div className="p-0 lg:p-[28px] responsivePageWrapper bg-[#FAFAFB] relative">
   
      <HomeDashboard />
    
      <div className="bg-[#FAFAFB] rounded-xl p-2 lg:p-[28px] mt-5 flex flex-col">
        <div className=" w-full flex flex-col gap-5 ml-1">
          <div className="flex gap-[53px] ">
            <div className="flex items-center text-[#000000] font-[500] text-[16px] font-['DM Sans']">
              Buckets:
            </div>
            <div className=" flex justify-between  rounded-xl B1TabsContain">
              {BGroups.map((button, index) => (
                <div
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    activeBucket === button.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === BGroups.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {button.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-10 ">
            <div className="flex items-center text-[#000000] font-[500] text-[16px] font-['DM Sans']">
              Locations:
            </div>
            <div className=" flex justify-between  rounded-xl B1TabsContain">
              {cities.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCityClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCity === city.id ? " bg-[#E8DEF8] " : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === cities.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-11 ">
            <div className="flex items-center text-[#000000] font-[500] text-[16px] font-['DM Sans']">
              Products:
            </div>
            <div className=" flex justify-between rounded-xl B1TabsContain">
              {Buttons.map((buttons, index) => (
                <div
                  key={buttons.id}
                  onClick={() => handleProductClick(buttons.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
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
        </div>

        <>
          {/* <div className="mt-3 p-3 rounded-xl shadow bg-white">
            <div className=" flex flex-wrap justify-between items-center">
              <p className="text-[#848484] text-[18px] font-[400] font-['Calibir' !important] md:w-f">
                Exclusion Criteria
              </p>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="DPD"
                  autoComplete="off"
                  required
                  placeholder="Eg-22"
                />
                <label htmlFor="DPD">DPD</label>
              </div>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="minbal"
                  autoComplete="off"
                  required
                  placeholder="Eg-100,000"
                />
                <label htmlFor="minbal">Min. Bal.</label>
              </div>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="score"
                  autoComplete="off"
                  required
                  placeholder="Eg-360"
                />
                <label htmlFor="score">Score</label>
              </div>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="flag"
                  autoComplete="off"
                  required
                  placeholder="Eg-360"
                />
                <label htmlFor="flag">Flag</label>
              </div>
              <button className="bg-[#56478A] py-1 px-6 border border-primary rounded-3xl text-white bg-">
                Change/Add
              </button>
            </div>
          </div> */}
          <div className="w-full p-4 mt-6 mb-2 rounded-xl shadow bg-white">
            <div className=" flex flex-col gap-4">
              <div className="flex justify-start items-center ">
                <p className="text-[#000000] text-[16px]  font-[500] font-['DM Sans' !important] md:w-f">
                  Volumes (MTD)
                </p>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-1">
                <div className="flex  flex-col">
                  <div className="flex items-center">
                    <p className="text-[#161D29] text-[14px]  font-[500] font-['DM Sans' !important] ">
                      Total B1
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <p className=" text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important]">
                      {overall?.total_balance?.toLocaleString() ||
                        "5,334,843,865"}
                    </p>

                    <img src={shiftOrange} alt="" />
                    <p className="text-[#161D29] text-[10px]  font-[400] font-['DM Sans' !important]">
                      +2% MOM
                    </p>
                  </div>
                </div>
                <div className="vertical-bar"></div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className=" text-[#161D29] text-[14px]  font-[500] font-['DM Sans' !important]">
                      Inhouse/ Exclusion
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <p className="amount text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important]">
                      {overall?.in_house_exclusion?.toLocaleString() ||
                        "5,334,843,865"}
                    </p>
                    <img src={shiftOrange} alt="" />
                    <p className="text-[#161D29] text-[10px]  font-[400] font-['DM Sans' !important]">
                      +2% MOM
                    </p>
                  </div>
                </div>
                <div className="vertical-bar"></div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="text-[#161D29] text-[14px]  font-[500] font-['DM Sans' !important]">
                      {" "}
                      Allocated Balance
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <p className=" text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important]">
                      {overall?.total_balance_allocated?.toLocaleString() ||
                        "5,334,843,865"}
                    </p>
                    <img className="" src={RedDownArrow} alt="" />
                    <p className="text-[#161D29] text-[10px]  font-[400] font-['DM Sans' !important]">
                      +2% MOM
                    </p>
                  </div>
                </div>
                <div className="vertical-bar"></div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="text-[#161D29] text-[14px]  font-[500] font-['DM Sans' !important]">
                      Account Allocation{" "}
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <p className="text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important]">
                      {overall?.total_accounts_allocated?.toLocaleString() ||
                        "5,334,843,865"}
                    </p>
                    <img className="" src={RedDownArrow} alt="" />
                    <p className="text-[#161D29] text-[10px]  font-[400] font-['DM Sans' !important]">
                      +2% MOM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] bg-[white] rounded-xl shadow  mt-4 ">
            {/* <AllocationButtons
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            /> */}
            <SegVolumeBadTable
            
              setSelectedSegment={setSelectedSegment}
        
            />
            {/* <AllocationStackedBarChart selectedSegment={selectedSegment} /> */}
          </div>
        </>

        <div className="self-end mt-12 flex justify-center gap-2 flex-wrap fixed bottom-0 mb-1">
          <button
            onClick={navigateToOptimizeStrategy}
            className="bg-primary py-2.5 px-9 border border-[#6750A4] rounded-3xl text-white"
            style={{ background: "#6750A4" }}
          >
         Review Performance
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewExecution;
