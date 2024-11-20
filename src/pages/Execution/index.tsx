import React from "react";
// import Sidebar from "../../components/common/Sidebar";
import ChangeProposal from "./changeProposal";
import ApprovalHeirarchy from "./aprovalHierarchy";
import ChangeControlTabs from "./changeControlTabs";

import { useNavigate } from "react-router-dom";

const Strategy: React.FC = () => {
  const navigate = useNavigate();

  const navigateToAllocation = () => {
    navigate("/strategy/allocationEngine");
  };

  return (
    <div className="flex flex-col border-2 border-gray-200  rounded-xl p-3 ml-4">
      <ChangeControlTabs />
      <div className="w-[100%] flex justify-start gap-3 flex-wrap">
        <ChangeProposal />
        <ApprovalHeirarchy />
      </div>
      <button
        onClick={navigateToAllocation}
        className="self-end bg-[#56478A] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl mr-4 mt-3"
      >
        Return to Allocation
      </button>
    </div>
  );
};

export default Strategy;
