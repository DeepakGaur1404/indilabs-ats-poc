import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";

type Props = {
  selectedSegment: any;
};
const AllocationStackedBarChartRecovery: React.FC<Props> = (props) => {
  console.log("props.selectedSegment value", props.selectedSegment);
  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>();

  const state: any = {
    series: {
      "Very High Payer": [
        {
          name: "Contacted",
          data: [22, 20, 14, 0, 0],
          color: "#4169E1",
        },
        {
          name: "Non-Contacted",
          data: [8, 10, 16, 0, 0],
          color: "#FFB200",
        },
      ],
      "High Payer": [
        {
          name: "Contacted",
          data: [22, 20, 10, 0, 0],
          color: "#4169E1",
        },
        {
          name: "Non-Contacted",
          data: [8, 10, 20, 0, 0],
          color: "#FFB200",
        },
      ],

      All: [
        {
          name: "Contacted",
          data: [22, 20, 10, 8, 6],
          color: "#4169E1",
        },
        {
          name: "Non-Contacted",
          data: [80, 10, 20, 22, 24],
          color: "#FFB200",
        },
      ],
      "Medium Payer": [
        {
          name: "Contacted",
          data: [20, 18, 8, 0, 0],
          color: "#4169E1",
        },
        {
          name: "Non-Contacted",
          data: [10, 12, 22, 0, 0],
          color: "#FFB200",
        },
      ],
      "Low Payer": [
        {
          name: "Contacted",
          data: [22, 20, 10, 0, 0],
          color: "#4169E1",
        },
        {
          name: "Non-Contacted",
          data: [8, 10, 20, 0, 0],
          color: "#FFB200",
        },
      ],
      "Very Low Payer": [
        {
          name: "Contacted",
          data: [20, 18, 8, 0, 0],
          color: "#4169E1",
        },
        {
          name: "Non-Contacted",
          data: [10, 12, 22, 0, 0],
          color: "#FFB200",
        },
      ],
    },
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "90%",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "55%",
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
        type: "numeric",
        categories: [0, 5, 10, 15, 20, 25],
        labels: {
          formatter: (val: number) => Math.round(val).toString(),
        },
        tickAmount: 6, // Adjust the number of ticks as needed
        min: 0, // Set the minimum value
        max: 30, // Set the maximum value
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
    // colors: ['#00B050', '#7030A0', '#ED7D31', '#FF0000']
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
  });

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
          Contact Penetartion{" "}
          {/* {props.selectedSegment === "Medium Risk" && (
            <span className="border-2 bg-violet-300 rounded-md ml-2 pl-2 pr-2">
              MR
            </span>
          )} */}
        </h1>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[8px] bg-[#4169E1] border rounded-[4px]"></div>
            <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
              Contacted
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[8px] bg-[#FFB200] border rounded-[4px]"></div>
            <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
              Non-Contacted
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex flex-col sm:flex-row items-start justify-start">
        {props.selectedSegment !== "All" && (
          <table cellPadding={13} className="w-[90%] sm:w-[30%] mt-[37px]">
            <tbody>
              <tr className="h-[53px] border-b-2 text-[#000000] font-[500] text-[16px] font-['DM Sans']">
                <td>Champion</td>
                <td>80%</td>
              </tr>
              <tr className="h-[67px] border-b-2 text-[#000000] font-[500] text-[16px] font-['DM Sans']">
                <td className="min-w-[115px] ">Challenger 1</td>
                <td>10%</td>
              </tr>
              <tr className="h-[67px] border-b-2 text-[#000000] font-[500] text-[16px] font-['DM Sans']">
                <td className="min-w-[118px]">Challenger 2</td>
                <td>10%</td>
              </tr>
            </tbody>
          </table>
        )}
        <div
          className={`-ml-0 -mt-3 
          ${
            props.selectedSegment !== "All"
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
              height={401}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AllocationStackedBarChartRecovery;
