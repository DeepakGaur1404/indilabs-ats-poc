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
import "./MonitoringRecoverySubtabsDashboardHeader.scss";
import { object } from "yup";
import pencilicondashboard from "../../assets/images/pencilicondashboard.png";

type Props = {};

interface DashboardData {
  title: string;
  value: string;
}

const MonitoringRecoverySubtabsDashboardHeader = (props: Props) => {
  const dispatch = useDispatch();
  const [dashboardData, setDashboardData] = useState<any>({});
  const [dashboardNewdata, setDashboardNewdata] = useState<any>({});

  const [balanceData, setBalanceData] = useState<any>({});
  const [monthData, setMonthData] = useState<any>({});
  const [unitData, setUnitData] = useState<any>({});

  const [activeTab, setActiveTab] = useState("balance");

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
  const fetchNewdata = async () => {
    // console.log("fetchNewData called");
    const apiUrl =
      "https://smfg-backend-service.site/v1/monitoring/portfolio/recovery";
    // const proxyUrl = "https://smfg-backend-service.site/v1/home/";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        setDashboardNewdata(data?.balance);

        setBalanceData(data?.balance);
        setUnitData(data?.units);
        setMonthData(data?.month);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const fetchNewAPIData = async () => {
    const apiUrl =
      "https://smfg-backend-service.site/v1/monitoring/portfolio/recovery";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetch New Data Called", data);

        // setDashboardNewdata(data?.balance);

        setBalanceData(data?.balance);
        setUnitData(data?.units);
        setMonthData(data?.month);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "balance":
        return renderBalance();
      //   case "month":
      //     return renderMonth();
      //   case "units":
      //     return renderUnits();
      default:
        return null;
    }
  };

  const balanceHeader = [
    { name: "total_book" },
    { name: "total_delinquency" },
    { name: "plus_2_delinquency" },
    { name: "gross_wo" },
    { name: "gross_recovery" },
  ];

  const renderBalance = () => {
    return (
      // dashboardData?.kpi?.balance?.map((item: any) =>

      balanceHeader?.map((data: any, id: any) =>
        activeTab === "balance" ? (
          <div
            // key={item.title}
            className={
              data.name === "gross_recovery"
                ? "CustomTabsDashHeader"
                : "CustomTabsDashHeader "
            }
          >
            <div
              className={
                data.name === "gross_recovery"
                  ? "min-w-auto  justify-start items-center gap-2 flex"
                  : "min-w-[250px]  justify-start items-center gap-2 flex flex-row"
              }
            >
              <div
                className={`px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex ${
                  data.name === "total_delinquency"
                    ? "bg-violet-100"
                    : data.name === "plus_2_delinquency"
                    ? "bg-emerald-100"
                    : data.name === "gross_wo"
                    ? "bg-blue-100  "
                    : data.name === "gross_recovery"
                    ? "bg-rose-100"
                    : "bg-orange-100"
                } `}
              >
                <img
                  className="w-10 h-10"
                  src={
                    data.name === "total_book"
                      ? vectorIcon
                      : data.name === "total_delinquency"
                      ? totalDelinIcon
                      : data.name === "plus_2_delinquency"
                      ? Save
                      : data.name === "gross_wo"
                      ? Gross
                      : data.name === "gross_recovery"
                      ? Recovery
                      : vectorIcon
                  }
                  alt=""
                />
              </div>

              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-[#9CA4B6] text-[12px] font-[400] font-['DM Sans']">
                  {data.name === "total_book"
                    ? "Total Book"
                    : data.name === "total_delinquency"
                    ? "Total Delinquency"
                    : data.name === "plus_2_delinquency"
                    ? "2+ Delinquency"
                    : data.name === "gross_wo"
                    ? "Gross WO"
                    : data.name === "gross_recovery"
                    ? "Gross Recovery"
                    : ""}
                </div>
                <div className="text-[#000000] text-[16px] font-[400] font-['DM Sans'] tracking-wide">
                  {data.name === "total_book"
                    ? `$${Math.floor(
                        (balanceData?.total_book || 0) / 1000000
                      ).toLocaleString()} M`
                    : data.name === "total_delinquency"
                    ? `$${Math.floor(
                        (balanceData?.total_delinquency || 0) / 1000000
                      ).toLocaleString()} M`
                    : data.name === "plus_2_delinquency"
                    ? `$${Math.floor(
                        (balanceData?.plus_2_delinquency || 0) / 1000000
                      ).toLocaleString()} M`
                    : data.name === "gross_wo"
                    ? `$${Math.floor(
                        (balanceData?.gross_wo || 0) / 1000000
                      ).toLocaleString()} M`
                    : data.name === "gross_recovery"
                    ? `$${Math.floor(
                        (balanceData?.gross_recovery || 0) / 1000000
                      ).toLocaleString()} M`
                    : ""}
                </div>
              </div>

              {data.name !== "gross_recovery" && (
                <div className="vertical-bar ml-16"></div>
              )}
            </div>
          </div>
        ) : null
      )
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
        <div className="flex gap-1">
          <span className="text-[#000000] text-[16px] font-['DM Sans'] font-[700]">
            Data Range:
          </span>
          <span className="text-[#000000] text-[16px] font-['DM Sans'] font-[400]">
            {balanceData?.date_range}
            {/ Jan 2019 - Apr 2023 /}
          </span>
          <span className="w-[16px] h-[15px] mt-1 ml-[1px] cursor-pointer">
            <img src={pencilicondashboard} alt="pencil" />
          </span>
        </div>
        <div>
          <span className="text-[#000000] text-[12px] font-['DM Sans'] font-bold">
            Last synced:
          </span>
          <span className="text-[#000000] text-[12px] font-['DM Sans'] font-normal">
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

export default MonitoringRecoverySubtabsDashboardHeader;
