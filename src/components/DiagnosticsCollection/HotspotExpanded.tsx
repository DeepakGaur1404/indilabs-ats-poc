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
    segment_name: "Entry %",
    bar: {
      start: 3,
      end: 6,
      current: 4.2,
      higher_the_better: true,
    },
  },
  {
    segment_name: "2+ %",
    bar: {
      start: 3,
      end: 7,
      current: 5.3,
      higher_the_better: true,
    },
  },
  {
    segment_name: "1-2%",
    bar: {
      start: 20,
      end: 42,
      current: 38,
      higher_the_better: true,
    },
  },
  {
    segment_name: "Bkt3",
    bar: {
      start: 250,
      end: 350,
      current: 310,
      higher_the_better: true,
    },
  },
  {
    segment_name: "RPC %",
    bar: {
      start: 8,
      end: 15,
      current: 10,
      higher_the_better: true,
    },
  },
];

const Hotspot: React.FC<HotspotExpandedProps> = ({
  setDiagnostic,
  onSegmentSelect,
}) => {
  const [hotspots, setHotspots] = useState<Hotspot[]>([]);
  const [activeHotspot, setActiveHotspot] = useState<string>("Entry %");

  useEffect(() => {
    setHotspots(hotspotsData);
  }, []);
  // useEffect(() => {
  //   const apiUrl = "https://smfg-backend-service.site/v1/diagnostics/home/";
  //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //   const apiKey = "368f286f442e50f720ef7d8d952add8b";
  //   const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;

  //   fetch(urlWithParams)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("API Response:", data);
  //       // if (data.hotspots) {
  //       setHotspots(data.hotspots);
  //       // } else {
  //       //   console.error("Hotspots data not found in API response");
  //       // }
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // useEffect(() => {
  //   const apiUrl = "https://smfg-backend-service.site/v1/diagnostics/home/";
  //   // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //   const apiKey = "368f286f442e50f720ef7d8d952add8b";
  //   const urlWithParams = `${apiUrl}?api_key=${apiKey}`;

  //   fetch(urlWithParams)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("API Response:", data);
  //       // if (data.hotspots) {
  //       setHotspots(data.hotspots);
  //       // } else {
  //       //   console.error("Hotspots data not found in API response");
  //       // }
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

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
                className="text-black text-[12px] font-[400] font-['DM Sans']"
                style={{
                  position: "absolute",
                  left: "0",
                  marginLeft: "5px",
                }}
              >
                {hotspot.bar.start}%
              </div>
              <div
                className={`text-black text-[12px] font-[400] font-['DM Sans']`}
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
              className="text-black text-[12px] font-[400] font-['DM Sans'] absolute right-1"
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
