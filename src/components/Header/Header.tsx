import React, { useEffect, useState } from "react";
import Ellipse from "../../assets/images/Ellipse 2.svg";
import Bell from "../../assets/icons/bell.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import SentinelImage from "../../assets/images/Sentinel.svg";
import DyanamoImage from "../../assets/images/Dynamo.svg";
import OptiumsImage from "../../assets/images/NewOptimus.svg";

type Props = {
  // moduleNameShow: any;
  // setmoduleNameShow: any;
  moduleName: any;
  setmoduleName: any;
};

const Header = ({
  // moduleNameShow,
  // setmoduleNameShow,
  moduleName,
  setmoduleName,
}: Props) => {
  const [pageName, setPageName] = useState("");
  const [logo, setlogo] = useState<any>();
  // const [moduleName, setmoduleName] = useState("Collection");
  const [profileUsername, setProfileUsername] = useState<any>();
  const [pathName] = useState(window.location.pathname);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const pathName = location.pathname;
    if (pathName === "/home/recovery") {
      setPageName("Home");
      setlogo(null);
    } else if (pathName === "/monitoring") {
      setPageName("Risk Monitoring");
    } else if (pathName === "/monitoring/recovery") {
      setPageName("Monitoring");
      setlogo(SentinelImage);
    } else if (pathName === "/monitoring/recovery/portfolio") {
      setPageName("Portfolio");
      setlogo(SentinelImage);
    } else if (pathName === "/monitoring/recovery/location") {
      setPageName("Performance");
      setlogo(SentinelImage);
    } else if (pathName === "/monitoring/recovery/distribution") {
      setPageName("Distribution");
      setlogo(SentinelImage);
    } else if (pathName === "/monitoring/recovery/vintage") {
      setPageName("Retention");
      setlogo(SentinelImage);
    } else if (pathName === "/monitoring/recovery/placement") {
      setPageName("Placement");
      setlogo(SentinelImage);
    } else if (pathName === "/monitoring/recovery/agency") {
      setPageName("Agency");
      setlogo(SentinelImage);
    } else if (pathName === "/monitoring/recovery/settlement/new-settlement") {
      setPageName("New Settlement");
      setlogo(SentinelImage);
    } else if (pathName === "/monitoring/recovery/settlement/settlement-pool") {
      setPageName("Settlement Pool");
      setlogo(SentinelImage);
    } else if (pathName === "/monitoring/recovery/settlement/cohort") {
      setPageName("Cohort");
      setlogo(SentinelImage);
    } else if (pathName.startsWith("/monitoring/recovery")) {
      setPageName("Dashboard");
    } else if (pathName === "/diagnostics/recovery") {
      setPageName("Diagnostics");
      setlogo(DyanamoImage);
    } else if (pathName === "/diagnostics") {
      setPageName("Diagnostics");
    } else if (pathName === "/strategy") {
      setPageName("Strategy");
    } else if (pathName === "/strategy/recovery") {
      setPageName("Strategy");
      setlogo(DyanamoImage);
    } else if (pathName === "/strategy/toolBox") {
      setPageName("Strategy");
    } else if (pathName === "/strategy/treatment") {
      setPageName("Startegy Performance");
    } else if (pathName === "/strategy/performance") {
      setPageName("Strategy Performance");
      setlogo(DyanamoImage);
    } else if (pathName === "/agency/strategy/recovery") {
      setPageName("Agency");
      setlogo(DyanamoImage);
    } else if (pathName === "/offer/strategy/recovery") {
      setPageName("Offer");
      setlogo(DyanamoImage);
    } else if (
      pathName === "/strategy/allocationEngine/reviewPerformance/recovery"
    ) {
      setPageName("Review Performance");
      setlogo(DyanamoImage);
    } else if (pathName === "/strategy/reviewExecution") {
      setPageName("Treatments");
      setlogo(DyanamoImage);
    } else if (pathName === "/execution") {
      setPageName("Execution");
    } else if (pathName === "/execution/recovery") {
      setPageName("Execution");
      setlogo(OptiumsImage);
    } else if (pathName === "/data") {
      setPageName("Data");
    } else if (pathName === "/dashboard") {
      setPageName("Dashboard");
    } else if (pathName === "/dashboard/recovery") {
      setPageName("Dashboard");
      setlogo(null);
    } else if (pathName === "/strategy/allocationEngine") {
      setPageName("Agency Allocation");
    } else if (pathName === "/strategy/changeControl") {
      setPageName("Change Control");
    } else if (pathName === "/strategy/optimization") {
      setPageName("Optimisation");
    } else if (pathName === "/monitoring/portfolio") {
      setPageName("Portfolio");
    } else if (pathName === "/monitoring/location") {
      setPageName("Bucket");
    } else if (pathName === "/monitoring/agency") {
      setPageName("Location");
    } else if (pathName === "/monitoring/writeoffs/Volume") {
      setPageName("Write Offs");
    } else if (pathName === "/monitoring/placements") {
      setPageName("Placements");
    } else if (pathName === "/monitoring/watchlist") {
      setPageName("Watchlist");
    }

    const LoginUsername = localStorage.getItem("username");
    setProfileUsername(LoginUsername);
  }, [location.pathname, moduleName]);

  const navigateToRecovery = async () => {
    //alert
    if (moduleName === "Collection") {
      alert("Redirecting to recovery module");
    } else {
      alert("Redirecting to collection module");
    }
    //navigation for Dashboard
    if (
      location.pathname === "/dashboard/recovery" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/dashboard");
    } else if (
      location.pathname === "/dashboard" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/dashboard/recovery");
    }

    //navigation for Diagnostics
    if (location.pathname === "/diagnostics" && moduleName === "Collection") {
      setmoduleName("Recovery");
      navigate("/diagnostics/recovery");
    } else if (
      location.pathname === "/diagnostics/recovery" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/diagnostics");
    }
    //navigation for statergy
    if (
      location.pathname === "/strategy/reviewExecution" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/strategy/recovery");
    } else if (
      location.pathname === "/strategy" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/strategy/recovery");
    } else if (
      location.pathname === "/strategy/recovery" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/strategy");
    } else if (
      location.pathname === "/strategy/simulationengine/recovery" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/strategy");
    } else if (
      location.pathname === "/strategy/reviewExecution" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/strategy/recovery");
    } else if (
      location.pathname === "/strategy/allocationEngine/reviewPerformance" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/strategy/recovery");
    } else if (
      location.pathname === "/strategy/reviewExecution/recovery" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/strategy");
    }
    // For Monitoring
    if (location.pathname === "/monitoring" && moduleName === "Collection") {
      setmoduleName("Recovery");
      navigate("/monitoring/recovery");
    } else if (
      location.pathname === "/monitoring/recovery" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/monitoring");
    }

    if (
      location.pathname === "/monitoring" ||
      location.pathname === "/monitoring/portfolio" ||
      location.pathname === "/monitoring/location" ||
      location.pathname === "/monitoring/agency" ||
      location.pathname === "/monitoring/watchlist" ||
      location.pathname === "/monitoring/writeoffs/Volume" ||
      location.pathname === "/monitoring/placements"
    ) {
      setmoduleName("Recovery");
      navigate("/monitoring/recovery");
    } else if (
      location.pathname === "/monitoring/recovery" ||
      location.pathname === "/monitoring/recovery/portfolio" ||
      location.pathname === "/monitoring/recovery/location" ||
      location.pathname === "/monitoring/recovery/vintage" ||
      location.pathname === "/monitoring/recovery/placement" ||
      location.pathname === "/monitoring/recovery/agency" ||
      location.pathname === "/monitoring/recovery/settlement"
    ) {
      setmoduleName("Collection");
      navigate("/monitoring");
    }

    //for Recovery portfolio

    if (
      location.pathname === "/monitoring/portfolio" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/monitoring/recovery/portfolio");
    } else if (
      location.pathname === "/monitoring/recovery/portfolio" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/monitoring/portfolio");
    }

    //for (c)Bucket/(r)Performance
    if (
      location.pathname === "/monitoring/location" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/monitoring/recovery/location");
    } else if (
      location.pathname === "/monitoring/recovery/location" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/monitoring/location");
    }
    //for Location/Location
    if (
      location.pathname === "/monitoring/agency" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/monitoring/recovery/vintage");
    } else if (
      location.pathname === "/monitoring/recovery/vintage" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/monitoring/agency");
    }

    //for (c)Write off/ (r)Placement
    if (
      location.pathname === "/monitoring/placements" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/monitoring/recovery/placement");
    } else if (
      location.pathname === "/monitoring/recovery/placement" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/monitoring/placements");
    }

    //for (c)writeoffs/Volume/(r)Agency
    if (
      location.pathname === "/monitoring/writeoffs/Volume" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/monitoring/recovery/agency");
    } else if (
      location.pathname === "/monitoring/recovery/agency" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/monitoring/writeoffs/Volume");
    }

    //for (c)Placement/(r)
    if (
      location.pathname === "/monitoring/watchlist" &&
      moduleName === "Collection"
    ) {
      setmoduleName("Recovery");
      navigate("/monitoring/recovery/settlement");
    } else if (
      location.pathname === "/monitoring/recovery/settlement" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/monitoring/watchlist");
    }

    //navigation for execution
    if (location.pathname === "/execution" && moduleName === "Collection") {
      setmoduleName("Recovery");
      navigate("/execution/recovery");
    } else if (
      location.pathname === "/execution/recovery" &&
      moduleName === "Recovery"
    ) {
      setmoduleName("Collection");
      navigate("/execution");
    }
  };

  return (
    <>
      <div className="w-full flex bg-neutral-50 justify-between items-center  mainHeaderWrapper">
        <h1
          className={`text-3xl font-bold px-1 py-2 ${
            location.pathname !== "/home" &&
            location.pathname !== "/strategy" &&
            location.pathname !== "/strategy/optimization" &&
            location.pathname !== "/strategy/allocationEngine" &&
            location.pathname !== "/strategy/changeControl" &&
            `ml-6`
          }`}
        >
          {pageName}
        </h1>
        {/* {location.pathname === "/home" || location.pathname === "/data" ? (
          ""
        ) : (
          <div
            className=" h-[37px] px-1 py-1 lg:px-3 lg:py-2 rounded-lg border border-[#5C4E8E] justify-center items-center gap-2.5 inline-flex 
          tabsectionHeader"
          >
            <p
              className="text-[#000000] text-[12px] font-[400] lg:text-[16px] 
            font-['DM Sans'] p-0 m-0  tracking-tight "
            >
              {moduleName}
            </p>
            <span className="border-r border-[#D9D4E7] mx-2 h-5"></span>
            <button
              className="text-[#5C4E8E] font-['DM Sans'] text-xs lg:text-[14px] font-[500] tracking-tight"
              onClick={navigateToRecovery}
            >
              Change
            </button>
          </div>
        )} */}
        <div className="justify-end p-8  items-center gap-11 flex h-24 leftContainHeader">
          <div className="justify-start items-center gap-2 lg:gap-4 flex">
            {/* <div className="flex border-e gap-x-5 pe-5 me-5 iconHeader">
              <img src={SearchIcon} alt="" />
              <img src={Bell} alt="" />
            </div> */}

            <div className="flex justify-start items-center items-end gap-[12px] inline-flex profileIConHeader">
              <div className="nameHeader">
                <div className="text-black text-sm lg:text-base font-medium">
                  <img src={logo} alt="" />
                </div>
                <p className="text-gray-400 text-xs lg:text-sm font-normal">
                  {}
                </p>
              </div>
              {/* <img className="w-10 h-10 rounded-full" src={Ellipse} alt="" />  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
