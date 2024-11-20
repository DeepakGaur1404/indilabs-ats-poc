import React, { useState } from "react";
// import Sidebar from "../../components/common/Sidebar";

const AllocationButtons: React.FC<{
  activeButton: string;
  setActiveButton: (value: string) => void;
}> = (props) => {
  const Buttons = [
    { id: "all", label: "All" },
    { id: "credit_card", label: "Cards" },
    { id: "home_loan", label: "Loans" },
    { id: "auto_loan", label: "Auto" },
    { id: "personal_loan", label: "BNPL" },
  ];

  const handleButtonClick = async (buttonId: string) => {
    props.setActiveButton(buttonId);
  };

  return (
    <div className="ml-5 flex flex-col gap-7">
      {Buttons.map((button, index) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          className={`w-[130px] font-medium text-[21px] text-[#7f7f7f] font-['calibri' !important] border-2 border-[#BFBFBF] rounded-md pt-3 pb-3 cursor-pointer ${
            props.activeButton === button.id
              ? " bg-[#DED6FF] text-[#404040] "
              : "bg-white"
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default AllocationButtons;
