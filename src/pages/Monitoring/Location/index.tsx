import React from "react";
import Sidebar from "../../../components/common/Sidebar";
import DashboardHeader from "../../../components/DshboardHeader/DashboardHeader";

import PaidNotPaid from "../../../components/Monitoring/PaidNotPaid";
import DailyCycleLiquidation from "../../../components/Monitoring/DailyCycleLiquidation";
import MaturationCurve from "../../../components/Monitoring/MaturationCurve";
import Button from "../../../components/Button";
import SubTabs from "../../../components/SubTabs/SubTabs";
import { Outlet } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import DCAVolumeSharePieChart from "../../../components/Monitoring/DCAVolumeSharePieChart";
import TemperatureGrapgh from "../../../components/Monitoring/TemperatureGrapgh";
import Map from "../../../components/Map/map";
import "./location.scss";

import greenImage from "../../../assets/images/greenLarge1.png";
import OfftrackImage from "../../../assets/images/orange.png";
import { useNavigate} from "react-router-dom";
const reviewHotspots = () => {};

const Location: React.FC = () => {
  let navigate = useNavigate();
  const toolTipData = () => {
    return (
      <div className="w-[150px]  flex flex-col px-4 py-4   z[999999]  ">
        {[
          { name: "On track", id: 1, image: greenImage },
          { name: "On track", id: 2, image: greenImage },
          { name: "Off track", id: 3, image: OfftrackImage },
          { name: "On track", id: 4, image: greenImage },
          { name: "Off track", id: 5, image: OfftrackImage },
        ].map((data) => (
          <span className="flex justify-start items-center gap-2 mb-2">
            <span>DCA{data.id}</span>
            <span className="flex justify-start items-center gap-1">
              <img src={data.image} alt="track" className="w-4 h-4" />
              <span>{data.name}</span>
            </span>
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="CommonBodyWrap">
        <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5 ">
          <DashboardHeader />

          {/* <div className="w-[70%] flex-col justify-center items-start inline-flex">
            <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
              <div className="justify-start items-start gap-9 flex">
                <div className="text-black text-sm font-medium font-['DM Sans']">
                  6%
                </div>
                <div className="text-black text-sm font-medium relative font-['DM Sans']">
                  4.2%
                  <IoMdArrowDropup
                    className="text text-xs absolute -bottom-6.5  left-1/2 transform -translate-x-1/2"
                    style={{
                      width: "0px",
                      height: "25px",
                    }}
                  />
                </div>
              </div>
              <div className="text-black text-sm font-medium font-['DM Sans']">
                3%
              </div>
            </div>
            <div className="w-full h-[18px] relative flex ">
              <div className="flex">
                <h1 className="mt-2">OverAll Health</h1>
                <div className="w-[40%] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl"></div>
              </div>
            </div>
          </div> */}
          <div className="w-[45%] self-stretch  rounded-lg justify-start items-center  flex rangeLocation shadow-md ">
            {/* <div className="w-full flex shadow-md gap-5"> */}
            {/* <div className="text-gray-500 text-xl font-medium font-['DM Sans'] w-[30%] p-3 bg-[white] ">
              Overall Health
            </div> */}
            {/* <TemperatureGrapgh />  */}
            {/* </div> */}
          </div>

          {/* <SubTabs
            isDropDown={true}
            page="performance"
            tabs={["Cycle", "Risk Tier", "MOB", "Channels", "Income"]}
          /> */}
        </div>
        <div className="flex flex-wrap  items-start  justify-center gap-7 p-[6px] lg:px-[59px] bg-[#fafafb] -mt-10">
          <div className="mainBodyLocation w-[100%] ml-1 xl:w-[48%]  flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            {/* <PaidNotPaid />
              <DailyCycleLiquidation /> */}
            <Outlet />
          </div>
          <Map toolTipData={toolTipData} />
          {/* <DCAVolumeSharePieChart/> */}
          {/* <div className="w-full"><MaturationCurve /></div> */}
          {/* <div className="w-full"><MaturationCurve /></div> */}
          <div className="w-full flex items-center justify-end gap-5 mt-5">
            <button  onClick={() => navigate(-1)} className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium ">
              Back
            </button>
            <Button
              onClick={reviewHotspots}
              width="200px"
              height="40px"
              fontSize="14px"
              padding="5px"
              borderRadius="30px"
            >
              Review Hotspots
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;