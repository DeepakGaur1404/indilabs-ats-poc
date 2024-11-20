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
  setIsCategoryVisible: any;
  isCategoryVisible: any;
  setCategoriesMatricHeatMap: any;
};

const MetricData = [
  {
    metric: "ROMG_Payer%",
    current_value: 6.5,
    benchmark: 16.33,
    risk_score: 2.2,
  },
  {
    metric: "ROMG_MRR%",
    current_value: 0.37,
    benchmark: 0.98,
    risk_score: 2.2,
  },
  {
    metric: "MUM_Payer%",
    current_value: 7.75,
    benchmark: 20.62,
    risk_score: 2.1,
  },
  {
    metric: "POS<5L_Payer%",
    current_value: 10.72,
    benchmark: 15.25,
    risk_score: 2.0,
  },
  {
    metric: "DEL_Payer%",
    current_value: 10.47,
    benchmark: 12.45,
    risk_score: 2.0,
  },
  {
    metric: "MUM_MRR%",
    current_value: 0.42,
    benchmark: 1.02,
    risk_score: 1.8,
  }, 
  {
    metric: "POS<5L_MRR%",
    current_value: 1.11,
    benchmark: 1.48,
    risk_score: 1.8,
  },
  {
    metric: "TN_MRR%",
    current_value: 1.08,
    benchmark: 1.14,
    risk_score: 1.6,
  },
  {
    metric: "MOB_0_Payer%",
    current_value: 16.62,
    benchmark: 16.7,
    risk_score: 1.6,
  },
  
  {
    metric: "DEL_MRR%",
    current_value: 1.24,
    benchmark: 1.03,
    risk_score: 1.3,
  },
  {
    metric: "TN_Payer%",
    current_value: 10.81,
    benchmark: 11.75,
    risk_score: 1,
  },
  {
    metric: "0_MOB_MRR%",
    current_value: 1.46,
    benchmark: 1.44,
    risk_score: 0.9,
  },
];


function RiskMonitoringRecoveryMonthlyView({
  setCategory,
  setIsCategoryVisible,
  isCategoryVisible,
  setCategoriesMatricHeatMap,
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
    console.log(categories, "categories value");
    setActiveData(id);
    // setCategory(categories);
    setCategoriesMatricHeatMap(categories);
  };

  //   useEffect(() => {
  //     if (isCategoryVisible) {
  //       onClickButtons(0, "All");
  //     } else {
  //       onClickButtons(0, "MRR%");
  //     }
  //   }, [isCategoryVisible]);

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
      <div className="min-w-[300px] w-[100%] sm:w-[72%] md:w-[77.3%] lg:w-[73%] xl:w-[48%] -ml-1 h-[500px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2 overflow-y-auto">
        <div className="w-full flex items-center h-7 flex-col gap-2.5 mb-8">
          <h1 className="text-black text-lg flex justify-center font-semibold font-['DM Sans'] customClassRisk mb-">
            Risk Monitoring
          </h1>
        </div>
        {/* <div className="flex -mb-2.5">
          <div
            className={`rounded-l-[4px] h-10 border-[1px]  border-[#79747E] flex items-center justify-center cursor-pointer ${
              isCategoryVisible ? "bg-[#E8DEF8]" : ""
            }`}
            onClick={() => setIsCategoryVisible(true)}
          >
            <button className="text-center gap-2 px-6 text-[#1D192B] text-[14px] font-[500] font-['DM Sans' !important] customClassFirst">
              Category
            </button>
          </div>
          <div
            className={`rounded-r-[4px] h-10 border-[1px]  border-[#79747E] flex items-center justify-center cursor-pointer ${
              isCategoryVisible ? "" : "bg-[#E8DEF8]"
            }`}
            onClick={() => setIsCategoryVisible(false)}
          >
            <button className="text-center gap-2 px-6 text-[#1D192B] text-[14px] font-[500] font-['DM Sans' !important] customClassFirst">
              Metric
            </button>
          </div>
        </div> */}

        {/* {loader ? (
          <div className="w-full flex justify-center items-center relative top-48">
            <Loader />
          </div>
        ) : ( */}
        <>
          <table className="w-full" cellPadding={16}>
            <thead className="bg-[#F9F9F9]">
              <tr className="border-b-[1px] border-[#F3F4F6] flex justify-evenly">
                <th className="text-[#524483] text-[12px] font-[400] font-['DM Sans' !important] w-[19%] text-start -ml-6">
                  Categories
                </th>
                <th className="text-[#524483] text-[12px] font-[400] font-['DM Sans' !important] min-w-[101px] w-[22%] ml-6">
                  Current Value
                </th>
                <th className="text-[#524483] text-[12px] font-[400] font-['DM Sans' !important] min-w-[126px] w-[19%]">
                  Benchmark
                </th>
                <th className="text-[#524483] text-[12px] font-[400] font-['DM Sans' !important] w-[19%] -mr-1 ">
                  Risk Score
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {MetricData?.map((each, idx) => (
                <tr
                  key={idx}
                  onClick={() => {
                    onClickButtons(idx, each?.metric);
                  }}
                  className={`h-[87px] rounded-xl mt-[3px] text-center flex justify-evenly items-center text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] customClassTable ${
                    idx !== activeData ? "border-b-[1px] border-[#F3F4F6]" : ""
                  } ${
                    idx === activeData &&
                    "border-[#5C4E8E] border-[2px] z-10 shadow-lg"
                  } cursor-pointer`}
                >
                  <td className="w-[22%] -ml-24 text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] text-left ">
                    {each?.metric}
                  </td>
                  <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] -ml-8">
                    {`${each?.current_value.toFixed(2)}%`}
                  </td>
                  <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] ">
                    {`${each?.benchmark.toFixed(2)}%`}
                  </td>
                  <td
                    className={`text-white text-[14px] rounded-md h-3 w-[45px] flex items-center justify-center font-[400] font-['DM Sans' !important] -mr-10
  ${
    Number(each?.risk_score.toFixed(1)) >= 2
      ? "bg-[#F20B0B] "
      : Number(each?.risk_score.toFixed(1)) > 0
      ? "bg-[#FFB200] "
      : Number(each?.risk_score.toFixed(1)) === 0
      ? "bg-[#4EAD5B] "
      : ""
  }`}
                  >
                    {Number(each?.risk_score.toFixed(1)) === 0
                      ? each?.risk_score.toFixed(0)
                      : each?.risk_score.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* {isCategoryVisible ? (
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
                      Risk Score
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {riskMonitoringData?.map((each: any, idx: number) => (
                    <tr
                      onClick={() => {
                        onClickButtons(idx, each?.name);
                      }}
                      className={` h-[87px] rounded-xl mt-[3px] text-center flex justify-evenly items-center text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important] customClassTable ${
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
            ) : (
              <table className="w-full" cellPadding={16}>
                <thead className="bg-[#F9F9F9]">
                  <tr className="border-b-[1px] border-[#F3F4F6] flex justify-evenly">
                    <th className="text-[#524483] text-[12px] font-[400] font-['DM Sans' !important] w-[19%] text-start -ml-8">
                      Categories
                    </th>
                    <th className="text-[#524483] text-[12px] font-[400] font-['DM Sans' !important] min-w-[101px] w-[22%] ml-6">
                      Current Value
                    </th>
                    <th className="text-[#524483] text-[12px] font-[400] font-['DM Sans' !important] min-w-[126px] w-[19%]">
                      Benchmark
                    </th>
                    <th className="text-[#524483] text-[12px] font-[400] font-['DM Sans' !important] w-[19%]">
                      Risk Score
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {MetricData?.map((each, idx) => (
                    <tr
                      key={idx}
                      onClick={() => {
                        onClickButtons(idx, each?.metric);
                      }}
                      className={`h-[87px] rounded-xl mt-[3px] text-center flex justify-evenly items-center text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] customClassTable ${
                        idx !== activeData
                          ? "border-b-[1px] border-[#F3F4F6]"
                          : ""
                      } ${
                        idx === activeData &&
                        "border-[#5C4E8E] border-[2px] z-10 shadow-lg"
                      } cursor-pointer`}
                    >
                      <td className="w-[22%] -ml-24 text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] text-left">
                        {each?.metric}
                      </td>
                      <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] -ml-8">
                        {each?.current_value.toFixed(2)}
                      </td>
                      <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] ">
                        {each?.benchmark.toFixed(3)}
                      </td>
                      <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans' !important] -mr-10">
                        {each?.risk_score.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )} */}
        </>
        {/* {/ )} /} */}
      </div>
    </>
  );
}

export default RiskMonitoringRecoveryMonthlyView;
