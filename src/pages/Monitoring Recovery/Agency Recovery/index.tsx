import React, { useEffect, useState } from "react";
import MonitoringRecoverySubtabsDashboardHeader from "../../../components/MonitoringRecoverySubtabsDashboardHeader/MonitoringRecoverySubtabsDashboardHeader";
import Button from "../../../components/Button";
import ForwardFlowRatesAgencyRecovery from "../../../components/Monitoring Recovery/ForwardFlowRatesAgencyRecovery";
import CustomizeBarScatterAgencyChart from "../../../components/Monitoring Recovery/CustomizeBarScatterAgencyChart";
import CustomizeBarScatterAgencyTrendsChart from "../../../components/Monitoring Recovery/CustomizeBarScatterAgencyTrendsChart";
import MonitoringCollectionDashboardHeader from "../../../components/MonitoringCollectionDashboardHeader/MonitoringCollectionDashboardHeader";
import { useNavigate } from "react-router-dom";
import PerformanceDashboard from "../../../components/PerformanceDashboardHeader/PerformanceDashboard";
import AgencyDashboard from "../../../components/PerformanceDashboardHeader/AgencyDashboard";
import HomeDashboard from "../../../components/PerformanceDashboardHeader/HomeDashboard";
import TrendsLineGraph from "../../../components/Monitoring Recovery/TrendsLineGraph";

const Buttons = [
  // { id: "writeOff", label: "Write Off" },
  { id: "$Recovery", label: "Trends" },
 { id: "uniquePayer", label: "Allocation" },
];
const categoriesButton = [
  { id: "MAHARASHTRA", name: "MU" },
  { id: "TAMIL NADU", name: "TL" },
  // { id: "MAHARASHTRA", name: "MU" },
  { id: "KARNATAKA", name: "KAR" },
  { id: "TELANGANA", name: "TEL" },
  // { id: "ROMG", name: "ROMG" },
  // { id: "KOLKATA", name: "KOL" },
  { id: "ANDHRA PRADESH", name: "AP" },
  { id: "MADHYA PRADESH", name: "MP" },
  { id: "GUJARAT", name: "GUJ" },
  { id: "DELHI", name: "DEL" },
  // { id: "Others", name: "Others" },
];
const categoriesButtonTrends = [
  { id: "KARNATAKA", name: "KAR" },
  { id: "TELANGANA", name: "TEL" },
  { id: "ROMG", name: "ROMG" },
  { id: "KOLKATA", name: "KOL" },
  { id: "ANDHRA PRADESH", name: "AP" },
  { id: "MP", name: "MP" },
  { id: "GUJARAT", name: "GUJ" },
  { id: "DELHI NCR", name: "DEL" },
  { id: "MUMBAI", name: "MU" },
  { id: "TAMILNADU", name: "TL" },
   { id: "Others", name: "Others" },
];

// const categories = [
//   { id: "plc1", name: "Plc 1" },
//   { id: "plc2", name: "Plc 2" },
//   { id: "plc3", name: "Plc 3" },
//   { id: "plc4", name: "Plc 4" },
//   { id: "plc5", name: "Plc 5" },
//   { id: "plc6", name: "Plc 6" },
//   { id: "plc7", name: "Plc 7" },
// ];

// const categoriesMUM = [
//   { id: "Small", name: "Small" },
//   { id: "Very Small", name: "Very Small" },
//   { id: "Med", name: "Med" },
//   { id: "Large", name: "Large" },
//   { id: "Inhouse", name: "Inhouse" },
//   { id: "null", name: "null" },
// ];

//Barchart
// const staticRecoveryAgency: any = 
// {
//   "balance": {
//       "portfolio": "Personal Loan",
//       "date_range": "Jan 2019 - Apr 2023",
//       "total_book": 4904412211.45,
//       "ytd_recovery": 139595017.14,
//       "annualised_recovery_rate": 0.06831155838692202,
//       "fy_forecast": 0,
//       "variance_to_plan": 0
//   },
//   "units": {
//       "portfolio": "Personal Loan",
//       "date_range": "Jan 2019 - Apr 2023",
//       "total_accounts": 6633,
//       "total_payers": 645,
//       "payer_ratio": 0.09724106739032112,
//       "fy_forecast": 0,
//       "variance_to_plan": 0
//   },
//   "states": [
//       {
//           "state": "TAMIL NADU",
//           "bars": [               
//               {
//                   "bar": {
//                      "sub_segment": "Very Small",
//                     "value": 533464.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Small",
//                     "value": 260061.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Med",
//                     "value": 1771088.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Large",
//                     "value": 2476662.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Inhouse",
//                     "value": 85735.0
//                   }
//               }               
//           ],
//       },
//       {
//           "state": "KARNATAKA",
//           "bars": [
//               {
//                   "bar": {
//                     "sub_segment": "Very Small",
//                     "value": 59018.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Small",
//                     "value": 2748859.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Med",
//                     "value": 2866615.0
//                   }
//               },
//               {
//                 "bar": {
//                   "sub_segment": "Large",
//                   "value": 0.0
//                 }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Inhouse",
//                     "value": 39400.0
//                   }
//               }
//           ],
//       },
//       {
//           "state": "DELHI",
//           "bars": [
//               {
//                   "bar": {
//                     "sub_segment": "Very Small",
//                     "value": 152500.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Small",
//                     "value": 226363.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Med",
//                     "value": 1050648.0
//                   }
//               },
//               {
//                   "bar": {
//                      "sub_segment": "Large",
//                     "value": 3906899.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Inhouse",
//                     "value": 0.0
//                   }
//               }
                              
//           ],
//       },
//       {
//           "state": "MAHARASHTRA",
//           "bars": [
//             {
//                 "bar": {
//                     "sub_segment": "Very Small",
//                     "value": 0.0
//                 }
//             },       
//             {
//                 "bar": {
//                     "sub_segment": "Small",
//                     "value": 0.0
//                 }
//             },               
//               {
//                   "bar": {
//                     "sub_segment": "Med",
//                     "value": 827560.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Large",
//                     "value": 950275.0
//                   }
//               },
//               {
//                   "bar": {
//                       "sub_segment": "Inhouse",
//                       "value": 0.0
//                   }
//               }
//           ],
//         },
//       {
//           "state": "ROMG",
//           "bars": [ 
//               {
//                   "bar": {
//                     "sub_segment": "Very Small",
//                     "value": 188212.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Small",
//                     "value": 516145.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Med",
//                     "value": 680387.0
//                   }
//               },
//               {
//                   "bar": {
//                       "sub_segment": "Large",
//                       "value": 0.0
//                   }
//               },
//               {
//                 "bar": {
//                     "sub_segment": "Inhouse",
//                     "value": 0.0
//                 }
//             }
             
//           ],
//       },
    
//       {
//           "state": "TELANGANA",
//           "bars": [
              
//             {
//                 "bar": {
//                   "sub_segment": "Very Small",
//                   "value": 0.0
//                 }
//             },
//               {
//                   "bar": {
//                     "sub_segment": "Small",
//                     "value": 850562.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Med",
//                     "value": 1823130.25
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Large",
//                     "value": 800644.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Inhouse",
//                     "value": 2174.0
//                   }
//               }
              
//           ],
        
//       },
//       {
//           "state": "KOLKATA",
//           "bars": [             
//               {
//                   "bar": {
//                      "sub_segment": "Very Small",
//                     "value": 262037.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Small",
//                     "value": 516328.0
//                   }
//               },
//               {
//                 "bar": {
//                 "sub_segment": "Med",
//                     "value": 0.0
//                 }
//             },
//             {
//               "bar": {
//                 "sub_segment": "Large",
//                     "value": 0.0
//               }
//           },
//               {
//                   "bar": {
//                     "sub_segment": "Inhouse",
//                     "value": 35573.0
//                   }
//               }
//           ],
//       },
//       {
//           "state": "ANDHRA PRADESH",
//           "bars": [
             
//             {
//                 "bar": {
//                   "sub_segment": "Very Small",
//                   "value": 164745.0
//                 }
//             },
              
//               {
//                   "bar": {
//                     "sub_segment": "Small",
//                     "value": 942225.0
//                   }
//               },
//               {
//                   "bar": {
//                       "sub_segment": "Med",
//                       "value": 0.0
//                   }
//               },
//               {
//                   "bar": {
//                       "sub_segment": "Large",
//                       "value": 0.0
//                   }
//               },
//               {
//                   "bar": {
//                       "sub_segment": "Inhouse",
//                       "value": 0.0
//                   }
//               }
//           ],
//       },
//       {
//           "state": "MADHYA PRADESH",
//           "bars": [
            
//               {
//                   "bar": {
//                     "sub_segment": "Very Small",
//                     "value": 395902.0
//                   }
//               },
//               {
//                   "bar": {
//                     "sub_segment": "Small",
//                     "value": 114783.0
//                   }
//               },
//               {
//                 "bar": {
//                     "sub_segment": "Med",
//                     "value":  0.0
//                 }
//             },
//             {
//                 "bar": {
//                     "sub_segment": "Large",
//                     "value": 0.0
//                 }
//             },
//             {
//               "bar": {
//                   "sub_segment": "Inhouse",
//                   "value": 0.0
//               }
//           }
//           ],
//       },
//       {
//           "state": "GUJARAT",
//           "bars": [
//               {
//                   "bar": {
//                      "sub_segment": "Very Small",
//                     "value": 717872.0
//                   }
//               },
//               {
//                 "bar": {
//                   "sub_segment": "Small",
//                   "value": 0.0
//                 }
//             },
//             {
//                 "bar": {
//                     "sub_segment": "Med",
//                     "value": 0.0
//                 }
//             },
//             {
//                 "bar": {
//                     "sub_segment": "Large",
//                     "value": 0.0
//                 }
//             },
//             {
//               "bar": {
//                   "sub_segment": "Inhouse",
//                   "value": 0.0
//               }
//           }
//           ],
//       },
//       {
//         "state": "Others",
//         "bars": [

//             {
//                 "bar": {
//                   "sub_segment": "Very Small",
//                   "value": 1057419.0
//                 }
//             },
//             {
//                 "bar": {
//                   "sub_segment": "Small",
//                   "value": 688842.0
//                 }
//             },
//             {
//                 "bar": {
//                     "sub_segment": "Med",
//                     "value": 0.0
//                 }
//             },
//             {
//               "bar": {
//                   "sub_segment": "Large",
//                   "value": 0.0
//               }
//             }, 
//             {
//               "bar": {
//                 "sub_segment": "Inhouse",
//                 "value": 157719.22999999998
//               }
//             },
//             ],
//           },
//   ]
// };

// //line chart
// const staticDataRecoveryPerformance: any = {
//   "agency": {
//       "bars": [
//           {
//               "bar": {
//                   "location": "TAMILNADU",
//                   "sub_segment": "Inhouse",
//                   "value": 85735.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "TAMILNADU",
//                   "sub_segment": "Large",
//                   "value": 2476662.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "TAMILNADU",
//                   "sub_segment": "Med",
//                   "value": 1771088.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "TAMILNADU",
//                   "sub_segment": "Small",
//                   "value": 260061.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "TAMILNADU",
//                   "sub_segment": "Very Small",
//                   "value": 533464.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KARNATAKA",
//                   "sub_segment": "Inhouse",
//                   "value": 39400.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KARNATAKA",
//                   "sub_segment": "Large",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KARNATAKA",
//                   "sub_segment": "Med",
//                   "value": 2866615.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KARNATAKA",
//                   "sub_segment": "Small",
//                   "value": 2748859.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KARNATAKA",
//                   "sub_segment": "Very Small",
//                   "value": 59018.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "DELHI NCR",
//                   "sub_segment": "Inhouse",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "DELHI NCR",
//                   "sub_segment": "Large",
//                   "value": 3906899.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "DELHI NCR",
//                   "sub_segment": "Med",
//                   "value": 1050648.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "DELHI NCR",
//                   "sub_segment": "Small",
//                   "value": 226363.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "DELHI NCR",
//                   "sub_segment": "Very Small",
//                   "value": 152500.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MUMBAI",
//                   "sub_segment": "Inhouse",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MUMBAI",
//                   "sub_segment": "Large",
//                   "value": 950275.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MUMBAI",
//                   "sub_segment": "Med",
//                   "value": 827560.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MUMBAI",
//                   "sub_segment": "Small",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MUMBAI",
//                   "sub_segment": "Very Small",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ROMG",
//                   "sub_segment": "Inhouse",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ROMG",
//                   "sub_segment": "Large",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ROMG",
//                   "sub_segment": "Med",
//                   "value": 680387.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ROMG",
//                   "sub_segment": "Small",
//                   "value": 516145.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ROMG",
//                   "sub_segment": "Very Small",
//                   "value": 188212.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "TELANGANA",
//                   "sub_segment": "Inhouse",
//                   "value": 2174.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "TELANGANA",
//                   "sub_segment": "Large",
//                   "value": 800644.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "TELANGANA",
//                   "sub_segment": "Med",
//                   "value": 1823130.25
//               }
//           },
//           {
//               "bar": {
//                   "location": "TELANGANA",
//                   "sub_segment": "Small",
//                   "value": 850562.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "TELANGANA",
//                   "sub_segment": "Very Small",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KOLKATA",
//                   "sub_segment": "Inhouse",
//                   "value": 35573.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KOLKATA",
//                   "sub_segment": "Large",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KOLKATA",
//                   "sub_segment": "Med",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KOLKATA",
//                   "sub_segment": "Small",
//                   "value": 516328.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "KOLKATA",
//                   "sub_segment": "Very Small",
//                   "value": 262037.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ANDHRA PRADESH",
//                   "sub_segment": "Inhouse",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ANDHRA PRADESH",
//                   "sub_segment": "Large",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ANDHRA PRADESH",
//                   "sub_segment": "Med",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ANDHRA PRADESH",
//                   "sub_segment": "Small",
//                   "value": 942225.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "ANDHRA PRADESH",
//                   "sub_segment": "Very Small",
//                   "value": 164745.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MP",
//                   "sub_segment": "Inhouse",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MP",
//                   "sub_segment": "Large",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MP",
//                   "sub_segment": "Med",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MP",
//                   "sub_segment": "Small",
//                   "value": 114783.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "MP",
//                   "sub_segment": "Very Small",
//                   "value": 395902.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "GUJARAT",
//                   "sub_segment": "Inhouse",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "GUJARAT",
//                   "sub_segment": "Large",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "GUJARAT",
//                   "sub_segment": "Med",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "GUJARAT",
//                   "sub_segment": "Small",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "GUJARAT",
//                   "sub_segment": "Very Small",
//                   "value": 717872.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "Others",
//                   "sub_segment": "Inhouse",
//                   "value": 157719.22999999998
//               }
//           },
//           {
//               "bar": {
//                   "location": "Others",
//                   "sub_segment": "Large",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "Others",
//                   "sub_segment": "Med",
//                   "value": 0.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "Others",
//                   "sub_segment": "Small",
//                   "value": 688842.0
//               }
//           },
//           {
//               "bar": {
//                   "location": "Others",
//                   "sub_segment": "Very Small",
//                   "value": 1057419.0
//               }
//           }
//       ],
//       "series": [
//           {
//               "location": "ANDHRA PRADESH",
//               "sub_segment": "Inhouse",
//               "value": [
//                   1.1174289851358996,
//                   1.4176042000190645,
//                   2.7011761994930517,
//                   0.0,
//                   3.865790420837943,
//                   7.933590722999802,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   20.5661132393831,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0
//               ]
//           },
//           {
//               "location": "ANDHRA PRADESH",
//               "sub_segment": "Large",
//               "value": [
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
               
//               ]
//           },
//           {
//               "location": "ANDHRA PRADESH",
//               "sub_segment": "Med",
//               "value": [
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
//                 0.0,
               
//               ]
//           },
//           {
//               "location": "ANDHRA PRADESH",
//               "sub_segment": "Small",
//               "value": [
//                 0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.7903656814561341,
//                   0.0,
//                   5.775549573020886,
//                   6.5431833703215005,
//                   2.6361792733423886,
//                   0.769746635369188,
//                   3.135089614616852,
//                   1.42355372970706,
//                   2.1064317472614773,
//                   1.8223864314710778,
//                   1.6651041045936146
//               ]
//           },
//           {
//               "location": "ANDHRA PRADESH",
//               "sub_segment": "Very Small",
//               "value": [
//                 0.0,
//                   1.0399431775047812,
//                   1.6333640943131122,
//                   0.0,
//                   1.6466930852638042,
//                   0.2394188174188721,
//                   1.3588205763340009,
//                   0.0626794235711236,
//                   1.1820135945466943,
//                   1.4346648795126424,
//                   1.0306894892586413,
//                   0.9009530267434231,
//                   0.306602352748835,
//                   0.04377962909957056,
//                   0.12313645193591816,
//                   2.168676697163547,
//                   0.8695957804481671
//               ]
//           },
//           {
//               "location": "DELHI NCR",
//               "sub_segment": "Inhouse",
//               "value": [
//                   1.1275022892514914,
//                   1.6250905070698565,
//                   0.5179740056449937,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.4483001100256556,
//                   0.0,
//                   0.0,
//                   3.3157554086602223,
//                   0.0,
//                   0.0,
//                   0.0
//               ]
//           },
//           {
//               "location": "DELHI NCR",
//               "sub_segment": "Large",
//               "value": [
//                    0.0,
//                   1.3631999684158616,
//                   3.9518294267392435,
//                   2.1821259720332935,
//                   3.4272110289980837,
//                   1.3911604708834253,
//                   1.568712760381922,
//                   1.0717011702662012,
//                   0.5040425080407968,
//                   0.5881103070788265,
//                   0.9555351146518346,
//                   0.8554765942294118,
//                   1.1761467623885304,
//                   1.36455046495302,
//                   1.1331454805451688,
//                   1.3275747596058178,
//                   1.7912417369608733
//               ]
//           },
//           {
//               "location": "DELHI NCR",
//               "sub_segment": "Med",
//               "value": [
//                   0.0,
//                   0.36006482179800553,
//                   0.05232375614804134,
//                   0.2477615455115253,
//                   0.42129869617883625,
//                   0.7617741693571224,
//                   0.8824822957590992,
//                   0.5085742825410706,
//                   0.7669600021160522,
//                   1.7819259524983584,
//                   0.6304621707176544,
//                   1.716798229810783,
//                   2.6239352803885083,
//                   1.1048406238570556,
//                   0.8761155551961364,
//                   0.6990118039266127,
//                   0.7704650161526461
//               ]
//           },
//           {
//               "location": "DELHI NCR",
//               "sub_segment": "Small",
//               "value": [
//                    0.0,
//                   1.1668159824468483,
//                   0.1170382058817051,
//                   0.32376365667480217,
//                   0.5269329954196982,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                   0.7840806107805613,
//                   1.0447314848360023,
//                   4.048835327343596,
//                   0.08725129351960852,
//                   0.3777190284593895
//               ]
//           },
//           {
//               "location": "DELHI NCR",
//               "sub_segment": "Very Small",
//               "value": [
//                    0.0,
//                   0.62284684458062,
//                   0.48994978818597973,
//                   0.9116759004328271,
//                   1.3254907592564782,
//                   1.1940611819259823,
//                   0.27538885920759093,
//                   3.102663803942197,
//                   0.23939733158158324,
//                   0.5157037749913025,
//                    0.0,
//                    0.0,
//                   0.0,
//                   26.64554950041757,
//                   5.599476448952023,
//                   5.165149555276235,
//                   1.3721423316168428
//               ]
//           },
//           {
//               "location": "GUJARAT",
//               "sub_segment": "Inhouse",
//               "value": [
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                   0.0,
//               ]
//           },
//           {
//               "location": "GUJARAT",
//               "sub_segment": "Large",
//               "value": [
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//               ]
//           },
//           {
//               "location": "GUJARAT",
//               "sub_segment": "Med",
//               "value": [
//                    0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//               ]
//           },
//           {
//               "location": "GUJARAT",
//               "sub_segment": "Small",
//               "value": [
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//               ]
//           },
//           {
//               "location": "GUJARAT",
//               "sub_segment": "Very Small",
//               "value": [
//                 0.0,
//                   3.0346372278416207,
//                   1.501790145400927,
//                   1.505468893223787,
//                   1.1816137072692598,
//                   0.1857016044910105,
//                   0.5804225213381908,
//                   0.9577490684419259,
//                   1.6250382438427413,
//                   0.5531550054520276,
//                   0.41334984700315996,
//                   0.5994011085801357,
//                   1.0450389191639236,
//                   1.1246812854750237,
//                   1.7891636867728131,
//                   0.548509248026093,
//                   1.0656919515119176
//               ]
//           },
//           {
//               "location": "KARNATAKA",
//               "sub_segment": "Inhouse",
//               "value": [
//                   1.7333787135874328,
//                   0.7589538971348039,
//                   2.377943082490804,
//                   40.57473813050258,
//                   1.1205990534962158,
//                   1.8519821324691876,
//                   2.3986051804105135,
//                   23.15840771294227,
//                   14.23470875004389,
//                   2.4021326357912876,
//                   1.9736364826406672,
//                   2.0271645855827343,
//                   2.08995354162833,
//                   8.45784188210198,
//                   1.8889678320965193,
//                   0.6822251566363255,
//                   1.352151808897708
//               ]
//           },
//           {
//               "location": "KARNATAKA",
//               "sub_segment": "Large",
//               "value": [
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//               ]
//           },
//           {
//               "location": "KARNATAKA",
//               "sub_segment": "Med",
//               "value": [
//                 0.0,
//                   1.1511615450838926,
//                   1.9226036257549002,
//                   1.8314295530107938,
//                   1.570340353933106,
//                   0.7737806658704931,
//                   0.8351757312344473,
//                   2.085133720457601,
//                   1.325285374775913,
//                   1.248147651489823,
//                   1.0226220006936837,
//                   0.616308775571984,
//                   1.0241709872518145,
//                   1.3367716828089464,
//                   1.340725245173781,
//                   1.1236924199200193,
//                   0.8898133386981023
//               ]
//           },
//           {
//               "location": "KARNATAKA",
//               "sub_segment": "Small",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   1.382324035291422,
//                   0.7670676485618148,
//                   0.7455022763889484,
//                   0.8192196357649679,
//                   1.038207201583285,
//                   1.1212129008181704,
//                   1.2547540598138287,
//                   1.1130300698856075,
//                   2.2768352631221425,
//                   0.6721899048572402,
//                   2.938951205700322
//               ]
//           },
//           {
//               "location": "KARNATAKA",
//               "sub_segment": "Very Small",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.3414430598058758,
//                   0.4493913123820461,
//                   0.0,
//                   0.15891243510998265
//               ]
//           },
//           {
//               "location": "KOLKATA",
//               "sub_segment": "Inhouse",
//               "value": [
//                   0.7869235201148082,
//                   0.0,
//                   1.2312910406774114,
//                   0.0,
//                   0.0,
//                   0.0,
//                   4.470209293873682,
//                   1.7101589932607792,
//                   1.7245882349706796,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.18011465910947624
//               ]
//           },
//           {
//               "location": "KOLKATA",
//               "sub_segment": "Large",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//               ]
//           },
//           {
//               "location": "KOLKATA",
//               "sub_segment": "Med",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//               ]
//           },
//           {
//               "location": "KOLKATA",
//               "sub_segment": "Small",
//               "value": [
//                 0.0,
//                   0.3788825336760083,
//                   0.5818103514355131,
//                   0.4114225772157639,
//                   0.4370108362550948,
//                   0.29224711013230104,
//                   0.22515040668057235,
//                   0.1952078947073692,
//                   0.20061856092565955,
//                   0.2563289606426337,
//                   0.33674008198910876,
//                   0.3996080119221236,
//                   0.5510343509783531,
//                   0.467756295517096,
//                   0.2669795538884925,
//                   0.2815329080958438,
//                   0.6336998182054316
//               ]
//           },
//           {
//               "location": "KOLKATA",
//               "sub_segment": "Very Small",
//               "value": [
//                 0.0,
//                   0.9091098927488273,
//                   0.4408663347693392,
//                   0.9094604281987422,
//                   2.1672680783891147,
//                   0.9175028423213768,
//                   1.2808513329079525,
//                   0.91428536427236,
//                   2.8165646409146943,
//                   0.3008365295575553,
//                   0.3067857241649038,
//                   0.3216122915315473,
//                   1.0861499360470028,
//                   0.4303637211006667,
//                   0.7471660592056517,
//                   0.7374531373844078,
//                   1.0297805608194202
//               ]
//           },
//           {
//               "location": "MP",
//               "sub_segment": "Inhouse",
//               "value": [
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//                  0.0,
//               ]
//           },
//           {
//               "location": "MP",
//               "sub_segment": "Large",
//               "value": [
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//                    0.0,
//               ]
//           },
//           {
//               "location": "MP",
//               "sub_segment": "Med",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//               ]
//           },
//           {
//               "location": "MP",
//               "sub_segment": "Small",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.4195501682188739,
//                   0.5016089001535896,
//                   0.02684772534588613,
//                   0.1694526635826701,
//                   0.02298935093723286,
//                   0.07298041622378895,
//                   0.0536341070484892,
//                   0.11705937013915461,
//                   0.10629036747583992,
//                   0.09306272135313202,
//                   1.6432193337014316,
//                   0.2583628547290196
//               ]
//           },
//           {
//               "location": "MP",
//               "sub_segment": "Very Small",
//               "value": [
//                   0.0,
//                   0.30004671523748766,
//                   0.1893561052006636,
//                   0.4679735575729866,
//                   0.6477137618907179,
//                   0.2435533197527689,
//                   0.13555368904251716,
//                   0.27584523317188664,
//                   0.2528649840781271,
//                   0.07862578787272138,
//                   0.4780626300760509,
//                   0.0,
//                   0.25156446420124284,
//                   0.6823255658012433,
//                   2.8391146551845052,
//                   0.36744687774643797,
//                   1.3461068039250645
//               ]
//           },
//           {
//               "location": "MUMBAI",
//               "sub_segment": "Inhouse",
//               "value": [
//                   1.0760838654142169,
//                   0.2727410709459983,
//                   0.3092661956314718,
//                   2.5752046673406417,
//                   1.3571983990919518,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.04189421297257266,
//                   0.0,
//                   0.0
//               ]
//           },
//           {
//               "location": "MUMBAI",
//               "sub_segment": "Large",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.040492600729597525,
//                   0.8114992686519081,
//                   0.3281126515282954,
//                   0.1582001796556764,
//                   0.11563466673909226,
//                   0.8086609885387567,
//                   0.4856247729954656,
//                   0.3522298994930834,
//                   0.8648923150400816,
//                   0.46753167857140493,
//                   0.3483587064542823
//               ]
//           },
//           {
//               "location": "MUMBAI",
//               "sub_segment": "Med",
//               "value": [
//                 0.0,
//                   1.0411564422422552,
//                   1.2301639027150575,
//                   1.7054378226609137,
//                   1.7098598144841461,
//                   0.5249308250867425,
//                   0.6939176293085894,
//                   0.4222981218464406,
//                   1.096581011090207,
//                   0.6704131381977814,
//                   0.28835609961932296,
//                   1.1056451436585755,
//                   0.6958652258430547,
//                   0.7969043322949194,
//                   0.5872396413477247,
//                   1.1679739733684562,
//                   0.5818570340235153
//               ]
//           },
//           {
//               "location": "MUMBAI",
//               "sub_segment": "Small",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0
//               ]
//           },
//           {
//               "location": "MUMBAI",
//               "sub_segment": "Very Small",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0
//               ]
//           },
//           {
//               "location": "Others",
//               "sub_segment": "Inhouse",
//               "value": [
//                   1.4763883499612713,
//                   1.0976621138616984,
//                   1.6698714858645078,
//                   1.0821748985909974,
//                   2.8204427706529067,
//                   3.5650878081127138,
//                   5.118006551954141,
//                   1.924063417498532,
//                   5.562008885938795,
//                   1.9311181772776118,
//                   2.3696124438862536,
//                   0.9679716929787632,
//                   13.053473197691257,
//                   3.0986213147564756,
//                   1.9803915949783713,
//                   2.506226199218871,
//                   0.6016414301802239
//               ]
//           },
//           {
//               "location": "Others",
//               "sub_segment": "Large",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0
//               ]
//           },
//           {
//               "location": "Others",
//               "sub_segment": "Med",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0
//               ]
//           },
//           {
//               "location": "Others",
//               "sub_segment": "Small",
//               "value": [
//                   0.0,
//                   0.03386882511662807,
//                   0.25846765155286644,
//                   0.6190505463409002,
//                   1.1227197629248717,
//                   3.142236940906587,
//                   1.2563919684178324,
//                   2.9986193869045623,
//                   1.2217292248457612,
//                   1.087132621443058,
//                   0.7322258194471558,
//                   0.8602197918185099,
//                   2.411931829652356,
//                   0.9537385684225689,
//                   1.6231539439563143,
//                   0.5945841036810635,
//                   1.1287766919839135
//               ]
//           },
//           {
//               "location": "Others",
//               "sub_segment": "Very Small",
//               "value": [
//                   0.0,
//                   0.8729507884223738,
//                   1.0786689845102222,
//                   0.6177460514663385,
//                   1.163020423069002,
//                   0.725751633166087,
//                   0.8248104472386433,
//                   0.8100452869029499,
//                   1.1709365889099026,
//                   0.7795300757143893,
//                   1.3330638476427075,
//                   1.0227070724689309,
//                   0.4464371001934043,
//                   1.6382701568839606,
//                   1.3924684506021014,
//                   2.031609387514869,
//                   1.0521610253966074
//               ]
//           },
//           {
//               "location": "ROMG",
//               "sub_segment": "Inhouse",
//               "value": [
//                   0.8594757972512113,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.007121889867147543,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0
//               ]
//           },
//           {
//               "location": "ROMG",
//               "sub_segment": "Large",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0
//               ]
//           },
//           {
//               "location": "ROMG",
//               "sub_segment": "Med",
//               "value": [
//                   0.0,
//                   3.0195338490196644,
//                   0.6091851743370722,
//                   0.37831729991604857,
//                   0.6298280830320792,
//                   0.34211233682933595,
//                   0.3549628339424811,
//                   0.6217021925783759,
//                   0.44927770859622745,
//                   0.8305950696922988,
//                   1.7524653558809296,
//                   1.639628487339577,
//                   1.1588165398811678,
//                   0.9891446439299725,
//                   1.1038653825059785,
//                   1.3382299595528615,
//                   1.1630918836098956
//               ]
//           },
//           {
//               "location": "ROMG",
//               "sub_segment": "Small",
//               "value": [
//                   0.0,
//                   1.6577843213531722,
//                   1.4064036468687968,
//                   0.8027285923616172,
//                   0.9175967688506321,
//                   0.8752222521420867,
//                   0.40418285955167305,
//                   0.3731997268032245,
//                   0.6329980798755408,
//                   1.2107709300494565,
//                   0.6037199900305813,
//                   0.633201844581598,
//                   0.8991900634226615,
//                   0.4212915449562588,
//                   0.8874240788728177,
//                   0.47922845188559626,
//                   0.4361431261502454
//               ]
//           },
//           {
//               "location": "ROMG",
//               "sub_segment": "Very Small",
//               "value": [
//                   0.0,
//                   0.5021953403264796,
//                   2.3300796919228506,
//                   2.2847263239852404,
//                   2.2142722841727367,
//                   1.669410350592651,
//                   1.415428839068405,
//                   0.977958140086916,
//                   1.2985549633310052,
//                   1.3972694549006097,
//                   0.4174389859835452,
//                   1.1392201127083474,
//                   0.46308153028977156,
//                   0.43320483152018485,
//                   1.5763454442218345,
//                   0.8751638835500024,
//                   0.5257377380059577
//               ]
//           },
//           {
//               "location": "TAMILNADU",
//               "sub_segment": "Inhouse",
//               "value": [
//                   1.0746800707799022,
//                   2.3021400155408283,
//                   2.9278246183483665,
//                   1.3586347755043655,
//                   0.398883696655127,
//                   0.7187375280226531,
//                   0.5745081901478637,
//                   0.3466893099891096,
//                   0.0817607375194321,
//                   0.0978394144200612,
//                   0.2192466596627596,
//                   0.24002340496252603,
//                   0.07218259951605216,
//                   1.276863552613163,
//                   1.8824416291899424,
//                   0.3339351287620902,
//                   0.29448492011180216
//               ]
//           },
//           {
//               "location": "TAMILNADU",
//               "sub_segment": "Large",
//               "value": [
//                   0.0,
//                   1.8094799885435573,
//                   1.7239648478894851,
//                   0.6620447586527288,
//                   0.6694179600745945,
//                   0.6529312997754247,
//                   0.8546133649286457,
//                   0.8100108541192413,
//                   0.4719811277079259,
//                   0.8104845697435828,
//                   0.7633129217920723,
//                   0.9217687085877841,
//                   0.8982110753182418,
//                   1.2960881858634345,
//                   1.3948052465655836,
//                   1.7126536544156343,
//                   1.006710892526655
//               ]
//           },
//           {
//               "location": "TAMILNADU",
//               "sub_segment": "Med",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.09190989215446438,
//                   0.8133603064120161,
//                   1.3342596913152862,
//                   1.4344471568388693,
//                   0.8152239479493898,
//                   1.3337560175389305,
//                   0.8442655936161525,
//                   1.0152973526250084,
//                   1.1061060689529758,
//                   1.0438039041662366,
//                   1.3487090879433534,
//                   1.9770950523666855,
//                   1.2769580511211225,
//                   0.7610607226899937,
//                   1.3269129934559474
//               ]
//           },
//           {
//               "location": "TAMILNADU",
//               "sub_segment": "Small",
//               "value": [
//                   0.0,
//                   1.9754190350726146,
//                   2.139506645732658,
//                   5.523397645373223,
//                   3.0358783895026016,
//                   4.339734061860638,
//                   5.36738075390717,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.5498319078499492,
//                   0.5502956712429804,
//                   1.3532421433889066,
//                   0.9793374902289905,
//                   0.5753257355202411
//               ]
//           },
//           {
//               "location": "TAMILNADU",
//               "sub_segment": "Very Small",
//               "value": [
//                   0.0,
//                   1.2991974203593655,
//                   1.9524900888855736,
//                   0.6393790574163355,
//                   0.6009964790935106,
//                   0.4015308285815625,
//                   0.9780072726830853,
//                   1.2244753915726263,
//                   1.5435107988236987,
//                   0.7066874983098268,
//                   2.432254523492577,
//                   1.4068566912997582,
//                   1.4912927442750876,
//                   1.4007482119301966,
//                   1.6666402555726112,
//                   0.6248154434501044,
//                   2.83530316855052
//               ]
//           },
//           {
//               "location": "TELANGANA",
//               "sub_segment": "Inhouse",
//               "value": [
//                   1.541236917555521,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   17.618785220715736,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   1.3424105917415003,
//                   0.0,
//                   0.0,
//                   0.7371133522746047,
//                   5.427520740204011,
//                   0.0,
//                   0.31254853020387624
//               ]
//           },
//           {
//               "location": "TELANGANA",
//               "sub_segment": "Large",
//               "value": [
//                   0.0,
//                   0.6699673865125049,
//                   1.8648925357312045,
//                   1.1508466983871126,
//                   1.3867948974696664,
//                   0.8666534362620366,
//                   1.3741695423195983,
//                   2.655696829425794,
//                   0.8760060217512964,
//                   0.9822360664976875,
//                   1.195163326820582,
//                   1.112737389705729,
//                   0.8457021545380775,
//                   1.612505948226419,
//                   1.582115569441208,
//                   0.9829471510552569,
//                   0.5874826280602344
//               ]
//           },
//           {
//               "location": "TELANGANA",
//               "sub_segment": "Med",
//               "value": [
//                   0.0,
//                   2.5213218706356555,
//                   1.4490165538640536,
//                   2.084337071171962,
//                   2.069418601444275,
//                   1.2687453131958695,
//                   1.3213413698441319,
//                   0.8645693028296856,
//                   1.6463416725220015,
//                   0.8556831580770407,
//                   0.9507936689518705,
//                   1.0695821330603932,
//                   1.2992541815566017,
//                   1.2401670747748723,
//                   1.2581341015091956,
//                   1.0083433306847207,
//                   0.9327052794703798
//               ]
//           },
//           {
//               "location": "TELANGANA",
//               "sub_segment": "Small",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.07893889910693527,
//                   1.3082566130821907,
//                   1.7486351718111075,
//                   2.22967361556733
//               ]
//           },
//           {
//               "location": "TELANGANA",
//               "sub_segment": "Very Small",
//               "value": [
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0,
//                   0.0
//               ]
//           }
//       ]
//   },
//   "cached_output": false
// }

const staticDataUniqueAgency: any = {
  balance: {
    portfolio: "Personal Loan",
    date_range: "Jan 2019 - Apr 2023",
    total_book: 4904412211.45,
    ytd_recovery: 139595017.14,
    annualised_recovery_rate: 0.06831155838692202,
    fy_forecast: 5000000,
    variance_to_plan: 12500000,
  },
  units: {
    portfolio: "Personal Loan",
    date_range: "Jan 2019 - Apr 2023",
    total_accounts: 6633,
    total_payers: 645,
    payer_ratio: 0.09724106739032112,
    fy_forecast: 5000000,
    variance_to_plan: 12500000,
  },
  states: [
    {
      state: "TAMIL NADU",
      bars: [
        {
          bar: {
            sub_segment: "Very Small",
            value: 5.961844197138315,
          },
        },
        {
          bar: {
            sub_segment: "Small",
            value: 10.81081081081081,
          },
        },
        {
          bar: {
            sub_segment: "Med",
            value: 24.6422893481717,
          },
        },
        {
          bar: {
            sub_segment: "Large",
            value: 51.987281399046104,
          },
        },
        {
          bar: {
            sub_segment: "Inhouse",
            value: 6.597774244833069,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Very Small",
            value: [
              12.0, 9.82905982905983, 17.293233082706767, 19.850187265917604,
              19.784172661870503, 15.765765765765765,
            ],
          },
        },
        {
          series: {
            sub_segment: "Small",
            value: [
              13.970588235294118, 36.607142857142854, 75.0, 11.697247706422019,
              11.851851851851853,
            ],
          },
        },
        {
          series: {
            sub_segment: "Med",
            value: [
              1.4705882352941175, 10.746268656716417, 11.004784688995215,
              8.568904593639576, 11.403508771929824, 9.090909090909092,
            ],
          },
        },

        {
          series: {
            sub_segment: "Large",
            value: [
              13.503184713375797, 10.834553440702782, 11.256005490734386,
              10.59190031152648, 12.143256855064353, 12.0926243567753,
            ],
          },
        },
        {
          series: {
            sub_segment: "Inhouse",
            value: [
              12.388503468780971, 12.213740458015266, 2.6178010471204187,
              10.869565217391305, 8.19672131147541, 3.0303030303030303,
            ],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             14.032496307237812,
        //             6.540880503144654,
        //             6.0,
        //             4.285714285714286,
        //             0.0
        //         ]
        //     }
        // }
      ],
    },
    {
      state: "KARNATAKA",
      bars: [
        {
          bar: {
            sub_segment: "Very Small",
            value: 2.7807486631016043,
          },
        },
        {
          bar: {
            sub_segment: "Small",
            value: 28.663101604278076,
          },
        },
        {
          bar: {
            sub_segment: "Med",
            value: 67.9144385026738,
          },
        },
        {
          bar: {
            sub_segment: "Inhouse",
            value: 0.6417112299465241,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Very Small",
            value: [0.0, 4.166666666666666],
          },
        },
        {
          series: {
            sub_segment: "Small",
            value: [
              5.691056910569105, 10.909090909090908, 14.866760168302944,
              11.76470588235294,
            ],
          },
        },
        {
          series: {
            sub_segment: "Med",
            value: [
              14.037433155080215, 13.23132313231323, 12.086956521739129,
              9.33048433048433, 9.714950552646888, 8.447304907481898,
            ],
          },
        },
        {
          series: {
            sub_segment: "Large",
            value: [
              5.031446540880504, 3.067484662576687, 3.5650623885918007,
              4.433497536945813,
            ],
          },
        },
        {
          series: {
            sub_segment: "Inhouse",
            value: [
              16.36904761904762, 30.612244897959183, 70.58823529411765,
              52.63157894736842, 61.111111111111114, 30.0,
            ],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             27.091633466135455,
        //             24.84472049689441,
        //             21.58273381294964,
        //             3.2467532467532463,
        //             1.0638297872340425
        //         ]
        //     }
        // }
      ],
    },
    {
      state: "DELHI",
      bars: [
        {
          bar: {
            sub_segment: "Very Small",
            value: 1.7241379310344827,
          },
        },
        {
          bar: {
            sub_segment: "Small",
            value: 13.916256157635468,
          },
        },
        {
          bar: {
            sub_segment: "Med",
            value: 13.177339901477833,
          },
        },
        {
          bar: {
            sub_segment: "Large",
            value: 70.32019704433498,
          },
        },
        {
          bar: {
            sub_segment: "Inhouse",
            value: 0.8620689655172413,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Very Small",
            value: [
              10.344827586206897, 15.217391304347828, 9.090909090909092, 50.0,
              33.33333333333333, 31.57894736842105,
            ],
          },
        },
        {
          series: {
            sub_segment: "Small",
            value: [
              3.571428571428571, 5.88235294117647, 6.976744186046512,
              3.7037037037037033,
            ],
          },
        },
        {
          series: {
            sub_segment: "Med",
            value: [
              12.82051282051282, 19.753086419753085, 13.004484304932735,
              14.723926380368098, 13.90728476821192, 9.0,
            ],
          },
        },
        {
          series: {
            sub_segment: "Large",
            value: [
              25.196850393700785, 14.791666666666666, 10.72463768115942,
              9.397024275646046, 11.200000000000001, 12.099644128113878,
            ],
          },
        },
        {
          series: {
            sub_segment: "Inhouse",
            value: [15.050167224080269, 0.0, 0.0, 8.333333333333332, 12.5, 0.0],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             5.103969754253308,
        //             5.545927209705372,
        //             5.9760956175298805,
        //             6.273062730627306,
        //             17.91044776119403
        //         ]
        //     }
        // }
      ],
    },
    {
      state: "MAHARASHTRA",
      bars: [
        {
          bar: {
            sub_segment: "Med",
            value: 35.351089588377725,
          },
        },
        {
          bar: {
            sub_segment: "Large",
            value: 63.922518159806295,
          },
        },
        {
          bar: {
            sub_segment: "Inhouse",
            value: 0.7263922518159807,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Very Small",
            value: [0.0],
          },
        },
        {
          series: {
            sub_segment: "Med",
            value: [
              29.230769230769234, 21.933085501858738, 12.542955326460481,
              13.098591549295774, 11.907654921020656, 9.262435677530018,
            ],
          },
        },
        {
          series: {
            sub_segment: "Large",
            value: [
              8.605341246290802, 9.071274298056156, 9.507829977628637,
              8.176100628930817,
            ],
          },
        },
        {
          series: {
            sub_segment: "Inhouse",
            value: [
              22.131147540983605, 11.11111111111111, 0.0, 0.0,
              3.225806451612903, 0.0,
            ],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             22.040423484119344,
        //             18.449711723254325,
        //             17.404426559356136,
        //             14.702702702702702,
        //             11.374407582938389,
        //             6.956521739130435
        //         ]
        //     }
        // }
      ],
    },
    {
      state: "UTTAR PRADESH",
      bars: [
        {
          bar: {
            sub_segment: "Very Small",
            value: 16.923076923076923,
          },
        },
        {
          bar: {
            sub_segment: "Small",
            value: 38.11965811965812,
          },
        },
        {
          bar: {
            sub_segment: "Med",
            value: 17.264957264957264,
          },
        },
        {
          bar: {
            sub_segment: "Inhouse",
            value: 27.692307692307693,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Very Small",
            value: [
              24.0, 21.929824561403507, 12.637362637362637, 12.834224598930483,
              9.163346613545817, 9.947643979057592,
            ],
          },
        },
        {
          series: {
            sub_segment: "Small",
            value: [
              29.25531914893617, 16.539440203562343, 10.59245960502693,
              8.261617900172118, 6.5, 6.912442396313365,
            ],
          },
        },
        {
          series: {
            sub_segment: "Med",
            value: [
              13.414634146341465, 10.945273631840797, 13.768115942028986,
              17.870722433460077, 17.228464419475657, 12.935323383084576,
            ],
          },
        },
        {
          series: {
            sub_segment: "Inhouse",
            value: [
              17.437722419928825, 0.0, 0.0, 0.20408163265306123, 0.0, 0.0,
            ],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             12.5,
        //             7.614213197969544,
        //             0.0,
        //             0.0
        //         ]
        //     }
        // }
      ],
    },
    {
      state: "TELANGANA",
      bars: [
        {
          bar: {
            sub_segment: "Small",
            value: 11.736526946107785,
          },
        },
        {
          bar: {
            sub_segment: "Med",
            value: 33.293413173652695,
          },
        },
        {
          bar: {
            sub_segment: "Large",
            value: 54.131736526946106,
          },
        },
        {
          bar: {
            sub_segment: "Inhouse",
            value: 0.8383233532934131,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Small",
            value: [11.39240506329114, 12.865497076023392],
          },
        },
        {
          series: {
            sub_segment: "Med",
            value: [
              71.42857142857143, 14.285714285714285, 8.960573476702509,
              8.636363636363637, 10.510046367851624, 8.0078125,
            ],
          },
        },
        {
          series: {
            sub_segment: "Large",
            value: [
              10.617551462621885, 10.952380952380953, 8.881578947368421,
              8.481824661439772, 10.02710027100271, 9.812108559498958,
            ],
          },
        },
        {
          series: {
            sub_segment: "Inhouse",
            value: [
              13.729128014842301, 10.0, 0.0, 14.285714285714285,
              8.333333333333332, 7.142857142857142,
            ],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             22.596153846153847,
        //             18.597560975609756,
        //             15.246636771300448,
        //             20.8955223880597,
        //             8.045977011494253
        //         ]
        //     }
        // }
      ],
    },
    {
      state: "HARYANA",
      bars: [
        {
          bar: {
            sub_segment: "Very Small",
            value: 20.3125,
          },
        },
        {
          bar: {
            sub_segment: "Small",
            value: 68.75,
          },
        },
        {
          bar: {
            sub_segment: "Inhouse",
            value: 10.9375,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Very Small",
            value: [
              31.03448275862069, 23.25581395348837, 12.790697674418606,
              12.587412587412588, 11.11111111111111, 8.0,
            ],
          },
        },
        {
          series: {
            sub_segment: "Small",
            value: [
              9.868421052631579, 10.51051051051051, 13.513513513513514,
              10.612244897959183, 13.167259786476867, 10.764872521246458,
            ],
          },
        },
        {
          series: {
            sub_segment: "Inhouse",
            value: [16.19718309859155, 60.0, 0.0, 0.0, 7.142857142857142],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             16.9811320754717,
        //             16.666666666666664,
        //             9.777777777777779,
        //             4.25531914893617,
        //             3.896103896103896,
        //             0.0
        //         ]
        //     }
        // }
      ],
    },
    {
      state: "ANDHRA PRADESH",
      bars: [
        {
          bar: {
            sub_segment: "Small",
            value: 10.416666666666668,
          },
        },
        {
          bar: {
            sub_segment: "Med",
            value: 35.41666666666667,
          },
        },
        {
          bar: {
            sub_segment: "Large",
            value: 53.645833333333336,
          },
        },
        {
          bar: {
            sub_segment: "Inhouse",
            value: 0.5208333333333333,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Small",
            value: [0.0, 11.76470588235294],
          },
        },
        {
          series: {
            sub_segment: "Med",
            value: [
              0.0, 6.666666666666667, 3.7037037037037033, 4.0,
              12.781954887218044,
            ],
          },
        },
        {
          series: {
            sub_segment: "Large",
            value: [
              12.5, 6.862745098039216, 10.179640718562874, 13.779527559055119,
              10.828025477707007, 10.096153846153847,
            ],
          },
        },
        {
          series: {
            sub_segment: "Inhouse",
            value: [25.0, 100.0, 50.0, 0.0, 0.0],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             16.216216216216218,
        //             14.285714285714285,
        //             10.784313725490197,
        //             5.88235294117647,
        //             7.216494845360824
        //         ]
        //     }
        // }
      ],
    },
    {
      state: "MADHYA PRADESH",
      bars: [
        {
          bar: {
            sub_segment: "Very Small",
            value: 32.82828282828283,
          },
        },
        {
          bar: {
            sub_segment: "Small",
            value: 67.17171717171718,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Very Small",
            value: [
              5.405405405405405, 7.4074074074074066, 5.673758865248227,
              2.666666666666667, 7.079646017699115, 7.258064516129033,
            ],
          },
        },
        {
          series: {
            sub_segment: "Small",
            value: [
              13.043478260869565, 10.112359550561797, 5.660377358490567,
              5.932203389830509, 8.88888888888889,
            ],
          },
        },
        {
          series: {
            sub_segment: "Inhouse",
            value: [
              9.75609756097561, 27.27272727272727, 35.294117647058826,
              13.26530612244898, 20.3125, 18.181818181818183,
            ],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             10.0,
        //             9.523809523809524,
        //             17.142857142857142,
        //             7.291666666666667,
        //             5.82010582010582,
        //             1.5384615384615385
        //         ]
        //     }
        // }
      ],
    },
    {
      state: "GUJARAT",
      bars: [
        {
          bar: {
            sub_segment: "Very Small",
            value: 100.0,
          },
        },
      ],
      series: [
        {
          series: {
            sub_segment: "Very Small",
            value: [
              14.084507042253522, 8.284023668639055, 9.266409266409266,
              8.856088560885608, 12.742382271468145, 8.816120906801007,
            ],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "Small",
        //         "value": [
        //             0.0
        //         ]
        //     }
        // },
        {
          series: {
            sub_segment: "Inhouse",
            value: [29.333333333333332, 100.0],
          },
        },
        // {
        //     "series": {
        //         "sub_segment": "",
        //         "value": [
        //             22.68041237113402,
        //             16.666666666666664,
        //             10.526315789473683,
        //             6.25,
        //             3.816793893129771
        //         ]
        //     }
        // }
      ],
    },
  ],
};

const AgencyRecovery: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("$Recovery");
  const [selectedCategoryButton, setselectedCategoryButton] =
    useState("MAHARASHTRA");
    const [selectedCategoryButtonTrends, setselectedCategoryButtonTrends] =
    useState<any>("KARNATAKA");
  const [selectedCategoryMum, setselectedCategoryMum] = useState("Small");
  const [selectedCategoryBlr, setselectedCategoryBlr] = useState("plc1");
  const [selectedCategoryDel, setselectedCategoryDel] = useState("plc1");
  const [selectedCategoryHyd, setselectedCategoryHyd] = useState("plc1");
  const [selectedCategoryKol, setselectedCategoryKol] = useState("plc1");

  const [selectedCategoryOthers, setselectedCategoryOthers] = useState("plc1");

  // const [categoriesMatric, setCategoriesMatric] = useState("TAMIL NADU");

  const [selectedState, setSelectedState] = useState<string>("TAMIL NADU");

  const [recoveryData, setRecoveryData] = useState<any>();
  const [uniqueData, setUniqueData] = useState<any>();

  const stateData = recoveryData?.agency?.bars?.filter(
    (bar: any) => bar?.bar?.location === selectedCategoryButtonTrends
  );
  
  
  const propsData = stateData?.map((b: any) => b.bar) || [];
  
  const uniqueStateData = uniqueData?.lhs.find(
    (item: any) => item.state === selectedCategoryButton
  );
  
  const PieChartData = uniqueStateData?.lhs.map((b: any) => ({
    sub_segment: b.Agency_Segment,
    value: b.pos_percentage,
  })) || [];

  let navigate = useNavigate();
  const handleCategoryClickButton = async (cityId: string) => {
    setselectedCategoryButton(cityId);
  };
  const handleCategoryClickButtonTrends = async (cityId: string) => {
    setselectedCategoryButtonTrends(cityId);
  };
  const handleCategoryClickMum = async (cityId: string) => {
    setselectedCategoryMum(cityId);
  };
  const handleCategoryClickBlr = async (cityId: string) => {
    setselectedCategoryBlr(cityId);
  };
  const handleCategoryClickDel = async (cityId: string) => {
    setselectedCategoryDel(cityId);
  };
  const handleCategoryClickHyd = async (cityId: string) => {
    setselectedCategoryHyd(cityId);
  };
  const handleCategoryClickKol = async (cityId: string) => {
    setselectedCategoryKol(cityId);
  };
  const handleCategoryClickOthers = async (cityId: string) => {
    setselectedCategoryOthers(cityId);
  };
  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
    // if (buttonId === "$Recovery" || buttonId === "writeOff") {
    //   setdelinquencyGraphTitle("Monthly Recovery");
    //   setdelinquencyGraphTitle("Recovery");
    //   setdelinquencyUniqueGraphTitle("Recovery %");
    //   setforwardFlowRateTitle("Monthly Recovery % (Coincidental)");
    // } else if (buttonId === "uniquePayer") {
    //   setdelinquencyGraphTitle("Unique Payer %");
    //   setforwardFlowRateTitle("Unique Payer Rate");
    //   setdelinquencyUniqueGraphTitle("Average Payment Size")
    // }
  };

  //houver functionality
  const [hoveredState, setHoveredState] = useState(false);
  const [selectedStateH, setSelectedStateH] = useState(null);
  const [hoveredSubSegment, setHoveredSubSegment] = useState(null);
  const handleStateHover = (state: any) => {
    setSelectedStateH(state);
  };
  const [error, setError] = useState<string | null>(null);
  const [data, setData]=useState<any>()
  const [staticDataRecoveryPerformance,setstaticDataRecoveryPerformance]=useState<any>()
  useEffect(() => {
    fetchPieChartData("agency.allocation");
  }, []);
  const fetchPieChartData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/agency?blob=agency.allocation`;
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
      setUniqueData(result.data);
      setData(result.data)
    } catch (err: any) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchTrendsData("agency.trends");
  }, []);
  const fetchTrendsData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/agency?blob=agency.trends`;
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
      setRecoveryData(result.data);
       setstaticDataRecoveryPerformance(result.data)
    } catch (err: any) {
      setError(err.message);
    }
  };
  
 
 
  return (
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5 w-full">
        {/* <MonitoringCollectionDashboardHeader /> */}
        {/* <AgencyDashboard /> */}
        <HomeDashboard />
      </div>
      <div className=" w-full flex flex-col gap-5 mt-8 items-start ml-20 mb-8">
        <div className="flex ">
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
       {activeButton === "uniquePayer" && ( <div className="flex">
          <div className=" flex justify-between  rounded-xl w-full B1TabsContain">
            {categoriesButton.map((city, index) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClickButton(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full  p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
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
        </div>)}

        {activeButton === "$Recovery" && ( <div className="flex">
          <div className=" flex justify-between  rounded-xl w-full B1TabsContain">
            {categoriesButtonTrends.map((city, index) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClickButtonTrends(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full  p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  selectedCategoryButtonTrends === city.id
                    ? " bg-[#E8DEF8] "
                    : "bg-[#fafafb]"
                } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                  index === categoriesButtonTrends.length - 1 ? "rounded-r-[4px]" : ""
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>)}
      </div>
      <div className="flex flex-col  items-start  justify-center gap-7 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
        {activeButton === "uniquePayer" && (
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            <CustomizeBarScatterAgencyChart
              // data={stateData?.bars.map((b: any) => b.bar) || []}
              uniquedata={PieChartData}
              activeButton={activeButton}
             
            />
            <ForwardFlowRatesAgencyRecovery
              data={data}
              activeButton={activeButton}
               selectedCategoryButton={selectedCategoryButton}
            />
          </div>
        )}
        {activeButton === "$Recovery" && (
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            <CustomizeBarScatterAgencyTrendsChart
              data={propsData}
              // uniquedata={uniqueStateData?.bars.map((b: any) => b.bar) || []}
              activeButton={activeButton}

              handleStateHover={handleStateHover}
              setHoveredState={setHoveredState}
              setHoveredSubSegment={setHoveredSubSegment}
            />
            <TrendsLineGraph
              staticDataRecoveryPerformance={staticDataRecoveryPerformance}
              selectedCategoryButtonTrends={selectedCategoryButtonTrends}
              activeButton={activeButton}
              staticDataUniqueAgency={staticDataUniqueAgency}
              selectedStateH={selectedStateH}
              hoveredState={hoveredState}
              hoveredSubSegment={hoveredSubSegment}
            />
          </div>
        )}
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

export default AgencyRecovery;
