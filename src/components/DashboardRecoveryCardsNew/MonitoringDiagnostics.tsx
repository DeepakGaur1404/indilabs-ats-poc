import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import graphBallAll from "../../assets/images/graphBallAll.png";
import graphBallOrigination from "../../assets/images/graphBallOrigination.png";
import graphBallPortfolio from "../../assets/images/graphBallPortfolio.png";
import graphBallCollections from "../../assets/images/graphBallCollections.png";
import graphBallRecovery from "../../assets/images/graphBallRecovery.png";
import { useNavigate } from "react-router-dom";
import dashboardUpArrow from "../../assets/images/dashboardUpArrow.svg";
import downorangeArrow from "../../assets/icons/down-orange-shift.svg";
import arrow from "../../assets/images/HotspotArrow.svg";
import SentinelImage from "../../assets/images/Sentinel.svg";
import HotspotBarArrow from "../../assets/images/HotspotBarArrow.svg";
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const Riskmonitoringscore = [
//   {
//     Categories: "All",
//     Latest_Month_Percentage: 86.8421052631579,
//     Previous_Month_Percentage: 92.10526315789474,
//     id: 0,
//   },
//   {
//     Categories: "Location",
//     Latest_Month_Percentage: 81.48148148148148,
//     Previous_Month_Percentage: 92.5925925925926,
//     id: 1,
//   },
//   {
//     Categories: "POS",
//     Latest_Month_Percentage: 100.0,
//     Previous_Month_Percentage: 75.0,
//     id: 2,
//   },
//   {
//     Categories: "Vintage",
//     Latest_Month_Percentage: 100.0,
//     Previous_Month_Percentage: 100.0,
//     id: 3,
//   },
// ];

// const hotspot: any = [
//   {
//     segment_name: "1-5 Lakh",
//     bar: {
//       Min_Performance: 0.005736234674012124,
//       Max_Performance: 0.009549122170028183,
//       Current_Performance: 0.00613848009991673,
//       higher_the_better: true,
//     },
//   },
//   {
//     segment_name: "V2",
//     bar: {
//       Min_Performance: 0.008683658382895369,
//       Max_Performance: 0.018470706220511765,
//       Current_Performance: 0.008683658382895369,
//       higher_the_better: true,
//     },
//   },
//   {
//     segment_name: "5-10 Lakh",
//     bar: {
//       Min_Performance: 0.003532597278260322,
//       Max_Performance: 0.005680579807644524,
//       Current_Performance: 0.003586460983511953,
//       higher_the_better: true,
//     },
//   },
//   {
//     segment_name: "v1",
//     bar: {
//       Min_Performance: 0.017158389064762834,
//       Max_Performance: 0.027585775409296433,
//       Current_Performance: 0.018929057296379396,
//       higher_the_better: true,
//     },
//   },
//   {
//     segment_name: "Tamil Nadu",
//     bar: {
//       Min_Performance: 0.005315795128299967,
//       Max_Performance: 0.010795655486321522,
//       Current_Performance: 0.005350658359352976,
//       higher_the_better: true,
//     },
//   },

// ];

const Hotspot_Counts = {
  Latest_Month_Hotspots: 33,
  Previous_Month_Hotspots: 35,
  Change_in_Hotspots: -2,
};

interface MiniPiecharterror {
  percentage: any;
}

const COLORS = ["#5C4E8E", "#ffffff"];

// const MiniPieChart: React.FC<MiniPiecharterror> = ({ percentage }) => {
//   const chartData = [
//     { name: "LastMonth", value: percentage },
//     { name: "Pervious Month", value: 100 - percentage },
//   ];

//   return (
//     <ResponsiveContainer width={40} height={40}>
//     <PieChart >
//       <Pie
//         data={chartData}
//         cx="50%"
//         cy="50%"
//         labelLine={false}
//         outerRadius={13}
//         fill="#E5E3ED"
//         dataKey="value"
//       >
//         {chartData.map((entry, index) => (
//           <Cell
//           key={`cell-${index}`}
//           fill={COLORS[index % COLORS.length]}
//           stroke="#5C4E8E" // Border color
//           strokeWidth={1}
//           />
//         ))}
//       </Pie>
//       {/* <Tooltip
//         formatter={(value, name) => {
//           const formattedValue =
//             typeof value === "number" ? `${value.toFixed(2)}%` : value;
//           return [formattedValue, `${name}`];
//         }}
//       /> */}
//     </PieChart>
//     </ResponsiveContainer>
//   );
// };

// const adjustedHotspot = hotspot.map((each: any) => ({
//   segment_name: each.segment_name,
//   bar: {
//     Min_Performance: each.bar.Min_Performance * 100,
//     Max_Performance: each.bar.Max_Performance * 100,
//     Current_Performance: each.bar.Current_Performance * 100,
//     higher_the_better: each.bar.higher_the_better,
//   },
// }));

interface PieChartDataType {
  Latest_Month_Percentage: number;
  Previous_Month_Percentage: number;
}

const MonitoringDiagnostics = () => {
  const [data, setData] = useState<string>();
  const [HotspotCounts, setHotspotCounts] = useState<string>("Hotspot_Counts");
  const [datapieChart, setpieChart] = useState<any>("Hotspot_Percentages");
  const [databarData, setBarData] = useState([]);
  //  const [pieChartData, setPieChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/homedashboard/?blob=sentinel_home`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data);
      setData(result.data);
      setHotspotCounts(result.data.Hotspot_Counts);
      setpieChart(result.data.Hotspot_Percentages);
      console.log(result.data.Hotspot_Percentages);
      setBarData(result.data.Top_5_Segments);
      console.log(result.data.Top_5_Segments);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("sentinel_home");
  }, []);

  const navigate = useNavigate();

  const handleHotspotReviewClick = () => {
    navigate("/diagnostics/recovery");
  };

  const handleRiskMonitoringReviewClick = () => {
    navigate("/monitoring/recovery");
  };

  const Hotspot_Counts: any = HotspotCounts;
  const Change_in_Hotspots = Hotspot_Counts?.Change_in_Hotspots || 0;

  const adjustedHotspot = databarData.map((each: any) => ({
    segment_name: each.Segment,
    Min_Performance: each.Min_Performance * 100,
    Max_Performance: each.Max_Performance * 100,
    Current_Performance: each.Current_Performance * 100,
  }));

  // const PieChartData: any = Object.entries(datapieChart);
  // if (PieChartData.length === 0) {
  //   return null; // Render nothing if there's no data
  // }

  const PieChartData: any = datapieChart ? Object.entries(datapieChart) : [];

  // Check if PieChartData has valid entries before rendering
  if (PieChartData.length === 0) {
    return null; // Render nothing if there's no data
  }

  const MiniPieChart: React.FC<MiniPiecharterror> = ({ percentage }) => {
    const chartData = [
      { name: "LastMonth", value: percentage },
      { name: "Pervious Month", value: 100 - percentage },
    ];

    return (
      <ResponsiveContainer width={40} height={40}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={13}
            fill="#E5E3ED"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#5C4E8E" // Border color
                strokeWidth={1}
              />
            ))}
          </Pie>
          {/* <Tooltip
        formatter={(value, name) => {
          const formattedValue =
            typeof value === "number" ? `${value.toFixed(2)}%` : value;
          return [formattedValue, `${name}`];
        }}
      /> */}
        </PieChart>
      </ResponsiveContainer>
    );
  };

  const Loader = () => {
    return <span className="loader"></span>;
  };

  return (
    <div className="lg:w-[32%] sm:w-[90%]  h-full rounded-xl shadow p-4 gap-3   bg-[#F2EFFE]">
      {/* <p className="font-[400] text-[13px] font-['DM Sans'] cursor-pointer leading-4 border border-[#9F90D4] bg-white w-max px-[8px] py-[4px] rounded-[4px]">
          Monitoring & Diagnostics
        </p> */}
      <div className="cursor-pointer flex flex-col items-center">
        <img
          className=" border border-[#9080CC] bg-white gap-[8px] py-[6px] px-[8px] customClassFifth rounded-[4px] h-[34px] w-[110px]"
          src={SentinelImage}
          alt="SentinelImage"
        />
        <p className="font-[500] text-[#6750A4] text-center text-[11px] font-['DM Sans'] mt-1 customClassFifth">
          Risk Monitoring
        </p>
      </div>

      <div className="bg-white h-[116px] p-1  rounded-xl mt-4 flex flex-col items-center ">
        <span className="font-['DM Sans'] text-[32px] text-[#FAC907] font-[500] customClassThird">
          {Hotspot_Counts.Latest_Month_Hotspots}M
        </span>
        <p className="font-['DM Sans'] text-[14px] font-[500]">Value at Risk</p>
        <div className="flex gap-1">
          <img
            src={Change_in_Hotspots < 0 ? downorangeArrow : dashboardUpArrow}
            alt="arrow"
            className="w-[14px] h-[14px] customClass"
          />
          <p className="font-['DM Sans'] text-[10px] font-[400] gap-[4px]">
            {Change_in_Hotspots}% vs last month
          </p>
        </div>
        <p className="font-['DM Sans'] text-[12px] text-[#9CA4B6] font-[400]">
          Hotspots: {Hotspot_Counts.Previous_Month_Hotspots}
        </p>
      </div>
      <div className=" h-[364px] w-[100%] p-2  bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-2 w-[100%]">
          <div className="flex flex-col">
            <p className="text-[#000000] font-[DM Sans] font-[500] text-[14px] leading-[18px] customClassThird">
              Risk Monitoring
            </p>
            <p className="text-[#9CA4B6] font-[DM Sans] font-[500] text-[11px] leading-[16px] mt-[2px]">
              % of segments performing below benchmark
            </p>
          </div>

          <button
            className="text-[#6750a4]  text-[12px] font-[500] gap-2 w-[22%] flex items-center justify-center customClassThird"
            onClick={handleRiskMonitoringReviewClick}
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        <table className="mt-2 w-[100%]">
          <thead className="">
            <tr className="w-[100%] flex items-center justify-between border-t border-b border-gray-100 p-3">
              <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px]  text-left w-[25%]">
                Categories
              </th>
              <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mr-3">
                Jul
              </th>
              <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mr-2 ">
                Jun
              </th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? null
              : PieChartData.map(([category, metrics]: any) => (
                  <tr
                    key={category}
                    className="border-b border-gray-100 flex justify-between items-center px-3 py-1 w-[100%]"
                  >
                    <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] text-left w-[25%]">
                      {category}
                    </td>
                    <td>
                      <MiniPieChart
                        percentage={metrics.Latest_Month_Percentage || 0} // Fallback to 0 if no percentage
                      />
                    </td>
                    <td>
                      <MiniPieChart
                        percentage={metrics.Previous_Month_Percentage || 0} // Fallback to 0 if no percentage
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="h-[364px] w-[100%] p-2  bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-2 w-[100%]">
          <p className="font-[DM Sans] font-[500] text-[14px] leading-[18px] customClassThird">
            Hotspots
          </p>
          <button
            className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] customClassThird"
            onClick={handleHotspotReviewClick}
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        {Array.isArray(databarData) &&
          databarData.length > 0 &&
          adjustedHotspot.map((each: any) => {
            const arrowPosition = `${
              ((each.Current_Performance - each.Min_Performance) /
                (each.Max_Performance - each.Min_Performance)) *
              100
            }%`;

            return (
              <div
                className="w-[100%] self-stretch px-3 py-3 justify-between items-center gap-10 flex border-b border-gray-100"
                key={each.segment_name}
              >
                <div className="w-[30%] text-[#000000] text-[12px] font-[400] font-['DM Sans']">
                  {each.segment_name}
                </div>
                <div className="w-[70%] flex-col justify-center items-start inline-flex">
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
                        {each.Min_Performance.toFixed(2)}%
                      </div>
                      {each.Current_Performance && (
                        <img
                          src={HotspotBarArrow}
                          className="ml-1 z-10 mt-2 h-[8px] w-[8px] text-[#ffffff]"
                          style={{
                            margin: "2px",
                            position: "absolute",
                            top: "18px",
                            left: arrowPosition,
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full h-[18px] relative">
                    <div
                      className="text-black text-[12px] font-[400] font-['DM Sans'] absolute right-1"
                      style={{ top: "-20px", textAlign: "right" }}
                    >
                      {each.Max_Performance.toFixed(2)}%
                    </div>
                    <div className="w-full h-2 top-[2px] absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
                    <div
                      className={`text-black text-[12px] font-[600] mt-2 font-['DM Sans']`}
                      style={{
                        position: "absolute",
                        left: arrowPosition,
                        marginLeft: "5px",
                      }}
                    >
                      {each.Current_Performance.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MonitoringDiagnostics;
