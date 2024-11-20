import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import GreenLargeImage from "../../assets/images/greenLarge1.png";
import RedImage from "../../assets/images/red.webp";
import OrangeImage from "../../assets/images/orange.png";

//
//

import "./style.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
export default function Map(props) {
  const location = useLocation();
  // const position = [20.5937, 78.9629];
  const position = [22.3511148, 78.6677428];
  const [activeMarkerIndex, setActiveMarkerIndex] = useState();
  const [activeData, setActiveData] = useState();
  const [activeImage, setActiveImage] = useState();
  // Use the useEffect hook to open the tooltip when the component is mounted

  const LocationState = useSelector((state) => state?.location);

  const CustomIcon = (image) => {
    return new Icon({
      iconUrl: image,
      iconSize: [20, 20],
    });
  };

  const makerPosition = [
    {
      position: [28.5947, 78.9],
      writeOffData: {
        Write_Off: "20%",
        Recovery: "50%",
        MRR: "20%",
        Target_MRR: "28%",
      },
      statys: "green",
      image: GreenLargeImage,
    },
    {
      position: [26.5947, 92.9],
      writeOffData: {
        Write_Off: "20%",
        Recovery: "50%",
        MRR: "20%",
        Target_MRR: "28%",
      },
      statys: "red",
      image: RedImage,
    },
    {
      position: [20.5947, 78.9],
      writeOffData: {
        Write_Off: "20%",
        Recovery: "50%",
        MRR: "20%",
        Target_MRR: "28%",
      },
      statys: "green",
      image: GreenLargeImage,
    },
    {
      position: [18.5947, 78.9],
      writeOffData: {
        Write_Off: "20%",
        Recovery: "50%",
        MRR: "20%",
        Target_MRR: "28%",
      },
      statys: "orange",
      image: OrangeImage,
    },
    {
      position: [23.5947, 70.9],
      writeOffData: {
        Write_Off: "20%",
        Recovery: "50%",
        MRR: "20%",
        Target_MRR: "28%",
      },
      statys: "red",
      image: RedImage,
    },
  ];

  useEffect(() => {
    setActiveMarkerIndex(LocationState.activeState);
    if (location.pathname !== "/monitoring/writeoffs/Volume") {
      setActiveData(LocationState.data);
    }
  }, [LocationState.activeState, LocationState.data]);

  return (
    // <div className="w-[47.5%] mt-10 relative max-sm:w-[100%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[100%] max-xxl:w-[100%] flex justify-center items-center border shadow-md rounded-xl p-2.5">
    <div className="w-[100%] overflow-x-auto p-2 mt-10 shadow-md bg-white flex flex-col items-center relative WritoffChart rounded-xl xl:w-[47.5%]">
      <div className="w-full flex justify-start items-center text-[#000000] font-[500] text-[16px] font-['DM Sans'] ml-4 mb-2">
        Location Analysis
      </div>
      <MapContainer
        center={position}
        zoom={4.1}
        // maxZoom={4.1} // Set the maximum allowed zoom level
        // minZoom={4.1}
        scrollWheelZoom={false}
        // dragging={false}
        // keyboard={false}
        // style={{ width: "600px", height: "420px" }}
        className="mapContainer max-xl:w-[800px] "
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {location?.pathname === "/monitoring/writeoffs/Volume" && (
          <>
            {makerPosition?.map((data) => (
              <Marker position={data.position} icon={CustomIcon(data?.image)}>
                {/* {location?.pathname === "/monitoring/writeoffs/Volume" && ( */}
                <Tooltip>{props?.toolTipData && props?.toolTipData()}</Tooltip>
                {/* )} */}
              </Marker>
            ))}
          </>
        )}
        {activeData?.position?.map((data, id) => (
          <Marker position={data} icon={CustomIcon(makerPosition[id]?.image)}>
            {/* {location?.pathname === "/monitoring/writeoffs/Volume" && ( */}
            <Tooltip>{props?.toolTipData && props?.toolTipData()}</Tooltip>
            {/* )} */}
          </Marker>
        ))}
        {/* {activeData?.position && (
          <Marker
            position={activeData?.position}
            icon={CustomIcon(
              activeData?.status === "green"
                ? GreenLargeImage
                : activeData?.status === "red"
                ? RedImage
                : OrangeImage
            )}
          >
            <Tooltip
              permanent={true}
              style={{ background: "transparent", opacity: 0 }}
              position={[18.3511148, 55.6677428]}
            >
              {props?.toolTipData && props?.toolTipData()}
            </Tooltip>
          </Marker>
        )} */}
      </MapContainer>

      <section className="absolute top-9 right-4 bg-[white] z-[999] w-[120px] p-2 flex flex-col">
        <section className=" flex flex-row items-centers gap-4 justify-start">
          <img src={GreenLargeImage} alt="ontrack" className="w-5 h-5" />
          <span>On track</span>
        </section>
        <section className=" flex flex-row items-center gap-[18px] justify-start">
          <img
            src={OrangeImage}
            className=" h-4 w-4 ml-[2px]"
            alt="OrangeImage"
          />
          <span>Off track</span>
        </section>
        <section className=" flex flex-row items-center gap-4 justify-start">
          <img src={RedImage} className="w-5 h-5 " alt="RedImage" />
          <span>At Risk</span>
        </section>
      </section>

      <div className="line" id="dynamicLine"></div>
    </div>
  );
}
