import React from "react";
import DateRange from "./DateRange";
import Controls from "./Controls";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import "./strategy.scss";

const MainStrategy = () => {
  return (
    <div className="p-8 CommonBodyWrap">
      <DashboardHeader />
      <Controls />
    </div>
  );
};

export default MainStrategy;
