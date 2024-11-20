import Button from "../../../components/Button";
import DashboardHeader from "../../../components/DshboardHeader/DashboardHeader";
import TemperatureGrapgh from "../../../components/Monitoring/TemperatureGrapgh";
import PaidNotPaid from "../../../components/Monitoring/PaidNotPaid";
import Map from "../../../components/Map/map";

import greenImage from "../../../assets/images/greenLarge1.png";
import OfftrackImage from "../../../assets/images/orange.png";
import { useNavigate} from "react-router-dom";
type Props = {};

const Placements = (props: Props) => {
  let navigate = useNavigate();
  const reviewHotspots = () => {};

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
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="w-[100%] px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5">
        <DashboardHeader />
      </div>
      {/* <div className="w-[100%] px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-row justify-between items-center gap-5 -mt-7">
          <div className="text-gray-500 text-xl font-medium font-['DM Sans'] border-2 pl-4 pr-4 pt-1 pb-1 rounded-md ">
            WO Pool
          </div>
          <div className="w-[40%]">
          <TemperatureGrapgh />
          </div>
      </div> */}
      <div className="flex flex-wrap  items-start  justify-center gap-7 p-[6px] lg:px-[59px] mt-4 ml-2 bg-[#fafafb]">
        <div className="w-full flex-col lg:flex-row flex items-center justify-start lg:gap-11 flex-wrap -mt-10 writeoffsBOs">
          <PaidNotPaid />
          <Map toolTipData={toolTipData} />
        </div>
      </div>
    </div>
  );
};

export default Placements;
