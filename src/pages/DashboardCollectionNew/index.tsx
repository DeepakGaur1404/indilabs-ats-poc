import React from "react";

type Props = {};

const DashboardCollectionNew = (props: Props) => {
  return (
    <div className="CommonBodyWrap">
      {/* {/ <Sidebar/> /} */}
      <div className="h-[80vh] flex items-center justify-center">
        <div className="bg-yellow-200 p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-2">Work in Progress</h1>
          <p className="text-gray-700">This page is under construction.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCollectionNew;
