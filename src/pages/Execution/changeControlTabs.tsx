import React from "react";
import "./customTabs.css";
import "./changeControl.scss";

const ChangeControlTabs: React.FC = () => {
  return (
    <div className="flex items-center mb-5 ml-3 mt-3 changesControlTab tabs">
      <div className="font-['Calibri' !important] text-[17px] font-normal flex justify-center items-center"><p>Requested</p></div>
      <div className="font-normal font-['Calibri' !important] text-[17px]  flex justify-center items-center pending_tabtext"><p>Pending</p></div>
      <div className="font-normal font-['Calibri' !important] text-[17px]  flex justify-center items-center"><p>Approved</p></div>
    </div>
  );
};

export default ChangeControlTabs;
