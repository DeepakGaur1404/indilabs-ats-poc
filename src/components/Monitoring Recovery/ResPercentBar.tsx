import React from "react";
import HotspotBarArrow from "../../assets/images/HotspotBarArrow.svg";

interface HotspotData {
    start: number;
    end: number;
    current: number;
  }
  
  interface Hotspot {
    [key: string]: HotspotData;
  }
 
  interface selectedBenchmarkprops {
    selectedBenchmarkCategory: any
}
  
  const hotspot: Hotspot = {
    Pre_Due: {
      start: 70,
      end: 90,
      current: 75,
    },
    Early_Stage: {
      start: 45,
      end: 60,
      current: 50,
    },
    Late_Stage: {
      start: 5,
      end: 15,
      current: 8,
    },
    Write_Offs: {
      start: 70,
      end: 90,
      current: 75,
    },
  }

const ResPercentBar: React.FC<selectedBenchmarkprops> =  ({ selectedBenchmarkCategory }) => {
  const { start, end, current } = hotspot[selectedBenchmarkCategory];
  const arrowPosition = `${((current - start) / (end - start)) * 100}%`;

  return (
    <div className="flex justify-between">
      <div className="w-[100%] shadow bg-[white] flex items-center rounded-lg py-[6px] px-4 justify-between">
        <p className="text-[black] font-['DM Sans'] font-[400] text-[14px] leading-[18.23px]">
          Res%
        </p>
        <div className="w-[270px] -mt-[2px] flex-col justify-center items-start inline-flex">
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
                {start.toFixed(0)}%
              </div>

              {current && (
                <img
                  src={HotspotBarArrow}
                  className="ml-1 z-10 mt-2 h-[8px] w-[8px] text-[#ffffff]"
                  style={{
                    margin: "2px",
                    position: "absolute",
                    top: "14px",
                    left: arrowPosition,
                  }}
                  alt="Arrow"
                />
              )}
            </div>
          </div>

          <div className="w-full h-[18px] relative">
            <div
              className="text-black text-[11px] font-[400] font-['DM Sans'] absolute right-1"
              style={{ top: "-20px", textAlign: "right" }}
            >
              {end.toFixed(0)}%
            </div>
            <div className="w-full -mt-[4px] h-2 top-[2px] absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />

            <div
              className={`text-black text-[11px] font-[400] mt-1 font-['DM Sans']`}
              style={{
                position: "absolute",
                left: arrowPosition,
              }}
            >
              {current.toFixed(0)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResPercentBar;