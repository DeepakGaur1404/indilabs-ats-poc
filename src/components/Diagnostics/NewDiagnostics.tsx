import { IoMdArrowDropup } from "react-icons/io";
import HotspotBarArrow from "../../assets/images/HotspotBarArrow.svg";
const hotspot = {
  start: 0.5,
  end: 0.9,
  current: 0.6,
};

const arrowPosition = `${
  ((hotspot.current - hotspot.start) / (hotspot.end - hotspot.start)) * 100
}%`;

const NewDiagnostics = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="w-[97%] shadow bg-[white] flex items-center rounded-lg py-1 px-5 justify-between">
          <p className="text-[black] font-['DM Sans'] font-[400] text-[14px] leading-[18.23px]">
            Rec%
          </p>
          <div className="w-[270px] -mt-[2px] flex-col justify-center items-start inline-flex ">
            <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
              <div className="flex w-full h-[18px] relative">
                <div
                  className="text-black text-[11px] font-[400] font-['DM Sans']"
                  style={{
                    position: "absolute",
                    left: "0",
                    marginLeft: "5px",
                  }}
                >
                  {hotspot.start.toFixed(1)}%
                </div>

                {hotspot.current && (
                  <img
                    src={HotspotBarArrow}
                    className="ml-1 z-10 mt-2 h-[8px] w-[8px] text-[#ffffff]"
                    style={{
                      margin: "2px",
                      position: "absolute",
                      top: "14px",
                      left: arrowPosition,
                    }}
                  />
                )}
              </div>
            </div>

            <div className="w-full h-[18px] relative">
              <div
                className="text-black text-[11px] font-[400] font-['DM Sans'] absolute right-1"
                style={{ top: "-20px", textAlign: "right" }}
              >
                {hotspot.end.toFixed(1)}%
              </div>
              <div className="w-full -mt-[4px] h-2 top-[2px] absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />

              <div
                className={`text-black text-[11px] font-[400] mt-1 font-['DM Sans']`}
                style={{
                  position: "absolute",
                  left: arrowPosition,
                  // marginLeft: "5px",
                }}
              >
                {hotspot.current.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-[white] shadow w-max rounded-lg py-3 px-8 flex items-center">
          <p className="text-[black] font-['DM Sans'] font-[400] text-[16px] leading-[20.83px]">
            Accuracy Checker
          </p>
        </div> */}
      </div>
    </>
  );
};

export default NewDiagnostics;
