import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";


import phone_pushed from "../assets/icons/phone_paused.svg";
import support_agent from "../assets/icons/support_agent.svg";
import chart from "../assets/icons/chat.svg";
import school from "../assets/icons/school.svg";
import pause_circle from "../assets/icons/pause_circle.svg";
import whats_app from "../assets/icons/whatsapp.svg";
import mail from "../assets/icons/mail.svg";

type Props = {
  selectedSegment: any;
};

const RecoveryTreatment: React.FC<Props> = (props) => {
  console.log(props.selectedSegment);
  const [selectedReactApexCharts, setSelectedReactApexCharts] =
    useState<boolean>();

    const tableData = [
      {
        strategy: "Champion",
        volPercentage: "80%",
        volume: "52,000",
        kpi: "20%",
        status: "Active",
        action: "Pause"
      },
      {
        strategy: "Challenger 1",
        volPercentage: "10%",
        volume: "6,500",
        kpi: "18%",
        status: "Active",
        action: "Pause"
      },
      {
        strategy: "Challenger 2",
        volPercentage: "10%",
        volume: "65,000",
        kpi: "23%",
        status: "Inactive",
        action: "Start"
      }
    ];

  const state: any = {
    series: {
      "Very High Risk":
       [
        {
          name: "Hold",
          data: [6, 6, 6],
          color: "#E1E1E1",
          // icon: pause_circle,
        },
        {
          name: "Mail",
          data: [6, 6, 6],
          color: "#FFB200",
          // icon: mail,
        },
        {
          name: "Message",
          data: [6, 6, 6],
          color: "#FF8C4C",
          // icon: phone_pushed,
        },
        {
          name: "WhatsApp",
          data: [6, 6, 6],
          color: "#70DD60",
          // icon: whats_app,
        },
        {
          name: "Call",
          data: [6, 6, 6],
          color: "#BBF429",
          // icon: chart,
        },
        {
          name: "Agency",
          data: [6, 6, 6],
          color: "#11ADD8",
          // icon: support_agent,
        },
        {
          name: "Legal",
          data: [6, 6, 6],
          color: "#DE303F",
          // icon: school,
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
          name: "Buckets Slope",
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
          name: "Buckets Slope",
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
          name: "Buckets Slope",
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
          name: "Buckets Slope",
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
        toolbar: {
          show: false, // This will hide the menu
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%",
       
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
              return "whatsapp";
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
        show:false,
        width: 1,
        colors: ["#7f7f7f"],
      },
      title: {
        text: "",
      },
      xaxis: {
 
        show: false,
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
      tooltip: {
        custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
          const labels = ["Champions", "Challenger 1", "Challenger 2"];
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

  (state.options.chart as any).type = "bar";


  useEffect(() => {
    setSelectedReactApexCharts(true);
  }, [props.selectedSegment]);

  const labelBgColors = ["#E1E1E1", "#FFB200", "#FF8C4C", "#70DD60", "#BBF429", "#11ADD8", "#DE303F"];
  const labelNames = ["Hold", "Mail", "Message", "Whats App", "Call", "Agency", "Legal"];
  const labelImages = [pause_circle, mail, chart, whats_app,  phone_pushed,  support_agent, school];

  const getStatusColor = (status:string) => {
    return status === "Active" ? "green" : "red";
  };

  
  return (
    <div
      id="chart"
      className="min-w-[300px] w-[100%]  xl:w-[53%] 2xl:w-[96%] bg-white shadow p-3 rounded-xl ml-8 h-[335px] "
    >
      <div className="flex justify-between items-center ml-3 mt-3">
        <h1 className="text-[#000000] font-[500] text-[16px] font-['DM Sans']">
          Treatments{" "}
        </h1>
        <div className="flex items-center gap-3 flex-wrap mr-2"> 
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
      <div className="w-[100%] flex flex-col  sm:flex-row ">
        {/* {props.selectedSegment === "MR" && ( */}
        <table cellPadding={13} className="w-[50%] h-[250px] ">
    <tbody className="w-[100%]">
      <tr className="h-[22px] border-b-[1px]">
        <td className="text-[#000000] font-[500] text-[16px] font-['DM Sans'] w-[20%]">Strategy</td>
        <td className="text-[#000000] font-[500] text-[16px] font-['DM Sans'] w-[15%]">Vol%</td>
        <td className="text-[#000000] font-[500] text-[16px] font-['DM Sans'] w-[17%]">Volume</td>
        <td className="text-[#000000] font-[500] text-[16px] font-['DM Sans'] w-[17%]">KPI</td>
        <td className="text-[#000000] font-[500] text-[16px] font-['DM Sans'] w-[17%]">Status</td>
        <td className="text-[#000000] font-[500] text-[16px] font-['DM Sans'] w-[17%]">Action</td>
      </tr>

      {tableData.map((row, index) => (
        <tr key={index} className="h-[20px] border-b-[1px]">
          <td>{row.strategy}</td>
          <td>{row.volPercentage}</td>
          <td>{row.volume}</td>
          <td>{row.kpi}</td>
          <td className="flex gap-2 items-center h-full">
            <p
              className="h-[10px] w-[10px] rounded-full"
              style={{ backgroundColor: getStatusColor(row.status) }}
            ></p>
            <span>{row.status}</span>
          </td>
          <td className="text-[#68349A]">{row.action}</td>
        </tr>
      ))}
    </tbody>
  </table>
      
        <div
          className="w-[50%]  mt-[19px]  -ml-7"
        >
          <p  className=" text-[#000000] font-[500] text-[16px] font-['DM Sans'] text-center -mb-4">Contacts</p>
          {selectedReactApexCharts ? (
        
            <ReactApexChart
              options={state.options as any}
              series={state.series[props?.selectedSegment]}
              type="bar"
              height={260}
              width="105%"
            />
          ) : null}
        </div>
      </div>
    
    </div>
  );
};

export default RecoveryTreatment;
