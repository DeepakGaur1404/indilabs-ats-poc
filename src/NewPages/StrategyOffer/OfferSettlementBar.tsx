import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";
import OfferSegementation from "./OfferSegementations";

type Props = {
  selectedSegment: any;
};
const OfferSettlementBar: React.FC<Props> = (props) => {
  console.log("props.selectedSegment value", props.selectedSegment);
  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>();

  const state: any = {
    series: {

      "High Payer": [
        {
          name: "Settlement",
          data: [52.4, 37.3, 20.2],
          color: "#FFB200",
        },
        {
          name: "No-Settlement",
          data: [47.6, 62.7, 79.8],
     
          color: "#4169E1",
        },
      ],

      "Medium Payer": [
        {
            name: "Settlement",
          data: [20, 30, 35],
          color: "#FFB200",
        },
        {
            name: "No-Settlement",
          data: [80, 70, 65],
          color: "#4169E1",
        },
      ],
      "Low Payer": [
        {
            name: "Settlement",
          data: [90, 20, 70],
          color: "#FFB200",
        },
        {
            name: "No-Settlement",
          data: [10, 80, 30],
          color: "#4169E1",
        },
      ],
    },
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "90%",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%",
          // distributed: true,
          // dataLabels: {
          //   enabled: true, // Disable data labels on bars
          //   style:{
          //     colors: ['#000000'],
          //     fontSize: "30px",
          //   }
          // },
          toolbar: {
            show: false, // This will hide the menu
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => {
          return `${val}%`; // Add percentage symbol to bar labels
        },},

      stroke: {
        width: 0,
        colors: ["#7f7f7f"],
      },
      title: {
        text: "",
      },
      xaxis: {
        type: "numeric",
        categories: [0, 20, 40, 60, 80, 100],
        labels: {
            formatter: (val: number) => {
                return Math.floor(val).toString() + "%"; // Rounds the ticks to whole numbers (0, 20, 40...)
              },
        },
        tickAmount: 5, // Adjust the number of ticks as needed
        min: 0, // Set the minimum value
        max: 100, // Set the maximum value
        axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val + "K";
          },
        },
      },
      yaxis: {
        show: false,
        formatter: (val: number) => {
          return val + 5;
        }, // Hide the vertical axis
        axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          
      },
      fill: {
        opacity: 1,
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

//   useEffect(() => {
//     // Hide the menu icon after the chart is rendered
//     const menuIcon = document.querySelector(
//       ".apexcharts-menu-icon"
//     ) as HTMLElement;
//     if (menuIcon) {
//       menuIcon.style.display = "none";
//     }
//   });

  useEffect(() => {
    setSelectedReactApexCharts(true);
  }, [props.selectedSegment]);

  return (
    <div
      id="chart"
      className="min-w-[300px] w-[100%]  xl:w-[53%] 2xl:w-[55%] bg-white border-2 p-3 rounded-xl overflow-x-auto"
    >
      <div className="flex justify-between items-start ml-3 mr-5">
        <h1 className="text-[#000000] font-[500] text-[16px] font-['DM Sans']">
        Settlement Penetration Rate
        </h1>
        <div className="flex items-center gap-5 flex-wrap">

          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[8px] bg-[#FFB200] border rounded-[4px]"></div>
            <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
            Settlement
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[8px] bg-[#4169E1] border rounded-[4px]"></div>
            <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
            No-Settlement
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex flex-col sm:flex-row items-start justify-start">
    
        <div
          className="mt-10  w-[100%]"
        >
          {selectedReactApexCharts ? (
            <ReactApexChart
              options={state.options as any}
              series={state.series[props?.selectedSegment]}
              type="bar"
              height={300}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OfferSettlementBar;
