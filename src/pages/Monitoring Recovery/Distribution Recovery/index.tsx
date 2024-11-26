import React, { useState } from "react";
import MonitoringRecoverySubtabsDashboardHeader from "../../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
import Button from "../../../components/Button";
import PerformanceDashboard from "../../../components/PerformanceDashboardHeader/PerformanceDashboard";
import DelinquencySettlementRecovery from "../../../components/Monitoring Recovery/DelinquencySettlementRecovery";
import ForwardFlowRatesSettlementRecovery from "../../../components/Monitoring Recovery/ForwardFlowRatesSettlementRecovery";
import MonitoringCollectionDashboardHeader from "../../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
// import "../Monitoring.scss"
import { useNavigate } from "react-router-dom";
import HomeDashboard from "../../../components/PerformanceDashboardHeader/HomeDashboard";
import DistributionATSnew from "../../../components/Monitoring Recovery/DistributionATSnew";
const Buttons = [
  { id: "$Recovery", label: "$ Value" },
  // { id: "uniquePayer", label: "# Accounts" },
  // { id: "uniquePayer", label: "Unique Payer" },
];
const newcategoriesAll = [
    { id: "Lapse Bkt", name: "Lapse Bkt" },
    { id: "Prem_OS", name: "Prem OS" },
    { id: "Policy_Year", name: "Policy Year" },
    // { id: "Prem_Frequency", name: "Prem Frequency" },
    // { id: "Product", name: "Product" },
  ];
const newcategories = [
  { id: "Lapse Bkt", name: "Lapse Bkt" },
  { id: "Prem_OS", name: "Prem OS" },
  { id: "Policy_Year", name: "Policy Year" },
  { id: "Prem_Frequency", name: "Prem Frequency" },
  { id: "Product", name: "Product" },
];


const PremOSCategories = [
  { id: "<20K", name: "<20K" },
  { id: "20K-50K", name: "20K-50K" },
  { id: "50K-150K", name: "50K-150K" },
  { id: ">150K", name: ">150K" },
];
const PolicyYearCategories = [
  { id: "13M", name: "13M" },
  { id: "27M", name: "27M" },
  { id: "37M", name: "37M" },
  { id: ">150K", name: ">150K" },
];
const PremFrequencyCategories = [
  { id: "Annual", name: "Annual" },
  { id: "20K-50K", name: "20K-50K" },
  { id: "50K-150K", name: "50K-150K" },
  { id: ">150K", name: ">150K" },
];
const ProductCategories = [
  { id: "Traditional", name: "Traditional" },
  { id: "Term", name: "Term" },
  { id: "ULIP", name: "ULIP" },
  
];

const categoriesButton = [
  { id: "all", name: "All" },
  { id: "MAHARASHTRA", name: "MH" },
  { id: "UTTAR PRADESH", name: "UP" },
  { id: "TAMILNADU", name: "TN" },
  { id: "MADHYA PRADESH", name: "MP" },
  { id: "KARNATAKA", name: "KAR" },
  { id: "HARYANA", name: "HR" },

  { id: "ANDHRA PRADESH", name: "AP" },
  { id: "TELANGANA", name: "TEL" },
  { id: "GUJARAT", name: "GUJ" },
  { id: "DELHI", name: "DEL" },
  { id: "OTHERS", name: "Others" },
];

const categories = [
  { id: "pos", name: "POS" },
  { id: "mob", name: "Vintage" },
  // { id: "agency", name: "Agency" },
  //   { id: "segments", name: "Segments" },
];

const AllData = {
    All: {
      "Lapse bucket": [
        [
          {
            Pre_due_policy_count_percentage: 0.0,
            Early_lapse_policy_count_percentage: 0.18,
            Deep_lapse_policy_count_percentage: 21.24,
            Late_lapse_policy_count_percentage: 78.59,
          },
          "Jan2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 0.0,
            Early_lapse_policy_count_percentage: 0.26,
            Deep_lapse_policy_count_percentage: 25.87,
            Late_lapse_policy_count_percentage: 73.87,
          },
          "Feb2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 0.0,
            Early_lapse_policy_count_percentage: 0.12,
            Deep_lapse_policy_count_percentage: 41.79,
            Late_lapse_policy_count_percentage: 58.09,
          },
          "Mar2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 0.0,
            Early_lapse_policy_count_percentage: 0.09,
            Deep_lapse_policy_count_percentage: 28.05,
            Late_lapse_policy_count_percentage: 71.86,
          },
          "Apr2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 0.0,
            Early_lapse_policy_count_percentage: 0.05,
            Deep_lapse_policy_count_percentage: 9.6,
            Late_lapse_policy_count_percentage: 90.34,
          },
          "May2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 14.59,
            Early_lapse_policy_count_percentage: 30.71,
            Deep_lapse_policy_count_percentage: 12.36,
            Late_lapse_policy_count_percentage: 42.34,
          },
          "Jun2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 35.41,
            Early_lapse_policy_count_percentage: 30.55,
            Deep_lapse_policy_count_percentage: 4.33,
            Late_lapse_policy_count_percentage: 29.7,
          },
          "Jul2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 51.99,
            Early_lapse_policy_count_percentage: 21.19,
            Deep_lapse_policy_count_percentage: 5.96,
            Late_lapse_policy_count_percentage: 20.86,
          },
          "Aug2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 32.63,
            Early_lapse_policy_count_percentage: 37.08,
            Deep_lapse_policy_count_percentage: 3.45,
            Late_lapse_policy_count_percentage: 26.84,
          },
          "Sep2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 27.61,
            Early_lapse_policy_count_percentage: 21.81,
            Deep_lapse_policy_count_percentage: 25.69,
            Late_lapse_policy_count_percentage: 24.89,
          },
          "Oct2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 17.28,
            Early_lapse_policy_count_percentage: 0.05,
            Deep_lapse_policy_count_percentage: 50.85,
            Late_lapse_policy_count_percentage: 31.81,
          },
          "Nov2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 48.0,
            Early_lapse_policy_count_percentage: 0.05,
            Deep_lapse_policy_count_percentage: 17.94,
            Late_lapse_policy_count_percentage: 34.0,
          },
          "Dec2023",
        ],
        [
          {
            Pre_due_policy_count_percentage: 51.71,
            Early_lapse_policy_count_percentage: 0.02,
            Deep_lapse_policy_count_percentage: 20.25,
            Late_lapse_policy_count_percentage: 28.02,
          },
          "Jan2024",
        ],
        [
          {
            Pre_due_policy_count_percentage: 0.0,
            Early_lapse_policy_count_percentage: 0.03,
            Deep_lapse_policy_count_percentage: 57.69,
            Late_lapse_policy_count_percentage: 42.28,
          },
          "Feb2024",
        ],
        [
          {
            Pre_due_policy_count_percentage: 2.96,
            Early_lapse_policy_count_percentage: 3.87,
            Deep_lapse_policy_count_percentage: 49.62,
            Late_lapse_policy_count_percentage: 43.54,
          },
          "Mar2024",
        ],
        [
          {
            Pre_due_policy_count_percentage: 46.35,
            Early_lapse_policy_count_percentage: 0.0,
            Deep_lapse_policy_count_percentage: 9.51,
            Late_lapse_policy_count_percentage: 44.14,
          },
          "Apr2024",
        ],
        [
          {
            Pre_due_policy_count_percentage: 0.0,
            Early_lapse_policy_count_percentage: 0.0,
            Deep_lapse_policy_count_percentage: 79.2,
            Late_lapse_policy_count_percentage: 20.8,
          },
          "May2024",
        ],
        [
          {
            Pre_due_policy_count_percentage: 30.59,
            Early_lapse_policy_count_percentage: 0.35,
            Deep_lapse_policy_count_percentage: 30.82,
            Late_lapse_policy_count_percentage: 38.23,
          },
          "Jun2024",
        ],
        [
          {
            Pre_due_policy_count_percentage: 17.43,
            Early_lapse_policy_count_percentage: 4.0,
            Deep_lapse_policy_count_percentage: 41.89,
            Late_lapse_policy_count_percentage: 36.68,
          },
          "Jul2024",
        ],
        [
          {
            Pre_due_policy_count_percentage: 8.27,
            Early_lapse_policy_count_percentage: 0.0,
            Deep_lapse_policy_count_percentage: 67.96,
            Late_lapse_policy_count_percentage: 23.76,
          },
          "Aug2024",
        ],
        [
          {
            Pre_due_policy_count_percentage: 28.54,
            Early_lapse_policy_count_percentage: 0.01,
            Deep_lapse_policy_count_percentage: 36.41,
            Late_lapse_policy_count_percentage: 35.04,
          },
          "Sep2024",
        ],
        [
          {
            Pre_due_policy_count_percentage: 42.43,
            Early_lapse_policy_count_percentage: 0.02,
            Deep_lapse_policy_count_percentage: 18.63,
            Late_lapse_policy_count_percentage: 38.92,
          },
          "Oct2024",
        ],
      ],
      "Principal Outstanding bucket": [
        [
          {
            "COUNT_<=20k_percentage": 14.63,
            "COUNT_>20k, <=50k_percentage": 34.63,
            "COUNT_>50k, <=150k_percentage": 34.43,
            "COUNT_>150k_percentage": 16.31,
          },
          "Jan2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 15.88,
            "COUNT_>20k, <=50k_percentage": 38.36,
            "COUNT_>50k, <=150k_percentage": 34.16,
            "COUNT_>150k_percentage": 11.6,
          },
          "Feb2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 14.16,
            "COUNT_>20k, <=50k_percentage": 37.23,
            "COUNT_>50k, <=150k_percentage": 36.56,
            "COUNT_>150k_percentage": 12.05,
          },
          "Mar2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 31.18,
            "COUNT_>20k, <=50k_percentage": 32.69,
            "COUNT_>50k, <=150k_percentage": 27.44,
            "COUNT_>150k_percentage": 8.69,
          },
          "Apr2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 26.7,
            "COUNT_>20k, <=50k_percentage": 33.72,
            "COUNT_>50k, <=150k_percentage": 29.33,
            "COUNT_>150k_percentage": 10.26,
          },
          "May2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 36.08,
            "COUNT_>20k, <=50k_percentage": 36.89,
            "COUNT_>50k, <=150k_percentage": 19.44,
            "COUNT_>150k_percentage": 7.59,
          },
          "Jun2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 43.03,
            "COUNT_>20k, <=50k_percentage": 24.56,
            "COUNT_>50k, <=150k_percentage": 25.49,
            "COUNT_>150k_percentage": 6.92,
          },
          "Jul2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 52.29,
            "COUNT_>20k, <=50k_percentage": 25.47,
            "COUNT_>50k, <=150k_percentage": 16.19,
            "COUNT_>150k_percentage": 6.05,
          },
          "Aug2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 43.33,
            "COUNT_>20k, <=50k_percentage": 33.94,
            "COUNT_>50k, <=150k_percentage": 18.41,
            "COUNT_>150k_percentage": 4.32,
          },
          "Sep2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 31.6,
            "COUNT_>20k, <=50k_percentage": 30.87,
            "COUNT_>50k, <=150k_percentage": 24.77,
            "COUNT_>150k_percentage": 12.75,
          },
          "Oct2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 27.25,
            "COUNT_>20k, <=50k_percentage": 25.99,
            "COUNT_>50k, <=150k_percentage": 30.3,
            "COUNT_>150k_percentage": 16.46,
          },
          "Nov2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 50.82,
            "COUNT_>20k, <=50k_percentage": 22.3,
            "COUNT_>50k, <=150k_percentage": 16.75,
            "COUNT_>150k_percentage": 10.13,
          },
          "Dec2023",
        ],
        [
          {
            "COUNT_<=20k_percentage": 37.68,
            "COUNT_>20k, <=50k_percentage": 24.25,
            "COUNT_>50k, <=150k_percentage": 24.58,
            "COUNT_>150k_percentage": 13.49,
          },
          "Jan2024",
        ],
        [
          {
            "COUNT_<=20k_percentage": 22.79,
            "COUNT_>20k, <=50k_percentage": 39.77,
            "COUNT_>50k, <=150k_percentage": 27.01,
            "COUNT_>150k_percentage": 10.43,
          },
          "Feb2024",
        ],
        [
          {
            "COUNT_<=20k_percentage": 32.87,
            "COUNT_>20k, <=50k_percentage": 34.77,
            "COUNT_>50k, <=150k_percentage": 23.01,
            "COUNT_>150k_percentage": 9.35,
          },
          "Mar2024",
        ],
        [
          {
            "COUNT_<=20k_percentage": 44.7,
            "COUNT_>20k, <=50k_percentage": 27.13,
            "COUNT_>50k, <=150k_percentage": 21.67,
            "COUNT_>150k_percentage": 6.5,
          },
          "Apr2024",
        ],
        [
          {
            "COUNT_<=20k_percentage": 11.56,
            "COUNT_>20k, <=50k_percentage": 29.3,
            "COUNT_>50k, <=150k_percentage": 43.42,
            "COUNT_>150k_percentage": 15.73,
          },
          "May2024",
        ],
        [
          {
            "COUNT_<=20k_percentage": 34.12,
            "COUNT_>20k, <=50k_percentage": 29.49,
            "COUNT_>50k, <=150k_percentage": 26.98,
            "COUNT_>150k_percentage": 9.41,
          },
          "Jun2024",
        ],
        [
          {
            "COUNT_<=20k_percentage": 29.75,
            "COUNT_>20k, <=50k_percentage": 32.34,
            "COUNT_>50k, <=150k_percentage": 29.57,
            "COUNT_>150k_percentage": 8.33,
          },
          "Jul2024",
        ],
        [
          {
            "COUNT_<=20k_percentage": 20.81,
            "COUNT_>20k, <=50k_percentage": 25.27,
            "COUNT_>50k, <=150k_percentage": 37.15,
            "COUNT_>150k_percentage": 16.77,
          },
          "Aug2024",
        ],
        [
          {
            "COUNT_<=20k_percentage": 28.6,
            "COUNT_>20k, <=50k_percentage": 26.45,
            "COUNT_>50k, <=150k_percentage": 28.61,
            "COUNT_>150k_percentage": 16.35,
          },
          "Sep2024",
        ],
        [
          {
            "COUNT_<=20k_percentage": 37.26,
            "COUNT_>20k, <=50k_percentage": 33.02,
            "COUNT_>50k, <=150k_percentage": 22.62,
            "COUNT_>150k_percentage": 7.1,
          },
          "Oct2024",
        ],
      ],
      "Premium Frequency bucket": [
        [
          {
            "1_percentage": 8.57,
            "3_percentage": 1.66,
            "6_percentage": 7.06,
            "12_percentage": 82.71,
          },
          "Jan2023",
        ],
        [
          {
            "1_percentage": 15.11,
            "3_percentage": 2.17,
            "6_percentage": 7.17,
            "12_percentage": 75.55,
          },
          "Feb2023",
        ],
        [
          {
            "1_percentage": 15.9,
            "3_percentage": 2.33,
            "6_percentage": 10.62,
            "12_percentage": 71.14,
          },
          "Mar2023",
        ],
        [
          {
            "1_percentage": 16.22,
            "3_percentage": 2.61,
            "6_percentage": 8.51,
            "12_percentage": 72.65,
          },
          "Apr2023",
        ],
        [
          {
            "1_percentage": 5.09,
            "3_percentage": 1.76,
            "6_percentage": 6.67,
            "12_percentage": 86.47,
          },
          "May2023",
        ],
        [
          {
            "1_percentage": 11.45,
            "3_percentage": 2.1,
            "6_percentage": 8.98,
            "12_percentage": 77.47,
          },
          "Jun2023",
        ],
        [
          {
            "1_percentage": 8.19,
            "3_percentage": 2.2,
            "6_percentage": 12.3,
            "12_percentage": 77.31,
          },
          "Jul2023",
        ],
        [
          {
            "1_percentage": 14.9,
            "3_percentage": 2.22,
            "6_percentage": 13.17,
            "12_percentage": 69.7,
          },
          "Aug2023",
        ],
        [
          {
            "1_percentage": 8.63,
            "3_percentage": 2.13,
            "6_percentage": 12.42,
            "12_percentage": 76.83,
          },
          "Sep2023",
        ],
        [
          {
            "1_percentage": 11.3,
            "3_percentage": 2.4,
            "6_percentage": 11.15,
            "12_percentage": 75.15,
          },
          "Oct2023",
        ],
        [
          {
            "1_percentage": 11.38,
            "3_percentage": 1.91,
            "6_percentage": 9.47,
            "12_percentage": 77.24,
          },
          "Nov2023",
        ],
        [
          {
            "1_percentage": 10.09,
            "3_percentage": 2.22,
            "6_percentage": 15.93,
            "12_percentage": 71.76,
          },
          "Dec2023",
        ],
        [
          {
            "1_percentage": 9.27,
            "3_percentage": 2.11,
            "6_percentage": 12.27,
            "12_percentage": 76.35,
          },
          "Jan2024",
        ],
        [
          {
            "1_percentage": 6.94,
            "3_percentage": 2.29,
            "6_percentage": 11.95,
            "12_percentage": 78.82,
          },
          "Feb2024",
        ],
        [
          {
            "1_percentage": 13.72,
            "3_percentage": 1.54,
            "6_percentage": 12.41,
            "12_percentage": 72.33,
          },
          "Mar2024",
        ],
        [
          {
            "1_percentage": 4.08,
            "3_percentage": 2.18,
            "6_percentage": 12.77,
            "12_percentage": 80.97,
          },
          "Apr2024",
        ],
        [
          {
            "1_percentage": 21.2,
            "3_percentage": 3.44,
            "6_percentage": 9.72,
            "12_percentage": 65.64,
          },
          "May2024",
        ],
        [
          {
            "1_percentage": 18.21,
            "3_percentage": 5.18,
            "6_percentage": 13.92,
            "12_percentage": 62.69,
          },
          "Jun2024",
        ],
        [
          {
            "1_percentage": 5.51,
            "3_percentage": 1.6,
            "6_percentage": 7.26,
            "12_percentage": 85.63,
          },
          "Jul2024",
        ],
        [
          {
            "1_percentage": 12.8,
            "3_percentage": 2.53,
            "6_percentage": 7.41,
            "12_percentage": 77.27,
          },
          "Aug2024",
        ],
        [
          {
            "1_percentage": 10.08,
            "3_percentage": 2.14,
            "6_percentage": 10.96,
            "12_percentage": 76.82,
          },
          "Sep2024",
        ],
        [
          {
            "1_percentage": 11.7,
            "3_percentage": 2.88,
            "6_percentage": 10.39,
            "12_percentage": 75.02,
          },
          "Oct2024",
        ],
      ],
      "Product Type bucket": [
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 90.35,
            ULIP_percentage: 9.65,
          },
          "Jan2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 92.48,
            ULIP_percentage: 7.52,
          },
          "Feb2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 91.96,
            ULIP_percentage: 8.04,
          },
          "Mar2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 91.35,
            ULIP_percentage: 8.65,
          },
          "Apr2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 91.13,
            ULIP_percentage: 8.87,
          },
          "May2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 92.44,
            ULIP_percentage: 7.56,
          },
          "Jun2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 92.58,
            ULIP_percentage: 7.42,
          },
          "Jul2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 91.7,
            ULIP_percentage: 8.3,
          },
          "Aug2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 94.86,
            ULIP_percentage: 5.14,
          },
          "Sep2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 92.25,
            ULIP_percentage: 7.75,
          },
          "Oct2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 90.92,
            ULIP_percentage: 9.08,
          },
          "Nov2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 94.28,
            ULIP_percentage: 5.72,
          },
          "Dec2023",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 93.54,
            ULIP_percentage: 6.46,
          },
          "Jan2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 97.33,
            ULIP_percentage: 2.67,
          },
          "Feb2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 94.69,
            ULIP_percentage: 5.31,
          },
          "Mar2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 94.15,
            ULIP_percentage: 5.85,
          },
          "Apr2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 85.49,
            ULIP_percentage: 14.51,
          },
          "May2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 93.29,
            ULIP_percentage: 6.71,
          },
          "Jun2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 87.82,
            ULIP_percentage: 12.18,
          },
          "Jul2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 84.06,
            ULIP_percentage: 15.94,
          },
          "Aug2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 89.76,
            ULIP_percentage: 10.24,
          },
          "Sep2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 93.8,
            ULIP_percentage: 6.2,
          },
          "Oct2024",
        ],
        [
          {
            "1_percentage": 0.0,
            TERM_percentage: 0.0,
            TRADITIONAL_percentage: 65.82,
            ULIP_percentage: 34.18,
          },
          "Nov2024",
        ],
      ],
      "Policy Year bucket": [
        [
          {
            contribution_1_percentage: 23.63,
            contribution_13M_percentage: 25.93,
            contribution_25M_percentage: 20.28,
            contribution_37M_percentage: 18.33,
            contribution_49M_percentage: 7.45,
            contribution_61M_percentage: 4.01,
            contribution_FYRP_percentage: 0.38,
          },
          "Jan2023",
        ],
        [
          {
            contribution_1_percentage: 27.55,
            contribution_13M_percentage: 12.13,
            contribution_25M_percentage: 19.32,
            contribution_37M_percentage: 15.68,
            contribution_49M_percentage: 10.68,
            contribution_61M_percentage: 6.14,
            contribution_FYRP_percentage: 8.49,
          },
          "Feb2023",
        ],
        [
          {
            contribution_1_percentage: 36.56,
            contribution_13M_percentage: 16.49,
            contribution_25M_percentage: 10.78,
            contribution_37M_percentage: 11.58,
            contribution_49M_percentage: 9.77,
            contribution_61M_percentage: 6.88,
            contribution_FYRP_percentage: 7.94,
          },
          "Mar2023",
        ],
        [
          {
            contribution_1_percentage: 25.33,
            contribution_13M_percentage: 27.81,
            contribution_25M_percentage: 13.67,
            contribution_37M_percentage: 12.0,
            contribution_49M_percentage: 7.09,
            contribution_61M_percentage: 4.39,
            contribution_FYRP_percentage: 9.7,
          },
          "Apr2023",
        ],
        [
          {
            contribution_1_percentage: 17.7,
            contribution_13M_percentage: 37.94,
            contribution_25M_percentage: 16.19,
            contribution_37M_percentage: 13.54,
            contribution_49M_percentage: 6.86,
            contribution_61M_percentage: 3.66,
            contribution_FYRP_percentage: 4.09,
          },
          "May2023",
        ],
        [
          {
            contribution_1_percentage: 41.52,
            contribution_13M_percentage: 23.78,
            contribution_25M_percentage: 8.78,
            contribution_37M_percentage: 7.34,
            contribution_49M_percentage: 6.62,
            contribution_61M_percentage: 5.24,
            contribution_FYRP_percentage: 6.71,
          },
          "Jun2023",
        ],
        [
          {
            contribution_1_percentage: 49.54,
            contribution_13M_percentage: 16.61,
            contribution_25M_percentage: 8.91,
            contribution_37M_percentage: 7.56,
            contribution_49M_percentage: 6.92,
            contribution_61M_percentage: 6.06,
            contribution_FYRP_percentage: 4.41,
          },
          "Jul2023",
        ],
        [
          {
            contribution_1_percentage: 53.58,
            contribution_13M_percentage: 10.68,
            contribution_25M_percentage: 7.25,
            contribution_37M_percentage: 6.41,
            contribution_49M_percentage: 8.6,
            contribution_61M_percentage: 6.15,
            contribution_FYRP_percentage: 7.34,
          },
          "Aug2023",
        ],
        [
          {
            contribution_1_percentage: 46.11,
            contribution_13M_percentage: 17.56,
            contribution_25M_percentage: 8.92,
            contribution_37M_percentage: 8.22,
            contribution_49M_percentage: 7.28,
            contribution_61M_percentage: 7.92,
            contribution_FYRP_percentage: 4.0,
          },
          "Sep2023",
        ],
        [
          {
            contribution_1_percentage: 42.72,
            contribution_13M_percentage: 17.63,
            contribution_25M_percentage: 10.1,
            contribution_37M_percentage: 11.29,
            contribution_49M_percentage: 8.04,
            contribution_61M_percentage: 5.16,
            contribution_FYRP_percentage: 5.05,
          },
          "Oct2023",
        ],
        [
          {
            contribution_1_percentage: 36.56,
            contribution_13M_percentage: 18.11,
            contribution_25M_percentage: 17.09,
            contribution_37M_percentage: 12.19,
            contribution_49M_percentage: 8.43,
            contribution_61M_percentage: 4.94,
            contribution_FYRP_percentage: 2.67,
          },
          "Nov2023",
        ],
        [
          {
            contribution_1_percentage: 65.43,
            contribution_13M_percentage: 11.26,
            contribution_25M_percentage: 6.81,
            contribution_37M_percentage: 5.19,
            contribution_49M_percentage: 4.22,
            contribution_61M_percentage: 2.18,
            contribution_FYRP_percentage: 4.91,
          },
          "Dec2023",
        ],
        [
          {
            contribution_1_percentage: 45.94,
            contribution_13M_percentage: 11.49,
            contribution_25M_percentage: 8.52,
            contribution_37M_percentage: 5.83,
            contribution_49M_percentage: 6.12,
            contribution_61M_percentage: 4.48,
            contribution_FYRP_percentage: 17.63,
          },
          "Jan2024",
        ],
        [
          {
            contribution_1_percentage: 52.56,
            contribution_13M_percentage: 7.33,
            contribution_25M_percentage: 21.63,
            contribution_37M_percentage: 7.59,
            contribution_49M_percentage: 4.86,
            contribution_61M_percentage: 3.64,
            contribution_FYRP_percentage: 2.38,
          },
          "Feb2024",
        ],
        [
          {
            contribution_1_percentage: 60.71,
            contribution_13M_percentage: 8.23,
            contribution_25M_percentage: 8.93,
            contribution_37M_percentage: 6.82,
            contribution_49M_percentage: 6.0,
            contribution_61M_percentage: 4.57,
            contribution_FYRP_percentage: 4.74,
          },
          "Mar2024",
        ],
        [
          {
            contribution_1_percentage: 58.9,
            contribution_13M_percentage: 13.67,
            contribution_25M_percentage: 9.96,
            contribution_37M_percentage: 6.2,
            contribution_49M_percentage: 4.23,
            contribution_61M_percentage: 4.48,
            contribution_FYRP_percentage: 2.57,
          },
          "Apr2024",
        ],
        [
          {
            contribution_1_percentage: 3.14,
            contribution_13M_percentage: 27.93,
            contribution_25M_percentage: 34.31,
            contribution_37M_percentage: 23.02,
            contribution_49M_percentage: 10.21,
            contribution_61M_percentage: 0.56,
            contribution_FYRP_percentage: 0.82,
          },
          "May2024",
        ],
        [
          {
            contribution_1_percentage: 100.0,
            contribution_13M_percentage: 0.0,
            contribution_25M_percentage: 0.0,
            contribution_37M_percentage: 0.0,
            contribution_49M_percentage: 0.0,
            contribution_61M_percentage: 0.0,
            contribution_FYRP_percentage: 0.0,
          },
          "Jun2024",
        ],
        [
          {
            contribution_1_percentage: 100.0,
            contribution_13M_percentage: 0.0,
            contribution_25M_percentage: 0.0,
            contribution_37M_percentage: 0.0,
            contribution_49M_percentage: 0.0,
            contribution_61M_percentage: 0.0,
            contribution_FYRP_percentage: 0.0,
          },
          "Jul2024",
        ],
        [
          {
            contribution_1_percentage: 100.0,
            contribution_13M_percentage: 0.0,
            contribution_25M_percentage: 0.0,
            contribution_37M_percentage: 0.0,
            contribution_49M_percentage: 0.0,
            contribution_61M_percentage: 0.0,
            contribution_FYRP_percentage: 0.0,
          },
          "Aug2024",
        ],
        [
          {
            contribution_1_percentage: 100.0,
            contribution_13M_percentage: 0.0,
            contribution_25M_percentage: 0.0,
            contribution_37M_percentage: 0.0,
            contribution_49M_percentage: 0.0,
            contribution_61M_percentage: 0.0,
            contribution_FYRP_percentage: 0.0,
          },
          "Sep2024",
        ],
        [
          {
            contribution_1_percentage: 100.0,
            contribution_13M_percentage: 0.0,
            contribution_25M_percentage: 0.0,
            contribution_37M_percentage: 0.0,
            contribution_49M_percentage: 0.0,
            contribution_61M_percentage: 0.0,
            contribution_FYRP_percentage: 0.0,
          },
          "Oct2024",
        ],
      ],
    },
  };
  
const PreDueData=
{
  "Pre-due": {
      "Principal Outstanding bucket": [
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Jan2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Feb2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Mar2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Apr2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "May2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 63.43,
                  "COUNT_>20k, <=50k_percentage": 21.92,
                  "COUNT_>50k, <=150k_percentage": 10.59,
                  "COUNT_>150k_percentage": 4.06
              },
              "Jun2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 67.23,
                  "COUNT_>20k, <=50k_percentage": 15.82,
                  "COUNT_>50k, <=150k_percentage": 13.52,
                  "COUNT_>150k_percentage": 3.43
              },
              "Jul2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 64.48,
                  "COUNT_>20k, <=50k_percentage": 21.49,
                  "COUNT_>50k, <=150k_percentage": 10.57,
                  "COUNT_>150k_percentage": 3.46
              },
              "Aug2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 56.34,
                  "COUNT_>20k, <=50k_percentage": 30.18,
                  "COUNT_>50k, <=150k_percentage": 11.36,
                  "COUNT_>150k_percentage": 2.12
              },
              "Sep2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 44.74,
                  "COUNT_>20k, <=50k_percentage": 29.05,
                  "COUNT_>50k, <=150k_percentage": 18.4,
                  "COUNT_>150k_percentage": 7.81
              },
              "Oct2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 82.2,
                  "COUNT_>20k, <=50k_percentage": 10.69,
                  "COUNT_>50k, <=150k_percentage": 4.15,
                  "COUNT_>150k_percentage": 2.96
              },
              "Nov2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 82.08,
                  "COUNT_>20k, <=50k_percentage": 11.14,
                  "COUNT_>50k, <=150k_percentage": 5.7,
                  "COUNT_>150k_percentage": 1.08
              },
              "Dec2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 50.26,
                  "COUNT_>20k, <=50k_percentage": 19.56,
                  "COUNT_>50k, <=150k_percentage": 18.54,
                  "COUNT_>150k_percentage": 11.64
              },
              "Jan2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Feb2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 51.95,
                  "COUNT_>20k, <=50k_percentage": 27.92,
                  "COUNT_>50k, <=150k_percentage": 3.9,
                  "COUNT_>150k_percentage": 16.23
              },
              "Mar2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 55.19,
                  "COUNT_>20k, <=50k_percentage": 21.78,
                  "COUNT_>50k, <=150k_percentage": 19.31,
                  "COUNT_>150k_percentage": 3.73
              },
              "Apr2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "May2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 57.71,
                  "COUNT_>20k, <=50k_percentage": 21.85,
                  "COUNT_>50k, <=150k_percentage": 14.85,
                  "COUNT_>150k_percentage": 5.58
              },
              "Jun2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 54.45,
                  "COUNT_>20k, <=50k_percentage": 26.56,
                  "COUNT_>50k, <=150k_percentage": 15.95,
                  "COUNT_>150k_percentage": 3.03
              },
              "Jul2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 48.16,
                  "COUNT_>20k, <=50k_percentage": 26.45,
                  "COUNT_>50k, <=150k_percentage": 17.39,
                  "COUNT_>150k_percentage": 8.0
              },
              "Aug2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 47.8,
                  "COUNT_>20k, <=50k_percentage": 16.84,
                  "COUNT_>50k, <=150k_percentage": 27.26,
                  "COUNT_>150k_percentage": 8.1
              },
              "Sep2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 34.4,
                  "COUNT_>20k, <=50k_percentage": 37.63,
                  "COUNT_>50k, <=150k_percentage": 22.38,
                  "COUNT_>150k_percentage": 5.6
              },
              "Oct2024"
          ]
      ],
      "Premium Frequency bucket": [
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "Jan2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "Feb2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "Mar2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "Apr2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "May2023"
          ],
          [
              {
                  "1_percentage": 0.31,
                  "3_percentage": 3.05,
                  "6_percentage": 18.43,
                  "12_percentage": 78.21
              },
              "Jun2023"
          ],
          [
              {
                  "1_percentage": 0.63,
                  "3_percentage": 2.4,
                  "6_percentage": 18.97,
                  "12_percentage": 78.0
              },
              "Jul2023"
          ],
          [
              {
                  "1_percentage": 8.7,
                  "3_percentage": 2.02,
                  "6_percentage": 17.19,
                  "12_percentage": 72.09
              },
              "Aug2023"
          ],
          [
              {
                  "1_percentage": 0.17,
                  "3_percentage": 1.62,
                  "6_percentage": 15.73,
                  "12_percentage": 82.48
              },
              "Sep2023"
          ],
          [
              {
                  "1_percentage": 0.58,
                  "3_percentage": 1.9,
                  "6_percentage": 15.07,
                  "12_percentage": 82.44
              },
              "Oct2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.5,
                  "6_percentage": 15.16,
                  "12_percentage": 84.34
              },
              "Nov2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 1.24,
                  "6_percentage": 23.43,
                  "12_percentage": 75.32
              },
              "Dec2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 1.3,
                  "6_percentage": 13.4,
                  "12_percentage": 85.3
              },
              "Jan2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "Feb2024"
          ],
          [
              {
                  "1_percentage": 0.65,
                  "3_percentage": 1.3,
                  "6_percentage": 12.34,
                  "12_percentage": 85.71
              },
              "Mar2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 1.39,
                  "6_percentage": 15.5,
                  "12_percentage": 83.11
              },
              "Apr2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "May2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 6.72,
                  "6_percentage": 24.88,
                  "12_percentage": 68.4
              },
              "Jun2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 3.79,
                  "6_percentage": 20.52,
                  "12_percentage": 75.7
              },
              "Jul2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 6.69,
                  "6_percentage": 21.39,
                  "12_percentage": 71.92
              },
              "Aug2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 1.75,
                  "6_percentage": 19.29,
                  "12_percentage": 78.96
              },
              "Sep2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 2.07,
                  "6_percentage": 10.05,
                  "12_percentage": 87.87
              },
              "Oct2024"
          ]
      ],
      "Product Type bucket": [
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 0.0,
                  "ULIP_percentage": 0.0
              },
              "Jan2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 0.0,
                  "ULIP_percentage": 0.0
              },
              "Feb2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 0.0,
                  "ULIP_percentage": 0.0
              },
              "Mar2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 0.0,
                  "ULIP_percentage": 0.0
              },
              "Apr2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 0.0,
                  "ULIP_percentage": 0.0
              },
              "May2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 92.39,
                  "ULIP_percentage": 7.61
              },
              "Jun2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 93.92,
                  "ULIP_percentage": 6.08
              },
              "Jul2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 93.31,
                  "ULIP_percentage": 6.69
              },
              "Aug2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 92.05,
                  "ULIP_percentage": 7.95
              },
              "Sep2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 91.87,
                  "ULIP_percentage": 8.13
              },
              "Oct2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 98.11,
                  "ULIP_percentage": 1.89
              },
              "Nov2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 99.68,
                  "ULIP_percentage": 0.32
              },
              "Dec2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 95.29,
                  "ULIP_percentage": 4.71
              },
              "Jan2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 0.0,
                  "ULIP_percentage": 0.0
              },
              "Feb2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 98.05,
                  "ULIP_percentage": 1.95
              },
              "Mar2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 98.33,
                  "ULIP_percentage": 1.67
              },
              "Apr2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 0.0,
                  "ULIP_percentage": 0.0
              },
              "May2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 91.49,
                  "ULIP_percentage": 8.51
              },
              "Jun2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 94.51,
                  "ULIP_percentage": 5.49
              },
              "Jul2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 94.78,
                  "ULIP_percentage": 5.22
              },
              "Aug2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 97.92,
                  "ULIP_percentage": 2.08
              },
              "Sep2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "TERM_percentage": 0.0,
                  "TRADITIONAL_percentage": 95.43,
                  "ULIP_percentage": 4.57
              },
              "Oct2024"
          ]
      ],
      "Policy Year bucket": [
          [
              {
                  "contribution_1_percentage": 62.81,
                  "contribution_13M_percentage": 7.9,
                  "contribution_25M_percentage": 5.41,
                  "contribution_37M_percentage": 6.76,
                  "contribution_49M_percentage": 6.23,
                  "contribution_61M_percentage": 9.09,
                  "contribution_FYRP_percentage": 1.8
              },
              "Jun2023"
          ],
          [
              {
                  "contribution_1_percentage": 72.7,
                  "contribution_13M_percentage": 0.24,
                  "contribution_25M_percentage": 4.96,
                  "contribution_37M_percentage": 6.17,
                  "contribution_49M_percentage": 5.86,
                  "contribution_61M_percentage": 7.13,
                  "contribution_FYRP_percentage": 2.94
              },
              "Jul2023"
          ],
          [
              {
                  "contribution_1_percentage": 67.51,
                  "contribution_13M_percentage": 2.03,
                  "contribution_25M_percentage": 4.46,
                  "contribution_37M_percentage": 4.19,
                  "contribution_49M_percentage": 9.95,
                  "contribution_61M_percentage": 7.26,
                  "contribution_FYRP_percentage": 4.6
              },
              "Aug2023"
          ],
          [
              {
                  "contribution_1_percentage": 62.84,
                  "contribution_13M_percentage": 9.25,
                  "contribution_25M_percentage": 6.43,
                  "contribution_37M_percentage": 5.41,
                  "contribution_49M_percentage": 5.79,
                  "contribution_61M_percentage": 10.25,
                  "contribution_FYRP_percentage": 0.05
              },
              "Sep2023"
          ],
          [
              {
                  "contribution_1_percentage": 61.91,
                  "contribution_13M_percentage": 9.83,
                  "contribution_25M_percentage": 6.33,
                  "contribution_37M_percentage": 4.99,
                  "contribution_49M_percentage": 6.24,
                  "contribution_61M_percentage": 9.47,
                  "contribution_FYRP_percentage": 1.23
              },
              "Oct2023"
          ],
          [
              {
                  "contribution_1_percentage": 82.05,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 3.38,
                  "contribution_37M_percentage": 4.49,
                  "contribution_49M_percentage": 4.3,
                  "contribution_61M_percentage": 4.75,
                  "contribution_FYRP_percentage": 1.04
              },
              "Nov2023"
          ],
          [
              {
                  "contribution_1_percentage": 90.69,
                  "contribution_13M_percentage": 3.0,
                  "contribution_25M_percentage": 0.9,
                  "contribution_37M_percentage": 1.15,
                  "contribution_49M_percentage": 1.15,
                  "contribution_61M_percentage": 1.09,
                  "contribution_FYRP_percentage": 2.01
              },
              "Dec2023"
          ],
          [
              {
                  "contribution_1_percentage": 53.9,
                  "contribution_13M_percentage": 6.38,
                  "contribution_25M_percentage": 3.25,
                  "contribution_37M_percentage": 2.55,
                  "contribution_49M_percentage": 3.22,
                  "contribution_61M_percentage": 3.01,
                  "contribution_FYRP_percentage": 27.68
              },
              "Jan2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Feb2024"
          ],
          [
              {
                  "contribution_1_percentage": 79.69,
                  "contribution_13M_percentage": 8.98,
                  "contribution_25M_percentage": 2.34,
                  "contribution_37M_percentage": 1.95,
                  "contribution_49M_percentage": 2.34,
                  "contribution_61M_percentage": 3.91,
                  "contribution_FYRP_percentage": 0.78
              },
              "Mar2024"
          ],
          [
              {
                  "contribution_1_percentage": 75.04,
                  "contribution_13M_percentage": 6.34,
                  "contribution_25M_percentage": 8.14,
                  "contribution_37M_percentage": 3.1,
                  "contribution_49M_percentage": 2.64,
                  "contribution_61M_percentage": 3.76,
                  "contribution_FYRP_percentage": 0.98
              },
              "Apr2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "May2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jun2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jul2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Aug2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Sep2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Oct2024"
          ]
      ]
  }
}
const ELData=
{
  "Early-Lapse": {
      "Premium Outstanding bucket": [
          [
              {
                  "COUNT_<=20k_percentage": 14.29,
                  "COUNT_>20k, <=50k_percentage": 42.86,
                  "COUNT_>50k, <=150k_percentage": 42.86,
                  "COUNT_>150k_percentage": 0.0
              },
              "Jan2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 36.36,
                  "COUNT_>20k, <=50k_percentage": 45.45,
                  "COUNT_>50k, <=150k_percentage": 18.18,
                  "COUNT_>150k_percentage": 0.0
              },
              "Feb2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 27.27,
                  "COUNT_>20k, <=50k_percentage": 72.73,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Mar2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 50.0,
                  "COUNT_>50k, <=150k_percentage": 50.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Apr2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 33.33,
                  "COUNT_>20k, <=50k_percentage": 66.67,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "May2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 41.04,
                  "COUNT_>20k, <=50k_percentage": 30.41,
                  "COUNT_>50k, <=150k_percentage": 16.79,
                  "COUNT_>150k_percentage": 11.76
              },
              "Jun2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 48.01,
                  "COUNT_>20k, <=50k_percentage": 27.87,
                  "COUNT_>50k, <=150k_percentage": 17.92,
                  "COUNT_>150k_percentage": 6.2
              },
              "Jul2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 54.8,
                  "COUNT_>20k, <=50k_percentage": 23.26,
                  "COUNT_>50k, <=150k_percentage": 15.89,
                  "COUNT_>150k_percentage": 6.05
              },
              "Aug2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 43.05,
                  "COUNT_>20k, <=50k_percentage": 34.25,
                  "COUNT_>50k, <=150k_percentage": 18.89,
                  "COUNT_>150k_percentage": 3.82
              },
              "Sep2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 46.63,
                  "COUNT_>20k, <=50k_percentage": 27.99,
                  "COUNT_>50k, <=150k_percentage": 18.92,
                  "COUNT_>150k_percentage": 6.46
              },
              "Oct2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 20.0,
                  "COUNT_>20k, <=50k_percentage": 40.0,
                  "COUNT_>50k, <=150k_percentage": 40.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Nov2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 25.0,
                  "COUNT_>20k, <=50k_percentage": 50.0,
                  "COUNT_>50k, <=150k_percentage": 25.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Dec2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 66.67,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 33.33,
                  "COUNT_>150k_percentage": 0.0
              },
              "Jan2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 66.67,
                  "COUNT_>50k, <=150k_percentage": 33.33,
                  "COUNT_>150k_percentage": 0.0
              },
              "Feb2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 52.74,
                  "COUNT_>20k, <=50k_percentage": 38.31,
                  "COUNT_>50k, <=150k_percentage": 7.96,
                  "COUNT_>150k_percentage": 1.0
              },
              "Mar2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Apr2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "May2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 66.67,
                  "COUNT_>50k, <=150k_percentage": 33.33,
                  "COUNT_>150k_percentage": 0.0
              },
              "Jun2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 22.94,
                  "COUNT_>20k, <=50k_percentage": 39.08,
                  "COUNT_>50k, <=150k_percentage": 31.39,
                  "COUNT_>150k_percentage": 6.59
              },
              "Jul2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Aug2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 0.0,
                  "COUNT_>20k, <=50k_percentage": 100.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Sep2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 100.0,
                  "COUNT_>20k, <=50k_percentage": 0.0,
                  "COUNT_>50k, <=150k_percentage": 0.0,
                  "COUNT_>150k_percentage": 0.0
              },
              "Oct2024"
          ]
      ],
      "Premium Frequency bucket": [
          [
              {
                  "1_percentage": 57.14,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 42.86
              },
              "Jan2023"
          ],
          [
              {
                  "1_percentage": 18.18,
                  "3_percentage": 0.0,
                  "6_percentage": 9.09,
                  "12_percentage": 72.73
              },
              "Feb2023"
          ],
          [
              {
                  "1_percentage": 9.09,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 90.91
              },
              "Mar2023"
          ],
          [
              {
                  "1_percentage": 75.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 25.0
              },
              "Apr2023"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 100.0
              },
              "May2023"
          ],
          [
              {
                  "1_percentage": 10.5,
                  "3_percentage": 1.96,
                  "6_percentage": 8.46,
                  "12_percentage": 79.08
              },
              "Jun2023"
          ],
          [
              {
                  "1_percentage": 19.71,
                  "3_percentage": 2.43,
                  "6_percentage": 12.31,
                  "12_percentage": 65.56
              },
              "Jul2023"
          ],
          [
              {
                  "1_percentage": 32.68,
                  "3_percentage": 2.22,
                  "6_percentage": 10.46,
                  "12_percentage": 54.64
              },
              "Aug2023"
          ],
          [
              {
                  "1_percentage": 11.4,
                  "3_percentage": 2.36,
                  "6_percentage": 12.47,
                  "12_percentage": 73.77
              },
              "Sep2023"
          ],
          [
              {
                  "1_percentage": 20.64,
                  "3_percentage": 3.02,
                  "6_percentage": 13.45,
                  "12_percentage": 62.89
              },
              "Oct2023"
          ],
          [
              {
                  "1_percentage": 20.0,
                  "3_percentage": 20.0,
                  "6_percentage": 20.0,
                  "12_percentage": 40.0
              },
              "Nov2023"
          ],
          [
              {
                  "1_percentage": 50.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 50.0
              },
              "Dec2023"
          ],
          [
              {
                  "1_percentage": 33.33,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 66.67
              },
              "Jan2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 33.33,
                  "12_percentage": 66.67
              },
              "Feb2024"
          ],
          [
              {
                  "1_percentage": 22.39,
                  "3_percentage": 1.99,
                  "6_percentage": 11.44,
                  "12_percentage": 64.18
              },
              "Mar2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "Apr2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "May2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 16.67,
                  "12_percentage": 83.33
              },
              "Jun2024"
          ],
          [
              {
                  "1_percentage": 4.04,
                  "3_percentage": 0.98,
                  "6_percentage": 4.26,
                  "12_percentage": 90.72
              },
              "Jul2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 0.0,
                  "12_percentage": 0.0
              },
              "Aug2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 100.0,
                  "12_percentage": 0.0
              },
              "Sep2024"
          ],
          [
              {
                  "1_percentage": 0.0,
                  "3_percentage": 0.0,
                  "6_percentage": 50.0,
                  "12_percentage": 50.0
              },
              "Oct2024"
          ]
      ],
      "Product Type bucket": [
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Jan2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Feb2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Mar2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Apr2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "May2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 87.43,
                  "contribution_ULIP_percentage": 12.57
              },
              "Jun2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 86.81,
                  "contribution_ULIP_percentage": 13.19
              },
              "Jul2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 91.21,
                  "contribution_ULIP_percentage": 8.79
              },
              "Aug2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 96.44,
                  "contribution_ULIP_percentage": 3.56
              },
              "Sep2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 93.3,
                  "contribution_ULIP_percentage": 6.7
              },
              "Oct2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Nov2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Dec2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Jan2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Feb2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 98.51,
                  "contribution_ULIP_percentage": 1.49
              },
              "Mar2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 0.0
              },
              "Apr2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 0.0
              },
              "May2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Jun2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 75.22,
                  "contribution_ULIP_percentage": 24.78
              },
              "Jul2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 0.0
              },
              "Aug2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Sep2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 0.0,
                  "contribution_ULIP_percentage": 100.0
              },
              "Oct2024"
          ]
      ],
      "Policy Year bucket": [
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 42.86,
                  "contribution_49M_percentage": 57.14,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jan2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 18.18,
                  "contribution_49M_percentage": 81.82,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Feb2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 18.18,
                  "contribution_49M_percentage": 81.82,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Mar2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 25.0,
                  "contribution_49M_percentage": 75.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Apr2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 66.67,
                  "contribution_49M_percentage": 33.33,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "May2023"
          ],
          [
              {
                  "contribution_1_percentage": 45.72,
                  "contribution_13M_percentage": 17.96,
                  "contribution_25M_percentage": 10.99,
                  "contribution_37M_percentage": 6.58,
                  "contribution_49M_percentage": 7.55,
                  "contribution_61M_percentage": 5.86,
                  "contribution_FYRP_percentage": 5.34
              },
              "Jun2023"
          ],
          [
              {
                  "contribution_1_percentage": 47.73,
                  "contribution_13M_percentage": 12.13,
                  "contribution_25M_percentage": 8.59,
                  "contribution_37M_percentage": 6.5,
                  "contribution_49M_percentage": 9.82,
                  "contribution_61M_percentage": 7.46,
                  "contribution_FYRP_percentage": 7.77
              },
              "Jul2023"
          ],
          [
              {
                  "contribution_1_percentage": 45.0,
                  "contribution_13M_percentage": 15.61,
                  "contribution_25M_percentage": 7.82,
                  "contribution_37M_percentage": 7.82,
                  "contribution_49M_percentage": 6.24,
                  "contribution_61M_percentage": 4.26,
                  "contribution_FYRP_percentage": 13.25
              },
              "Aug2023"
          ],
          [
              {
                  "contribution_1_percentage": 40.42,
                  "contribution_13M_percentage": 19.95,
                  "contribution_25M_percentage": 8.81,
                  "contribution_37M_percentage": 9.63,
                  "contribution_49M_percentage": 8.14,
                  "contribution_61M_percentage": 6.51,
                  "contribution_FYRP_percentage": 6.53
              },
              "Sep2023"
          ],
          [
              {
                  "contribution_1_percentage": 49.18,
                  "contribution_13M_percentage": 8.84,
                  "contribution_25M_percentage": 11.77,
                  "contribution_37M_percentage": 11.96,
                  "contribution_49M_percentage": 8.04,
                  "contribution_61M_percentage": 1.11,
                  "contribution_FYRP_percentage": 9.09
              },
              "Oct2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 100.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Nov2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 100.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Dec2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 100.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jan2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 100.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Feb2024"
          ],
          [
              {
                  "contribution_1_percentage": 61.86,
                  "contribution_13M_percentage": 7.9,
                  "contribution_25M_percentage": 4.81,
                  "contribution_37M_percentage": 5.15,
                  "contribution_49M_percentage": 3.44,
                  "contribution_61M_percentage": 4.81,
                  "contribution_FYRP_percentage": 12.03
              },
              "Mar2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Apr2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "May2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jun2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jul2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Aug2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Sep2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Oct2024"
          ]
      ]
  }
}
const LLData={
  "Late-Lapse": {
      "Premium Outstanding bucket": [
          [
              {
                  "COUNT_<=20k_percentage": 17.4,
                  "COUNT_>20k, <=50k_percentage": 37.51,
                  "COUNT_>50k, <=150k_percentage": 32.08,
                  "COUNT_>150k_percentage": 13.02
              },
              "Jan2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 16.87,
                  "COUNT_>20k, <=50k_percentage": 41.33,
                  "COUNT_>50k, <=150k_percentage": 31.4,
                  "COUNT_>150k_percentage": 10.4
              },
              "Feb2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 14.31,
                  "COUNT_>20k, <=50k_percentage": 39.44,
                  "COUNT_>50k, <=150k_percentage": 35.29,
                  "COUNT_>150k_percentage": 10.96
              },
              "Mar2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 26.45,
                  "COUNT_>20k, <=50k_percentage": 35.27,
                  "COUNT_>50k, <=150k_percentage": 28.88,
                  "COUNT_>150k_percentage": 9.39
              },
              "Apr2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 25.28,
                  "COUNT_>20k, <=50k_percentage": 34.24,
                  "COUNT_>50k, <=150k_percentage": 30.23,
                  "COUNT_>150k_percentage": 10.25
              },
              "May2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 28.09,
                  "COUNT_>20k, <=50k_percentage": 41.15,
                  "COUNT_>50k, <=150k_percentage": 24.08,
                  "COUNT_>150k_percentage": 6.68
              },
              "Jun2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 13.03,
                  "COUNT_>20k, <=50k_percentage": 30.17,
                  "COUNT_>50k, <=150k_percentage": 45.97,
                  "COUNT_>150k_percentage": 10.83
              },
              "Jul2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 31.15,
                  "COUNT_>20k, <=50k_percentage": 38.51,
                  "COUNT_>50k, <=150k_percentage": 24.13,
                  "COUNT_>150k_percentage": 6.2
              },
              "Aug2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 30.81,
                  "COUNT_>20k, <=50k_percentage": 37.82,
                  "COUNT_>50k, <=150k_percentage": 24.57,
                  "COUNT_>150k_percentage": 6.81
              },
              "Sep2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 24.53,
                  "COUNT_>20k, <=50k_percentage": 38.52,
                  "COUNT_>50k, <=150k_percentage": 25.81,
                  "COUNT_>150k_percentage": 11.13
              },
              "Oct2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 25.15,
                  "COUNT_>20k, <=50k_percentage": 36.71,
                  "COUNT_>50k, <=150k_percentage": 26.97,
                  "COUNT_>150k_percentage": 11.18
              },
              "Nov2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 26.97,
                  "COUNT_>20k, <=50k_percentage": 35.6,
                  "COUNT_>50k, <=150k_percentage": 25.68,
                  "COUNT_>150k_percentage": 11.75
              },
              "Dec2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 30.06,
                  "COUNT_>20k, <=50k_percentage": 33.55,
                  "COUNT_>50k, <=150k_percentage": 24.99,
                  "COUNT_>150k_percentage": 11.41
              },
              "Jan2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 44.11,
                  "COUNT_>20k, <=50k_percentage": 33.85,
                  "COUNT_>50k, <=150k_percentage": 15.75,
                  "COUNT_>150k_percentage": 6.29
              },
              "Feb2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 39.42,
                  "COUNT_>20k, <=50k_percentage": 33.23,
                  "COUNT_>50k, <=150k_percentage": 21.48,
                  "COUNT_>150k_percentage": 5.88
              },
              "Mar2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 38.7,
                  "COUNT_>20k, <=50k_percentage": 31.7,
                  "COUNT_>50k, <=150k_percentage": 21.92,
                  "COUNT_>150k_percentage": 7.68
              },
              "Apr2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 29.25,
                  "COUNT_>20k, <=50k_percentage": 37.21,
                  "COUNT_>50k, <=150k_percentage": 23.74,
                  "COUNT_>150k_percentage": 9.8
              },
              "May2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 36.79,
                  "COUNT_>20k, <=50k_percentage": 43.6,
                  "COUNT_>50k, <=150k_percentage": 17.41,
                  "COUNT_>150k_percentage": 2.2
              },
              "Jun2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 42.64,
                  "COUNT_>20k, <=50k_percentage": 30.88,
                  "COUNT_>50k, <=150k_percentage": 21.16,
                  "COUNT_>150k_percentage": 5.32
              },
              "Jul2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 40.75,
                  "COUNT_>20k, <=50k_percentage": 30.75,
                  "COUNT_>50k, <=150k_percentage": 20.55,
                  "COUNT_>150k_percentage": 7.96
              },
              "Aug2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 36.71,
                  "COUNT_>20k, <=50k_percentage": 34.33,
                  "COUNT_>50k, <=150k_percentage": 23.26,
                  "COUNT_>150k_percentage": 5.7
              },
              "Sep2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 51.01,
                  "COUNT_>20k, <=50k_percentage": 25.07,
                  "COUNT_>50k, <=150k_percentage": 19.06,
                  "COUNT_>150k_percentage": 4.86
              },
              "Oct2024"
          ]
      ],
      "Premium Frequency bucket": [
          [
              {
                  "1_percentage": 8.25,
                  "3_percentage": 1.82,
                  "6_percentage": 7.32,
                  "12_percentage": 82.6
              },
              "Jan2023"
          ],
          [
              {
                  "1_percentage": 16.3,
                  "3_percentage": 2.14,
                  "6_percentage": 7.66,
                  "12_percentage": 73.9
              },
              "Feb2023"
          ],
          [
              {
                  "1_percentage": 16.19,
                  "3_percentage": 2.48,
                  "6_percentage": 11.47,
                  "12_percentage": 69.86
              },
              "Mar2023"
          ],
          [
              {
                  "1_percentage": 18.36,
                  "3_percentage": 3.12,
                  "6_percentage": 10.03,
                  "12_percentage": 68.48
              },
              "Apr2023"
          ],
          [
              {
                  "1_percentage": 4.83,
                  "3_percentage": 1.85,
                  "6_percentage": 6.92,
                  "12_percentage": 86.39
              },
              "May2023"
          ],
          [
              {
                  "1_percentage": 17.93,
                  "3_percentage": 2.17,
                  "6_percentage": 7.45,
                  "12_percentage": 72.44
              },
              "Jun2023"
          ],
          [
              {
                  "1_percentage": 4.42,
                  "3_percentage": 1.62,
                  "6_percentage": 5.54,
                  "12_percentage": 88.42
              },
              "Jul2023"
          ],
          [
              {
                  "1_percentage": 14.79,
                  "3_percentage": 2.51,
                  "6_percentage": 8.37,
                  "12_percentage": 74.33
              },
              "Aug2023"
          ],
          [
              {
                  "1_percentage": 14.3,
                  "3_percentage": 2.54,
                  "6_percentage": 8.82,
                  "12_percentage": 74.35
              },
              "Sep2023"
          ],
          [
              {
                  "1_percentage": 14.97,
                  "3_percentage": 2.9,
                  "6_percentage": 9.09,
                  "12_percentage": 73.04
              },
              "Oct2023"
          ],
          [
              {
                  "1_percentage": 11.28,
                  "3_percentage": 2.36,
                  "6_percentage": 10.56,
                  "12_percentage": 75.8
              },
              "Nov2023"
          ],
          [
              {
                  "1_percentage": 21.06,
                  "3_percentage": 3.43,
                  "6_percentage": 9.96,
                  "12_percentage": 65.55
              },
              "Dec2023"
          ],
          [
              {
                  "1_percentage": 16.15,
                  "3_percentage": 2.92,
                  "6_percentage": 12.7,
                  "12_percentage": 68.23
              },
              "Jan2024"
          ],
          [
              {
                  "1_percentage": 7.34,
                  "3_percentage": 2.79,
                  "6_percentage": 13.79,
                  "12_percentage": 76.08
              },
              "Feb2024"
          ],
          [
              {
                  "1_percentage": 17.54,
                  "3_percentage": 2.34,
                  "6_percentage": 11.89,
                  "12_percentage": 68.23
              },
              "Mar2024"
          ],
          [
              {
                  "1_percentage": 7.0,
                  "3_percentage": 2.76,
                  "6_percentage": 9.32,
                  "12_percentage": 80.92
              },
              "Apr2024"
          ],
          [
              {
                  "1_percentage": 12.27,
                  "3_percentage": 2.31,
                  "6_percentage": 7.39,
                  "12_percentage": 78.03
              },
              "May2024"
          ],
          [
              {
                  "1_percentage": 35.12,
                  "3_percentage": 5.68,
                  "6_percentage": 9.24,
                  "12_percentage": 49.96
              },
              "Jun2024"
          ],
          [
              {
                  "1_percentage": 10.7,
                  "3_percentage": 1.68,
                  "6_percentage": 6.6,
                  "12_percentage": 81.02
              },
              "Jul2024"
          ],
          [
              {
                  "1_percentage": 19.38,
                  "3_percentage": 3.3,
                  "6_percentage": 8.38,
                  "12_percentage": 68.94
              },
              "Aug2024"
          ],
          [
              {
                  "1_percentage": 17.03,
                  "3_percentage": 2.19,
                  "6_percentage": 8.76,
                  "12_percentage": 72.02
              },
              "Sep2024"
          ],
          [
              {
                  "1_percentage": 19.68,
                  "3_percentage": 3.48,
                  "6_percentage": 10.21,
                  "12_percentage": 66.63
              },
              "Oct2024"
          ]
      ],
      "Product Type bucket": [
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 90.85,
                  "contribution_ULIP_percentage": 9.15
              },
              "Jan2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 92.06,
                  "contribution_ULIP_percentage": 7.94
              },
              "Feb2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 90.89,
                  "contribution_ULIP_percentage": 9.11
              },
              "Mar2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 90.36,
                  "contribution_ULIP_percentage": 9.64
              },
              "Apr2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 90.92,
                  "contribution_ULIP_percentage": 9.08
              },
              "May2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 94.2,
                  "contribution_ULIP_percentage": 5.8
              },
              "Jun2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 96.54,
                  "contribution_ULIP_percentage": 3.46
              },
              "Jul2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 92.57,
                  "contribution_ULIP_percentage": 7.43
              },
              "Aug2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 95.97,
                  "contribution_ULIP_percentage": 4.03
              },
              "Sep2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 87.68,
                  "contribution_ULIP_percentage": 12.32
              },
              "Oct2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 93.95,
                  "contribution_ULIP_percentage": 6.05
              },
              "Nov2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 91.95,
                  "contribution_ULIP_percentage": 8.05
              },
              "Dec2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 93.88,
                  "contribution_ULIP_percentage": 6.12
              },
              "Jan2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 94.1,
                  "contribution_ULIP_percentage": 5.9
              },
              "Feb2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 96.42,
                  "contribution_ULIP_percentage": 3.58
              },
              "Mar2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 93.16,
                  "contribution_ULIP_percentage": 6.84
              },
              "Apr2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 89.8,
                  "contribution_ULIP_percentage": 10.2
              },
              "May2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 95.31,
                  "contribution_ULIP_percentage": 4.69
              },
              "Jun2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 96.64,
                  "contribution_ULIP_percentage": 3.36
              },
              "Jul2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 79.26,
                  "contribution_ULIP_percentage": 20.74
              },
              "Aug2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 85.38,
                  "contribution_ULIP_percentage": 14.62
              },
              "Sep2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 93.83,
                  "contribution_ULIP_percentage": 6.17
              },
              "Oct2024"
          ]
      ],
      "Policy Year bucket": [
          [
              {
                  "contribution_1_percentage": 24.03,
                  "contribution_13M_percentage": 26.14,
                  "contribution_25M_percentage": 19.89,
                  "contribution_37M_percentage": 19.3,
                  "contribution_49M_percentage": 6.44,
                  "contribution_61M_percentage": 3.83,
                  "contribution_FYRP_percentage": 0.37
              },
              "Jan2023"
          ],
          [
              {
                  "contribution_1_percentage": 25.09,
                  "contribution_13M_percentage": 13.45,
                  "contribution_25M_percentage": 19.3,
                  "contribution_37M_percentage": 16.13,
                  "contribution_49M_percentage": 8.82,
                  "contribution_61M_percentage": 5.6,
                  "contribution_FYRP_percentage": 11.61
              },
              "Feb2023"
          ],
          [
              {
                  "contribution_1_percentage": 24.37,
                  "contribution_13M_percentage": 22.48,
                  "contribution_25M_percentage": 13.42,
                  "contribution_37M_percentage": 13.03,
                  "contribution_49M_percentage": 8.26,
                  "contribution_61M_percentage": 5.6,
                  "contribution_FYRP_percentage": 12.83
              },
              "Mar2023"
          ],
          [
              {
                  "contribution_1_percentage": 28.79,
                  "contribution_13M_percentage": 17.17,
                  "contribution_25M_percentage": 15.59,
                  "contribution_37M_percentage": 13.98,
                  "contribution_49M_percentage": 7.21,
                  "contribution_61M_percentage": 4.93,
                  "contribution_FYRP_percentage": 12.32
              },
              "Apr2023"
          ],
          [
              {
                  "contribution_1_percentage": 17.92,
                  "contribution_13M_percentage": 35.46,
                  "contribution_25M_percentage": 17.01,
                  "contribution_37M_percentage": 14.44,
                  "contribution_49M_percentage": 7.0,
                  "contribution_61M_percentage": 3.76,
                  "contribution_FYRP_percentage": 4.42
              },
              "May2023"
          ],
          [
              {
                  "contribution_1_percentage": 36.05,
                  "contribution_13M_percentage": 21.29,
                  "contribution_25M_percentage": 10.4,
                  "contribution_37M_percentage": 9.71,
                  "contribution_49M_percentage": 7.35,
                  "contribution_61M_percentage": 4.02,
                  "contribution_FYRP_percentage": 11.17
              },
              "Jun2023"
          ],
          [
              {
                  "contribution_1_percentage": 16.15,
                  "contribution_13M_percentage": 46.6,
                  "contribution_25M_percentage": 16.48,
                  "contribution_37M_percentage": 10.09,
                  "contribution_49M_percentage": 4.7,
                  "contribution_61M_percentage": 2.68,
                  "contribution_FYRP_percentage": 3.29
              },
              "Jul2023"
          ],
          [
              {
                  "contribution_1_percentage": 27.0,
                  "contribution_13M_percentage": 30.71,
                  "contribution_25M_percentage": 11.17,
                  "contribution_37M_percentage": 8.54,
                  "contribution_49M_percentage": 6.53,
                  "contribution_61M_percentage": 4.83,
                  "contribution_FYRP_percentage": 11.22
              },
              "Aug2023"
          ],
          [
              {
                  "contribution_1_percentage": 31.26,
                  "contribution_13M_percentage": 24.67,
                  "contribution_25M_percentage": 12.16,
                  "contribution_37M_percentage": 10.23,
                  "contribution_49M_percentage": 8.39,
                  "contribution_61M_percentage": 6.76,
                  "contribution_FYRP_percentage": 6.52
              },
              "Sep2023"
          ],
          [
              {
                  "contribution_1_percentage": 31.03,
                  "contribution_13M_percentage": 31.09,
                  "contribution_25M_percentage": 9.53,
                  "contribution_37M_percentage": 10.92,
                  "contribution_49M_percentage": 6.23,
                  "contribution_61M_percentage": 3.96,
                  "contribution_FYRP_percentage": 7.23
              },
              "Oct2023"
          ],
          [
              {
                  "contribution_1_percentage": 24.0,
                  "contribution_13M_percentage": 36.66,
                  "contribution_25M_percentage": 12.12,
                  "contribution_37M_percentage": 8.51,
                  "contribution_49M_percentage": 7.49,
                  "contribution_61M_percentage": 4.18,
                  "contribution_FYRP_percentage": 7.04
              },
              "Nov2023"
          ],
          [
              {
                  "contribution_1_percentage": 22.73,
                  "contribution_13M_percentage": 29.29,
                  "contribution_25M_percentage": 15.08,
                  "contribution_37M_percentage": 10.28,
                  "contribution_49M_percentage": 7.07,
                  "contribution_61M_percentage": 2.74,
                  "contribution_FYRP_percentage": 12.82
              },
              "Dec2023"
          ],
          [
              {
                  "contribution_1_percentage": 37.62,
                  "contribution_13M_percentage": 21.55,
                  "contribution_25M_percentage": 10.62,
                  "contribution_37M_percentage": 7.93,
                  "contribution_49M_percentage": 8.46,
                  "contribution_61M_percentage": 5.45,
                  "contribution_FYRP_percentage": 8.37
              },
              "Jan2024"
          ],
          [
              {
                  "contribution_1_percentage": 42.07,
                  "contribution_13M_percentage": 18.0,
                  "contribution_25M_percentage": 10.93,
                  "contribution_37M_percentage": 9.78,
                  "contribution_49M_percentage": 7.98,
                  "contribution_61M_percentage": 5.32,
                  "contribution_FYRP_percentage": 5.92
              },
              "Feb2024"
          ],
          [
              {
                  "contribution_1_percentage": 43.55,
                  "contribution_13M_percentage": 14.9,
                  "contribution_25M_percentage": 11.2,
                  "contribution_37M_percentage": 8.12,
                  "contribution_49M_percentage": 6.46,
                  "contribution_61M_percentage": 5.15,
                  "contribution_FYRP_percentage": 10.61
              },
              "Mar2024"
          ],
          [
              {
                  "contribution_1_percentage": 36.21,
                  "contribution_13M_percentage": 24.06,
                  "contribution_25M_percentage": 12.7,
                  "contribution_37M_percentage": 10.49,
                  "contribution_49M_percentage": 6.04,
                  "contribution_61M_percentage": 5.47,
                  "contribution_FYRP_percentage": 5.02
              },
              "Apr2024"
          ],
          [
              {
                  "contribution_1_percentage": 2.51,
                  "contribution_13M_percentage": 47.08,
                  "contribution_25M_percentage": 23.61,
                  "contribution_37M_percentage": 22.71,
                  "contribution_49M_percentage": 0.17,
                  "contribution_61M_percentage": 0.2,
                  "contribution_FYRP_percentage": 3.73
              },
              "May2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jun2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jul2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Aug2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Sep2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Oct2024"
          ]
      ]
  }
}
const DLData={
  "Deep-Lapse": {
      "Premium Outstanding bucket": [
          [
              {
                  "COUNT_<=20k_percentage": 4.38,
                  "COUNT_>20k, <=50k_percentage": 23.91,
                  "COUNT_>50k, <=150k_percentage": 43.08,
                  "COUNT_>150k_percentage": 28.64
              },
              "Jan2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 12.87,
                  "COUNT_>20k, <=50k_percentage": 29.79,
                  "COUNT_>50k, <=150k_percentage": 42.21,
                  "COUNT_>150k_percentage": 15.12
              },
              "Feb2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 13.92,
                  "COUNT_>20k, <=50k_percentage": 34.05,
                  "COUNT_>50k, <=150k_percentage": 38.42,
                  "COUNT_>150k_percentage": 13.61
              },
              "Mar2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 43.4,
                  "COUNT_>20k, <=50k_percentage": 26.01,
                  "COUNT_>50k, <=150k_percentage": 23.68,
                  "COUNT_>150k_percentage": 6.91
              },
              "Apr2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 39.96,
                  "COUNT_>20k, <=50k_percentage": 28.6,
                  "COUNT_>50k, <=150k_percentage": 21.02,
                  "COUNT_>150k_percentage": 10.42
              },
              "May2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 18.89,
                  "COUNT_>20k, <=50k_percentage": 56.07,
                  "COUNT_>50k, <=150k_percentage": 20.57,
                  "COUNT_>150k_percentage": 4.47
              },
              "Jun2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 15.67,
                  "COUNT_>20k, <=50k_percentage": 34.23,
                  "COUNT_>50k, <=150k_percentage": 36.29,
                  "COUNT_>150k_percentage": 13.81
              },
              "Jul2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 11.07,
                  "COUNT_>20k, <=50k_percentage": 22.37,
                  "COUNT_>50k, <=150k_percentage": 38.38,
                  "COUNT_>150k_percentage": 28.18
              },
              "Aug2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 20.69,
                  "COUNT_>20k, <=50k_percentage": 36.05,
                  "COUNT_>50k, <=150k_percentage": 31.97,
                  "COUNT_>150k_percentage": 11.29
              },
              "Sep2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 11.59,
                  "COUNT_>20k, <=50k_percentage": 27.86,
                  "COUNT_>50k, <=150k_percentage": 35.57,
                  "COUNT_>150k_percentage": 24.98
              },
              "Oct2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 9.9,
                  "COUNT_>20k, <=50k_percentage": 24.48,
                  "COUNT_>50k, <=150k_percentage": 41.26,
                  "COUNT_>150k_percentage": 24.37
              },
              "Nov2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 12.44,
                  "COUNT_>20k, <=50k_percentage": 26.9,
                  "COUNT_>50k, <=150k_percentage": 29.36,
                  "COUNT_>150k_percentage": 31.31
              },
              "Dec2023"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 16.03,
                  "COUNT_>20k, <=50k_percentage": 23.36,
                  "COUNT_>50k, <=150k_percentage": 39.46,
                  "COUNT_>150k_percentage": 21.14
              },
              "Jan2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 7.18,
                  "COUNT_>20k, <=50k_percentage": 44.1,
                  "COUNT_>50k, <=150k_percentage": 35.25,
                  "COUNT_>150k_percentage": 13.47
              },
              "Feb2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 24.43,
                  "COUNT_>20k, <=50k_percentage": 36.25,
                  "COUNT_>50k, <=150k_percentage": 26.68,
                  "COUNT_>150k_percentage": 12.64
              },
              "Mar2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 21.46,
                  "COUNT_>20k, <=50k_percentage": 31.99,
                  "COUNT_>50k, <=150k_percentage": 31.99,
                  "COUNT_>150k_percentage": 14.55
              },
              "Apr2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 6.91,
                  "COUNT_>20k, <=50k_percentage": 27.22,
                  "COUNT_>50k, <=150k_percentage": 48.59,
                  "COUNT_>150k_percentage": 17.28
              },
              "May2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 7.79,
                  "COUNT_>20k, <=50k_percentage": 19.15,
                  "COUNT_>50k, <=150k_percentage": 50.8,
                  "COUNT_>150k_percentage": 22.25
              },
              "Jun2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 8.87,
                  "COUNT_>20k, <=50k_percentage": 35.39,
                  "COUNT_>50k, <=150k_percentage": 42.41,
                  "COUNT_>150k_percentage": 13.33
              },
              "Jul2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 10.51,
                  "COUNT_>20k, <=50k_percentage": 23.2,
                  "COUNT_>50k, <=150k_percentage": 45.36,
                  "COUNT_>150k_percentage": 20.92
              },
              "Aug2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 5.74,
                  "COUNT_>20k, <=50k_percentage": 26.38,
                  "COUNT_>50k, <=150k_percentage": 34.81,
                  "COUNT_>150k_percentage": 33.07
              },
              "Sep2024"
          ],
          [
              {
                  "COUNT_<=20k_percentage": 14.96,
                  "COUNT_>20k, <=50k_percentage": 39.19,
                  "COUNT_>50k, <=150k_percentage": 30.64,
                  "COUNT_>150k_percentage": 15.22
              },
              "Oct2024"
          ]
      ],
      "Premium Frequency bucket": [
          [
              {
                  "1_percentage": 9.35,
                  "3_percentage": 1.07,
                  "6_percentage": 6.15,
                  "12_percentage": 83.43
              },
              "Jan2023"
          ],
          [
              {
                  "1_percentage": 11.7,
                  "3_percentage": 2.25,
                  "6_percentage": 5.76,
                  "12_percentage": 80.29
              },
              "Feb2023"
          ],
          [
              {
                  "1_percentage": 15.53,
                  "3_percentage": 2.13,
                  "6_percentage": 9.47,
                  "12_percentage": 72.87
              },
              "Mar2023"
          ],
          [
              {
                  "1_percentage": 10.56,
                  "3_percentage": 1.32,
                  "6_percentage": 4.66,
                  "12_percentage": 83.46
              },
              "Apr2023"
          ],
          [
              {
                  "1_percentage": 7.58,
                  "3_percentage": 0.95,
                  "6_percentage": 4.36,
                  "12_percentage": 87.12
              },
              "May2023"
          ],
          [
              {
                  "1_percentage": 4.79,
                  "3_percentage": 1.05,
                  "6_percentage": 4.33,
                  "12_percentage": 89.83
              },
              "Jun2023"
          ],
          [
              {
                  "1_percentage": 14.64,
                  "3_percentage": 2.89,
                  "6_percentage": 4.12,
                  "12_percentage": 78.35
              },
              "Jul2023"
          ],
          [
              {
                  "1_percentage": 6.25,
                  "3_percentage": 2.96,
                  "6_percentage": 4.61,
                  "12_percentage": 86.18
              },
              "Aug2023"
          ],
          [
              {
                  "1_percentage": 14.73,
                  "3_percentage": 1.25,
                  "6_percentage": 8.46,
                  "12_percentage": 75.55
              },
              "Sep2023"
          ],
          [
              {
                  "1_percentage": 11.35,
                  "3_percentage": 1.91,
                  "6_percentage": 6.97,
                  "12_percentage": 79.77
              },
              "Oct2023"
          ],
          [
              {
                  "1_percentage": 15.31,
                  "3_percentage": 2.09,
                  "6_percentage": 6.84,
                  "12_percentage": 75.76
              },
              "Nov2023"
          ],
          [
              {
                  "1_percentage": 16.2,
                  "3_percentage": 2.53,
                  "6_percentage": 7.23,
                  "12_percentage": 74.04
              },
              "Dec2023"
          ],
          [
              {
                  "1_percentage": 23.38,
                  "3_percentage": 3.1,
                  "6_percentage": 8.8,
                  "12_percentage": 64.72
              },
              "Jan2024"
          ],
          [
              {
                  "1_percentage": 6.66,
                  "3_percentage": 1.91,
                  "6_percentage": 10.58,
                  "12_percentage": 80.84
              },
              "Feb2024"
          ],
          [
              {
                  "1_percentage": 10.47,
                  "3_percentage": 0.81,
                  "6_percentage": 12.95,
                  "12_percentage": 75.77
              },
              "Mar2024"
          ],
          [
              {
                  "1_percentage": 10.41,
                  "3_percentage": 3.39,
                  "6_percentage": 15.43,
                  "12_percentage": 70.77
              },
              "Apr2024"
          ],
          [
              {
                  "1_percentage": 23.55,
                  "3_percentage": 3.73,
                  "6_percentage": 10.34,
                  "12_percentage": 62.38
              },
              "May2024"
          ],
          [
              {
                  "1_percentage": 15.49,
                  "3_percentage": 3.1,
                  "6_percentage": 8.83,
                  "12_percentage": 72.58
              },
              "Jun2024"
          ],
          [
              {
                  "1_percentage": 3.39,
                  "3_percentage": 0.69,
                  "6_percentage": 2.61,
                  "12_percentage": 93.31
              },
              "Jul2024"
          ],
          [
              {
                  "1_percentage": 12.05,
                  "3_percentage": 1.75,
                  "6_percentage": 5.37,
                  "12_percentage": 80.83
              },
              "Aug2024"
          ],
          [
              {
                  "1_percentage": 11.3,
                  "3_percentage": 2.4,
                  "6_percentage": 6.51,
                  "12_percentage": 79.79
              },
              "Sep2024"
          ],
          [
              {
                  "1_percentage": 21.68,
                  "3_percentage": 3.5,
                  "6_percentage": 11.52,
                  "12_percentage": 63.3
              },
              "Oct2024"
          ]
      ],
      "Product Type bucket": [
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 89.23,
                  "contribution_ULIP_percentage": 10.77
              },
              "Jan2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 94.6,
                  "contribution_ULIP_percentage": 5.4
              },
              "Feb2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 93.71,
                  "contribution_ULIP_percentage": 6.29
              },
              "Mar2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 94.18,
                  "contribution_ULIP_percentage": 5.82
              },
              "Apr2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 93.56,
                  "contribution_ULIP_percentage": 6.44
              },
              "May2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 98.95,
                  "contribution_ULIP_percentage": 1.05
              },
              "Jun2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 95.05,
                  "contribution_ULIP_percentage": 4.95
              },
              "Jul2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 76.43,
                  "contribution_ULIP_percentage": 23.57
              },
              "Aug2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 95.61,
                  "contribution_ULIP_percentage": 4.39
              },
              "Sep2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 96.22,
                  "contribution_ULIP_percentage": 3.78
              },
              "Oct2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 86.68,
                  "contribution_ULIP_percentage": 13.32
              },
              "Nov2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 84.53,
                  "contribution_ULIP_percentage": 15.47
              },
              "Dec2023"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 88.71,
                  "contribution_ULIP_percentage": 11.29
              },
              "Jan2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 99.75,
                  "contribution_ULIP_percentage": 0.25
              },
              "Feb2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 92.67,
                  "contribution_ULIP_percentage": 7.33
              },
              "Mar2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 78.42,
                  "contribution_ULIP_percentage": 21.58
              },
              "Apr2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 84.36,
                  "contribution_ULIP_percentage": 15.64
              },
              "May2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 93.62,
                  "contribution_ULIP_percentage": 6.38
              },
              "Jun2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 78.52,
                  "contribution_ULIP_percentage": 21.48
              },
              "Jul2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 84.44,
                  "contribution_ULIP_percentage": 15.56
              },
              "Aug2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 87.62,
                  "contribution_ULIP_percentage": 12.38
              },
              "Sep2024"
          ],
          [
              {
                  "contribution_1_percentage": 0.0,
                  "contribution_TERM_percentage": 0.0,
                  "contribution_TRADITIONAL_percentage": 90.1,
                  "contribution_ULIP_percentage": 9.9
              },
              "Oct2024"
          ]
      ],
      "Policy Year bucket": [
          [
              {
                  "contribution_1_percentage": 22.29,
                  "contribution_13M_percentage": 25.34,
                  "contribution_25M_percentage": 21.87,
                  "contribution_37M_percentage": 14.51,
                  "contribution_49M_percentage": 10.83,
                  "contribution_61M_percentage": 4.73,
                  "contribution_FYRP_percentage": 0.42
              },
              "Jan2023"
          ],
          [
              {
                  "contribution_1_percentage": 34.43,
                  "contribution_13M_percentage": 8.64,
                  "contribution_25M_percentage": 19.52,
                  "contribution_37M_percentage": 14.46,
                  "contribution_49M_percentage": 15.13,
                  "contribution_61M_percentage": 7.68,
                  "contribution_FYRP_percentage": 0.15
              },
              "Feb2023"
          ],
          [
              {
                  "contribution_1_percentage": 51.01,
                  "contribution_13M_percentage": 9.47,
                  "contribution_25M_percentage": 7.68,
                  "contribution_37M_percentage": 9.86,
                  "contribution_49M_percentage": 11.39,
                  "contribution_61M_percentage": 8.41,
                  "contribution_FYRP_percentage": 2.18
              },
              "Mar2023"
          ],
          [
              {
                  "contribution_1_percentage": 15.87,
                  "contribution_13M_percentage": 57.18,
                  "contribution_25M_percentage": 8.43,
                  "contribution_37M_percentage": 6.5,
                  "contribution_49M_percentage": 6.58,
                  "contribution_61M_percentage": 2.93,
                  "contribution_FYRP_percentage": 2.5
              },
              "Apr2023"
          ],
          [
              {
                  "contribution_1_percentage": 15.71,
                  "contribution_13M_percentage": 61.78,
                  "contribution_25M_percentage": 8.55,
                  "contribution_37M_percentage": 4.71,
                  "contribution_49M_percentage": 5.41,
                  "contribution_61M_percentage": 2.79,
                  "contribution_FYRP_percentage": 1.05
              },
              "May2023"
          ],
          [
              {
                  "contribution_1_percentage": 16.42,
                  "contribution_13M_percentage": 75.63,
                  "contribution_25M_percentage": 1.38,
                  "contribution_37M_percentage": 1.42,
                  "contribution_49M_percentage": 1.72,
                  "contribution_61M_percentage": 2.01,
                  "contribution_FYRP_percentage": 1.42
              },
              "Jun2023"
          ],
          [
              {
                  "contribution_1_percentage": 21.03,
                  "contribution_13M_percentage": 41.7,
                  "contribution_25M_percentage": 6.46,
                  "contribution_37M_percentage": 15.5,
                  "contribution_49M_percentage": 9.78,
                  "contribution_61M_percentage": 4.61,
                  "contribution_FYRP_percentage": 0.92
              },
              "Jul2023"
          ],
          [
              {
                  "contribution_1_percentage": 20.83,
                  "contribution_13M_percentage": 19.74,
                  "contribution_25M_percentage": 23.58,
                  "contribution_37M_percentage": 19.06,
                  "contribution_49M_percentage": 9.92,
                  "contribution_61M_percentage": 5.6,
                  "contribution_FYRP_percentage": 1.28
              },
              "Aug2023"
          ],
          [
              {
                  "contribution_1_percentage": 31.66,
                  "contribution_13M_percentage": 31.66,
                  "contribution_25M_percentage": 13.98,
                  "contribution_37M_percentage": 9.23,
                  "contribution_49M_percentage": 6.07,
                  "contribution_61M_percentage": 5.8,
                  "contribution_FYRP_percentage": 1.58
              },
              "Sep2023"
          ],
          [
              {
                  "contribution_1_percentage": 21.55,
                  "contribution_13M_percentage": 23.53,
                  "contribution_25M_percentage": 14.24,
                  "contribution_37M_percentage": 19.75,
                  "contribution_49M_percentage": 12.38,
                  "contribution_61M_percentage": 4.46,
                  "contribution_FYRP_percentage": 4.09
              },
              "Oct2023"
          ],
          [
              {
                  "contribution_1_percentage": 21.14,
                  "contribution_13M_percentage": 15.68,
                  "contribution_25M_percentage": 27.34,
                  "contribution_37M_percentage": 18.51,
                  "contribution_49M_percentage": 11.07,
                  "contribution_61M_percentage": 5.52,
                  "contribution_FYRP_percentage": 0.75
              },
              "Nov2023"
          ],
          [
              {
                  "contribution_1_percentage": 39.65,
                  "contribution_13M_percentage": 12.81,
                  "contribution_25M_percentage": 15.83,
                  "contribution_37M_percentage": 12.29,
                  "contribution_49M_percentage": 11.19,
                  "contribution_61M_percentage": 5.51,
                  "contribution_FYRP_percentage": 2.72
              },
              "Dec2023"
          ],
          [
              {
                  "contribution_1_percentage": 34.68,
                  "contribution_13M_percentage": 12.1,
                  "contribution_25M_percentage": 20.78,
                  "contribution_37M_percentage": 12.37,
                  "contribution_49M_percentage": 11.12,
                  "contribution_61M_percentage": 7.33,
                  "contribution_FYRP_percentage": 1.63
              },
              "Jan2024"
          ],
          [
              {
                  "contribution_1_percentage": 59.43,
                  "contribution_13M_percentage": 0.36,
                  "contribution_25M_percentage": 28.63,
                  "contribution_37M_percentage": 6.17,
                  "contribution_49M_percentage": 2.78,
                  "contribution_61M_percentage": 2.54,
                  "contribution_FYRP_percentage": 0.08
              },
              "Feb2024"
          ],
          [
              {
                  "contribution_1_percentage": 71.76,
                  "contribution_13M_percentage": 3.41,
                  "contribution_25M_percentage": 8.01,
                  "contribution_37M_percentage": 6.32,
                  "contribution_49M_percentage": 6.09,
                  "contribution_61M_percentage": 4.18,
                  "contribution_FYRP_percentage": 0.25
              },
              "Mar2024"
          ],
          [
              {
                  "contribution_1_percentage": 60.79,
                  "contribution_13M_percentage": 12.49,
                  "contribution_25M_percentage": 9.0,
                  "contribution_37M_percentage": 6.11,
                  "contribution_49M_percentage": 5.68,
                  "contribution_61M_percentage": 4.45,
                  "contribution_FYRP_percentage": 1.48
              },
              "Apr2024"
          ],
          [
              {
                  "contribution_1_percentage": 3.3,
                  "contribution_13M_percentage": 22.92,
                  "contribution_25M_percentage": 37.12,
                  "contribution_37M_percentage": 23.1,
                  "contribution_49M_percentage": 12.84,
                  "contribution_61M_percentage": 0.66,
                  "contribution_FYRP_percentage": 0.06
              },
              "May2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jun2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Jul2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Aug2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Sep2024"
          ],
          [
              {
                  "contribution_1_percentage": 100.0,
                  "contribution_13M_percentage": 0.0,
                  "contribution_25M_percentage": 0.0,
                  "contribution_37M_percentage": 0.0,
                  "contribution_49M_percentage": 0.0,
                  "contribution_61M_percentage": 0.0,
                  "contribution_FYRP_percentage": 0.0
              },
              "Oct2024"
          ]
      ]
  }
}

// { label: "Deep Lapse", width: "92px" },
// const 

const DistributionRecovery: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("$Recovery");
  const [selectedCategoryButton, setselectedCategoryButton] = useState("all");
  const [selectedCategoryAll, setselectedCategoryAll] = useState("pos");
  const [selectedCategoryMum, setselectedCategoryMum] = useState("pos");
  const [selectedCategoryKar, setselectedCategoryKar] = useState("pos");
  const [selectedCategoryDel, setselectedCategoryDel] = useState("pos");
  const [selectedCategoryTg, setselectedCategoryTg] = useState("pos");
  const [selectedCategoryTn, setselectedCategoryTn] = useState("pos");
  const [selectedCategoryKol, setselectedCategoryKol] = useState("pos");
  const [selectedCategoryRomg, setselectedCategoryRomg] = useState("pos");
  const [selectedCategoryGj, setselectedCategoryGj] = useState("pos");
  const [selectedCategoryMp, setselectedCategoryMp] = useState("pos");
  const [selectedCategoryAp, setselectedCategoryAp] = useState("pos");
  const [selectedCategoryOthers, setselectedCategoryOthers] = useState("pos");
  const [selectedCategoryHR, setselectedCategoryHR] = useState("pos");
  const [selectedCategoryUP, setselectedCategoryUP] = useState("pos");
  const [selectedSubCategory, setselectedSubCategory] = useState("<6");
  const [selectedSubCategoryTwo, setselectedSubCategoryTwo] = useState("1");
  const [selectedSubCategoryAgency, setselectedSubCategoryAgency] =
    useState("DCA1");
  const [
    selectedSubCategoryUniquePayerAgency,
    setselectedSubCategoryUniquePayerAgency,
  ] = useState("DCA1");
  const [selectedSubCategoryPayment, setselectedSubCategoryPayment] =
    useState("PA");
  const [selectedSubCategoryLocation, setselectedSubCategoryLocation] =
    useState("MUM");
  const [selectedSubCategorySegments, setselectedSubCategorySegments] =
    useState("Score");

  const [
    selectedSubCategoryUniquePayerSegments,
    setselectedSubCategoryUniquePayerSegments,
  ] = useState("Seg1");
  const [delinquencyGraphTitle, setdelinquencyGraphTitle] = useState("MOB");
  const [forwardFlowRateTitle, setforwardFlowRateTitle] =
    useState("% Recovery");

    const [newselectedAllCategory, setnewselectedAllCategory] = useState("Lapse Bkt");
    const [newselectedCategory, setnewselectedCategory] = useState("Prem_OS");
    const [PremOSCategorie, setPremOSCategorie] = useState("<20K");
    const [PolicyYear, setPolicyYear] = useState("13M");
     const [PremFrequency, setPremFrequency] = useState("Annual");
     const [Product, setProduct] = useState("Traditional");
     const [previousCategory, setPreviousCategory] = useState<string >("");
     const newhandleCategoryAllClick = async (cityId: string,) => {
      setnewselectedAllCategory(cityId);
     
    };
    const newhandleCategoryClick = async (cityId: string,) => {
      if (cityId === "Lapse Bkt") {
        // Revert to the previous category if "Lapse Bkt" is clicked
        setnewselectedCategory(previousCategory);
      } else {
        // Update the previous category and set the new category
        setPreviousCategory(newselectedCategory);
        setnewselectedCategory(cityId);
      }
     
    };
    const handlePolicyYearCategoriesClick = async (cityId: string) => {
      setPolicyYear(cityId);
    };
    const handlePremOSCategoriesClick = async (cityId: string) => {
      setPremOSCategorie(cityId);
    };
    const handlePremFrequencyCategoriesClick = async (cityId: string) => {
      setPremFrequency(cityId);
    };
    const handleProductCategoriesClick = async (cityId: string) => {
      setProduct(cityId);
    };
 

  let navigate = useNavigate();
  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
    if (buttonId === "$Recovery") {
      setdelinquencyGraphTitle("MOB");
      setforwardFlowRateTitle("% Recovery");
    } else if (buttonId === "uniquePayer") {
      setdelinquencyGraphTitle("MOB");
      setforwardFlowRateTitle("% Recovery");
    }
  };

  const handleCategoryClickButton = async (cityId: string) => {
    setselectedCategoryButton(cityId);
  };

  const handleCategoryClickAll = async (cityId: string) => {
    setselectedCategoryAll(cityId);
  };
  const handleCategoryClickMum = async (cityId: string) => {
    setselectedCategoryMum(cityId);
  };
  const handleCategoryClickTn = async (cityId: string) => {
    setselectedCategoryTn(cityId);
  };
  const handleCategoryClickKar = async (cityId: string) => {
    setselectedCategoryKar(cityId);
  };
  const handleCategoryClickDel = async (cityId: string) => {
    setselectedCategoryDel(cityId);
  };
  const handleCategoryClickRomg = async (cityId: string) => {
    setselectedCategoryRomg(cityId);
  };
  const handleCategoryClickAp = async (cityId: string) => {
    setselectedCategoryAp(cityId);
  };
  const handleCategoryClickGj = async (cityId: string) => {
    setselectedCategoryGj(cityId);
  };
  const handleCategoryClickTg = async (cityId: string) => {
    setselectedCategoryTg(cityId);
  };
  const handleCategoryClickKol = async (cityId: string) => {
    setselectedCategoryKol(cityId);
  };
  const handleCategoryClickMp = async (cityId: string) => {
    setselectedCategoryMp(cityId);
  };
  const handleCategoryClickOthers = async (cityId: string) => {
    setselectedCategoryOthers(cityId);
  };
  const handleSubCategoryClick = async (cityId: string) => {
    setselectedSubCategory(cityId);
  };

  const handleSubCategoryTwoClick = async (cityId: string) => {
    setselectedSubCategoryTwo(cityId);
  };
  const handleSubCategoryAgencyClick = async (cityId: string) => {
    setselectedSubCategoryAgency(cityId);
  };

  const handleSubCategoryUniquePayerAgencyClick = async (cityId: string) => {
    setselectedSubCategoryUniquePayerAgency(cityId);
  };

  const handleSubCategoryPaymentClick = async (cityId: string) => {
    setselectedSubCategoryPayment(cityId);
  };
  const handleSubCategoryLocationClick = async (cityId: string) => {
    setselectedSubCategoryLocation(cityId);
  };
  const handleSubCategorySegmentClick = async (cityId: string) => {
    setselectedSubCategorySegments(cityId);
  };
  const handleSubCategoryUniquePayerSegmentClick = async (cityId: string) => {
    setselectedSubCategoryUniquePayerSegments(cityId);
  };

  const handleCategoryClickHR = async (cityId: string) => {
    setselectedCategoryHR(cityId);
  };
  const handleCategoryClickUP = async (cityId: string) => {
    setselectedCategoryUP(cityId);
  };

  const tabs = [
    { label: "All", width: "65px" },
    { label: "Pre-Due", width: "65px" },
    { label: "Early Lapse", width: "92px" },
    { label: "Late Lapse", width: "92px" },
    // { label: "Deep Lapse", width: "92px" },
  ];
  
  const handleTabClick = (tab:any) => {
    SetActiveTabs(tab); 
    // if(activeTabs === "Pre-Due"){
      setnewselectedCategory("Prem_OS")
    // }
  };
  const [activeTabs, SetActiveTabs] = useState("All");
  return (
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5 w-full">
        {/* <PerformanceDashboard/> */}
        <HomeDashboard />
      </div>
      <div className="flex gap-10 ml-20 mt-10 border-b-[1px] border-[#E0E3E8] w-3/4">
    {tabs.map((tab) => (
      <button
        key={tab.label}
        className={`font-['DM Sans'] text-${
          activeTabs === tab.label ? "black" : "#9CA4B6"
        } text-[16px] font-[500] leading-5`}
        style={{
          borderBottom: activeTabs === tab.label ? "2px solid #5C4E8E" : "none",
          width: tab.width,
          color: activeTabs !== tab.label ? "#9CA4B6" : "inherit",
        }}
        onClick={() => handleTabClick(tab.label)}
      >
        {tab.label}
      </button>
    ))}
  </div>
      <div className=" w-full flex flex-col gap-5 mt-4 items-start ml-[73px] mb-4">
      {activeTabs === "All" && (
           <div className="flex ">
           <div className=" w-max flex justify-between  rounded-xl B1TabsContain">
             {newcategoriesAll.map((city, index) => (
               <div
                 key={city.id}
                 onClick={() => newhandleCategoryAllClick(city.id)}
                 className={`w-max text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  newselectedAllCategory === city.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#fafafb]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                   index === newcategoriesAll.length - 1 ? "rounded-r-[4px]" : ""
                 }`}
               >
                 {city.name}
               </div>
             ))}
           </div>
         </div>
        )
      }
        {activeTabs === "Pre-Due" && (
          <div className="flex ">
          <div className=" w-max flex justify-between  rounded-xl B1TabsContain">
            {newcategories.map((city, index) => (
              <div
                key={city.id}
                onClick={() => {
                  if (city.id !== "Lapse Bkt") {
                    newhandleCategoryClick(city.id);
                  }
                }}
                className={`w-max text-center text-[#1D192B] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  newselectedCategory === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                }
                ${index === 0 ? "rounded-l-[4px] disabled cursor-not-allowed opacity-20  bg-[#fafafb]" : ""} ${
                  index === newcategories.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>
        )
      }
        {activeTabs === "Early Lapse" && (
          <div className="flex ">
          <div className=" w-max flex justify-between  rounded-xl B1TabsContain">
          {newcategories.map((city, index) => (
              <div
                key={city.id}
                onClick={() => {
                  if (city.id !== "Lapse Bkt") {
                    newhandleCategoryClick(city.id);
                  }
                }}
                className={`w-max text-center text-[#1D192B] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  newselectedCategory === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                }
                ${index === 0 ? "rounded-l-[4px] disabled cursor-not-allowed opacity-20  bg-[#fafafb]" : ""} ${
                  index === newcategories.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>
        )
      }
        {activeTabs === "Late Lapse" && (
         <div className="flex ">
         <div className=" w-max flex justify-between  rounded-xl B1TabsContain">
         {newcategories.map((city, index) => (
              <div
                key={city.id}
                onClick={() => {
                  if (city.id !== "Lapse Bkt") {
                    newhandleCategoryClick(city.id);
                  }
                }}
                className={`w-max text-center text-[#1D192B] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  newselectedCategory === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                }
                ${index === 0 ? "rounded-l-[4px] disabled cursor-not-allowed opacity-20  bg-[#fafafb]" : ""} ${
                  index === newcategories.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
         </div>
       </div>
        )
      }
        {activeTabs === "Deep Lapse" && (
         <div className="flex ">
         <div className=" w-max flex justify-between  rounded-xl B1TabsContain">
         {newcategories.map((city, index) => (
              <div
                key={city.id}
                onClick={() => {
                  if (city.id !== "Lapse Bkt") {
                    newhandleCategoryClick(city.id);
                  }
                }}
                className={`w-max text-center text-[#1D192B] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  newselectedCategory === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                }
                ${index === 0 ? "rounded-l-[4px] disabled cursor-not-allowed opacity-20  bg-[#fafafb]" : ""} ${
                  index === newcategories.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
         </div>
       </div>
        )
      }
      {/* <div className="flex ">
          <div className=" w-max flex justify-between  rounded-xl B1TabsContain">
            {newcategories.map((city, index) => (
              <div
                key={city.id}
                onClick={() => newhandleCategoryClick(city.id)}
                className={`w-max text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  newselectedCategory === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === newcategories.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div> */}


        {/* { activeTabs!== "All" && newselectedCategory === "Prem_OS" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {PremOSCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handlePremOSCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    PremOSCategorie=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === PremOSCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

         {newselectedCategory === "Policy_Year" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {PolicyYearCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handlePolicyYearCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    PolicyYear=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === PolicyYearCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
         {newselectedCategory === "Prem_Frequency" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {PremFrequencyCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handlePremFrequencyCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    PremFrequency=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === PremFrequencyCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
          {newselectedCategory === "Product" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {ProductCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handleProductCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    Product=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === ProductCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )} */}
          {/* { activeTabs!== "Pre-Due" && activeTabs!== "Early Lapse" && activeTabs!== "Deep Lapse" && activeTabs!== "Late Lapse" && newselectedAllCategory === "Prem_OS" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {PremOSCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handlePremOSCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    PremOSCategorie=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === PremOSCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

         {activeTabs!== "Pre-Due" && activeTabs!== "Early Lapse" && activeTabs!== "Deep Lapse" && activeTabs!== "Late Lapse"&& newselectedAllCategory === "Policy_Year" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {PolicyYearCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handlePolicyYearCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    PolicyYear=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === PolicyYearCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
         {activeTabs!== "Pre-Due" && activeTabs!== "Early Lapse" && activeTabs!== "Deep Lapse" && activeTabs!== "Late Lapse" && newselectedAllCategory === "Prem_Frequency" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {PremFrequencyCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handlePremFrequencyCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    PremFrequency=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === PremFrequencyCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
          {activeTabs!== "Pre-Due" && activeTabs!== "Early Lapse" && activeTabs!== "Deep Lapse" && activeTabs!== "Late Lapse" && newselectedAllCategory === "Product" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {ProductCategories.map((city:any, index:any) => (
                <div
                  key={city.id}
                  onClick={() => handleProductCategoriesClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    Product=== city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === ProductCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )} */}
        {/* <div className="flex ">
          <div className=" flex w-full justify-between rounded-xl B1TabsContain">
            {Buttons.map((buttons, index) => (
              <div
                key={buttons.id}
                onClick={() => handleProductClick(buttons.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 
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
        </div>

        <div className="flex">
          <div className=" flex justify-between  rounded-xl B1TabsContain">
            {categoriesButton.map((city, index) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClickButton(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  selectedCategoryButton === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === categoriesButton.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>

        {selectedCategoryButton === "all" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickAll(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryAll === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "KARNATAKA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickKar(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryKar === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "TAMILNADU" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickTn(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryTn === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "DELHI" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickDel(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryDel === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "TELANGANA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickTg(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryTg === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "MAHARASHTRA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickMum(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryMum === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "ROMG" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickRomg(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryRomg === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "ANDHRA PRADESH" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickAp(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryAp === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "GUJARAT" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickGj(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryGj === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "KOLKATA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickKol(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryKol === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "MADHYA PRADESH" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickMp(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryMp === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "OTHERS" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickOthers(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryOthers === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategoryButton === "UTTAR PRADESH" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickUP(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryUP === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategoryButton === "HARYANA" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {categories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleCategoryClickHR(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedCategoryHR === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === categories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
      <div className="flex flex-col  items-start  justify-center gap-7 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
        <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
          {/* <DelinquencySettlementRecovery
            activeButton={activeButton}
            selectedCategoryButton={selectedCategoryButton}
            selectedCategoryAll={selectedCategoryAll}
            selectedCategoryTn={selectedCategoryTn}
            selectedCategoryKar={selectedCategoryKar}
            selectedCategoryMum={selectedCategoryMum}
            selectedCategoryRomg={selectedCategoryRomg}
            selectedCategoryDel={selectedCategoryDel}
            selectedCategoryTg={selectedCategoryTg}
            selectedCategoryAp={selectedCategoryAp}
            selectedCategoryGj={selectedCategoryGj}
            selectedCategoryKol={selectedCategoryKol}
            selectedCategoryMp={selectedCategoryMp}
            selectedCategoryOthers={selectedCategoryOthers}
            setselectedCategoryAll={setselectedCategoryAll}
            setselectedCategoryMum={setselectedCategoryMum}
            setselectedCategoryKol={setselectedCategoryKol}
            setselectedCategoryKar={setselectedCategoryKar}
            setActiveButton={setActiveButton}
            setselectedCategoryButton={setselectedCategoryButton}
            setselectedCategoryOthers={setselectedCategoryOthers}
            setselectedCategoryAp={setselectedCategoryAp}
            setselectedCategoryMp={setselectedCategoryMp}
            setselectedCategoryGj={setselectedCategoryGj}
            setselectedCategoryRomg={setselectedCategoryRomg}
            setselectedCategoryTn={setselectedCategoryTn}
            setselectedCategoryTg={setselectedCategoryTg}
            setselectedCategoryDel={setselectedCategoryDel}
            selectedCategoryHR={selectedCategoryHR}
            selectedCategoryUP={selectedCategoryUP}
          /> */}
          {/* <ForwardFlowRatesSettlementRecovery /> */}
          <DistributionATSnew
          newselectedAllCategory={newselectedAllCategory}
          AllData={AllData}
          PreDueData={PreDueData}
          ELData={ELData}
          LLData={LLData}
          DLData={DLData}
          activeTabs={activeTabs}
          newselectedCategory={newselectedCategory}
          />
        </div>

        <div className="w-full flex items-center justify-end gap-5 mt-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium "
          >
            Back
          </button>
          <Button
            // onClick={reviewHotspots}
            width="200px"
            height="40px"
            fontSize="14px"
            padding="5px"
            borderRadius="30px"
          >
            Review Hotspots
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DistributionRecovery;
