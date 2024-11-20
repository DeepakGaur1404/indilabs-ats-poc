
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

type Props = {
  selectedSegment: string;
  data: any;
};

const OptimizeStackedBarChart: React.FC<Props> = (props, data) => {
  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>();

  useEffect(() => {
    setSelectedReactApexCharts(true);
  }, [props.selectedSegment]);

  const segmentData = props.data[props.selectedSegment]?.segmentation || {};
  const xaxisData = (props.data[props.selectedSegment]?.xaxis || []).map(
    (label: string) => label.replace("_woe", "").replace(/_/g, " ")
  );

  const prepareSeriesData = (segmentData: any, type: string) => {
    return (segmentData[type] || []).map((value: number, index: number) => ({
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${index + 1}`,
      data: [value],
    }));
  };

  const lowSeries = prepareSeriesData(segmentData, "low");
  const mediumSeries = prepareSeriesData(segmentData, "medium/high");
  // const currentSeries = [...lowSeries, ...mediumSeries];

  const labelcolors =
   [
    "#9F0030",
    "#DC3C49",
    "#EF8A62",
    "#FFB200",
    "#FFDD00",
    "#365CD2",
    "#498ADA",
    "#A6C5F7",
    "#D7E1F2",
    "#C6A8FB",
    "#8D7CC8",
    "#4C3F7C",
  ];

  return (
    <div
      id="chart"
      className="border-[#E3E3E3] border-[1px] w-[100%] xl:w-[49%] h-[321px] bg-white rounded-xl"
    >
      <div className="flex justify-between items-center px-3 py-[15px]">
        <h1 className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px] ">
          Segmentation{" "}
        </h1>
        <div className="flex items-center gap-2 flex-wrap ml-3">
          {xaxisData.map((label: string, index: number) => (
            <div key={index} className="flex items-center gap-1">
              <div
                className="w-[13px] h-[13px]"
                style={{
                  backgroundColor: labelcolors[index % labelcolors.length], // Cycle through colors
                  borderRadius: "3px",
                }}
              ></div>
              <div className="text-[black] font-[400] text-[10px] font-['DM Sans']">
                {label} 
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] flex xl:flex-row items-start justify-start -mt-5">
        <table cellPadding={13} className="mt-[50px] ml-1">
          <tbody>
            <tr className="h-[54px] text-center text-[#000000] font-[400] text-[11px] font-['DM Sans']">
              <td>H/M</td>
            </tr>
            <tr className="h-[130px] text-center text-[#000000] font-[400] text-[11px] font-['DM Sans']">
              <td>L</td>
            </tr>
          </tbody>
        </table>

        <div
          className={`-mt-1 w-[100%] ${
            props.selectedSegment === "Medium Risk"
              ? "w-[100%] -ml-4"
              : "w-[100%]"
          }`}
        >
          {selectedReactApexCharts ? (
            <ReactApexChart
              className="-mb-16"
              options={{
                chart: {
                  type: "bar",
                  height: 100,
                  stacked: true,
                  stackType: "100%",
                  toolbar: {
                    show: false,
                  },
                },
                plotOptions: {
                  bar: {
                    horizontal: true,
                    barHeight: "50%",
                    borderRadius: 10,
                    columnWidth: "80%",
                  },
                },
                fill: {
                  colors:
                  [
                    "#9F0030",
                    "#DC3C49",
                    "#EF8A62",
                    "#FFB200",
                    "#FFDD00",
                    "#365CD2",
                    "#498ADA",
                    "#A6C5F7",
                    "#D7E1F2",
                    "#C6A8FB",
                    "#8D7CC8",
                    "#4C3F7C",
                  ]
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  width: 0,
                  colors: ["#7f7f7f"],
                },
                title: {
                  text: "",
                },
                xaxis: {
                  // enabled: false,
                  tickAmount: 5,
                  min: 0,
                  max: 100,
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
                  custom: function ({
                    series,
                    seriesIndex,
                    dataPointIndex,
                    w,
                  }: any) {
                    if (
                      series[seriesIndex] &&
                      typeof series[seriesIndex][dataPointIndex] !== "undefined"
                    ) {
                      const formattedValue =
                        series[seriesIndex][dataPointIndex].toFixed(1);
                      const color = w.config.fill.colors[seriesIndex] || "";
                      const name = w.config.series[seriesIndex]?.name || "Data";

                      return `
              <div class="arrow_box" style="color:${color}; padding: 10px;">
                <span><strong>${name}</strong></span><br/>
                <span>Value: ${formattedValue}%</span>
              </div>`;
                    }
                    return "";
                  },
                },
                yaxis: {
                  show: false,
                  labels: {
                    offsetX: -15,
                  },
                  axisBorder: {
                    show: true,
                  },
                  axisTicks: {
                    show: true,
                  },
                },
            
                legend: {
                  show: false,
                },
                grid: {
                  show: true,
                  borderColor: "#e0e0e0",
                  xaxis: {
                    lines: {
                      show: true,
                    },
                  },
                  yaxis: {
                    lines: {
                      show: false,
                    },
                  },
                  strokeDashArray: 5,
                  padding: {
                    left: 5,
                    right: 35,
                  },
                },
              }}
              series={mediumSeries} 
              type="bar"
              height={140}
              width="99%"
            />
          ) : null}

          {selectedReactApexCharts ? (
            <ReactApexChart
              className="-mt-8"
              options={{
                chart: {
                  type: "bar",
                  height: 300,
                  stacked: true,
                  stackType: "100%",
                  toolbar: {
                    show: false,
                  },
                },
                plotOptions: {
                  bar: {
                    horizontal: true,
                    barHeight: "50%",
                    borderRadius: 10,
                    columnWidth: "80%",
                  },
                },
                fill: {
                  colors:
                  [
                    "#9F0030",
                    "#DC3C49",
                    "#EF8A62",
                    "#FFB200",
                    "#FFDD00",
                    "#365CD2",
                    "#498ADA",
                    "#A6C5F7",
                    "#D7E1F2",
                    "#C6A8FB",
                    "#8D7CC8",
                    "#4C3F7C",
                  ]
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  width: 0,
                  colors: ["#7f7f7f"],
                },
                title: {
                  text: "",
                },
                xaxis: {
                  // show: true,
                  tickAmount: 5,
                  min: 0,
                  max: 100,
                  labels: {
                    formatter: (value: string) => {
                      const numericValue = parseFloat(value); // Convert the string to a number
                      return Math.floor(numericValue).toString() + "%";
                    },
                    
                  },
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
                tooltip: {
                  custom: function ({
                    series,
                    seriesIndex,
                    dataPointIndex,
                    w,
                  }: any) {
                    if (
                      series[seriesIndex] &&
                      typeof series[seriesIndex][dataPointIndex] !== "undefined"
                    ) {
                      const formattedValue =
                        series[seriesIndex][dataPointIndex].toFixed(1);
                      const color = w.config.fill.colors[seriesIndex] || "#000";
                      const name = w.config.series[seriesIndex]?.name || "Data";

                      return `
              <div class="arrow_box" style="color:${color}; padding: 10px;">
                <span><strong>${name}</strong></span><br/>
                <span>Value: ${formattedValue}%</span>
              </div>`;
                    }
                    return "";
                  },
                },
                yaxis: {
                  show: false,
                  labels: {
                    offsetX: -15,
                  },
                  axisBorder: {
                    show: true,
                  },
                  axisTicks: {
                    show: true,
                  },
                },
                legend: {
                  show: false,
                },
                grid: {
                  show: true,
                  borderColor: "#e0e0e0",
                  xaxis: {
                    lines: {
                      show: true,
                    },
                  },
                  yaxis: {
                    lines: {
                      show: false,
                    },
                  },
                  strokeDashArray: 5,
                  padding: {
                    left: 5,
                    right: 35,
                  },
                },
              }}
              series={lowSeries} // Assuming lowSeries is defined and contains the correct data
              type="bar"
              height={160}
              width="99%"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OptimizeStackedBarChart;
