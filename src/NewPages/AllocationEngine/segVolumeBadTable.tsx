import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllocationRadialBarChart from "./allocationSharePiechart";
import AllocationStackedBarChart from "./allocationStackedBarChart";
import label from "../../assets/images/label.svg";
import ReactApexChart from "react-apexcharts";
import phone_pushed from "../../assets/icons/phone_paused.svg";
import support_agent from "../../assets/icons/support_agent.svg";
import chart from "../../assets/icons/chat.svg";
import school from "../../assets/icons/school.svg";
import pause_circle from "../../assets/icons/pause_circle.svg";
import whats_app from "../../assets/icons/whatsapp.svg";
import mail from "../../assets/icons/mail.svg";

type Props = {
  showButtons?: any;
  setSelectedSegment: any;
};

function SegVolumeBadTable(props: Props) {
  const [activeData, setActiveData] = useState<any>();
  const navigate = useNavigate();

  const { showButtons } = props;
  console.log("activeData value", activeData);

  const tableData = [
    {
      segment: "Very High Risk",
      Value: "15%",
      Bad: "65%",
      Performance: "Review",
      id: 0,
    },
    {
      segment: "High Risk",
      Value: "20%",
      Bad: "35%",
      Performance: "Review",
      id: 1,
    },
    {
      segment: "Medium Risk",
      Value: "6%",
      Bad: "20%",
      Performance: "Review",
      id: 2,
    },
    {
      segment: "Low Risk",
      Value: "6%",
      Bad: "20%",
      Performance: "Review",
      id: 3,
    },
    {
      segment: "H Balance",
      Value: "13%",
      Bad: "18%",
      Performance: "Review",
      id: 4,
    },
  ];

  const navigateToReviewPerformance = () => {
    navigate("/strategy/allocationEngine/reviewPerformance/recovery");
  };

  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>(true);

  const state = {
    series: [
      {
        name: "Hold",
        data: [6, 6, 6, 6, 6],
        color: "#E1E1E1",
       
      },
      {
        name: "Mail",
        data: [6, 6, 6, 6, 6],
        color: "#FFB200",
     
      },
      {
        name: "Message",
        data: [6, 6, 6, 6, 6],
        color: "#FF8C4C",
     
      },
      {
        name: "WhatsApp",
        data: [6, 6, 6, 6, 6],
        color: "#70DD60",
       
      },
      {
        name: "Call",
        data: [6, 6, 6, 6, 6],
        color: "#BBF429",
    
      },
      {
        name: "Agency",
        data: [6, 6, 6, 6, 6],
        color: "#11ADD8",
      
      },
      {
        name: "Legal",
        data: [6, 6, 6, 6, 6],
        color: "#DE303F",
       
      },
  

    ],
    options: {
      chart: {
        type: "bar",
        height: 340,
        stacked: true,
        stackType: "100%",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%",
        },
      },
      dataLabels: {
        enabled: false,
        formatter: (val: any, opts: any) => {
          const seriesName = opts.w.config.series[opts.seriesIndex].name;
          switch (seriesName) {
            case "Hold":
              return "pause_circle";
            case "Message":
              return "chat";
            case "Call":
              return "phone_paused";
            case "Agency":
              return "support_agent";
            case "Legal":
              return "school";
            case "WhatsApp":
              return "";
            case "Mail":
              return "mail";
            default:
              return "";
          }
        },
        style: {
          fontSize: "18px",
          fontFamily: "Material Icons Outlined",
          fontWeight: "low",
          colors: ["#6D6C72", "#998200", "#994C06", "#008000", "#5F7B17", "#1755B9", "#741815"],
        },
        offsetX: 0,
        offsetY: 2,
      },
      stroke: {
        show: false,
        width: 1,
        colors: ["#7f7f7f"],
      },
      xaxis: {
        labels: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
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
        custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
          const labels = ["Very High Risk", "High Risk", "Medium Risk", "Low Risk", "H Balance"];
          const label = labels[dataPointIndex] || ""; 
          const value = series[seriesIndex][dataPointIndex];
          const color = w.config.series[seriesIndex].color || "#000"; 
          const labelNames = ["Hold", "Mail", "Message", "Whats App", "Call", "Agency", "Legal"];
          const valueLabel = labelNames[seriesIndex] || "Unknown"; 
          return `
            <div style="padding: 10px; background-color: #fff; border: 1px solid #ddd; border-radius: 4px;">
              <p><strong style="color: #000000; font-size: 14px;">${label}</strong></p>
              <p><span style="display: inline-block; width: 10px; height: 10px; background-color: ${color}; border-radius: 50%; margin-right: 8px;"></span>${valueLabel}: <span style="color: #000000; font-size: 14px; font-weight: 500;"> ${value}K</span></p>
            </div>
          `;
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        borderColor: "#F3F4F6",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    },
  };

  useEffect(() => {
    // Trigger resize to make sure chart adjusts to full width
    window.dispatchEvent(new Event("resize"));
  }, []);

  const labelBgColors = ["#E1E1E1", "#FFB200", "#FF8C4C", "#70DD60", "#BBF429", "#11ADD8", "#DE303F"];
  const labelNames = ["Hold", "Mail", "Message", "Whats App", "Call", "Agency", "Legal"];
  const labelImages = [pause_circle, mail, chart, whats_app,  phone_pushed,  support_agent, school];
  return (
    <div className="px-4 w-[100%] ">
      <div className="w-full flex justify-between items-center mt-4">
      <h1 className=" text-[#000000] font-[500] text-[16px] font-['DM Sans'] mb-1 leading-[18px]">
        Segmentation & Treatments
      </h1>
     
      <div className="flex items-center gap-3 flex-wrap mr-4"> 
  {labelNames.map((label, index) => (
    <div key={label} className="flex items-center gap-2">
      <div
        className="w-[32px] h-[25px] rounded-[4px] flex items-center justify-center"
        style={{ backgroundColor: labelBgColors[index % labelBgColors.length] }}
      >
        <img src={labelImages[index]} alt={label} className="w-[14px] h-[14px]" />
      </div>
      <div className="text-[#333333] font-[400] text-[12px] font-['DM Sans']">
        {label}
      </div>
    </div>
  ))}
</div>
</div>
      <div className="w-[100%] flex flex-row">
        <div className="w-[45%]">
          <table className="w-full" cellPadding={16}>
            <thead>
              <tr className="border-b-[2px] border-[#F3F4F6] flex justify-between w-[100%]">
                <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[30%] text-start">
                  Segment
                </th>
                <th className="text-[#81858C] text-[12px] text-center  font-[400] font-['DM Sans' !important] w-[24%] ">
                  Value
                </th>
                <th className="text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important] w-[24%] mr-6">
                  Bad%
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {tableData.map((each, idx) => (
                <tr
                  className={`w-full h-[50px]  text-center flex justify-between items-center text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important] ${
                    each.id !== activeData
                      ? "border-b-[2px] border-[#F3F4F6]"
                      : null
                  }
              ${
                each.id === activeData &&
                "border-[#5C4E8E] border-[2px] z-10 shadow-lg"
              } 
             
             cursor-pointer `}
                >
                  <td className="text-left  w-[30%] ">{each.segment}</td>
                  <td className="text-center w-[24%]">{each.Value}</td>
                  <td className="text-center  w-[24%] mr-6">{each.Bad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-[55%] mt-[17px] -ml-7">
          <p className="-mb-[14px]  text-center  text-[#81858C] text-[12px]  font-[400] font-['DM Sans' !important]">
            Treatments
          </p>
          <div className="w-full">
            <ReactApexChart
              options={state.options as any}
              series={state.series}
              type="bar"
              height={315}
              width="105%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SegVolumeBadTable;
