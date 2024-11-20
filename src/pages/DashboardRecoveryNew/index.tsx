import React, { useState, useEffect } from "react";
import MonitoringDiagnostics from "../../components/DashboardRecoveryCardsNew/MonitoringDiagnostics";
import StrategyOptimisation from "../../components/DashboardRecoveryCardsNew/StrategyOptimisation";
import Execution from "../../components/DashboardRecoveryCardsNew/Execution";
import MonitoringRecoverySubtabsDashboardHeader from "../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
import MonitoringCollectionDashboardHeader from "../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
import download from "../../assets/images/download.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import indilabslogo from "../../assets/images/indliabs.png";
import PerformanceDashboard from "../../components/PerformanceDashboardHeader/PerformanceDashboard";
import HomeDashboard from "../../components/PerformanceDashboardHeader/HomeDashboard";

type Props = {};

const DashboardRecoveryNew = (props: Props) => {
  const [loader, setLoader] = useState(false);
  const [profileUsername, setProfileUsername] = useState<any>();

  useEffect(() => {
    const LoginUsername = localStorage.getItem("username");
    setProfileUsername(LoginUsername);
  }, []);

  // const dispatch = useDispatch();

  // const fetchData = async () => {
  //   const res = await fetchDashboardData();
  //   console.log(res?.data);
  //   dispatch(saveDashboardData(res?.data));
  // };

  useEffect(() => {
    // fetchData();
    const LoginUsername = localStorage.getItem("username");
    setProfileUsername(LoginUsername);
  }, []);

  const downloadReport = async () => {
    setLoader(true);
    const reportContent = document.getElementById("reportContent");
    const hiddenButton = document.getElementById("hiddenbutton");
    const hiddenButton2 = document.getElementById("hiddenbutton2");
    const backButtons = document.getElementById("backButtons");
    const indilabsHeader = document.getElementById("indilabsheader");
    const indilabslogo = document.getElementById("indilabslogo");

    if (hiddenButton) {
      hiddenButton.style.display = "none"; // Hide the button container
    }
    if (hiddenButton2) {
      hiddenButton2.style.display = "none"; // Hide the button container
    }

    if (backButtons) {
      backButtons.style.display = "none"; // Hide the button container
    }

    if (indilabsHeader) {
      indilabsHeader.classList.remove("hidden"); // Show the header for PDF generation
    }
    if (indilabslogo) {
      indilabslogo.classList.remove("hidden"); // Show the header for PDF generation
    }

    window.scrollTo(0, 0);

    // await new Promise((resolve) => setTimeout(resolve, 500));

    html2canvas(reportContent!, {
      scale: 2,
      scrollX: 0,
      scrollY: -window.screenY,
      windowWidth: document.documentElement.offsetWidth + 30,
      windowHeight: document.documentElement.scrollHeight + 280,
      onclone: (clonedDoc) => {
        const clonedContent = clonedDoc.getElementById("reportContent");
        if (clonedContent) {
          const customElements =
            clonedContent.getElementsByClassName("customClass");
          Array.from(customElements).forEach((element) => {
            (element as HTMLElement).style.position = "relative";
            (element as HTMLElement).style.top = "7px"; // Adjust the value as needed
          });

          const customClassTwoElements =
            clonedContent.getElementsByClassName("customClassSecond");
          Array.from(customClassTwoElements).forEach((element) => {
            (element as HTMLElement).style.position = "relative";
            (element as HTMLElement).style.bottom = "7px"; // Adjust the value as needed
            (element as HTMLElement).style.paddingBottom = "12px"; // Adjust the value as needed
          });

          const customClassThreeElements =
            clonedContent.getElementsByClassName("customClassThird");
          Array.from(customClassThreeElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-15px"; // Adjust the value as needed
          });

          const customClassFourthElements =
            clonedContent.getElementsByClassName("customClassFourth");
          Array.from(customClassFourthElements).forEach((element) => {
            (element as HTMLElement).style.height = "7px";
            (element as HTMLElement).style.top = "7px";
          });

          const customClassFifthElements =
            clonedContent.getElementsByClassName("customClassFifth");
          Array.from(customClassFifthElements).forEach((element) => {
            (element as HTMLElement).style.height = "20px";
            (element as HTMLElement).style.marginTop = "-7px";
          });
          const customClassSixthElements =
            clonedContent.getElementsByClassName("customClassSixth");
          Array.from(customClassSixthElements).forEach((element) => {
            (element as HTMLElement).style.height = "24px";
            (element as HTMLElement).style.marginTop = "-7px";
          });
          const customClassSixthStrategyOptimisationElements =
            clonedContent.getElementsByClassName(
              "customClassStrategyOptimisationSixth"
            );
          Array.from(customClassSixthStrategyOptimisationElements).forEach(
            (element) => {
              // (element as HTMLElement).style.height = "24px";
              (element as HTMLElement).style.marginTop = "-7px";
            }
          );
          const customClassSeventhElements =
            clonedContent.getElementsByClassName("customClassSeventh");
          Array.from(customClassSeventhElements).forEach((element) => {
            (element as HTMLElement).style.height = "20px";
            (element as HTMLElement).style.marginTop = "-12px";
          });
          const customClassSeventhExecutionElements =
            clonedContent.getElementsByClassName("customClassExecutionSeventh");
          Array.from(customClassSeventhExecutionElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-8px";
          });
          const customClassMonitoringDashboardElements =
            clonedContent.getElementsByClassName(
              "customClassMonitoringDashboardHeader"
            );
          Array.from(customClassMonitoringDashboardElements).forEach(
            (element) => {
              (element as HTMLElement).style.position = "relative";
              (element as HTMLElement).style.top = "-8px"; // Adjust the value as needed
            }
          );
          const customClassDashboardElements =
            clonedContent.getElementsByClassName("customClassDashboardHeader");
          Array.from(customClassDashboardElements).forEach((element) => {
            (element as HTMLElement).style.position = "relative";
            (element as HTMLElement).style.right = "-28px"; // Adjust the value as needed
          });
        }
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      // const pdf = new jsPDF();
      // const img = pdf.getImageProperties(imgData);
      // const imgWidth = pdf.internal.pageSize.getWidth();
      // const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? "landscape" : "portrait",
        unit: "px",
        format: [imgWidth, imgHeight],
      });
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("report.pdf");
      setLoader(false);
    });

    if (hiddenButton) {
      hiddenButton.style.display = "flex"; // Show the button container again
    }

    if (hiddenButton2) {
      hiddenButton2.style.display = "flex"; // Show the button container again
    }

    if (backButtons) {
      backButtons.style.display = "flex"; // Show the button container again
    }

    if (indilabsHeader) {
      indilabsHeader.classList.add("hidden"); // Hide the header again
    }
    if (indilabslogo) {
      indilabslogo.classList.add("hidden"); // Hide the header again
    }
  };

  const formattedDate = () => {
    const date = new Date();
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    return `${day} ${month} ${year}`;
  };

  return (
    <div id="reportContent">
      <div
        className="w-full flex bg-neutral-50 justify-between items-center px-4 hidden"
        // style={{ display: "none" }}
        id="indilabsheader"
      >
        <h1
          className={`text-3xl font-bold ml-4 py-2 customClassDashboardHeader`}
        >
          Dashboard
        </h1>
        <div className="justify-end p-8  items-center gap-11 flex h-21 leftContainHeader">
          <div className="justify-start items-center gap-2 lg:gap-4 flex">
            <div className="flex justify-start items-center items-end gap-[12px] inline-flex profileIConHeader">
              <div className="nameHeader">
                <p className="text-[black] italic font-[500] text-[14x] lg:text-sm">
                  Report Generated On: &nbsp;
                  {`${formattedDate()}`}
                </p>
                <p className="text-[#6750A4] italic text-sm lg:text-base flex justify-end font-medium">
                  {profileUsername}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5 w-full">
        {/* <PerformanceDashboard /> */}
        <HomeDashboard />
        <div className="w-full flex justify-end items-center mt-1">
          <div
            className="w-[150px] h-[40px] flex justify-around items-center cursor-pointer"
            onClick={downloadReport}
          >
            <div className="w-[18px] h-[18px]" id="hiddenbutton">
              {loader ? "" : <img src={download} alt="download" />}
            </div>
            <div
              className="w-[116px] h-[20px] text-[#6750A4] text-[14px] font-[500] font-['DM Sans']"
              id="hiddenbutton2"
            >
              {loader ? "Downloading...." : "Download Report"}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 ml-5 mb-6">
          <MonitoringDiagnostics /> 
          <StrategyOptimisation />
          <Execution />
        </div>

        <div
          id="indilabslogo"
          className="flex items-center justify-center gap-1  text-['italic'] font-[500] text-[#000000] h-[20px] mt-2 mb-8 hidden"
        >
          <span className="italic">Made By</span>{" "}
          <img src={indilabslogo} className="mt-4" alt="indilabs.ai" />
        </div>
      </div>
    </div>
  );
};

export default DashboardRecoveryNew;
