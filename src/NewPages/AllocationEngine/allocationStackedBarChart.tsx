import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";

type Props = {
  selectedSegment: any;
};
const AllocationStackedBarChart: React.FC<Props> = (props) => {
  console.log("props.selectedSegment value", props.selectedSegment);
  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>();
  const state: any = {
    series: {
      "Very High Risk": [
        {
          name: "Bucket Slope",
          data: [4, 2, 1],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [8, 0, 8],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [7, 13, 12],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [15, 14, 7],
          color: "#ED7D31",
        },
        {
          name: "Buckets Slope",
          data: [8, 3, 3 ],
          color: "#FF0000",
        },
      ],
      "High Risk": [
        {
          name: "Bucket Slope",
          data: [7, 8, 8],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [15, 3, 7],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [8, 11, 11],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [0, 13, 10],
          color: "#ED7D31",
        },
        {
          name: "Buckets Slope",
          data: [0, 3, 2],
          color: "#FF0000",
        },
      ],
      All: [
        {
          name: "Bucket Slope",
          data: [0, 0, 0, 6, 0],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [0, 0, 8, 14, 4],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [7, 13, 12, 10, 11],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [15, 14, 7, 0, 10],
          color: "#ED7D31",
        },
        {
          name: "Buckets Slope",
          data: [8, 3, 3, 0, 5],
          color: "#FF0000",
        },
      ],
      "Medium Risk": [
        {
          name: "Bucket Slope",
          data: [4, 5, 3],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [0, 0, 8],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [7, 13, 12],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [15, 14, 7],
          color: "#ED7D31",
        },
        {
          name: "Buckets Slope",
          data: [8, 3, 3],
          color: "#FF0000",
        },
      ],

      "Low Risk": [
        {
          name: "Bucket Slope",
          data: [2, 2, 3],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [8, 8, 10],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [15, 10, 10],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [7, 14, 5],
          color: "#ED7D31",
        },
        {
          name: "Buckets Slope",
          data: [8, 3, 5],
          color: "#FF0000",
        },
      ],
      "H Balance": [
        {
          name: "Bucket Slope",
          data: [4, 4, 3],
          color: "#ffffff",
        },
        {
          name: "Marine Sprite",
          data: [0, 0, 8],
          color: "#00B050",
        },
        {
          name: "Striking Calf",
          data: [7, 13, 12],
          color: "#7030A0",
        },
        {
          name: "Tank Picture",
          data: [15, 14, 7],
          color: "#ED7D31",
        },
        {
          name: "Buckets Slope",
          data: [8, 3, 3],
          color: "#FF0000",
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
          Treatments{" "}
          {/* {props.selectedSegment === "Medium Risk" && (
            <span className="border-2 bg-violet-300 rounded-md ml-2 pl-2 pr-2">
              MR
            </span>
          )} */}
        </h1>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[8px] bg-[#FFFFFF] border-[black] border-[1px] rounded-[4px]"></div>
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
      <div className="w-[100%] mt-8 flex flex-col sm:flex-row items-start justify-start">
        {props.selectedSegment !== "All" && (
          <table cellPadding={13} className="w-[90%] sm:w-[30%] mt-9">
            <tbody>
              <tr className="h-[54px] border-b-2 text-[#000000] font-[500] text-[16px] font-['DM Sans']">
                <td>Champion</td>
                <td>80%</td>
              </tr>
              <tr className="h-[66px] border-b-2 text-[#000000] font-[500] text-[16px] font-['DM Sans']">
                <td className="min-w-[115px] ">Challenger 1</td>
                <td>10%</td>
              </tr>
              <tr className="h-[68px] border-b-2 text-[#000000] font-[500] text-[16px] font-['DM Sans']">
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

export default AllocationStackedBarChart;