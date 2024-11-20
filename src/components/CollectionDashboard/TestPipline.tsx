import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

function TestPipline({}: Props) {
  return (
    <>
      <div className="w-full h-[354px] p-3 bg-white rounded-xl shadow-md flex-col justify-start items-start gap-1 inline-flex">
        <div className="w-full h-7 justify-between items-center gap-2 inline-flex">
          <div className="text-black text-sm font-medium">Test Pipeline</div>
          <button className="flex text-[#6750a4] items-center text-xs justify-center gap-2">
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] w-4 h-4" />
            </span>
          </button>
        </div>
        <div className="w-full h-[42px] p-3 bg-white border-b border-gray-100 justify-between items-start gap-1 inline-flex">
          <div className="w-[45px] text-gray-400 text-[9px] font-normal leading-[13.50px]">
            Strategy
          </div>
          <div className="w-10 text-center text-gray-400 text-[9px] font-normal leading-[13.50px]">
            Distr
          </div>
          <div className="w-10 h-[18px] text-center text-gray-400 text-[9px] font-normal leading-[13.50px]">
            KPI
          </div>
          <div className="text-center text-gray-400 text-[9px] font-normal leading-[13.50px]">
            Champion
          </div>
          <div className="w-[45px] text-center text-gray-400 text-[9px] font-normal leading-[13.50px]">
            Challenger
          </div>
        </div>
        <div className="w-full h-[63px] px-3 bg-white border-b border-gray-100 justify-between items-center  inline-flex">
          <div className="w-[45px] text-gray-900 text-[10px] font-normal leading-[15px]">
            Self Cure
          </div>
          <div className="w-10 text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            15
          </div>
          <div className="w-[43px] text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            Cure%
          </div>
          <div className="w-10 text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            65%
          </div>
          <div className="h-[19px] px-1 py-0.5 bg-emerald-500 rounded-sm justify-between items-center gap-2.5 flex">
            <div className="text-center text-white text-[10px] font-medium leading-[15px]">
              68%
            </div>
          </div>
        </div>

        <div className="w-full h-[63px] px-3 bg-white border-b border-gray-100 justify-between items-center  inline-flex">
          <div className="w-[45px] text-gray-900 text-[10px] font-normal leading-[15px]">
            Contact
          </div>
          <div className="w-10 text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            20
          </div>
          <div className="w-[43px] text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            1-2 Flow%
          </div>
          <div className="w-10 text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            35%
          </div>
          <div className="h-[19px] px-1 py-0.5 bg-emerald-500 rounded-sm justify-between items-center gap-2.5 flex">
            <div className="text-center text-white text-[10px] font-medium leading-[15px]">
              30%
            </div>
          </div>
        </div>
        <div className="w-full h-[63px] px-3 bg-white border-b border-gray-100 justify-between items-center  inline-flex">
          <div className="w-[45px] text-gray-900 text-[10px] font-normal leading-[15px]">
            Skip/NC
          </div>
          <div className="w-10 text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            6
          </div>
          <div className="w-[46px] text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            Contact%
          </div>
          <div className="h-[19px] px-1 py-0.5 bg-emerald-500 rounded-sm justify-between items-center gap-2.5 flex">
            <div className="text-center text-white text-[10px] font-medium leading-[15px]">
              25%
            </div>
          </div>
          <div className="w-10 text-center text-gray-900 text-xs font-normal leading-[18px]">
            20%
          </div>
        </div>
        <div className="w-full h-[63px] px-3 bg-white border-gray-100 justify-between items-center  inline-flex">
          <div className="w-[45px] text-gray-900 text-[10px] font-normal leading-[15px]">
            Agency
          </div>
          <div className="w-10 text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            13
          </div>
          <div className="w-[51px] text-center text-gray-900 text-[10px] font-normal leading-[15px]">
            Payment%
          </div>
          <div className="h-[19px] px-1 py-0.5 bg-yellow-400 rounded-sm justify-between items-center gap-2.5 flex">
            <div className=" text-center text-white text-[10px] font-bold leading-[15px]">
              20%
            </div>
          </div>
          <div className="w-10 text-center text-gray-900 text-xs font-normal leading-[18px]">
            18%
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPipline;
