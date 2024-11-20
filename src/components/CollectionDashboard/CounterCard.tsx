import React from "react";
import Shift from "../../assets/icons/shift.svg";
import DownShift from '../../assets/icons/down-shift.png'

type Props = {data:any};

function CounterCard({data}: Props) {
  return (
    <div className="w-full h-[116px] px-3 py-2 bg-white rounded-xl shadow-md flex-col justify-start items-center gap-1 inline-flex">
      <div className="flex-col justify-center items-center flex">
        <div className={`${data.clr} text-[32px] font-medium`}>{data.a1}</div>
        <div className="text-black text-sm font-medium h-4">{data.a2}</div>
      </div>
      <div className="justify-start items-center gap-1 inline-flex">
        {data.a3>0 ? <img src={Shift} alt="" />:<img src={DownShift} alt="" /> }
        <div className="text-black text-[10px] font-normal tracking-tight">
          {data.a3} vs Last Month
        </div>
      </div>
      <div className="text-gray-400 text-xs font-normal leading-[18px] tracking-tight">
      {data.a4}
      </div>
    </div>
  );
}

export default CounterCard;
