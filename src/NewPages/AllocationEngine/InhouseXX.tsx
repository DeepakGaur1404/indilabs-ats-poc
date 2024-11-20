import React, { useEffect, useState } from "react";
import yellow from "../../assets/images/uparrowYellow.svg";
import Red from "../../assets/images/uparrowRed.svg";
import "./Custom.scss";
import RedDownArrow from "../../assets/icons/red-down-shift.png";
import shiftOrange from "../../assets/icons/shift-orange.svg";
import AllocationRadialBarChart from "./allocationSharePiechart";
import AllocationShareScatterChart from "./allocationShareScatterChart";
import { GetCityData } from "../../api/api";
import AllocationButtons from "./AllocationButtons";
import SegVolumeBadTable from "./segVolumeBadTable";
import AllocationStackedBarChart from "./allocationStackedBarChart";
import { useNavigate } from "react-router-dom";

import {
  Allocation,
  ExclusionCriteria,
  IAllocationData,
  ImpactAnalysis,
  Overall,
} from "../../redux/model/dashboard.model";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import "./Allocation.scss";
import { ResponsiveContainer } from "recharts";

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

const InhouseXX = () => {
  const [buttons, setButtons] = useState(0);
  const [reviewBtn, setReviewBtn] = useState(false);
  const [optimizeBtn, setOptimizeBtn] = useState(false);
  const [b2, setB2] = useState(false);
  const [selectedCity, setSelectedCity] = useState("pune");
  const [activeBucket, setActiveBucket] = useState("b1");
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
  const [selectedSegment, setSelectedSegment] = useState<string>("VHR");

  const [activeButton, setActiveButton] = useState<string>("all");
  const cities = [
    { id: "pune", name: "PUN" },
    { id: "delhi", name: "DEL" },
    { id: "mumbai", name: "MUM" },

    { id: "hyderabad", name: "HYD" },
    { id: "chennai", name: "CHN" },
    { id: "bangalore", name: "BLR" },
    { id: "kolkata", name: "KOL" },
  ];
  const BGroups = [
    { id: "b1", label: "B1" },
    { id: "b2", label: "B2" },
    { id: "b3", label: "B3" },
    { id: "b4", label: "B4" },
    { id: "b5", label: "B5" },
    { id: "b6", label: "B6" },
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
    await fetchData(cityId, activeBucket);

    setSelectedCity(cityId);
  };

  const handleButtonClick = async (buttonId: string) => {
    await fetchData(selectedCity, buttonId);

    setActiveBucket(buttonId);
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
  useEffect(() => {
    fetchData(selectedCity, activeBucket);
  }, [activeButton]);

  // const Loader = () => {
  //   return <span className="loader"></span>;
  // };

  console.log("allocationData", allocationData);

  const navigateToReviewPerformance = () => {
    setReviewBtn(true);
    navigate("/strategy/allocationEngine/reviewPerformance");
  };

  const navigateToOptimizeStrategy = () => {
    setOptimizeBtn(true);
    navigate("/strategy/allocationEngine/optimizeStrategy");
  };

  const showButtons = (num: number) => {
    setButtons(num);
  };

  return (
    <div className="p-0 lg:p-[28px] responsivePageWrapper  relative">
      <DashboardHeader />
      {/* {loader ? <Loader /> : ""} */}
      <div className="bg-gray-100 rounded-xl p-2 lg:p-[28px] mt-5 flex flex-col">
        <div className=" w-full justify-between flex upperSectionAllocation">
          <div className="flex ">
            <div className=" flex justify-between  rounded-xl B1TabsContain">
              {BGroups.map((button, index) => (
                <div
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`text-center text-[18px] font-medium font-['Calibri' !important] h-10 w-[78px] border border-gray-400 flex align-center justify-center items-center cursor-pointer ${
                    activeBucket === button.id
                      ? " bg-violet-200 "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-md" : ""} ${
                    index === BGroups.length - 1 ? "rounded-r-md" : ""
                  }`}
                >
                  {button.label}
                </div>
              ))}
            </div>
            <div className="text-center border-2 border-blue-500 bg-white ml-3 text-gray-800 text-base font-medium font-['DM Sans'] h-10 w-[78px] flex align-center justify-center items-center">
              WO
            </div>
          </div>

          <div className="vertical-line"></div>
          <div className="w-1/2 flex justify-between cityes ">
            {cities.map((city) => (
              <div
                key={city.id}
                onClick={() => handleCityClick(city.id)}
                className={`text-center text-[#7F7F7F] text-[18px]  font-medium font-['calibri' !important] h-10 w-20 flex align-center justify-center items-center cursor-pointer ${
                  selectedCity === city.id
                    ? "font-extrabold text-purple-900"
                    : ""
                }`}
              >
                {city.name}
              </div>
            ))}
            <div className="  relative text-slate-800 ">
              <select className="text-center rounded-lg h-10 w-[100px] flex items-center justify-between appearance-none select-none bg-inherit">
                <option className="h-8 w-full" value="Daily">
                  Other
                </option>
                <option className="h-8 w-full" value="Weekly">
                  Goa
                </option>
                <option className="h-8 w-full" value="Monthly">
                  Nagpur
                </option>
              </select>
              <div className="Arrow w-6 h-6 left-[72px] top-[8px] absolute"></div>
            </div>
          </div>
        </div>

        <>
          <div className="mt-3 p-3 rounded-xl shadow bg-white">
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
          </div>
          <div className="my-3 p-3 rounded-xl shadow bg-white">
            <div className=" flex flex-wrap justify-between items-center">
              <p className="text-[#848484] text-[18px]  font-[400] font-['Calibri' !important] md:w-f">
                Volumes (MTD)
              </p>
              <div className="commonBox">
                <p className="username text-[#7F7F7F] text-[15px]  font-medium font-['Calibri' !important]">
                  Total B1
                </p>
                <div className="flex items-center">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['Calibri' !important]">
                    {overall?.total_balance?.toLocaleString() || "0"}
                  </p>

                  <img src={shiftOrange} alt="" />
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              <div className="commonBox">
                <p className="username text-gray-600 text-[15px] font-medium font-['calibri' !important]">
                  Inhouse/ Exclusion
                </p>
                <div className="flex items-center justify-between">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['calibri' !important]">
                    {overall?.in_house_exclusion?.toLocaleString() || "0"}
                  </p>
                  <img src={shiftOrange} alt="" />
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              <div className="commonBox">
                <p className="username text-[#7F7F7F] text-[15px] font-medium font-['calibri' !important]">
                  {" "}
                  Allocated Balance
                </p>
                <div className="flex items-center">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['calibri' !important]">
                    {overall?.total_balance_allocated?.toLocaleString() || "0"}
                  </p>
                  <img className="" src={RedDownArrow} alt="" />
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              <div className="commonBox">
                <p className="username text-[#7F7F7F] text-[15px] font-medium font-['calibri' !important]">
                  Account Allocation{" "}
                </p>
                <div className="flex items-center">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['calibri' !important]">
                    {overall?.total_accounts_allocated?.toLocaleString() || "0"}
                  </p>
                  <img className="" src={RedDownArrow} alt="" />
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              <button className="bg-[#56478A] py-1 px-6 border border-primary rounded-3xl text-white">
                Test Pipeline
              </button>
            </div>
          </div>

          <div className="w-[100%] flex gap-5 flex-wrap xl:flex-nowrap">
            <AllocationButtons
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
            <SegVolumeBadTable
              showButtons={showButtons}
              setSelectedSegment={setSelectedSegment}
            />
            <AllocationStackedBarChart selectedSegment={selectedSegment} />
          </div>
        </>

        {buttons === 3 && (
          <div className="self-end mt-3 flex justify-center gap-2 flex-wrap">
            <button
              onClick={navigateToReviewPerformance}
              className="bg-primary py-2.5 px-9 border border-primary rounded-3xl text-white" style={{ background: "#6750A4" }}>
              
            
              Review Performance
            </button>
            <button
              onClick={navigateToOptimizeStrategy}
              className="bg-primary py-2.5 px-9 border border-primary rounded-3xl text-white" style={{ background: "#6750A4" }}>
            
              Optimize Strategy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InhouseXX;
