import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import { useDispatch } from "react-redux";
// import Cards from "../../components/Cards/Cards";
import { fetchDashboardData } from "../../api/api";
import { saveDashboardData } from "../../redux/reducers/dashboardReducer/dashboardSlice";
import download from "../../assets/images/download.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import indilabslogo from "../../assets/images/indliabs.png";
import Cards from "../../components/Cards/Cards";
import PerformanceDashboard from "../../components/PerformanceDashboardHeader/PerformanceDashboard";
import HomeDashboard from "../../components/PerformanceDashboardHeader/HomeDashboard";

interface HomePageProps {}

type props = {
  setmoduleName: any;
};
const categories = [
  { id: "personalloan", name: "Personal Loan" },
  { id: "creditcard", name: "Credit Card" },
  { id: "carloan", name: "Car Loan" },
  { id: "homeloan", name: "Home Loan" },
  { id: "product5", name: "Product 5" },
  { id: "product6", name: "Product 6" },
];
const HomePage = ({ setmoduleName }: props) => {
  const [loader, setLoader] = useState(false);
  const [staticData, setStaticData] = useState<null>(null);
  const [profileUsername, setProfileUsername] = useState<any>();
  const [activeButton, setActiveButton] = useState("personalloan");

  useEffect(() => {
    fetchData("home_screen");
  }, []);

  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/homescreen/?blob=home_screen`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };

    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data, "fetched data");
      setStaticData(result.data);
      // console.log(data, "data immediately after setData"); // Confirm state update in the same function
    } catch (err: any) {
      // setError(err.message);
    }
  };

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
  const handleButtonClick = (id: string) => {
    setActiveButton(id);
  };

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
      windowHeight: document.documentElement.scrollHeight,
      onclone: (clonedDoc) => {
        const clonedContent = clonedDoc.getElementById("reportContent");
        if (clonedContent) {
          // Select all elements with the custom class and move them up
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
            (element as HTMLElement).style.position = "relative";
            (element as HTMLElement).style.top = "-8px"; // Adjust the value as needed
          });

          const customClassFourthElements =
            clonedContent.getElementsByClassName("customClassFourth");
          Array.from(customClassFourthElements).forEach((element) => {
            (element as HTMLElement).style.height = "35px";
            (element as HTMLElement).style.marginTop = "-15px"; // Adjust the value as needed
          });
          const customClassHomeDashboardElements =
            clonedContent.getElementsByClassName(
              "customClassHomeDashboardHeader"
            );
          Array.from(customClassHomeDashboardElements).forEach((element) => {
            (element as HTMLElement).style.position = "relative";
            (element as HTMLElement).style.top = "-8px"; // Adjust the value as needed
          });
          const customClassDashboardElements =
            clonedContent.getElementsByClassName("customClassDashboardHeader");
          Array.from(customClassDashboardElements).forEach((element) => {
            (element as HTMLElement).style.position = "relative";
            (element as HTMLElement).style.top = "-8px"; // Adjust the value as needed
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
        id="indilabsheader"
      >
        <h1 className={`text-3xl font-bold ml-4 py-2`}>Home</h1>
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
      <div className="p-[6px] lg:p-[28px] bg-[#fafafb] CommonBodyWrap">
        <HomeDashboard />
        <div className="w-full flex justify-between mt-5 mb-2">
          <div className="pl-3 flex w-full rounded-xl B1TabsContainer">
            {categories.map((button, index) => (
              <div
                key={button.id}
                className={`flex align-center justify-center items-center border-[1px] border-[#79747E] cursor-pointer ${
                  activeButton === button.id ? "bg-[#E8DEF8]" : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === categories.length - 1 ? "rounded-r-[4px]" : ""
                }`}
                onClick={() => handleButtonClick(button.id)}
              >
                <button className="text-center gap-2 text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] px-6 customClassFourth">
                  {button.name}
                </button>
              </div>
            ))}
          </div>

          <div
            className="w-[160px] min-w-[160px] h-[40px] flex justify-around items-center cursor-pointer"
            onClick={downloadReport}
          >
            <div className="w-[18px] h-[18px]" id="hiddenbutton">
              {loader ? "" : <img src={download} alt="download" />}
            </div>
            <div
              className="w-[120px] min-w-[120px] h-[20px] text-[#6750A4] text-[14px] font-[500] font-['DM Sans']"
              id="hiddenbutton2"
            >
              {loader ? "Downloading...." : "Download Report"}
            </div>
          </div>
        </div>
        <Cards setmoduleName={setmoduleName} staticData={staticData} />
        <div
          id="indilabslogo"
          className="flex items-center justify-center gap-1 font-[500] text-[#000000] mt-8 hidden"
        >
          <span className="italic">Made By</span>{" "}
          <img src={indilabslogo} className="mt-4" alt="indilabs.ai" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
