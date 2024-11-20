import React from "react";

const ApprovalHeirarchy: React.FC = () => {
  return (
    <div className="w-[100%] px-4 py-3 border-2 border-gray-200  rounded-xl flex flex-col lg:w-[47%]">

        <h1 className="text-[#000000] text-[24px] font-medium font-['Calibri' !important]">Approval Hierarchy</h1>
        <div className="mt-10 ml-5 text-gray-500 ">
        <p className="mb-4 text-[#7f7f7f] text-[19px] font-medium font-['Calibri' !important] ">Level 2 : Department head</p>
        <p  className="mb-4 text-[#7f7f7f] text-[19px] font-medium font-['Calibri' !important] ">Level 1 : Immediate supervisor</p>
        </div>
    </div>
  );
};

export default ApprovalHeirarchy;
