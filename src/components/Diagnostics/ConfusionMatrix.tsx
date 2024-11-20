// import { position } from "html2canvas/dist/types/css/property-descriptors/position";
// import React, { useState, useEffect } from "react";
// import ReactApexChart from "react-apexcharts";

// const AllocationStackedBarChart: React.FC = () => {
//   const [selectedReactApexCharts, setSelectedReactApexCharts] = useState<boolean>(false); // Initialize with false

//   const state: any = {
//     series: [
//       {
//         name: "Bucket Slope",
//         data: [7.5, 0],
//         color: "#F7FBFF",
//       },
//       {
//         name: "Marine Sprite",
//         data: [7.5, 0],
//         color: "#ECF4FF",
//       },
//       {
//         name: "Marine Bucket",
//         data: [0, 7.5],
//         color: "#06296F",
//       },
//       {
//         name: "Marine splice",
//         data: [0, 7.5],
//         color: "#DAECFF",
//       },
//     ],
//     options: {
//       chart: {
//         type: "bar",
//         height: 300,
//         width: "100%",
//         stacked: true,
//         stackType: "100%",
//         toolbar: {
//           show: false, // Hide toolbar
//         },
//       },
//       plotOptions: {
//         bar: {
//           horizontal: true,
//           barHeight: "100%", // Full height bars
//         },
//       },
//       dataLabels: {
//         enabled: true,
//         formatter: (val: number, opts: any) => {
//           // Custom data label formatting
//           if (opts.seriesIndex === 0) return "128";
//           if (opts.seriesIndex === 1) return "423";
//           if (opts.seriesIndex === 2) return "14.383k";
//           if (opts.seriesIndex === 3) return "882";
//         },
//         style: {
//           colors: ["#293A56", "#293A56", "#E4E6E9", "#293A56"], // Data label text colors
//         },
//       },
//       xaxis: {
//         type: "numeric",
//         min: 0,
//         max: 100,
//         // offsetY: -20,
//         offsetX: -2,
//         labels: {
//           formatter: (val: number) => {
//             const customLabels: any = {
//               0: "1.5",
//               20: "1",
//               50: "0.5",
//               // 60: "1",
//               70: "0",
//               100: "-0.5",
             
//             };
//             return customLabels[val] || ''; // Custom labels for X-axis
//           },
//         },
//         axisBorder: {
//           show: false,
//         },
//         axisTicks: {
//           show: false, // Hide axis ticks
//         },
//         title: {
//           text: "Predicted Label",
//           offsetX: 10,
//           offsetY: -5,
//           style: {
//             color: "#3B414B",
//             fontSize: "11px",
//             fontFamily: "DM Sans",
//             fontWeight: 400,
//           },
//         },
//       },
//       yaxis: {
//         show: false,
//           type: "numeric",
//         // tickAmount: 6,
//         // min: 0,
//         // max: 100,
//         labels: {
//           offsetX: 10,
//           offsetY: -35,
//           formatter: (val: number) => {
//             const customLabels: any = {
             
//               0: "1.5",
//               40: "1",
//               50: "0.5",
//               // 60: "1",
//               // 70: "0",
//               100: "0",
//             };
//             return customLabels[val] || ''; // Custom labels for Y-axis
//           },
//         },
//         axisBorder: {
//           show: false,
//         },
//         axisTicks: {
//           show: false, // Hide axis ticks
//         },
//         // title: {
//         //   text: "True Label",
//         //   offsetX: 1,
//         //   // offsetY: 20,
//         //   minWidth: 0,
//         //   maxWidth: 160,
//         //   rotate: -90,
//         //   style: {
//         //     color: "#3B414B",
//         //     fontSize: "11px",
//         //     fontFamily: "DM Sans",
//         //     fontWeight: 400,
          
//         //   },
//         // },
//       },
//       fill: {
//         opacity: 1,
//       },
//       legend: {
//         show: false,
//       },
//       tooltip: {
//         enabled: false, // Disable tooltips
//       },
//       states: {
//         hover: {
//           filter: {
//             type: "none",
//           },
//         },
//       },
//     },
//   };

//   useEffect(() => {
//     setSelectedReactApexCharts(true);
//     const menuIcon = document.querySelector(".apexcharts-menu-icon") as HTMLElement;
//     if (menuIcon) {
//       menuIcon.style.display = "none"; // Hide the toolbar menu icon
//     }
//   }, []);

//   return (
//     <div id="chart" className="w-[100%] py-2 px-4 mt-1">
//       <div className="border-[#E3E3E3] h-[350px] border-[1px] rounded-xl">
//         <h1 className="text-[#000000] font-[500] text-[14px] font-['DM Sans'] mt-2 px-3">
//           Confusion Matrix
//         </h1>
//         <div className="w-[100%] relative  ml-5 -mt-5 flex flex-row">
//          <div className="-rotate-90 absolute  -ml-4 top-[40%] text-[11px] font-[400] text-[#3B414B]">True Label</div>
//         <table cellPadding={13} className=" h-[290px] mt-2 -mr-8">
//           <tbody>
//             <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
//               <td>1.5</td>
//             </tr>
//             <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
//               <td>1</td>
//             </tr>
//             <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
//               <td>0.5</td>
//             </tr>
//             <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
//               <td>0</td>
//             </tr>
//             <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
//               <td>-0.5</td>
//             </tr>
//           </tbody>
//         </table>
//         <div className="w-[100%] ">
//         {selectedReactApexCharts ? (
//             <ReactApexChart options={state.options} series={state.series} type="bar" height={330} width="100%" />
//           ) : null}
//         </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllocationStackedBarChart;
import { position } from "html2canvas/dist/types/css/property-descriptors/position";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const  ConfusionMatrix: React.FC = () => {
  const [selectedReactApexCharts, setSelectedReactApexCharts] = useState<boolean>(false); // Initialize with false

  const state: any = {
    series: [
      {
        name: "Bucket Slope",
        data: [7.5, 0],
        color: "#F7FBFF",
      },
      {
        name: "Marine Sprite",
        data: [7.5, 0],
        color: "#ECF4FF",
      },
      {
        name: "Marine Bucket",
        data: [0, 7.5],
        color: "#06296F",
      },
      {
        name: "Marine splice",
        data: [0, 7.5],
        color: "#DAECFF",
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 300,
        width: "100%",
        stacked: true,
        stackType: "100%",
        toolbar: {
          show: false, // Hide toolbar
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "100%", // Full height bars
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number, opts: any) => {
          // Custom data label formatting
          if (opts.seriesIndex === 0) return "128";
          if (opts.seriesIndex === 1) return "423";
          if (opts.seriesIndex === 2) return "14.383k";
          if (opts.seriesIndex === 3) return "882";
        },
        style: {
          colors: ["#293A56", "#293A56", "#E4E6E9", "#293A56"], // Data label text colors
        },
      },
      xaxis: {
        type: "numeric",
        min: 0,
        max: 100,
        offsetX: 0, // Remove negative offsets
        labels: {
          formatter: (val: number) => {
            const customLabels: any = {
              0: "1.5",
              20: "1",
              50: "0.5",
              80: "0",
              100: "-0.5",
            };
            return customLabels[val] || ''; // Custom labels for X-axis
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false, // Hide axis ticks
        },
        title: {
          text: "Predicted Label",
          offsetX: 10,
          offsetY: -5,
          style: {
            color: "#3B414B",
            fontSize: "11px",
            fontFamily: "DM Sans",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        show: false,
        type: "numeric",
        labels: {
          offsetX: 10,
          formatter: (val: number) => {
            const customLabels: any = {
              0: "1.5",
              40: "1",
              50: "0.5",
              100: "0",
            };
            return customLabels[val] || ''; // Custom labels for Y-axis
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false, // Hide axis ticks
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: false,
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
      },
    },
  };

  useEffect(() => {
    setSelectedReactApexCharts(true);
    const menuIcon = document.querySelector(".apexcharts-menu-icon") as HTMLElement;
    if (menuIcon) {
      menuIcon.style.display = "none"; // Hide the toolbar menu icon
    }
  }, []);

  return (
    <div id="chart" className="w-full py-2 px-4 mt-1">
      <div className="border-[#E3E3E3] h-[350px] border-[1px] rounded-xl">
        <h1 className="text-[#000000] font-[500] text-[14px] font-['DM Sans'] mt-2 px-3">
          Confusion Matrix
        </h1>
        <div className="w-full relative flex flex-row items-center">
          <div className="-rotate-90 absolute -left-2 top-[40%] text-[11px] font-[400] text-[#3B414B]">
            True Label
          </div>
          <table cellPadding={8} className="h-[300px] -mt-11 -mr-7 ml-5">
            <tbody>
              <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
                <td>1.5</td>
              </tr>
              <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
                <td>1</td>
              </tr>
              <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
                <td>0.5</td>
              </tr>
              <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
                <td>0</td>
              </tr>
              <tr className="h-[5px] text-center text-[#000000] font-[400] text-[12px] font-['DM Sans']">
                <td>-0.5</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full ">
            {selectedReactApexCharts ? (
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="bar"
                height={330}
                width="100%"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfusionMatrix;
