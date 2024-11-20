import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";

type Props = {
  selectedSegment: string;
};
const OptimizeStackedBarChart: React.FC<Props> = (props) => {
  console.log(props.selectedSegment);
  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>();

  const state: any = {
    series: {
      "Very High Risk": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [7, 11, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [11, 7, 18],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [9, 9, 9],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [3, 3, 3],
          color: "#FF0000",
        },
      ],
      "High Risk": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [12, 4, 11, 0, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [10, 12, 6, 0, 0],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [4, 5, 10, 0, 0],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [4, 9, 3, 0, 0],
          color: "#FF0000",
        },
      ],
      "Medium Risk": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [8, 12, 0, 0, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [11, 7, 19, 0, 0],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [8, 8, 8, 0, 0],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [3, 3, 3, 0, 0],
          color: "#FF0000",
        },
      ],
      "Low Risk": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [12, 17, 11, 0, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [44, 55, 41, 0, 0],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 0, 0],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 0, 0],
          color: "#FF0000",
        },
      ],
      "H Balance": [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 0, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [7, 11, 0, 0, 0],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [11, 7, 18, 0, 0],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [9, 9, 9, 0, 0],
          color: "#ED7D31",
        },
        {
          name: "Bucket Slope",
          data: [3, 3, 3, 0, 0],
          color: "#FF0000",
        },
      ],
    },
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
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
        },
      },
      dataLabels: {
        enabled: false,
      },

      stroke: {
        width: 1,
        colors: ["#7f7f7f"],
      },
      title: {
        text: "",
      },
      xaxis: {
        // show: false,
        // type: "numeric",
        // categories: [0, 5, 10, 15, 20, 25],
        // labels: {
        //   // formatter: (val: number) => Math.round(val).toString(),
        // },
        // labels: {},
        // tickAmount: 6, // Adjust the number of ticks as needed
        // min: 0, // Set the minimum value
        // max: 30, // Set the maximum value
        show: false,
        labels: {
          show: false,
        },
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
        },
        labels: {
          offsetX: -15,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        }, // Hide the vertical axis
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
      grid: {
        padding: {
          left: -15,
          top: -34,
        },
      },
    },
    // colors: ['#00B050', '#7030A0', '#ED7D31', '#FF0000']
  };

  (state.options.chart as any).type = "bar";
  // state.options.xaxis.show = false;

  useEffect(() => {
    // Hide the menu icon after the chart is rendered
    const menuIcon = document.querySelector(
      ".apexcharts-menu-icon"
    ) as HTMLElement;
    if (menuIcon) {
      menuIcon.style.display = "none";
    }
  });

  useEffect(() => {
    setSelectedReactApexCharts(true);
  }, [props.selectedSegment]);

  return (
    <div
      id="chart"
      className="min-w-[300px] w-[100%]  xl:w-[53%] 2xl:w-[96%] bg-white border-2 p-3 rounded-xl ml-8 overflow-x-auto"
    >
      <div className="flex justify-between items-start ml-3 mr-5">
        <h1 className="text-[#000000] font-[500] text-[16px] font-['DM Sans']">
          Treatments{" "}
          {/* {props.selectedSegment === "MR" && (
            <span className="border-2 bg-violet-300 rounded-md ml-2 pl-2 pr-2">
              MR
            </span>
          )} */}
        </h1>
        <div className="flex items-center gap-5 flex-wrap">
          {/* <button
            type="button"
            className="text-[#7F7F7F] font-['calibri' !important] border-[#D9D9D9]  border-2 pl-3 pr-3 rounded"
          >
            HOLD
          </button>
          <button
            type="button"
            className="text-[#FFFFFF] bg-[#00B050] border-[#D9D9D9]   font-['calibri' !important] border-2 pl-3 pr-3 rounded"
          >
            MESSAGE
          </button>
          <button
            type="button"
            className="text-[#FFFFFF] bg-[#7030A0] border-[#D9D9D9]   font-['calibri' !important] border-2 pl-3 pr-3 rounded"
          >
            CALL
          </button>
          <button
            type="button"
            className="text-[#FFFFFF] bg-[#ED7D31] border-[#D9D9D9]   font-['calibri' !important] border-2 pl-3 pr-3 rounded"
          >
            AGENCY
          </button>
          <button
            type="button"
            className="text-[#FFFFFF] bg-[#FF0000] border-[#D9D9D9]   font-['calibri' !important] border-2 pl-3 pr-3 rounded"
          >
            LEGAL
          </button> */}
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
      </div>
      <div className="w-[100%] flex flex-col sm:flex-row items-start justify-start">
        {/* {props.selectedSegment === "MR" && ( */}
        <table cellPadding={13} className="w-[90%] sm:w-[30%] mt-[30px]">
          <tbody>
            <tr className="h-[54px] border-b-2 text-[#000000] font-[500] text-[16px] font-['DM Sans']">
              <td>Champion</td>
              <td>80%</td>
            </tr>
            <tr className="h-[71px] border-b-2 text-[#000000] font-[500] text-[16px] font-['DM Sans']">
              <td>Challenger 1</td>
              <td>10%</td>
            </tr>
            <tr className="h-[70px] border-b-2 text-[#000000] font-[500] text-[16px] font-['DM Sans']">
              <td>Challenger 2</td>
              <td>10%</td>
            </tr>
          </tbody>
        </table>
        {/* )} */}
        <div
          className={` ml-3 mt-3  border-l-[2px] border-[#F3F4F6]
          ${
            props.selectedSegment === "Medium Risk"
              ? "w-[100%] sm:w-[70%] -ml-4"
              : "w-[100%]"
          }
           `}
        >
          {selectedReactApexCharts ? (
            <ReactApexChart
              options={state.options as any}
              series={state.series[props?.selectedSegment]}
              type="bar"
              height={230}
            />
          ) : null}
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2 flex-wrap">
        <button
          // onClick={navigateToOptimizeStrategy}
          className="bg-primary py-2.5 px-9 border border-primary rounded-3xl text-white"
          style={{ background: "#6750A4" }}
        >
          Optimize Strategy
        </button>
      </div>
    </div>
  );
};

export default OptimizeStackedBarChart;
