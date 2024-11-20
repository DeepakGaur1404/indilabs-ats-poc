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

// const dataHeatmap:any={
//   "POSMetrics": [
//       {
//           "Month": "Feb2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.02652389930146536,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 1,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.02144662231024091,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 1,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.014077034560499968,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 1,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.020621207047874245,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.024565556506469723,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.025038007689110627,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.023581440644704972,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 1,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.023171823760229786,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 1,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.022001743947111314,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 1,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.020463268639636396,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 1,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "<1L",
//           "Latest_Performance": 0.020751320854015893,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 1,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "<1L",
//           "Latest_Performance": 0.01747990752856263,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "<1L",
//           "Latest_Performance": 0.0177455260315778,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "<1L",
//           "Latest_Performance": 0.016947939712405404,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "<1L",
//           "Latest_Performance": 0.011205586614726601,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 1,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "<1L",
//           "Latest_Performance": 0.013647634139636355,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 1,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "<1L",
//           "Latest_Performance": 0.012813675434128608,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 1,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.01116985182828243,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 2,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.010323231504051851,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 2,
//           "Color": "#6AC21A"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.007202489966221733,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.008640804432012492,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.009549122170028183,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 2,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.00904259851210204,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.00869424528245601,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.009457348117614183,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 2,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.008537675664792497,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.007706624451325804,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.008115302116283538,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.007717789595950465,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.0076905991144942416,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.008257750847041747,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.005736234674012124,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.007161680344576446,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "1-5L",
//           "Latest_Performance": 0.00613848009991673,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.008262475229108175,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 3,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.0063261060802232,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 3,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.004765806877762636,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.005555817231898524,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.005624157847564712,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.004376233356046096,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.004429467502353382,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.004645468028408356,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.005511016471049676,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.003532597278260322,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.00498627674847871,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.004669290366992341,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.004412762385092024,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.005680579807644524,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.003859903383858646,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.003957405467219905,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "5-10L",
//           "Latest_Performance": 0.003586460983511953,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.008477434226466891,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 4,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.005853567377033548,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 4,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.0031415400295514463,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 4,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "May2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.005039508413741318,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.004767799418368689,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.004961127745762657,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.008260040350643668,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 4,
//           "Color": "#F36513"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.0038160764869375396,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.00386821864010487,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.002920110506098996,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 4,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": ">10L",
//           "Latest_Performance": 0.0047701929500542604,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": ">10L",
//           "Latest_Performance": 0.004985917405495444,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": ">10L",
//           "Latest_Performance": 0.004586281815853007,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": ">10L",
//           "Latest_Performance": 0.005352278325632454,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": ">10L",
//           "Latest_Performance": 0.00282632428003758,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 4,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "May2024",
//           "Segment": ">10L",
//           "Latest_Performance": 0.006014239268609494,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": ">10L",
//           "Latest_Performance": 0.0031491626563310542,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 4,
//           "Color": "#E51B1B"
//       }
//   ],
//   "VintageMetrics": [
//       {
//           "Month": "Feb2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.03315788150273605,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 1,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.023315695548759015,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 1,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.014586462808929111,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.02830386601620277,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.027585775409296433,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.027313777488674414,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.025822124785165386,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.024212132182174568,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.02586525641961907,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.018299249002353444,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "V1",
//           "Latest_Performance": 0.02558466983413042,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "V1",
//           "Latest_Performance": 0.023423842924048015,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "V1",
//           "Latest_Performance": 0.02305341236166865,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "V1",
//           "Latest_Performance": 0.02212151156627066,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "V1",
//           "Latest_Performance": 0.017158389064762834,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "V1",
//           "Latest_Performance": 0.02004836609215151,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "V1",
//           "Latest_Performance": 0.018929057296379396,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 1,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.01864940038128712,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 2,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.023446243101339574,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 2,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.015258510638124787,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.018393869381301806,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.018470706220511765,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.01201808202733114,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.012660644976280623,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.015510429225605617,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.014337497063932593,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.01131001901804436,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "V2",
//           "Latest_Performance": 0.011563500263487602,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "V2",
//           "Latest_Performance": 0.014092335598936944,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "V2",
//           "Latest_Performance": 0.011634087908160595,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "V2",
//           "Latest_Performance": 0.012999902744165119,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "V2",
//           "Latest_Performance": 0.009721677374057889,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "V2",
//           "Latest_Performance": 0.010441199615193884,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "V2",
//           "Latest_Performance": 0.008683658382895369,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.01973383096721892,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 3,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.015205961982507822,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 3,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.010953482043956995,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.012687705604265135,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.011968989848713777,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.015897617941874893,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 3,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.015747140354823545,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 3,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.015745777288025592,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 3,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.011941723559387269,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.005643932263882499,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "V3",
//           "Latest_Performance": 0.009074925513036668,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "V3",
//           "Latest_Performance": 0.008689658178131809,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "V3",
//           "Latest_Performance": 0.007194039782103043,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "V3",
//           "Latest_Performance": 0.008930337522100805,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "V3",
//           "Latest_Performance": 0.007217915848123293,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "V3",
//           "Latest_Performance": 0.010416474062020014,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "V3",
//           "Latest_Performance": 0.007262978029671426,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.00985111535198895,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 4,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.009217831632153003,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 4,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.006814564493917073,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.007170884780887564,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.008499560711433863,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.007627952597163759,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.007661825067433633,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.009119260769815616,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.00946619996699287,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.010042992051142926,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "V4",
//           "Latest_Performance": 0.009078297218573127,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "V4",
//           "Latest_Performance": 0.009460396071930598,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "V4",
//           "Latest_Performance": 0.009877079605598346,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "V4",
//           "Latest_Performance": 0.00937772612365133,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "V4",
//           "Latest_Performance": 0.005559923171819064,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "V4",
//           "Latest_Performance": 0.006599826180738611,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "V4",
//           "Latest_Performance": 0.006368036967892864,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.00512594889073911,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 5,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.0046261997464182025,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 5,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.003309543121962778,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.003417727917675045,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.004409575863607554,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 5,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.0038627211836541366,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.0036557429743925146,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.00444549856423937,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 5,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.004198690857512695,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 5,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.0041015964165323935,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "V5",
//           "Latest_Performance": 0.004343250929247867,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 5,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "V5",
//           "Latest_Performance": 0.003535623439391667,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "V5",
//           "Latest_Performance": 0.003912563641512351,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "V5",
//           "Latest_Performance": 0.0052593276730303505,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 5,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "V5",
//           "Latest_Performance": 0.003317523667278509,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "V5",
//           "Latest_Performance": 0.00406397714253462,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "V5",
//           "Latest_Performance": 0.003434575539288568,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.0036722910798184616,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 6,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.0029102386481668903,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 6,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.0029836623072453158,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 6,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.002330475611865644,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.0026490054505272577,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.0027717706974547097,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.0025675377182043445,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.0025678005098853226,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.0017179370921044815,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.002316737031231144,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "V6",
//           "Latest_Performance": 0.002130942242475815,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "V6",
//           "Latest_Performance": 0.0018641182211114966,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "V6",
//           "Latest_Performance": 0.0020034121396928853,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "V6",
//           "Latest_Performance": 0.002031096700946436,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "V6",
//           "Latest_Performance": 0.0014073765004248878,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "V6",
//           "Latest_Performance": 0.0016958704508559894,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "V6",
//           "Latest_Performance": 0.001214604524941433,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.003698034474458682,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 7,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.0036189391948945266,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 7,
//           "Color": "#6AC21A"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.0029681807876835897,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.0028239243926779217,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.0024447372723834025,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.004305039309447983,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 7,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.002993892537087095,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 7,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.0012011982366550915,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.0027216548240477584,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.0025157434869288718,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "V7",
//           "Latest_Performance": 0.002046401439661794,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "V7",
//           "Latest_Performance": 0.0029213534732776608,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "V7",
//           "Latest_Performance": 0.001995776690175008,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "V7",
//           "Latest_Performance": 0.00372549016777178,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 7,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "V7",
//           "Latest_Performance": 0.0005183629784953205,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 7,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "V7",
//           "Latest_Performance": 0.002128965364192964,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "V7",
//           "Latest_Performance": 0.000691584175212473,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       }
//   ],
//   "StateMetrics": [
//       {
//           "Month": "Feb2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.010075507541989565,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 7,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.009661472956981304,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 7,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.006609183092004444,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.007486900305156037,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.009231591209537936,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 7,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.010359021313194711,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 7,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.009439136872505412,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 7,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.010276025759557461,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 7,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.00836684355798547,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 7,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.009711560876323619,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 7,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.010376210805465299,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 7,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.006538807671785705,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 7,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.008495481856970449,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 7,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.013189175343828019,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 7,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.006693191951739924,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.00791064689402825,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "ANDHRA PRADESH",
//           "Latest_Performance": 0.005937128126978269,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 7,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.009898056997884855,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 16,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.016986444638567185,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 16,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.010925335001145071,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.011410838228301473,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.0120336507251875,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.00820576379410443,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.007280899599973865,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.013758575665414916,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 16,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.00923745618927408,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.004674213505833683,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.010179313518802632,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.008042904823584099,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.010296149083151152,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.009363068006214881,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.006375771635753526,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.00899246609013737,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "ASSAM",
//           "Latest_Performance": 0.009210586875251298,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 16,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.021818226994290615,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 20,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.00934469290352763,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 20,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.0026364101338507916,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.010796134975506848,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 20,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.009149802519533892,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.014253591780076865,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 20,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.002735571731770195,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.009862210682495688,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.005042099608523762,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.005130477298860111,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.006692846985251637,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.0032326525847719426,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.003987271841294478,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.006569223497926743,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.005606755537575964,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.003405456217326846,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "BIHAR",
//           "Latest_Performance": 0.0031140669204892573,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 20,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.0046048882430738455,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 23,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.010005090992337378,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 23,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.005525141275984491,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 23,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.006876370112741458,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 23,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.009588690103670977,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 23,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.017243345869922475,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 23,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.009586541121840588,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 23,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.004433859917595313,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 23,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.0025705341590012798,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 23,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.011540220924996262,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 23,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.007632245423610948,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 23,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.006760487396034521,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 23,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.007392460556144199,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 23,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.014616315810934791,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 23,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.004616988131408026,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 23,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.0045364645132626065,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 23,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "CHANDIGARH",
//           "Latest_Performance": 0.0005245610774526495,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 23,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.011126914590878244,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 15,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.008108249617386695,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 15,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.004408620641210281,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 15,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.008624735232591225,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 15,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.01088316165476331,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 15,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.011460280467281776,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 15,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.01221862693681948,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 15,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.011362808914281874,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 15,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.014075455376536546,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 15,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.008526661776412847,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 15,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.014805530209337486,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 15,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.011561202960763791,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 15,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.005966495710054432,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 15,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.008134371829460255,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 15,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.008659883668270986,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 15,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.009592906754691257,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 15,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "CHATTISGARH",
//           "Latest_Performance": 0.007671793806635098,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 15,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.0035213930679806917,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 26,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.0007823922901239639,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 26,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 26,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.03127764258993291,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 26,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 26,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.00889424253835365,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 26,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.01102915846983613,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 26,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.005560416148371193,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 26,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.006417631626693475,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 26,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.008030852748257628,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 26,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.0013775926934596482,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 26,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.001383960719578343,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 26,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.0035135085377633692,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 26,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.0004935394339373459,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 26,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.004184292026280556,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 26,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.004387885972574686,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 26,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "DADRA AND NAGAR HAVELI",
//           "Latest_Performance": 0.008983342376166764,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 26,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "DAMAN AND DIU",
//           "Latest_Performance": 0.0,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 27,
//           "Color": "None"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.010056900614825077,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 11,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.006908844571804544,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 11,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.005688791808729834,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.0066189004069231614,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.005225673165871131,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.007231832534895441,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 11,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.008360042539715038,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 11,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.008011926859486653,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 11,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.006029544892635423,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.004101160472399709,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.007024215451964921,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 11,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.007639275706848705,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 11,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.005253029837483365,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.006805671885236186,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.004010780434365902,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.004673686930170981,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "DELHI",
//           "Latest_Performance": 0.004645168180889538,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 11,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.02154413988850195,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 24,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.04180088779276558,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 24,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.037534588189496274,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 24,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.0072299266931796,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.008282497285704517,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.016852288805283205,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.013314828978139806,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.016337668608540353,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.023615940469454057,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 24,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.012641775190465157,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "GOA",
//           "Latest_Performance": 0.008071779552147313,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "GOA",
//           "Latest_Performance": 0.013956375149377169,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "GOA",
//           "Latest_Performance": 0.016385718259200387,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "GOA",
//           "Latest_Performance": 0.017792732328400004,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "GOA",
//           "Latest_Performance": 0.008629519595138104,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "GOA",
//           "Latest_Performance": 0.009416043145034005,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "GOA",
//           "Latest_Performance": 0.010257587375280153,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 24,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.004790999423175286,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 9,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.005192552100723883,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 9,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.0028493909350519593,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 9,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.004674003471946956,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 9,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.006522904830737218,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 9,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.0046149191600325075,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 9,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.00549919525822559,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 9,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.005311253321491344,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 9,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.004240527117931913,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 9,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.0025708210289891753,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 9,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.0036204648779524506,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 9,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.004822606874049964,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 9,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.00488421367067351,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 9,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.004987971338100289,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 9,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.003519357882752229,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 9,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.0036877166885398134,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 9,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "GUJARAT",
//           "Latest_Performance": 0.004466369949156171,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 9,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.008966872323977235,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 6,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.006736492387263926,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 6,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.0060358615793592646,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.007415749230852033,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.008100648769871183,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 6,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.006864835314467104,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.005070844117243962,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.0077658045639286575,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 6,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.005099077216656201,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.005010726095775376,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.005427735832134083,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.004481631088488256,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.0038964743005914597,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 6,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.004422058510887875,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 6,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.0032669252463561668,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.004829549582931273,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "HARYANA",
//           "Latest_Performance": 0.0036092181929930347,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 6,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.013498109452934703,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 21,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.019184054479517293,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 21,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.014726817414332887,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.02131207216915567,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 21,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.017693981333752693,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 21,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.011742583486785666,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.018096430391326725,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 21,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.012657858957025264,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.013792917862974385,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.013171127279672894,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.01558474462032185,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.01716859704249042,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.01442607198118649,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.021581102546173746,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 21,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.012688284728560838,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.014260625338217965,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 21,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "HIMACHAL PRADESH",
//           "Latest_Performance": 0.020308185108504226,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 21,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.012241064020661054,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 25,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.013315718786270928,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 25,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.009769675891550993,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 25,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.00869763707258259,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 25,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.025558526643049466,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 25,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.034496379496994724,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 25,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.01485233010927765,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 25,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.01551155757280669,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 25,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.008183962690881974,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 25,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.011099488050541086,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 25,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.0042721765576711306,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 25,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.04374744727735066,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 25,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.004445658484552696,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 25,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.02327977781329652,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 25,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.009775625489737039,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 25,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.006423731907615444,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 25,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "JAMMU AND KASHMIR",
//           "Latest_Performance": 0.04296799080728827,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 25,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.016912343977681786,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 17,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.01566439927930388,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 17,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.0046114905440248375,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 17,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.022593602832684044,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 17,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.015948543240442935,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 17,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.020372043648197332,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 17,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.017833395081779748,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 17,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.017168772780552743,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 17,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.025426830337429915,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 17,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.01540442037387304,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 17,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.013972234976776623,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 17,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.01530722092189883,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 17,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.015061712101951145,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 17,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.020589649847485486,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 17,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.0068618173854431445,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 17,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.014179442138421828,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 17,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "JHARKHAND",
//           "Latest_Performance": 0.005565498528375945,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 17,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.020652809494623538,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 5,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.015066325790527784,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 5,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.008903708767738995,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.010291245421919181,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.011307489051341518,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.010273916498394094,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.011220590515069502,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.008920409055721902,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 5,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.01176697171662798,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 5,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.008500442231151702,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 5,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.010631949879639654,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 5,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.011841019531179314,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 5,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.009020938333161017,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 5,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.009278883837479145,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 5,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.006220716723454536,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.00797270715311819,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 5,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "KARNATAKA",
//           "Latest_Performance": 0.006673386758449502,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 5,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.014942083571034154,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 19,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.018799376817212273,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 19,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.009897289558813492,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.009057526292403056,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.00980486797118906,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.011088396733558098,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.006856044496805075,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.013087153474902585,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 19,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.00996527137458241,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.010675816907879146,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.00874941729951769,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.009280690685364077,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.009943525112596,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.011799387500476544,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.005643430925330152,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.01159583704857532,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "KERALA",
//           "Latest_Performance": 0.005578144364528521,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 19,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.008280527550306057,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 4,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.0073079450460427015,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 4,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.00608356508657687,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.005780694609446602,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.009244068737777719,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.005790983321404215,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.008388706349480614,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.009264007887454033,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 4,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.007219149742401608,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 4,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.005902218374443271,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.00733271452540279,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.006797690305404323,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.007785237559047252,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 4,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.010052833884974077,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 4,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.006872064134102813,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.006739455943536056,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "MADHYA PRADESH",
//           "Latest_Performance": 0.005941983969417857,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 4,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.010310706185030705,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 1,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.009174711315781132,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 1,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.006601734019609056,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.00886174929287243,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.008554341397354129,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.008399780351466525,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.008212887938781449,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.006689470447793117,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.008857294221065126,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 1,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.007775404767785406,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.008311034507095492,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.008386445703651957,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.008370599366915728,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.008295832158535882,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 1,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.006106788515894286,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.007382498148651045,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 1,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "MAHARASHTRA",
//           "Latest_Performance": 0.00643048872396393,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 1,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.013806317281418677,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 18,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.009230718867889317,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 18,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.008697725591884276,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.008978300304826901,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.012532673953325841,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 18,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.00804299491730724,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.009158019047648062,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.012755824147042386,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 18,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.0076378383697477655,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.00803714694623845,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.009392509656244918,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.012711576976161114,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 18,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.013216700246008928,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 18,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.008803878175312144,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.003398932827509561,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.00790072942009402,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "ODISHA",
//           "Latest_Performance": 0.0076978872670758645,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 18,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.018784263239973797,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 22,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.016946283458461234,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 22,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.009689008756820484,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.003898751977852054,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.007798114151528094,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.006197120619110712,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.0045310773074146975,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.017452277678294673,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 22,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.004048920105154626,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.015234794955240084,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 22,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.004987648741455284,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.004531662999975638,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.0026483494260318343,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.006529614337221317,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.003038084034652328,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.005135942222576053,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "PONDICHERRY",
//           "Latest_Performance": 0.001069385008831581,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 22,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.01040766369619743,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 12,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.00746917961526766,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 12,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.00621592814211673,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.008292975422388663,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.009481487813700272,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 12,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.009507854595658697,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 12,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.0064173370527805616,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.00782935144577343,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.00654362907074484,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.005462664707130942,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.008116472524628366,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.006381530616786474,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.006483480574214569,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.005074655498600662,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.0044574773938376045,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.006354646850896272,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "PUNJAB",
//           "Latest_Performance": 0.005430192094068964,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 12,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.009199495759550494,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 10,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.006067834073286258,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 10,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.0054032822436613755,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.004969014837869072,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.005556732851813791,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.004865736737245773,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.004736677708731719,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.005344675193981847,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.003865172063711111,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.004602707179080412,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.004255921126848705,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.003345480851335909,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.002923129761530674,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.0028908723127181127,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 10,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.0027029812952335136,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.004392644758913655,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "RAJASTHAN",
//           "Latest_Performance": 0.00341600067945373,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 10,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.013141336566434306,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 3,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.013130362853440571,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 3,
//           "Color": "#6AC21A"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.008571938165669434,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.008968994181640733,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.010559490378879464,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.010360410296313228,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.00904539251071973,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.010107309940150555,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.010795655486321522,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.007917391827530202,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.007376122956096214,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.006578953303091497,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.0076027432485275695,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.008181740505720757,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.005315795128299967,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.005553632960244879,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 3,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "TAMIL NADU",
//           "Latest_Performance": 0.005350658359352976,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 3,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.01276979243486861,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 8,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.012378441424711383,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 8,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.010212925316529137,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.010820313828810092,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.01135311370950721,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.01112208877590828,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.012475755661785933,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 8,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.011318062582495469,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.011342392167256877,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.008348774587621842,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.010916727576190019,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.00897566572738046,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.008952392456231617,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.008618529865885008,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.007384863295234592,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.008460752350216996,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "TELANGANA",
//           "Latest_Performance": 0.007277822414285264,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 8,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.008160444505782403,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 2,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.007913729670829789,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 2,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.005971023515808684,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.007178122538673902,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 2,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.006455344815891627,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.006231713566791221,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.006465637474280083,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.0059240823555288535,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.006175616777757106,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.005077926272848887,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.004619617180965231,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.005476150076446771,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.00541668400390989,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.004858208142217633,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 2,
//           "Color": "#E51B1B"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.004395028709541902,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.005460307377660784,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "UTTAR PRADESH",
//           "Latest_Performance": 0.0036740386315176695,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 2,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.008146766826159215,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 14,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.009039205164436417,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 14,
//           "Color": "#ABD974"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.004707907914135404,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.006100696400530964,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.010078366016553026,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 14,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.007666883275601139,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 14,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.007457932555072601,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.007610320888785043,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.006275641732780594,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.008076712744064723,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 14,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.004211180652199129,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.002459315961304155,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.004131922283794528,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.0059012678452206035,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.003514849691349654,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.0045155080995489755,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "UTTARAKHAND",
//           "Latest_Performance": 0.004017929813301735,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 14,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.01259047962734449,
//           "x_coordinate_month": 1,
//           "y_coordinate_segment": 13,
//           "Color": "None"
//       },
//       {
//           "Month": "Mar2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.0082934193170783,
//           "x_coordinate_month": 2,
//           "y_coordinate_segment": 13,
//           "Color": "#FBE472"
//       },
//       {
//           "Month": "Apr2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.004848207616412982,
//           "x_coordinate_month": 3,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.009180415512080674,
//           "x_coordinate_month": 4,
//           "y_coordinate_segment": 13,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jun2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.010325681586393628,
//           "x_coordinate_month": 5,
//           "y_coordinate_segment": 13,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Jul2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.006952661616483547,
//           "x_coordinate_month": 6,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Aug2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.007038524599678211,
//           "x_coordinate_month": 7,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Sep2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.010059924008524039,
//           "x_coordinate_month": 8,
//           "y_coordinate_segment": 13,
//           "Color": "#FD940F"
//       },
//       {
//           "Month": "Oct2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.0077417354933298176,
//           "x_coordinate_month": 9,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Nov2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.0075223371730265,
//           "x_coordinate_month": 10,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Dec2023",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.008411172062018015,
//           "x_coordinate_month": 11,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jan2024",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.006401412212883699,
//           "x_coordinate_month": 12,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Feb2024",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.006465475594791353,
//           "x_coordinate_month": 13,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Mar2024",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.006722691513838544,
//           "x_coordinate_month": 14,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Apr2024",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.0042470967169922534,
//           "x_coordinate_month": 15,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "May2024",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.004296797132335085,
//           "x_coordinate_month": 16,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       },
//       {
//           "Month": "Jun2024",
//           "Segment": "WEST BENGAL",
//           "Latest_Performance": 0.004897314255859837,
//           "x_coordinate_month": 17,
//           "y_coordinate_segment": 13,
//           "Color": "#FD6363"
//       }
//   ]
// }

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
      // Write_Offs: [
      //   {
      //       Q: "Q1",
      //       sub_segment: null,
      //       mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      //       percentage: [
      //         1,15,25,35,40,45,50,55,58,60,61,62,63,64,65,66,67,68,69,70,70,70,70,70,70,70,70,70,70,70
      //       ],
      //     },
       
      //     {
      //       Q: "Q_Benchmark",
      //       sub_segment: null,
      //       mob: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      //       percentage: [
      //           1,15,25,35,45,50,55,60,65,66,67,68,69,70,71,72,73,74,75,76,80,81,82,83,84,85,86,87,89,90
      //       ],
      //     },
      //   ],

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
