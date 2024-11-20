import React, { useState, useEffect } from "react";
import { IoMdArrowDropup } from "react-icons/io";

type Bar = {
  start: number;
  end: number;
  current: number;
};

type Hotspot = {
  segment_name: string;
  bar: Bar;
};

interface HotspotExpandedProps {
  setDiagnostic: () => void;
  onSegmentSelect: (segmentName: string) => void;
}
const hotspotsData = [
  {
    segment_name: "MRR%",
    bar: {
      start: 1,
      end: 8,
      current: 3,
      higher_the_better: true,
    },
  },
  {
    segment_name: "Recovery% @ 12MOB%",
    bar: {
      start: 10,
      end: 20,
      current: 14,
      higher_the_better: true,
    },
  },
  {
    segment_name: "Unique Payer%",
    bar: {
      start: 15,
      end: 30,
      current: 20,
      higher_the_better: true,
    },
  },
  {
    segment_name: "Contact%",
    bar: {
      start: 5,
      end: 10,
      current: 6,
      higher_the_better: true,
    },
  },
  {
    segment_name: "Settlement Accept%",
    bar: {
      start: 15,
      end: 40,
      current: 18,
      higher_the_better: true,
    },
  },
];

const Hotspot: React.FC<HotspotExpandedProps> = ({
  setDiagnostic,
  onSegmentSelect,
}) => {
  const [hotspots, setHotspots] = useState<Hotspot[]>([]);
  const [activeHotspot, setActiveHotspot] = useState<string>("MRR%");

  useEffect(() => {
    setHotspots(hotspotsData);
  }, []);

  const handleHotspotClick = (segmentName: string) => {
    setActiveHotspot(segmentName);
    onSegmentSelect(segmentName);
    setDiagnostic();
  };

  const renderHotspot = (hotspot: Hotspot) => {
    const isActive = hotspot.segment_name === activeHotspot;
    const arrowPosition = `${
      ((hotspot.bar.current - hotspot.bar.start) /
        (hotspot.bar.end - hotspot.bar.start)) *
      100
    }%`;

    return (
      <div
        className={`w-full self-stretch px-3 py-5 rounded-lg justify-between items-center gap-10 flex border-b-2  border-gray-100   ${
          isActive ? "border-violet-600  border-2" : ""
        }`}
        onClick={() => handleHotspotClick(hotspot.segment_name)}
        key={hotspot.segment_name}
      >
        <div className="w-[180px] text-black text-base font-medium font-['DM Sans']">
          {hotspot.segment_name}
        </div>
        <div className="w-[60%] flex-col justify-center items-start inline-flex ">
          <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
            <div className="flex w-full h-[18px] relative">
              <div
                className="text-black text-[12px] font-[400px] font-['DM Sans']"
                style={{
                  position: "absolute",
                  left: "0",
                  marginLeft: "5px",
                }}
              >
                {hotspot.bar.start}%
              </div>
              <div
                className={`text-black text-[12px] font-[400px] font-['DM Sans']`}
                style={{
                  position: "absolute",
                  left: arrowPosition,
                  marginLeft: "5px",
                }}
              >
                {hotspot.bar.current}%
              </div>
            </div>
          </div>
          <div className="w-full h-[18px] relative">
            <div
              className="text-black text-[12px] font-[400px] font-['DM Sans'] absolute right-1"
              style={{ top: "-20px", textAlign: "right" }}
            >
              {hotspot.bar.end}%
            </div>
            <div className="w-full h-2  top-[2px] absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
            {hotspot.bar.current && (
              <IoMdArrowDropup
                className="text-xs ml-1"
                style={{
                  width: "20px",
                  height: "25px",
                  margin: "2px",
                  position: "absolute",
                  left: arrowPosition,
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-3 bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
      <div className="self-stretch bg-white rounded-xl flex-col justify-start items-start gap-4">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-black text-base font-semibold font-['DM Sans'] pb-3">
            Hotspots
          </div>

          <div className="px-3 py-1 rounded-[100px] justify-center items-center gap-1 flex" />
        </div>
        <div className="self-stretch gap-0.5">
          {hotspots.map((hotspot) => renderHotspot(hotspot))}
        </div>
      </div>
    </div>
  );
};

export default Hotspot;
