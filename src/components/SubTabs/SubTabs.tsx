import React, { useState } from "react";
import { Link } from "react-router-dom";
import filterIcon from "../../assets/icons/filter_alt.svg";
import arrow from "../../assets/images/arrow.png";

type Props = {
  isDropDown: boolean;
  tabs: any[];
  page?: string;
};

const SubTabs = (props: Props) => {
  const getActiveTab = () => {
    if (props.page === "distribution") {
      return "Risk Tier";
    } else {
      return props.tabs[0];
    }
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const getSelectedValueForFrequency = () => {
    if (props.page === "distribution") {
      return "Monthly";
    } else if (props.page === "performance") {
      return "Daily";
    }
  };

  const getSelectedValueForKPI = () => {
    if (props.page === "distribution") {
      return "Avg.Balance";
    } else if (props.page === "performance") {
      return "Liquidation";
    }
  };

  return (
    <div className="w-full h-82 flex-col justify-start items-start gap-2 inline-flex mt-9">
      <div
        className={`self-stretch justify-between items-center lg:gap-10 inline-flex -mb-10 ${
          props.page === "performance" || "distribution" ? "" : ""
        }`}
      >
        <div className="justify-start items-start gap-10 flex relative -mt-4">
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="justify-start items-center gap-5 flex mb-4 " >
              {props.tabs.map((tab: string) => (
                <Link
                  key={tab}
                  to=''  // removed to={tab}
                  //  onClick={() => handleTabClick(tab)}
                  className={`text-base font-medium font-['DM Sans'] 
                  ${
                    // activeTab === tab
                      // ?
                       "text-[#7F7F7F]"
                        // border-[#5A4C8D] border-b-2 py-2 w-9 
                      // :
                      //  "text-[#7F7F7F] "
                  }
                  `}
                >
                  {tab}
                </Link>
              ))}
            </div>
            {/* <hr className="w-[62vw] mt-[-10px]"/> */}
          </div>
        </div>
        {(props.page === "performance" ||
          props.page === "production" ||
          props.page === "distribution") && (
          <div className="px-3 py-2 bg-white rounded-lg shadow justify-start items-center gap-2 flex self-end mb-[-8px]">
            <div className="ExpectedFlowToCollections text-black text-sm font-medium">
              Expected Flow to Collections:
            </div>
            <div className="69m text-black text-sm font-normal">$69M</div>
          </div>
        )}
      </div>
      {props.isDropDown && (
        <div className=" justify-start items-center gap-8 inline-flex mt-2">
          <div className=" justify-start items-center gap-2 flex">
            <div className="FilterAlt w-6 h-6 relative">
              <img src={filterIcon} alt="filter" />
            </div>
            <div className=" justify-start items-center gap-2 flex">
              <div className="Frequency text-center text-black text-base font-medium leading-normal">
                Frequency
              </div>
              <div className=" relative text-slate-500 ">
                <select
                  className="text-center rounded-lg h-10 w-28 flex items-center justify-between appearance-none select-none bg-inherit"
                  defaultValue={getSelectedValueForFrequency()}
                >
                  <option className="h-8 w-full" value="Daily">
                    Daily
                  </option>
                  <option className="h-8 w-full" value="Weekly">
                    Weekly
                  </option>
                  <option className="h-8 w-full" value="Monthly">
                    Monthly
                  </option>
                </select>
                {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <img src={arrow} className="h-4 w-4" alt="" />
                </div> */}
              </div>
            </div>
          </div>
          <div className=" justify-start items-center gap-2 flex">
            <div className="Bucket text-center text-base font-medium leading-normal">
              Bucket
            </div>
            <div className="  relative text-slate-500 ">
              <select className="text-center rounded-lg h-10 w-[82px] flex items-center justify-between appearance-none select-none bg-inherit">
                <option className="h-8 w-full" value="Daily">
                  B1
                </option>
                <option className="h-8 w-full" value="Weekly">
                  B2
                </option>
                <option className="h-8 w-full" value="Monthly">
                  B3
                </option>
              </select>
              <div className="Arrow w-6 h-6 left-[72px] top-[8px] absolute" />
            </div>
          </div>
          {props.page === "production" ? (
            ""
          ) : (
            <div className=" justify-start items-center gap-2 flex">
              <div className="Kpi text-center text-black text-base font-medium leading-normal">
                KPI
              </div>
              <div className="w-2 relative text-slate-500 ">
                <select
                  className="text-center rounded-lg h-10 w-36 flex items-center justify-between appearance-none select-none bg-inherit"
                  defaultValue={getSelectedValueForKPI()}
                >
                  <option className="h-8 w-full" value="Daily">
                    Liquidation
                  </option>
                  <option className="h-8 w-full" value="Liquidation">
                    Liquidation
                  </option>
                  <option className="h-8 w-full" value="Avg.Balance">
                    Avg.Balance
                  </option>
                </select>
                <div className="Arrow w-6 h-6 left-[72px] top-[8px] absolute" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubTabs;