import { FC, useState, useEffect } from "react";
import Home from "../../assets/images/home.png";
import Data from "../../assets/images/data.png";
import Dashboard from "../../assets/images/dashboard.png";
import Logo from "../../assets/images/logo.png";
import ArrowCircle from "../../assets/icons/arrow_circle_right.svg";
import Monitoring from "../../assets/images/monitoring.svg";
import Settlment from "../../assets/images/arrow_Settlement.svg";
import Diagnostics from "../../assets/images/diagnostics.svg";
import Strategy from "../../assets/images/strategy.svg";
import Execution from "../../assets/images/execution.svg";
import Expand from "../../assets/images/expand.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import "./SideBar.scss";
import Logout from "../../assets/images/logout.png";
import React from "react";
interface SidebarProps {
  layout?: any;
  moduleName: any;
  setmoduleName: any;
}

const Sidebar: FC<SidebarProps> = ({ layout, moduleName, setmoduleName }) => {
  const [mSidebar, setMSidebar] = useState(false);
  const [home, setHome] = useState(false);
  const [data, setData] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [monitoring, setMonitoring] = useState(false);
  const [diagnostics, setDiagnostics] = useState(false);
  const [strategy, setStrategy] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");
  const [selectedSubTab, setSelectedSubTab] = useState("");
  const [execution, setExecution] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [monitoringDropdown, setMonitoringDropdown] = useState(false);
  const [StrategyDropdown, setStrategyDropdown] = useState(false);
  const [settelmentDropdown, setSettelmentDropdown] = useState(false);
  const [inhouseDropdown, setInhouseDropdown] = useState(false);
  const [agencyDropdown, setAgencyDropdown] = useState(false);
  // const [moduleNameShow, setmoduleNameShow] = useState("Collection");
  // const [moduleName, setmoduleName] = useState("Collection");
  const sidebar = () => {
    setMSidebar(!mSidebar);
  };

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/home/recovery" || pathname === "/home/collection") {
      setSelectedTab("home");
      // setmoduleNameShow("Collection");
    } else if (pathname === "/data") {
      setSelectedTab("data");
    } else if (pathname === "/dashboard") {
      setSelectedTab("dashboard");
      // setmoduleNameShow("Collection");
    } else if (pathname === "/dashboard/recovery") {
      setSelectedTab("dashboard");
      // setmoduleNameShow("Recovery");
    } else if (pathname === "/monitoring") {
      setSelectedTab("monitoring");
      setMonitoringDropdown(true);
    } else if (pathname === "/diagnostics") {
      setSelectedTab("diagnostics");
    } else if (pathname === "/diagnostics/recovery") {
      setSelectedTab("diagnostics");
    } else if (pathname === "/strategy") {
      setSelectedTab("strategy");
      setStrategyDropdown(true);
    } else if (pathname === "/execution") {
      setSelectedTab("execution");
    } else if (pathname === "/execution/recovery") {
      setSelectedTab("execution");
    } else if (pathname.startsWith("/monitoring")) {
      setSelectedTab("monitoring");
      setMonitoringDropdown(true);
    } else if (pathname.startsWith("/strategy")) {
      setSelectedTab("strategy");
      setStrategyDropdown(true);
    }
    if (!location.pathname.includes("/monitoring/recovery/settlement")) {
      setSettelmentDropdown(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    setMSidebar(false);
  }, [location.pathname]);

  // useEffect(() => {
  //   if (
  //     window.location.pathname === "/home" ||
  //     window.location.pathname === "/home/collection"
  //   ) {
  //     setHome(true);
  //   }
  //   if (window.location.pathname === "/data") {
  //     setData(true);
  //   }
  //   if (window.location.pathname === "/monitoring") {
  //     setMonitoring(true);

  //     setMonitoringDropdown(true);
  //   }
  //   if (window.location.pathname === "/diagnostics") {
  //     setDiagnostics(true);
  //   }
  //   if (window.location.pathname === "/strategy") {
  //     setStrategy(true);
  //   }

  //   if (window.location.pathname === "/execution") {
  //     setExecution(true);
  //   }
  //   if (
  //     window.location.pathname.startsWith("/monitoring")
  //   ) {
  //     setMonitoringDropdown(true);
  //   }
  // }, [window.location.pathname]);

  const navigateFunc = (title: string) => {
    setSelectedTab(title);

    // alert("jdhsjdsdj");

    if (title === "monitoring") {
      // console.log("title value", title);
      // setMonitoring(true);
      setMonitoringDropdown(!monitoringDropdown);
      // setMonitoringDropdown(false);
    } else {
      setMonitoringDropdown(false);
      // setMonitoring(false);
    }
    if (title === "settlement") {
      setSettelmentDropdown(!settelmentDropdown);
      console.log(settelmentDropdown, "settelmentDropdown....");
    } else {
      setSettelmentDropdown(false);
    }

    if (title === "strategy") {
      setStrategyDropdown(!StrategyDropdown);
    } else {
      setStrategyDropdown(false);
    }
    if (title === "Sign out") {
      localStorage.clear();
    }
  };

  const navigateSubFunc = (title: string) => {
    setSelectedSubTab(title);

    if (title === "settlement") {
      setSettelmentDropdown(!settelmentDropdown);
      console.log(settelmentDropdown, "settelmentDropdown....");
    } else {
      setSettelmentDropdown(false);
    }
  };
  const sidebarData = [
    { title: "home", imageSrc: Home, hookValue: home },
    // { title: "data", imageSrc: Data, hookValue: data },
    { title: "dashboard", imageSrc: Dashboard, hookValue: dashboard },
    {
      title: "monitoring",
      imageSrc: Monitoring,
      hookValue: monitoring,
      imageSrc2: Expand,
      submenu: [
        { title: "portfolio", imageSrc: Monitoring, hookValue: "portfolio" },
        {
          title: "settlement",
          imageSrc: Monitoring,
          hookValue: "settlement",
          submenu: [
            { title: "New Settlement", hookValue: "new-settlement" },
            { title: "Settlement Pool", hookValue: "settlement-pool" },
            { title: "Cohort", hookValue: "cohort" },
          ],
        },
      ],
    },
    { title: "diagnostics", imageSrc: Diagnostics, hookValue: diagnostics },
    {
      title: "strategy",
      imageSrc: Strategy,
    
      hookValue: strategy,
      imageSrc3: Expand,
    },
    { title: "execution", imageSrc: Execution, hookValue: execution },
    { title: "Sign out", imageSrc: Logout, hookValue: "" },
  ];

  return (
    <div className="">
      <Header
        // moduleNameShow={moduleNameShow}
        // setmoduleNameShow={setmoduleNameShow}
        moduleName={moduleName}
        setmoduleName={setmoduleName}
      />
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={sidebar}
          className="text-red absolute lg:relative  z-10 bottom-12 inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 customSideBarBTN"
        >
          {/* <span className="">Open sidebar</span> */}
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        {/* <Header/> */}
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-[9999] transition-transform ${
            !mSidebar
              ? "-translate-x-full lg:translate-x-0"
              : "translate-x-0 lg:-translate-x-full"
          }`}
          aria-label="Sidebar"
        >
          <div className="relative overflow-y-auto w-[220px] py-4 h-screen bg-[#56478A]">
            <button
              onClick={sidebar}
              className="absolute right-4 top-4 text-white border-2 inline-flex lg:hidden items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium rounded-full"
            >
              <span className="-mt-[4px] text-2xl">x</span>
            </button>
            <ul className="space-y-2">
              <img
                src={Logo}
                alt="logo"
                className="mb-[32px] w-[125px] lg:w-[148px] h-[25px] ml-4 lg:mt-7"
              />
              {sidebarData.map((data, idx) => {
                return (
                  <>
                    <li
                      key={idx}
                      className="flex flex-col items-center justify-between"
                    >
                      <Link
                        //to ={"/strategy"}
                        to={
                          data?.title === "Sign out"
                            ? "/"
                            : data?.title == "home"
                            ? // || data?.title == "data"
                              "/" + data?.title + "/recovery"
                            : moduleName === "Collection"
                            ? "/" + data?.title
                            : "/" + data?.title + "/recovery"
                        }
                        className={`flex items-center w-[196px]  mx-3 my-3 h-11 pl-3 pr-4 py-3  justify-start gap-3  ${
                          data?.title === selectedTab &&
                          (location.pathname === "/monitoring" ||
                            location.pathname === "/home/recovery" ||
                            // location.pathname === "/data" ||
                            // location.pathname === "/dashboard" ||
                            location.pathname === "/dashboard/recovery" ||
                            location.pathname === "/execution" ||
                            location.pathname === "/execution/recovery" ||
                            location.pathname === "/diagnostics" ||
                            location.pathname === "/diagnostics/recovery" ||
                            location.pathname === "/monitoring/recovery" ||
                            location.pathname === "/strategy" ||
                            location.pathname === "/strategy/recovery" ||
                            location.pathname ===
                              "/strategy/simulationengine/recovery" ||
                            location.pathname ===
                              "/strategy/reviewExecution/recovery" ||
                            location.pathname === "/strategy/reviewExecution" ||
                            location.pathname ===
                              "/strategy/allocationEngine/reviewPerformance") &&
                          "h-11 bg-white bg-opacity-30 rounded-lg"
                        }`}
                        onClick={() => navigateFunc(data?.title)}
                      >
                        <img
                          src={data?.imageSrc}
                          alt="chart-icon"
                          style={{ color: "white" }}
                        />
                        <span className="text-white text-base font-medium leading-normal capitalize">
                          {data.title}
                        </span>
                        <img
                          src={data?.imageSrc2}
                          alt=""
                          // className={`${"-rotate-90"} `}
                          className={`${
                            monitoringDropdown ? "-rotate-270" : "-rotate-90"
                          }`}
                        />
                        {/*  monitoringDropdown ? "-rotate-270" : */}
                        <img
                          src={data?.imageSrc3}
                          alt=""
                          className={`${
                            StrategyDropdown ? "-rotate-270" : "-rotate-90"
                          }`}
                          // className={`${"-rotate-90"} `}
                          // StrategyDropdown ? "-rotate-270" :
                        /> 
                        {data?.title === selectedTab &&
                          (location.pathname === "/monitoring" ||
                            location.pathname === "/home/recovery" ||
                            // location.pathname === "/data" ||
                            // location.pathname === "/dashboard" ||
                            location.pathname === "/dashboard/recovery" ||
                            location.pathname === "/execution" ||
                            location.pathname === "/execution/recovery" ||
                            location.pathname === "/diagnostics" ||
                            location.pathname === "/diagnostics/recovery" ||
                            location.pathname === "/monitoring/recovery" ||
                            location.pathname === "/strategy/recovery" ||
                            location.pathname ===
                              "/strategy/simulationengine/recovery" ||
                            location.pathname ===
                              "/strategy/reviewExecution/recovery" ||
                            location.pathname === "/strategy/reviewExecution" ||
                            location.pathname ===
                              "/strategy/allocationEngine/reviewPerformance" ||
                            location.pathname === "/strategy") && (
                            <div
                              className="h-11 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                              style={{
                                position: "absolute",
                                right: "1px",
                              }}
                            ></div>
                          )}
                      </Link>
                      {monitoringDropdown && data.title === "monitoring" && (
                        <>
                          <div className="text-white flex flex-col items-center gap-y-5 my-5 w-[80%]">
                            <Link
                              to={
                                location.pathname ===
                                  "/monitoring/recovery/placement" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/settlement-pool" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/new-settlement" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/cohort" ||
                                location.pathname ===
                                  "/monitoring/recovery/location" ||
                                location.pathname ===
                                  "/monitoring/recovery/vintage" ||
                                location.pathname ===
                                  "/monitoring/recovery/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement" ||
                                location.pathname ===
                                  "/monitoring/recovery/portfolio" ||
                                location.pathname ===
                                  "/monitoring/recovery/distribution" ||
                                location.pathname === "/monitoring/recovery"
                                  ? "/monitoring/recovery/portfolio"
                                  : "/monitoring/portfolio"
                              }
                              className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                location.pathname === "/monitoring/portfolio" ||
                                location.pathname ===
                                  "/monitoring/recovery/portfolio"
                                  ? "bg-white bg-opacity-30 rounded-lg h-9 "
                                  : ""
                              }`}
                            >
                              <img src={ArrowCircle} alt="" className="h-4" />
                              <p className="mb-0">Portfolio</p>
                              {(location.pathname === "/monitoring/portfolio" ||
                                location.pathname ===
                                  "/monitoring/recovery/portfolio") && (
                                <div
                                  className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                  style={{
                                    position: "absolute",
                                    right: "1px",
                                  }}
                                ></div>
                              )}
                            </Link>
                            <Link
                              to={
                                location.pathname ===
                                  "/monitoring/recovery/portfolio" ||
                                location.pathname ===
                                  "/monitoring/recovery/placement" ||
                                location.pathname ===
                                  "/monitoring/recovery/vintage" ||
                                location.pathname ===
                                  "/monitoring/recovery/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/settlement-pool" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/cohort" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/new-settlement" ||
                                location.pathname ===
                                  "/monitoring/recovery/location" ||
                                location.pathname ===
                                  "/monitoring/recovery/distribution" ||
                                location.pathname === "/monitoring/recovery"
                                  ? "/monitoring/recovery/location"
                                  : "/monitoring/location"
                              }
                              className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                location.pathname === "/monitoring/location" ||
                                location.pathname ===
                                  "/monitoring/recovery/location"
                                  ? "bg-white bg-opacity-30 rounded-lg h-9"
                                  : ""
                              }`}
                            >
                              <img src={ArrowCircle} alt="" className="h-4" />
                              <p className="mb-0">
                                {location.pathname.startsWith(
                                  "/monitoring/recovery"
                                )
                                  ? "Performance"
                                  : "Bucket"}
                              </p>
                              {(location.pathname === "/monitoring/location" ||
                                location.pathname ===
                                  "/monitoring/recovery/location") && (
                                <div
                                  className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                  style={{
                                    position: "absolute",
                                    right: "1px",
                                  }}
                                ></div>
                              )}
                            </Link>
                            <Link
                              to={
                                location.pathname ===
                                  "/monitoring/recovery/portfolio" ||
                                location.pathname ===
                                  "/monitoring/recovery/location" ||
                                location.pathname ===
                                  "/monitoring/recovery/placement" ||
                                location.pathname ===
                                  "/monitoring/recovery/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement" ||
                                location.pathname ===
                                  "/monitoring/recovery/vintage" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/settlement-pool" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/cohort" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/new-settlement" ||
                                location.pathname ===
                                  "/monitoring/recovery/distribution" ||
                                location.pathname === "/monitoring/recovery"
                                  ? "/monitoring/recovery/distribution"
                                  : " "
                              }
                              className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                location.pathname === "/monitoring/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/distribution"
                                  ? "bg-white bg-opacity-30 rounded-lg h-9"
                                  : ""
                              }`}
                            >
                              <img src={ArrowCircle} alt="" className="h-4" />
                              <p className="mb-0">
                                {location.pathname.startsWith(
                                  "/monitoring/recovery"
                                )
                                  ? "Distribution"
                                  : "Distribution"}
                              </p>
                              {(location.pathname === "/monitoring/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/distribution") && (
                                <div
                                  className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                  style={{
                                    position: "absolute",
                                    right: "1px",
                                  }}
                                ></div>
                              )}
                            </Link>
                            <Link
                              to={
                                location.pathname ===
                                  "/monitoring/recovery/portfolio" ||
                                location.pathname ===
                                  "/monitoring/recovery/location" ||
                                location.pathname ===
                                  "/monitoring/recovery/placement" ||
                                location.pathname ===
                                  "/monitoring/recovery/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement" ||
                                location.pathname ===
                                  "/monitoring/recovery/vintage" ||
                                location.pathname ===
                                  "/monitoring/recovery/distribution" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/settlement-pool" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/cohort" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/new-settlement" ||
                                location.pathname === "/monitoring/recovery"
                                  ? "/monitoring/recovery/vintage"
                                  : "/monitoring/agency"
                              }
                              className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                location.pathname === "/monitoring/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/vintage"
                                  ? "bg-white bg-opacity-30 rounded-lg h-9"
                                  : ""
                              }`}
                            >
                              <img src={ArrowCircle} alt="" className="h-4" />
                              <p className="mb-0">
                                {location.pathname.startsWith(
                                  "/monitoring/recovery"
                                )
                                  ? "Vintage"
                                  : "Location"}
                              </p>
                              {(location.pathname === "/monitoring/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/vintage") && (
                                <div
                                  className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                  style={{
                                    position: "absolute",
                                    right: "1px",
                                  }}
                                ></div>
                              )}
                            </Link>

                            {/* <Link
                              to={
                                location.pathname ===
                                  "/monitoring/recovery/portfolio" ||
                                location.pathname ===
                                  "/monitoring/recovery/location" ||
                                location.pathname ===
                                  "/monitoring/recovery/vintage" ||
                                location.pathname ===
                                  "/monitoring/recovery/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement" ||
                                location.pathname ===
                                  "/monitoring/recovery/placement" ||
                                location.pathname ===
                                  "/monitoring/recovery/distribution" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/settlement-pool" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/cohort" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/new-settlement" ||
                                location.pathname === "/monitoring/recovery"
                                  ? "/monitoring/recovery/placement"
                                  : "/monitoring/writeoffs/Volume"
                              }
                              className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                location.pathname ===
                                  "/monitoring/writeoffs/Volume" ||
                                location.pathname ===
                                  "/monitoring/recovery/placement"
                                  ? "bg-white bg-opacity-30 rounded-lg h-9"
                                  : ""
                              }`}
                            >
                              <img src={ArrowCircle} alt="" className="h-4" />
                              <p className="mb-0">
                                {location.pathname.startsWith(
                                  "/monitoring/recovery"
                                )
                                  ? "Placement"
                                  : "Write offs"}
                              </p>
                              {(location.pathname ===
                                "/monitoring/writeoffs/Volume" ||
                                location.pathname ===
                                  "/monitoring/recovery/placement") && (
                                <div
                                  className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                  style={{
                                    position: "absolute",
                                    right: "1px",
                                  }}
                                ></div>
                              )}
                            </Link> */}
                            <Link
                              to={
                                location.pathname ===
                                  "/monitoring/recovery/portfolio" ||
                                location.pathname ===
                                  "/monitoring/recovery/location" ||
                                location.pathname ===
                                  "/monitoring/recovery/vintage" ||
                                location.pathname ===
                                  "/monitoring/recovery/placement" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement" ||
                                location.pathname ===
                                  "/monitoring/recovery/agency" ||
                                location.pathname ===
                                  "/monitoring/recovery/distribution" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/settlement-pool" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/cohort" ||
                                location.pathname ===
                                  "/monitoring/recovery/settlement/new-settlement" ||
                                location.pathname === "/monitoring/recovery"
                                  ? "/monitoring/recovery/agency"
                                  : "/monitoring/placements"
                              }
                              className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                location.pathname ===
                                  "/monitoring/placements" ||
                                location.pathname ===
                                  "/monitoring/recovery/agency"
                                  ? "bg-white bg-opacity-30 rounded-lg h-9"
                                  : ""
                              }`}
                            >
                              <img src={ArrowCircle} alt="" className="h-4" />
                              <p className="mb-0">
                                {location.pathname.startsWith(
                                  "/monitoring/recovery"
                                )
                                  ? "Agency"
                                  : "Placements"}
                              </p>
                              {(location.pathname ===
                                "/monitoring/placements" ||
                                location.pathname ===
                                  "/monitoring/recovery/agency") && (
                                <div
                                  className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                  style={{
                                    position: "absolute",
                                    right: "1px",
                                  }}
                                ></div>
                              )}
                            </Link>

                            {data?.submenu?.map((subitem: any, subidx) => (
                              <React.Fragment key={subidx}>
                                {/* {subitem.title !== "settlement" && (
            <Link
              to={
                location.pathname === "/monitoring/recovery/portfolio" ||
                location.pathname === "/monitoring/recovery/location" ||
                location.pathname === "/monitoring/recovery/vintage" ||
                location.pathname === "/monitoring/recovery/agency" ||
                location.pathname === "/monitoring/recovery/placement" ||
                location.pathname === "/monitoring/recovery/settlement" ||
                location.pathname === "/monitoring/recovery/distribution" ||
                location.pathname === "/monitoring/recovery"
                  ? "/monitoring/recovery/settlement"
                  : "/monitoring/watchlist"
              }
              className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                location.pathname === "/monitoring/watchlist" ||
                location.pathname === "/monitoring/recovery/settlement"
                  ? "bg-white bg-opacity-30 rounded-lg h-9"
                  : ""
              }`}
              onClick={() => navigateSubFunc(subitem?.title)}
            >
              <img src={ArrowCircle} alt="" className="h-4" />
              <p className="mb-0">
                {location.pathname.startsWith("/monitoring/recovery")
                  ? "Settlement"
                  : "Watchlist"}
              </p>
              {(location.pathname === "/monitoring/watchlist" ||
                location.pathname === "/monitoring/recovery/settlement") && (
                <div
                  className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                  style={{
                    position: "absolute",
                    right: "1px",
                  }}
                ></div>
              )}
            </Link>
          )} */}

                                {subitem.title === "settlement" && (
                                  <Link
                                    to={
                                      !settelmentDropdown
                                        ? "/monitoring/recovery/settlement/new-settlement"
                                        : "#"
                                    }
                                    className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                      location.pathname ===
                                      "/monitoring/recovery/settlement"
                                        ? "bg-white bg-opacity-30 rounded-lg h-9"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      navigateSubFunc(subitem?.title)
                                    }
                                  >
                                    <img
                                      src={ArrowCircle}
                                      alt=""
                                      className="h-4"
                                    />
                                    <p className="mb-0 flex items-center">
                                      Settlement
                                      <span className="ps-4">
                                        <img
                                          src={data?.imageSrc2}
                                          alt=""
                                          // className={`${"-rotate-90"} `}
                                          className={`${
                                            settelmentDropdown &&
                                            location.pathname.includes(
                                              "/monitoring/recovery/settlement"
                                            )
                                              ? "-rotate-270"
                                              : "-rotate-90"
                                          }`}
                                        />
                                      </span>
                                    </p>
                                    {/* {location.pathname ===
                                      "/monitoring/recovery/settlement" && (
                                      <div
                                        className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                        style={{
                                          position: "absolute",
                                          right: "1px",
                                        }}
                                      ></div>
                                    )} */}
                                  </Link>
                                )}
                                {subitem.title === "settlement" &&
                                location.pathname.includes(
                                  "/monitoring/recovery/settlement"
                                ) &&
                                settelmentDropdown &&
                                moduleName === "Recovery" ? (
                                  // <div>
                                  <div className="text-white flex flex-col items-center gap-y-4 my-1 w-[100%]">
                                    <Link
                                      to={
                                        "/monitoring/recovery/settlement/new-settlement"
                                      }
                                      className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                        location.pathname ===
                                        "/monitoring/recovery/settlement/new-settlement"
                                          ? "bg-white bg-opacity-30 rounded-lg h-9 "
                                          : ""
                                      }`}
                                    >
                                      <img
                                        src={Settlment}
                                        alt=""
                                        className="h-4 ml-2"
                                      />
                                      <p className="mb-0">New Settlement</p>
                                      {location.pathname ===
                                        "/monitoring/recovery/settlement/new-settlement" && (
                                        <div
                                          className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                          style={{
                                            position: "absolute",
                                            right: "1px",
                                          }}
                                        ></div>
                                      )}
                                    </Link>
                                    <Link
                                      to={
                                        "/monitoring/recovery/settlement/settlement-pool"
                                      }
                                      className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                        location.pathname ===
                                        "/monitoring/recovery/settlement/settlement-pool"
                                          ? "bg-white bg-opacity-30 rounded-lg h-9 "
                                          : ""
                                      }`}
                                    >
                                      <img
                                        src={Settlment}
                                        alt=""
                                        className="h-4 ml-2"
                                      />
                                      <p className="mb-0">Settlement Pool</p>
                                      {location.pathname ===
                                        "/monitoring/recovery/settlement/settlement-pool" && (
                                        <div
                                          className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                          style={{
                                            position: "absolute",
                                            right: "1px",
                                          }}
                                        ></div>
                                      )}
                                    </Link>
                                    <Link
                                      to={
                                        "/monitoring/recovery/settlement/cohort"
                                      }
                                      className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                        location.pathname ===
                                        "/monitoring/recovery/settlement/cohort"
                                          ? "bg-white bg-opacity-30 rounded-lg h-9 "
                                          : ""
                                      }`}
                                    >
                                      <img
                                        src={Settlment}
                                        alt=""
                                        className="h-4 ml-2"
                                      />
                                      <p className="mb-0">Cohort</p>
                                      {location.pathname ===
                                        "/monitoring/recovery/settlement/cohort/" && (
                                        <div
                                          className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                          style={{
                                            position: "absolute",
                                            right: "1px",
                                          }}
                                        ></div>
                                      )}
                                    </Link>
                                    {/* </div> */}
                                  </div>
                                ) : null}
                              </React.Fragment>
                            ))}
                          </div>
                        </>
                      )}
                         {StrategyDropdown && data.title === "strategy" && (
                        <>
                          <div className="text-white flex flex-col items-center gap-y-5 my-5 w-[80%]">
                            <Link
                              to={"/agency/strategy/recovery"}
                              className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                location.pathname ==="/agency/strategy/recovery" 
                                  ? "bg-white bg-opacity-30 rounded-lg h-9 "
                                  : ""
                              }`}
                            >
                              <img src={ArrowCircle} alt="" className="h-4" />
                              <p className="mb-0">Agency</p>
                              {(location.pathname ==="/agency/strategy/recovery" ) && (
                                <div
                                  className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                  style={{
                                    position: "absolute",
                                    right: "1px",
                                  }}
                                ></div>
                              )}
                            </Link>
                            <Link
                              to={"/offer/strategy/recovery"}
                              className={`flex gap-2 items-center px-2 ml-[19px] w-[101%] ${
                                location.pathname ==="/offer/strategy/recovery" 
                                  ? "bg-white bg-opacity-30 rounded-lg h-9 "
                                  : "bg-green"
                              }`}
                            >
                              <img src={ArrowCircle} alt="" className="h-4" />
                              <p className="mb-0">Offer</p>
                              {(location.pathname === "/offer/strategy/recovery" ) && (
                                <div
                                  className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                  style={{
                                    position: "absolute",
                                    right: "1px",
                                  }}
                                ></div>
                              )}
                            </Link>
                           
                          
                          
                          </div>
                        </>
                      )}

                      {/* {StrategyDropdown && data.title === "strategy" && (
                        <div>
                          <Link
                            //to ={"/strategy"}
                            to="/agency/strategy/recovery"
                            className={`flex items-center w-[195px]  mx-3 my-3 h-9 pl-3 pr-4 py-3 ml-2 justify-start gap-3  ${
                              location.pathname==="/agency/strategy/recovery"  &&
                              "h-9 bg-white bg-opacity-30 rounded-lg"
                            }`}
                            onClick={() => setInhouseDropdown(!inhouseDropdown)}
                          >
                            <img
                              src={ArrowCircle}
                              alt="chart-icon"
                              style={{ color: "white" }}
                            />
                            <span className="text-white text-base font-medium leading-normal capitalize">
                              Agency
                            </span>
                            {/* <img
                              src={data?.imageSrc3}
                              alt=""
                              className={`${
                                inhouseDropdown ? "-rotate-270" : "-rotate-90"
                              }`}
                            /> 
                            {location.pathname==="/agency/strategy/recovery" && (
                              <div
                                className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                style={{
                                  position: "absolute",
                                  right: "0px",
                                }}
                              ></div>
                            )}
                          </Link>
                          {/* {inhouseDropdown && (
                            <div className="ml-7">
                              <div className="text-white flex flex-col items-center gap-y-5 my-5 w-[80%]">
                                 <Link
                                  to={"/InhouseXX"}
                                  className={`flex gap-2 items-center px-2 w-[95%] ${
                                    location.pathname === "/InhouseXX"
                                      ? "bg-white bg-opacity-30 rounded-lg h-9 "
                                      : ""
                                  }`}
                                >
                                  <img
                                    src={ArrowCircle}
                                    alt=""
                                    className="h-4"
                                  />
                                  <p className="mb-0">XX</p>
                                  {location.pathname === "/InhouseXX" && (
                                    <div
                                      className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                      style={{
                                        position: "absolute",
                                        right: "0px",
                                      }}
                                    ></div>
                                  )}
                                </Link>
                                <Link
                                  to={"#"}
                                  className={`flex gap-2 items-center px-2 w-[95%] ${
                                    location.pathname === "#"
                                      ? "bg-white bg-opacity-30 rounded-lg h-9"
                                      : ""
                                  }`}
                                >
                                  <img
                                    src={ArrowCircle}
                                    alt=""
                                    className="h-4"
                                  />
                                  <p className="mb-0">XY</p>
                                  {location.pathname ===
                                    "/monitoring/location" && (
                                    <div
                                      className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                      style={{
                                        position: "absolute",
                                        right: "0px",
                                      }}
                                    ></div>
                                  )}
                                </Link> 
                              </div>
                            </div>
                          )} 

                          <Link
                            //to ={"/strategy"}
                            to={"/offer/strategy/recovery"}
                            className={`flex items-center w-[167px]  mx-3 my-3 h-11 pl-3 pr-4 py-3  justify-start gap-3  ${
                              location.pathname==="/offer/strategy/recovery" &&
                              "h-11 bg-white bg-opacity-30 rounded-lg"
                            }`}
                            onClick={() => setAgencyDropdown(!agencyDropdown)}
                          >
                            <img
                              src={ArrowCircle}
                              alt="chart-icon"
                              style={{ color: "white" }}
                            />
                            <span className="text-white text-base font-medium leading-normal capitalize">
                            Offer
                            </span>
                            {/* <img
                              src={data?.imageSrc3}
                              alt=""
                              className={`${
                                agencyDropdown ? "-rotate-270" : "-rotate-90"
                              }`}
                            /> 
                            {location.pathname==="/offer/strategy/recovery" && (
                              <div
                                className="h-11 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                style={{
                                  position: "absolute",
                                  right: "0px",
                                }}
                              ></div>
                            )}
                          </Link>
                          {/* {agencyDropdown && (
                            <div className="ml-3 -mt-5">
                              <div className="text-white flex flex-col items-center gap-y-5 my-5 w-[80%]">
                                <div className="text-white flex flex-col items-center gap-y-5 my-5 ml-3 w-[95%]">
                                  <Link
                                    // to={"/strategy/optimization"}
                                    to={"/strategy/allocationEngine"}
                                    className={`flex gap-2 items-center px-2 w-[95%] ${
                                      location.pathname ===
                                      "/strategy/allocationEngine"
                                        ? "bg-white bg-opacity-30 rounded-lg h-9 "
                                        : ""
                                    }`}
                                  >
                                    <img
                                      src={ArrowCircle}
                                      alt=""
                                      className="h-4"
                                    />
                                    <p className="mb-0">Allocation</p>
                                    {location.pathname ===
                                      "/strategy/allocationEngine" && (
                                      <div
                                        className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                        style={{
                                          position: "absolute",
                                          right: "0px",
                                        }}
                                      ></div>
                                    )}
                                  </Link>
                                  <Link
                                    to={"/strategy/optimization"}
                                    className={`flex gap-2 items-center px-2 w-[95%] ${
                                      location.pathname ===
                                      "/strategy/optimization"
                                        ? "bg-white bg-opacity-30 rounded-lg h-9"
                                        : ""
                                    }`}
                                  >
                                    <img
                                      src={ArrowCircle}
                                      alt=""
                                      className="h-4"
                                    />
                                    <p className="mb-0">Optimization</p>
                                    {location.pathname ===
                                      "/strategy/optimization" && (
                                      <div
                                        className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                        style={{
                                          position: "absolute",
                                          right: "0px",
                                        }}
                                      ></div>
                                    )}
                                  </Link>
                                  <Link
                                    to={"/strategy/changeControl"}
                                    className={`flex gap-2 items-center px-2 w-[95%] ${
                                      location.pathname ===
                                      "/strategy/changeControl"
                                        ? "bg-white bg-opacity-30 rounded-lg h-9"
                                        : ""
                                    }`}
                                  >
                                    <img
                                      src={ArrowCircle}
                                      alt=""
                                      className="h-4"
                                    />
                                    <p className="mb-0">Change</p>
                                    {location.pathname ===
                                      "/strategy/changeControl" && (
                                      <div
                                        className="h-9 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                                        style={{
                                          position: "absolute",
                                          right: "0px",
                                        }}
                                      ></div>
                                    )}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )} 
                        </div>
                      )}
                      {data?.hookValue && (
                        <div
                          className="h-11 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                          style={{
                            position: "absolute",
                            right: "0px",
                            marginTop: "11px",
                          }}
                        ></div>
                      )} */}
                      {/* {data.title === "monitoring" && monitoringDropdown && (
              <>
                <div className="text-white flex flex-col items-center gap-y-5 my-5 w-[80%]">
                  <Link
                    to={"/monitoring/portfolio"}
                    className={`flex gap-2 items-center px-2 w-[95%] ${
                      location.pathname === "/monitoring/portfolio"
                        ? "bg-white bg-opacity-30 rounded-lg h-9 "
                        : ""
                    }`}
                  >
                    <img src={ArrowCircle} alt="" className="h-4" />
                    <p>Portfolio</p>
                    {location.pathname === "/monitoring/portfolio" && (
                      <div
                        className="h-7 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                        style={{
                          position: "absolute",
                          right: "0px",
                        }}
                      ></div>
                    )}
                  </Link>
                  <Link
                    to={"/monitoring/performance"}
                    className={`flex gap-2 items-center px-2 w-[95%] ${
                      location.pathname === "/monitoring/performance"
                        ? "bg-white bg-opacity-30 rounded-lg h-9"
                        : ""
                    }`}
                  >
                    <img src={ArrowCircle} alt="" className="h-4" />
                    <p>Performance</p>
                    {location.pathname ===
                      "/monitoring/performance" && (
                      <div
                        className="h-7 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                        style={{
                          position: "absolute",
                          right: "0px",
                        }}
                      ></div>
                    )}
                  </Link>
                  <Link
                    to={"/monitoring/distribution"}
                    className={`flex gap-2 items-center px-2 w-[95%] ${
                      location.pathname === "/monitoring/distribution"
                        ? "bg-white bg-opacity-30 rounded-lg h-9"
                        : ""
                    }`}
                  >
                    <img src={ArrowCircle} alt="" className="h-4" />
                    <p>Distribution</p>
                    {location.pathname ===
                      "/monitoring/distribution" && (
                      <div
                        className="h-7 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                        style={{
                          position: "absolute",
                          right: "0px",
                        }}
                      ></div>
                    )}
                  </Link>
                  <Link
                    to={"/monitoring/production/Volume"}
                    className={`flex gap-2 items-center px-2 w-[95%] ${
                      location.pathname ===
                      "/monitoring/production/Volume"
                        ? "bg-white bg-opacity-30 rounded-lg h-9"
                        : ""
                    }`}
                  >
                    <img src={ArrowCircle} alt="" className="h-4" />
                    <p>Production</p>
                    {location.pathname ===
                      "/monitoring/production/Volume" && (
                      <div
                        className="h-7 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                        style={{
                          position: "absolute",
                          right: "0px",
                        }}
                      ></div>
                    )}
                  </Link>
                  <Link
                    to={""}
                    className={`flex gap-2 items-center px-2 w-[95%] ${
                      location.pathname === "/monitoring/agency"
                        ? "bg-white bg-opacity-30 rounded-lg h-9"
                        : ""
                    }`}
                  >
                    <img src={ArrowCircle} alt="" className="h-4" />
                    <p>Agency</p>
                    {location.pathname === "/monitoring/agency" && (
                      <div
                        className="h-7 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                        style={{
                          position: "absolute",
                          right: "0px",
                        }}
                      ></div>
                    )}
                  </Link>
                  <Link
                    to={""}
                    className={`flex gap-2 items-center px-2 w-[95%] ${
                      location.pathname === "/monitoring/watchlist"
                        ? "bg-white bg-opacity-30 rounded-lg h-9"
                        : ""
                    }`}
                  >
                    <img src={ArrowCircle} alt="" className="h-4" />
                    <p>Watchlist</p>
                    {location.pathname === "/monitoring/watchlist" && (
                      <div
                        className="h-7 w-[7px] bg-white rounded-tl-xl rounded-bl-xl "
                        style={{
                          position: "absolute",
                          right: "0px",
                        }}
                      ></div>
                    )}
                  </Link>
                </div>
              </>
            )} */}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </aside>

        <div className="lg:ml-[198px] bg-white">
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
