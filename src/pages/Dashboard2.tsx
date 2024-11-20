import React from "react";

import Cards from "../components/Cards/Cards";
import DashboardHeader from "../components/DshboardHeader/DashboardHeader";

type Props = {};

const Dashboard2 = (props: Props) => {
  return (
    <>
    <div style={{height: '100vh', width: '100%' }}>
    <div>
        <DashboardHeader />
      </div>

      <div >
        {/* <Cards /> */}
      </div>
    </div>
     
    </>
  );
};

export default Dashboard2;
