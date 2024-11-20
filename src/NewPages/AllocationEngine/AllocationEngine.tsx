import React, { useEffect, useState } from "react";
import yellow from "../../assets/images/uparrowYellow.svg";
import Red from "../../assets/images/uparrowRed.svg";
import upgreenArrow from "../../assets/images/upgreenarrow.svg";
import "./Custom.scss";
import RedDownArrow from "../../assets/icons/red-down-shift.png";
import shiftOrange from "../../assets/icons/shift-orange.svg";
import AllocationRadialBarChart from "./allocationSharePiechart";
import AllocationShareScatterChart from "./allocationShareScatterChart";
import { GetCityData } from "../../api/api";
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
import AllocationButtons from "./AllocationButtons";

import { useNavigate } from "react-router-dom";

declare module "recharts" {
  interface RadialBarProps {
    minAngle?: number;
    label?: any;
    background?: any;
    clockWise?: any;
    dataKey?: any;
  }
}

// const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500"];
// const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

const AllocationEngine = () => {
  const [b1, setB1] = useState(true);
  const [b2, setB2] = useState(false);
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedProduct, setSelectedproduct] = useState("all");
  const [activeBucket, setActiveBucket] = useState("b1");
  //
  const [customiseEdit, setCustomiseEditEnable] = useState(false);
  const [allocationData, setAllocationData] = useState<Allocation[]>();
  const [exclusion_criteria, setExclusion_criteria] =
    useState<ExclusionCriteria>();
  const [loader, setLoader] = useState(false);
  const [overall, setOverall] = useState<Overall>();
  const [impact_analysis, setImpact_analysis] = useState<ImpactAnalysis>();

  // scatter chart
  const [minResolveRate, setMinResolveRate] = useState<number>(70); // Default to 70 if you like
  const [maxResolveRate, setMaxResolveRate] = useState<number>(100); // Default to 100 if you like
  const [resultArray, setResultArray] = useState<number[]>([]);
  const [cityData, setCityData] = useState<any>([]);

  const [maxAllocationData, setMaxAllocationData] = useState<number>();
  const [minAllocationData, setMinAllocationData] = useState<number>();
  const [resultArrayList, setResultArrayList] = useState<number[]>([]);

  const [activeButton, setActiveButton] = useState<string>("all");
  //
  const [changeAllocationData, setChangeAllocationData] = useState({
    allocationOne: "34%",
    allocationTwo: "33%",
    allocationThree: "34%",
  });

  const navigate = useNavigate();
  const CombinedData = [{}];
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

  const handleButtonClick = async (buttonId: string) => {
    setActiveBucket(buttonId);
    // await fetchData(selectedCity, buttonId);
  };

  const fetchData = async (city: string, bucket: string) => {
    setLoader(true);
    // const res = {
    //   status: 200,
    //   data: {
    //     city: "Kolkata",
    //     code: "KOL",
    //     product: "Home loan",
    //     bucket: "B4",
    //     exclusion_criteria: {
    //       dpd: 5,
    //       min_balance: 1000,
    //       min_score: null,
    //       flag: null,
    //     },
    //     overall: {
    //       total_accounts: 42779,
    //       total_accounts_allocated: 42779,
    //       in_house_exclusion: 0,
    //       total_balance: 2156069305,
    //       total_balance_allocated: 2156069305,
    //     },
    //     impact_analysis: {
    //       resolve_rate: {
    //         base: 54.0,
    //         increment: 0,
    //       },
    //       cost_rate_on_resolved_amount: {
    //         value: 15,
    //         increment: 0,
    //       },
    //     },
    //     allocations: [
    //       {
    //         agency_name: "DCA015",
    //         previous_month_allocated_percentage: 21,
    //         current_month_allocated_percentage: 24,
    //         resolve_rate: 51,
    //         commission_rate: 16,
    //         accounts: 10247,
    //         balance: 514330380,
    //       },
    //       {
    //         agency_name: "DCA019",
    //         previous_month_allocated_percentage: 27,
    //         current_month_allocated_percentage: 28,
    //         resolve_rate: 59,
    //         commission_rate: 14,
    //         accounts: 11640,
    //         balance: 585648041,
    //       },
    //       {
    //         agency_name: "DCA041",
    //         previous_month_allocated_percentage: 29,
    //         current_month_allocated_percentage: 24,
    //         resolve_rate: 52,
    //         commission_rate: 12,
    //         accounts: 10429,
    //         balance: 528874679,
    //       },
    //       {
    //         agency_name: "DCA072",
    //         previous_month_allocated_percentage: 21,
    //         current_month_allocated_percentage: 24,
    //         resolve_rate: 52,
    //         commission_rate: 20,
    //         accounts: 10463,
    //         balance: 527216205,
    //       },
    //     ],
    //   },
    // };
    const res = await GetCityData({ city, bucket, activeButton });

    if (res.status === 200) {
      setAllocationData(res.data.allocations);
      setExclusion_criteria(res.data?.exclusion_criteria);
      setOverall(res.data?.overall);
      setImpact_analysis(res.data?.impact_analysis);
      setLoader(false);

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

  const Loader = () => {
    return <span className="loader"></span>;
  };

  console.log("allocationData", allocationData);

  const navigateToReviewConstraints = () => {
    navigate("/reviewConstraints");
  };

  const navigateToChangeControl = () => {
    navigate("/execution");
  };

  const handleCityClick = async (cityId: string) => {
    setSelectedCity(cityId);
    // await fetchData(cityId, activeBucket);
  };

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="p-0 lg:p-[28px] responsivePageWrapper  relative">
      <DashboardHeader />
      {loader ? <Loader /> : ""}
      <div className="bg-gray-100 rounded-xl p-2 lg:p-[28px] mt-5 flex flex-col">
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
          {/* <div className="mt-5 p-3 rounded-xl shadow bg-white ">
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
          <div className="my-3 p-3 rounded-xl shadow bg-white">
            <p className="text-[black] text-[16px]  font-[700] font-['Calibri' !important] md:w-f mb-4">
              Volumes (MTD)
            </p>
            <div className=" flex flex-wrap justify-between items-center">
              <div className="commonBox">
                <p className="username text-[#7F7F7F] text-[15px]  font-medium font-['Calibri' !important]">
                  Total B1
                </p>
                <div className="flex items-center">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['Calibri' !important]">
                    {overall?.total_balance?.toLocaleString() ||
                      "5,334,843,865"}
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
                    {overall?.in_house_exclusion?.toLocaleString() ||
                      "5,334,843,865"}
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
                    {overall?.total_balance_allocated?.toLocaleString() ||
                      "5,334,843,865"}
                  </p>
                  <img src={shiftOrange} alt="up-arrow" />
                  {/* <img className="" src={RedDownArrow} alt="" /> */}
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              <div className="commonBox">
                <p className="username text-[#7F7F7F] text-[15px] font-medium font-['calibri' !important]">
                  Account Allocation{" "}
                </p>
                <div className="flex items-center">
                  <p className="amount text-gray-600 text-[17px]  font-medium font-['calibri' !important]">
                    {overall?.total_accounts_allocated?.toLocaleString() ||
                      "5,334,843,865"}
                  </p>
                  <img src={shiftOrange} alt="up-arrow" />
                  <p className="smText">+2% MOM</p>
                </div>
              </div>
              {/* <button className="bg-[#56478A] py-1 px-6 border border-primary rounded-3xl text-white">
                Test Pipeline
              </button> */}
            </div>
          </div>

          <div className="flex w-full lg:grid-cols-12 gap-6 mb-3">
            {/* <div className="col-span-1 lg:col-span-2">
              <AllocationButtons
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            </div> */}

            <div className="flex lg:col-span-5 w-[49%]  bg-white rounded-xl p-3 shadow">
              <p className=" text-[18px] font-[500] text-[#000000] font-['DM Sans'] ">
                Allocation Share
              </p>
              {/* <ResponsiveContainer width="100%" height="90%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="100%" barSize={20} data={data}>
                    <RadialBar
                      minAngle={15} // error came here
                      label={{ position: "insideStart", fill: "red" }}
                      background
                      clockWise
                      dataKey="uv"
                    />
                    <Legend
                      iconSize={20}
                      layout="vertical"
                      verticalAlign="middle"
                      wrapperStyle={style}
                    />
                  </RadialBarChart>
                </ResponsiveContainer> */}
              <div className="flex items-center chartDonatGraph justify-center">
                <AllocationRadialBarChart
                  allocationData={allocationData}
                  // selectedCity={selectedCity}
                  // activeBucket={activeBucket}
                />
                {/* <div className="flex flex-col ">
                  {allocationData?.map((item) => (
                    <div className="flex items-center">
                      <div
                        className={`${colorObjectNew[id]} `}
                        style={{
                          width: "13px",
                          height: "13px",
                          marginRight: "10px",
                          borderRadius: "0px",
                        }}
                      />
                      <span>{item.agency_name}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
            <div className="flex lg:col-span-5 w-[49%] bg-white rounded-xl p-3 shadow chartLineGraph">
              <p className=" text-[18px] font-[500] text-[#000000] font-['DM Sans'] ">
                Optimization
              </p>
              <AllocationShareScatterChart
                selectedCity={selectedCity}
                activeBucket={activeBucket}
                // new
                minResolveRate={minResolveRate}
                maxResolveRate={maxResolveRate}
                resultArray={resultArray}
                fetchData={fetchData}
                cityData={cityData}
                maxAllocationData={maxAllocationData}
                minAllocationData={minAllocationData}
                resultArrayList={resultArrayList}
              />
            </div>
          </div>

          {/* new change */}

          <div className="w-full flex flex-col gap-4 bg-[white] py-5 px-3">
            {/* New Allocation */}
            <span className="text-black font-bold">Review</span>
            <div className="w-full flex gap-4">
              <div className="col-span-1 w-[48%] lg:col-span-1 bg-white rounded-xl p-3 shadow">
                <div className="w-full flex gap-x-5">
                  <p className="text-[#2A972F] text-[16px] font-[500] font-['Calibri' !important] bg-[#EBFFF1] px-2 py-1">
                    Recommended
                  </p>
                  <p className="text-[#000000] text-[16px] font-[500] font-['Calibri' !important] ">
                    New Allocation
                  </p>
                </div>
                <div className="w-full  rounded my-6 AllocationTabelMain">
                  <table className="w-full   ">
                    <thead>
                      <tr className="border-b text-[15px]">
                        <th className="px-4 py-2"></th>
                        {["DCA001", "DCA026", "DCA088"].map((item) => {
                          // {allocationData?.map((item) => {
                          return (
                            <th className="px-4 py-2  text-[15px] text-[#6750A4]">
                              {item}
                              {/* {item?.agency_name} */}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" text-center border-b  py-5">
                        <td className="text-left border-none px-4 py-4 text-[#161D29] text-[16px] font-bold font-['calibri' !important]">
                          Allocation
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          34%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          33%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          33%
                        </td>
                        {/* <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                        20%
                      </td> */}
                        {allocationData?.map((item) => {
                          return (
                            <td className="border-none px-4 py-2 text-[#848484] text-[16px] font-medium font-['Calibri' !important]">
                              {item.current_month_allocated_percentage}%
                            </td>
                          );
                        })}
                      </tr>
                      <tr className="text-center ">
                        <td className="text-left border-none px-4 py-4 text-[#161D29] text-[15px] font-bold font-['Calibri' !important]">
                          Volume
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          30,023
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          29,440
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          28,766
                        </td>
                        {/* <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                        180
                      </td> */}

                        {/* {allocationData?.map((item) => {
                        return (
                          <td className="border-none px-4 py-2 text-[#848484] text-[16px] font-medium font-['Calibri' !important] ml-9">
                            {item?.accounts.toLocaleString() || "0"}
                          </td>
                        );
                      })} */}
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="w-full py-5 flex justify-end pr-5 gap-x-5 items-center">
                  <div
                    className="text-[#6750A4] font-medium font-['Calibri' !important] cursor-pointer"
                    onClick={() => setCustomiseEditEnable(true)}
                  >
                    Customise
                  </div>
                  <div
                    className="bg-[#6750A4] py-3 px-6 rounded-3xl text-[white] font-medium font-['Calibri' !important] cursor-pointer"
                    onClick={() => setCustomiseEditEnable(false)}
                  >
                    Submit for Approval
                  </div>
                </div>
              </div>

              {/* change allocation */}
              <div
                className={`col-span-1 w-[48%] lg:col-span-1 bg-[white] rounded-xl p-3 shadow opacity-70 ${
                  customiseEdit ? `opacity-100` : `opacity-70`
                }`}
              >
                <div className="w-full flex gap-x-5">
                  {/* <p className="text-[#2A972F] text-[16px] font-[500] font-['Calibri' !important] bg-[#EBFFF1] px-2 py-1">
                  Recommended
                </p> */}
                  <p className="text-[grey] text-[16px] font-[500] font-['Calibri' !important] ">
                    Change Allocation
                  </p>
                </div>
                <div className="w-full  rounded my-6 AllocationTabelMain">
                  <table className="w-full   ">
                    <thead>
                      <tr className="border-b text-[15px]">
                        <th className="px-4 py-2"></th>
                        {["DCA001", "DCA026", "DCA088"].map((item) => {
                          // {allocationData?.map((item) => {
                          return (
                            <th className="px-4 py-2  text-[15px] text-[#6750A4]">
                              {item}
                              {/* {item?.agency_name} */}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" text-center border-b ">
                        <td className="text-left border-none px-4 py-4 text-[grey] text-[16px] font-bold font-['calibri' !important]">
                          Allocation
                        </td>
                        <td className=" mb-2 px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']  ">
                          <div className="bg-[#f4f4f4] border-[#1C1B1F] border-b-[1px] py-4">
                            <input
                              type="text"
                              disabled={customiseEdit ? false : true}
                              value={changeAllocationData?.allocationOne}
                              className="border-none focus:outline-none focus:ring-0 bg-[#f4f4f4] w-[100%] text-center"
                              onChange={(e) =>
                                setChangeAllocationData((prev) => ({
                                  ...prev,
                                  allocationOne: e.target.value,
                                }))
                              }
                            />
                            {/* 34% */}
                          </div>
                        </td>
                        <td className="border-none px-4 py-2  text-gray-800 text-sm font-medium font-['DM Sans']">
                          <div className="border-[#1C1B1F] border-b-[1px] bg-[#f4f4f4] py-4">
                            <input
                              type="text"
                              disabled={customiseEdit ? false : true}
                              value={changeAllocationData?.allocationTwo}
                              className="border-none focus:outline-none focus:ring-0 bg-[#f4f4f4] w-[100%] text-center"
                              onChange={(e) =>
                                setChangeAllocationData((prev) => ({
                                  ...prev,
                                  allocationTwo: e.target.value,
                                }))
                              }
                            />
                            {/* 33% */}
                          </div>
                        </td>
                        <td className="border-none px-4 py-2  text-gray-800 text-sm font-medium font-['DM Sans']">
                          <div className="border-[#1C1B1F] border-b-[1px] bg-[#f4f4f4] py-4">
                            <input
                              type="text"
                              disabled={customiseEdit ? false : true}
                              value={changeAllocationData?.allocationThree}
                              className="border-none focus:outline-none focus:ring-0 bg-[#f4f4f4] w-[100%] text-center"
                              onChange={(e) =>
                                setChangeAllocationData((prev) => ({
                                  ...prev,
                                  allocationThree: e.target.value,
                                }))
                              }
                            />
                            {/* 33% */}
                          </div>
                        </td>
                        {/* <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                        20%
                      </td> */}
                        {allocationData?.map((item) => {
                          return (
                            <td className="border-none px-4 py-2 text-[#848484] text-[16px] font-medium font-['Calibri' !important]">
                              {item.current_month_allocated_percentage}%
                            </td>
                          );
                        })}
                      </tr>
                      <tr className="text-center ">
                        <td className="text-left border-none px-4 py-4 text-[grey] text-[15px] font-bold font-['Calibri' !important]">
                          Volume
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          30,023
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          29,440
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          28,766
                        </td>
                        {/* <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                        180
                      </td> */}

                        {/* {allocationData?.map((item) => {
                        return (
                          <td className="border-none px-4 py-2 text-[#848484] text-[16px] font-medium font-['Calibri' !important] ml-9">
                            {item?.accounts.toLocaleString() || "0"}
                          </td>
                        );
                      })} */}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* <div className="w-full py-5 flex justify-end pr-5 gap-x-5 items-center">
                <div className="text-[#6750A4] font-medium font-['Calibri' !important]">
                  Customise
                </div>
                <div className="bg-[#6750A4] py-3 px-6 rounded-3xl text-[white] font-medium font-['Calibri' !important]">
                  Submit for Approval
                </div>
              </div> */}
              </div>
            </div>
            {/*  */}

            {/* new figma change */}

            {/* <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
              <p className="text-[#3d5586] text-[16px] font-normal font-['Calibri' !important] ">
                Impact Analysis
              </p>
              <div className="w-full  rounded my-6 AllocationTabelMain flex flex-col">
                <table className="w-full table-auto ">
                  <tbody>
                    <tr className="">
                      <td className="border-none px-4 py-0 text-[#2f2f2f] text-[18px] font-normal font-['Calibri' !important]">
                        Resolve Rate
                      </td>
                      <td className="border-none px-0 py-2 text-[#2f2f2f] text-[17px] font-normal font-['Calibri' !important] border">
                        {impact_analysis?.resolve_rate?.base}%
                      </td>
                      <td className="border-none px-0 py-2 ml-6 text-gray-800 text-sm font-medium font-['DM Sans'] border flex items-center">
                        <img
                          className="mr-3 h-4 mt-0.5"
                          src={RedDownArrow}
                          alt=""
                        />
                        <p> {impact_analysis?.resolve_rate?.increment}% </p>
                        <p className="ml-4 text-[#848484] text-[17px] font-['Calibri' !important]">
                          vs. Recommended
                        </p>
                      </td>
                      <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] border">
                        vs. Recommended
                      </td>
                    </tr>
                    <tr>
                      <td className="border-none px-4 py-0 text-[#2f2f2f] text-[18px] font-normal font-['Calibri' !important]">
                        cost
                      </td>
                      <td className="border-none px-0 py-2 text-[#2f2f2f] text-[17px] font-normal font-['Calibri' !important]">
                        {impact_analysis?.cost_rate_on_resolved_amount?.value}
                      </td>
                      <td className="border-none px-0 py-2 ml-[22px] text-gray-800 text-sm font-medium font-['Calibri' !important'] flex items-center">
                        <img
                          className="mr-2 h-[18px] mt-0.5"
                          src={shiftOrange}
                          alt=""
                        />
                        <p className="ml-0">
                          {
                            impact_analysis?.cost_rate_on_resolved_amount
                              ?.increment
                          }
                          %
                        </p>
                        <p className="ml-5 text-[#848484] text-[17px] font-['Calibri' !important]">
                          vs. Recommended
                        </p>
                      </td>
                      <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                        vs. Recommended
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className=""></td>
                      <td className=""></td>
                      <td className="border-none px-4 py-2 text-blue-500 underline text-sm font-medium font-['DM Sans']">
                        Approval Required
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="border-none px-4 py-2 text-[#5b83cb] underline text-[16px] font-medium font-['Calibri' !important] self-end mr-[16%]">
                  Approval Required
                </p>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
              <p className="text-[#4e7496] text-[16px] font-[400] font-['Calibri' !important]">
                Change Allocations
              </p>
              <div className="w-full  rounded my-6 AllocationTabelMain">
                <table className="w-full table-auto">
                  <tbody>
                    <tr className="">
                      <td className="border-none px-4 py-2 text-[#5b83cb] text-[16px] font-normal font-['Calibri' !important]">
                        Allocation
                      </td>
                      {allocationData?.map((item) => {
                        return (
                          <td className="px-4 py-2 text-[#ca2828] text-[16px] font-medium font-['Calibri' !important] border text-center">
                            {item.current_month_allocated_percentage}%
                          </td>
                        );
                      })}
                      <td className="px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] border text-center">
                        5%
                      </td>
                      <td className="px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] border text-center">
                        35%
                      </td>
                      <td className="px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] border text-center">
                        20%
                      </td>
                    </tr>
                    <tr>
                      <td className="border-none px-4 py-2 text-[#5b83cb] text-[16px] font-normal font-['Calibri' !important]">
                        Volume
                      </td>
                      {allocationData?.map((item) => {
                        return (
                          <td className="px-4 py-2  text-[#ca2828] text-[16px] font-medium font-['Calibri' !important]  text-center">
                            {item?.accounts.toLocaleString() || "0"}
                          </td>
                        );
                      })}
                      <td className="border-none px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] text-center">
                        45
                      </td>
                      <td className="border-none px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] text-center">
                        315
                      </td>
                      <td className="border-none px-4 py-2 text-red-600 text-sm font-medium font-['DM Sans'] text-center">
                        180
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
              <p className="text-[#3d5586] text-[16px] font-[400] font-['Calibri' !important] ">
                Exception Request
              </p>
              <p className="text-[#848484] text-[15px] font-[500] font-['Calibri' !important] mt-5">
                To maintain min. allocation for DCA2 to rebuild performance. DCA
                impacted by one off spike in attrition. Performance monitoring
                initiated
              </p>
              <div className="mt-3">
                <button className="self-end  bg-[rebeccapurple] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl">
                  Default
                </button>
                <button className="self-end bg-[rebeccapurple] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl ml-2">
                  ABC
                </button>
              </div>
            </div> */}
            <div className="w-full bg-white rounded-xl p-3 flex flex-col  mt-5">
              <div>
                <h5 className="text-black font-semibold">Impact Analysis</h5>
                <p className="text-[grey] mt-1">
                  This is how impactful your decision would be
                </p>
              </div>
              <div className="w-full flex justify-between mt-5 border-b pb-5 p-4">
                <div className="text-black font-bold w-[10%]">Resolve Rate</div>
                <div className="text-black font-semibold">84%</div>
                <div className="text-black font-semibold flex">
                  <img src={shiftOrange} alt="up-arrow" />
                  2% more than recommended
                </div>
              </div>
              <div className="w-full flex justify-between mt-5 border-b pb-4 p-4">
                <div className="text-black font-bold w-[10%]">Cost</div>
                <div className="text-black font-semibold">14</div>
                <div className="text-black font-semibold flex ">
                  <img src={upgreenArrow} alt="up-arrow" />
                  +2% more than recommended
                </div>
              </div>
            </div>
          </div>
        </>

        {/* {activeBucket === "b2" ? (
          <>
            <div className="mt-3 p-3 rounded-xl shadow bg-white">
              <div className=" flex flex-wrap justify-between items-center">
                <p className="text-gray-800 text-sm font-medium font-['DM Sans']">
                  Exclusion Criteria
                </p>
                <div className="commonInput form-item">
                  <input type="text" id="DPD" autoComplete="off" required />
                  <label htmlFor="DPD">DPD</label>
                </div>
                <div className="commonInput form-item">
                  <input type="text" id="minbal" autoComplete="off" required />
                  <label htmlFor="minbal">Min. Bal.</label>
                </div>
                <div className="commonInput form-item">
                  <input type="text" id="score" autoComplete="off" required />
                  <label htmlFor="score">Score</label>
                </div>
                <div className="commonInput form-item">
                  <input type="text" id="flag" autoComplete="off" required />
                  <label htmlFor="flag">Flag</label>
                </div>
                <button className="text-gray-400 bg-blue-500 text-white rounded-xl  text-sm font-normal font-['DM Sans'] border-2 px-5 h-10">
                  Change/Add
                </button>
              </div>
            </div>
            <div className="my-3 p-3 rounded-xl shadow bg-white">
              <div className=" flex flex-wrap justify-between items-center">
                <p className="text-gray-800 text-sm font-medium font-['DM Sans']">
                  Volumes (MTD)
                </p>
                <div className="commonBox">
                  <p className="username">Total B1</p>
                  <div className="flex items-center">
                    <p className="amount">18,923</p>
                    <img src={shiftOrange} alt="" />
                    <p className="smText">+8% MOM</p>
                  </div>
                </div>
                <div className="commonBox">
                  <p className="username">Inhouse/ Exclusion</p>
                  <div className="flex items-center">
                    <p className="amount">22,466</p>
                    <img src={shiftOrange} alt="" />
                    <p className="smText">+12% MOM</p>
                  </div>
                </div>
                <div className="commonBox">
                  <p className="username">Allocated (MTD)</p>
                  <div className="flex items-center">
                    <p className="amount">759</p>
                    <img className="" src={RedDownArrow} alt="" />
                    <p className="smText">+34% MOM</p>
                  </div>
                </div>
                <div className="commonBox">
                  <p className="username">New Allocation (Today)</p>
                  <div className="flex items-center">
                    <p className="amount">10,200</p>
                    <img className="" src={RedDownArrow} alt="" />
                    <p className="smText">+2% MOM</p>
                  </div>
                </div>
                <button className="text-gray-400 bg-blue-500 text-white rounded-xl  text-sm font-normal font-['DM Sans'] border-2 px-5 h-10">
                  Test Pipeline
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
                <p className="text-blue-800 text-sm font-medium font-['DM Sans'] ">
                  New Allocations: Recommended
                </p>
                <div className="w-full  rounded my-6 AllocationTabelMain">
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2 border text-[12px]">DCA 1</th>
                        <th className="px-4 py-2 border text-[12px]">DCA 2</th>
                        <th className="px-4 py-2 border text-[12px]">DCA 3</th>
                        <th className="px-4 py-2 border text-[12px]">DCA 4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          Allocation
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          70%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          23%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          25%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          87%
                        </td>
                      </tr>
                      <tr>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          Volume
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          520
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          65
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          815
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          980
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
                <p className="text-blue-800 text-sm font-medium font-['DM Sans'] ">
                  Impact Analysiss
                </p>
                <div className="w-full  rounded my-6 AllocationTabelMain">
                  <table className="w-full table-auto">
                    <tbody>
                      <tr>
                        <td className="border-none px-4 py-2 text-black-400 text-sm font-medium font-['DM Sans']">
                          Resolve Rate
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] border">
                          55%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] border flex items-center">
                          <img src={shiftOrange} alt="mr-1" />
                          -5%{" "}
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] border">
                          vs. Recommended
                        </td>
                      </tr>
                      <tr>
                        <td className="border-none px-4 py-2 text-black-400 text-sm font-medium font-['DM Sans']">
                          cost
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          $ XX
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans'] flex items-center">
                          <img className="mr-1" src={RedDownArrow} alt="" /> +2%
                        </td>
                        <td className="border-none px-4 py-2 text-gray-800 text-sm font-medium font-['DM Sans']">
                          vs. Recommended
                        </td>
                      </tr>
                      <tr>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className="border-none px-4 py-2 text-blue-500 underline text-sm font-medium font-['DM Sans']">
                          Approval Required
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
                <p className="text-blue-800 text-sm font-medium font-['DM Sans'] ">
                  Change Allocations
                </p>
                <div className="w-full  rounded my-6 AllocationTabelMain">
                  <table className="w-full table-auto">
                    <tbody>
                      <tr>
                        <td className="border-none px-4 py-2 text-blue-400 text-sm font-medium font-['DM Sans']">
                          Allocation
                        </td>
                        <td className="px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans'] border">
                          67%
                        </td>
                        <td className="px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans'] border">
                          45%
                        </td>
                        <td className="px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans'] border">
                          15%
                        </td>
                        <td className="px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans'] border">
                          80%
                        </td>
                      </tr>
                      <tr>
                        <td className="border-none px-4 py-2 text-blue-400 text-sm font-medium font-['DM Sans']">
                          Volume
                        </td>
                        <td className="border-none px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans']">
                          450
                        </td>
                        <td className="border-none px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans']">
                          85
                        </td>
                        <td className="border-none px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans']">
                          135
                        </td>
                        <td className="border-none px-4 py-2 text-red-500 text-sm font-medium font-['DM Sans']">
                          80
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
                <p className="text-blue-800 text-sm font-medium font-['DM Sans'] ">
                  Exception Request
                </p>
                <p className="text-gray-800 text-sm font-medium font-['DM Sans'] mt-5">
                  To maintain min. allocation for DCA2 to rebuild performance.
                  DCA impacted by one off spike in attrition. Performance
                  monitoring initiated
                </p>
              </div>
            </div>
          </>
        ) : null} */}

        {/* new figma change */}

        {/* <div className="self-end mt-3">
          <button
            onClick={navigateToReviewConstraints}
            className="self-end bg-[#56478A] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl mr-2"
          >
            Review Constraints
          </button>
          <button
            onClick={navigateToChangeControl}
            className="self-end bg-[#56478A] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl"
          >
            Submit Changes
          </button>
          <button className="self-end bg-[#56478A] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl ml-2">
            Execute
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AllocationEngine;
