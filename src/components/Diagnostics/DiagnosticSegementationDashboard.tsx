import React, { useState, useEffect } from "react";
import vectorIcon from "../../assets/icons/Vector.svg";
import totalDelinIcon from "../../assets/icons/Vector2.svg";
import editPencil from "../../assets/icons/border_color.svg";
import Save from "../../assets/icons/PerformancePeriod.svg";
import Recovery from "../../assets/icons/Recovery.svg";
import Gross from "../../assets/icons/Gross.svg";
import VerticalLine from "../../assets/icons/vertical-line.png";
import { fetchDashboardData } from "../../api/api";
// import { fetchDashboardNewData } from "../../api/api";
import { saveDashboardData } from "../../redux/reducers/dashboardReducer/dashboardSlice";
import { useDispatch } from "react-redux";

import { object } from "yup";
import "../PerformanceDashboardHeader/PerformanceDashboard.scss";

interface Props {
  balanceData:any
}

interface DashboardData {
  title: string;
  value: string;
}

const DiagnosticSegementationDashboard: React.FC<Props> = ({ balanceData}) => {
  const formattedDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    date.setHours(date.getHours() - 3);
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const month = date.toLocaleDateString("en-US", { month: "2-digit" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    let hours = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    hours = hours.replace(" AM", "am").replace(" PM", "pm");
    return ` ${day}/${month}/${year} ${hours}`;
  };

  const dispatch = useDispatch();
  const [dashboardData, setDashboardData] = useState<any>({});
  const [dashboardNewdata, setDashboardNewdata] = useState<any>({});

 
  const [monthData, setMonthData] = useState<any>({});
  const [unitData, setUnitData] = useState<any>({});

  const [activeTab, setActiveTab] = useState("write-off pool");



  const fetchData = async () => {
    try {
      const res = await fetchDashboardData();
      console.log("check", res.data);
      dispatch(saveDashboardData(res.data));
      setDashboardData(res.data);
      // console.log("res value", res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const formatNumberInMillions = (number:any) => {
  //   if (number >= 1000000 || number <= -1000000) {
  //       return `${Math.floor(number / 1000000).toLocaleString()} M`;
  //     } else {
  //       return `${(number).toLocaleString()} `;
  //     }
  // };

  const renderContent = () => {
    switch (activeTab) {
      case "write-off pool":
        return renderBalance();
      // case "month":
      //   return renderMonth();
      case "units":
      // return renderUnits();
      default:
        return null;
    }
  };

  const balanceHeader = [
    { name: "new write offs" },
    { name: "new write off amount" },
    { name: "performance period" },
    { name: "recovery" },
    { name: "recovery percentage" },
  ];

  const unitHeader = [
    { name: "total_accounts" },
    { name: "avg_monthly_payers" },
    { name: "avg_monthly_payer_rate" },
    { name: "fy_forecast" },
    { name: "variance_to_plan" },
  ];

  const renderBalance = () => {
    return (
      // dashboardData?.kpi?.balance?.map((item: any) =>

      balanceHeader?.map((data: any, id: any) =>
        activeTab === "write-off pool" ? (
          <div
            // key={item.title}
            className={
              data.name === "recovery percentage"
                ? "CustomTabsDashHeader"
                : "CustomTabsDashHeader "
            }
          >
            <div
              className={
                data.name === "recovery percentage"
                  ? "min-w-auto  justify-start items-center gap-2 flex"
                  : "min-w-[250px]  justify-start items-center gap-2 flex flex-row"
              }
            >
              <div
                className={`px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex ${
                  data.name === "new write off amount"
                    ? "bg-violet-100"
                    : data.name === "performance period"
                    ? "bg-emerald-100"
                    : data.name === "recovery"
                    ? "bg-blue-100  "
                    : data.name === "recovery percentage"
                    ? "bg-rose-100"
                    : "bg-orange-100"
                } `}
              >
                <img
                  className="w-10 h-10"
                  src={
                    data.name === "new write offs"
                      ? vectorIcon
                      : data.name === "new write off amount"
                      ? totalDelinIcon
                      : data.name === "performance period"
                      ? Save
                      : data.name === "recovery"
                      ? Gross
                      : data.name === "recovery percentage"
                      ? Recovery
                      : vectorIcon
                  }
                  alt=""
                />
              </div>

              <div className="flex-col justify-start items-start gap-1 inline-flex customClassMonitoringDashboardHeader">
                <div className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans']">
                  {data.name === "new write offs"
                    ? "New Write Offs (units)"
                    : data.name === "new write off amount"
                    ? "New Write Offs (amount)"
                    : data.name === "performance period"
                    ? "Performance Period"
                    : data.name === "recovery"
                    ? "Recovery"
                    : data.name === "recovery percentage"
                    ? "Recovery%"
                    : ""}
                </div>
                <div className="text-[#000000] text-[16px] font-[500] font-['DM Sans'] tracking-wide">
                  {data.name === "new write offs"
                    ? `${(balanceData["new write offs"] || 0).toLocaleString()}`
                    : data.name === "new write off amount"
                    ? `₹${Math.floor(
                        (balanceData?.["new write off amount"] || 0) / 1000000
                      ).toLocaleString()}M`
                    : data.name === "performance period"
                    ? `${balanceData?.["performance period"]}`
                    : data.name === "recovery"
                    ? `₹${Math.floor(
                        (balanceData?.recovery || 0) / 1000000
                      ).toLocaleString()} M`
                    : data.name === "recovery percentage"
                    ? `${(balanceData?.["recovery percentage"] ?? 0).toFixed(2)}%`

                    : ""}
                </div>
              </div>

              {data.name !== "recovery percentage" && (
                <div className="vertical-bar ml-16"></div>
              )}
            </div>
          </div>
        ) : null
      )
    );
  };
  
  return (
    <div className="w-[100%] flex  px-5 py-5 bg-white rounded-xl shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] flex-col justify-start items-start gap-4 lg:ml-[9px] -mt-[20px]">
      <div className="w-full flex flex-col md:flex-row md:justify-between">
        <div>
          <span className="text-[#000000] text-[16px] font-[700] font-['DM Sans']">
            Portfolio:
          </span>

          <span className="text-[#000000] text-[16px] font-[400] font-['DM Sans'] ml-1">
            Personal Loan Recovery
          </span>
        </div>
        <div>
          <ul
            className="flex mb-[32px] flex-wrap mt-[10px] text-sm font-medium text-center DashBoardHeaderTabs"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="m-auto" role="presentation">
              {/* <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "balance"
                    ? "border-violet-500"
                    : "border-transparent"
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "balance"}
                onClick={() => setActiveTab("balance")}
              >
                Balance
              </button> */}
              {/* 
              <button
                className={`inline-block p-2 border-b-2 rounded-t-lg   text-xs lg:text-base font-semibold tracking-tight ${
                  activeTab === "balance"
                    ? "border-violet-500 text-[#5C4E8E]"
                    : "border-transparent text-black"
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "balance"}
                onClick={() => setActiveTab("balance")}
              >
                Balance
              </button> */}
            </li>
            {/* <li className="m-auto p-1" role="presentation">
              <button
                className={`inline-block p-2 border-b-2 rounded-t-lg text-xs lg:text-base font-semibold tracking-tight ${
                  activeTab === "month"
                    ? "border-violet-500 text-[#5C4E8E]"
                    : "border-transparent text-black"
                }`}
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected={activeTab === "month"}
                onClick={() => setActiveTab("month")}
              >
                Month
              </button>
            </li> */}
            <li className="m-auto p-1" role="presentation">
              {/* <button
                className={`inline-block p-2 border-b-2 border-transparent rounded-t-lg  text-xs lg:text-base font-semibold tracking-tight ${
                  activeTab === "units"
                    ? "border-violet-500 text-[#5C4E8E]"
                    : "border-transparent text-black"
                }`}
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === "units"}
                onClick={() => setActiveTab("units")}
              >
                Units
              </button> */}
            </li>
          </ul>
        </div>
        <div>
          <span className="text-[#000000] text-[12px] font-['DM Sans'] font-bold">
            Last synced:
          </span>
          <span className="text-[#000000] text-[12px] font-['DM Sans'] font-normal">
            {" "}
            {`${formattedDate()}`}
          </span>
        </div>
      </div>
      <div className="self-stretch flex flex-wrap justify-start xl:justify-between  items-center gap-5 DashbOardHeaderCards">
        {renderContent()}
      </div>
    </div>
  );
};

export default DiagnosticSegementationDashboard;
