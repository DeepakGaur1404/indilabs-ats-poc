import React, { useEffect, useState } from "react";
import GraphIcon from "../../assets/icons/Harvey Graph Balls.svg";
import FrameIcon from "../../assets/icons/Frame 214.svg";
import graphBallAll from "../../assets/images/graphBallAll.png";
import graphBallOrigination from "../../assets/images/graphBallOrigination.png";
import graphBallPortfolio from "../../assets/images/graphBallPortfolio.png";
import graphBallCollections from "../../assets/images/graphBallCollections.png";
import graphBallRecovery from "../../assets/images/graphBallRecovery.png";
import "../../NewPages/AllocationEngine/Allocation.scss";

type Props = {
  setCategory: any;
  setCategoriesMatricHeatMap: any;
  setIsCategoryVisible: any;
  isCategoryVisible: any;
};

interface MetricDataType {
  metric: string;
  "Segments Scanned": number;
  Hotspots: number;
  "Risk Score": any;
}

const MetricData: MetricDataType[] = [
  {
    metric: "Location",
    "Segments Scanned": 10,
    Hotspots: 8,
    "Risk Score": 3,
  },
  {
    metric: "POS",
    "Segments Scanned": 4,
    Hotspots: 3,
    "Risk Score": 3,
  },
  {
    metric: "Vintage",
    "Segments Scanned": 7,
    Hotspots: 7,
    "Risk Score": 3,
  },
];

function RiskMonitoringHotspot({
  setCategory,
  setCategoriesMatricHeatMap,
  setIsCategoryVisible,
  isCategoryVisible,
}: Props) {
  const [activeData, setActiveData] = useState<number>(0);
  const [activeButton, setActiveButton] = useState("All");
  const [activeMatricButton, setActiveMatricButton] = useState("MRR%");
  const [riskMonitoringData, setRiskMonitoringData] = useState<any>();
  // const [isCategoryVisible, setIsCategoryVisible] = useState(true);

  // const [loader, setLoader] = useState(true);

  const Loader = () => {
    return <span className="loader"></span>;
  };

  const onClickButtons = (id: number, categories: string) => {
    setActiveData(id);
    // setCategory(categories);
    setCategoriesMatricHeatMap(categories);
  };

  useEffect(() => {
    // if (isCategoryVisible) {
    //   onClickButtons(0, "All");
    // } else {
    onClickButtons(0, "Location");
    // }
  }, []);

  useEffect(() => {
    // fetchMonitoringdata();
    // fetchNewRiskMonitoringData();
  }, []);

  // const fetchMonitoringdata = async () => {
  //   setLoader(true);
  //   const apiUrl =
  //     "https://smfg-backend-service.site/v1/monitoring/home/recovery";
  //   // const proxyUrl = "https://smfg-backend-service.site/v1/home/";
  //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //   const apiKey = "368f286f442e50f720ef7d8d952add8b";
  //   const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
  //   fetch(urlWithParams)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(
  //         data?.risk_monitoring?.categories,
  //         "Risk Monitoring Table data"
  //       );
  //       setRiskMonitoringData(data?.risk_monitoring?.categories);
  //       setLoader(false);

  //       // console.log("balanceData", data?.balance);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoader(false);
  //     });
  // };

  // const fetchNewRiskMonitoringData = async () => {
  //   setLoader(true);
  //   const apiUrl =
  //     "https://smfg-backend-service.site/v1/monitoring/home/recovery";
  //   const apiKey = "368f286f442e50f720ef7d8d952add8b";
  //   const urlWithParams = `${apiUrl}?api_key=${apiKey}`;
  //   fetch(urlWithParams)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(
  //         data?.risk_monitoring?.categories,
  //         "Risk Monitoring Table data"
  //       );
  //       setRiskMonitoringData(data?.risk_monitoring?.categories);
  //       setLoader(false);

  //       // console.log("balanceData", data?.balance);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoader(false);
  //     });
  // };

  return (
    <>
      <div className="min-w-[300px] w-[100%] sm:w-[72%] md:w-[77.3%] lg:w-[73%] xl:w-[100%] 2xl:w-[30%] ml-4 2xl:-ml-1 h-[500px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2 overflow-y-auto">
        <div className="w-full flex items-start h-7 flex-col gap-2.5 mb-8">
          <h1 className="text-black text-lg flex justify-start font-semibold font-['DM Sans'] customClassRisk">
            Hotspots
          </h1>
        </div>
        <>
          <table className="w-full" cellPadding={16}>
            <tbody className="w-full">
              {MetricData?.map((each, idx) => (
                <tr
                  key={idx}
                  onClick={() => {
                    onClickButtons(idx, each?.metric);
                  }}
                  className={`h-[87px] rounded-xl  mt-[3px] text-start flex justify-evenly items-center text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] customClassTable ${
                    idx !== activeData ? "border-b-[1px] border-[#F3F4F6]" : ""
                  } ${
                    idx === activeData &&
                    "border-[#5C4E8E] border-[2px] z-10 shadow-lg"
                  } cursor-pointer`}
                >
                  <td className="w-[22%] -ml-28 xl:-ml-[200px]  2xl:-ml-60 text-start text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important]  ">
                    {each?.metric}
                  </td>
                  {/* <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important]  2xl:-ml-8">
                    {`${each["Segments Scanned"]}`}
                  </td>
                  <td className="text-[#161D29] xl:ml-[20px] 2xl:ml-0 text-[14px] font-[400] font-['DM Sans' !important] ">
                    {`${each?.Hotspots}`}
                  </td>
                  <td
                    className={`text-white text-[14px] rounded-md h-3 w-[45px] flex items-center justify-center font-[400] font-['DM Sans' !important] -mr-[47px]
                    ${
                      Number(each?.["Risk Score"].toFixed(1)) >= 2
                        ? "bg-[#F20B0B] "
                        : Number(each?.["Risk Score"].toFixed(1)) > 0
                        ? "bg-[#FFB200] "
                        : Number(each?.["Risk Score"].toFixed(1)) === 0
                        ? "bg-[#4EAD5B] "
                        : ""
                    }`}
                  >
                    {Number(each?.["Risk Score"].toFixed(1)) === 0
                      ? each?.["Risk Score"].toFixed(0)
                      : each?.["Risk Score"].toFixed(1)}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </div>
    </>
  );
}

export default RiskMonitoringHotspot;
