import React, { useState, useEffect } from "react";
// import Sidebar from "../../components/common/Sidebar";
import DashboardHeader from "../../components/DshboardHeader/DashboardHeader";
import RiskMonitoringExpanded from "../../components/Monitoring/RiskMoniteringExpanded";
import Button from "../../components/Button";
import ImpactAssessment from "../../components/Monitoring/ImpactAssessment";
import download from "../../assets/images/download.png";
import RiskMonitoringRecovery from "../../components/Monitoring Recovery/RiskMonitoringRecovery";
import ImpactAssessmentRecovery from "../../components/Monitoring Recovery/ImpactAssessmentRecovery";
import MonitoringCollectionDashboardHeader from "../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import indilabslogo from "../../assets/images/indliabs.png";
import MonitoringRecoveryMetricDashboardHeader from "../../components/MonitoringRecoveryMetricHeader/MonitoringRecoveryMetricDashboardHeader";
import PerformanceDashboard from "../../components/PerformanceDashboardHeader/PerformanceDashboard";
import MonitoringRecoveryPieChart from "../../components/Monitoring Recovery/MonitoringRecoveryPieChart";
import RiskMonitoringRecoveryMonthlyView from "../../components/Monitoring Recovery/RiskMonitoringMonthlyView";
import MonitoringRecoveryLineChart from "../../components/Monitoring Recovery/MonitoringRecoveryLineChart";
import HomeDashboard from "../../components/PerformanceDashboardHeader/HomeDashboard";
import RiskMonitoringHotspot from "../../components/Monitoring Recovery/RiskmonitoringHotspot";
import HeatmapChart from "../../components/Monitoring Recovery/HeatmapPosGrid";
import NewDiagnostics from "../../components/Diagnostics/NewDiagnostics";
import HeatmapLocationGrid from "../../components/Monitoring Recovery/HeatmapLocationGrid";
import HeatmapPosGrid from "../../components/Monitoring Recovery/HeatmapPosGrid";
import HeatmapVintageGrid from "../../components/Monitoring Recovery/HeatmapVintageGrid";
import ResPercentBar from "../../components/Monitoring Recovery/ResPercentBar";
import PerformanceBenchmarkChart from "../../components/Monitoring Recovery/PerformanceBenchmark";
// import MonitoringRecoveryLineChart from "../../components/Monitoring Recovery/MonitoringRecoveryLineChart";
const downloadReports = () => {};
// import { useHistory } from "react-router-dom";
const Buttons = [
   { id: "Benchmark", label: "Benchmark" },
  { id: "Risk Monitoring", label: "Risk Grid" },
  { id: "Heatmap", label: "Heatmap" },
];

const categoriesBenchMark = [
    { id: "Pre_Due", name: "Pre Due" },
    { id: "Early_Stage", name: "Early Stage" },
   { id: "Late_Stage", name: "Late Stage" },
   { id: "Write_Offs", name: "Write Offs" }
  ];

const categoriesHeatmap = [
  { id: "Location", name: "Location" },
  // { id: "POS", name: "POS" },
//  { id: "Vintage", name: "Vintage" },
];
const categoriesmonitoring = [
  { id: "Location", name: "Location" },
  { id: "POS", name: "POS" },
 { id: "Vintage", name: "Vintage" },
];
type Props = {};



const staticData = {
    Pre_Due: [
      {
        Q: "Q1",
        sub_segment: null,
        mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        percentage: [
          1,15,25,35,40,45,50,55,58,60,61,62,63,64,65,66,67,68,69,70,70,70,70,70,70,70,70,70,70,70
        ],
      },
   
      {
        Q: "Q_Benchmark",
        sub_segment: null,
        mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        percentage: [
            1,15,25,35,45,50,55,60,65,66,67,68,69,70,71,72,73,74,75,76,80,81,82,83,84,85,86,87,89,90
        ],
      },
    ],
    Early_Stage: [
        {
          Q: "Q1",
          sub_segment: null,
          mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          percentage: [
            2,10,15,25,30,35,38,40,42,44,45,46,48,49,50,52,54,55,56,58,60,62,63,64,65,66,67,67,67,67
          ],
        },
     
        {
          Q: "Q_Benchmark",
          sub_segment: null,
          mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          percentage: [
            5,15,25,35,40,45,50,55,58,60,61,62,63,64,65,66,67,68,69,70,70,70,70,70,70,70,70,70,70,70
          ],
        },
      ],
      Late_Stage: [
        {
          Q: "Q1",
          sub_segment: null,
          mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          percentage: [
            0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8, 8, 8, 10, 11, 12, 13, 14, 15,16,17,18,19,20,21,22,24,25,26,26,26,26
          ],
        },
     
        {
          Q: "Q_Benchmark",
          sub_segment: null,
          mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          percentage: [
            2, 4, 6, 8, 10, 12, 14, 15, 16, 17, 18, 19, 20, 22, 23, 23, 23,23,23,23,24,24,26,26,27,27,28,28,29,30
          ],
        },
      ],
     

     Write_Offs: [
        {
          Q: "Q1",
          sub_segment: "null",
          mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          percentage: [
           0,2.1,3.6, 5.2,6.5,9, 10,10.8,12,12.5,12.6,13.2,
          ],
        },
      {
          Q: "Q_Benchmark",
          sub_segment: null,
          mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          percentage: [
              0.5, 3.4, 5.8, 7.2, 8.5, 10.8,11.9,12.5,13.8,14.2,15.8,17,
          ],
        },
     
       ],
   
  };
const MonitoringRecovery = (props: Props) => {
  const [activeButton, setActiveButton] = useState<string>("Benchmark");
  const [dataHeatmap, setdataHeatmap] = useState<any>();
  const [loader, setLoader] = useState(false);
  const [profileUsername, setProfileUsername] = useState<any>();
  const [categories, setCategories] = useState("All");
  const [categoriesMatric, setCategoriesMatric] = useState("Location");
  const [selectedBenchmarkCategory, setselectedBenchmarkCategory] = useState<any>("Pre_Due");
  const [categoriesMatricHeatMap, setCategoriesMatricHeatMap] =
    useState("Location");
    const [categoriesMatricmonitoring, setCategoriesMatricmonitoring] =
    useState("Location");
    const [selectedSubCategory, setSelectedSubCategory] =
    useState("Pre_Due");
  const [isCategoryVisible, setIsCategoryVisible] = useState(true);
  const location = useLocation();
  let navigate = useNavigate();
  // const navigate=useNavigate()
  useEffect(() => {
    setCategoriesMatric("Location");
  }, [activeButton]);
  const runDiagnostics = () => {
    navigate("/diagnostics/recovery");
  };
  useEffect(() => {
    const LoginUsername = localStorage.getItem("username");
    setProfileUsername(LoginUsername);
  }, []);
  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
  };
  // const [selectedCategory, setselectedCategory] = useState("location");
  const handleCategoryClick = async (cityId: string) => {
    setCategoriesMatricHeatMap(cityId);
  };
 
  const handleCategoryClickmonitoring = async (cityId: string) => {
    setCategoriesMatricmonitoring(cityId);
  };
 
  const handleCategoryBenchmarkClick = async (cityId: string) => {
    setselectedBenchmarkCategory(cityId);
  };

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
      windowHeight: document.documentElement.scrollHeight + 180,
      onclone: (clonedDoc) => {
        const clonedContent = clonedDoc.getElementById("reportContent");
        if (clonedContent) {
          // Select all elements with the custom class and move them up
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
          const customClassFirstElements =
            clonedContent.getElementsByClassName("customClassFirst");
          Array.from(customClassFirstElements).forEach((element) => {
            (element as HTMLElement).style.height = "35px";
            (element as HTMLElement).style.marginTop = "-15px"; // Adjust the value as needed
          });
          const customClassSecondElements =
            clonedContent.getElementsByClassName("customClassSecond");
          Array.from(customClassSecondElements).forEach((element) => {
            (element as HTMLElement).style.fontSize = "14px";
            (element as HTMLElement).style.textAlign = "start";
            // (element as HTMLElement).style.padding  = "2px";
            (element as HTMLElement).style.marginLeft = "50px"; // Adjust the value as needed
          });
          const customClassThirdElements =
            clonedContent.getElementsByClassName("customClassThird");
          Array.from(customClassThirdElements).forEach((element) => {
            (element as HTMLElement).style.height = "36px";
            (element as HTMLElement).style.width = "165px";
          });
          const customClassFourElements =
            clonedContent.getElementsByClassName("customClassfour");
          Array.from(customClassFourElements).forEach((element) => {
            (element as HTMLElement).style.position = "absolute";
            (element as HTMLElement).style.left = "-18px";
            //  (element as HTMLElement).style.width = "165px";
          });
          const customClassFourthElements =
            clonedContent.getElementsByClassName("customClassFourth");
          Array.from(customClassFourthElements).forEach((element) => {
            (element as HTMLElement).style.height = "36px";
            (element as HTMLElement).style.width = "145px";
            //  (element as HTMLElement).style.width = "165px";
          });
          const customClassFiveElements =
            clonedContent.getElementsByClassName("customClassfive");
          Array.from(customClassFiveElements).forEach((element) => {
            (element as HTMLElement).style.position = "absolute";
            (element as HTMLElement).style.top = "89%";
            //  (element as HTMLElement).style.width = "165px";
          });
          const customClassSixElements =
            clonedContent.getElementsByClassName("customClasssix");
          Array.from(customClassSixElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-36px";
            (element as HTMLElement).style.textAlign = "center";
          });
          const customClassDashboardElements =
            clonedContent.getElementsByClassName("customClassDashboardHeader");
          Array.from(customClassDashboardElements).forEach((element) => {
            (element as HTMLElement).style.position = "relative";
            (element as HTMLElement).style.right = "-28px"; // Adjust the value as needed
          });
          const customClassTableElements =
            clonedContent.getElementsByClassName("customClassTable");
          Array.from(customClassTableElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-2px"; // Adjust the value as needed
          });
          const customClassDoubleElements =
            clonedContent.getElementsByClassName("customClassDouble");
          Array.from(customClassDoubleElements).forEach((element) => {
            (element as HTMLElement).style.marginBottom = "10px"; // Adjust the value as needed
          });
          const customClassOppertunityElements =
            clonedContent.getElementsByClassName("customClassOpper");
          Array.from(customClassOppertunityElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-16px"; // Adjust the value as needed
          });
          const customClassRiskElements =
            clonedContent.getElementsByClassName("customClassRisk");
          Array.from(customClassRiskElements).forEach((element) => {
            (element as HTMLElement).style.marginTop = "-16px"; // Adjust the value as needed
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

  const selectedState = "TN_Payer%";
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetchData("monitoring_risks");  
    fetchHeatmapData("monitoring_heatmap"); 
  }, []);
  

  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/monitoring?blob=monitoring_risk`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };
   
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data,"fetched data");
      setData(result.data);
    
    } catch (err: any) {
      setError(err.message);
    }
  };

  const fetchHeatmapData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/monitoring?blob=monitoring_heatmap`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };
   
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data,"fetched data");
      setdataHeatmap(result.data);
    
    } catch (err: any) {
      setError(err.message);
    }
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
          Monitoring
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
      <div className="CommonBodyWrap px-[6px] lg:px-[59px] lg:pt-[47px] bg-[#fafafb]">
        {isCategoryVisible === true ? (
          // <PerformanceDashboard />
          <HomeDashboard />
        ) : (
          <MonitoringRecoveryMetricDashboardHeader />
        )}
      
        {/* <div className="w-full flex justify-between mt-6 mb-6 ml-1 "> */}
        <div className=" w-full flex flex-col gap-5 mt-5 items-start ml-[10px] ">
          {/* <div className="pl-3 flex w-full rounded-xl B1TabsContainer"> */}
          <div className="w-[100%] flex justify-between items-center">
      
              <div className=" flex w-max justify-between  itemrounded-xl B1TabsContain">
                {Buttons.map((buttons, index) => (
                  <div
                    key={buttons.id}
                    onClick={() => handleProductClick(buttons.id)}
                    className={`w-max text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans p' !important] h-10 
                 border p-4 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                   activeButton === buttons.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#fafafb]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                      index === Buttons.length - 1 ? "rounded-r-[4px]" : ""
                    }`}
                  >
                    {buttons.label}
                  </div>
                ))}
              </div>
              
         <div className="w-[370px]"><ResPercentBar selectedBenchmarkCategory={selectedBenchmarkCategory}/></div>
            {/* <div className="w-full flex justify-end items-center ">
            <div
              className="w-[160px] min-w-[160px] h-[40px] flex justify-around items-center cursor-pointer "
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
          </div> */}
          </div>
           
          {activeButton ==="Benchmark" &&  
           <div className="flex">
          <div className=" flex w-full justify-between  rounded-xl">
            {categoriesBenchMark.map((city:any, index:any) => (
              <div
                key={city.id}
                onClick={() => handleCategoryBenchmarkClick(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-[110px] p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedBenchmarkCategory === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === categoriesBenchMark.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>
         }

            {activeButton ==="Heatmap" &&  
           <div className="flex">
          <div className=" flex w-full justify-between  rounded-xl">
            {categoriesHeatmap.map((city:any, index:any) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClick(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  categoriesMatricHeatMap === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === categoriesHeatmap.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>
         }
          {activeButton ==="Risk Monitoring" &&  
           <div className="flex">
          <div className=" flex w-full justify-between  rounded-xl">
            {categoriesmonitoring.map((city:any, index:any) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClickmonitoring(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  categoriesMatricmonitoring === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === categoriesmonitoring.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>
         }
          {/* </div> */}
         
         
          </div>
          
          {activeButton === "Risk Monitoring" && (
          <div className="flex flex-wrap  items-start  justify-center  px-[6px] lg:px-[2px] ml-0 lg:ml-2 mt-7 bg-[#fafafb]">
            <div className=" w-full flex items-start gap-1 justify-start flex-wrap">
              <ImpactAssessmentRecovery
                Category={categories}
                categoriesMatric={categoriesMatric}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
                data={data}
                // activeButton={activeButton}
                // categoriesMatricHeatMap={categoriesMatricHeatMap}
                categoriesMatricmonitoring={categoriesMatricmonitoring}
              />
            </div>
          </div>
        )}
        {activeButton === "Benchmark" && (
          <div className="flex flex-wrap  items-start  justify-center  px-[6px] lg:px-[2px] ml-0 lg:ml-2 mt-7 bg-[#fafafb]">
            <div className=" w-full flex items-start gap-1 justify-start flex-wrap">
        
              <PerformanceBenchmarkChart selectedBenchmarkCategory={selectedBenchmarkCategory} activeButton={activeButton}  selectedSubCategory={selectedSubCategory} selectedSubCategoryTwo={""} selectedCategory={""} staticData={staticData} />
            
            
            </div>
          </div>
        )}
        {activeButton === "Heatmap" && (
          <div className="flex flex-wrap  mt-7 items-start  justify-center  px-[6px] lg:px-[6px] ml-0 lg:ml-2 bg-[#fafafb]">
            <div className=" w-full flex items-start gap-4 justify-start flex-wrap">
              {/* <RiskMonitoringRecoveryMonthlyView
                setCategory={setCategories}
                setCategoriesMatricHeatMap={setCategoriesMatricHeatMap}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
              /> */}

              {/* <MonitoringRecoveryPieChart
                categoriesMatricHeatMap={categoriesMatricHeatMap}
              /> */}

              {/* <MonitoringRecoveryLineChart
                categoriesMatricHeatMap={categoriesMatricHeatMap}
                staticDataRecoveryPerformance={staticDataRecoveryPerformance}
              /> */}
              {/* <RiskMonitoringHotspot
                setCategory={setCategories}
                setCategoriesMatricHeatMap={setCategoriesMatricHeatMap}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
              /> */}
               {categoriesMatricHeatMap==="Location" && 
               <HeatmapLocationGrid  
                Category={categories}
                categoriesMatric={categoriesMatric}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
                dataHeatmap={dataHeatmap}
                // activeButton={activeButton}
                categoriesMatricHeatMap={categoriesMatricHeatMap}
                // categoriesMatricmonitoring={categoriesMatricmonitoring}
                />}
             {categoriesMatricHeatMap==="POS" && 
             <HeatmapPosGrid 
                Category={categories}
                categoriesMatric={categoriesMatric}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
                dataHeatmap={dataHeatmap}
                // activeButton={activeButton}
                categoriesMatricHeatMap={categoriesMatricHeatMap}
                // categoriesMatricmonitoring={categoriesMatricmonitoring}
                />}
              {categoriesMatricHeatMap==="Vintage" && 
              <HeatmapVintageGrid  Category={categories}
                categoriesMatric={categoriesMatric}
                isCategoryVisible={isCategoryVisible}
                setIsCategoryVisible={setIsCategoryVisible}
                dataHeatmap={dataHeatmap}
                // activeButton={activeButton}
                categoriesMatricHeatMap={categoriesMatricHeatMap}
                // categoriesMatricmonitoring={categoriesMatricmonitoring}
                />}
            </div>
          </div>
        )}

        {/* <div
          className="w-full flex items-center justify-end gap-3 mt-8 mr-2 mb-8"
          id="backButtons"
        >
          <button
            onClick={() => navigate(-1)}
            className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium "
          >
            Back
          </button>

          <Button
            onClick={runDiagnostics}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Review Hotspots
          </Button>
        </div> */}
        <div
          id="indilabslogo"
          className="flex items-center justify-center gap-1  text-['italic'] font-[500] text-[#000000] h-[20px] mt-24 hidden"
        >
          <span className="italic">Made By</span>{" "}
          <img src={indilabslogo} className="mt-4" alt="indilabs.ai" />
        </div>
      </div>
    </div>
  );
};

export default MonitoringRecovery;
