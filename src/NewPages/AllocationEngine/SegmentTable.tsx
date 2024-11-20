import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
// import AllocationStackedBarChart from "./allocationStackedBarChart";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getPerformanceData } from "../../redux/reducers/ReviewPerformanceReducer/ReviewPerformanceSlice";

import { useLocation } from "react-router-dom";

type Props = {
  showTestIdComponent?: any;
  showTestIdCompo?: any;
  segmentData?: string;
};

function SegmentTable(props: Props) {
  const [activeData, setActiveData] = useState(1);
  const location = useLocation();

  const { showTestIdComponent, showTestIdCompo, segmentData } = props;

  // const tableData = [
  //   {
  //     segment: "Champion",
  //     volume: "80%",
  //     Bad: "16%",
  //     id: 1,
  //     treatmentData: {
  //       message: {
  //         start: 1,
  //         end: 7,
  //       },
  //       call: {
  //         start: 8,
  //         end: 22,
  //       },
  //       agency: {
  //         start: 23,
  //         end: 28,
  //       },
  //       legal: {
  //         start: 29,
  //         end: 30,
  //       },
  //     },
  //   },
  //   {
  //     segment: "Challenger 1",
  //     volume: "10%",
  //     Bad: "9%",
  //     id: 2,
  //     treatmentData: {
  //       message: {
  //         start: 1,
  //         end: 12,
  //       },
  //       call: {
  //         start: 13,
  //         end: 22,
  //       },
  //       agency: {
  //         start: 23,
  //         end: 28,
  //       },
  //       legal: {
  //         start: 29,
  //         end: 30,
  //       },
  //     },
  //   },
  //   {
  //     segment: "Challenger 2",
  //     volume: "10%",
  //     Bad: "4%",
  //     id: 3,
  //     treatmentData: {
  //       message: {
  //         start: 0,
  //         end: 0,
  //       },
  //       call: {
  //         start: 1,
  //         end: 22,
  //       },
  //       agency: {
  //         start: 23,
  //         end: 28,
  //       },
  //       legal: {
  //         start: 29,
  //         end: 30,
  //       },
  //     },
  //   },
  // ];
  const dispatch: any = useDispatch();
  const tableData: any = useSelector(
    (state: any) => state?.performance.performanceData
  );
  console.log("tableData", tableData);
  useEffect(() => {
    dispatch(getPerformanceData());
  }, []);

  const COLORS = ["#00B050", "#7030A0", "#ED7D31", "#FF0000"];

  const state = {
    series: [
      {
        name: "Treatments",
        data: [
          {
            x: "HOLD",
            y: [44, 55, 41, 37, 22],
            fillColor: "#E57373", // Color for HOLD
          },
          // {
          //   x: 'Striking Calf',
          //   y: [53, 32, 33, 52, 13],
          //   fillColor:'red'
          // },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            enabled: false, // Disable data labels on bars
          },
          barHeight: 20,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "",
      },
      xaxis: {
        categories: ["Treatments"],
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val + "K";
          },
        },
      },
      fill: {
        opacity: 1,
        pattern: {
          style: ["solid"],
        },
      },
      legend: {
        show: false,
      },
      menu: {
        show: false,
      },
    },
  };

  (state.options.chart as any).type = "bar";

  useEffect(() => {
    // Hide the menu icon after the chart is rendered
    const menuIcon = document.querySelector(
      ".apexcharts-menu-icon"
    ) as HTMLElement;
    if (menuIcon) {
      menuIcon.style.display = "none";
    }
  }, []);

  const tableNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  useEffect(() => {
    if (location.pathname === "/strategy/allocationEngine/optimizeStrategy") {
      showTestIdComponent();
    }
  });

  const onClickShowTestIdComp = () => {
    showTestIdComponent();
  };

  return (
    // <div>
    //   <table className="w-300 table-auto">
    //     <thead>
    //       <tr>
    //         <th className="px-4 py-2">Segment</th>
    //         <th className="px-4 py-2">Volume</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td className="px-4 py-2">Champion</td>
    //         <td className="px-4 py-2">
    //           <div className="flex items-center">

    //             <span className="ml-1">80%</span>
    //           </div>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td className="px-4 py-2">Challenger1</td>
    //         <td className="px-4 py-2">
    //           <div className="flex items-center">

    //             <span className="ml-1">20%</span>
    //           </div>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td className="px-4 py-2">Challenger1</td>
    //         <td className="px-4 py-2">
    //           <div className="flex items-center">

    //             <span className="ml-1">20%</span>
    //           </div>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <div className="min-w-[300px] w-[97%] bg-white rounded lg:ml-6 overflow-x-auto">
      <table className="w-[100%]" cellPadding={10}>
        <thead>
          <tr>
            <th className="w-[10%] font-['calibri' !important] font-[500] text-[18px] border text-start">
              Segment
            </th>
            <th className="w-[10%] font-['calibri' !important] font-[500] text-[18px] border">
              Volume
            </th>
            <th className="font-['calibri' !important] font-[400] text-[20px] border flex items-center gap-3">
              <p>Treatments</p>
              {/* <select
                defaultValue={segmentData}
                className="w-[100px] pl-3 pr-1 border rounded bg-violet-300 flex items-center justify-center gap-2"
              >
                <option value="VHR">VHR</option>
                <option value="HR">HR</option>
                <option value="MR">MR</option>
                <option value="LR">LR</option>
                <option value="H Bal">H Bal</option>
              </select> */}
            </th>
            {/* <div className="flex justify-between items-start ml-3 mr-5">
              <h1 className="text-[#000000] font-[500] text-[16px] font-['DM Sans']">
                Treatments{" "}
              </h1>
              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[8px] bg-[#FFFFFF] border rounded-[4px]"></div>
                  <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
                    Hold
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[8px] bg-[#4EAD5B] border rounded-[4px]"></div>
                  <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
                    Message
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[8px] bg-[#68349A] border rounded-[4px]"></div>
                  <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
                    Call
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[8px] bg-[#DE8344] border rounded-[4px]"></div>
                  <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
                    Agency
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[8px] bg-[#EA3323] border rounded-[4px]"></div>
                  <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
                    Legal
                  </div>
                </div>
              </div>
            </div> */}
          </tr>
        </thead>
        <tbody className="w-full">
          {tableData?.map(
            (each: {
              segment: string;
              volume: string;
              treatmentData: {
                message: {
                  start: number;
                  end: number;
                };
                call: {
                  start: number;
                  end: number;
                };
                agency: {
                  start: number;
                  end: number;
                };
                legal: {
                  start: number;
                  end: number;
                };
              };
            }) => (
              <tr
                // className="text-center font-[calibri] font-[500] text-[19px] border-b-2"
                className="text-center font-['calibri' !important] font-[400] text-[18px] border-2"
              >
                <td className="border text-start">{each.segment}</td>
                <td className="border">{each.volume}</td>
                <td className="border">
                  <div className="bg-slate-400 w-full flex h-full">
                    <div
                      className=""
                      style={{
                        height: "28px",
                        width: `${Number(
                          ((each?.treatmentData?.message.end -
                            each?.treatmentData?.message.start ===
                          0
                            ? 0
                            : each?.treatmentData?.message.end -
                              each?.treatmentData?.message.start +
                              1) *
                            100) /
                            30
                        )
                          .toFixed(2)
                          .toString()}%`,
                        backgroundColor: COLORS[0],
                      }}
                    ></div>
                    <div
                      className=""
                      style={{
                        height: "28px",
                        width: `${Number(
                          ((each?.treatmentData?.call.end -
                            each?.treatmentData?.call.start ===
                          0
                            ? 0
                            : each?.treatmentData?.call.end -
                              each?.treatmentData?.call.start +
                              1) *
                            100) /
                            30
                        )
                          .toFixed(2)
                          .toString()}%`,
                        backgroundColor: COLORS[1],
                      }}
                    ></div>
                    <div
                      className=""
                      style={{
                        height: "28px",
                        width: `${Number(
                          ((each?.treatmentData?.agency.end -
                            each?.treatmentData?.agency.start ===
                          0
                            ? 0
                            : each?.treatmentData?.agency.end -
                              each?.treatmentData?.agency.start +
                              1) *
                            100) /
                            30
                        )
                          .toFixed(2)
                          .toString()}%`,
                        backgroundColor: COLORS[2],
                      }}
                    ></div>
                    <div
                      className=""
                      style={{
                        height: "28px",
                        width: `${Number(
                          ((each?.treatmentData?.legal.end -
                            each?.treatmentData?.legal.start ===
                          0
                            ? 0
                            : each?.treatmentData?.legal.end -
                              each?.treatmentData?.legal.start +
                              1) *
                            100) /
                            30
                        )
                          .toFixed(2)
                          .toString()}%`,
                        backgroundColor: COLORS[3],
                      }}
                    ></div>
                  </div>
                </td>
              </tr>
            )
          )}
          {/* <tr className="text-center font-[calibri] font-[500] text-[19px] border-2">
            <td className="border" colSpan={2}>
              <div className="w-full flex items-center gap-1  ">
                <HiPlus className="text-violet-800" size={35} />
                <button
                  onClick={onClickShowTestIdComp}
                  type="button"
                  className={`w-[90%] p-1 border-2 rounded-md font-['calibri' !important] font-[400] text-gray-500 ${
                    showTestIdCompo && "bg-violet-300 text-gray-800 font-[500]"
                  }`}
                >
                  Add/Edit
                </button>
              </div>
            </td>
            <td>
              <div className="w-full flex justify-between">
                {tableNumber?.map((each: any) => (
                  <div className="flex-1 border-2 text-center font-['calibri' !1important] font-[500]">
                    {each}
                  </div>
                ))}
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
      {/* <div className="w-[100%] flex items-center">
         <div className="w-[20%] flex items-center gap-1 border-2 ">
           <HiPlus className="text-violet-800" size={35}/>
           <button type='button' className="w-[90%] p-1 border-2 rounded font-['calibri' !important] font-[400] text-gray-500">Add/Edit</button>
         </div>
         <table className="w-[80%]" cellPadding={5}>
           <tbody>
             <tr className="border-2">
              {tableNumber.map(each=>(
                <td className="border-2 text-center font-['calibri' !1important] font-[500s]">{each}</td>
              ))}import index from '../../pages/CollectionDashboard/index';
import SegmentTable from './SegmentTable';
import Performance from './performance';

             </tr>
             
           </tbody>
         </table>
      </div> */}
    </div>
  );
}

export default SegmentTable;
