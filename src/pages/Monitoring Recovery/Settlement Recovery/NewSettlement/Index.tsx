import React, { useEffect, useState } from "react";



import { useNavigate } from "react-router-dom";


import HomeDashboard from "../../../../components/PerformanceDashboardHeader/HomeDashboard";

import Button from "../../../../components/Button";
import NewSettlementRhs from "../../../../components/Monitoring Recovery/NewSettlementRhs";
import NewSettlementLhs from "../../../../components/Monitoring Recovery/NewSettlementLhs";

const Buttons = [
  // { id: "writeOff", label: "Write Off" },
  { id: "$Recovery", label: "$ Value" },
//   { id: "uniquePayer", label: "# Accounts" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "location", name: "Location" },
  // { id: "mob", name: "Vintage" },
  // { id: "placement", name: "Placement" },
  
  //   { id: "agency", name: "Agency" },
  { id: "pos", name: "POS" },
  // { id: "segments", name: "Segments" },
  // { id: "payment", name: "Payment" },
];

const subCategories = [
  { id: "V1", name: "V1" },
  { id: "V2", name: "V2" },
  { id: "V3", name: "V3" },
  { id: "V4", name: "V4" },
  { id: "V5", name: "V5" },
  { id: "V6", name: "V6" },
  { id: "V7", name: "V7" },
];

const subCategoriesPlacements = [
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
  { id: "6+", name: "6+" },
];

const subCategoriesAgents = [
  { id: "Very Small", name: "Very Small" },
  { id: "Small", name: "Small" },
  { id: "Medium", name: "Medium" },
  { id: "Large", name: "Large" },
  // { id: "DCA5", name: "DCA5" },
];

const subCategoriesPayment = [
  { id: "PA", name: "PA" },
  { id: "FFS", name: "FFS" },
];
const subCategoriesLocation = [
  { id: "UTTAR PRADESH", name: "UP" },
  { id: "MAHARASHTRA", name: "MH" },
  { id: "TAMIL NADU", name: "TN" },
  { id: "MADHYA PRADESH", name: "MP" },
  { id: "KARNATAKA", name: "KA" },
  { id: "HARYANA" , name: "HR" },
  { id: "ANDHRA PRADESH", name: "AP" },
  { id: "TELANGANA", name: "TG" },
  { id: "GUJARAT", name: "GJ" },
  { id: "RAJASTHAN", name: "RJ" },
  // { id: "DL", name: "DL" },
  { id: "OTHERS", name: "OTHERS" },
];
const subCategoriesTOS = [
  { id: "<1Lakh", name: "<1Lakh" },
  { id: ">=1 - 5Lakh", name: ">=1 - 5Lakh" },
  { id: ">=5 - 10Lakh", name: ">=5 - 10Lakh" },
  { id: ">=10L", name: ">=10L" },
  
];
const subCategoriesSegment = [
  { id: "Score", name: "Score" },
  { id: "Age", name: "Age" },
  { id: "Industry", name: "Industry" },
  { id: "Employment", name: "Employment" },
  { id: "Seg5", name: "Seg5" },
  { id: "Others", name: "Others" },
];
const subCategoriesSegmentUniquePayer = [
  { id: "Seg1", name: "Seg1" },
  { id: "Seg2", name: "Seg2" },
  { id: "Seg3", name: "Seg3" },
  { id: "Seg4", name: "Seg4" },
  { id: "Seg5", name: "Seg5" },
  { id: "Others", name: "Others" },
];

interface RecoveryItem {
  [key: string]: {
    name: string;
    value: string;
  };
}
// const recoveryStaticData = 
// {
  
// "All": [
//         // [{
//         //     "segment": "All",
//         //     "month": "Feb2023",
//         //     "settlement_amount": 438253096.74,
//         //     "Average_Waiver_%": 0.6259513827613615
//         // },
//         // {
//         //     "segment": "All",
//         //     "month": "Feb2023",
//         //     "recovery": 32336936.7,
//         //     "Recovery_%": 0.07378598563374067
//         // }],
//     //    [ {
//     //         "segment": "All",
//     //         "month": "Mar2023",
//     //         "settlement_amount": 19543526.0,
//     //         "Average_Waiver_%": 0.5621610814888958
//     //     },
//     //     {
//     //         "segment": "All",
//     //         "month": "Mar2023",
//     //         "recovery": 2566483.0,
//     //         "Recovery_%": 0.13132139000915188
//     //     }],
//        [ {
//             "segment": "All",
//             "month": "Apr2023",
//             "settlement_amount": 13764744.0,
//             "Average_Waiver_%": 0.5980342749456908
//         },
//         {
//             "segment": "All",
//             "month": "Apr2023",
//             "recovery": 254244.0,
//             "Recovery_%": 0.01847066679917912
//         }],
//        [ {
//             "segment": "All",
//             "month": "May2023",
//             "settlement_amount": 17504814.0,
//             "Average_Waiver_%": 0.607317835007012
//         },
//         {
//             "segment": "All",
//             "month": "May2023",
//             "recovery": 1323612.0,
//             "Recovery_%": 0.07561417105031792
//         }],
//        [ {
//             "segment": "All",
//             "month": "Jun2023",
//             "settlement_amount": 15934310.09,
//             "Average_Waiver_%": 0.5522320639303367
//         },
//         {
//             "segment": "All",
//             "month": "Jun2023",
//             "recovery": 623762.12,
//             "Recovery_%": 0.039145850462108084
//         }],
//         [{
//             "segment": "All",
//             "month": "Jul2023",
//             "settlement_amount": 15941572.0,
//             "Average_Waiver_%": 0.5397335175669788
//         },
//         {
//             "segment": "All",
//             "month": "Jul2023",
//             "recovery": 713229.0,
//             "Recovery_%": 0.044740192497954405
//         }],
//        [ {
//             "segment": "All",
//             "month": "Aug2023",
//             "settlement_amount": 21850038.0,
//             "Average_Waiver_%": 0.5969509903453649
//         },
//         {
//             "segment": "All",
//             "month": "Aug2023",
//             "recovery": 1258975.0,
//             "Recovery_%": 0.057618892928241135
//         }],
//         [{
//             "segment": "All",
//             "month": "Sep2023",
//             "settlement_amount": 22724477.0,
//             "Average_Waiver_%": 0.5941959717479008
//         },
//         {
//             "segment": "All",
//             "month": "Sep2023",
//             "recovery": 1132285.0,
//             "Recovery_%": 0.04982666927824125
//         }],
//         [{
//             "segment": "All",
//             "month": "Oct2023",
//             "settlement_amount": 19860202.0,
//             "Average_Waiver_%": 0.5580977476184699
//         },
//         {
//             "segment": "All",
//            "month": "Oct2023",
//             "recovery": 926637.0,
//             "Recovery_%": 0.04665798464688325
//         }],
//        [ {
//             "segment": "All",
//             "month": "Nov2023",
//             "settlement_amount": 20674965.0,
//             "Average_Waiver_%": 0.580002597032691
//         },
//         {
//             "segment": "All",
//            "month": "Nov2023",
//             "recovery": 808148.0,
//             "Recovery_%": 0.039088240294481755
//         }],
//         [{
//             "segment": "All",
//             "month": "Dec2023",
//             "settlement_amount": 20506414.0,
//             "Average_Waiver_%": 0.5878632698992504
//         },
//         {
//             "segment": "All",
//             "month": "Dec2023",
//             "recovery": 1031989.0,
//             "Recovery_%": 0.05032518118477468
//         }],
//         [{
//             "segment": "All",
//             "month": "Jan2024",
//             "settlement_amount": 21245924.0,
//             "Average_Waiver_%": 0.5781500999609039
//         },
//         {
//             "segment": "All",
//             "month": "Jan2024",
//             "recovery": 1376488.0,
//             "Recovery_%": 0.06478833304684702
//         }],
//        [ {
//             "segment": "All",
//             "month": "Feb2024",
//             "settlement_amount": 19363420.0,
//             "Average_Waiver_%": 0.5921334060070695
//         },
//         {
//             "segment": "All",
//             "month": "Feb2024",
//             "recovery": 740563.0,
//             "Recovery_%": 0.03824546490237778
//         }],
//        [ {
//             "segment": "All",
//             "month": "Mar2024",
//             "settlement_amount": 21383545.0,
//             "Average_Waiver_%": 0.6038615848980622
//         },
//         {
//             "segment": "All",
//             "month": "Mar2024",
//             "recovery": 1256309.0,
//             "Recovery_%": 0.05875120332012302
//         }],
//         [{
//             "segment": "All",
//             "month": "Apr2024",
//             "settlement_amount": 18121865.0,
//             "Average_Waiver_%": 0.579803497488492
//         },
//         {
//             "segment": "All",
//             "month": "Apr2024",
//             "recovery": 568987.0,
//             "Recovery_%": 0.03139781694654496
//         }],
//         [{
//             "segment": "All",
//             "month": "May2024",
//             "settlement_amount": 24194650.0,
//             "Average_Waiver_%": 0.6026029315237845
//         },
//         {
//             "segment": "All",
//             "month": "May2024",
//             "recovery": 1674071.0,
//             "Recovery_%": 0.06919178413409575
//         }],
//         [{
//             "segment": "All",
//             "month": "Jun2024",
//             "settlement_amount": 15006384.0,
//             "Average_Waiver_%": 0.5442799588036709
//         },
//         {
//             "segment": "All",
//             "month": "Jun2024",
//             "recovery": 306685.0,
//             "Recovery_%": 0.020436968692791015
//         }]
//     ],
//  "location": [
//         // [ {
//         //      "segment": "AP",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 17773409.57,
//         //      "Average_Waiver_%": 0.41376917968975924
//         //  },
//         //  {
//         //      "segment": "AP",
//         //      "month": "Feb2023",
//         //      "recovery": 1242964.0,
//         //      "Recovery_%": 0.06993390857869033
//         //  }],
//         // [ {
//         //      "segment": "AP",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 303000.0,
//         //      "Average_Waiver_%": 0.5019377530592485
//         //  },
//         //  {
//         //      "segment": "AP",
//         //      "month": "Mar2023",
//         //      "recovery": 139000.0,
//         //      "Recovery_%": 0.45874587458745875
//         //  }],
//          [{
//              "segment": "AP",
//              "month": "Apr2023",
//              "settlement_amount": 1096700.0,
//              "Average_Waiver_%": 0.39950600992623986
//          },
//          {
//              "segment": "AP",
//              "month": "Apr2023",
//              "recovery": 48294.0,
//              "Recovery_%": 0.04403574359441962
//          }],
//         [ {
//              "segment": "AP",
//              "month": "May2023",
//              "settlement_amount": 393000.0,
//              "Average_Waiver_%": 0.5132381688774803
//          },
//          {
//              "segment": "AP",
//              "month": "May2023",
//              "recovery": 32000.0,
//              "Recovery_%": 0.08142493638676845
//          }],
//         [ {
//              "segment": "AP",
//              "month": "Jun2023",
//              "settlement_amount": 180000.0,
//              "Average_Waiver_%": 0.2848399266075115
//          },
//          {
//              "segment": "AP",
//              "month": "Jun2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//          [{
//              "segment": "AP",
//              "month": "Jul2023",
//              "settlement_amount": 571000.0,
//              "Average_Waiver_%": 0.49620804503406934
//          },
//          {
//              "segment": "AP",
//              "month": "Jul2023",
//              "recovery": 4000.0,
//              "Recovery_%": 0.0070052539404553416
//          }],
//          [{
//              "segment": "AP",
//              "month": "Aug2023",
//              "settlement_amount": 1277000.0,
//              "Average_Waiver_%": 0.387929600553204
//          },
//          {
//              "segment": "AP",
//              "month": "Aug2023",
//              "recovery": 69289.0,
//              "Recovery_%": 0.05425920125293657
//          }],
//          [{
//              "segment": "AP",
//              "month": "Sep2023",
//              "settlement_amount": 730000.0,
//              "Average_Waiver_%": 0.4142959973393798
//          },
//          {
//              "segment": "AP",
//              "month": "Sep2023",
//              "recovery": 8241.0,
//              "Recovery_%": 0.011289041095890412
//          }],
//          [{
//              "segment": "AP",
//              "month": "Oct2023",
//              "settlement_amount": 355000.0,
//              "Average_Waiver_%": 0.4682684049071258
//          },
//          {
//              "segment": "AP",
//              "month": "Oct2023",
//              "recovery": 18650.0,
//              "Recovery_%": 0.05253521126760563
//          }],
//         [ {
//              "segment": "AP",
//              "month": "Nov2023",
//              "settlement_amount": 342000.0,
//              "Average_Waiver_%": 0.46949502734753623
//          },
//          {
//              "segment": "AP",
//              "month": "Nov2023",
//              "recovery": 10000.0,
//              "Recovery_%": 0.029239766081871343
//          }],
//         [ {
//              "segment": "AP",
//              "month": "Dec2023",
//              "settlement_amount": 1514470.0,
//              "Average_Waiver_%": 0.3736668569407604
//          },
//          {
//              "segment": "AP",
//              "month": "Dec2023",
//              "recovery": 43600.0,
//              "Recovery_%": 0.02878894926938137
//          }],
//          [{
//              "segment": "AP",
//              "month": "Jan2024",
//              "settlement_amount": 750000.0,
//              "Average_Waiver_%": 0.9403511918311918
//          },
//          {
//              "segment": "AP",
//              "month": "Jan2024",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "AP",
//              "month": "Feb2024",
//              "settlement_amount": 1842050.0,
//              "Average_Waiver_%": 0.47706320363196747
//          },
//          {
//              "segment": "AP",
//              "month": "Feb2024",
//              "recovery": 7000.0,
//              "Recovery_%": 0.0038001140034201026
//          }],
//         [ {
//              "segment": "AP",
//              "month": "Mar2024",
//              "settlement_amount": 660000.0,
//              "Average_Waiver_%": 0.3414056792245038
//          },
//          {
//              "segment": "AP",
//              "month": "Mar2024",
//              "recovery": 40001.0,
//              "Recovery_%": 0.060607575757575756
//          }],
//         [ {
//              "segment": "AP",
//              "month": "Apr2024",
//              "settlement_amount": 1377750.0,
//              "Average_Waiver_%": 0.5738785408425723
//          },
//          {
//              "segment": "AP",
//              "month": "Apr2024",
//              "recovery": 47000.0,
//              "Recovery_%": 0.03411359099981855
//          }],
//         [ {
//              "segment": "AP",
//              "month": "May2024",
//              "settlement_amount": 180000.0,
//              "Average_Waiver_%": 0.37772612815987316
//          },
//          {
//              "segment": "AP",
//              "month": "May2024",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "AP",
//              "month": "Jun2024",
//              "settlement_amount": 405000.0,
//              "Average_Waiver_%": 0.3695041492442039
//          },
//          {
//              "segment": "AP",
//              "month": "Jun2024",
//              "recovery": 20000.0,
//              "Recovery_%": 0.04938271604938271
//          }],
//         //  [{
//         //      "segment": "GUJARAT",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 14445188.0,
//         //      "Average_Waiver_%": 0.3585821579890713
//         //  },
//         //  {
//         //      "segment": "GJ",
//         //      "month": "Feb2023",
//         //      "recovery": 778587.0,
//         //      "Recovery_%": 0.05389940234768838
//         //  }],
//         // [ {
//         //      "segment": "GJ",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 1069000.0,
//         //      "Average_Waiver_%": 0.40661205518096066
//         //  },
//         //  {
//         //      "segment": "GJ",
//         //      "month": "Mar2023",
//         //      "recovery": 103800.0,
//         //      "Recovery_%": 0.0971000935453695
//         //  }],
//         [ {
//              "segment": "GJ",
//              "month": "Apr2023",
//              "settlement_amount": 730000.0,
//              "Average_Waiver_%": 0.5037151302424816
//          },
//          {
//              "segment": "GJ",
//              "month": "Apr2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "GJ",
//              "month": "May2023",
//              "settlement_amount": 798000.0,
//              "Average_Waiver_%": 0.4167151877019933
//          },
//          {
//              "segment": "GJ",
//              "month": "May2023",
//              "recovery": 125000.0,
//              "Recovery_%": 0.15664160401002505
//          }],
//         [ {
//              "segment": "GJ",
//              "month": "Jun2023",
//              "settlement_amount": 285000.0,
//              "Average_Waiver_%": 0.5297658024352385
//          },
//          {
//              "segment": "GJ",
//              "month": "Jun2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//          [{
//              "segment": "GJ",
//              "month": "Jul2023",
//              "settlement_amount": 788730.0,
//              "Average_Waiver_%": 0.5596564204997493
//          },
//          {
//              "segment": "GJ",
//              "month": "Jul2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//          [{
//              "segment": "GJ",
//              "month": "Aug2023",
//              "settlement_amount": 545000.0,
//              "Average_Waiver_%": 0.3887179112561859
//          },
//          {
//              "segment": "GJ",
//              "month": "Aug2023",
//              "recovery": 1999.9999999999995,
//              "Recovery_%": 0.003669724770642201
//          }],
//          [{
//              "segment": "GJ",
//              "month": "Sep2023",
//              "settlement_amount": 2005500.0,
//              "Average_Waiver_%": 0.43802967190063963
//          },
//          {
//              "segment": "GJ",
//              "month": "Sep2023",
//              "recovery": 30000.0,
//              "Recovery_%": 0.014958863126402393
//          }],
//          [{
//              "segment": "GJ",
//              "month": "Oct2023",
//              "settlement_amount": 1745600.0,
//              "Average_Waiver_%": 0.396424499011329
//          },
//          {
//              "segment": "GJ",
//              "month": "Oct2023",
//              "recovery": 24930.0,
//              "Recovery_%": 0.014281622364802933
//          }],
//         [ {
//              "segment": "GJ",
//              "month": "Nov2023",
//              "settlement_amount": 875000.0,
//              "Average_Waiver_%": 0.4416955088365326
//          },
//          {
//              "segment": "GJ",
//              "month": "Nov2023",
//              "recovery": 12102.0,
//              "Recovery_%": 0.013830857142857143
//          }],
//          [{
//              "segment": "GJ",
//              "month": "Dec2023",
//              "settlement_amount": 1236480.0,
//              "Average_Waiver_%": 0.5420779195010168
//          },
//          {
//              "segment": "GJ",
//              "month": "Dec2023",
//              "recovery": 161280.0,
//              "Recovery_%": 0.13043478260869565
//          }],
//         [ {
//              "segment": "GJ",
//              "month": "Jan2024",
//              "settlement_amount": 1342063.0,
//              "Average_Waiver_%": 0.3845359893532656
//          },
//          {
//              "segment": "GJ",
//              "month": "Jan2024",
//              "recovery": 70000.0,
//              "Recovery_%": 0.052158505226654786
//          }],
//          [{
//              "segment": "GJ",
//              "month": "Feb2024",
//              "settlement_amount": 1243300.0,
//              "Average_Waiver_%": 0.4481274443454405
//          },
//          {
//              "segment": "GJ",
//              "month": "Feb2024",
//              "recovery": 37453.0,
//              "Recovery_%": 0.030123863910560603
//          }],
//          [{
//              "segment": "GJ",
//              "month": "Mar2024",
//              "settlement_amount": 453000.0,
//              "Average_Waiver_%": 0.30879666608667883
//          },
//          {
//              "segment": "GJ",
//              "month": "Mar2024",
//              "recovery": 7600.0,
//              "Recovery_%": 0.016777041942604858
//          }],
//          [{
//              "segment": "GJ",
//              "month": "Apr2024",
//              "settlement_amount": 506800.0,
//              "Average_Waiver_%": 0.399766627160132
//          },
//          {
//              "segment": "GJ",
//              "month": "Apr2024",
//              "recovery": 18000.0,
//              "Recovery_%": 0.035516969218626675
//          }],
//          [{
//              "segment": "GJ",
//              "month": "May2024",
//              "settlement_amount": 792000.0,
//              "Average_Waiver_%": 0.4085028485620573
//          },
//          {
//              "segment": "GJ",
//              "month": "May2024",
//              "recovery": 55000.0,
//              "Recovery_%": 0.06944444444444445
//          }],
//          [{
//              "segment": "GJ",
//              "month": "Jun2024",
//              "settlement_amount": 317000.0,
//              "Average_Waiver_%": 0.41077521706295456
//          },
//          {
//              "segment": "GJ",
//              "month": "Jun2024",
//              "recovery": 10000.0,
//              "Recovery_%": 0.031545741324921134
//          }],
//         // [ {
//         //      "segment": "HR",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 28982278.25,
//         //      "Average_Waiver_%": 0.3226409043097995
//         //  },
//         //  {
//         //      "segment": "HR",
//         //      "month": "Feb2023",
//         //      "recovery": 1569683.0,
//         //      "Recovery_%": 0.054160096955110835
//         //  }],
//         //  [{
//         //      "segment": "HR",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 2052850.0,
//         //      "Average_Waiver_%": 0.35699237886614366
//         //  },
//         //  {
//         //      "segment": "HR",
//         //      "month": "Mar2023",
//         //      "recovery": 32500.0,
//         //      "Recovery_%": 0.015831648683537522
//         //  }],
//         [ {
//              "segment": "HR",
//              "month": "Apr2023",
//              "settlement_amount": 1608700.0,
//              "Average_Waiver_%": 0.3829212686783613
//          },
//          {
//              "segment": "HR",
//              "month": "Apr2023",
//              "recovery": 6999.999999999999,
//              "Recovery_%": 0.004351339590974078
//          }],
//          [{
//              "segment": "HR",
//              "month": "May2023",
//              "settlement_amount": 1919280.0,
//              "Average_Waiver_%": 0.3505388800150917
//          },
//          {
//              "segment": "HR",
//              "month": "May2023",
//              "recovery": 270348.0,
//              "Recovery_%": 0.140859072152057
//          }],
//         [ {
//              "segment": "HR",
//              "month": "Jun2023",
//              "settlement_amount": 669200.0,
//              "Average_Waiver_%": 0.32655176439573225
//          },
//          {
//              "segment": "HR",
//              "month": "Jun2023",
//              "recovery": 13000.0,
//              "Recovery_%": 0.019426180514046622
//          }],
//          [{
//              "segment": "HR",
//              "month": "Jul2023",
//              "settlement_amount": 758700.0,
//              "Average_Waiver_%": 0.4446432488084314
//          },
//          {
//              "segment": "HR",
//              "month": "Jul2023",
//              "recovery": 120000.0,
//              "Recovery_%": 0.15816528272044286
//          }],
//          [{
//              "segment": "HR",
//              "month": "Aug2023",
//              "settlement_amount": 1495709.0,
//              "Average_Waiver_%": 0.3543144164132478
//          },
//          {
//              "segment": "HR",
//              "month": "Aug2023",
//              "recovery": 122800.0,
//              "Recovery_%": 0.08210153178191747
//          }],
//          [{
//              "segment": "HR",
//              "month": "Sep2023",
//              "settlement_amount": 2540300.0,
//              "Average_Waiver_%": 0.351634428605944
//          },
//          {
//              "segment": "HR",
//              "month": "Sep2023",
//              "recovery": 104246.0,
//              "Recovery_%": 0.041036885407235366
//          }],
//         [ {
//              "segment": "HR",
//              "month": "Oct2023",
//              "settlement_amount": 765000.0,
//              "Average_Waiver_%": 0.4052682262987897
//          },
//          {
//              "segment": "HR",
//              "month": "Oct2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "HR",
//              "month": "Nov2023",
//              "settlement_amount": 1315850.0,
//              "Average_Waiver_%": 0.32093560212084765
//          },
//          {
//              "segment": "HR",
//              "month": "Nov2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//          [{
//              "segment": "HR",
//              "month": "Dec2023",
//              "settlement_amount": 1445400.0,
//              "Average_Waiver_%": 0.3504514437232008
//          },
//          {
//              "segment": "HR",
//              "month": "Dec2023",
//              "recovery": 30000.0,
//              "Recovery_%": 0.020755500207555
//          }],
//          [{
//              "segment": "HR",
//              "month": "Jan2024",
//              "settlement_amount": 2142800.0,
//              "Average_Waiver_%": 0.3616842336424381
//          },
//          {
//              "segment": "HR",
//              "month": "Jan2024",
//              "recovery": 108496.0,
//              "Recovery_%": 0.05063281687511667
//          }],
//         [ {
//              "segment": "HR",
//              "month": "Feb2024",
//              "settlement_amount": 1613600.0,
//              "Average_Waiver_%": 0.31253293037813384
//          },
//          {
//              "segment": "HR",
//              "month": "Feb2024",
//              "recovery": 110922.0,
//              "Recovery_%": 0.06874194348041646
//          }],
//          [{
//              "segment": "HR",
//              "month": "Mar2024",
//              "settlement_amount": 2110900.0,
//              "Average_Waiver_%": 0.35546822107704507
//          },
//          {
//              "segment": "HR",
//              "month": "Mar2024",
//              "recovery": 68000.0,
//              "Recovery_%": 0.03221374769055853
//          }],
//          [{
//              "segment": "HR",
//              "month": "Apr2024",
//              "settlement_amount": 1212900.0,
//              "Average_Waiver_%": 0.3115733276780724
//          },
//          {
//              "segment": "HR",
//              "month": "Apr2024",
//              "recovery": 11372.0,
//              "Recovery_%": 0.009375875999670212
//          }],
//          [{
//              "segment": "HR",
//              "month": "May2024",
//              "settlement_amount": 1976200.0,
//              "Average_Waiver_%": 0.3152336860637489
//          },
//          {
//              "segment": "HR",
//              "month": "May2024",
//              "recovery": 121135.0,
//              "Recovery_%": 0.061296933508754176
//          }],
//          [{
//              "segment": "HR",
//              "month": "Jun2024",
//              "settlement_amount": 1007100.0,
//              "Average_Waiver_%": 0.4273035885117442
//          },
//          {
//              "segment": "HR",
//              "month": "Jun2024",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         // [ {
//         //      "segment": "KA",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 43106272.0,
//         //      "Average_Waiver_%": 0.4984044232165577
//         //  },
//         //  {
//         //      "segment": "KA",
//         //      "month": "Feb2023",
//         //      "recovery": 3501212.0,
//         //      "Recovery_%": 0.08122279746204915
//         //  }],
//         //  [{
//         //      "segment": "KA",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 1625999.0,
//         //      "Average_Waiver_%": 0.547859927077036
//         //  },
//         //  {
//         //      "segment": "KA",
//         //      "month": "Mar2023",
//         //      "recovery": 77500.0,
//         //      "Recovery_%": 0.04766300594280808
//         //  }],
//          [{
//              "segment": "KA",
//              "month": "Apr2023",
//              "settlement_amount": 94300.0,
//              "Average_Waiver_%": 0.4899690909000218
//          },
//          {
//              "segment": "KA",
//              "month": "Apr2023",
//              "recovery": 15000.0,
//              "Recovery_%": 0.15906680805938495
//          }],
//         [ {
//              "segment": "KA",
//              "month": "May2023",
//              "settlement_amount": 1255000.0,
//              "Average_Waiver_%": 0.543195054700283
//          },
//          {
//              "segment": "KA",
//              "month": "May2023",
//              "recovery": 62930.0,
//              "Recovery_%": 0.050143426294820714
//          }],
//         [ {
//              "segment": "KA",
//              "month": "Jun2023",
//              "settlement_amount": 1310400.0,
//              "Average_Waiver_%": 0.5515621782264584
//          },
//          {
//              "segment": "KA",
//              "month": "Jun2023",
//              "recovery": 24500.0,
//              "Recovery_%": 0.018696581196581196
//          }],
//          [{
//              "segment": "KA",
//              "month": "Jul2023",
//              "settlement_amount": 710000.0,
//              "Average_Waiver_%": 0.5689635283560003
//          },
//          {
//              "segment": "KA",
//              "month": "Jul2023",
//              "recovery": 80000.0,
//              "Recovery_%": 0.11267605633802817
//          }],
//         [ {
//              "segment": "KA",
//              "month": "Aug2023",
//              "settlement_amount": 1465600.0,
//              "Average_Waiver_%": 0.48909684463255393
//          },
//          {
//              "segment": "KA",
//              "month": "Aug2023",
//              "recovery": 92059.0,
//              "Recovery_%": 0.06281318231441048
//          }],
//         [ {
//              "segment": "KA",
//              "month": "Sep2023",
//              "settlement_amount": 559000.0,
//              "Average_Waiver_%": 0.3206857328007464
//          },
//          {
//              "segment": "KA",
//              "month": "Sep2023",
//              "recovery": 7715.0,
//              "Recovery_%": 0.013801431127012523
//          }],
//          [{
//              "segment": "KA",
//              "month": "Oct2023",
//              "settlement_amount": 785000.0,
//              "Average_Waiver_%": 0.42101052092956465
//          },
//          {
//              "segment": "KA",
//              "month": "Oct2023",
//              "recovery": 35000.0,
//              "Recovery_%": 0.044585987261146494
//          }],
//          [{
//              "segment": "KA",
//              "month": "Nov2023",
//              "settlement_amount": 450000.0,
//              "Average_Waiver_%": 0.5466394344667631
//          },
//          {
//              "segment": "KA",
//              "month": "Nov2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "KA",
//              "month": "Dec2023",
//              "settlement_amount": 1038200.0,
//              "Average_Waiver_%": 0.4394220458158897
//          },
//          {
//              "segment": "KA",
//              "month": "Dec2023",
//              "recovery": 135000.0,
//              "Recovery_%": 0.13003274898863418
//          }],
//         [ {
//              "segment": "KA",
//              "month": "Jan2024",
//              "settlement_amount": 491500.0,
//              "Average_Waiver_%": 0.5336084400591831
//          },
//          {
//              "segment": "KA",
//              "month": "Jan2024",
//              "recovery": 40500.0,
//              "Recovery_%": 0.08240081383519837
//          }],
//         [ {
//              "segment": "KA",
//              "month": "Feb2024",
//              "settlement_amount": 977300.0,
//              "Average_Waiver_%": 0.38165604749296145
//          },
//          {
//              "segment": "KA",
//              "month": "Feb2024",
//              "recovery": 7555.0,
//              "Recovery_%": 0.007730481940038883
//          }],
//         [ {
//              "segment": "KA",
//              "month": "Mar2024",
//              "settlement_amount": 1228604.0,
//              "Average_Waiver_%": 0.4623130346662378
//          },
//          {
//              "segment": "KA",
//              "month": "Mar2024",
//              "recovery": 74029.0,
//              "Recovery_%": 0.06025456534408158
//          }],
//         [ {
//              "segment": "KA",
//              "month": "Apr2024",
//              "settlement_amount": 1601000.0,
//              "Average_Waiver_%": 0.5708456436410319
//          },
//          {
//              "segment": "KA",
//              "month": "Apr2024",
//              "recovery": 65000.0,
//              "Recovery_%": 0.04059962523422861
//          }],
//         [ {
//              "segment": "KA",
//              "month": "May2024",
//              "settlement_amount": 880000.0,
//              "Average_Waiver_%": 0.4959275640084831
//          },
//          {
//              "segment": "KA",
//              "month": "May2024",
//              "recovery": 75000.0,
//              "Recovery_%": 0.08522727272727272
//          }],
//         [ {
//              "segment": "KA",
//              "month": "Jun2024",
//              "settlement_amount": 311000.0,
//              "Average_Waiver_%": 0.5991892372357617
//          },
//          {
//              "segment": "KA",
//              "month": "Jun2024",
//              "recovery": 18432.0,
//              "Recovery_%": 0.05926688102893891
//          }],
//         // [ {
//         //      "segment": "MP",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 27428925.0,
//         //      "Average_Waiver_%": 0.37238070244134164
//         //  },
//         //  {
//         //      "segment": "MP",
//         //      "month": "Feb2023",
//         //      "recovery": 1568126.0,
//         //      "Recovery_%": 0.057170523452887784
//         //  }],
//         // [ {
//         //      "segment": "MP",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 2108500.0,
//         //      "Average_Waiver_%": 0.41143581526351203
//         //  },
//         //  {
//         //      "segment": "MP",
//         //      "month": "Mar2023",
//         //      "recovery": 151201.0,
//         //      "Recovery_%": 0.07171022053592602
//         //  }],
//          [{
//              "segment": "MP",
//              "month": "Apr2023",
//              "settlement_amount": 1051144.0,
//              "Average_Waiver_%": 0.3668579178309378
//          },
//          {
//              "segment": "MP",
//              "month": "Apr2023",
//              "recovery": 12700.0,
//              "Recovery_%": 0.01208207438752445
//          }],
//          [{
//              "segment": "MP",
//              "month": "May2023",
//              "settlement_amount": 870000.0,
//              "Average_Waiver_%": 0.3581775786467801
//          },
//          {
//              "segment": "MP",
//              "month": "May2023",
//              "recovery": 47500.0,
//              "Recovery_%": 0.05459770114942529
//          }],
//          [{
//              "segment": "MP",
//              "month": "Jun2023",
//              "settlement_amount": 828000.0,
//              "Average_Waiver_%": 0.5399341104319803
//          },
//          {
//              "segment": "MP",
//              "month": "Jun2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "MP",
//              "month": "Jul2023",
//              "settlement_amount": 1343000.0,
//              "Average_Waiver_%": 0.46969686663051896
//          },
//          {
//              "segment": "MP",
//              "month": "Jul2023",
//              "recovery": 160570.0,
//              "Recovery_%": 0.11956068503350707
//          }],
//         [ {
//              "segment": "MP",
//              "month": "Aug2023",
//              "settlement_amount": 1836550.0,
//              "Average_Waiver_%": 0.548037840563383
//          },
//          {
//              "segment": "MP",
//              "month": "Aug2023",
//              "recovery": 47132.0,
//              "Recovery_%": 0.025663336146579185
//          }],
//         [ {
//              "segment": "MP",
//              "month": "Sep2023",
//              "settlement_amount": 1858605.0,
//              "Average_Waiver_%": 0.4572248766731711
//          },
//          {
//              "segment": "MP",
//              "month": "Sep2023",
//              "recovery": 54443.0,
//              "Recovery_%": 0.029292399407082195
//          }],
//          [{
//              "segment": "MP",
//              "month": "Oct2023",
//              "settlement_amount": 1344302.0,
//              "Average_Waiver_%": 0.4433923936862112
//          },
//          {
//              "segment": "MP",
//              "month": "Oct2023",
//              "recovery": 8056.0,
//              "Recovery_%": 0.005992701044854504
//          }],
//         [ {
//              "segment": "MP",
//              "month": "Nov2023",
//              "settlement_amount": 2205849.0,
//              "Average_Waiver_%": 0.5784257681869911
//          },
//          {
//              "segment": "MP",
//              "month": "Nov2023",
//              "recovery": 210001.0,
//              "Recovery_%": 0.09520189278595226
//          }],
//          [{
//              "segment": "MP",
//              "month": "Dec2023",
//              "settlement_amount": 2228670.0,
//              "Average_Waiver_%": 0.41626199863065944
//          },
//          {
//              "segment": "MP",
//              "month": "Dec2023",
//              "recovery": 75522.0,
//              "Recovery_%": 0.03388657809366124
//          }],
//          [{
//              "segment": "MP",
//              "month": "Jan2024",
//              "settlement_amount": 1647150.0,
//              "Average_Waiver_%": 0.5791856857071689
//          },
//          {
//              "segment": "MP",
//              "month": "Jan2024",
//              "recovery": 110048.0,
//              "Recovery_%": 0.0668111586680023
//          }],
//         [ {
//              "segment": "MP",
//              "month": "Feb2024",
//              "settlement_amount": 980400.0,
//              "Average_Waiver_%": 0.36767831031069814
//          },
//          {
//              "segment": "MP",
//              "month": "Feb2024",
//              "recovery": 20100.0,
//              "Recovery_%": 0.020501835985312116
//          }],
//         [ {
//              "segment": "MP",
//              "month": "Mar2024",
//              "settlement_amount": 1811000.0,
//              "Average_Waiver_%": 0.40712974420579967
//          },
//          {
//              "segment": "MP",
//              "month": "Mar2024",
//              "recovery": 110085.0,
//              "Recovery_%": 0.06078685808945334
//          }],
//          [{
//              "segment": "MP",
//              "month": "Apr2024",
//              "settlement_amount": 1051000.0,
//              "Average_Waiver_%": 0.37909836169054006
//          },
//          {
//              "segment": "MP",
//              "month": "Apr2024",
//              "recovery": 90000.0,
//              "Recovery_%": 0.08563273073263558
//          }],
//         [ {
//              "segment": "MP",
//              "month": "May2024",
//              "settlement_amount": 1201660.0,
//              "Average_Waiver_%": 0.40818445603047065
//          },
//          {
//              "segment": "MP",
//              "month": "May2024",
//              "recovery": 50350.0,
//              "Recovery_%": 0.04190037115323802
//          }],
//          [{
//              "segment": "MP",
//              "month": "Jun2024",
//              "settlement_amount": 1022100.0,
//              "Average_Waiver_%": 0.5086912419498342
//          },
//          {
//              "segment": "MP",
//              "month": "Jun2024",
//              "recovery": 85000.0,
//              "Recovery_%": 0.08316211720966638
//          }],
//         //  [{
//         //      "segment": "MH",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 52180432.46,
//         //      "Average_Waiver_%": 0.38297377534026056
//         //  },
//         //  {
//         //      "segment": "MH",
//         //      "month": "Feb2023",
//         //      "recovery": 6239959.0,
//         //      "Recovery_%": 0.11958427145622778
//         //  }],
//         // [ {
//         //      "segment": "MH",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 5435980.0,
//         //      "Average_Waiver_%": 0.4731095825973523
//         //  },
//         //  {
//         //      "segment": "MH",
//         //      "month": "Mar2023",
//         //      "recovery": 589952.0,
//         //      "Recovery_%": 0.10852725727467724
//         //  }],
//         [ {
//              "segment": "MH",
//              "month": "Apr2023",
//              "settlement_amount": 2990000.0,
//              "Average_Waiver_%": 0.42422976528126166
//          },
//          {
//              "segment": "MH",
//              "month": "Apr2023",
//              "recovery": 45000.0,
//              "Recovery_%": 0.015050167224080268
//          }],
//         [ {
//              "segment": "MH",
//              "month": "May2023",
//              "settlement_amount": 2476216.0,
//              "Average_Waiver_%": 0.4743719072143357
//          },
//          {
//              "segment": "MH",
//              "month": "May2023",
//              "recovery": 24008.0,
//              "Recovery_%": 0.009695438523941368
//          }],
//         [ {
//              "segment": "MH",
//              "month": "Jun2023",
//              "settlement_amount": 4487000.0,
//              "Average_Waiver_%": 0.5192514830751617
//          },
//          {
//              "segment": "MH",
//              "month": "Jun2023",
//              "recovery": 65000.0,
//              "Recovery_%": 0.014486293737463784
//          }],
//          [{
//              "segment": "MH",
//              "month": "Jul2023",
//              "settlement_amount": 3564233.0,
//              "Average_Waiver_%": 0.5014452743835739
//          },
//          {
//              "segment": "MH",
//              "month": "Jul2023",
//              "recovery": 62186.0,
//              "Recovery_%": 0.017447231985114327
//          }],
//         [ {
//              "segment": "MH",
//              "month": "Aug2023",
//              "settlement_amount": 5810530.0,
//              "Average_Waiver_%": 0.4015364276541155
//          },
//          {
//              "segment": "MH",
//              "month": "Aug2023",
//              "recovery": 151646.0,
//              "Recovery_%": 0.026098479828862427
//          }],
//          [{
//              "segment": "MH",
//              "month": "Sep2023",
//              "settlement_amount": 4275987.0,
//              "Average_Waiver_%": 0.4271848518592158
//          },
//          {
//              "segment": "MH",
//              "month": "Sep2023",
//              "recovery": 291500.0,
//              "Recovery_%": 0.06817139528253945
//          }],
//         [ {
//              "segment": "MH",
//              "month": "Oct2023",
//              "settlement_amount": 4986000.0,
//              "Average_Waiver_%": 0.4567547706922768
//          },
//          {
//              "segment": "MH",
//              "month": "Oct2023",
//              "recovery": 172001.0,
//              "Recovery_%": 0.03449679101484156
//          }],
//         [ {
//              "segment": "MH",
//              "month": "Nov2023",
//              "settlement_amount": 4688500.0,
//              "Average_Waiver_%": 0.41446146895770225
//          },
//          {
//              "segment": "MH",
//              "month": "Nov2023",
//              "recovery": 269700.0,
//              "Recovery_%": 0.05752372827130212
//          }],
//         [ {
//              "segment": "MH",
//              "month": "Dec2023",
//              "settlement_amount": 3589044.0,
//              "Average_Waiver_%": 0.4443314768795916
//          },
//          {
//              "segment": "MH",
//              "month": "Dec2023",
//              "recovery": 72500.0,
//              "Recovery_%": 0.02020036533405553
//          }],
//         [ {
//              "segment": "MH",
//              "month": "Jan2024",
//              "settlement_amount": 4950351.0,
//              "Average_Waiver_%": 0.41400857543654257
//          },
//          {
//              "segment": "MH",
//              "month": "Jan2024",
//              "recovery": 660919.0,
//              "Recovery_%": 0.13350952286009618
//          }],
//         [ {
//              "segment": "MH",
//              "month": "Feb2024",
//              "settlement_amount": 1578000.0,
//              "Average_Waiver_%": 0.48117206342808916
//          },
//          {
//              "segment": "MH",
//              "month": "Feb2024",
//              "recovery": 169250.0,
//              "Recovery_%": 0.10725602027883396
//          }],
//         [ {
//              "segment": "MH",
//              "month": "Mar2024",
//              "settlement_amount": 2848091.0,
//              "Average_Waiver_%": 0.42287939688705584
//          },
//          {
//              "segment": "MH",
//              "month": "Mar2024",
//              "recovery": 212261.0,
//              "Recovery_%": 0.0745274641856598
//          }],
//          [{
//              "segment": "MH",
//              "month": "Apr2024",
//              "settlement_amount": 2281000.0,
//              "Average_Waiver_%": 0.398308845252559
//          },
//          {
//              "segment": "MH",
//              "month": "Apr2024",
//              "recovery": 114235.0,
//              "Recovery_%": 0.050081104778605876
//          }],
//         [ {
//              "segment": "MH",
//              "month": "May2024",
//              "settlement_amount": 3914686.0,
//              "Average_Waiver_%": 0.4158738336240036
//          },
//          {
//              "segment": "MH",
//              "month": "May2024",
//              "recovery": 171551.0,
//              "Recovery_%": 0.04382241640836583
//          }],
//         [ {
//              "segment": "MH",
//              "month": "Jun2024",
//              "settlement_amount": 3049420.0,
//              "Average_Waiver_%": 0.47359728893530695
//          },
//          {
//              "segment": "MH",
//              "month": "Jun2024",
//              "recovery": 40826.0,
//              "Recovery_%": 0.013388119708010049
//          }],
//         //  [{
//         //      "segment": "RJ",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 20310730.0,
//         //      "Average_Waiver_%": 0.35100568973166385
//         //  },
//         //  {
//         //      "segment": "RJ",
//         //      "month": "Feb2023",
//         //      "recovery": 1590973.0,
//         //      "Recovery_%": 0.07833165031488282
//         //  }],
//         // [ {
//         //      "segment": "RJ",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 382876.0,
//         //      "Average_Waiver_%": 0.348031753429798
//         //  },
//         //  {
//         //      "segment": "RJ",
//         //      "month": "Mar2023",
//         //      "recovery": 185000.0,
//         //      "Recovery_%": 0.48318515655199074
//         //  }],
//          [{
//              "segment": "RJ",
//              "month": "Apr2023",
//              "settlement_amount": 720500.0,
//              "Average_Waiver_%": 0.4108982980461327
//          },
//          {
//              "segment": "RJ",
//              "month": "Apr2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "RJ",
//              "month": "May2023",
//              "settlement_amount": 1075000.0,
//              "Average_Waiver_%": 0.29775214909468833
//          },
//          {
//              "segment": "RJ",
//              "month": "May2023",
//              "recovery": 91933.0,
//              "Recovery_%": 0.08551906976744186
//          }],
//         [ {
//              "segment": "RJ",
//              "month": "Jun2023",
//              "settlement_amount": 432500.0,
//              "Average_Waiver_%": 0.44118771404936
//          },
//          {
//              "segment": "RJ",
//              "month": "Jun2023",
//              "recovery": 35477.0,
//              "Recovery_%": 0.08202774566473989
//          }],
//          [{
//              "segment": "RJ",
//              "month": "Jul2023",
//              "settlement_amount": 412000.0,
//              "Average_Waiver_%": 0.34073660522019567
//          },
//          {
//              "segment": "RJ",
//              "month": "Jul2023",
//              "recovery": 30000.0,
//              "Recovery_%": 0.07281553398058252
//          }],
//          [{
//              "segment": "RJ",
//              "month": "Aug2023",
//              "settlement_amount": 180000.0,
//              "Average_Waiver_%": 0.3115176054347777
//          },
//          {
//              "segment": "RJ",
//              "month": "Aug2023",
//              "recovery": 26000.0,
//              "Recovery_%": 0.14444444444444443
//          }],
//         [ {
//              "segment": "RJ",
//              "month": "Sep2023",
//              "settlement_amount": 628500.0,
//              "Average_Waiver_%": 0.31047653341297077
//          },
//          {
//              "segment": "RJ",
//              "month": "Sep2023",
//              "recovery": 115725.0,
//              "Recovery_%": 0.18412887828162292
//          }],
//          [{
//              "segment": "RJ",
//              "month": "Oct2023",
//              "settlement_amount": 210000.0,
//              "Average_Waiver_%": 0.3473135413348927
//          },
//          {
//              "segment": "RJ",
//              "month": "Oct2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "RJ",
//              "month": "Nov2023",
//              "settlement_amount": 506000.0,
//              "Average_Waiver_%": 0.4163527050480503
//          },
//          {
//              "segment": "RJ",
//              "month": "Nov2023",
//              "recovery": 36250.0,
//              "Recovery_%": 0.0716403162055336
//          }],
//         [ {
//              "segment": "RJ",
//              "month": "Dec2023",
//              "settlement_amount": 182000.0,
//              "Average_Waiver_%": 0.6207498460318686
//          },
//          {
//              "segment": "RJ",
//              "month": "Dec2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "RJ",
//              "month": "Jan2024",
//              "settlement_amount": 915500.0,
//              "Average_Waiver_%": 0.3884840215397437
//          },
//          {
//              "segment": "RJ",
//              "month": "Jan2024",
//              "recovery": 10000.0,
//              "Recovery_%": 0.010922992900054615
//          }],
//         [ {
//              "segment": "RJ",
//              "month": "Feb2024",
//              "settlement_amount": 421000.0,
//              "Average_Waiver_%": 0.37842017003595746
//          },
//          {
//              "segment": "RJ",
//              "month": "Feb2024",
//              "recovery": 5000.0,
//              "Recovery_%": 0.011876484560570071
//          }],
//          [{
//              "segment": "RJ",
//              "month": "Mar2024",
//              "settlement_amount": 212500.0,
//              "Average_Waiver_%": 0.25026104582477604
//          },
//          {
//              "segment": "RJ",
//              "month": "Mar2024",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "RJ",
//              "month": "Apr2024",
//              "settlement_amount": 410000.0,
//              "Average_Waiver_%": 0.32013337287266785
//          },
//          {
//              "segment": "RJ",
//              "month": "Apr2024",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//          [{
//              "segment": "RJ",
//              "month": "May2024",
//              "settlement_amount": 499000.0,
//              "Average_Waiver_%": 0.2941084646201987
//          },
//          {
//              "segment": "RJ",
//              "month": "May2024",
//              "recovery": 19739.0,
//              "Recovery_%": 0.03955711422845691
//          }],
//         [ {
//              "segment": "RJ",
//              "month": "Jun2024",
//              "settlement_amount": 1425500.0,
//              "Average_Waiver_%": 0.555500022872728
//          },
//          {
//              "segment": "RJ",
//              "month": "Jun2024",
//              "recovery": 62426.0,
//              "Recovery_%": 0.04379235356015433
//          }],
//         //  [{
//         //      "segment": "TN",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 59243155.46,
//         //      "Average_Waiver_%": 0.3876057341184676
//         //  },
//         //  {
//         //      "segment": "TN",
//         //      "month": "Feb2023",
//         //      "recovery": 4063295.7,
//         //      "Recovery_%": 0.06858675349835933
//         //  }],
//         //  [{
//         //      "segment": "TN",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 1419304.0,
//         //      "Average_Waiver_%": 0.5646878843625598
//         //  },
//         //  {
//         //      "segment": "TN",
//         //      "month": "Mar2023",
//         //      "recovery": 364666.0,
//         //      "Recovery_%": 0.25693297559930783
//         //  }],
//          [{
//              "segment": "TN",
//              "month": "Apr2023",
//              "settlement_amount": 1798500.0,
//              "Average_Waiver_%": 0.4169064129666392
//          },
//          {
//              "segment": "TN",
//              "month": "Apr2023",
//              "recovery": 73000.0,
//              "Recovery_%": 0.040589380038921326
//          }],
//        [  {
//              "segment": "TN",
//              "month": "May2023",
//              "settlement_amount": 1329200.0,
//              "Average_Waiver_%": 0.4274707016221796
//          },
//          {
//              "segment": "TN",
//              "month": "May2023",
//              "recovery": 33789.0,
//              "Recovery_%": 0.025420553716521216
//          }],
//         [ {
//              "segment": "TN",
//              "month": "Jun2023",
//              "settlement_amount": 1111000.0,
//              "Average_Waiver_%": 0.4216577044921928
//          },
//          {
//              "segment": "TN",
//              "month": "Jun2023",
//              "recovery": 19715.0,
//              "Recovery_%": 0.017745274527452747
//          }],
//          [{
//              "segment": "TN",
//              "month": "Jul2023",
//              "settlement_amount": 1469679.0,
//              "Average_Waiver_%": 0.5222781149485702
//          },
//          {
//              "segment": "TN",
//              "month": "Jul2023",
//              "recovery": 40978.0,
//              "Recovery_%": 0.02788227905549443
//          }],
//          [{
//              "segment": "TN",
//              "month": "Aug2023",
//              "settlement_amount": 1683055.0,
//              "Average_Waiver_%": 0.48282167025048917
//          },
//          {
//              "segment": "TN",
//              "month": "Aug2023",
//              "recovery": 117904.0,
//              "Recovery_%": 0.07005356331195356
//          }],
//         [ {
//              "segment": "TN",
//              "month": "Sep2023",
//              "settlement_amount": 980500.0,
//              "Average_Waiver_%": 0.4139505061101164
//          },
//          {
//              "segment": "TN",
//              "month": "Sep2023",
//              "recovery": 74718.0,
//              "Recovery_%": 0.07620397756246813
//          }],
//          [{
//              "segment": "TN",
//              "month": "Oct2023",
//              "settlement_amount": 2337500.0,
//              "Average_Waiver_%": 0.5108680964211331
//          },
//          {
//              "segment": "TN",
//              "month": "Oct2023",
//              "recovery": 15000.0,
//              "Recovery_%": 0.006417112299465241
//          }],
//          [{
//              "segment": "TN",
//              "month": "Nov2023",
//              "settlement_amount": 1120000.0,
//              "Average_Waiver_%": 0.4629753679163974
//          },
//          {
//              "segment": "TN",
//              "month": "Nov2023",
//              "recovery": 32588.0,
//              "Recovery_%": 0.02909642857142857
//          }],
//          [{
//              "segment": "TN",
//              "month": "Dec2023",
//              "settlement_amount": 2069000.0,
//              "Average_Waiver_%": 0.40253309230583034
//          },
//          {
//              "segment": "TN",
//              "month": "Dec2023",
//              "recovery": 73000.0,
//              "Recovery_%": 0.03528274528757854
//          }],
//         [ {
//              "segment": "TN",
//              "month": "Jan2024",
//              "settlement_amount": 1126800.0,
//              "Average_Waiver_%": 0.3717136017162058
//          },
//          {
//              "segment": "TN",
//              "month": "Jan2024",
//              "recovery": 60000.0,
//              "Recovery_%": 0.05324813631522897
//          }],
//          [{
//              "segment": "TN",
//              "month": "Feb2024",
//              "settlement_amount": 1427500.0,
//              "Average_Waiver_%": 0.4514645985972117
//          },
//          {
//              "segment": "TN",
//              "month": "Feb2024",
//              "recovery": 53500.0,
//              "Recovery_%": 0.037478108581436076
//          }],
//         [ {
//              "segment": "TN",
//              "month": "Mar2024",
//              "settlement_amount": 2757200.0,
//              "Average_Waiver_%": 0.4247898409189315
//          },
//          {
//              "segment": "TN",
//              "month": "Mar2024",
//              "recovery": 58750.0,
//              "Recovery_%": 0.02130784854199913
//          }],
//          [{
//              "segment": "TN",
//              "month": "Apr2024",
//              "settlement_amount": 1747900.0,
//              "Average_Waiver_%": 0.6015871051113613
//          },
//          {
//              "segment": "TN",
//              "month": "Apr2024",
//              "recovery": 11200.0,
//              "Recovery_%": 0.006407689227072487
//          }],
//         [ {
//              "segment": "TN",
//              "month": "May2024",
//              "settlement_amount": 580000.0,
//              "Average_Waiver_%": 0.6750493597837691
//          },
//          {
//              "segment": "TN",
//              "month": "May2024",
//              "recovery": 12226.0,
//              "Recovery_%": 0.021079310344827587
//          }],
//          [{
//              "segment": "TN",
//              "month": "Jun2024",
//              "settlement_amount": 1329664.0,
//              "Average_Waiver_%": 0.4796188829374868
//          },
//          {
//              "segment": "TN",
//              "month": "Jun2024",
//              "recovery": 24001.0,
//              "Recovery_%": 0.01805042476896419
//          }],
//         // [ {
//         //      "segment": "TG",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 25878793.0,
//         //      "Average_Waiver_%": 0.3882400149184733
//         //  },
//         //  {
//         //      "segment": "TG",
//         //      "month": "Feb2023",
//         //      "recovery": 2231203.0,
//         //      "Recovery_%": 0.08621742907406849
//         //  }],
//         // [ {
//         //      "segment": "TG",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 653900.0,
//         //      "Average_Waiver_%": 0.4212633103647872
//         //  },
//         //  {
//         //      "segment": "TG",
//         //      "month": "Mar2023",
//         //      "recovery": 118400.0,
//         //      "Recovery_%": 0.18106744150481724
//         //  }],
//          [{
//              "segment": "TG",
//              "month": "Apr2023",
//              "settlement_amount": 464850.0,
//              "Average_Waiver_%": 0.4446995770948636
//          },
//          {
//              "segment": "TG",
//              "month": "Apr2023",
//              "recovery": 15250.0,
//              "Recovery_%": 0.032806281596213835
//          }],
//         [ {
//              "segment": "TG",
//              "month": "May2023",
//              "settlement_amount": 1472858.0,
//              "Average_Waiver_%": 0.36803340732176026
//          },
//          {
//              "segment": "TG",
//              "month": "May2023",
//              "recovery": 9665.0,
//              "Recovery_%": 0.006562071835845683
//          }],
//          [{
//              "segment": "TG",
//              "month": "Jun2023",
//              "settlement_amount": 1728812.0,
//              "Average_Waiver_%": 0.44547377053803294
//          },
//          {
//              "segment": "TG",
//              "month": "Jun2023",
//              "recovery": 165000.0,
//              "Recovery_%": 0.09544126255486426
//          }],
//          [{
//              "segment": "TG",
//              "month": "Jul2023",
//              "settlement_amount": 1807000.0,
//              "Average_Waiver_%": 0.5420978457031612
//          },
//          {
//              "segment": "TG",
//              "month": "Jul2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "TG",
//              "month": "Aug2023",
//              "settlement_amount": 440000.0,
//              "Average_Waiver_%": 0.5782329691959396
//          },
//          {
//              "segment": "TG",
//              "month": "Aug2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//          [{
//              "segment": "TG",
//              "month": "Sep2023",
//              "settlement_amount": 1592000.0,
//              "Average_Waiver_%": 0.41317972522312885
//          },
//          {
//              "segment": "TG",
//              "month": "Sep2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//          [{
//              "segment": "TG",
//              "month": "Oct2023",
//              "settlement_amount": 1505000.0,
//              "Average_Waiver_%": 0.4487428329396239
//          },
//          {
//              "segment": "TG",
//              "month": "Oct2023",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         [ {
//              "segment": "TG",
//              "month": "Nov2023",
//              "settlement_amount": 1101000.0,
//              "Average_Waiver_%": 0.4425245052767952
//          },
//          {
//              "segment": "TG",
//              "month": "Nov2023",
//              "recovery": 60000.0,
//              "Recovery_%": 0.05449591280653951
//          }],
//         [ {
//              "segment": "TG",
//              "month": "Dec2023",
//              "settlement_amount": 597000.0,
//              "Average_Waiver_%": 0.3621154237150786
//          },
//          {
//              "segment": "TG",
//              "month": "Dec2023",
//              "recovery": 31621.0,
//              "Recovery_%": 0.052966499162479065
//          }],
//         [ {
//              "segment": "TG",
//              "month": "Jan2024",
//              "settlement_amount": 690000.0,
//              "Average_Waiver_%": 0.4892146670981398
//          },
//          {
//              "segment": "TG",
//              "month": "Jan2024",
//              "recovery": 40000.0,
//              "Recovery_%": 0.057971014492753624
//          }],
//         [ {
//              "segment": "TG",
//              "month": "Feb2024",
//              "settlement_amount": 765500.0,
//              "Average_Waiver_%": 0.3552680037630098
//          },
//          {
//              "segment": "TG",
//              "month": "Feb2024",
//              "recovery": 38868.0,
//              "Recovery_%": 0.05077465708687132
//          }],
//          [{
//              "segment": "TG",
//              "month": "Mar2024",
//              "settlement_amount": 1162650.0,
//              "Average_Waiver_%": 0.4712933102398463
//          },
//          {
//              "segment": "TG",
//              "month": "Mar2024",
//              "recovery": 185000.0,
//              "Recovery_%": 0.159119253429665
//          }],
//         [ {
//              "segment": "TG",
//              "month": "Apr2024",
//              "settlement_amount": 1446000.0,
//              "Average_Waiver_%": 0.4387205736935953
//          },
//          {
//              "segment": "TG",
//              "month": "Apr2024",
//              "recovery": 62948.0,
//              "Recovery_%": 0.04353250345781466
//          }],
//          [{
//              "segment": "TG",
//              "month": "May2024",
//              "settlement_amount": 1770000.0,
//              "Average_Waiver_%": 0.4072319189114282
//          },
//          {
//              "segment": "TG",
//              "month": "May2024",
//              "recovery": 121296.0,
//              "Recovery_%": 0.06852881355932203
//          }],
//         [ {
//              "segment": "TG",
//              "month": "Jun2024",
//              "settlement_amount": 1455000.0,
//              "Average_Waiver_%": 0.44413606512198317
//          },
//          {
//              "segment": "TG",
//              "month": "Jun2024",
//              "recovery": 0.0,
//              "Recovery_%": 0.0
//          }],
//         //  [{
//         //      "segment": "UP",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 37776049.0,
//         //      "Average_Waiver_%": 0.3270237966497088
//         //  },
//         //  {
//         //      "segment": "UP",
//         //      "month": "Feb2023",
//         //      "recovery": 1653123.0,
//         //      "Recovery_%": 0.04376114082232369
//         //  }],
//         // [ {
//         //      "segment": "UP",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 1690300.0,
//         //      "Average_Waiver_%": 0.40617070158639274
//         //  },
//         //  {
//         //      "segment": "UP",
//         //      "month": "Mar2023",
//         //      "recovery": 139000.0,
//         //      "Recovery_%": 0.08223392297225345
//         //  }],
//         [ {
//              "segment": "UP",
//              "month": "Apr2023",
//              "settlement_amount": 801410.0,
//              "Average_Waiver_%": 0.39863672319131227
//          },
//          {
//              "segment": "UP",
//              "month": "Apr2023",
//              "recovery": 23000.0,
//              "Recovery_%": 0.0286994172770492
//          }],
//          [{
//              "segment": "UP",
//              "month": "May2023",
//              "settlement_amount": 1349820.0,
//              "Average_Waiver_%": 0.36434096198775695
//          },
//          {
//              "segment": "UP",
//              "month": "May2023",
//              "recovery": 255094.0,
//              "Recovery_%": 0.18898371634736483
//          }],
//         [ {
//              "segment": "UP",
//              "month": "Jun2023",
//              "settlement_amount": 1552000.0,
//              "Average_Waiver_%": 0.4424800156409843
//          },
//          {
//              "segment": "UP",
//              "month": "Jun2023",
//              "recovery": 9585.0,
//              "Recovery_%": 0.00617590206185567
//          }],
//         [ {
//              "segment": "UP",
//              "month": "Jul2023",
//              "settlement_amount": 939730.0,
//              "Average_Waiver_%": 0.40894578578132235
//          },
//          {
//              "segment": "UP",
//              "month": "Jul2023",
//              "recovery": 5000.0,
//              "Recovery_%": 0.005320677215796026
//          }],
//         [ {
//              "segment": "UP",
//              "month": "Aug2023",
//              "settlement_amount": 1046000.0,
//              "Average_Waiver_%": 0.3352634443413675
//          },
//          {
//              "segment": "UP",
//              "month": "Aug2023",
//              "recovery": 57144.0,
//              "Recovery_%": 0.05463097514340344
//          }],
//          [{
//              "segment": "UP",
//              "month": "Sep2023",
//              "settlement_amount": 2813460.0,
//              "Average_Waiver_%": 0.4320078870114915
//          },
//          {
//              "segment": "UP",
//              "month": "Sep2023",
//              "recovery": 158763.0,
//              "Recovery_%": 0.05642980529312661
//          }],
//          [{
//              "segment": "UP",
//              "month": "Oct2023",
//              "settlement_amount": 1575300.0,
//              "Average_Waiver_%": 0.3919662099996156
//          },
//          {
//              "segment": "UP",
//              "month": "Oct2023",
//              "recovery": 53000.0,
//              "Recovery_%": 0.03364438519647051
//          }],
//         [ {
//              "segment": "UP",
//              "month": "Nov2023",
//              "settlement_amount": 2524144.0,
//              "Average_Waiver_%": 0.45118140446456606
//          },
//          {
//              "segment": "UP",
//              "month": "Nov2023",
//              "recovery": 67500.0,
//              "Recovery_%": 0.026741738981611193
//          }],
//        [  {
//              "segment": "UP",
//              "month": "Dec2023",
//              "settlement_amount": 2409500.0,
//              "Average_Waiver_%": 0.375089857721871
//          },
//          {
//              "segment": "UP",
//              "month": "Dec2023",
//              "recovery": 144778.0,
//              "Recovery_%": 0.06008632496368541
//          }],
//          [{
//              "segment": "UP",
//              "month": "Jan2024",
//              "settlement_amount": 1122000.0,
//              "Average_Waiver_%": 0.3680687753499578
//          },
//          {
//              "segment": "UP",
//              "month": "Jan2024",
//              "recovery": 40000.0,
//              "Recovery_%": 0.035650623885918005
//          }],
//          [{
//              "segment": "UP",
//              "month": "Feb2024",
//              "settlement_amount": 1936000.0,
//              "Average_Waiver_%": 0.4079244654021351
//          },
//          {
//              "segment": "UP",
//              "month": "Feb2024",
//              "recovery": 75000.0,
//              "Recovery_%": 0.038739669421487606
//          }],
//       [   {
//              "segment": "UP",
//              "month": "Mar2024",
//              "settlement_amount": 3310400.0,
//              "Average_Waiver_%": 0.34585277582034424
//          },
//          {
//              "segment": "UP",
//              "month": "Mar2024",
//              "recovery": 163033.0,
//              "Recovery_%": 0.04924873127114548
//          }],
//          [{
//              "segment": "UP",
//              "month": "Apr2024",
//              "settlement_amount": 1618500.0,
//              "Average_Waiver_%": 0.382885596277261
//          },
//          {
//              "segment": "UP",
//              "month": "Apr2024",
//              "recovery": 2500.0,
//              "Recovery_%": 0.0015446400988569664
//          }],
//         [ {
//              "segment": "UP",
//              "month": "May2024",
//              "settlement_amount": 3998390.0,
//              "Average_Waiver_%": 0.368130056814798
//          },
//          {
//              "segment": "UP",
//              "month": "May2024",
//              "recovery": 125500.0,
//              "Recovery_%": 0.031387633522492804
//          }],
//         [ {
//              "segment": "UP",
//              "month": "Jun2024",
//              "settlement_amount": 855100.0,
//              "Average_Waiver_%": 0.39422823856550127
//          },
//          {
//              "segment": "UP",
//              "month": "Jun2024",
//              "recovery": 13000.0,
//              "Recovery_%": 0.01520290024558531
//          }],
//         //  [{
//         //      "segment": "OTHERS",
//         //      "month": "Feb2023",
//         //      "settlement_amount": 111127864.0,
//         //      "Average_Waiver_%": 0.35928484252288173
//         //  },
//         //  {
//         //      "segment": "OTHERS",
//         //      "month": "Feb2023",
//         //      "recovery": 7897811.0,
//         //      "Recovery_%": 0.0710695834124914
//         //  }],
//         // [ {
//         //      "segment": "OTHERS",
//         //      "month": "Mar2023",
//         //      "settlement_amount": 2801817.0,
//         //      "Average_Waiver_%": 0.41549302117877185
//         //  },
//         //  {
//         //      "segment": "OTHERS",
//         //      "month": "Mar2023",
//         //      "recovery": 665464.0,
//         //      "Recovery_%": 0.23751158623136343
//         //  }],
//         [ {
//              "segment": "OTHERS",
//              "month": "Apr2023",
//              "settlement_amount": 2408640.0,
//              "Average_Waiver_%": 0.3638864919250085
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Apr2023",
//              "recovery": 15000.0,
//              "Recovery_%": 0.006227580709445994
//          }],
//         [ {
//              "segment": "OTHERS",
//              "month": "May2023",
//              "settlement_amount": 4566440.0,
//              "Average_Waiver_%": 0.3794096820587677
//          },
//          {
//              "segment": "OTHERS",
//              "month": "May2023",
//              "recovery": 371345.0,
//              "Recovery_%": 0.08132045970164943
//          }],
//         [ {
//              "segment": "OTHERS",
//              "month": "Jun2023",
//              "settlement_amount": 3350398.09,
//              "Average_Waiver_%": 0.3801741386229103
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Jun2023",
//              "recovery": 291485.12,
//              "Recovery_%": 0.08700014510812952
//          }],
//         [ {
//              "segment": "OTHERS",
//              "month": "Jul2023",
//              "settlement_amount": 3577500.0,
//              "Average_Waiver_%": 0.3765916309745522
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Jul2023",
//              "recovery": 210495.0,
//              "Recovery_%": 0.05883857442348008
//          }],
//         [ {
//              "segment": "OTHERS",
//              "month": "Aug2023",
//              "settlement_amount": 6070594.0,
//              "Average_Waiver_%": 0.36716751231334693
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Aug2023",
//              "recovery": 573001.0,
//              "Recovery_%": 0.09438960997885874
//          }],
//         [ {
//              "segment": "OTHERS",
//              "month": "Sep2023",
//              "settlement_amount": 4740625.0,
//              "Average_Waiver_%": 0.3997965944561806
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Sep2023",
//              "recovery": 286934.0,
//              "Recovery_%": 0.06052661832564272
//          }],
//         [ {
//              "segment": "OTHERS",
//              "month": "Oct2023",
//              "settlement_amount": 4251500.0,
//              "Average_Waiver_%": 0.4462166759516784
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Oct2023",
//              "recovery": 600000.0,
//              "Recovery_%": 0.1411266611784076
//          }],
//          [{
//              "segment": "OTHERS",
//              "month": "Nov2023",
//              "settlement_amount": 5546622.0,
//              "Average_Waiver_%": 0.3760183964613264
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Nov2023",
//              "recovery": 110007.0,
//              "Recovery_%": 0.0198331525025502
//          }],
//          [{
//              "segment": "OTHERS",
//              "month": "Dec2023",
//              "settlement_amount": 4196650.0,
//              "Average_Waiver_%": 0.4197361717244861
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Dec2023",
//              "recovery": 264688.0,
//              "Recovery_%": 0.06307125921866251
//          }],
//          [{
//              "segment": "OTHERS",
//              "month": "Jan2024",
//              "settlement_amount": 6067760.0,
//              "Average_Waiver_%": 0.41609314533098246
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Jan2024",
//              "recovery": 236525.0,
//              "Recovery_%": 0.03898061228525848
//          }],
//          [{
//              "segment": "OTHERS",
//              "month": "Feb2024",
//              "settlement_amount": 6578770.0,
//              "Average_Waiver_%": 0.41131522772730733
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Feb2024",
//              "recovery": 215915.0,
//              "Recovery_%": 0.03281996482625171
//          }],
//          [{
//              "segment": "OTHERS",
//              "month": "Mar2024",
//              "settlement_amount": 4829200.0,
//              "Average_Waiver_%": 0.42278942733039
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Mar2024",
//              "recovery": 337549.99999999994,
//              "Recovery_%": 0.06989770562411993
//          }],
//         [ {
//              "segment": "OTHERS",
//              "month": "Apr2024",
//              "settlement_amount": 4869015.0,
//              "Average_Waiver_%": 0.38788152147707905
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Apr2024",
//              "recovery": 146732.0,
//              "Recovery_%": 0.03013586936988282
//          }],
//          [{
//              "segment": "OTHERS",
//              "month": "May2024",
//              "settlement_amount": 8402714.0,
//              "Average_Waiver_%": 0.4138586361238008
//          },
//          {
//              "segment": "OTHERS",
//              "month": "May2024",
//              "recovery": 922274.0,
//              "Recovery_%": 0.1097590611795189
//          }],
//          [{
//              "segment": "OTHERS",
//              "month": "Jun2024",
//              "settlement_amount": 3829500.0,
//              "Average_Waiver_%": 0.4277055683132574
//          },
//          {
//              "segment": "OTHERS",
//              "month": "Jun2024",
//              "recovery": 33000.0,
//              "Recovery_%": 0.008617312965139052
//          }]
//      ],

//   "pos" :[
//     // [{
//     //     "segment": "<1Lakh",
//     //     "month": "Feb2023",
//     //     "settlement_amount": 18777111.82,
//     //     "Average_Waiver_%": 0.49207040845612277
//     // },
//     // {
//     //     "segment": "<1Lakh",
//     //     "month": "Feb2023",
//     //     "recovery": 2185529.7,
//     //     "Recovery_%": 0.11639328353320741
//     // }],
// //    [ {
// //         "segment": "<1Lakh",
// //         "month": "Mar2023",
// //         "settlement_amount": 886634.0,
// //         "Average_Waiver_%": 0.5182815126837843
// //     },
// //     {
// //         "segment": "<1Lakh",
// //         "month": "Mar2023",
// //         "recovery": 430950.0,
// //         "Recovery_%": 0.48605174175589927
// //     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "Apr2023",
//         "settlement_amount": 681050.0,
//         "Average_Waiver_%": 0.46312690734690776
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Apr2023",
//         "recovery": 13000.0,
//         "Recovery_%": 0.019088172674546655
//     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "May2023",
//         "settlement_amount": 674964.0,
//         "Average_Waiver_%": 0.5753218021045712
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "May2023",
//         "recovery": 153834.0,
//         "Recovery_%": 0.2279143776556972
//     }],
//     [{
//         "segment": "<1Lakh",
//         "month": "Jun2023",
//         "settlement_amount": 480742.08999999997,
//         "Average_Waiver_%": 0.5689144480482268
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Jun2023",
//         "recovery": 64843.119999999995,
//         "Recovery_%": 0.13488130402728
//     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "Jul2023",
//         "settlement_amount": 863330.0,
//         "Average_Waiver_%": 0.5442667574734077
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Jul2023",
//         "recovery": 127745.0,
//         "Recovery_%": 0.1479677527712462
//     }],
//     [{
//         "segment": "<1Lakh",
//         "month": "Aug2023",
//         "settlement_amount": 429143.0,
//         "Average_Waiver_%": 0.47534292400446926
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Aug2023",
//         "recovery": 44900.0,
//         "Recovery_%": 0.10462712895235388
//     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "Sep2023",
//         "settlement_amount": 654300.0,
//         "Average_Waiver_%": 0.4895673812095763
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "sep2023",
//         "recovery": 96600.0,
//         "Recovery_%": 0.14763869784502523
//     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "Oct2023",
//         "settlement_amount": 575000.0,
//         "Average_Waiver_%": 0.6498117258107783
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Oct2023",
//         "recovery": 10000.0,
//         "Recovery_%": 0.017391304347826087
//     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "Nov2023",
//         "settlement_amount": 233684.0,
//         "Average_Waiver_%": 0.47060463988335455
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Nov2023",
//         "recovery": 40000.0,
//         "Recovery_%": 0.17117132537957241
//     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "Dec2023",
//         "settlement_amount": 798000.0,
//         "Average_Waiver_%": 0.5982023479712023
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Dec2023",
//         "recovery": 58325.0,
//         "Recovery_%": 0.07308897243107769
//     }],
//     [{
//         "segment": "<1Lakh",
//         "month": "Jan2024",
//         "settlement_amount": 405600.0,
//         "Average_Waiver_%": 0.42852810032341515
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Jan2024",
//         "recovery": 6010.0,
//         "Recovery_%": 0.014817554240631164
//     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "Feb2024",
//         "settlement_amount": 311800.0,
//         "Average_Waiver_%": 0.535215497533786
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Feb2024",
//         "recovery": 47000.0,
//         "Recovery_%": 0.1507376523412444
//     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "Mar2024",
//         "settlement_amount": 634300.0,
//         "Average_Waiver_%": 0.50538349751498
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Mar2024",
//         "recovery": 60000.0,
//         "Recovery_%": 0.09459246413369068
//     }],
//     [{
//         "segment": "<1Lakh",
//         "month": "Apr2024",
//         "settlement_amount": 823750.0,
//         "Average_Waiver_%": 1.0606307252572942
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Apr2024",
//         "recovery": 48000.0,
//         "Recovery_%": 0.0582701062215478
//     }],
//     [{
//         "segment": "<1Lakh",
//         "month": "May2024",
//         "settlement_amount": 322200.0,
//         "Average_Waiver_%": 0.4658749154770312
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "May2024",
//         "recovery": 25500.0,
//         "Recovery_%": 0.07914338919925512
//     }],
//    [ {
//         "segment": "<1Lakh",
//         "month": "Jun2024",
//         "settlement_amount": 971000.0,
//         "Average_Waiver_%": 2.124368448888548
//     },
//     {
//         "segment": "<1Lakh",
//         "month": "Jun2024",
//         "recovery": 34432.0,
//         "Recovery_%": 0.03546035015447992
//     }],
//     // [{
//     //     "segment": ">=1 - 5Lakh",
//     //     "month": "Feb2023",
//     //     "settlement_amount": 275500268.46,
//     //     "Average_Waiver_%": 0.38224570230754173
//     // },
//     // {
//     //     "segment": ">=1 - 5Lakh",
//     //     "month": "Feb2023",
//     //     "recovery": 20451855.0,
//     //     "Recovery_%": 0.0742353360100969
//     // }],
//     // [{
//     //     "segment": ">=1 - 5Lakh",
//     //     "month": "Mar2023",
//     //     "settlement_amount": 12030393.0,
//     //     "Average_Waiver_%": 0.43760773671926306
//     // },
//     // {
//     //     "segment": ">=1 - 5Lakh",
//     //     "month": "Mar2023",
//     //     "recovery": 1505451.0,
//     //     "Recovery_%": 0.12513730848194235
//     // }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "Apr2023",
//         "settlement_amount": 8608050.0,
//         "Average_Waiver_%": 0.41175648396889497
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Apr2023",
//         "recovery": 241244.0,
//         "Recovery_%": 0.02802539483390547
//     }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "May2023",
//         "settlement_amount": 11425780.0,
//         "Average_Waiver_%": 0.3962412193478055
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "May2023",
//         "recovery": 1096566.0,
//         "Recovery_%": 0.09597296639704248
//     }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "Jun2023",
//         "settlement_amount": 9631568.0,
//         "Average_Waiver_%": 0.44272041684114466
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Jun2023",
//         "recovery": 428217.0,
//         "Recovery_%": 0.044459739058064066
//     }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "Jul2023",
//         "settlement_amount": 10893342.0,
//         "Average_Waiver_%": 0.4721598029048663
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Jul2023",
//         "recovery": 580484.0,
//         "Recovery_%": 0.05328796250039703
//     }],
//    [ {
//         "segment": ">=1 - 5Lakh",
//         "month": "Aug2023",
//         "settlement_amount": 11548672.0,
//         "Average_Waiver_%": 0.45078644937121065
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Aug2023",
//         "recovery": 804075.0,
//         "Recovery_%": 0.06962488847202518
//     }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "Sep2023",
//         "settlement_amount": 13759477.0,
//         "Average_Waiver_%": 0.4167804550595358
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Sep2023",
//         "recovery": 769985.0,
//         "Recovery_%": 0.05596033919021777
//     }],
//    [ {
//         "segment": ">=1 - 5Lakh",
//         "month": "Oct2023",
//         "settlement_amount": 10314200.0,
//         "Average_Waiver_%": 0.46289639146053213
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Oct2023",
//         "recovery": 752636.0,
//         "Recovery_%": 0.07297085571348239
//     }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "Nov2023",
//         "settlement_amount": 14036781.0,
//         "Average_Waiver_%": 0.4530940180591884
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Nov2023",
//         "recovery": 651641.0,
//         "Recovery_%": 0.04642382039015926
//     }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "Dec2023",
//         "settlement_amount": 13634014.0,
//         "Average_Waiver_%": 0.4426637291314449
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Dec2023",
//         "recovery": 866164.0,
//         "Recovery_%": 0.06352963991382142
//     }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "Jan2024",
//         "settlement_amount": 14391273.0,
//         "Average_Waiver_%": 0.43888669833283556
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Jan2024",
//         "recovery": 854085.0,
//         "Recovery_%": 0.05934742534590234
//     }],
//    [ {
//         "segment": ">=1 - 5Lakh",
//         "month": "Feb2024",
//         "settlement_amount": 10964220.0,
//         "Average_Waiver_%": 0.4058031832361754
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Feb2024",
//         "recovery": 535495.0,
//         "Recovery_%": 0.048840227576608275
//     }],
//    [ {
//         "segment": ">=1 - 5Lakh",
//         "month": "Mar2024",
//         "settlement_amount": 13024745.0,
//         "Average_Waiver_%": 0.4174171727332584
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Mar2024",
//         "recovery": 646980.0,
//         "Recovery_%": 0.049673141393555116
//     }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "Apr2024",
//         "settlement_amount": 9844650.0,
//         "Average_Waiver_%": 0.41508905398521073
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Apr2024",
//         "recovery": 343487.0,
//         "Recovery_%": 0.034890727450950516
//     }],
//     [{
//         "segment": ">=1 - 5Lakh",
//         "month": "May2024",
//         "settlement_amount": 14066564.0,
//         "Average_Waiver_%": 0.4240950206557696
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "May2024",
//         "recovery": 1112836.0,
//         "Recovery_%": 0.07911214138719307
//     }],
//    [ {
//         "segment": ">=1 - 5Lakh",
//         "month": "Jun2024",
//         "settlement_amount": 7534620.0,
//         "Average_Waiver_%": 0.441471354859781
//     },
//     {
//         "segment": ">=1 - 5Lakh",
//         "month": "Jun2024",
//         "recovery": 159827.0,
//         "Recovery_%": 0.021212350456957352
//     }],
       
//     // [  {
//     //     "segment": ">=5 - 10Lakh",
//     //     "month": "Feb2023",
//     //     "settlement_amount": 123040716.46,
//     //     "Average_Waiver_%": 0.34881942417104783
//     // },
//     // {
//     //     "segment": ">=5 - 10Lakh",
//     //     "month": "Feb2023",
//     //     "recovery": 9074552.0,
//     //     "Recovery_%": 0.07375243139900033
//     // }],
// //    [ {
// //         "segment": ">=5 - 10Lakh",
// //         "month": "Mar2023",
// //         "settlement_amount": 6026499.0,
// //         "Average_Waiver_%": 0.4239232845168198
// //     },
// //     {
// //         "segment": ">=5 - 10Lakh",
// //         "month": "Mar2023",
// //         "recovery": 630082.0,
// //         "Recovery_%": 0.10455191314227381
// //     }],
//     [{
//         "segment": ">=5 - 10Lakh",
//         "month": "Apr2023",
//         "settlement_amount": 4115644.0,
//         "Average_Waiver_%": 0.3842338730437077
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Apr2023",
//         "recovery": 0.0,
//         "Recovery_%": 0.0
//     }],
//    [ {
//         "segment": ">=5 - 10Lakh",
//         "month": "May2023",
//         "settlement_amount": 4704070.0,
//         "Average_Waiver_%": 0.3888922196291683
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "May2023",
//         "recovery": 73212.0,
//         "Recovery_%": 0.015563543909848281
//     }],
//   [  {
//         "segment": ">=5 - 10Lakh",
//         "month": "Jun2023",
//         "settlement_amount": 5822000.0,
//         "Average_Waiver_%": 0.4483408831810072
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Jun2023",
//         "recovery": 130702.0,
//         "Recovery_%": 0.022449673651666092
//     }],
//    [ {
//         "segment": ">=5 - 10Lakh",
//         "month": "Jul2023",
//         "settlement_amount": 4184900.0,
//         "Average_Waiver_%": 0.4194128130418954
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Jul2023",
//         "recovery": 5000.0,
//         "Recovery_%": 0.0011947716791321178
//     }],
//    [ {
//         "segment": ">=5 - 10Lakh",
//         "month": "Aug2023",
//         "settlement_amount": 8150473.0,
//         "Average_Waiver_%": 0.3621652004191511
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Aug2023",
//         "recovery": 173000.0,
//         "Recovery_%": 0.02122576198951889
//     }],
//     [{
//         "segment": ">=5 - 10Lakh",
//         "month": "Sep2023",
//         "settlement_amount": 7170700.0,
//         "Average_Waiver_%": 0.36670133776582636
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Sep2023",
//         "recovery": 265700.0,
//         "Recovery_%": 0.03705356520283933
//     }],
//    [ {
//         "segment": ">=5 - 10Lakh",
//         "month": "Oct2023",
//         "settlement_amount": 5985002.0,
//         "Average_Waiver_%": 0.38884283396631913
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Oct2023",
//         "recovery": 164001.0,
//         "Recovery_%": 0.027401995855640484
//     }],
//     [{
//         "segment": ">=5 - 10Lakh",
//         "month": "Nov2023",
//         "settlement_amount": 5469500.0,
//         "Average_Waiver_%": 0.36665709496907256
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Nov2023",
//         "recovery": 114507.0,
//         "Recovery_%": 0.020935551695767437
//     }],
//     [{
//         "segment": ">=5 - 10Lakh",
//         "month": "Dec2023",
//         "settlement_amount": 5643400.0,
//         "Average_Waiver_%": 0.3432655603839013
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Dec2023",
//         "recovery": 107500.0,
//         "Recovery_%": 0.019048800368572136
//     }],
//    [ {
//         "segment": ">=5 - 10Lakh",
//         "month": "Jan2024",
//         "settlement_amount": 4903551.0,
//         "Average_Waiver_%": 0.41848667003371043
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Jan2024",
//         "recovery": 481393.0,
//         "Recovery_%": 0.0981723245052412
//     }],
//    [ {
//         "segment": ">=5 - 10Lakh",
//         "month": "Feb2024",
//         "settlement_amount": 6887400.0,
//         "Average_Waiver_%": 0.39323272840657025
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Feb2024",
//         "recovery": 158068.0,
//         "Recovery_%": 0.02295031506809536
//     }],
//    [ {
//         "segment": ">=5 - 10Lakh",
//         "month": "Mar2024",
//         "settlement_amount": 6814500.0,
//         "Average_Waiver_%": 0.3566372179173227
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Mar2024",
//         "recovery": 549329.0,
//         "Recovery_%": 0.08061178369652947
//     }],
//    [ {
//         "segment": ">=5 - 10Lakh",
//         "month": "Apr2024",
//         "settlement_amount": 7003465.0,
//         "Average_Waiver_%": 0.40715150013509316
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Apr2024",
//         "recovery": 102500.0,
//         "Recovery_%": 0.014635612514662385
//     }],
//     [{
//         "segment": ">=5 - 10Lakh",
//         "month": "May2024",
//         "settlement_amount": 7620886.0,
//         "Average_Waiver_%": 0.35934644627133294
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "May2024",
//         "recovery": 459055.0,
//         "Recovery_%": 0.060236434451322325
//     }],
//     [{
//         "segment": ">=5 - 10Lakh",
//         "month": "Jun2024",
//         "settlement_amount": 5020764.0,
//         "Average_Waiver_%": 0.41806455158470857
//     },
//     {
//         "segment": ">=5 - 10Lakh",
//         "month": "Jun2024",
//         "recovery": 112426.0,
//         "Recovery_%": 0.022392209631840892
//     }],

    
    
//     // [ {
//     //     "segment": ">=10L",
//     //     "month": "Feb2023",
//     //     "settlement_amount": 20935000.0,
//     //     "Average_Waiver_%": 0.34884688072029574
//     // },
//     // {
//     //     "segment": ">=10L",
//     //     "month": "Feb2023",
//     //     "recovery": 625000.0,
//     //     "Recovery_%": 0.029854310962502986
//     // }],
// //    [ {
// //         "segment": ">=10L",
// //         "month": "Mar2023",
// //         "settlement_amount": 600000.0,
// //         "Average_Waiver_%": 0.49247550371441035
// //     },
// //     {
// //         "segment": ">=10L",
// //         "month": "Mar2023",
// //         "recovery": 0.0,
// //         "Recovery_%": 0.0
// //     }],
//   [  {
//         "segment": ">=10L",
//         "month": "Apr2023",
//         "settlement_amount": 360000.0,
//         "Average_Waiver_%": 0.311405719760128
//     },
//     {
//         "segment": ">=10L",
//         "month": "Apr2023",
//         "recovery": 0.0,
//         "Recovery_%": 0.0
//     }],
//     [{
//         "segment": ">=10L",
//         "month": "May2023",
//         "settlement_amount": 700000.0,
//         "Average_Waiver_%": 0.28307099418916715
//     },
//     {
//         "segment": ">=10L",
//         "month": "May2023",
//         "recovery": 0.0,
//         "Recovery_%": 0.0
//     }],
//     [{
//         "segment": ">=10L",
//         "month": "Aug2023",
//         "settlement_amount": 1721750.0,
//         "Average_Waiver_%": 0.3320466246187288
//     },
//     {
//         "segment": ">=10L",
//         "month": "Aug2023",
//         "recovery": 237000.0,
//         "Recovery_%": 0.1376506461449107
//     }],
//     [{
//         "segment": ">=10L",
//         "month": "Sep2023",
//         "settlement_amount": 1140000.0,
//         "Average_Waiver_%": 0.5444574484868988
//     },
//     {
//         "segment": ">=10L",
//         "month": "Sep2023",
//         "recovery": 0.0,
//         "Recovery_%": 0.0
//     }],
//     [{
//         "segment": ">=10L",
//         "month": "Oct2023",
//         "settlement_amount": 2986000.0,
//         "Average_Waiver_%": 0.46773571052014196
//     },
//     {
//         "segment": ">=10L",
//         "month": "Oct2023",
//         "recovery": 0.0,
//         "Recovery_%": 0.0
//     }],
//     [{
//         "segment": ">=10L",
//         "month": "Nov2023",
//         "settlement_amount": 935000.0,
//         "Average_Waiver_%": 0.3300620186533049
//     },
//     {
//         "segment": ">=10L",
//         "month": "Nov2023",
//         "recovery": 2000.0,
//         "Recovery_%": 0.0021390374331550803
//     }],
//     [{
//         "segment": ">=10L",
//         "month": "Dec2023",
//         "settlement_amount": 431000.0,
//         "Average_Waiver_%": 0.3646137869913905
//     },
//     {
//         "segment": ">=10L",
//         "month": "Dec2023",
//         "recovery": 0.0,
//         "Recovery_%": 0.0
//     }],
//     [{
//         "segment": ">=10L",
//         "month": "Jan2024",
//         "settlement_amount": 1545500.0,
//         "Average_Waiver_%": 0.3148002390322721
//     },
//     {
//         "segment": ">=10L",
//         "month": "Jan2024",
//         "recovery": 35000.0,
//         "Recovery_%": 0.022646392753154318
//     }],
//    [ {
//         "segment": ">=10L",
//         "month": "Feb2024",
//         "settlement_amount": 1200000.0,
//         "Average_Waiver_%": 0.5087047500818983
//     },
//     {
//         "segment": ">=10L",
//         "month": "Feb2024",
//         "recovery": 0.0,
//         "Recovery_%": 0.0
//     }],
//    [ {
//         "segment": ">=10L",
//         "month": "Mar2024",
//         "settlement_amount": 910000.0,
//         "Average_Waiver_%": 0.37695832854920736
//     },
//     {
//         "segment": ">=10L",
//         "month": "Mar2024",
//         "recovery": 0.0,
//         "Recovery_%": 0.0
//     }],
//     [{
//         "segment": ">=10L",
//         "month": "Apr2024",
//         "settlement_amount": 450000.0,
//         "Average_Waiver_%": 0.31416400675056066
//     },
//     {
//         "segment": ">=10L",
//         "month": "Apr2024",
//         "recovery": 75000.0,
//         "Recovery_%": 0.16666666666666666
//     }],
//    [ {
//         "segment": ">=10L",
//         "month": "May2024",
//         "settlement_amount": 2185000.0,
//         "Average_Waiver_%": 0.3757424421307973
//     },
//     {
//         "segment": ">=10L",
//         "month": "May2024",
//         "recovery": 76680.0,
//         "Recovery_%": 0.03509382151029748
//     }],
//     [{
//         "segment": ">=10L",
//         "month": "Jun2024",
//         "settlement_amount": 1480000.0,
//         "Average_Waiver_%": 0.435900586132545
//     },
//     {
//         "segment": ">=10L",
//         "month": "Jun2024",
//         "recovery": 0.0,
//         "Recovery_%": 0.0
//     }]
//      ]
// }


const NewSettlementRecovery: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("$Recovery");
  const [recoveryData, setRecoveryData] = useState<RecoveryItem[]>([]);
  const [uniqueData, setUniqueData] = useState<RecoveryItem[]>([]);
  const [selectedCategory, setselectedCategory] = useState("all");
  const [selectedSubCategory, setselectedSubCategory] = useState("V1");
  const [selectedSubCategoryTwo, setselectedSubCategoryTwo] = useState("1");
  const [selectedSubCategoryAgency, setselectedSubCategoryAgency] =
    useState("Very Small");
  // const [
  //   selectedSubCategoryUniquePayerAgency,
  //   setselectedSubCategoryUniquePayerAgency,
  // ] = useState("Very Small");
  const [selectedSubCategoryPayment, setselectedSubCategoryPayment] =
    useState("PA");
  const [selectedSubCategoryLocation, setselectedSubCategoryLocation] =
    useState("UTTAR PRADESH");
  const [selectedSubCategoryTOS, setselectedSubCategoryTOS] = useState("<1Lakh");

  const [selectedSubCategorySegments, setselectedSubCategorySegments] =
    useState("Score");

  const [
    selectedSubCategoryUniquePayerSegments,
    setselectedSubCategoryUniquePayerSegments,
  ] = useState("Seg1");

  const [delinquencyGraphTitle, setdelinquencyGraphTitle] =
    useState("Balances (millions)");

  const [delinquencyUniqueGraphTitle, setdelinquencyUniqueGraphTitle] =
    useState("Recovery (millions)");

  const [forwardFlowRateTitle, setforwardFlowRateTitle] = useState(
    "Monthly Recovery % (Coincidental)"
  );

  const [portfolioRecoveryGraphData, setPortfolioRecoveryGraphData] =
    useState<any>();
  const [
    portfolioRecoveryUniquePayerGraphData,
    setPortfolioRecoveryUniquePayerGraphData,
  ] = useState<any>();

  const [portfolioRecoveryFlowGraphData, setPortfolioRecoveryFlowGraphData] =
    useState<any>();
  const [portfolioUniqueFlowGraphData, setPortfolioUniqueFlowGraphData] =
    useState<any>();
  let navigate = useNavigate();
  // const [loader, setLoader] = useState(true);

  // const Loader = () => {
  //   return <span className="loader"></span>;
  // };

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
    if (buttonId === "$Recovery" || buttonId === "writeOff") {
      // setdelinquencyGraphTitle("Monthly Recovery");
      setdelinquencyGraphTitle("Balances (millions)");
      setdelinquencyUniqueGraphTitle("Recovery (millions)");
      setforwardFlowRateTitle("Monthly Recovery % (Coincidental)");
    } else if (buttonId === "uniquePayer") {
      setdelinquencyGraphTitle("Total Accounts");
      setforwardFlowRateTitle("Unique Payer Rate");
      setdelinquencyUniqueGraphTitle("Payer%");
    }
  };

  const handleCategoryClick = async (cityId: string) => {
    setselectedCategory(cityId);
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

  // const handleSubCategoryUniquePayerAgencyClick = async (cityId: string) => {
  //   setselectedSubCategoryUniquePayerAgency(cityId);
  // };

  const handleSubCategoryPaymentClick = async (cityId: string) => {
    setselectedSubCategoryPayment(cityId);
  };
  const handleSubCategoryLocationClick = async (cityId: string) => {
    setselectedSubCategoryLocation(cityId);
  };
  const handleSubCategoryTOSClick = async (cityId: string) => {
    setselectedSubCategoryTOS(cityId);
  };
  // const handleSubCategoryTOSClickUnique = async (cityId: string) => {
  //   setselectedSubCategoryTOSUnique(cityId);
  // };
  const handleSubCategorySegmentClick = async (cityId: string) => {
    setselectedSubCategorySegments(cityId);
  };
  const handleSubCategoryUniquePayerSegmentClick = async (cityId: string) => {
    setselectedSubCategoryUniquePayerSegments(cityId);
  };

//   useEffect(() => {
//     setPortfolioRecoveryGraphData(recoveryStaticData);
   
//   }, []);


  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchData("new_settlement");
    
  }, []);
  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/settlements?blob=new_settlement`;
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
      setPortfolioRecoveryGraphData(result.data);
      
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className="CommonBodyWrap bg-[#fafafb]">
      <div className="px-[6px] lg:px-[59px] lg:pt-[59px] flex flex-col gap-5 w-full">
        {/* <PerformanceDashboard /> */}
        <HomeDashboard />
      </div>
      <div className=" w-full flex flex-col gap-5 mt-4 items-start ml-[73px] mb-4">
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

        <div className="flex">
          <div className=" flex justify-between rounded-xl B1TabsContain">
            {categories.map((city, index) => (
              <div
                key={city.id}
                onClick={() => handleCategoryClick(city.id)}
                className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                  selectedCategory === city.id
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

        {selectedCategory === "mob" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategories.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategory === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategories.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "placement" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesPlacements.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryTwoClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryTwo === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesPlacements.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "pos" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesTOS.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryTOSClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryTOS === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesTOS.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "agency" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesAgents.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryAgencyClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryAgency === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesAgents.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "location" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesLocation.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() => handleSubCategoryLocationClick(city.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryLocation === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesLocation.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === "segments" &&
          (activeButton === "$Recovery" || activeButton === "writeOff") && (
            <div className="flex">
              <div className=" flex w-full justify-between  rounded-xl">
                {subCategoriesSegment.map((city, index) => (
                  <div
                    key={city.id}
                    onClick={() => handleSubCategorySegmentClick(city.id)}
                    className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                      selectedSubCategorySegments === city.id
                        ? " bg-[#E8DEF8] "
                        : "bg-[#fafafb]"
                    } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                      index === subCategoriesSegment.length - 1
                        ? "rounded-r-[4px]"
                        : ""
                    }`}
                  >
                    {city.name}
                  </div>
                ))}
              </div>
            </div>
          )}

        {selectedCategory === "segments" && activeButton === "uniquePayer" && (
          <div className="flex">
            <div className=" flex w-full justify-between  rounded-xl">
              {subCategoriesSegmentUniquePayer.map((city, index) => (
                <div
                  key={city.id}
                  onClick={() =>
                    handleSubCategoryUniquePayerSegmentClick(city.id)
                  }
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-8 p-5 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    selectedSubCategoryUniquePayerSegments === city.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === subCategoriesSegmentUniquePayer.length - 1
                      ? "rounded-r-[4px]"
                      : ""
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col  items-start  justify-center gap-6 p-[6px] lg:px-[59px] bg-[#fafafb] w-full">
        <div
          className={`w-full flex flex-col xl:flex-row 
          } items-center justify-between xl:gap-6`}
        >
       
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            < NewSettlementLhs
              delinquencyGraphTitle={delinquencyGraphTitle}
              delinquencyUniqueGraphTitle={delinquencyUniqueGraphTitle}
              activeButton={activeButton}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
              selectedSubCategoryTwo={selectedSubCategoryTwo}
              selectedSubCategoryLocation={selectedSubCategoryLocation}
              selectedSubCategoryAgency={selectedSubCategoryAgency}
              selectedSubCategoryTOS={selectedSubCategoryTOS}
              selectedSubCategorySegments={selectedSubCategorySegments}
              selectedSubCategoryPayment={selectedSubCategoryPayment}
              selectedSubCategoryUniquePayerSegments={
                selectedSubCategoryUniquePayerSegments
              }
              portfolioRecoveryGraphData={portfolioRecoveryGraphData}
              portfolioRecoveryUniquePayerGraphData={
                portfolioRecoveryUniquePayerGraphData
              }
            />{" "}
          </div>
          <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-10 ">
            <NewSettlementRhs
              delinquencyGraphTitle={delinquencyGraphTitle}
              delinquencyUniqueGraphTitle={delinquencyUniqueGraphTitle}
              activeButton={activeButton}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
              selectedSubCategoryTwo={selectedSubCategoryTwo}
              selectedSubCategoryLocation={selectedSubCategoryLocation}
              selectedSubCategoryAgency={selectedSubCategoryAgency}
              selectedSubCategoryTOS={selectedSubCategoryTOS}
              selectedSubCategorySegments={selectedSubCategorySegments}
              selectedSubCategoryPayment={selectedSubCategoryPayment}
              selectedSubCategoryUniquePayerSegments={
                selectedSubCategoryUniquePayerSegments}
              portfolioRecoveryGraphData={portfolioRecoveryGraphData}
             
            />{" "} 
          </div>
        </div>
        <div className="w-full BenchmarkTableMain">
          {/* {loader ? (
            <div className="w-full flex justify-center items-center ">
              <Loader />
            </div>
          ) : ( */}
          {/* <PortfolioBenchmarkTable
            activeButton={activeButton}
            recoveryData={recoveryData}
            uniqueData={uniqueData}
          /> */}
          {/* )} */}
        </div>
        <div className="w-full flex items-center justify-end gap-5 mt-8">
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

export default NewSettlementRecovery;
