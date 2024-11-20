import Button from "../../../components/Button";
import DashboardHeader from "../../../components/DshboardHeader/DashboardHeader";
// import DailyWorkableLine from "../../../components/Monitoring/DailyWorkableLine";
import SubTabs from "../../../components/SubTabs/SubTabs";
// import WorkableVolume from "../../../components/Monitoring/WorkableVolume";
// import Sidebar from "../../../components/common/Sidebar";
import { Outlet } from "react-router-dom";
import WriteOffDoubleBarGraph from "./writeoffDoubleBarGraph";
import TemperatureGrapgh from "../../../components/Monitoring/TemperatureGrapgh";
import "../Monitoring.scss";
import Map from "../../../components/Map/map";
import { useNavigate} from "react-router-dom";
type Props = {};

const Writeoffs = (props: Props) => {
  let navigate = useNavigate();
  const reviewHotspots = () => {};

  const toolTipData = () => {
    return (
      <div className="w-[auto]  flex flex-col p-4  gap-2 font-calibri  ">
        <span>Write Off: $85m</span>
        <span>Recovery: $22m</span>
        <span>MRR: 26%</span>
        <span>Target MRR: 28%</span>
      </div>
    );
  };

  return (
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="w-[100%] px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5">
        <DashboardHeader />
      </div>
      {/* <div className="w-[100%] px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-row justify-between items-center gap-5">
        <div>
          <div className="text-gray-500 text-xl font-medium font-['DM Sans'] border-2 pl-4 pr-4 pt-1 pb-1 rounded-md mb-1 ">
            WO Pool
          </div>
          <hr className="w-[50%] border-2 border-[#56478A] ml-2" />
        </div>
        <div className="w-[40%]">
          <TemperatureGrapgh />
        </div>
      </div> */}
      <div className="flex flex-wrap  items-start  justify-center gap-7 p-[6px] lg:px-[59px] mt-4 ml-3 bg-[#fafafb]">
        <div className="w-full  lg:flex-row flex items-center justify-between lg:gap-10 flex-wrap writeoffsBOs -mt-10">
          {/* <Outlet /> */}
          <WriteOffDoubleBarGraph />
          <Map toolTipData={toolTipData} />
        </div>

        <div className="w-full flex items-center justify-end gap-5 mt-8">
          <button onClick={() => navigate(-1)} className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium ">
            Back
          </button>
          <Button
            onClick={reviewHotspots}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Review Hotspots
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Writeoffs;
