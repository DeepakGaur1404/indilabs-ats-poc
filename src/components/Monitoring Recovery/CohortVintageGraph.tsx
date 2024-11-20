import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const staticRecoveryData =
{
  "all": [
      {
          "Q": "Q1",
          "sub_segment": null,
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17
          ],
          "percentage": [
              2.543420712374272,
              4.519286435667304,
              6.446374781389511,
              8.236568467686634,
              9.634099348337703,
              10.657722823984836,
              11.701623399446422,
              12.897737968425243,
              13.451350410815342,
              14.104341562834477,
              14.741073965717048,
              15.233881353516653,
              15.897729084479769,
              16.402160053908997,
              16.686869115152863
          ]
      },
      {
          "Q": "Q2",
          "sub_segment": null,
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14
          ],
          "percentage": [
              3.8156074814016074,
              6.394679945059988,
              8.333750125895499,
              9.837139030683447,
              11.110670685028008,
              12.033950406165713,
              12.885516409205653,
              13.769161421306473,
              14.418499427073066,
              15.137223753317976,
              15.730220062031721,
              16.326307740955407
          ]
      },
      {
          "Q": "Q3",
          "sub_segment": null,
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11
          ],
          "percentage": [
              3.840895921280029,
              6.013539296033738,
              7.484455590451813,
              8.7425371396014,
              10.089533924702298,
              11.093767947537662,
              12.00182708128399,
              12.845058738406857,
              13.45088688386669
          ]
      },
      {
          "Q": "Q4",
          "sub_segment": null,
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
          ],
          "percentage": [
              3.2928016644980675,
              5.9373138857960175,
              7.605818897049241,
              8.874006451304396,
              9.969856990013556,
              10.765539194047996
          ]
      },
      {
          "Q": "Q5",
          "sub_segment": null,
          "mob": [
              1,
              2,
              3,
              4,
              5
          ],
          "percentage": [
              2.7245575698484203,
              4.877166977050139,
              6.256691702279095
          ]
      },
      {
          "Q": "Q6",
          "sub_segment": null,
          "mob": [
              1,
              2
          ],
          "percentage": [
          ]
      }
  ],
  "pos_seg": [
      {
          "Q": "Q1",
          "sub_segment": "<1L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17
          ],
          "percentage": [
              9.594656776326483,
              14.886424493308215,
              19.642973088031134,
              25.319614399400926,
              29.043012011705038,
              31.456665147639086,
              34.02844480431793,
              36.082880173580115,
              38.30069571968571,
              40.67514154114452,
              42.15554068620138,
              43.31853682569394,
              44.61814352888405,
              45.954952215938214,
              46.717672995008414
          ]
      },
      {
          "Q": "Q2",
          "sub_segment": "<1L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14
          ],
          "percentage": [
              15.514916042637857,
              23.664410182470586,
              29.88685696727732,
              34.70243721571485,
              38.58379045953336,
              41.056513150112636,
              43.78902345388657,
              46.69885300870418,
              48.29756842271616,
              50.21730967406073,
              51.62862639603181,
              53.04106254613367
          ]
      },
      {
          "Q": "Q3",
          "sub_segment": "<1L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11
          ],
          "percentage": [
              15.07237778751423,
              23.51369694325161,
              27.61887162877561,
              30.628504278942415,
              34.38286943944837,
              37.59601213840549,
              39.43600287456442,
              41.213243787261725,
              42.31345937475559
          ]
      },
      {
          "Q": "Q4",
          "sub_segment": "<1L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
          ],
          "percentage": [
              14.917142745746123,
              21.49704741489047,
              26.34952400873019,
              29.46890812158595,
              31.8177501631707,
              34.135788757196146
          ]
      },
      {
          "Q": "Q5",
          "sub_segment": "<1L",
          "mob": [
              1,
              2,
              3,
              4,
              5
          ],
          "percentage": [
              9.34508733256491,
              15.627594441597907,
              19.668622873389538
          ]
      },
      {
          "Q": "Q6",
          "sub_segment": "<1L",
          "mob": [
              1,
              2
          ],
          "percentage": [
          ]
      },
      {
          "Q": "Q1",
          "sub_segment": "1-5L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17
          ],
          "percentage": [
              2.4905919559167535,
              4.654105837329876,
              6.748371406279736,
              8.626060999912454,
              10.141418239838973,
              11.40196780951416,
              12.732541276478731,
              14.16943889018943,
              14.828292589006233,
              15.616108915056241,
              16.424088964441342,
              17.11132932197606,
              17.995547051858903,
              18.638930765922506,
              19.0074855839667
          ]
      },
      {
          "Q": "Q2",
          "sub_segment": "1-5L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14
          ],
          "percentage": [
              4.093157696238495,
              7.459856344319886,
              9.63135515426523,
              11.171025103868184,
              12.70744045480602,
              13.72663320627785,
              14.536327511564826,
              15.563479566209038,
              16.34843360327951,
              17.12877123428238,
              17.839659415123517,
              18.58855513089165
          ]
      },
      {
          "Q": "Q3",
          "sub_segment": "1-5L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11
          ],
          "percentage": [
              3.8055079644454697,
              6.160161158485032,
              7.963684258982177,
              9.508159025572676,
              10.904383009237074,
              12.093751700804773,
              13.141841894397356,
              14.08961789310291,
              14.801058670310091
          ]
      },
      {
          "Q": "Q4",
          "sub_segment": "1-5L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
          ],
          "percentage": [
              3.6085107108538184,
              6.2491489353836895,
              8.060989742990525,
              9.55625049158123,
              10.746180459507402,
              11.729060507222908
          ]
      },
      {
          "Q": "Q5",
          "sub_segment": "1-5L",
          "mob": [
              1,
              2,
              3,
              4,
              5
          ],
          "percentage": [
              2.7263303388202966,
              5.021066161116443,
              6.613787115499907
          ]
      },
      {
          "Q": "Q6",
          "sub_segment": "1-5L",
          "mob": [
              1,
              2
          ],
          "percentage": [
          ]
      },
      {
          "Q": "Q1",
          "sub_segment": "5-10L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17
          ],
          "percentage": [
              1.8764958455088219,
              3.191558707638774,
              4.370552772519186,
              5.50003263766949,
              6.4110388871223085,
              6.837827642234137,
              7.23070628134392,
              7.883397105614338,
              8.059365465145381,
              8.143776391152578,
              8.40350675985138,
              8.479520268810276,
              8.72318934414136,
              8.784136191229328,
              8.842834288800159
          ]
      },
      {
          "Q": "Q2",
          "sub_segment": "5-10L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14
          ],
          "percentage": [
              1.8066402687153693,
              2.490446635186781,
              3.499560543389448,
              4.573535067565873,
              5.1097107068525895,
              5.692626696613479,
              6.47758737449714,
              6.854111146245077,
              7.210727509417734,
              7.751840520746881,
              8.07845735476489,
              8.359868686234499
          ]
      },
      {
          "Q": "Q3",
          "sub_segment": "5-10L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11
          ],
          "percentage": [
              2.8644995679324365,
              4.3299019645849315,
              5.161924839645507,
              5.94988168691186,
              6.923045847358517,
              7.433335774312689,
              8.122606728426767,
              8.764740864946987,
              9.137581395832362
          ]
      },
      {
          "Q": "Q4",
          "sub_segment": "5-10L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
          ],
          "percentage": [
              1.9915315378473006,
              4.4299562776672,
              5.706241378895211,
              6.421428140719083,
              7.327825098038047,
              7.70998518811066
          ]
      },
      {
          "Q": "Q5",
          "sub_segment": "5-10L",
          "mob": [
              1,
              2,
              3,
              4,
              5
          ],
          "percentage": [
              2.391652234252879,
              4.0006959045100725,
              4.968151277265216
          ]
      },
      {
          "Q": "Q6",
          "sub_segment": "5-10L",
          "mob": [
              1,
              2
          ],
          "percentage": [
          ]
      },
      {
          "Q": "Q1",
          "sub_segment": ">=10L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17
          ],
          "percentage": [
              0.2776048645706459,
              0.8050541072548733,
              2.6788869431067335,
              3.7202355350354948,
              4.442008182919174,
              4.997217912060466,
              5.147463216863391,
              6.026082613229486,
              6.026082613229486,
              6.997699639226746,
              7.092423971115542,
              7.20102854623287,
              7.20102854623287,
              8.059169031739588,
              8.295471844559414
          ]
      },
      {
          "Q": "Q2",
          "sub_segment": ">=10L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14
          ],
          "percentage": [
              3.0844196203139562,
              3.4753716978586335,
              4.827681343136123,
              5.707857605149276,
              6.265444994434308,
              6.8550776359771,
              6.931986241395725,
              7.573961597976343,
              7.627370351739277,
              7.661551954147555,
              7.8239145655868745,
              7.881596019650844
          ]
      },
      {
          "Q": "Q3",
          "sub_segment": ">=10L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11
          ],
          "percentage": [
              3.0765736922005056,
              3.981646357501032,
              4.593378980576886,
              4.969167059974512,
              6.564645272824994,
              7.422926688733153,
              7.7960637058422595,
              8.310369789815025,
              9.002786168110823
          ]
      },
      {
          "Q": "Q4",
          "sub_segment": ">=10L",
          "mob": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
          ],
          "percentage": [
              0.41028538221482713,
              1.7790136623431203,
              2.2004148047109435,
              3.2823709216228654,
              3.666640778055413,
              4.005115967593817
          ]
      },
      {
          "Q": "Q5",
          "sub_segment": ">=10L",
          "mob": [
              1,
              2,
              3,
              4,
              5
          ],
          "percentage": [
              1.2445207685704562,
              3.3678711628577633,
              3.9000606946513567
          ]
      },
      {
          "Q": "Q6",
          "sub_segment": ">=10L",
          "mob": [
              1,
              2
          ],
          "percentage": [
          ]
      }
  ]
}

const lineColors = [
  "#1967D2",
  "#FFB200",
  "#5C4E8E",
  "#34B53A",
  "#6A7691",
  "#DC3C49",
];
type Props = {
  activeButton: string;
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
};
const CohortVintageGraph = ({
  activeButton,
  selectedCategory,
  selectedSubCategory,
  selectedSubCategoryTwo,
}: Props) => {
  const formatYAxisTick = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed(1)}%`;
    }
  };
  const [dataRecovery, setDataRecovery] = useState([]);
  //   const [allData, SetalllData] = useState([]);
  const [staticData, setStaticData] = useState(staticRecoveryData);
  const [segmentData, SetSegmentData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  const arrTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (dataRecovery) {
      maxNum = Math.max(
        ...dataRecovery?.map((item: any) => (item["Q1"] ? item["Q1"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q2"] ? item["Q2"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q3"] ? item["Q3"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q4"] ? item["Q4"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q5"] ? item["Q5"] : 0)),
        ...dataRecovery?.map((item: any) => (item["Q6"] ? item["Q6"] : 0))
      );
    } else {
      return [0];
    }
    let num1 = 0;
    for (let i = 0; i <= 10; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 10;
    }
    console.log(maxNum, "arr.maxnum..");

    return arr;
  };

  const tooltipFormatter = (value: any, name: any) => {
    if (name === "Q1") {
      return [`${value.toFixed(2)}%`, `Q4 FY2022`];
    } else if (name === "Q2") {
      return [`${value.toFixed(2)}%`, `Q1 FY2024`];
    } else if (name === "Q3") {
      return [`${value.toFixed(2)}%`, `Q2 FY2024`];
    } else if (name === "Q4") {
      return [`${value.toFixed(2)}%`, `Q3 FY2024`];
    } else if (name === "Q5") {
      return [`${value.toFixed(2)}%`, `Q4 FY2024`];
    } else if (name === "Q6") {
      return [`${value.toFixed(2)}%`, `Q1 FY2025`];
    } else {
      return null;
    }
  };
  

  // {
  //   (value, name) => {
  //     const formattedValue =
  //       typeof value === "number" ? `${value.toFixed(2)}%` : value;
  //     return [formattedValue, `${name}`];
  //   };
  // }

  //   const toFilterData = (param: any) => {
  //     const data: any = [...new Array(param?.mob.length)].map(
  //       (_, i) => ({
  //         name: param.mob[i]
  //         "Q1 2023": param?.chart[0].series[i],
  //         "Q2 2023": param?.chart[1].series[i],
  //         "Q3 2023": param?.chart[2].series[i],
  //         "Q4 2023": param?.chart[3].series[i],
  //         "Q1 2024": param?.chart[4].series[i],
  //       })
  //     );
  //     setDataRecovery(data);
  //   };
  const toFilterData = (param: any) => {
    console.log(param, "param....");

    let arr: any = [];
    const maxArr = param?.map((item: any) => [...item.mob]);
    maxArr.map((item: any) => {
      arr = [...arr, ...item];
    });
    const data: any = [...new Array(Math.max(...arr))].map((_, i) => ({
      name: i + 1,
      Q1: param[0]?.percentage[i],
      Q2: param[1]?.percentage[i],
      Q3: param[2]?.percentage[i],
      Q4: param[3]?.percentage[i],
      Q5: param[4]?.percentage[i],
      Q6: param[5]?.percentage[i],
    }));
    setDataRecovery(data);
  };

  const fetchdata = async () => {
    const apiUrl = `https://smfg-backend-service.site/v1/monitoring/vintage/${
      activeButton === "uniquePayer" ? "unique_payer" : "recovery"
    }`;
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "fetffffff", activeButton === "uniquePayer");

        setLocationData(data.location);
        SetSegmentData(data.segment);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  const fetchApiData = async () => {
    const apiUrl = `https://smfg-backend-service.site/v1/monitoring/vintage/${
      activeButton === "uniquePayer" ? "unique_payer" : "recovery"
    }`;
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        setLocationData(data.location);
        SetSegmentData(data.segment);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  //   useEffect(() => {
  //     // fetchdata();
  //     // fetchApiData();
  //   }, [activeButton]);
  //   useEffect(() => {
  //     // if (activeButton=="uniquePayer") {
  //     if (selectedCategory === "location") {
  //       if (selectedSubCategory === "MUM") {
  //         const ld = locationData.find((item: any) => item.sub_segment == "MUM");
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategory === "BLR") {
  //         const ld = locationData.find((item: any) => item.sub_segment == "BLR");
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategory === "DEL") {
  //         const ld = locationData.find((item: any) => item.sub_segment == "DEL");
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategory === "PUN") {
  //         const ld = locationData.find((item: any) => item.sub_segment == "PUN");
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategory === "HYD") {
  //         const ld = locationData.find((item: any) => item.sub_segment == "HYD");
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategory === "KOL") {
  //         const ld = locationData.find((item: any) => item.sub_segment == "KOL");
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategory === "Others") {
  //         const ld = locationData.find(
  //           (item: any) => item.sub_segment == "Others"
  //         );
  //         toFilterData(ld);
  //       }
  //     } else {
  //       if (selectedSubCategoryTwo === "Score") {
  //         const ld = segmentData.find((item: any) => item.sub_segment == "Score");
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategoryTwo === "Age") {
  //         const ld = segmentData.find((item: any) => item.sub_segment == "Age");
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategoryTwo === "Industry") {
  //         const ld = segmentData.find(
  //           (item: any) => item.sub_segment == "Industry"
  //         );
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategoryTwo === "Employment") {
  //         const ld = segmentData.find(
  //           (item: any) => item.sub_segment == "Employment"
  //         );
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategoryTwo === "Seg5") {
  //         const ld = segmentData.find((item: any) => item.sub_segment == "Seg5");
  //         toFilterData(ld);
  //       }
  //       if (selectedSubCategoryTwo === "Others") {
  //         const ld = segmentData.find(
  //           (item: any) => item.sub_segment == "Others"
  //         );
  //         toFilterData(ld);
  //       }
  //     }
  //     // }else{
  //     //   setDataRecovery([]);
  //     // }
  //   }, [
  //     locationData,
  //     activeButton,
  //     selectedCategory,
  //     selectedSubCategory,
  //     selectedSubCategoryTwo,
  //   ]);
  useEffect(() => {
    if (selectedCategory === "pos_seg") {
      if (selectedSubCategory === "<1L") {
        const ld = staticData.pos_seg.filter(
          (item: any) => item.sub_segment == "<1L"
        );
        toFilterData(ld);
      }
      if (selectedSubCategory === "1-5L") {
        const ld = staticData.pos_seg.filter(
          (item: any) => item.sub_segment == "1-5L"
        );
        toFilterData(ld);
      }
      if (selectedSubCategory === "5-10L") {
        const ld = staticData.pos_seg.filter(
          (item: any) => item.sub_segment == "5-10L"
        );
        toFilterData(ld);
      }

      if (selectedSubCategory === ">=10L") {
        const ld = staticData.pos_seg.filter(
          (item: any) => item.sub_segment == ">=10L"
        );
        toFilterData(ld);
      }
    } else {
      toFilterData(staticData.all);
    }
  }, [activeButton, selectedSubCategory, selectedCategory]);
  return (
    <div className="w-full xl:w-[100%] h-[500px]  rounded-lg py-1 p-4 ml-2 shadow-md bg-white">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          Vintage Recovery
        </h1>
        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7">
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#1967D2",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              Q4 FY2022
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#FFB200",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              Q1 FY2024
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#5C4E8E",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            Q2 FY2024
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#34B53A",

                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            Q3 FY2024
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#6A7691",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            Q4 FY2024
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#DC3C49",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
            Q1 FY2025
            </span>
          </div>
        </div>
      </div>
      {activeButton === "uniquePayer" && (
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={dataRecovery} margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="0 0" vertical={false} />
            <XAxis
              dataKey="name"
              fontWeight={500}
              fontSize={12}
              fontFamily="DM Sans"
              axisLine={false}
              tickLine={false}
              padding={{ left: 22, right: 10 }}
            />
            <YAxis
              fontWeight={500}
              fontSize={12}
              fontFamily="DM Sans"
              domain={[0, "dataMax"]}
              width={35}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              ticks={arrTicks()}
            />
            <Tooltip formatter={tooltipFormatter} />
            {lineColors.map((item, idx) => (
              <Line
                type="monotone"
                dataKey={`Q${idx + 1}`}
                stroke={item}
                strokeWidth={3}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CohortVintageGraph;