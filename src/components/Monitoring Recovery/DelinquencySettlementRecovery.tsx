import React, { useEffect, useState } from "react";
import rightarrow from "../../assets/images/rightarrow.svg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



type Props = {
  activeButton: any;
  setActiveButton: any;
  selectedCategoryButton: any;
  selectedCategoryAll: any;
  selectedCategoryTn: any;
  selectedCategoryKar: any;
  selectedCategoryMum: any;
  selectedCategoryRomg: any;
  selectedCategoryDel: any;
  selectedCategoryTg: any;
  selectedCategoryAp: any;
  selectedCategoryGj: any;
  selectedCategoryKol: any;
  selectedCategoryMp: any;
  selectedCategoryOthers: any;
  selectedCategoryHR: any;
  selectedCategoryUP: any;

  setselectedCategoryAll: any;
  setselectedCategoryMum: any;
  setselectedCategoryKol: any;
  setselectedCategoryKar: any;
  setselectedCategoryButton: any;
  setselectedCategoryOthers: any;
  setselectedCategoryAp: any;
  setselectedCategoryMp: any;
  setselectedCategoryGj: any;
  setselectedCategoryRomg: any;
  setselectedCategoryTn: any;
  setselectedCategoryTg: any;
  setselectedCategoryDel: any;
};
const colors = [
  "#8EB5F4",
  "#496CD5",
  "#FFB200",
  // "#FA7B33",
  "#DC3C49",
  "#34B53A",
  "#808080",
  "#A020F0",
];
const colorvintage:any=[
   "#496CD5",
  "#4993CF",
 "#B7D6F0",
 "#FFF6F6",
 "#FDDBC7",
  "#EF8A62",
   "#DC3C49",
]
interface DataPoint {
  "<1L"?: number;
  "1-5L"?: number;
  "5-10L"?: number;
  "10L+"?: number;
  V0?: number;
  V1?: number;
  V2?: number;
  V3?: number;
  V4?: number;
  V5?: number;
  V6?: number;
  V7?: number;
  B1?: number;
  B2?: number;
  B3?: number;
  B4?: number;
  BN?: number;
}

interface ChartData {
  name: string;
  [key: string]: number | string | undefined;
}



//  const allData: ChartData[] = processData(staticRevisedJsonDataSettlement.all);

const DelinquencySettlementRecovery = ({
  activeButton,
  selectedCategoryButton,
  selectedCategoryAll,
  selectedCategoryKar,
  selectedCategoryTn,
  selectedCategoryDel,
  selectedCategoryMum,
  selectedCategoryRomg,
  selectedCategoryTg,
  selectedCategoryAp,
  selectedCategoryGj,
  selectedCategoryKol,
  selectedCategoryMp,
  selectedCategoryOthers,
  selectedCategoryHR,
  selectedCategoryUP,
}: Props) => {
  //recovery
  const [data, setData] = useState<ChartData[]>([]);
  const [dataUnique, setDataUnique] = useState<ChartData[]>([]);
  const [selectedCategoriesAll, setselectedCategoriesAll] = useState();
  const [selectedCategoriesKar, setselectedCategoriesKar] = useState();
  const [selectedCategoriesTN, setselectedCategoriesTN] = useState();
  const [selectedCategoriesDel, setselectedCategoriesDel] = useState();
  const [selectedCategoriesMum, setselectedCategoriesMum] = useState();
  const [selectedCategoriesRom, setselectedCategoriesRom] = useState();
  const [selectedCategoriesAp, setselectedCategoriesAp] = useState();
  const [selectedCategoriesTel, setselectedCategoriesTel] = useState();
  const [selectedCategoriesGj, setselectedCategoriesGj] = useState();
  const [selectedCategoriesKol, setselectedCategoriesKol] = useState();
  const [selectedCategoriesMp, setselectedCategoriesMp] = useState();
  const [selectedCategoriesOthers, setselectedCategoriesOthers] = useState();

  const [selectedCategoriesUP, setselectedCategoriesUP] = useState();
  const [selectedCategoriesHR, setselectedCategoriesHR] = useState();

  const [staticRevisedJsonDataSettlement, setStaticRevisedJsonDataSettlement] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchData("distribution_data");
  }, []);
  
  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/distribution/?blob=distribution_data`;
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
      setStaticRevisedJsonDataSettlement(result.data);
      console.log(data, "data immediately after setData"); // Confirm state update in the same function
    } catch (err: any) {
      setError(err.message);
    }
  };

 
      console.log(staticRevisedJsonDataSettlement, "Updated data****.....");
    


  const processDataPos = (data: (DataPoint | string)[][]): ChartData[] => {
    return data.map((entry) => {
      const dataPoints = entry.slice(0, 3) as DataPoint[];
      const month = entry[3] as string;
  
      return {
        name: month,
        ...dataPoints[0],
      };
    });
  };
  const processDataMob = (data: (DataPoint | string)[][]): ChartData[] => {
    return data.map((entry) => {
      const dataPoints = entry.slice(0, 3) as DataPoint[];
      const month = entry[3] as string;
      return {
        name: month,
        ...dataPoints[1],
      };
    });
  };
  const processDataAgency = (data: (DataPoint | string)[][]): ChartData[] => {
    return data.map((entry) => {
      const dataPoints = entry.slice(0, 3) as DataPoint[];
      const month = entry[3] as string;
  
      return {
        name: month,
  
        ...dataPoints[2],
      };
    });
  };
  useEffect(() => {
     console.log("staticRevisedJsonDataSettlement:", staticRevisedJsonDataSettlement);
    if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "all" &&
      selectedCategoryAll === "pos" && staticRevisedJsonDataSettlement &&
      staticRevisedJsonDataSettlement.all
    ) {
      const allDatapos: ChartData[] = processDataPos(
        
        staticRevisedJsonDataSettlement.all
      );
      console.log("allData pos", allDatapos);
      setData(allDatapos);
    } else 
    if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "all" &&
      selectedCategoryAll === "mob"
    ) {
      const allDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement.all
      );
      console.log("allData mob", allDatamob);

      setData(allDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "all" &&
      selectedCategoryAll === "agency"
    ) {
      const allData: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement.all
      );
      setData(allData);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "KARNATAKA" &&
      selectedCategoryKar === "pos"
    ) {
      const karDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement.KARNATAKA
      );
      console.log("karData pos", karDatapos);
      setData(karDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "KARNATAKA" &&
      selectedCategoryKar === "mob"
    ) {
      const karDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement.KARNATAKA
      );
      console.log("karData mob", karDatamob);
      setData(karDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "KARNATAKA" &&
      selectedCategoryKar === "agency"
    ) {
      const allData: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement.KARNATAKA
      );
      setData(allData);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "TAMILNADU" &&
      selectedCategoryTn === "pos"
    ) {
      const TnDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement.TAMILNADU
      );
      console.log("TnData pos", TnDatapos);
      setData(TnDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "TAMILNADU" &&
      selectedCategoryTn === "mob"
    ) {
      const TnDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement.TAMILNADU
      );
      console.log("TnData mob", TnDatamob);
      setData(TnDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "TAMILNADU" &&
      selectedCategoryTn === "agency"
    ) {
      const allData: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement.TAMILNADU
      );
      setData(allData);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "DELHI" &&
      selectedCategoryDel === "pos"
    ) {
      const DelDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement["DELHI"]
      );
      console.log("DelData pos", DelDatapos);
      setData(DelDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "DELHI" &&
      selectedCategoryDel === "mob"
    ) {
      const DelDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement["DELHI"]
      );
      console.log("DelData mob", DelDatamob);
      setData(DelDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "DELHI" &&
      selectedCategoryDel === "agency"
    ) {
      const allData: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement["DELHI"]
      );
      setData(allData);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "TELANGANA" &&
      selectedCategoryTg === "pos"
    ) {
      const tgDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement.TELANGANA
      );
      console.log("tgData pos", tgDatapos);
      setData(tgDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "TELANGANA" &&
      selectedCategoryTg === "mob"
    ) {
      const tgDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement.TELANGANA
      );
      console.log("tgData mob", tgDatamob);
      setData(tgDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "TELANGANA" &&
      selectedCategoryTg === "agency"
    ) {
      const tgDatapos: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement.TELANGANA
      );
      setData(tgDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "MAHARASHTRA" &&
      selectedCategoryMum === "pos"
    ) {
      const tgDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement.MAHARASHTRA
      );
      console.log("tgData pos", tgDatapos);
      setData(tgDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "MAHARASHTRA" &&
      selectedCategoryMum === "mob"
    ) {
      const tgDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement.MAHARASHTRA
      );
      console.log("tgData mob", tgDatamob);
      setData(tgDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "MAHARASHTRA" &&
      selectedCategoryMum === "agency"
    ) {
      const tgDatapos: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement.MAHARASHTRA
      );
      setData(tgDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "UTTAR PRADESH" &&
      selectedCategoryUP === "pos"
    ) {
      const tgDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement["UTTAR PRADESH"]
      );
      console.log("tgData pos", tgDatapos);
      setData(tgDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "UTTAR PRADESH" &&
      selectedCategoryUP === "mob"
    ) {
      const tgDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement["UTTAR PRADESH"]
      );
      console.log("tgData mob", tgDatamob);
      setData(tgDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "UTTAR PRADESH" &&
      selectedCategoryUP === "agency"
    ) {
      const tgDatapos: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement["UTTAR PRADESH"]
      );
      setData(tgDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "ANDHRA PRADESH" &&
      selectedCategoryAp === "pos"
    ) {
      const tgDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement["ANDHRA PRADESH"]
      );
      console.log("tgData pos", tgDatapos);
      setData(tgDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "ANDHRA PRADESH" &&
      selectedCategoryAp === "mob"
    ) {
      const tgDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement["ANDHRA PRADESH"]
      );
      console.log("tgData mob", tgDatamob);
      setData(tgDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "ANDHRA PRADESH" &&
      selectedCategoryAp === "agency"
    ) {
      const tgDatapos: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement["ANDHRA PRADESH"]
      );
      setData(tgDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "GUJARAT" &&
      selectedCategoryGj === "pos"
    ) {
      const GJDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement.GUJARAT
      );
      console.log("GJData pos", GJDatapos);
      setData(GJDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "GUJARAT" &&
      selectedCategoryGj === "mob"
    ) {
      const GJDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement.GUJARAT
      );
      console.log("GJData mob", GJDatamob);
      setData(GJDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "GUJARAT" &&
      selectedCategoryGj === "agency"
    ) {
      const GJDataagency: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement.GUJARAT
      );
      console.log("GJData agency", GJDataagency);
      setData(GJDataagency);
    }
    //
    else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "HARYANA" &&
      selectedCategoryHR === "pos"
    ) {
      const KolDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement.HARYANA
      );
      console.log("KolData pos", KolDatapos);
      setData(KolDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "HARYANA" &&
      selectedCategoryHR === "mob"
    ) {
      const KolDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement.HARYANA
      );
      console.log("KolData mob", KolDatamob);
      setData(KolDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "HARYANA" &&
      selectedCategoryHR === "agency"
    ) {
      const KolDataagency: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement.HARYANA
      );
      console.log("KolData agency", KolDataagency);
      setData(KolDataagency);
    }
    //
    else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "MADHYA PRADESH" &&
      selectedCategoryMp === "pos"
    ) {
      const MpDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement["MADHYA PRADESH"]
      );
      console.log("MpData pos", MpDatapos);
      setData(MpDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "MADHYA PRADESH" &&
      selectedCategoryMp === "mob"
    ) {
      const MpDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement["MADHYA PRADESH"]
      );
      console.log("MpData mob", MpDatamob);
      setData(MpDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "MADHYA PRADESH" &&
      selectedCategoryMp === "agency"
    ) {
      const MpDataagency: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement["MADHYA PRADESH"]
      );
      console.log("MpData agency", MpDataagency);
      setData(MpDataagency);
    }

    //
    else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "OTHERS" &&
      selectedCategoryOthers === "pos"
    ) {
      const OthersDatapos: ChartData[] = processDataPos(
        staticRevisedJsonDataSettlement.OTHERS
      );
      console.log("OthersData pos", OthersDatapos);
      setData(OthersDatapos);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "OTHERS" &&
      selectedCategoryOthers === "mob"
    ) {
      const OthersDatamob: ChartData[] = processDataMob(
        staticRevisedJsonDataSettlement.OTHERS
      );
      console.log("OthersData mob", OthersDatamob);
      setData(OthersDatamob);
    } else if (
      activeButton === "$Recovery" &&
      selectedCategoryButton === "OTHERS" &&
      selectedCategoryOthers === "agency"
    ) {
      const OthersDataagency: ChartData[] = processDataAgency(
        staticRevisedJsonDataSettlement.OTHERS
      );
      console.log("OthersData agency", OthersDataagency);
      setData(OthersDataagency);
    }
  }, [ 
    staticRevisedJsonDataSettlement,
    activeButton,
    selectedCategoryButton,
    selectedCategoryAll,
    selectedCategoriesAll,
    selectedCategoriesKar,
    selectedCategoryKar,
    selectedCategoryTn,
    selectedCategoryDel,
    selectedCategoryTg,
    selectedCategoryMum,
    selectedCategoryRomg,
    selectedCategoryAp,
    selectedCategoryGj,
    selectedCategoryKol,
    selectedCategoryMp,
    selectedCategoryOthers,
    selectedCategoryUP,
    selectedCategoryHR,
    selectedCategoriesHR,
  ]);

  useEffect(() => {
    setselectedCategoriesAll(selectedCategoryAll);
    setselectedCategoriesKar(selectedCategoryKar);
    setselectedCategoriesTN(selectedCategoryTn);
    setselectedCategoriesDel(selectedCategoryDel);
    setselectedCategoriesTel(selectedCategoryTg);
    setselectedCategoriesMum(selectedCategoryMum);
    setselectedCategoriesRom(selectedCategoryRomg);
    setselectedCategoriesAp(selectedCategoryAp);
    setselectedCategoriesGj(selectedCategoryGj);
    setselectedCategoriesKol(selectedCategoryKol);
    setselectedCategoriesMp(selectedCategoryMp);
    setselectedCategoriesOthers(selectedCategoryOthers);
    setselectedCategoriesUP(selectedCategoryUP);
    setselectedCategoriesHR(selectedCategoryHR);
  }, [
    selectedCategoryAll,
    selectedCategoryKar,
    selectedCategoryTn,
    selectedCategoryDel,
    selectedCategoryTg,
    selectedCategoryMum,
    selectedCategoryRomg,
    selectedCategoryAp,
    selectedCategoryGj,
    selectedCategoryKol,
    selectedCategoryMp,
    selectedCategoryOthers,
    selectedCategoryHR,
    selectedCategoryUP,
  ]);
  const formatYAxisTick = (tick: any) => {
    // if (tick == 0) {
    return `${tick}%`;
    // } else {
    // return `${Math.floor(tick).toLocaleString()}`;
    // }
  };

  return (
    <div className="w-full xl:w-[100%] ml-3 h-[500px]  flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3 mt-5">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans']">
          Contribution %
        </h1>
        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7">
         
           {selectedCategoriesAll === "pos" &&
          activeButton === "$Recovery" &&
          selectedCategoryButton === "all" && staticRevisedJsonDataSettlement && staticRevisedJsonDataSettlement.all
            ? Object.keys(staticRevisedJsonDataSettlement.all[0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesAll === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "all"
            ? Object.keys(staticRevisedJsonDataSettlement.all[0][1]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesAll === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "all"
            ? Object.keys(staticRevisedJsonDataSettlement.all[0][2]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesKar === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "KARNATAKA"
            ? Object.keys(staticRevisedJsonDataSettlement.KARNATAKA[0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesKar === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "KARNATAKA"
            ? Object.keys(staticRevisedJsonDataSettlement.KARNATAKA[0][1]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesKar === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "KARNATAKA"
            ? Object.keys(staticRevisedJsonDataSettlement.KARNATAKA[0][2]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesTN === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "TAMILNADU"
            ? Object.keys(staticRevisedJsonDataSettlement.TAMILNADU[0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesTN === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "TAMILNADU"
            ? Object.keys(staticRevisedJsonDataSettlement.TAMILNADU[0][1]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesTN === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "TAMILNADU"
            ? Object.keys(staticRevisedJsonDataSettlement.TAMILNADU[0][2]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesOthers === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "OTHERS"
            ? Object.keys(staticRevisedJsonDataSettlement.OTHERS[0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesOthers === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "OTHERS"
            ? Object.keys(staticRevisedJsonDataSettlement.OTHERS[0][1]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesOthers === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "OTHERS"
            ? Object.keys(staticRevisedJsonDataSettlement.OTHERS[0][2]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesMp === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "MADHYA PRADESH"
            ? Object.keys(
                staticRevisedJsonDataSettlement["MADHYA PRADESH"][0][0]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colors[index % colors.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesMp === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "MADHYA PRADESH"
            ? Object.keys(
                staticRevisedJsonDataSettlement["MADHYA PRADESH"][0][1]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colorvintage[index % colorvintage.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesMp === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "MADHYA PRADESH"
            ? Object.keys(
                staticRevisedJsonDataSettlement["MADHYA PRADESH"][0][2]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colors[index % colors.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesGj === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "GUJARAT"
            ? Object.keys(staticRevisedJsonDataSettlement.GUJARAT[0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesGj === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "GUJARAT"
            ? Object.keys(staticRevisedJsonDataSettlement.GUJARAT[0][1]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesGj === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "GUJARAT"
            ? Object.keys(staticRevisedJsonDataSettlement.GUJARAT[0][2]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesAp === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "ANDHRA PRADESH"
            ? Object.keys(
                staticRevisedJsonDataSettlement["ANDHRA PRADESH"][0][0]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colors[index % colors.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesAp === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "ANDHRA PRADESH"
            ? Object.keys(
                staticRevisedJsonDataSettlement["ANDHRA PRADESH"][0][1]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colorvintage[index % colorvintage.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesAp === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "ANDHRA PRADESH"
            ? Object.keys(
                staticRevisedJsonDataSettlement["ANDHRA PRADESH"][0][2]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colors[index % colors.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesUP === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "UTTAR PRADESH"
            ? Object.keys(
                staticRevisedJsonDataSettlement["UTTAR PRADESH"][0][0]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colors[index % colors.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesUP === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "UTTAR PRADESH"
            ? Object.keys(
                staticRevisedJsonDataSettlement["UTTAR PRADESH"][0][1]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor:colorvintage[index % colorvintage.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesUP === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "UTTAR PRADESH"
            ? Object.keys(
                staticRevisedJsonDataSettlement["UTTAR PRADESH"][0][2]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colors[index % colors.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesMum === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "MAHARASHTRA"
            ? Object.keys(
                staticRevisedJsonDataSettlement.MAHARASHTRA[0][0]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colors[index % colors.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesMum === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "MAHARASHTRA"
            ? Object.keys(
                staticRevisedJsonDataSettlement.MAHARASHTRA[0][1]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colorvintage[index % colorvintage.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesMum === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "MAHARASHTRA"
            ? Object.keys(
                staticRevisedJsonDataSettlement.MAHARASHTRA[0][2]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor: colors[index % colors.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : selectedCategoriesTel === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "TELANGANA"
            ? Object.keys(staticRevisedJsonDataSettlement.TELANGANA[0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesTel === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "TELANGANA"
            ? Object.keys(staticRevisedJsonDataSettlement.TELANGANA[0][1]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor:colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesTel === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "TELANGANA"
            ? Object.keys(staticRevisedJsonDataSettlement.TELANGANA[0][2]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesDel === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "DELHI"
            ? Object.keys(staticRevisedJsonDataSettlement["DELHI"][0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesDel === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "DELHI"
            ? Object.keys(staticRevisedJsonDataSettlement["DELHI"][0][1]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesDel === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "DELHI"
            ? Object.keys(staticRevisedJsonDataSettlement["DELHI"][0][2]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesHR === "pos" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "HARYANA"
            ? Object.keys(staticRevisedJsonDataSettlement.HARYANA[0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesHR === "mob" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "HARYANA"
            ? Object.keys(staticRevisedJsonDataSettlement.HARYANA[0][1]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : selectedCategoriesHR === "agency" &&
              activeButton === "$Recovery" &&
              selectedCategoryButton === "HARYANA"
            ? Object.keys(staticRevisedJsonDataSettlement.HARYANA[0][2]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colors[index % colors.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : null}
        </div> 
      </div>
      {activeButton === "$Recovery" && (
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: 18, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="7 7" vertical={false} />
            <XAxis
              dataKey="name"
              fontWeight={400}
              fontSize={12}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis
              fontWeight={400}
              fontSize={10}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              domain={[0, "dataMax"]}
              width={28}
              tickLine={false}
              axisLine={false}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tickFormatter={formatYAxisTick}
              // ticks={arrTicks()}
              interval={0}
            />
            <Tooltip
              formatter={(value, name) => {
                const formattedValue =
                  typeof value === "number" && value !== 0
                    ? `${value.toFixed(2)}%`
                    : `${value}%`;
                return [formattedValue, `${name}`];
              }}
            />

            {selectedCategoriesAll === "pos" &&
            selectedCategoryButton === "all" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesAll === "mob" &&
              selectedCategoryButton === "all" ? (
              <>
                {/* <Bar
                  dataKey="V0"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                /> */}
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesAll === "agency" &&
              selectedCategoryButton === "all" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesKar === "pos" &&
              selectedCategoryButton === "KARNATAKA" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesKar === "mob" &&
              selectedCategoryButton === "KARNATAKA" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesKar === "agency" &&
              selectedCategoryButton === "KARNATAKA" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesTN === "pos" &&
              selectedCategoryButton === "TAMILNADU" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesTN === "mob" &&
              selectedCategoryButton === "TAMILNADU" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesTN === "agency" &&
              selectedCategoryButton === "TAMILNADU" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesDel === "pos" &&
              selectedCategoryButton === "DELHI" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesDel === "mob" &&
              selectedCategoryButton === "DELHI" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesDel === "agency" &&
              selectedCategoryButton === "DELHI" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesTel === "pos" &&
              selectedCategoryButton === "TELANGANA" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesTel === "mob" &&
              selectedCategoryButton === "TELANGANA" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesTel === "agency" &&
              selectedCategoryButton === "TELANGANA" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesMum === "pos" &&
              selectedCategoryButton === "MAHARASHTRA" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesMum === "mob" &&
              selectedCategoryButton === "MAHARASHTRA" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesMum === "agency" &&
              selectedCategoryButton === "MAHARASHTRA" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesUP === "pos" &&
              selectedCategoryButton === "UTTAR PRADESH" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesUP === "mob" &&
              selectedCategoryButton === "UTTAR PRADESH" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesUP === "agency" &&
              selectedCategoryButton === "UTTAR PRADESH" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesAp === "pos" &&
              selectedCategoryButton === "ANDHRA PRADESH" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesAp === "mob" &&
              selectedCategoryButton === "ANDHRA PRADESH" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesAp === "agency" &&
              selectedCategoryButton === "ANDHRA PRADESH" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : // Mine
            selectedCategoriesGj === "pos" &&
              selectedCategoryButton === "GUJARAT" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesGj === "mob" &&
              selectedCategoryButton === "GUJARAT" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesGj === "agency" &&
              selectedCategoryButton === "GUJARAT" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : //
            selectedCategoriesHR === "pos" &&
              selectedCategoryButton === "HARYANA" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesHR === "mob" &&
              selectedCategoryButton === "HARYANA" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesHR === "agency" &&
              selectedCategoryButton === "HARYANA" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : //
            selectedCategoriesMp === "pos" &&
              selectedCategoryButton === "MADHYA PRADESH" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesMp === "mob" &&
              selectedCategoryButton === "MADHYA PRADESH" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : //
            selectedCategoriesOthers === "pos" &&
              selectedCategoryButton === "OTHERS" ? (
              <>
                <Bar
                  dataKey="<1L"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="1-5L" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="5-10L" stackId="a" fill="#FFB200" barSize={25} />

                <Bar
                  dataKey="10L+"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesOthers === "mob" &&
              selectedCategoryButton === "OTHERS" ? (
              <>
                <Bar
                  dataKey="V1"
                  stackId="a"
                  fill="#496CD5"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="V2" stackId="a" fill="#4993CF" barSize={25} />
                <Bar dataKey="V3" stackId="a" fill="#B7D6F0" barSize={25} />
                <Bar dataKey="V4" stackId="a" fill="#FFF6F6" barSize={25} />
                <Bar dataKey="V5" stackId="a" fill="#FDDBC7" barSize={25} />
                <Bar dataKey="V6" stackId="a" fill="#EF8A62" barSize={25} />
                <Bar
                  dataKey="V7"
                  stackId="a"
                  fill="#DC3C49"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : selectedCategoriesOthers === "agency" &&
              selectedCategoryButton === "OTHERS" ? (
              <>
                <Bar
                  dataKey="IN"
                  stackId="a"
                  fill="#8EB5F4"
                  barSize={25}
                  radius={[0, 0, 4, 4]}
                />
                <Bar dataKey="B1" stackId="a" fill="#496CD5" barSize={25} />
                <Bar dataKey="B2" stackId="a" fill="#FFB200" barSize={25} />
                <Bar dataKey="B3" stackId="a" fill="#FA7B33" barSize={25} />
                <Bar dataKey="B4" stackId="a" fill="#DC3C49" barSize={25} />
                <Bar
                  dataKey="BN"
                  stackId="a"
                  fill="#34B53A"
                  barSize={25}
                  radius={[4, 4, 0, 0]}
                />
              </>
            ) : null}
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DelinquencySettlementRecovery;
