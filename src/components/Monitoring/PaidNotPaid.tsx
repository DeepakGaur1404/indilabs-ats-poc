// import { useState } from "react";
// import SearchIcon from "../../assets/images/search-icon.png";

// const data = [
//   {
//     fileName: "B1 ",
//     fileSize: "12.600",
//     uploadDate: "70%",
//   },
//   {
//     fileName: "Volum",
//     fileSize: "8787",
//     uploadDate: "19/05/23 23:12",
//   },
//   {
//     fileName: "student Loans",
//     fileSize: "203 MB",
//     uploadDate: "19/05/23 23:12",
//   },
//   {
//     fileName: "Auto Loanes",
//     fileSize: "203 MB",
//     uploadDate: "19/05/23 23:12",
//   },
// ];

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  activeStateData,
  locationData,
  mapData,
} from "../../redux/reducers/locationReducer/locationSlice";
import upgreenarrow from "../../assets/images/upgreenarrow.svg";
import DownRedArrow from "../../assets/icons/reddownarrow.svg";

const PaidNotPaid = (props: { setSelectedCity?: (value: string) => void }) => {
  const location = useLocation();
  const [tableName, setTableName] = useState("");

  const dispatch = useDispatch();

  // const [activeData, setActiveData] = useState({});
  const [activeData, setActiveData] = useState(0);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/monitoring/location") {
      ClearData();
      setTableName("Bucket Analysis");
    } else if (pathname === "/monitoring/agency") {
      ClearData();
      setTableName("Location Analysis");
    } else if (
      pathname === "/monitoring/placements" ||
      pathname === "/monitoring/recovery/placement"
    ) {
      ClearData();
      setTableName("Placement Pipeline");
    } else if (pathname === "/monitoring/agency") {
      ClearData();
      setTableName("DCA Analysis");
    } else if (
      pathname === "/strategy" ||
      pathname === "/strategy/recovery" ||
      pathname === "/strategy/reviewExecution/recovery"
    ) {
      ClearData();
      setTableName("Segmentation");
    }
    // else if (pathname === "/monitoring/placements") {
    //   ClearData();
    //   setTableName("Placement Pipeline");
    // }
  }, []);

  const ClearData = () => {
    dispatch(activeStateData(0));
    dispatch(locationData([]));
  };
  const indiaCities = {
    mumbai: [19.076, 72.8777],
    delhi: [28.6139, 77.209],
    bangalore: [12.9716, 77.5946],
    hyderabad: [17.385, 78.4867],
    chennai: [13.0827, 80.2707],
    kolkata: [22.5726, 88.3639],
    pune: [18.5204, 73.8567],
    ahmedabad: [23.0225, 72.5714],
    jaipur: [26.9124, 75.7873],
    lucknow: [26.8467, 80.9462],
  };

  const tableData = [
    {
      cityName: "Pune",
      Test: "B1",
      Volume: 12600,
      Sep: "70%",
      Aug: "60%",
      Jul: "65%",
      Avg: "68%",
      position: [
        [19.076, 72.8777],
        [28.6139, 77.209],
        [12.9716, 77.5946],

        [13.0827, 80.2707],
        [26.1445, 91.7362],
      ],
      status: "green",
      percentage: "",
    },
    {
      cityName: "Delhi",
      Test333: "B2",
      Volume: 12600,
      Sep: "65%",
      Aug: "70%",
      Jul: "60%",
      Avg: "30%",
      position: [
        [19.076, 72.8777],
        [28.6139, 77.209],
        [12.9716, 77.5946],
        [26.9124, 75.7873],
        [26.1445, 91.7362],
      ],
      status: "red",
    },
    {
      cityName: "Mumbai",
      Test: "B3",
      Volume: 12600,
      Sep: "60%",
      Aug: "70%",
      Jul: "65%",
      Avg: "30%",
      position: [
        [19.076, 72.8777],
        [28.6139, 77.209],
        [12.9716, 77.5946],
        [26.9124, 75.7873],
      ],
      status: "green",
    },
    {
      cityName: "Hyderabad+",
      Test: "B4+",
      Volume: 12600,
      Sep: "60%",
      Aug: "70%",
      Jul: "65%",
      Avg: "18%",
      position: [
        [19.076, 72.8777],
        [28.6139, 77.209],
        [12.9716, 77.5946],
        [26.8467, 80.9462],
        [26.1445, 91.7362],
      ],
      status: "orange",
    },
  ];
  const strategyTableData = [
    {
      segmentName: "Very High Risk",
      Distr: "15%",
      Volume: 12000,
      CurrentKPI: "65%",
      Benchmark: "68%",
    },
    {
      segmentName: "High Risk",
      Distr: "20%",
      Volume: 6200,
      CurrentKPI: "35%",
      Benchmark: "30%",
    },
    {
      segmentName: "Medium Risk",
      Distr: "6%",
      Volume: 2455,
      CurrentKPI: "25%",
      Benchmark: "20%",
    },
    {
      segmentName: "Low Risk",
      Distr: "13%",
      Volume: 8000,
      CurrentKPI: "20%",
      Benchmark: "18%",
    },
    {
      segmentName: "Very Low Risk",
      Distr: "13%",
      Volume: 1560,
      CurrentKPI: "20%",
      Benchmark: "18%",
    },
  ];

  useEffect(() => {
    dispatch(locationData(tableData[0]));
  }, []);

  return (
    <div
      className={`w-[100%] h-[447px] lg:h-[449px]  pt-5 pr-5 pl-5  mt-10 shadow-md bg-white lg:w-[49%] placemnetHeaight rounded-2xl`}
    >
      <h1 className=" text-[#000000] font-[500] text-[16px] font-['DM Sans'] leading-[18px]">
        {tableName}
      </h1>

      <div className="overflow-x-auto">
        <table className="w-[100%]" cellPadding={20}>
          <thead>
            <tr className="border-b-[1px] border-[#F3F4F6] flex justify-evenly ">
              <th
                className={`font-[400] text-[#9CA4B6] text-[12px] font-['DM Sans'] tracking-wider text-start w-[19.6%] -ml-[8px] mr-2 ${
                  tableName !== "Placement Pipeline" && "-ml-1 mr-0"
                }  `}
              >
                {tableName === "Placement Pipeline"
                  ? "Placement"
                  : tableName === "Bucket Analysis"
                  ? "Bucket"
                  : tableName === "Segmentation"
                  ? "Segments"
                  : "City"}
              </th>
              {/* <th className={`font-medium text-gray-500  tracking-wider text-start w-[19.6%] -ml-3 mr-2 ${tableName !== "Placement Pipeline" && '-ml-1 mr-0'}  `}>
                {tableName === "Placement Pipeline" ? "Placement" : "Test"}
              </th> */}
              <th
                className={`font-[400] text-[#9CA4B6] text-[12px] font-['DM Sans'] tracking-wider text-center w-[16%] ${
                  tableName !== "Segmentation" ? "ml-0" : "ml-7"
                }`}
              >
                {`${tableName !== "Segmentation" ? "Volume" : "Distr"}`}
              </th>
              <th
                className={`font-[400] text-[#9CA4B6] text-[12px] font-['DM Sans']   tracking-wider text-center w-[16%] ${
                  tableName !== "Segmentation" ? "" : "relative left-2"
                }`}
              >
                {`${tableName !== "Segmentation" ? "Sep" : "Volume"}`}
              </th>
              <th
                className={`font-[400] text-[#9CA4B6] text-[12px] font-['DM Sans']  tracking-wider text-center ${
                  tableName !== "Segmentation"
                    ? "w-[16%]"
                    : "w-[22%] relative left-1"
                }`}
              >
                {`${tableName !== "Segmentation" ? "Aug" : "Current KPI"}`}
              </th>
              <th className="font-[400] text-[#9CA4B6] text-[12px] font-['DM Sans']  tracking-wider text-center w-[16%]">
                {`${tableName !== "Segmentation" ? "Jul" : "Benchmark"}`}
              </th>
              {tableName !== "Segmentation" ? (
                <th className="font-[400] text-[#9CA4B6] text-[12px] font-['DM Sans']  tracking-wider text-center w-[16%]">
                  3MAvg
                </th>
              ) : null}
            </tr>
          </thead>

          {tableName !== "Segmentation" ? (
            <tbody className="w-full">
              {tableData?.map((data, id) => {
                if (id > 3 && !(tableName === "DCA Analysis")) return null;
                return (
                  <tr
                    className={` h-[70px] rounded-xl ${
                      id !== activeData
                        ? "border-b-[1px] border-[#F3F4F6]"
                        : null
                    } z-0 flex justify-evenly mt-4 ${
                      id === activeData &&
                      `  border-[#8470CD] border-[2.5px] z-10 shadow-lg`
                    } cursor-pointer `}
                    onClick={() => {
                      setActiveData(id);
                      dispatch(activeStateData(id + 1));
                      dispatch(locationData(data));
                      dispatch(mapData(data));
                      props.setSelectedCity &&
                        props.setSelectedCity(data.cityName);
                    }}
                  >
                    <td
                      className={
                        "text-start text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[19.6%]"
                      }
                    >
                      {tableName === "Bucket Analysis" &&
                        `B${id + 1 <= 3 ? id + 1 : id + 1 + `+`}`}
                      {tableName === "Placement Pipeline" &&
                        `Plc ${id + 1 <= 3 ? id + 1 : id + 1 + `+`}`}
                      {tableName === "Location Analysis" &&
                        `${data.cityName}  ${id <= 3 ? "" : "+"}`}
                      {/* {tableName === "Segmentation" &&
                        // `${strategyTableData?.map((rows,idx)=>{
                        //   return rows.segmentName;
                        // })}`
                        `${
                          id === 0
                            ? `Very High ${
                                location.pathname === "/strategy/recovery"
                                  ? "Payer"
                                  : "Risk"
                              }`
                            : id === 1
                            ? "High Risk"
                            : id === 2
                            ? "Medium Risk"
                            : id === 3
                            ? "Low Risk"
                            : "Very Low Risk"
                        }`} */}
                    </td>
                    <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] flex flex-col w-[16%]">
                      {data.Volume}
                      {tableName === "DCA Analysis" && (
                        <span className="text-[14px] text-blue-800 font-[600]">
                          {data?.percentage}
                        </span>
                      )}
                    </td>

                    <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[16%]">
                      {id === 0 ? (
                        <div className="min-w-[60px] flex gap-0 justify-center items-center">
                          <div>
                            <img
                              src={upgreenarrow}
                              alt=""
                              className={`${
                                tableName === "Location Analysis"
                                  ? "mr-1 mt-[0px]"
                                  : "ml-[5px] mt-[2px]"
                              }`}
                            />
                          </div>
                          <div className="mr-3">{data.Sep}</div>
                        </div>
                      ) : id === 1 ? (
                        <div className="min-w-[60px] flex gap-0 justify-center items-center">
                          <div>
                            <img
                              src={DownRedArrow}
                              alt=""
                              className={`${
                                tableName === "Location Analysis"
                                  ? "mr-1 mt-[0px]"
                                  : "ml-[7px] mt-[2px]"
                              }`}
                            />
                          </div>
                          <div className="mr-3">{data.Sep}</div>
                        </div>
                      ) : (
                        data.Sep
                      )}
                    </td>
                    <td
                      className={`text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[16%]`}
                    >
                      {id < 3 && id != 0 ? (
                        <div className="min-w-[60px] flex gap-0 justify-center items-center">
                          <div>
                            <img
                              src={upgreenarrow}
                              alt=""
                              className={`${
                                tableName === "Location Analysis"
                                  ? "mr-1 mt-[0px]"
                                  : "ml-[5px] mt-[2px]"
                              }`}
                            />
                          </div>
                          <div className="mr-3 text-[#161D29] font-[400] text-[12px] font-['DM Sans']">
                            {data.Aug}
                          </div>
                        </div>
                      ) : id === 3 ? (
                        <div className="min-w-[60px] flex gap-0 justify-center items-center">
                          <div>
                            <img
                              src={DownRedArrow}
                              alt=""
                              className={`${
                                tableName === "Location Analysis"
                                  ? "mr-1 mt-[0px]"
                                  : "ml-[7px] mt-[2px]"
                              }`}
                            />
                          </div>
                          <div className="mr-3 text-[#161D29] font-[400] text-[12px] font-['DM Sans']">
                            {data.Aug}
                          </div>
                        </div>
                      ) : (
                        data.Aug
                      )}
                    </td>
                    <td
                      className={`text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[16%]`}
                    >
                      {id === 0 || id === 2 ? (
                        <div className="min-w-[60px] flex gap-0 justify-center items-center">
                          <div>
                            <img
                              src={DownRedArrow}
                              alt=""
                              className={`${
                                tableName === "Location Analysis"
                                  ? "mr-1 mt-[0px]"
                                  : "ml-[7px] mt-[2px]"
                              }`}
                            />
                          </div>
                          <div className="mr-3 text-[#161D29] font-[400] text-[12px] font-['DM Sans']">
                            {data.Jul}
                          </div>
                        </div>
                      ) : id === 3 ? (
                        <div className="min-w-[60px] flex gap-0 justify-center items-center">
                          <div>
                            <img
                              src={upgreenarrow}
                              alt=""
                              className={`${
                                tableName === "Location Analysis"
                                  ? "mr-1 mt-[0px]"
                                  : "ml-[5px] mt-[2px]"
                              }`}
                            />
                          </div>
                          <div className="mr-3 text-[#161D29] font-[400] text-[12px] font-['DM Sans']">
                            {data.Jul}
                          </div>
                        </div>
                      ) : (
                        data.Jul
                      )}
                    </td>
                    <td
                      className={`text-[#161D29] font-[400] text-[12px] font-['DM Sans'] text-center flex justify-center items-center w-[16%] ${
                        tableName === "Location Analysis"
                          ? "mb-[8px]"
                          : tableName === "Placement Pipeline"
                          ? "mb-[9px]"
                          : "mb-0 mt-[0.5px]"
                      }`}
                    >
                      <div className=" text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[100%] rounded text-center ">
                        {data.Avg}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {/* <tr className="border-b">
              <td className="text-center font-normal text-gray-500">B2</td>
              <td className="text-center font-normal text-gray-500">6,500</td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                33%
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                28%
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                35%
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                <div className="bg-green-600 text-white w-[60px] rounded">
                  30%
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="text-center font-normal text-gray-500">B3</td>
              <td className="text-center font-normal text-gray-500">4,200</td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                33%
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                28%
              </td>
              <td className="text-center font-normal text-gray-500r">
                <div className="bg-green-600 text-white w-[60px] rounded">
                  25%
                </div>
              </td>
              <td className="text-center font-normal text-gray-500 text-[14px]">
                20%
              </td>
            </tr>
            <tr className="border-b">
              <td className=" text-center font-normal text-gray-500">B4+</td>
              <td className=" text-center font-normal text-gray-500">3,800</td>
              <td className="  text-center font-normal text-gray-500 text-[14px]">
                33%
              </td>
              <td className="  text-center font-normal text-gray-500 text-[14px]">
                28%
              </td>
              <td className=" text-center font-normal text-gray-500 text-[14px]">
                <div className="bg-yellow-400 text-white w-[60px] rounded">
                  20%
                </div>
              </td>
              <td className=" text-center font-normal text-gray-500 text-[14px]">
                18%
              </td>
            </tr> */}
            </tbody>
          ) : (
            <tbody className="w-full">
              {strategyTableData?.map((data, id) => {
                return (
                  <tr
                    className={` h-[67px] rounded-xl ${
                      id !== activeData
                        ? "border-b-[1px] border-[#F3F4F6]"
                        : null
                    } z-0 flex justify-evenly ${
                      id === activeData &&
                      ` border-[#8470CD] border-[2.5px] z-10 shadow-lg`
                    } cursor-pointer `}
                    onClick={() => {
                      setActiveData(id);
                      dispatch(activeStateData(id + 1));
                      dispatch(locationData(data));
                      dispatch(mapData(data));
                    }}
                  >
                    <td
                      className={
                        "text-start text-[#161D29] font-[400] text-[12px] min-w-[116px] font-['DM Sans'] min-w-[127px]  w-[19.6%]"
                      }
                    >
                      {tableName === "Segmentation" &&
                        `${
                          id === 0
                            ? `Very High ${
                                location.pathname === "/strategy/recovery"
                                  ? "Payer"
                                  : "Risk"
                              }`
                            : id === 1
                            ? `High ${
                                location.pathname === "/strategy/recovery"
                                  ? "Payer"
                                  : "Risk"
                              }`
                            : id === 2
                            ? `Medium ${
                                location.pathname === "/strategy/recovery"
                                  ? "Payer"
                                  : "Risk"
                              }`
                            : id === 3
                            ? `Low ${
                                location.pathname === "/strategy/recovery"
                                  ? "Payer"
                                  : "Risk"
                              }`
                            : `Very Low ${
                                location.pathname === "/strategy/recovery"
                                  ? "Payer"
                                  : "Risk"
                              }`
                        }`}
                    </td>
                    {/* <td
                      className={
                        "text-start text-[#161D29] font-[400] text-[12px] font-['DM Sans']  w-[19.6%]"
                      }
                    >
                      {data.segmentName}
                    </td> */}
                    <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] flex flex-col w-[16%]">
                      {data.Distr}
                    </td>

                    <td
                      className={`text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] ${
                        id > 1 ? "mr-10" : "mr-0"
                      } w-[16%]`}
                    >
                      {data.Volume}
                    </td>
                    <td
                      className={`text-center text-[#161D29] font-[400] pt-2 text-[12px] font-['DM Sans'] ${
                        id === 2
                          ? "bg-[#10B981] w-[11%] py-5 mr-1 rounded-sm text-[#FFFFFF]"
                          : id > 2
                          ? "bg-[#F9C700] w-[11%] py-5 mr-1 rounded-sm  text-[#FFFFFF]"
                          : "null"
                      } ${
                        id > 1
                          ? "w-[16%] text-center h-[14px] mt-5 ml-0"
                          : "w-[15%] ml-5 mt-3"
                      }`}
                    >
                      {id > 2 ? (
                        <div className="relative bottom-1">
                          {data.CurrentKPI}
                        </div>
                      ) : id == 2 ? (
                        <div className="relative bottom-[4px]">
                          {data.CurrentKPI}
                        </div>
                      ) : (
                        data.CurrentKPI
                      )}
                    </td>
                    <td
                      className={`text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[16%]`}
                    >
                      {data.Benchmark}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default PaidNotPaid;
