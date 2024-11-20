import PaidNotPaid from "../../../components/Monitoring/PaidNotPaid";
import Map from "../../../components/Map/map";
import Sidebar from "../../../components/common/Sidebar"

import greenImage from "../../../assets/images/greenLarge1.png";
import OfftrackImage from "../../../assets/images/orange.png";
import MonitoringRecoverySubtabsDashboardHeader from "../../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
import Button from "../../../components/Button";
import { useState } from "react";
import MonitoringCollectionDashboardHeader from "../../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
import { useNavigate } from "react-router-dom";
import CustomizeBarScatterPlacementChart from "../../../components/Monitoring Recovery/CustomizeBarScatterPlacementChart";
type Props = {};

const subCategories = [
  { id: "All", name: "All" },
  { id: "MUM", name: "Mum" },
  { id: "DEL", name: "Del" },
  { id: "BLR", name: "Blr" },
  { id: "PUN", name: "Pun" },
  { id: "HYD", name: "Hyd" },
  { id: "KOL", name: "Kol" },
  { id: "Others", name: "Others" },
];

const PlacementRecovery = (props: Props) => {
  // const reviewHotspots = () => {};
  const [selectedCategory, setselectedCategory] = useState("location");
  const [selectedSubCategory, setselectedSubCategory] = useState("All");
  let navigate = useNavigate();
  const handleSubCategoryClick = async (cityId: string) => {
    setselectedSubCategory(cityId);
  };

  // const handleCategoryClick = async (cityId: string) => {
  //   setselectedCategory(cityId);
  // };
  const toolTipData = () => {
    return (
      <div className="w-[180px]   flex flex-col px-4 py-4 rounded-2xl ">
        {[
          { name: "On track", id: 1, image: greenImage },
          { name: "On track", id: 2, image: greenImage },
          { name: "Off track", id: 3, image: OfftrackImage },
          { name: "On track", id: 4, image: greenImage },
          { name: "On track", id: 5, image: greenImage },
        ].map((data) => (
          <span className="flex justify-start items-center gap-2 mb-2">
            <span>DCA{data.id}</span>
            <span className="flex justify-start items-center gap-1">
              <img src={data.image} alt="track" className="w-4 h-4" />
              <span>{data.name}</span>
            </span>
          </span>
        ))}
      </div>
    );
  };

  return (
    // <div className="CommonBodyWrap bg-[#fafafb]">
    //   <div className="w-[100%] px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5">
    //     <MonitoringCollectionDashboardHeader />
    //   </div>

    //   {selectedCategory === "location" && (
    //     <div className="flex mt-50">
    //       <div className=" flex ml-[5%] mt-7 justify-between  rounded-xl">
    //         {subCategories.map((city, index) => (
    //           <div
    //             key={city.id}
    //             onClick={() => handleSubCategoryClick(city.id)}
    //             className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
    //               selectedSubCategory === city.id
    //                 ? " bg-[#E8DEF8] "
    //                 : "bg-[#fafafb]"
    //             } ${index === 0 ? "rounded-l-[4px]" : ""} ${
    //               index === subCategories.length - 1 ? "rounded-r-[4px]" : ""
    //             }`}
    //           >
    //             {city.name}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   )}

    //   <div className="flex flex-wrap  items-start  justify-center gap-2 p-[6px] lg:px-[59px] mt-4 ml-2 bg-[#fafafb]">
    //     <div className="w-full flex-col lg:flex-row flex items-center justify-start lg:gap-4 flex-wrap -mt-10 writeoffsBOs">
    //       <PaidNotPaid />
    //       {/* <Map toolTipData={toolTipData} /> */}
    //       <CustomizeBarScatterPlacementChart />
    //     </div>
    //   </div>

    //   <div className="w-full flex items-center justify-end gap-5 ml-[-50px] m-10">
    //     <button
    //       onClick={() => navigate(-1)}
    //       className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium "
    //     >
    //       Back
    //     </button>
    //     <Button
    //       // onClick={reviewHotspots}
    //       width="200px"
    //       height="40px"
    //       fontSize="14px"
    //       padding="5px"
    //       borderRadius="30px"
    //     >
    //       Review Hotspot
    //     </Button>
    //   </div>
    // </div>

    <div className="CommonBodyWrap">
    <div className="h-[80vh] flex items-center justify-center">
      <div className="bg-yellow-200 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-2">Work in Progress</h1>
        <p className="text-gray-700">This page is under construction.</p>
      </div>
    </div>
  </div>
  
  );
};

export default PlacementRecovery;
