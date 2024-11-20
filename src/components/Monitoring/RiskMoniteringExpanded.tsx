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
};

const monitoringTableData = [
  {
    Categories: "All",
    KPIsScanned: "12",
    OutsideTolerance: "02",
    RiskScore: graphBallAll,
    id: 0,
  },
  {
    Categories: "Origination",
    KPIsScanned: "25",
    OutsideTolerance: "06",
    RiskScore: graphBallOrigination,
    id: 1,
  },
  {
    Categories: "Portfolio",
    KPIsScanned: "20",
    OutsideTolerance: "08",
    RiskScore: graphBallPortfolio,
    id: 2,
  },
  {
    Categories: "Collections",
    KPIsScanned: "30",
    OutsideTolerance: "0",
    RiskScore: graphBallCollections,
    id: 3,
  },
  {
    Categories: "Recovery",
    KPIsScanned: "08",
    OutsideTolerance: "06",
    RiskScore: graphBallRecovery,
    id: 4,
  },
];

function RiskMonitoringExpanded({ setCategory }: Props) {
  const [activeData, setActiveData] = useState<number>(0);
  const [riskMonitoringData, setRiskMonitoringData] = useState<any>();
  const [loader, setLoader] = useState(true);

  const Loader = () => {
    return <span className="loader"></span>;
  };

  const onClickButtons = (id: number, categories: string) => {
    setActiveData(id);
    setCategory(categories);
  };

  useEffect(() => {
    fetchMonitoringdata();
    // fetchNewRiskMonitoringData();
  }, []);

  const fetchMonitoringdata = async () => {
    setLoader(true);
    const apiUrl =
      "https://smfg-backend-service.site/v1/monitoring/home/collection";
    // const proxyUrl = "https://smfg-backend-service.site/v1/home/";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          data?.risk_monitoring?.categories,
          "Risk Monitoring Table data"
        );
        setRiskMonitoringData(data?.risk_monitoring?.categories);
        setLoader(false);

        // console.log("balanceData", data?.balance);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  };

  const fetchNewRiskMonitoringData = async () => {
    setLoader(true);
    const apiUrl =
      "https://smfg-backend-service.site/v1/monitoring/home/collection";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          data?.risk_monitoring?.categories,
          "Risk Monitoring Table data"
        );
        setRiskMonitoringData(data?.risk_monitoring?.categories);
        setLoader(false);

        // console.log("balanceData", data?.balance);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  };

  return (
    <>
      <div className=" min-w-[300px] w-[100%] sm:w-[72%] md:w-[77.3%] lg:w-[73%]  xl:w-[50%]  mt-10  h-[555px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2  overflow-x-auto">
        <div className="w-full flex items-center h-7 flex-col gap-2.5 ">
          <h1 className="text-black text-lg flex justify-center font-semibold font-['DM Sans']">
            Risk Monitoring
          </h1>
        </div>
        {loader ? (
          <div className="w-full flex justify-center items-center relative top-48">
            <Loader />
          </div>
        ) : (
          <>
            <table className="w-full" cellPadding={16}>
              <thead className="bg-[#F9F9F9]">
                <tr className="border-b-[1px] border-[#F3F4F6] flex justify-evenly">
                  <th className="text-[#524483] text-[12px]  font-[400] font-['DM Sans' !important] w-[19%] text-start -ml-8">
                    Categories
                  </th>
                  <th className="text-[#524483] text-[12px]  font-[400] font-['DM Sans' !important] min-w-[101px] w-[16%] ml-6 ">
                    KPIs scanned
                  </th>
                  <th className="text-[#524483]  text-[12px]  font-[400] font-['DM Sans' !important] min-w-[126px] w-[19%]">
                    Outside tolerance
                  </th>
                  <th className="text-[#524483]  text-[12px]  font-[400] font-['DM Sans' !important] w-[16%]">
                    Risk score
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                {riskMonitoringData?.map((each: any, idx: number) => (
                  <tr
                    onClick={() => {
                      onClickButtons(idx, each?.name);
                    }}
                    className={` h-[87px] rounded-xl mt-[3px] text-center flex justify-evenly items-center text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important] ${
                      idx !== activeData
                        ? "border-b-[1px] border-[#F3F4F6]"
                        : null
                    }
               ${
                 idx === activeData &&
                 "border-[#5C4E8E] border-[2px] z-10 shadow-lg"
               } 
              
              cursor-pointer `}
                  >
                    <td className="2xl:-ml-8 ml-0 min-w-[126px] text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important] text-start">
                      {each?.name}
                    </td>
                    <td
                      className={`text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important] ml-12`}
                    >
                      {each?.kpi_scanned}
                    </td>
                    <td
                      className={`text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] ml-16`}
                    >
                      {each?.outside_tolerance}
                    </td>
                    <td className="text-[#6750A4] text-[12px]  font-[500] font-['DM Sans' !important] ml-12">
                      <img
                        src={
                          each?.risk_score === 0.25
                            ? graphBallAll
                            : each?.risk_score === 0.5
                            ? graphBallOrigination
                            : each?.risk_score === 0.75
                            ? graphBallCollections
                            : each?.risk_score === 0.0
                            ? graphBallRecovery
                            : graphBallPortfolio
                        }
                        alt="graphBall"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default RiskMonitoringExpanded;
