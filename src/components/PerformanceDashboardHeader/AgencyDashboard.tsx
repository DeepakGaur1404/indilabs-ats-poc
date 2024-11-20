import React, { useState, useEffect } from "react";
import vectorIcon from "../../assets/icons/Vector.svg";
import totalDelinIcon from "../../assets/icons/Vector2.svg";
import editPencil from "../../assets/icons/border_color.svg";
import Save from "../../assets/icons/Save.svg";
import Recovery from "../../assets/icons/Recovery.svg";
import Gross from "../../assets/icons/Gross.svg";
import VerticalLine from "../../assets/icons/vertical-line.png";
import { fetchDashboardData } from "../../api/api";
// import { fetchDashboardNewData } from "../../api/api";
import { saveDashboardData } from "../../redux/reducers/dashboardReducer/dashboardSlice";
import { useDispatch } from "react-redux";
import "./PerformanceDashboard.scss";
import { object } from "yup";

type Props = {};

interface DashboardData {
  title: string;
  value: string;
}

const jsondata = {
  balance: {
    portfolio: "Personal Loan",
    date_range: "Jan 2019 - Apr 2023",
    total_book: 4904412211.45,
    ytd_recovery: 139595017.14,
    annualised_recovery_rate: 0.06831155838692202,
    fy_forecast: 0,
    variance_to_plan: 0,
  },
  units: {
    portfolio: "Personal Loan",
    date_range: "Jan 2019 - Apr 2023",
    total_accounts: 6633,
    total_payers: 645,
    payer_ratio: 0.09724106739032112,
    fy_forecast: 0,
    variance_to_plan: 0,
  },
};

const value = (jsondata.balance.ytd_recovery || 0) / 10000000;
const truncatedValue = Math.floor(value * 10) / 10;

const AgencyDashboard = (props: Props) => {
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

  const [balanceData, setBalanceData] = useState<any>({});
  const [monthData, setMonthData] = useState<any>({});
  const [unitData, setUnitData] = useState<any>({});

  const [activeTab, setActiveTab] = useState("balance");

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

  const fetchNewdata = async () => {
    // console.log("fetchNewData called");
    // const apiUrl =
    //   "https://smfg-backend-service.site/v1/monitoring/home/recovery";
    // // const proxyUrl = "https://smfg-backend-service.site/v1/home/";
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    // const apiKey = "368f286f442e50f720ef7d8d952add8b";
    // const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
    // fetch(urlWithParams)
    //   .then((response) => response.json())
    //   .then((data) => {
    const data = jsondata;
    setDashboardNewdata(data?.balance);

    setBalanceData(data?.balance);
    setUnitData(data?.units);
    // setMonthData(data?.month);
    //   })
    //   .catch((error) => console.error("Error fetching data:", error));
  };

  const fetchNewAPIData = async () => {
    const apiUrl =
      "https://smfg-backend-service.site/v1/monitoring/home/recovery";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetch New Data Called", data);

        // setDashboardNewdata(data?.balance);

        setBalanceData(data?.balance);
        setUnitData(data?.units);
        // setMonthData(data?.month);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "balance":
        return renderBalance();
      // case "month":
      //   return renderMonth();
      case "units":
        return renderUnits();
      default:
        return null;
    }
  };

  const balanceHeader = [
    { name: "total_book" },
    { name: "ytd_recovery" },
    { name: "annualised_recovery_rate" },
    { name: "fy_forecast" },
    { name: "variance_to_plan" },
  ];

  const unitHeader = [
    { name: "total_accounts" },
    { name: "total_payers" },
    { name: "payer_ratio" },
    { name: "fy_forecast" },
    { name: "variance_to_plan" },
  ];

  const renderBalance = () => {
    return (
      // dashboardData?.kpi?.balance?.map((item: any) =>

      balanceHeader?.map((data: any, id: any) =>
        activeTab === "balance" ? (
          <div
            // key={item.title}
            className={
              data.name === "variance_to_plan"
                ? "CustomTabsDashHeader"
                : "CustomTabsDashHeader "
            }
          >
            <div
              className={
                data.name === "variance_to_plan"
                  ? "min-w-auto  justify-start items-center gap-2 flex"
                  : "min-w-[250px]  justify-start items-center gap-2 flex flex-row"
              }
            >
              <div
                className={`px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex ${
                  data.name === "ytd_recovery"
                    ? "bg-violet-100"
                    : data.name === "annualised_recovery_rate"
                    ? "bg-emerald-100"
                    : data.name === "fy_forecast"
                    ? "bg-blue-100  "
                    : data.name === "variance_to_plan"
                    ? "bg-rose-100"
                    : "bg-orange-100"
                } `}
              >
                <img
                  className="w-10 h-10"
                  src={
                    data.name === "total_book"
                      ? vectorIcon
                      : data.name === "ytd_recovery"
                      ? totalDelinIcon
                      : data.name === "annualised_recovery_rate"
                      ? Save
                      : data.name === "fy_forecast"
                      ? Gross
                      : data.name === "variance_to_plan"
                      ? Recovery
                      : vectorIcon
                  }
                  alt=""
                />
              </div>

              <div className="flex-col justify-start items-start gap-1 inline-flex customClassMonitoringDashboardHeader">
                <div className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans']">
                  {data.name === "total_book"
                    ? "Total Book"
                    : data.name === "ytd_recovery"
                    ? "YTD Recovery"
                    : data.name === "annualised_recovery_rate"
                    ? "Ann. Recovery Rate"
                    : data.name === "fy_forecast"
                    ? "FY Forecast"
                    : data.name === "variance_to_plan"
                    ? "Variance to Plan"
                    : ""}
                </div>
                <div className="text-[#000000] text-[16px] font-[400] font-['DM Sans'] tracking-wide">
                  {data.name === "total_book"
                    ? `₹${((balanceData?.total_book || 0) / 10000000).toFixed(
                        1
                      )} cr`
                    : data.name === "ytd_recovery"
                    ? `₹${truncatedValue} cr`
                    : data.name === "annualised_recovery_rate"
                    ? // ? `${(balanceData?.annualised_recovery_rate).toFixed(3)} %`
                      `${(balanceData?.annualised_recovery_rate * 100).toFixed(
                        1
                      )} %`
                    : // `0.056%`
                    data.name === "fy_forecast"
                    ? // ? `₹${Math.floor(
                      //     (balanceData?.fy_forecast || 0) / 10000000
                      //   ).toLocaleString()} cr`
                      "-"
                    : data.name === "variance_to_plan"
                    ? // ? `₹${Math.floor(
                      //     (balanceData?.variance_to_plan || 0) / 10000000
                      //   ).toLocaleString()} cr`
                      "-"
                    : ""}
                </div>
              </div>

              {data.name !== "variance_to_plan" && (
                <div className="vertical-bar ml-16"></div>
              )}
            </div>
          </div>
        ) : null
      )
    );
  };

  const renderUnits = () => {
    return unitHeader?.map((data: any) =>
      activeTab === "units" ? (
        <div
          // key={item.title}
          className={
            data.name === "variance_to_plan"
              ? "CustomTabsDashHeader"
              : "CustomTabsDashHeader "
          }
        >
          <div
            className={
              data.name === "variance_to_plan"
                ? "min-w-auto  justify-start items-center gap-2 flex"
                : "min-w-[250px]  justify-start items-center gap-2 flex flex-row"
            }
          >
            <div
              className={`px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex ${
                data.name === "total_payers"
                  ? "bg-violet-100"
                  : data.name === "payer_ratio"
                  ? "bg-emerald-100"
                  : data.name === "fy_forecast"
                  ? "bg-blue-100  "
                  : data.name === "variance_to_plan"
                  ? "bg-rose-100"
                  : "bg-orange-100"
              } `}
            >
              <img
                className="w-10 h-10"
                src={
                  data.name === "total_accounts"
                    ? vectorIcon
                    : data.name === "total_payers"
                    ? totalDelinIcon
                    : data.name === "payer_ratio"
                    ? Save
                    : data.name === "fy_forecast"
                    ? Gross
                    : data.name === "variance_to_plan"
                    ? Recovery
                    : vectorIcon
                }
                alt=""
              />
            </div>

            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans']">
                {data.name === "total_accounts"
                  ? "Total Accounts"
                  : data.name === "total_payers"
                  ? "Total Payers"
                  : data.name === "payer_ratio"
                  ? "Payer Ratio"
                  : data.name === "fy_forecast"
                  ? "FY Forecast"
                  : data.name === "variance_to_plan"
                  ? "Variance to Plan"
                  : ""}
              </div>
              <div className="text-[#000000] text-[16px] font-[400] font-['DM Sans'] tracking-wide">
                {data.name === "total_accounts"
                  ? `${(unitData?.total_accounts).toLocaleString()}`
                  : data.name === "total_payers"
                  ? `${(unitData?.total_payers).toLocaleString()}`
                  : data.name === "payer_ratio"
                  ? // ? `${(unitData?.payer_ratio).toLocaleString()}`
                    `${(unitData?.payer_ratio * 100).toFixed(1)} %`
                  : data.name === "fy_forecast"
                  ? `-`
                  : data.name === "variance_to_plan"
                  ? `-`
                  : ""}
              </div>
            </div>

            {data.name !== "variance_to_plan" && (
              <div className="vertical-bar ml-16"></div>
            )}
          </div>
        </div>
      ) : null
    );
  };

  useEffect(() => {
    fetchData();
    fetchNewdata();
    // fetchNewAPIData();
  }, []);

  return (
    <div className="w-[100%] flex  px-5 py-5 bg-white rounded-xl shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] flex-col justify-start items-start gap-4 lg:ml-[9px] -mt-[20px]">
      <div className="w-full flex flex-col md:flex-row md:justify-between">
        <div>
          <span className="text-[#000000] text-[16px] font-[700] font-['DM Sans']">
            Portfolio:
          </span>
          <span className="text-[#000000] text-[16px] font-[400] font-['DM Sans'] ml-1">
            Personal Loan
          </span>
        </div>
        <div>
          <ul
            className="flex mb-[10px] flex-wrap mt-[-10px] text-sm font-medium text-center DashBoardHeaderTabs"
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
              </button>
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
              <button
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
              </button>
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

export default AgencyDashboard;
