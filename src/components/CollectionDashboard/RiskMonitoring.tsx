import React from "react";
import GraphIcon from "../../assets/icons/Harvey Graph Balls.svg";
import FrameIcon from "../../assets/icons/Frame 214.svg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

type Props = {};

function RiskMonitoring({}: Props) {
  return (
    <>
      <div className="w-full h-[354px]  p-3 bg-white rounded-xl shadow-md flex-col justify-start items-start flex">
        <div className="w-full flex items-center h-7 justify-between  gap-2.5 mb-3 ">
          <h1 className="text-black text-sm font-medium ">Risk Monitoring</h1>

          <Link
            to="/monitoring"
            className="flex text-[#6750a4] items-center text-xs justify-center gap-2"
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] w-4 h-4 " />
            </span>
          </Link>
        </div>
        <div className="w-full flex items-center  p-3 bg-white border-t border-b border-gray-100 justify-between  ">
          <div className="w-[83px] text-gray-400 text-xs font-normal leading-[18px]">
            Metrics
          </div>
          <div className="w-[58px] text-center text-gray-400 text-xs font-normal leading-[18px]">
            Jul
          </div>
          <div className="w-[58px] text-center text-gray-400 text-xs font-normal leading-[18px]">
            Jun
          </div>
        </div>

        <div className="w-full flex items-center  px-3  bg-white border-b border-gray-100 justify-between  ">
          <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            Portfolio
          </div>

          <img src={FrameIcon} alt="" />

          <img src={GraphIcon} alt="" />
        </div>
        <div className="w-full flex items-center  px-3 bg-white border-b border-gray-100 justify-between ">
          <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            Performance
          </div>

          <img src={FrameIcon} alt="" />

          <img src={GraphIcon} alt="" />
        </div>
        <div className="w-full flex items-center  px-3 bg-white border-b border-gray-100 justify-between ">
          <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            Distribution
          </div>
          <img src={FrameIcon} alt="" />

          <img src={GraphIcon} alt="" />
        </div>
        <div className="w-full flex items-center  px-3 bg-white border-b border-gray-100 justify-between ">
          <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            Production
          </div>
          <img src={FrameIcon} alt="" />

          <img src={GraphIcon} alt="" />
        </div>
        <div className="w-full flex items-center  px-3 bg-white border-b border-gray-100 justify-between ">
          <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            Agency
          </div>
          <img src={FrameIcon} alt="" />

          <img src={GraphIcon} alt="" />
        </div>
        <div className="w-full flex items-center  px-3 bg-white border-gray-100 justify-between items-start">
          <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
            Watchlist
          </div>
          <img src={FrameIcon} alt="" />

          <img src={GraphIcon} alt="" />
        </div>
      </div>
    </>
  );
}

export default RiskMonitoring;
