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
  // { id: "Prem_OS", name: "Prem OS" },
  // { id: "Policy_Year", name: "Policy Year" },
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
const AllData={
  "all": [
      [
          {
              "Pre_due_policy_count_percentage": 0.0,
              "Early_lapse_policy_count_percentage": 0.18,
              "Deep_lapse_policy_count_percentage": 21.24,
              "Late_lapse_policy_count_percentage": 78.59
          },
          "Jan2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 0.0,
              "Early_lapse_policy_count_percentage": 0.26,
              "Deep_lapse_policy_count_percentage": 25.87,
              "Late_lapse_policy_count_percentage": 73.87
          },
          "Feb2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 0.0,
              "Early_lapse_policy_count_percentage": 0.12,
              "Deep_lapse_policy_count_percentage": 41.79,
              "Late_lapse_policy_count_percentage": 58.09
          },
          "Mar2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 0.0,
              "Early_lapse_policy_count_percentage": 0.09,
              "Deep_lapse_policy_count_percentage": 28.05,
              "Late_lapse_policy_count_percentage": 71.86
          },
          "Apr2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 0.0,
              "Early_lapse_policy_count_percentage": 0.05,
              "Deep_lapse_policy_count_percentage": 9.6,
              "Late_lapse_policy_count_percentage": 90.34
          },
          "May2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 14.59,
              "Early_lapse_policy_count_percentage": 30.71,
              "Deep_lapse_policy_count_percentage": 12.36,
              "Late_lapse_policy_count_percentage": 42.34
          },
          "Jun2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 35.41,
              "Early_lapse_policy_count_percentage": 30.55,
              "Deep_lapse_policy_count_percentage": 4.33,
              "Late_lapse_policy_count_percentage": 29.7
          },
          "Jul2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 51.99,
              "Early_lapse_policy_count_percentage": 21.19,
              "Deep_lapse_policy_count_percentage": 5.96,
              "Late_lapse_policy_count_percentage": 20.86
          },
          "Aug2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 32.63,
              "Early_lapse_policy_count_percentage": 37.08,
              "Deep_lapse_policy_count_percentage": 3.45,
              "Late_lapse_policy_count_percentage": 26.84
          },
          "Sep2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 27.61,
              "Early_lapse_policy_count_percentage": 21.81,
              "Deep_lapse_policy_count_percentage": 25.69,
              "Late_lapse_policy_count_percentage": 24.89
          },
          "Oct2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 17.28,
              "Early_lapse_policy_count_percentage": 0.05,
              "Deep_lapse_policy_count_percentage": 50.85,
              "Late_lapse_policy_count_percentage": 31.81
          },
          "Nov2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 48.0,
              "Early_lapse_policy_count_percentage": 0.05,
              "Deep_lapse_policy_count_percentage": 17.94,
              "Late_lapse_policy_count_percentage": 34.0
          },
          "Dec2023"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 51.71,
              "Early_lapse_policy_count_percentage": 0.02,
              "Deep_lapse_policy_count_percentage": 20.25,
              "Late_lapse_policy_count_percentage": 28.02
          },
          "Jan2024"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 0.0,
              "Early_lapse_policy_count_percentage": 0.03,
              "Deep_lapse_policy_count_percentage": 57.69,
              "Late_lapse_policy_count_percentage": 42.28
          },
          "Feb2024"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 2.96,
              "Early_lapse_policy_count_percentage": 3.87,
              "Deep_lapse_policy_count_percentage": 49.62,
              "Late_lapse_policy_count_percentage": 43.54
          },
          "Mar2024"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 46.35,
              "Early_lapse_policy_count_percentage": 0.0,
              "Deep_lapse_policy_count_percentage": 9.51,
              "Late_lapse_policy_count_percentage": 44.14
          },
          "Apr2024"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 0.0,
              "Early_lapse_policy_count_percentage": 0.0,
              "Deep_lapse_policy_count_percentage": 79.2,
              "Late_lapse_policy_count_percentage": 20.8
          },
          "May2024"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 30.59,
              "Early_lapse_policy_count_percentage": 0.35,
              "Deep_lapse_policy_count_percentage": 30.82,
              "Late_lapse_policy_count_percentage": 38.23
          },
          "Jun2024"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 17.43,
              "Early_lapse_policy_count_percentage": 4.0,
              "Deep_lapse_policy_count_percentage": 41.89,
              "Late_lapse_policy_count_percentage": 36.68
          },
          "Jul2024"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 8.27,
              "Early_lapse_policy_count_percentage": 0.0,
              "Deep_lapse_policy_count_percentage": 67.96,
              "Late_lapse_policy_count_percentage": 23.76
          },
          "Aug2024"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 28.54,
              "Early_lapse_policy_count_percentage": 0.01,
              "Deep_lapse_policy_count_percentage": 36.41,
              "Late_lapse_policy_count_percentage": 35.04
          },
          "Sep2024"
      ],
      [
          {
              "Pre_due_policy_count_percentage": 42.43,
              "Early_lapse_policy_count_percentage": 0.02,
              "Deep_lapse_policy_count_percentage": 18.63,
              "Late_lapse_policy_count_percentage": 38.92
          },
          "Oct2024"
      ]
  ]
}
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
// { label: "Early Lapse", width: "92px" },
// { label: "Late Lapse", width: "92px" },
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
    // { label: "Early Lapse", width: "92px" },
    // { label: "Late Lapse", width: "92px" },
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
