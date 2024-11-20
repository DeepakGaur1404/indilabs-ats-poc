import React, { useEffect, useState } from "react";
import yellowimpactball from "../../assets/images/yellowimpactball.png";
import lightorangeimpactball from "../../assets/images/lightorangeimpactball.png";
import middleorangeimpactball from "../../assets/images/middleorangeimpactball.png";
import darkorangeimpactball from "../../assets/images/darkorangeimpactball.png";
import redimpactball from "../../assets/images/redimpactball.png";
import peachimpactball from "../../assets/images/peachimpactball.png";
import "./AgencyAllocation.scss";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  LabelList,
  ReferenceLine,
  Line,
  Layer,
} from "recharts";
// import Location from "../../pages/Monitoring/Location";
import { number } from "yup";
import { direction } from "html2canvas/dist/types/css/property-descriptors/direction";

type Props = {
  // Category: any;
  // categoriesMatric: any;
  // setIsCategoryVisible: any;
  // isCategoryVisible: any;
//   selectedCategoryButton: any;
//   activeButton:any
};

const AgencyScatterChart = ({
  // Category,
  // setIsCategoryVisible,
//   selectedCategoryButton,
//   activeButton
}: // isCategoryVisible,
Props) => {
//   console.log("Category value", selectedCategoryButton);
  const [impactAssessmentData, setImpactAssessmentData] = useState<any>();
  const [impactAssessmentDataMetrics, setImpactAssessmentDataMeterics] =
    useState<any>();
  const [loader, setLoader] = useState(false);
  const Loader = () => {
    return <span className="loader"></span>;
  };
  // const handleDoubleClick = () => {
  //   setIsCategoryVisible(false);
  // };
  const CustomTooltip = ({ active, payload }: any) => {
    console.log("Payload", payload);
    if (active && payload && payload.length) {
      const { x_coordinate, total_payment, agency_code } = payload[0].payload;
      const yUpdated = payload[0].payload["Y Updated"];
      return (
        <div className="custom-tooltip bg-white p-4 shadow rounded">
          <p className="label text-black">{`Agency Code: ${agency_code}`}</p>
          <p className="label text-black">{`Total Payment: ${total_payment.toFixed(
            2
          )}`}</p>
          <p className="label text-black">{`Performance %: ${x_coordinate.toFixed(
            2
          )}%`}</p>
          <p className="intro text-black">{`Volume %: ${yUpdated.toFixed(
            2
          )}%`}</p>
        </div>
      );
    }

    return null;
  };

  // const CustomDot = (props: any) => {
  //   const { cx, cy, payload } = props;
  //   const circle_diameter = payload.circle_diameter * 110;
  //   const circle_color = payload.circle_color;
  //   const nameofState = payload.metric;

  //   const getColor = (color: string) => {
  //     switch (color) {
  //       case "red":
  //         return "red";
  //       case "green":
  //         return "green";
  //       case "pink":
  //         return "pink";
  //       case "orange":
  //         return "orange";
  //       case "violet":
  //         return "violet";
  //       case "yellow":
  //         return "yellow";
  //       default:
  //         return "#FFFFFF"; // Default color
  //     }
  //   };
  //   const backgroundColor = getColor(payload.color);

  //   return (
  //     <g className="cursor-pointer">
  //       <foreignObject
  //         x={cx - 20}
  //         y={cy - 20}
  //         width={circle_diameter}
  //         height={circle_diameter}
  //         // style={{ display: "flex", flexDirection: "column" }}
  //         // clipPath="url(#clip)"
  //       >
  //         <div
  //           style={{
  //             border: "1px solid #CDD1DB ",
  //             width: `${
  //               payload.circle_diameter >= 0.1
  //                 ? circle_diameter
  //                 : payload.circle_diameter <= 0.1
  //                 ? circle_diameter * 1.1
  //                 : circle_diameter
  //             }px`,
  //             height: `${
  //               payload.circle_diameter >= 0.1
  //                 ? circle_diameter
  //                 : payload.circle_diameter <= 0.1
  //                 ? circle_diameter * 1.2
  //                 : circle_diameter
  //             }px`,
  //             borderRadius: "100%",
  //             backgroundColor: circle_color,
  //             display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //           }}
  //         >
  //           {/* <div className="flex justify-center text-center items-center">
  //             <p className="text-white text-[12px] text-center text-[500] font-['DM Sans']">
  //               {nameofState}
  //             </p>
  //           </div> */}
  //         </div>
  //       </foreignObject>
  //     </g>
  //   );
  // };
  // console.log("set loader value", loader);

  useEffect(() => {
    fetchImpactAssessmentData();
  }, []);

  const fetchImpactAssessmentData = async () => {
    setLoader(true);
    // {
    //   Category: "Location",
    //   metric: "MRR@GUJ",
    //   "Month Labels": "Jun2024",
    //   "X Coordinate": 2.9514540440915984,
    //   "Y Coordinate": 2,
    //   circle_diameter: 1.2,
    //   circle_color: "#ffc752c7",
    //   "Dollar Impact Metric": 6747134.15943325,
    //   "Y Updated": 200.23,
    //   x_coordinate: 2,
    //   name:"GUJ"
    // }
    const data: any = {
      impact_assessment: {
        categories: [
          {
            Category: "MAHARASHTRA",
            agency_code: "A297",
            total_payment: 2133454.81,
            pos_amount: 292610441.52,
            x_coordinate: 0.7291109636817857,
            "Y Updated": 11.606711035327738,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "C224",
            total_payment: 16200.0,
            pos_amount: 6073051.17,
            x_coordinate: 0.2667522394677929,
            "Y Updated": 0.24089417201515398,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "C474",
            total_payment: 1234732.0,
            pos_amount: 231300524.92,
            x_coordinate: 0.533821529556432,
            "Y Updated": 9.174786590390921,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "C739",
            total_payment: 768513.0,
            pos_amount: 69063885.7,
            x_coordinate: 1.1127566776915363,
            "Y Updated": 2.7394940526823746,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "C865",
            total_payment: 49067.0,
            pos_amount: 3918705.27,
            x_coordinate: 1.2521227451229064,
            "Y Updated": 0.15543970155418113,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "C913",
            total_payment: 0.0,
            pos_amount: 3393106.1,
            x_coordinate: 0.0,
            "Y Updated": 0.1345912395003035,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "C951",
            total_payment: 93403.0,
            pos_amount: 7248122.27,
            x_coordinate: 1.2886509984330052,
            "Y Updated": 0.28750464371540085,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "C960",
            total_payment: 30001.0,
            pos_amount: 3547673.79,
            x_coordinate: 0.8456527227662609,
            "Y Updated": 0.14072233483616658,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "C972",
            total_payment: 145747.0,
            pos_amount: 67407792.41,
            x_coordinate: 0.21621684198395189,
            "Y Updated": 2.673803313265403,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D044",
            total_payment: 34758.0,
            pos_amount: 11787837.15,
            x_coordinate: 0.2948632523312387,
            "Y Updated": 0.46757736607358813,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D055",
            total_payment: 262560.0,
            pos_amount: 36527332.9,
            x_coordinate: 0.7188041916961313,
            "Y Updated": 1.4488963403328927,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D081",
            total_payment: 0.0,
            pos_amount: 16807433.240000002,
            x_coordinate: 0.0,
            "Y Updated": 0.6666850979373153,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D180",
            total_payment: 115528.0,
            pos_amount: 35173255.28,
            x_coordinate: 0.32845410264227326,
            "Y Updated": 1.3951853805561207,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D192",
            total_payment: 12000.0,
            pos_amount: 28759514.1,
            x_coordinate: 0.041725322473372385,
            "Y Updated": 1.1407773691914485,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D203",
            total_payment: 416898.0,
            pos_amount: 75679312.27,
            x_coordinate: 0.5508744563013984,
            "Y Updated": 3.0019021341389314,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D214",
            total_payment: 21415.0,
            pos_amount: 54715550.68,
            x_coordinate: 0.03913878181587553,
            "Y Updated": 2.170351757041394,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D249",
            total_payment: 10015.0,
            pos_amount: 18091098.03,
            x_coordinate: 0.05535871832319069,
            "Y Updated": 0.7176030563203428,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D257",
            total_payment: 153880.0,
            pos_amount: 50624108.02,
            x_coordinate: 0.30396584951029026,
            "Y Updated": 2.0080602392625018,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D277",
            total_payment: 374800.0,
            pos_amount: 19322960.93,
            x_coordinate: 1.9396613249789352,
            "Y Updated": 0.7664662364624074,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D283",
            total_payment: 575938.06,
            pos_amount: 117920511.98,
            x_coordinate: 0.4884121094196762,
            "Y Updated": 4.677445208653683,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D304",
            total_payment: 367597.0,
            pos_amount: 46465927.32,
            x_coordinate: 0.7911108659651732,
            "Y Updated": 1.843121484627261,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D340",
            total_payment: 443200.0,
            pos_amount: 35053808.53,
            x_coordinate: 1.2643419319777975,
            "Y Updated": 1.3904473954584007,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D347",
            total_payment: 23782.0,
            pos_amount: 55972168.08,
            x_coordinate: 0.04248897410228745,
            "Y Updated": 2.2201968513175943,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D348",
            total_payment: 1000367.0,
            pos_amount: 85163466.24,
            x_coordinate: 1.174643358433599,
            "Y Updated": 3.3781014043103013,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D483",
            total_payment: 1303639.0,
            pos_amount: 126822217.76,
            x_coordinate: 1.0279263547236046,
            "Y Updated": 5.030541038635898,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D521",
            total_payment: 305193.0,
            pos_amount: 61587653.25,
            x_coordinate: 0.49554250551022583,
            "Y Updated": 2.4429411708736115,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D547",
            total_payment: 3317876.06,
            pos_amount: 418185748.38,
            x_coordinate: 0.7933976881931157,
            "Y Updated": 16.58779199855443,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D601",
            total_payment: 1101802.0,
            pos_amount: 92099745.76,
            x_coordinate: 1.1963138344281135,
            "Y Updated": 3.6532364665818204,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D615",
            total_payment: 451980.0,
            pos_amount: 64715992.93,
            x_coordinate: 0.6984054165542725,
            "Y Updated": 2.567030162700063,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D625",
            total_payment: 424266.0,
            pos_amount: 61876981.910000004,
            x_coordinate: 0.685660461942204,
            "Y Updated": 2.4544177064798407,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D656",
            total_payment: 32500.0,
            pos_amount: 14574667.14,
            x_coordinate: 0.2229896551860463,
            "Y Updated": 0.5781200050528756,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D676",
            total_payment: 15335.000000000004,
            pos_amount: 119732705.558,
            x_coordinate: 0.012807695214547325,
            "Y Updated": 4.7493278355711,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D680",
            total_payment: 624399.0,
            pos_amount: 91294312.33,
            x_coordinate: 0.683940745117829,
            "Y Updated": 3.6212880746117957,
          },
          {
            Category: "MAHARASHTRA",
            agency_code: "D682",
            total_payment: 0.0,
            pos_amount: 262855.07,
            x_coordinate: 0.0,
            "Y Updated": 0.010426431899739016,
          },

          {
            Category: "UTTAR PRADESH",
            agency_code: "A326",
            total_payment: 99442.0,
            pos_amount: 7782844.49,
            x_coordinate: 1.2777076572424229,
            "Y Updated": 0.5154949732614859,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C635",
            total_payment: 311000.0,
            pos_amount: 52953043.44,
            x_coordinate: 0.5873127960102759,
            "Y Updated": 3.5073330512116008,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C642",
            total_payment: 206800.0,
            pos_amount: 33621878.04,
            x_coordinate: 0.6150756949209373,
            "Y Updated": 2.2269376117562305,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C643",
            total_payment: 57103.0,
            pos_amount: 11214517.7,
            x_coordinate: 0.5091881927298577,
            "Y Updated": 0.7427910848443484,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C651",
            total_payment: 70000.0,
            pos_amount: 28151879.15,
            x_coordinate: 0.24865125211366218,
            "Y Updated": 1.864633452246947,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C675",
            total_payment: 21816.0,
            pos_amount: 19488899.56,
            x_coordinate: 0.111940645662602,
            "Y Updated": 1.2908429264501446,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C749",
            total_payment: 0.0,
            pos_amount: 525104.23,
            x_coordinate: 0.0,
            "Y Updated": 0.03478016184842762,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C754",
            total_payment: 134743.0,
            pos_amount: 26324732.95,
            x_coordinate: 0.5118494468905904,
            "Y Updated": 1.7436128301949416,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C804",
            total_payment: 696897.0,
            pos_amount: 251432716.35999998,
            x_coordinate: 0.2771703738833202,
            "Y Updated": 16.653590029146397,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C865",
            total_payment: 40021.0,
            pos_amount: 2306674.76,
            x_coordinate: 1.7350083632943554,
            "Y Updated": 0.15278208953769604,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C867",
            total_payment: 645452.19,
            pos_amount: 141718464.65,
            x_coordinate: 0.4554467842945263,
            "Y Updated": 9.386690976451796,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C942",
            total_payment: 609020.0,
            pos_amount: 117625870.41,
            x_coordinate: 0.5177602494053247,
            "Y Updated": 7.790923357105642,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "C996",
            total_payment: 203107.0,
            pos_amount: 21250722.78,
            x_coordinate: 0.9557651384505049,
            "Y Updated": 1.407536895454961,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D081",
            total_payment: 64000.0,
            pos_amount: 37681181.56,
            x_coordinate: 0.16984605405245154,
            "Y Updated": 2.495804677286234,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D097",
            total_payment: 152072.1,
            pos_amount: 11034834.41,
            x_coordinate: 1.3781094880969764,
            "Y Updated": 0.7308898021072852,
          },
          //   {
          //     Category: "UTTAR PRADESH",
          //     agency_code: "D173",
          //     total_payment: 340795.0,
          //     pos_amount: 6758060.0,
          //     x_coordinate: 5.04279334601942,
          //     "Y Updated": 0.4476186005612348,
          //   },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D284",
            total_payment: 78427.0,
            pos_amount: 27612301.55,
            x_coordinate: 0.28402920291879835,
            "Y Updated": 1.828894649956617,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D333",
            total_payment: 812405.0,
            pos_amount: 240259059.86,
            x_coordinate: 0.3381370927170829,
            "Y Updated": 15.913505376793214,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D451",
            total_payment: 191293.0,
            pos_amount: 175252075.79,
            x_coordinate: 0.10915305803808077,
            "Y Updated": 11.607782249724218,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D459",
            total_payment: 0.0,
            pos_amount: 183145.33,
            x_coordinate: 0.0,
            "Y Updated": 0.012130590186225858,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D478",
            total_payment: 47529.0,
            pos_amount: 11964327.64,
            x_coordinate: 0.3972559213532203,
            "Y Updated": 0.7924545794019143,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D493",
            total_payment: 521224.73,
            pos_amount: 32853759.11,
            x_coordinate: 1.5864995182281898,
            "Y Updated": 2.176061425319414,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D554",
            total_payment: 0.0,
            pos_amount: 572627.2,
            x_coordinate: 0.0,
            "Y Updated": 0.03792783519342804,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D567",
            total_payment: 20328.0,
            pos_amount: 19324439.98,
            x_coordinate: 0.1051932165746518,
            "Y Updated": 1.2799499827579477,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D569",
            total_payment: 186210.00000000006,
            pos_amount: 74680418.6,
            x_coordinate: 0.2493424695399338,
            "Y Updated": 4.946440911009847,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D607",
            total_payment: 25000.0,
            pos_amount: 25281428.34,
            x_coordinate: 0.09888681787984768,
            "Y Updated": 1.6745097814668621,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D618",
            total_payment: 0.0,
            pos_amount: 18447832.29,
            x_coordinate: 0.0,
            "Y Updated": 1.2218880674391999,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D634",
            total_payment: 0.0,
            pos_amount: 7194825.81,
            x_coordinate: 0.0,
            "Y Updated": 0.47654768681456694,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D658",
            total_payment: 16300.0,
            pos_amount: 20631156.15,
            x_coordinate: 0.07900672110418785,
            "Y Updated": 1.3665000375586058,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D676",
            total_payment: 2842.9999999999995,
            pos_amount: 57689449.91,
            x_coordinate: 0.004928110780108494,
            "Y Updated": 3.8210478799924315,
          },
          {
            Category: "UTTAR PRADESH",
            agency_code: "D679",
            total_payment: 8600.0,
            pos_amount: 9340068.98,
            x_coordinate: 0.09207640776974219,
            "Y Updated": 0.6186373909040463,
          },

          {
            Category: "TAMIL NADU",
            agency_code: "C718",
            total_payment: 623743.0,
            pos_amount: 73460924.49,
            x_coordinate: 0.8490813372283493,
            "Y Updated": 5.921115471756852,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "C865",
            total_payment: 30388.0,
            pos_amount: 2602747.58,
            x_coordinate: 1.1675354242381044,
            "Y Updated": 0.20978729946576669,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "C873",
            total_payment: 274267.0,
            pos_amount: 6335469.57,
            x_coordinate: 4.329071380892135,
            "Y Updated": 0.510653073755943,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "C896",
            total_payment: 1128465.0,
            pos_amount: 292089733.74,
            x_coordinate: 0.3863418907439208,
            "Y Updated": 23.543088432336354,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "C933",
            total_payment: 590225.0,
            pos_amount: 111494163.52,
            x_coordinate: 0.529377486108611,
            "Y Updated": 8.986679941915611,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D032",
            total_payment: 323811.0,
            pos_amount: 38806540.74,
            x_coordinate: 0.8344237693575982,
            "Y Updated": 3.127894324448034,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D110",
            total_payment: 172304.0,
            pos_amount: 17513049.73,
            x_coordinate: 0.9838606219728926,
            "Y Updated": 1.4115911341146552,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D183",
            total_payment: 534900.0,
            pos_amount: 79938392.77,
            x_coordinate: 0.6691402985034022,
            "Y Updated": 6.44321396039952,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D193",
            total_payment: 613843.0,
            pos_amount: 86943825.17,
            x_coordinate: 0.706022536735371,
            "Y Updated": 7.007867542667373,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D267",
            total_payment: 117855.0,
            pos_amount: 16870069.91,
            x_coordinate: 0.6986040996198811,
            "Y Updated": 1.3597655167995928,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D291",
            total_payment: 549182.0,
            pos_amount: 63749539.73,
            x_coordinate: 0.861468180517011,
            "Y Updated": 5.138356053006992,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D458",
            total_payment: 172374.0,
            pos_amount: 72167754.94,
            x_coordinate: 0.23885182536620558,
            "Y Updated": 5.81688310219074,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D467",
            total_payment: 244592.0,
            pos_amount: 66892249.88,
            x_coordinate: 0.365650730000532,
            "Y Updated": 5.391665548110684,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D470",
            total_payment: 629954.0,
            pos_amount: 82845128.43,
            x_coordinate: 0.76039956958034,
            "Y Updated": 6.6775033817241365,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D574",
            total_payment: 184722.0,
            pos_amount: 39100118.05,
            x_coordinate: 0.47243335624660604,
            "Y Updated": 3.151557314867306,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D673",
            total_payment: 250000.0,
            pos_amount: 9219188.03,
            x_coordinate: 2.711735558342875,
            "Y Updated": 0.7430872570750104,
          },
          {
            Category: "TAMIL NADU",
            agency_code: "D676",
            total_payment: 164801.0,
            pos_amount: 161182822.8,
            x_coordinate: 0.10224476599748444,
            "Y Updated": 12.991697456685833,
          },

          {
            Category: "MADHYA PRADESH",
            agency_code: "220547",
            total_payment: 0.0,
            pos_amount: 553540.31,
            x_coordinate: 0.0,
            "Y Updated": 0.049650258875846454,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "A297",
            total_payment: 593979.0,
            pos_amount: 71521562.02,
            x_coordinate: 0.8304894121774105,
            "Y Updated": 6.415186040376911,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "C200",
            total_payment: 375728.0,
            pos_amount: 51187824.92,
            x_coordinate: 0.734018295536516,
            "Y Updated": 4.591334565263195,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "C258",
            total_payment: 60000.0,
            pos_amount: 7913807.33,
            x_coordinate: 0.7581685716879842,
            "Y Updated": 0.7098355359667866,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "C506",
            total_payment: 58406.0,
            pos_amount: 28938677.44,
            x_coordinate: 0.2018267770567472,
            "Y Updated": 2.5956787617158676,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "C708",
            total_payment: 405493.0,
            pos_amount: 54715677.85,
            x_coordinate: 0.7410910655473127,
            "Y Updated": 4.9077682704262635,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "C865",
            total_payment: 42150.0,
            pos_amount: 2350763.42,
            x_coordinate: 1.7930345368399512,
            "Y Updated": 0.21085368174698993,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "C867",
            total_payment: 242615.0,
            pos_amount: 93438772.25,
            x_coordinate: 0.259651314072141,
            "Y Updated": 8.381068455978857,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "C891",
            total_payment: 527080.0,
            pos_amount: 62392016.1,
            x_coordinate: 0.8447875753128612,
            "Y Updated": 5.596303819591711,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "C904",
            total_payment: 97883.0,
            pos_amount: 20993310.41,
            x_coordinate: 0.46625805119984404,
            "Y Updated": 1.8830124521870903,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "C990",
            total_payment: 40200.0,
            pos_amount: 3382904.6399999997,
            x_coordinate: 1.1883279098284012,
            "Y Updated": 0.30343244763566024,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D065",
            total_payment: 9000.0,
            pos_amount: 12133886.29,
            x_coordinate: 0.0741724438889562,
            "Y Updated": 1.088359031103957,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D081",
            total_payment: 160104.0,
            pos_amount: 72426209.86,
            x_coordinate: 0.22105809527998405,
            "Y Updated": 6.496329181420197,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D173",
            total_payment: 23424.0,
            pos_amount: 976037.43,
            x_coordinate: 2.399907962546067,
            "Y Updated": 0.0875464897434766,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D215",
            total_payment: 1288741.0,
            pos_amount: 84362140.85,
            x_coordinate: 1.5276295587275865,
            "Y Updated": 7.566932447111433,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D310",
            total_payment: 582802.56,
            pos_amount: 80441378.17,
            x_coordinate: 0.7245059361965926,
            "Y Updated": 7.215256374861595,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D317",
            total_payment: 76428.0,
            pos_amount: 19974017.87,
            x_coordinate: 0.38263708632598714,
            "Y Updated": 1.7915861593463411,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D379",
            total_payment: 200000.00000000006,
            pos_amount: 28017299.76,
            x_coordinate: 0.7138446663783706,
            "Y Updated": 2.513035023747757,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D429",
            total_payment: 985031.0,
            pos_amount: 129627229.27,
            x_coordinate: 0.7598951281665391,
            "Y Updated": 11.627022231884432,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D489",
            total_payment: 54488.0,
            pos_amount: 19479016.41,
            x_coordinate: 0.2797266497092088,
            "Y Updated": 1.7471865913493474,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D505",
            total_payment: 282974.0,
            pos_amount: 46304384.88,
            x_coordinate: 0.6111170696540738,
            "Y Updated": 4.153310345869536,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D577",
            total_payment: 57139.0,
            pos_amount: 71599839.31,
            x_coordinate: 0.07980325172604077,
            "Y Updated": 6.4222071870619635,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D596",
            total_payment: 101003.0,
            pos_amount: 46199766.76,
            x_coordinate: 0.21862231583266115,
            "Y Updated": 4.143926536511362,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D665",
            total_payment: 158109.0,
            pos_amount: 25783004.7,
            x_coordinate: 0.6132295356560983,
            "Y Updated": 2.312628068499954,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D676",
            total_payment: 28310.0,
            pos_amount: 51288983.63,
            x_coordinate: 0.055197038421016566,
            "Y Updated": 4.600408079961785,
          },
          {
            Category: "MADHYA PRADESH",
            agency_code: "D688",
            total_payment: 138364.29,
            pos_amount: 19990277.42,
            x_coordinate: 0.6921579280414007,
            "Y Updated": 1.793044573218142,
          },
          {
            Category: "KARNATAKA",
            agency_code: "C188",
            total_payment: 40000.0,
            pos_amount: 10130658.65,
            x_coordinate: 0.3948410600134079,
            "Y Updated": 1.0015979314239032,
          },
          {
            Category: "KARNATAKA",
            agency_code: "C191",
            total_payment: 161697.0,
            pos_amount: 18213642.38,
            x_coordinate: 0.8877795919478244,
            "Y Updated": 1.8007463445136151,
          },
          {
            Category: "KARNATAKA",
            agency_code: "C470",
            total_payment: 650276.0,
            pos_amount: 54003251.03,
            x_coordinate: 1.2041423203183772,
            "Y Updated": 5.339193273658842,
          },
          {
            Category: "KARNATAKA",
            agency_code: "C759",
            total_payment: 188225.36,
            pos_amount: 11023033.78,
            x_coordinate: 1.707564031433096,
            "Y Updated": 1.089825273311702,
          },
          {
            Category: "KARNATAKA",
            agency_code: "C766",
            total_payment: 1045358.6699999999,
            pos_amount: 106324238.71,
            x_coordinate: 0.9831800186702695,
            "Y Updated": 10.512064539076862,
          },
          {
            Category: "KARNATAKA",
            agency_code: "C865",
            total_payment: 0.0,
            pos_amount: 2772606.71,
            x_coordinate: 0.0,
            "Y Updated": 0.2741220725454049,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D032",
            total_payment: 0.0,
            pos_amount: 3995486.45,
            x_coordinate: 0.0,
            "Y Updated": 0.3950257433017185,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D081",
            total_payment: 0.0,
            pos_amount: 20807700.43,
            x_coordinate: 0.0,
            "Y Updated": 2.0572156686353518,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D094",
            total_payment: 287535.0,
            pos_amount: 81557763.66,
            x_coordinate: 0.35255380615717097,
            "Y Updated": 8.063452752246821,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D096",
            total_payment: 212500.0,
            pos_amount: 15551660.11,
            x_coordinate: 1.3664136079167435,
            "Y Updated": 1.537561488796548,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D116",
            total_payment: 874011.0,
            pos_amount: 117387146.65,
            x_coordinate: 0.7445542590842078,
            "Y Updated": 11.605832090729299,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D217",
            total_payment: 235400.0,
            pos_amount: 27961164.27,
            x_coordinate: 0.8418819678855956,
            "Y Updated": 2.764464311808191,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D318",
            total_payment: 351286.0,
            pos_amount: 23167973.11,
            x_coordinate: 1.516256939405607,
            "Y Updated": 2.2905711014417225,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D362",
            total_payment: 565449.6799999999,
            pos_amount: 47281520.68,
            x_coordinate: 1.1959210953195594,
            "Y Updated": 4.674629255982729,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D374",
            total_payment: 376551.0,
            pos_amount: 21738070.13,
            x_coordinate: 1.7322190872884078,
            "Y Updated": 2.1491994575649565,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D426",
            total_payment: 108432.0,
            pos_amount: 35862860.55,
            x_coordinate: 0.30235178771872956,
            "Y Updated": 3.5456891977920804,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D445",
            total_payment: 335241.0,
            pos_amount: 30617968.85,
            x_coordinate: 1.0949158699663384,
            "Y Updated": 3.027137259684641,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D544",
            total_payment: 809542.0700000001,
            pos_amount: 89369061.45,
            x_coordinate: 0.9058415259881865,
            "Y Updated": 8.835740120571103,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D546",
            total_payment: 61377.0,
            pos_amount: 13284333.040000001,
            x_coordinate: 0.4620254537069329,
            "Y Updated": 1.3133954023029106,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D613",
            total_payment: 54880.0,
            pos_amount: 11826204.51,
            x_coordinate: 0.4640542107452529,
            "Y Updated": 1.1692331548267134,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D614",
            total_payment: 98786.0,
            pos_amount: 47058497.55,
            x_coordinate: 0.2099217041407647,
            "Y Updated": 4.652579405781953,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D676",
            total_payment: 35763.64,
            pos_amount: 57241549.92,
            x_coordinate: 0.06247846197383329,
            "Y Updated": 5.659357399370088,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D682",
            total_payment: 36124.0,
            pos_amount: 65493836.88,
            x_coordinate: 0.0551563348871858,
            "Y Updated": 6.475244483735768,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D684",
            total_payment: 0.0,
            pos_amount: 19744529.97,
            x_coordinate: 0.0,
            "Y Updated": 1.952102134532907,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D687",
            total_payment: 160150.0,
            pos_amount: 9775189.04,
            x_coordinate: 1.6383314874491677,
            "Y Updated": 0.9664533630043499,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D692",
            total_payment: 65637.0,
            pos_amount: 48092366.81,
            x_coordinate: 0.13648111821843603,
            "Y Updated": 4.754795988923739,
          },
          {
            Category: "KARNATAKA",
            agency_code: "D694",
            total_payment: 37358.0,
            pos_amount: 14872967.11,
            x_coordinate: 0.2511805460450588,
            "Y Updated": 1.4704604711473273,
          },

          {
            Category: "HARYANA",
            agency_code: "216560",
            total_payment: 0.0,
            pos_amount: 227831.91,
            x_coordinate: 0.0,
            "Y Updated": 0.02256040483107973,
          },
          {
            Category: "HARYANA",
            agency_code: "A297",
            total_payment: 0.0,
            pos_amount: 5584344.49,
            x_coordinate: 0.0,
            "Y Updated": 0.5529737797071949,
          },
          {
            Category: "HARYANA",
            agency_code: "A326",
            total_payment: 0.0,
            pos_amount: 389830.88,
            x_coordinate: 0.0,
            "Y Updated": 0.03860189061512964,
          },
          {
            Category: "HARYANA",
            agency_code: "C183",
            total_payment: 1945238.0,
            pos_amount: 207959123.04,
            x_coordinate: 0.9353944042290668,
            "Y Updated": 20.59255880398281,
          },
          {
            Category: "HARYANA",
            agency_code: "C487",
            total_payment: 0.0,
            pos_amount: 2172403.61,
            x_coordinate: 0.0,
            "Y Updated": 0.21511606911472164,
          },
          {
            Category: "HARYANA",
            agency_code: "C674",
            total_payment: 9999.999999999993,
            pos_amount: 19134893.83,
            x_coordinate: 0.05226054604139914,
            "Y Updated": 1.89477826527693,
          },
          {
            Category: "HARYANA",
            agency_code: "C749",
            total_payment: 320438.0,
            pos_amount: 109099938.61,
            x_coordinate: 0.2937105227395874,
            "Y Updated": 10.803310133718957,
          },
          {
            Category: "HARYANA",
            agency_code: "C865",
            total_payment: 33834.520000000004,
            pos_amount: 2344898.17,
            x_coordinate: 1.442899330677545,
            "Y Updated": 0.23219685075219712,
          },
          {
            Category: "HARYANA",
            agency_code: "C867",
            total_payment: 141500.0,
            pos_amount: 100067915.71,
            x_coordinate: 0.14140396449354606,
            "Y Updated": 9.908939836478405,
          },
          {
            Category: "HARYANA",
            agency_code: "C987",
            total_payment: 0.0,
            pos_amount: 421243.89,
            x_coordinate: 0.0,
            "Y Updated": 0.0417124743018606,
          },
          {
            Category: "HARYANA",
            agency_code: "C990",
            total_payment: 197802.0,
            pos_amount: 87052295.94,
            x_coordinate: 0.2272220368964573,
            "Y Updated": 8.620105225301224,
          },
          {
            Category: "HARYANA",
            agency_code: "D020",
            total_payment: 0.0,
            pos_amount: 148652.56,
            x_coordinate: 0.0,
            "Y Updated": 0.014719895614167342,
          },
          {
            Category: "HARYANA",
            agency_code: "D081",
            total_payment: 151692.0,
            pos_amount: 19286907.84,
            x_coordinate: 0.786502436048349,
            "Y Updated": 1.9098310188863599,
          },
          {
            Category: "HARYANA",
            agency_code: "D097",
            total_payment: 1000.0,
            pos_amount: 4639252.57,
            x_coordinate: 0.02155519633629259,
            "Y Updated": 0.45938874889310743,
          },
          {
            Category: "HARYANA",
            agency_code: "D164",
            total_payment: 179492.0,
            pos_amount: 117481680.01,
            x_coordinate: 0.15278297006369138,
            "Y Updated": 11.633288160824208,
          },
          {
            Category: "HARYANA",
            agency_code: "D269",
            total_payment: 0.0,
            pos_amount: 30919145.77,
            x_coordinate: 0.0,
            "Y Updated": 3.0616801904630755,
          },
          {
            Category: "HARYANA",
            agency_code: "D300",
            total_payment: 0.0,
            pos_amount: 657528.63,
            x_coordinate: 0.0,
            "Y Updated": 0.0651098965058285,
          },
          {
            Category: "HARYANA",
            agency_code: "D451",
            total_payment: 0.0,
            pos_amount: 480342.46,
            x_coordinate: 0.0,
            "Y Updated": 0.047564541574341895,
          },
          {
            Category: "HARYANA",
            agency_code: "D459",
            total_payment: 34000.0,
            pos_amount: 49530209.05,
            x_coordinate: 0.06864497576757149,
            "Y Updated": 4.904587630134904,
          },
          {
            Category: "HARYANA",
            agency_code: "D478",
            total_payment: 0.0,
            pos_amount: 1011593.3999999999,
            x_coordinate: 0.0,
            "Y Updated": 0.10017015012711943,
          },
          {
            Category: "HARYANA",
            agency_code: "D554",
            total_payment: 240452.0,
            pos_amount: 35951514.82,
            x_coordinate: 0.6688230000985532,
            "Y Updated": 3.5599961771367425,
          },
          {
            Category: "HARYANA",
            agency_code: "D563",
            total_payment: 154870.0,
            pos_amount: 48258643.86,
            x_coordinate: 0.3209166019030357,
            "Y Updated": 4.778674515262151,
          },
          {
            Category: "HARYANA",
            agency_code: "D569",
            total_payment: 0.0,
            pos_amount: 955703.84,
            x_coordinate: 0.0,
            "Y Updated": 0.09463584591384694,
          },
          {
            Category: "HARYANA",
            agency_code: "D595",
            total_payment: 68000.0,
            pos_amount: 29439872.98,
            x_coordinate: 0.23097925743835868,
            "Y Updated": 2.9151994231377225,
          },
          {
            Category: "HARYANA",
            agency_code: "D626",
            total_payment: 24124.0,
            pos_amount: 42984757.93,
            x_coordinate: 0.05612221904165555,
            "Y Updated": 4.256443008649511,
          },
          {
            Category: "HARYANA",
            agency_code: "D627",
            total_payment: 15800.0,
            pos_amount: 3460495.3200000003,
            x_coordinate: 0.45658203635426386,
            "Y Updated": 0.34266567547652477,
          },
          //   {
          //     Category: "HARYANA",
          //     agency_code: "D634",
          //     total_payment: 149000.0,
          //     pos_amount: 2170966.55,
          //     x_coordinate: 6.8633024308919,
          //     "Y Updated": 0.21497376834848325,
          //   },
          {
            Category: "HARYANA",
            agency_code: "D650",
            total_payment: 6422.0,
            pos_amount: 37172007.45,
            x_coordinate: 0.017276441173208684,
            "Y Updated": 3.6808519774772184,
          },
          {
            Category: "HARYANA",
            agency_code: "D658",
            total_payment: 0.0,
            pos_amount: 2172365.99,
            x_coordinate: 0.0,
            "Y Updated": 0.21511234390156012,
          },
          {
            Category: "HARYANA",
            agency_code: "D676",
            total_payment: 11582.0,
            pos_amount: 38380874.09,
            x_coordinate: 0.03017648835417651,
            "Y Updated": 3.800556547329559,
          },

          {
            Category: "ANDHRA PRADESH",
            agency_code: "C123",
            total_payment: 116102.0,
            pos_amount: 22835099.4,
            x_coordinate: 0.5084365868799328,
            "Y Updated": 2.3599669076647114,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "C129",
            total_payment: 2092737.83,
            pos_amount: 216757493.36,
            x_coordinate: 0.9654742715280863,
            "Y Updated": 22.401501406118403,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "C612",
            total_payment: 30000.0,
            pos_amount: 5617034.22,
            x_coordinate: 0.5340896783783525,
            "Y Updated": 0.5805104959788467,
          },
          //   {
          //     Category: "ANDHRA PRADESH",
          //     agency_code: "C828",
          //     total_payment: 40000.0,
          //     pos_amount: 431897.26,
          //     x_coordinate: 9.261461857850174,
          //     "Y Updated": 0.04463581363307147,
          //   },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "C865",
            total_payment: 42785.34,
            pos_amount: 2354654.02,
            x_coordinate: 1.8170542099429112,
            "Y Updated": 0.24334930489506354,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "C896",
            total_payment: 0.0,
            pos_amount: 258894.95,
            x_coordinate: 0.0,
            "Y Updated": 0.026756332602673502,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "C903",
            total_payment: 0.0,
            pos_amount: 350664.63,
            x_coordinate: 0.0,
            "Y Updated": 0.03624056580583531,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D045",
            total_payment: 820699.0,
            pos_amount: 182927233.57,
            x_coordinate: 0.44864779507308655,
            "Y Updated": 18.905204228533087,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D081",
            total_payment: 142201.0,
            pos_amount: 56638481.59,
            x_coordinate: 0.2510678182183238,
            "Y Updated": 5.853486333095489,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D114",
            total_payment: 903896.0,
            pos_amount: 117104259.13,
            x_coordinate: 0.7718728650138723,
            "Y Updated": 12.102516895257883,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D139",
            total_payment: 48896.0,
            pos_amount: 36879501.36,
            x_coordinate: 0.13258313750693293,
            "Y Updated": 3.811430870354597,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D290",
            total_payment: 176962.0,
            pos_amount: 21613617.32,
            x_coordinate: 0.8187523512607467,
            "Y Updated": 2.2337289072684685,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D403",
            total_payment: 552418.0,
            pos_amount: 50539355.58,
            x_coordinate: 1.093045199449692,
            "Y Updated": 5.223152508085859,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D455",
            total_payment: 69450.0,
            pos_amount: 16071868.15,
            x_coordinate: 0.43212151413773264,
            "Y Updated": 1.6609989873024362,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D641",
            total_payment: 117800.0,
            pos_amount: 38567530.37,
            x_coordinate: 0.3054382763684332,
            "Y Updated": 3.985885666149268,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D672",
            total_payment: 491982.0,
            pos_amount: 147686359.51,
            x_coordinate: 0.33312622887605775,
            "Y Updated": 15.263122575112313,
          },
          {
            Category: "ANDHRA PRADESH",
            agency_code: "D676",
            total_payment: 70722.0,
            pos_amount: 44718246.96,
            x_coordinate: 0.15815020670032096,
            "Y Updated": 4.621551285841046,
          },

          {
            Category: "TELANGANA",
            agency_code: "C123",
            total_payment: 1596239.26,
            pos_amount: 100830038.53,
            x_coordinate: 1.5830989289219306,
            "Y Updated": 10.76154444314771,
          },
          {
            Category: "TELANGANA",
            agency_code: "C134",
            total_payment: 1671045.7000000002,
            pos_amount: 123406362.54,
            x_coordinate: 1.3541001173730893,
            "Y Updated": 13.171105301584065,
          },
          {
            Category: "TELANGANA",
            agency_code: "C828",
            total_payment: 564670.0,
            pos_amount: 100309745.64,
            x_coordinate: 0.5629263601430462,
            "Y Updated": 10.706013818139342,
          },
          {
            Category: "TELANGANA",
            agency_code: "C865",
            total_payment: 28802.929999999997,
            pos_amount: 2321745.58,
            x_coordinate: 1.2405721905153793,
            "Y Updated": 0.24779885646297548,
          },
          {
            Category: "TELANGANA",
            agency_code: "C896",
            total_payment: 168556.0,
            pos_amount: 76163475.26,
            x_coordinate: 0.22130817878858433,
            "Y Updated": 8.128893293154938,
          },
          {
            Category: "TELANGANA",
            agency_code: "C903",
            total_payment: 390386.2,
            pos_amount: 125298583.08,
            x_coordinate: 0.31156473633125464,
            "Y Updated": 13.373061144647522,
          },
          {
            Category: "TELANGANA",
            agency_code: "D045",
            total_payment: 5000.0,
            pos_amount: 13477360.89,
            x_coordinate: 0.03709925140989528,
            "Y Updated": 1.4384326368269986,
          },
          {
            Category: "TELANGANA",
            agency_code: "D081",
            total_payment: 0.0,
            pos_amount: 40880150.54,
            x_coordinate: 0.0,
            "Y Updated": 4.363119991746163,
          },
          {
            Category: "TELANGANA",
            agency_code: "D116",
            total_payment: 0.0,
            pos_amount: 2016088.36,
            x_coordinate: 0.0,
            "Y Updated": 0.21517619951119518,
          },
          {
            Category: "TELANGANA",
            agency_code: "D139",
            total_payment: 478579.0,
            pos_amount: 33640718.25,
            x_coordinate: 1.4226182581580284,
            "Y Updated": 3.590458655225759,
          },
          {
            Category: "TELANGANA",
            agency_code: "D241",
            total_payment: 161888.0,
            pos_amount: 30973331.35,
            x_coordinate: 0.5226689960167943,
            "Y Updated": 3.3057696568884296,
          },
          {
            Category: "TELANGANA",
            agency_code: "D403",
            total_payment: 1003492.0,
            pos_amount: 84175387.33,
            x_coordinate: 1.1921442025160207,
            "Y Updated": 8.984001047479987,
          },
          {
            Category: "TELANGANA",
            agency_code: "D503",
            total_payment: 233022.0,
            pos_amount: 61389034.74,
            x_coordinate: 0.37958244658335866,
            "Y Updated": 6.552023933620614,
          },
          {
            Category: "TELANGANA",
            agency_code: "D672",
            total_payment: 429942.4,
            pos_amount: 49544539.71,
            x_coordinate: 0.8677896747383063,
            "Y Updated": 5.2878663320735075,
          },
          {
            Category: "TELANGANA",
            agency_code: "D676",
            total_payment: 0.0,
            pos_amount: 34571743.52,
            x_coordinate: 0.0,
            "Y Updated": 3.6898265615250065,
          },
          {
            Category: "TELANGANA",
            agency_code: "D678",
            total_payment: 15318.0,
            pos_amount: 31321884.85,
            x_coordinate: 0.048905102848559895,
            "Y Updated": 3.3429706144180518,
          },
          {
            Category: "TELANGANA",
            agency_code: "D681",
            total_payment: 79210.0,
            pos_amount: 9672327.81,
            x_coordinate: 0.8189341961518982,
            "Y Updated": 1.0323231758464404,
          },
          {
            Category: "TELANGANA",
            agency_code: "c134",
            total_payment: 0.0,
            pos_amount: 770560.0,
            x_coordinate: 0.0,
            "Y Updated": 0.08224152055287227,
          },

          {
            Category: "GUJARAT",
            agency_code: "C473",
            total_payment: 279196.00000000006,
            pos_amount: 33442213.99,
            x_coordinate: 0.8348609936037313,
            "Y Updated": 3.863807151370441,
          },
          {
            Category: "GUJARAT",
            agency_code: "C487",
            total_payment: 0.0,
            pos_amount: 26193.76,
            x_coordinate: 0.0,
            "Y Updated": 0.003026343807247464,
          },
          {
            Category: "GUJARAT",
            agency_code: "C548",
            total_payment: 152340.35,
            pos_amount: 19700997.47,
            x_coordinate: 0.7732621164587156,
            "Y Updated": 2.276190653420221,
          },
          {
            Category: "GUJARAT",
            agency_code: "C567",
            total_payment: 20107.0,
            pos_amount: 18879113.63,
            x_coordinate: 0.10650394077849512,
            "Y Updated": 2.1812328058465713,
          },
          {
            Category: "GUJARAT",
            agency_code: "C865",
            total_payment: 8879.0,
            pos_amount: 2135944.69,
            x_coordinate: 0.41569428466801733,
            "Y Updated": 0.2467802631315475,
          },
          {
            Category: "GUJARAT",
            agency_code: "C867",
            total_payment: 740951.0,
            pos_amount: 153285210.49,
            x_coordinate: 0.48338061945535055,
            "Y Updated": 17.710086200264318,
          },
          {
            Category: "GUJARAT",
            agency_code: "D011",
            total_payment: 0.0,
            pos_amount: 18612030.98,
            x_coordinate: 0.0,
            "Y Updated": 2.1503749250440163,
          },
          {
            Category: "GUJARAT",
            agency_code: "D081",
            total_payment: 236209.0,
            pos_amount: 26154435.5,
            x_coordinate: 0.9031317078130017,
            "Y Updated": 3.021800379459773,
          },
          {
            Category: "GUJARAT",
            agency_code: "D092",
            total_payment: 791815.0,
            pos_amount: 34670371.89,
            x_coordinate: 2.2838376309092427,
            "Y Updated": 4.005704613017301,
          },
          {
            Category: "GUJARAT",
            agency_code: "D093",
            total_payment: 54043.0,
            pos_amount: 72873695.43,
            x_coordinate: 0.07415981813617764,
            "Y Updated": 8.419595234735997,
          },
          {
            Category: "GUJARAT",
            agency_code: "D328",
            total_payment: 393230.0,
            pos_amount: 131215822.78,
            x_coordinate: 0.29968184603719633,
            "Y Updated": 15.160259263394554,
          },
          {
            Category: "GUJARAT",
            agency_code: "D348",
            total_payment: 176717.0,
            pos_amount: 88567948.46,
            x_coordinate: 0.19952703328090615,
            "Y Updated": 10.232859365838793,
          },
          {
            Category: "GUJARAT",
            agency_code: "D361",
            total_payment: 12000.0,
            pos_amount: 38383415.8,
            x_coordinate: 0.03126350208779491,
            "Y Updated": 4.43469790924764,
          },
          {
            Category: "GUJARAT",
            agency_code: "D430",
            total_payment: 0.0,
            pos_amount: 38757653.67,
            x_coordinate: 0.0,
            "Y Updated": 4.4779361637140465,
          },
          {
            Category: "GUJARAT",
            agency_code: "D439",
            total_payment: 67459.0,
            pos_amount: 2576135.5700000003,
            x_coordinate: 2.6186121874013017,
            "Y Updated": 0.29763851882659903,
          },
          {
            Category: "GUJARAT",
            agency_code: "D521",
            total_payment: 532971.0,
            pos_amount: 59283461.98,
            x_coordinate: 0.8990213833662487,
            "Y Updated": 6.849422840988215,
          },
          {
            Category: "GUJARAT",
            agency_code: "D528",
            total_payment: 242550.0,
            pos_amount: 53661826.14,
            x_coordinate: 0.4519972901540916,
            "Y Updated": 6.199916897168603,
          },
          {
            Category: "GUJARAT",
            agency_code: "D676",
            total_payment: 169682.0,
            pos_amount: 64119322.88,
            x_coordinate: 0.2646347347079159,
            "Y Updated": 7.408142844814515,
          },

          //   {
          //     Category: "DELHI",
          //     agency_code: "225504",
          //     total_payment: 272000.0,
          //     pos_amount: 1394008.63,
          //     x_coordinate: 19.512074326254353,
          //     "Y Updated": 0.1696513362509588,
          //   },
          {
            Category: "DELHI",
            agency_code: "A326",
            total_payment: 395021.0,
            pos_amount: 59218351.56,
            x_coordinate: 0.6670584195505086,
            "Y Updated": 7.206894029582194,
          },
          {
            Category: "DELHI",
            agency_code: "C183",
            total_payment: 0.0,
            pos_amount: 1175750.49,
            x_coordinate: 0.0,
            "Y Updated": 0.14308924452370111,
          },
          {
            Category: "DELHI",
            agency_code: "C749",
            total_payment: 107000.0,
            pos_amount: 3613873.41,
            x_coordinate: 2.9608120667403233,
            "Y Updated": 0.43980965386728577,
          },
          {
            Category: "DELHI",
            agency_code: "C865",
            total_payment: 53605.45,
            pos_amount: 1485257.73,
            x_coordinate: 3.60916822159882,
            "Y Updated": 0.18075638353226392,
          },
          {
            Category: "DELHI",
            agency_code: "C867",
            total_payment: 0.0,
            pos_amount: 355838.0,
            x_coordinate: 0.0,
            "Y Updated": 0.043305608652414646,
          },
          {
            Category: "DELHI",
            agency_code: "C990",
            total_payment: 0.0,
            pos_amount: 1078698.79,
            x_coordinate: 0.0,
            "Y Updated": 0.1312780187994908,
          },
          {
            Category: "DELHI",
            agency_code: "D081",
            total_payment: 11000.0,
            pos_amount: 136727270.81,
            x_coordinate: 0.008045212878772301,
            "Y Updated": 16.639756523503888,
          },
          {
            Category: "DELHI",
            agency_code: "D097",
            total_payment: 1046787.0,
            pos_amount: 187723958.62,
            x_coordinate: 0.5576203526151701,
            "Y Updated": 22.84607120847071,
          },
          {
            Category: "DELHI",
            agency_code: "D164",
            total_payment: 0.0,
            pos_amount: 938950.34,
            x_coordinate: 0.0,
            "Y Updated": 0.11427058371531898,
          },
          {
            Category: "DELHI",
            agency_code: "D300",
            total_payment: 248765.0,
            pos_amount: 75682982.27,
            x_coordinate: 0.3286934427511428,
            "Y Updated": 9.210645326896666,
          },
          {
            Category: "DELHI",
            agency_code: "D451",
            total_payment: 100606.0,
            pos_amount: 49212090.04,
            x_coordinate: 0.20443350387725168,
            "Y Updated": 5.989128514210491,
          },
          {
            Category: "DELHI",
            agency_code: "D459",
            total_payment: 0.0,
            pos_amount: 1838583.8599999999,
            x_coordinate: 0.0,
            "Y Updated": 0.22375629672998923,
          },
          {
            Category: "DELHI",
            agency_code: "D478",
            total_payment: 894044.0,
            pos_amount: 58111234.31,
            x_coordinate: 1.53850457767019,
            "Y Updated": 7.072157474293444,
          },
          {
            Category: "DELHI",
            agency_code: "D563",
            total_payment: 1000.0,
            pos_amount: 23719388.24,
            x_coordinate: 0.0042159603354087185,
            "Y Updated": 2.8866578178725324,
          },
          {
            Category: "DELHI",
            agency_code: "D567",
            total_payment: 35000.0,
            pos_amount: 8573295.62,
            x_coordinate: 0.40824440858368544,
            "Y Updated": 1.0433730657804408,
          },
          {
            Category: "DELHI",
            agency_code: "D569",
            total_payment: 14433.999999999998,
            pos_amount: 41190618.02,
            x_coordinate: 0.03504196026627133,
            "Y Updated": 5.012912572927059,
          },
          {
            Category: "DELHI",
            agency_code: "D607",
            total_payment: 261022.0,
            pos_amount: 32951859.38,
            x_coordinate: 0.7921313240321313,
            "Y Updated": 4.01025277423906,
          },
          {
            Category: "DELHI",
            agency_code: "D634",
            total_payment: 174229.9,
            pos_amount: 45437308.41,
            x_coordinate: 0.383451190435512,
            "Y Updated": 5.529736273873303,
          },
          {
            Category: "DELHI",
            agency_code: "D658",
            total_payment: 165301.0,
            pos_amount: 44944395.26,
            x_coordinate: 0.3677900192977254,
            "Y Updated": 5.469748571678684,
          },
          {
            Category: "DELHI",
            agency_code: "D676",
            total_payment: 40976.0,
            pos_amount: 25717404.99,
            x_coordinate: 0.15933178334257744,
            "Y Updated": 3.1298171528970924,
          },

          //
          {
            Category: "ROMG",
            agency_code: "C188",
            total_payment: 40000.0,
            pos_amount: 10130658.65,
            x_coordinate: 0.3948410600134079,
            "Y Updated": 1.0015979314239032,
          },
          {
            Category: "ROMG",
            agency_code: "C191",
            total_payment: 161697.0,
            pos_amount: 18213642.38,
            x_coordinate: 0.8877795919478244,
            "Y Updated": 1.8007463445136151,
          },
          {
            Category: "ROMG",
            agency_code: "C470",
            total_payment: 650276.0,
            pos_amount: 54003251.03,
            x_coordinate: 1.2041423203183772,
            "Y Updated": 5.339193273658842,
          },
          {
            Category: "ROMG",
            agency_code: "C759",
            total_payment: 188225.36,
            pos_amount: 11023033.78,
            x_coordinate: 1.707564031433096,
            "Y Updated": 1.089825273311702,
          },
          {
            Category: "ROMG",
            agency_code: "C766",
            total_payment: 1045358.6699999999,
            pos_amount: 106324238.71,
            x_coordinate: 0.9831800186702695,
            "Y Updated": 10.512064539076862,
          },
          {
            Category: "ROMG",
            agency_code: "C865",
            total_payment: 0.0,
            pos_amount: 2772606.71,
            x_coordinate: 0.0,
            "Y Updated": 0.2741220725454049,
          },
          {
            Category: "ROMG",
            agency_code: "D032",
            total_payment: 0.0,
            pos_amount: 3995486.45,
            x_coordinate: 0.0,
            "Y Updated": 0.3950257433017185,
          },
          {
            Category: "ROMG",
            agency_code: "D081",
            total_payment: 0.0,
            pos_amount: 20807700.43,
            x_coordinate: 0.0,
            "Y Updated": 2.0572156686353518,
          },
          {
            Category: "ROMG",
            agency_code: "D094",
            total_payment: 287535.0,
            pos_amount: 81557763.66,
            x_coordinate: 0.35255380615717097,
            "Y Updated": 8.063452752246821,
          },
          {
            Category: "ROMG",
            agency_code: "D096",
            total_payment: 212500.0,
            pos_amount: 15551660.11,
            x_coordinate: 1.3664136079167435,
            "Y Updated": 1.537561488796548,
          },
          {
            Category: "ROMG",
            agency_code: "D116",
            total_payment: 874011.0,
            pos_amount: 117387146.65,
            x_coordinate: 0.7445542590842078,
            "Y Updated": 11.605832090729299,
          },
          {
            Category: "ROMG",
            agency_code: "D217",
            total_payment: 235400.0,
            pos_amount: 27961164.27,
            x_coordinate: 0.8418819678855956,
            "Y Updated": 2.764464311808191,
          },
          {
            Category: "ROMG",
            agency_code: "D318",
            total_payment: 351286.0,
            pos_amount: 23167973.11,
            x_coordinate: 1.516256939405607,
            "Y Updated": 2.2905711014417225,
          },
          {
            Category: "ROMG",
            agency_code: "D362",
            total_payment: 565449.6799999999,
            pos_amount: 47281520.68,
            x_coordinate: 1.1959210953195594,
            "Y Updated": 4.674629255982729,
          },
          {
            Category: "ROMG",
            agency_code: "D374",
            total_payment: 376551.0,
            pos_amount: 21738070.13,
            x_coordinate: 1.7322190872884078,
            "Y Updated": 2.1491994575649565,
          },
          {
            Category: "ROMG",
            agency_code: "D426",
            total_payment: 108432.0,
            pos_amount: 35862860.55,
            x_coordinate: 0.30235178771872956,
            "Y Updated": 3.5456891977920804,
          },
          {
            Category: "ROMG",
            agency_code: "D445",
            total_payment: 335241.0,
            pos_amount: 30617968.85,
            x_coordinate: 1.0949158699663384,
            "Y Updated": 3.027137259684641,
          },
          {
            Category: "ROMG",
            agency_code: "D544",
            total_payment: 809542.0700000001,
            pos_amount: 89369061.45,
            x_coordinate: 0.9058415259881865,
            "Y Updated": 8.835740120571103,
          },
          {
            Category: "ROMG",
            agency_code: "D546",
            total_payment: 61377.0,
            pos_amount: 13284333.040000001,
            x_coordinate: 0.4620254537069329,
            "Y Updated": 1.3133954023029106,
          },
          {
            Category: "ROMG",
            agency_code: "D613",
            total_payment: 54880.0,
            pos_amount: 11826204.51,
            x_coordinate: 0.4640542107452529,
            "Y Updated": 1.1692331548267134,
          },
          {
            Category: "ROMG",
            agency_code: "D614",
            total_payment: 98786.0,
            pos_amount: 47058497.55,
            x_coordinate: 0.2099217041407647,
            "Y Updated": 4.652579405781953,
          },
          {
            Category: "ROMG",
            agency_code: "D676",
            total_payment: 35763.64,
            pos_amount: 57241549.92,
            x_coordinate: 0.06247846197383329,
            "Y Updated": 5.659357399370088,
          },
          {
            Category: "ROMG",
            agency_code: "D682",
            total_payment: 36124.0,
            pos_amount: 65493836.88,
            x_coordinate: 0.0551563348871858,
            "Y Updated": 6.475244483735768,
          },
          {
            Category: "ROMG",
            agency_code: "D684",
            total_payment: 0.0,
            pos_amount: 19744529.97,
            x_coordinate: 0.0,
            "Y Updated": 1.952102134532907,
          },
          {
            Category: "ROMG",
            agency_code: "D687",
            total_payment: 160150.0,
            pos_amount: 9775189.04,
            x_coordinate: 1.6383314874491677,
            "Y Updated": 0.9664533630043499,
          },
          {
            Category: "ROMG",
            agency_code: "D692",
            total_payment: 65637.0,
            pos_amount: 48092366.81,
            x_coordinate: 0.13648111821843603,
            "Y Updated": 4.754795988923739,
          },
          {
            Category: "ROMG",
            agency_code: "D694",
            total_payment: 37358.0,
            pos_amount: 14872967.11,
            x_coordinate: 0.2511805460450588,
            "Y Updated": 1.4704604711473273,
          },
          {
            Category: "KOLKATA",
            agency_code: "A326",
            total_payment: 395021.0,
            pos_amount: 59218351.56,
            x_coordinate: 0.6670584195505086,
            "Y Updated": 7.206894029582194,
          },
          {
            Category: "KOLKATA",
            agency_code: "C183",
            total_payment: 0.0,
            pos_amount: 1175750.49,
            x_coordinate: 0.0,
            "Y Updated": 0.14308924452370111,
          },
          {
            Category: "KOLKATA",
            agency_code: "C749",
            total_payment: 107000.0,
            pos_amount: 3613873.41,
            x_coordinate: 2.9608120667403233,
            "Y Updated": 0.43980965386728577,
          },
          {
            Category: "KOLKATA",
            agency_code: "C865",
            total_payment: 53605.45,
            pos_amount: 1485257.73,
            x_coordinate: 3.60916822159882,
            "Y Updated": 0.18075638353226392,
          },
          {
            Category: "KOLKATA",
            agency_code: "C867",
            total_payment: 0.0,
            pos_amount: 355838.0,
            x_coordinate: 0.0,
            "Y Updated": 0.043305608652414646,
          },
          {
            Category: "KOLKATA",
            agency_code: "C990",
            total_payment: 0.0,
            pos_amount: 1078698.79,
            x_coordinate: 0.0,
            "Y Updated": 0.1312780187994908,
          },
          {
            Category: "KOLKATA",
            agency_code: "D081",
            total_payment: 11000.0,
            pos_amount: 136727270.81,
            x_coordinate: 0.008045212878772301,
            "Y Updated": 16.639756523503888,
          },
          {
            Category: "KOLKATA",
            agency_code: "D097",
            total_payment: 1046787.0,
            pos_amount: 187723958.62,
            x_coordinate: 0.5576203526151701,
            "Y Updated": 22.84607120847071,
          },
          {
            Category: "KOLKATA",
            agency_code: "D164",
            total_payment: 0.0,
            pos_amount: 938950.34,
            x_coordinate: 0.0,
            "Y Updated": 0.11427058371531898,
          },
          {
            Category: "KOLKATA",
            agency_code: "D300",
            total_payment: 248765.0,
            pos_amount: 75682982.27,
            x_coordinate: 0.3286934427511428,
            "Y Updated": 9.210645326896666,
          },
          {
            Category: "KOLKATA",
            agency_code: "D451",
            total_payment: 100606.0,
            pos_amount: 49212090.04,
            x_coordinate: 0.20443350387725168,
            "Y Updated": 5.989128514210491,
          },
          {
            Category: "KOLKATA",
            agency_code: "D459",
            total_payment: 0.0,
            pos_amount: 1838583.8599999999,
            x_coordinate: 0.0,
            "Y Updated": 0.22375629672998923,
          },
          {
            Category: "KOLKATA",
            agency_code: "D478",
            total_payment: 894044.0,
            pos_amount: 58111234.31,
            x_coordinate: 1.53850457767019,
            "Y Updated": 7.072157474293444,
          },
          {
            Category: "KOLKATA",
            agency_code: "D563",
            total_payment: 1000.0,
            pos_amount: 23719388.24,
            x_coordinate: 0.0042159603354087185,
            "Y Updated": 2.8866578178725324,
          },
          {
            Category: "KOLKATA",
            agency_code: "D567",
            total_payment: 35000.0,
            pos_amount: 8573295.62,
            x_coordinate: 0.40824440858368544,
            "Y Updated": 1.0433730657804408,
          },
          {
            Category: "KOLKATA",
            agency_code: "D569",
            total_payment: 14433.999999999998,
            pos_amount: 41190618.02,
            x_coordinate: 0.03504196026627133,
            "Y Updated": 5.012912572927059,
          },
          {
            Category: "KOLKATA",
            agency_code: "D607",
            total_payment: 261022.0,
            pos_amount: 32951859.38,
            x_coordinate: 0.7921313240321313,
            "Y Updated": 4.01025277423906,
          },
          {
            Category: "KOLKATA",
            agency_code: "D634",
            total_payment: 174229.9,
            pos_amount: 45437308.41,
            x_coordinate: 0.383451190435512,
            "Y Updated": 5.529736273873303,
          },
          {
            Category: "KOLKATA",
            agency_code: "D658",
            total_payment: 165301.0,
            pos_amount: 44944395.26,
            x_coordinate: 0.3677900192977254,
            "Y Updated": 5.469748571678684,
          },
          {
            Category: "KOLKATA",
            agency_code: "D676",
            total_payment: 40976.0,
            pos_amount: 25717404.99,
            x_coordinate: 0.15933178334257744,
            "Y Updated": 3.1298171528970924,
          },
          {
            Category: "Others",
            agency_code: "C188",
            total_payment: 40000.0,
            pos_amount: 10130658.65,
            x_coordinate: 0.3948410600134079,
            "Y Updated": 1.0015979314239032,
          },
          {
            Category: "Others",
            agency_code: "C191",
            total_payment: 161697.0,
            pos_amount: 18213642.38,
            x_coordinate: 0.8877795919478244,
            "Y Updated": 1.8007463445136151,
          },
          {
            Category: "Others",
            agency_code: "C470",
            total_payment: 650276.0,
            pos_amount: 54003251.03,
            x_coordinate: 1.2041423203183772,
            "Y Updated": 5.339193273658842,
          },
          {
            Category: "Others",
            agency_code: "C759",
            total_payment: 188225.36,
            pos_amount: 11023033.78,
            x_coordinate: 1.707564031433096,
            "Y Updated": 1.089825273311702,
          },
          {
            Category: "Others",
            agency_code: "C766",
            total_payment: 1045358.6699999999,
            pos_amount: 106324238.71,
            x_coordinate: 0.9831800186702695,
            "Y Updated": 10.512064539076862,
          },
          {
            Category: "Others",
            agency_code: "C865",
            total_payment: 0.0,
            pos_amount: 2772606.71,
            x_coordinate: 0.0,
            "Y Updated": 0.2741220725454049,
          },
          {
            Category: "Others",
            agency_code: "D032",
            total_payment: 0.0,
            pos_amount: 3995486.45,
            x_coordinate: 0.0,
            "Y Updated": 0.3950257433017185,
          },
          {
            Category: "Others",
            agency_code: "D081",
            total_payment: 0.0,
            pos_amount: 20807700.43,
            x_coordinate: 0.0,
            "Y Updated": 2.0572156686353518,
          },
          {
            Category: "Others",
            agency_code: "D094",
            total_payment: 287535.0,
            pos_amount: 81557763.66,
            x_coordinate: 0.35255380615717097,
            "Y Updated": 8.063452752246821,
          },
          {
            Category: "Others",
            agency_code: "D096",
            total_payment: 212500.0,
            pos_amount: 15551660.11,
            x_coordinate: 1.3664136079167435,
            "Y Updated": 1.537561488796548,
          },
          {
            Category: "Others",
            agency_code: "D116",
            total_payment: 874011.0,
            pos_amount: 117387146.65,
            x_coordinate: 0.7445542590842078,
            "Y Updated": 11.605832090729299,
          },
          {
            Category: "Others",
            agency_code: "D217",
            total_payment: 235400.0,
            pos_amount: 27961164.27,
            x_coordinate: 0.8418819678855956,
            "Y Updated": 2.764464311808191,
          },
          {
            Category: "Others",
            agency_code: "D318",
            total_payment: 351286.0,
            pos_amount: 23167973.11,
            x_coordinate: 1.516256939405607,
            "Y Updated": 2.2905711014417225,
          },
          {
            Category: "Others",
            agency_code: "D362",
            total_payment: 565449.6799999999,
            pos_amount: 47281520.68,
            x_coordinate: 1.1959210953195594,
            "Y Updated": 4.674629255982729,
          },
          {
            Category: "Others",
            agency_code: "D374",
            total_payment: 376551.0,
            pos_amount: 21738070.13,
            x_coordinate: 1.7322190872884078,
            "Y Updated": 2.1491994575649565,
          },
          {
            Category: "Others",
            agency_code: "D426",
            total_payment: 108432.0,
            pos_amount: 35862860.55,
            x_coordinate: 0.30235178771872956,
            "Y Updated": 3.5456891977920804,
          },
          {
            Category: "Others",
            agency_code: "D445",
            total_payment: 335241.0,
            pos_amount: 30617968.85,
            x_coordinate: 1.0949158699663384,
            "Y Updated": 3.027137259684641,
          },
          {
            Category: "Others",
            agency_code: "D544",
            total_payment: 809542.0700000001,
            pos_amount: 89369061.45,
            x_coordinate: 0.9058415259881865,
            "Y Updated": 8.835740120571103,
          },
          {
            Category: "Others",
            agency_code: "D546",
            total_payment: 61377.0,
            pos_amount: 13284333.040000001,
            x_coordinate: 0.4620254537069329,
            "Y Updated": 1.3133954023029106,
          },
          {
            Category: "Others",
            agency_code: "D613",
            total_payment: 54880.0,
            pos_amount: 11826204.51,
            x_coordinate: 0.4640542107452529,
            "Y Updated": 1.1692331548267134,
          },
          {
            Category: "Others",
            agency_code: "D614",
            total_payment: 98786.0,
            pos_amount: 47058497.55,
            x_coordinate: 0.2099217041407647,
            "Y Updated": 4.652579405781953,
          },
          {
            Category: "Others",
            agency_code: "D676",
            total_payment: 35763.64,
            pos_amount: 57241549.92,
            x_coordinate: 0.06247846197383329,
            "Y Updated": 5.659357399370088,
          },
          {
            Category: "Others",
            agency_code: "D682",
            total_payment: 36124.0,
            pos_amount: 65493836.88,
            x_coordinate: 0.0551563348871858,
            "Y Updated": 6.475244483735768,
          },
          {
            Category: "Others",
            agency_code: "D684",
            total_payment: 0.0,
            pos_amount: 19744529.97,
            x_coordinate: 0.0,
            "Y Updated": 1.952102134532907,
          },
          {
            Category: "Others",
            agency_code: "D687",
            total_payment: 160150.0,
            pos_amount: 9775189.04,
            x_coordinate: 1.6383314874491677,
            "Y Updated": 0.9664533630043499,
          },
          {
            Category: "Others",
            agency_code: "D692",
            total_payment: 65637.0,
            pos_amount: 48092366.81,
            x_coordinate: 0.13648111821843603,
            "Y Updated": 4.754795988923739,
          },
          {
            Category: "Others",
            agency_code: "D694",
            total_payment: 37358.0,
            pos_amount: 14872967.11,
            x_coordinate: 0.2511805460450588,
            "Y Updated": 1.4704604711473273,
          },
        ],
      },
      cached_output: false,
    };

    // if () {
      const MRRCoordinates = (data?.impact_assessment?.categories || []).filter(
        (coord: { Category: string; metric: string }) =>
          coord.Category === "TAMIL NADU"
      );

      setImpactAssessmentDataMeterics(MRRCoordinates);
    //  } 
    //else if (selectedCategoryButton === "MAHARASHTRA") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "MAHARASHTRA"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "UTTAR PRADESH") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "UTTAR PRADESH"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "MADHYA PRADESH") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "MADHYA PRADESH"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "KARNATAKA") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "KARNATAKA"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "HARYANA") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "HARYANA"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "ANDHRA PRADESH") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "ANDHRA PRADESH"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "GUJARAT") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "GUJARAT"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "DELHI") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "DELHI"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "TELANGANA") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "TELANGANA"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "ROMG") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "ROMG"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "KOLKATA") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "KOLKATA"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // } else if (selectedCategoryButton === "Others") {
    //   const POSCoordinates = (data?.impact_assessment?.categories || []).filter(
    //     (coord: { Category: string; metric: string }) =>
    //       coord.Category === "Others"
    //   );

    //   setImpactAssessmentDataMeterics(POSCoordinates);
    // }

    setLoader(false);
  };
  const formatYAxisTick = (tick: any) => {
    // if (tick == 0) {
    //   return `${tick}`;
    // } else {
    return `${tick.toFixed(1)}%`;
    // }
  };

  return (
    <div className="w-full relative xl:w-[48%] h-[460px] mt-3 rounded-xl py-4 p-3 -mr-2 shadow-md bg-white">
      
 <div className="w-full flex flex-wrap md:flex justify-between lg:px-0 my-1">
          <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans']">
          Allocation Optimization
            </h1>
            {/* <div className="flex items-center gap-2 lg:gap-7 mr-3">
            
                <div  className="flex items-center">
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: "#4169E1",
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    Large
                  </span>
                </div>
            </div> */}
          </div>
      <p
        className="
      text-[14px] italic text-[#6A7691] font-[400]
          font-['DM Sans' !important]
           top-1/2 transform -translate-y-1/2 -rotate-90
         customClassfour agency_text
  "
        style={{ zIndex: 100 }}
      >
        Volume %
      </p>
      {loader ? (
        <Loader />
      ) : (
        <>
          <ResponsiveContainer
            style={{ marginLeft: 10, marginTop: -26 }}
            width="95%"
            height={400}
          >
            <ScatterChart
              width={600}
              height={600}
              margin={{ top: 43, bottom: -1, right: 8, left: 10 }}
            >
              <CartesianGrid stroke="#9ca3af" />
              <XAxis
                type="number"
                dataKey={"x_coordinate"}
                fontSize={14}
                // tickCount={12}
                domain={[0.0, 5.0]}
                ticks={[0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]}
                axisLine={false}
                tickLine={false}
                // tick={true}
                tick={{ fill: "black" }}
                tickFormatter={formatYAxisTick}
                width={70}
              />
              <YAxis
                type="number"
                dataKey="Y Updated"
                domain={[0.0, 25.0]}
                // padding={{top:1}}
                fontSize={14}
                // ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}
                ticks={[0, 5, 10, 15, 20, 25]}
                // ticks={majorTicks}
                interval={0}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "black" }}
                 tickFormatter={formatYAxisTick}
                // width={80}
              />

              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomTooltip />}
                labelStyle={{ display: "none" }}
              />
            <ReferenceLine segment={[{ x: 0, y: 2.5 }, { x: 4.5, y: 25 }]} stroke="Red" strokeDasharray="5 5"  strokeWidth={1} /> 
              <ReferenceLine segment={[{ x: 0, y: 0 }, { x: 5.0, y: 25 }]} stroke="#9ca3af" strokeDasharray="5 5"  strokeWidth={1} /> 
              <ReferenceLine segment={[{ x: 0.5, y: 0 }, { x: 5.0, y: 22.5 }]} stroke="Red" strokeDasharray="5 5"   strokeWidth={1} /> 
              <Scatter
                name="Data"
                data={impactAssessmentDataMetrics}
                fill="#4169E1"

                // shape={<CustomDot />}
              />
            </ScatterChart>
          </ResponsiveContainer>

          <p className="-mt-[1px]  text-center text-[14px] italic text-[#6A7691] font-[400] font-['DM Sans'] benchmark_text customClasssix ">
            Performance %
          </p>
        </>
      )}
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip">
            <rect x="5" y="23" width="700" height="600" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default AgencyScatterChart;
