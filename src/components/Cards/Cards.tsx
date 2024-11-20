import React, { useEffect, useState } from "react";
import shiftGreen from "../../assets/icons/shift-green.svg";
import shiftOrange from "../../assets/icons/shift-orange.svg";
import shiftRed from "../../assets/icons/shift-red.svg";
import doallar from "../../assets/icons/attach_money.svg";
import database from "../../assets/icons/database.svg";
import { Link, useNavigate } from "react-router-dom";
import RedDownArrow from "../../assets/icons/red-down-shift.png";
import { useSelector } from "react-redux";
import {
  Collections,
  IDashboardState,
  PreDeliquency,
  Recovery,
  PreDelinquency,
  CollectionNew,
  RecoveryNew,
} from "../../redux/model/dashboard.model";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { padding } from "@mui/system";
interface Props {
  setmoduleName: any;
  staticData: any;
}
// type Props = {setmoduleName:any};

interface CollectionData {
  metrics: string;
  font: string;
  mid: string;
  late: string;
}

interface NewHomeRecoveryJsonData {
  balance: any;
}
const collectionData: CollectionData[] = [
  {
    metrics: "₹ Res (%)",
    font: "-",
    mid: "-",
    late: "-",
  },
  {
    metrics: "# Res (%)",
    font: "-",
    mid: "-",
    late: "-",
  },
  {
    metrics: "₹ Collcn (%)",
    font: "-",
    mid: "-",
    late: "-",
  },
];

type LatestMonth = {
  V1: any;
  V2: any;
  V3: any;
  V4: any;
};

const RecoveryData = [
  {
    metrics: "₹ Recovery (%)",
    font: "12",
    mid: "24",
    late: "13",
  },
  {
    metrics: "# Payer Rate (%)",
    font: "423",
    mid: "123",
    late: "142",
  },
];



const Cards: React.FC<Props> = ({ setmoduleName, staticData }) => {
  const [collection, setCollection] = useState<Collections>();
  const [preDeliquency, setPreDeliquency] = useState<PreDeliquency>();
  const [recovery, setRecovery] = useState<Recovery>();
  const DashboardState: IDashboardState = useSelector(
    (state: any) => state?.dashboard.data
  );
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [cardsNewData, setCardsNewData] = useState<PreDelinquency>();
  const [cardCollectionData, setCardCollectionData] = useState<CollectionNew>();
  const [cardRecoveryData, setCardRecoveryData] = useState<RecoveryNew>();
  const navigate = useNavigate();

  const { collections } = DashboardState ?? {};
  console.log(collections);
  console.log(staticData, "Home api data");

  useEffect(() => {
    if (DashboardState !== null) {
      setCollection(DashboardState.collections);
      setPreDeliquency(DashboardState.pre_deliquency);
      setRecovery(DashboardState.recovery);
      fetchNewdata();
      // fetchNewAPIData();
    }
  }, [DashboardState]);

  const fetchNewdata = async () => {
    const apiUrl = "https://smfg-backend-service.site/v1/home/";
    // const proxyUrl = "https://smfg-backend-service.site/v1/home/";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        // setDashboardNewdata(data?.balance);
        setCardsNewData(data?.pre_delinquency);
        setCardCollectionData(data?.collections);
        setCardRecoveryData(data?.recovery);
        console.log(data?.pre_delinquency, "cards data");
        // console.log("balanceData", data?.balance);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const fetchNewAPIData = async () => {
    const apiUrl = "https://smfg-backend-service.site/v1/home/";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetch New Data Called", data);

        // setDashboardNewdata(data?.balance);

        setCardsNewData(data?.pre_delinquency);
        setCardCollectionData(data?.collections);
        setCardRecoveryData(data?.recovery);
        console.log(data?.pre_delinquency, "cards data");
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const latestMonth: LatestMonth = (staticData &&
    staticData?.home_recovery?.recovery_rates?.latest_month) || {
    V1: 0,
    V2: 0,
    V3: 0,
    V4: 0,
  };
  const latestMonthPayer: LatestMonth = (staticData &&
    staticData?.home_recovery?.payer_rates?.latest_month) || {
    // "0": 0,
    // "<6": 0,
    // "6-12": 0,
    // "12+": 0,
    V1: 0,
    V2: 0,
    V3: 0,
    V4: 0,
  };
  const comparisonRecovery =
    (staticData && staticData?.home_recovery?.recovery_rates?.comparison) || {};

  // const comparisonRecovery = NewHomeRecoveryJsonData?.home_recovery
  //   ?.recovery_rates?.comparison || {
  //   V1: "#4EAD58",
  //   V2: "#FD1C03",
  //   V3: "#4EAD58",
  //   V4: "#FFB200",
  // };

  const comparisonPayer = (staticData &&
    staticData?.home_recovery?.payer_rates?.comparison) || {
    V1: "#4EAD58",
    V2: "#FD1C03",
    V3: "#4EAD58",
    V4: "#4EAD58",
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const navigateToCollectionModule = () => {
    navigate("/dashboard");
    setmoduleName("Collection");
  };

  const navigateToRecoveryModule = () => {
    navigate("/dashboard/recovery");
    setmoduleName("Recovery");
  };

  type HomeRecoveryData = typeof staticData.home_recovery;

  // const [homeRecoveryData, setHomeRecoveryData] = useState<any>();
  const [homeRecoveryData, setHomeRecoveryData] = useState<
    HomeRecoveryData | any
  >();

  // const homeRecoveryData = NewHomeRecoveryJsonData.home_recovery;

  useEffect(() => {
    // Simulate fetching data
    setHomeRecoveryData(staticData?.home_recovery);
  }, [staticData]);

  // if (!homeRecoveryData) {
  //   return <div>Loading...</div>;

  return (
    <>
      {homeRecoveryData && (
        <div className=" flex flex-wrap mt-4 ml-2 justify-between">
          <div
            className="mb-5 w-full md:w-1/2 xl:w-1/3 responsivePADDING "
            style={{
              borderRadius: "12px",
              backgroundColor: "transparent",
              paddingRight: "18px",
            }}
          >
            <div className=" w-full p-4 bg-zinc-200 bg-opacity-20 rounded-xl shadow flex-col justify-start items-center gap-4 inline-flex h-full">
              <div className="flex-col justify-start items-center gap-1 flex">
                <div className="px-8 py-1 bg-white rounded  border-slate-400 justify-center items-center gap-1 inline-flex">
                  <div className="text-[#000] text-base text-[16px] font-[400]  font-['DM Sans'] leading-normal customClassThird">
                    Pre-Delinquency
                  </div>
                </div>
                <div>
                  <span
                    className="text-[12px] font-[500]  leading-[18px]"
                    style={{ color: "#5C4E8E" }}
                  >
                    Accounts due within next
                  </span>
                  <span className="text-[#ED0E00] text-[12px] font-[700]   leading-[18px] ml-1">
                    10 days
                  </span>
                </div>
              </div>
              <div className=" w-full mb-2  p-3 bg-white rounded-xl shadow  flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center gap-9 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-5 customClass">
                        <span className="text-[#9F90D4] ml-[4px] font-[700]">
                          {/* <img src={doallar} alt="dollar" /> */}₹
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        <p>Balances:</p>
                      </div>
                    </div>
                    <div className="text-black text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      {/* $
                      {Math.floor(
                        (cardsNewData?.balances?.amount || 0) / 1000000
                      ).toLocaleString()}
                      M */}
                      -
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    {/* <div className="w-3.5 h-3.5 relative">
                      <span>
                        <img
                          src={
                            preDeliquency?.tile1.Balance.color === "O"
                              ? shiftOrange
                              : preDeliquency?.tile1.Balance.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />{" "}
                      </span>
                    </div> */}
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px]  mt-0.5">
                      {/* {cardsNewData?.balances?.growth}% MOM */} -
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-5 customClass">
                        <span>
                          <img src={database} alt="dollar" />
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        Units:
                      </div>
                    </div>
                    <div className="text-black text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      {/* {Math.floor(
                        cardsNewData?.units?.amount || 0
                      ).toLocaleString()} */}
                      -
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex ml-[5px]">
                    {/* <div className="w-3.5 h-3.5 relative left-[1px]">
                      <span className="">
                        <img
                          src={
                            preDeliquency?.tile1.Units.color === "O"
                              ? shiftOrange
                              : preDeliquency?.tile1.Units.color === "R"
                              ? RedDownArrow
                              : shiftGreen
                          }
                          alt="dollar"
                        />
                      </span>
                    </div> */}
                    <div className="text-black text-[10px] font-[400] leading-normal tracking-[0.5px] mt-0.5">
                      {/* {cardsNewData?.units?.growth}% MOM */}-
                    </div>
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                className="relative  w-full h-[164px] p-3 bg-white rounded-xl shadow  flex-col justify-start items-start  flex"
              >
                <div className="flex justify-between w-full p-1">
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px]">
                    Metrics
                  </p>
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] mr-28">
                    Pre-Del
                  </p>
                </div>
                <hr className="w-full mt-1" />
                <div className="flex justify-between w-full p-1 mt-1.5">
                  <p className="text-[#000000] text-[12px] font-[500] text-['DM Sans'] leading-[18px]">
                    Flow Rate (%)
                  </p>
                  <p className=" rounded-sm w-[max] px-3 py-[2px] text-[12px] font-[500] text-['DM Sans'] leading-[18px] mr-28 customClassSecond">
                    -
                  </p>
                </div>
              </div>
              {/* {isHovered&&(<h1 className="absolute top-10 right-0">you are at inhouse </h1>)} */}
              <div
                className="px-4 py-2.5 bg-slate-500 rounded-[100px] justify-center items-center inline-flex"
                style={{ background: "#A5A5A5" }}
              >
                <div className="px-2 justify-center items-center disabled cursor-not-allowed flex">
                  <div className="text-center text-[#1C1B1F] text-[14px] font-[500] leading-[20px] tracking-[0.1px]  opacity-30 customClassThird">
                    Go to Dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mb-5 w-full md:w-1/2 xl:w-1/3 responsivePADDING"
            style={{
              borderRadius: "12px",
              backgroundColor: "transparent",
              paddingRight: "18px",
            }}
          >
            <div className=" w-full p-4 bg-zinc-200 bg-opacity-20 rounded-xl shadow flex-col justify-start items-center gap-4 inline-flex h-full">
              <div className="flex-col justify-start items-center gap-1 flex">
                <div className="px-8 py-1 bg-white rounded  border-slate-400 justify-center items-center gap-1 inline-flex">
                  <div className="text-[#000] text-base text-[16px] font-[400]  font-['DM Sans'] leading-normal customClassThird">
                    Collections
                  </div>
                </div>
                <div>
                  <span
                    className="text-[12px] font-[500]  leading-[18px]"
                    style={{ color: "#5C4E8E" }}
                  >
                    Accounts
                  </span>
                  <span className="text-[#ED0E00] text-[12px] font-[700] leading-[18px] ml-1 mr-1">
                    1-179 days
                  </span>
                  <span
                    className="text-slate-500 text-xs  leading-[18px]"
                    style={{ color: "#6750A4" }}
                  >
                    past due
                  </span>
                </div>
              </div>
              <div className=" w-full mb-2  p-3 bg-white rounded-xl shadow flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center gap-9 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-6 customClass">
                        <span className="text-[#9F90D4] ml-[4px] font-[700]">
                          {/* <img src={doallar} alt="dollar" /> */}₹
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        <p>Balances:</p>
                      </div>
                    </div>
                    <div className="text-black text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      {/* $
                      {Math.floor(
                        (cardCollectionData?.balances?.amount || 0) / 1000000
                      ).toLocaleString()} */}
                      {/* $127.5M */}-
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-3.5 h-3.5 customClass">
                      <span>
                        {/* <img
                          src={
                            shiftOrange
                            // collection?.tile1.Balance.color === "O"
                            //   ? shiftOrange
                            //   : collection?.tile1.Balance.color === "R"
                            //   ? RedDownArrow
                            //   : shiftGreen
                          }
                          alt="dollar"
                        /> */}
                      </span>
                    </div>
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px] mt-0.5">
                      {/* {cardCollectionData?.balances?.growth}% MOM */}
                      {/* +6% MOM */}-
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-6 customClass">
                        <span>
                          <img src={database} alt="dollar" />
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        Units:
                      </div>
                    </div>
                    <div className="text-black text-[14px] font-[500]  ">
                      {/* {Math.floor(
                        cardCollectionData?.units?.amount || 0
                      ).toLocaleString()} */}
                      {/* 17,000 */}-
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-3.5 h-3.5 customClass">
                      <span>
                        {/* <img
                          // src={
                          //   collection?.tile1.Balance.color === "O"
                          //     ? shiftOrange
                          //     : collection?.tile1.Balance.color === "R"
                          //     ? RedDownArrow
                          //     : shiftGreen
                        //   } */}
                        {/* //   alt="dollar"
                        // /> */}
                      </span>
                    </div>
                    <div className="text-black text-[10px] font-[500]  mt-0.5">
                      {/* {cardCollectionData?.units?.growth}% MOM */}
                      {/* +6% MOM */}-
                    </div>
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                className="relative w-[100%] h-[164px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex"
              >
                <div className=" flex justify-between  p-1.5 w-[100%]">
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] w-[33.33%] text-left">
                    Metrics
                  </p>
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] w-[33.33%] text-center">
                    Front End
                  </p>
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] w-[33.33%] text-center">
                    Mid Range
                  </p>
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] w-[33.33%] text-center">
                    Late Stage
                  </p>
                </div>
                <hr className="w-full mt-1" />

                {/* <div > */}
                {collectionData.map((each, index) => {
                  const isColicnMetrics = each.metrics === "$ Collcn (%)";
                  const borderBottomClass = !isColicnMetrics
                    ? "border-b border-gray-100"
                    : "";

                  return (
                    <div
                      key={index}
                      className={`w-[100%] p-1.5 mt-1.5 flex justify-between ${borderBottomClass}`}
                    >
                      <div className="w-[33.33%]">
                        <p className="text-[#000000] text-[12px] font-[500] leading-[18px]">
                          {each.metrics}
                        </p>
                      </div>

                      <div className="w-[33.33%] text-center">
                        <p className="text-[#000000] text-[12px] font-[500] leading-[18px]">
                          <span
                            // style={getStyle(each.metrics, "font")}
                            className="px-3 rounded-sm py-[2px] customClassSecond"
                          >
                            {each.font}
                          </span>
                        </p>
                      </div>

                      <div className="w-[33.33%] text-center">
                        <p className="text-[#000000] text-[12px] font-[500] leading-[18px]">
                          <span
                            // style={getStyle(each.metrics, "mid")}
                            className="px-3 rounded-sm py-[2px] customClassSecond"
                          >
                            {each.mid}
                          </span>
                        </p>
                      </div>

                      <div className="w-[33.33%] text-center">
                        <p className="text-[#000000] text-[12px] font-[500] leading-[18px]">
                          <span
                            // style={getStyle(each.metrics, "late")}
                            className="px-3 rounded-sm py-[2px] customClassSecond"
                          >
                            {each.late}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
                {/* </div> */}
              </div>
              {/* <Link to="/monitoring"> */}
              <div
                className="px-4 py-2.5 bg-slate-500 rounded-[100px] justify-center items-center inline-flex"
                style={{ background: "#A5A5A5" }}
              >
                <div className="px-2 justify-center items-center disabled cursor-not-allowed flex">
                  <div className="text-center text-[#1C1B1F] text-[14px] font-[500] leading-[20px] tracking-[0.1px]  opacity-30 customClassThird">
                    Go to Dashboard
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </div>
          </div>
          <div
            className="mb-5 w-full  md:w-1/2 xl:w-1/3 "
            style={{
              borderRadius: "12px",
              backgroundColor: "transparent",
            }}
          >
            <div className=" w-full  p-4 bg-zinc-200 bg-opacity-20 rounded-xl shadow flex-col justify-start items-center gap-4 inline-flex h-full">
              <div className="flex-col justify-start items-center gap-1 flex">
                <div className="px-8 py-1 bg-white rounded  border-slate-400 justify-center items-center gap-1 inline-flex">
                  <div className="text-[#000] text-base text-[16px] font-[400]  font-['DM Sans'] leading-normal customClassThird">
                    Recovery
                  </div>
                </div>
                <div>
                  <span
                    className="text-[12px] font-[500]  leading-[18px]"
                    style={{ color: "#5C4E8E" }}
                  >
                    Accounts
                  </span>
                  <span className="text-[#ED0E00] text-[12px] font-[700] leading-[18px] ml-1">
                    post write off
                  </span>
                </div>
              </div>
              <div className=" w-full mb-2 p-3 bg-white rounded-xl shadow flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center gap-9 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-6 customClass flex items-center">
                        <span className="text-[#9F90D4] ml-[4px] font-[700]">
                          {/* <img src={doallar} alt="dollar" /> */}₹
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        <p>Balances:</p>
                      </div>
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      {/* $
                      {Math.floor(
                        (cardRecoveryData?.balances?.amount || 0) / 1000000
                      ).toLocaleString()}
                      M */}
                      {/* ₹ 4894.15 M */}
                      {/* ₹ {Math.floor((homeRecoveryData.balances.latest_month || 0) / 10000000).toLocaleString()} cr */}
                      <span className="text-[#9F90D4]">₹</span>{" "}
                      {(
                        (homeRecoveryData.balances.latest_month || 0) / 1000000
                      ).toFixed(1)}{" "}
                      M
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-3.5 h-3.5 customClass">
                      <span>
                        <img
                          src={
                            // recovery?.tile1.Balance.color === "O"
                            // ? shiftOrange
                            // : recovery?.tile2.Balance.color === "R"
                            // ? RedDownArrow
                            shiftGreen
                          }
                          alt="dollar"
                        />
                      </span>
                    </div>
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px] mt-0.5">
                      {/* {cardRecoveryData?.balances?.growth}% MOM */}
                      {/* +4.33% MOM */}+
                      {homeRecoveryData.balances.percentage_change.toFixed(2)}%
                      MOM
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-5 h-5 customClass">
                        <span>
                          <img src={database} alt="dollar" />
                        </span>
                      </div>
                      <div className="text-[#000] text-[14px] font-[500] font-['DM Sans'] leading-[18px] tracking-[0.28px]">
                        Units:
                      </div>
                    </div>
                    <div className="text-[#3E4259] text-[14px] font-[400]  leading-[18px] tracking-[0.28px]">
                      {/* {Math.floor(
                        cardRecoveryData?.units?.amount || 0
                      ).toLocaleString()} */}
                      {/* 6593 */}
                      {homeRecoveryData.units.latest_month.toLocaleString()}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-3.5 h-3.5 customClass left-[2px]">
                      <span>
                        <img
                          src={
                            // shiftOrange
                            // recovery?.tile1.Units.color === "O"
                            //   ? shiftOrange
                            //   : recovery?.tile1.Units.color === "R"
                            //   ? RedDownArrow
                            shiftGreen
                          }
                          alt="dollar"
                        />{" "}
                      </span>
                    </div>
                    <div className="text-[#000] text-[10px] font-[400] leading-normal tracking-[0.5px] mt-0.5">
                      {/* {cardRecoveryData?.units?.growth}% MOM */}
                      {/* +3.63% MOM */}+
                      {homeRecoveryData.units.percentage_change.toFixed(2)}% MOM
                    </div>
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                className="relative w-full p-3  h-[164px]  bg-white rounded-xl shadow flex-col justify-start items-start  flex"
              >
                <div className="flex justify-between p-1.5  w-full">
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] w-[50%] text-left">
                    Metrics
                  </p>
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] w-[36%] text-center">
                    V1
                  </p>
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] w-[36%] text-center">
                    V2
                  </p>
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] w-[36%] text-center">
                    V3
                  </p>
                  <p className="text-[#A5A5A5] text-[12px] font-[500] text-['DM Sans'] leading-[18px] w-[36%] text-center">
                    V4
                  </p>
                </div>
                <hr className="w-[100%] mt-1" />
                {/* {RecoveryData.map((each, index) => { */}
                {/* const isRecoveryMetrics = each.metrics === "$ Recovery (%)";
                  const isPayerRateMetrics =
                    each.metrics === "# Payer Rate (%)";
                  const borderBottomClass = !isPayerRateMetrics
                    ? "border-b border-gray-100"
                    : "";

                  return ( */}
                <div
                  // key={index}
                  className="flex justify-between w-full p-1.5 mt-1.5"
                >
                  <p className="text-[#000000] w-[37%] text-[12px] leading-[18px] font-[500] text-['DM Sans']  text-left">
                    ₹ Recovery (%)
                  </p>

                  <div className=" flex justify-between  w-[100%]  ">
                    <div className="w-[36%] text-center">
                      <p className=" text-[12px]  font-[500] text-['DM Sans'] leading-[18px] customClassSecond  text-white ">
                        <span
                          style={{
                            backgroundColor: comparisonRecovery["V1"],
                            width: "55px",
                            display: "inline-block",
                          }}
                          className="rounded-sm py-[2px] customClassSecond "
                        >
                          {" "}
                          {latestMonth["V1"].toFixed(1)}%
                        </span>
                      </p>
                    </div>
                    <div className="w-[36%] text-center">
                      <p className="text-[12px]  font-[500] text-['DM Sans'] leading-[18px]   customClassSecond  text-white ">
                        <span
                          style={{
                            backgroundColor: comparisonRecovery["V2"],
                            width: "55px",
                            display: "inline-block",
                          }}
                          className=" rounded-sm py-[2px] customClassSecond"
                        >
                          {" "}
                          {latestMonth["V2"].toFixed(1)}%
                        </span>
                      </p>
                    </div>
                    <div className="w-[36%] text-center">
                      <p className="text-[12px]  font-[500] text-['DM Sans'] leading-[18px]    customClassSecond   text-white ">
                        <span
                          style={{
                            backgroundColor: comparisonRecovery["V3"],
                            width: "55px",
                            display: "inline-block",
                          }}
                          className="rounded-sm py-[2px] customClassSecond"
                        >
                          {latestMonth["V3"].toFixed(1)}%
                        </span>
                      </p>
                    </div>
                    <div className="w-[36%] text-center ">
                      <p className="text-[12px]  font-[500] text-['DM Sans'] leading-[18px]   customClassSecond text-white  ">
                        <span
                          style={{
                            backgroundColor: comparisonRecovery["V4"],
                            width: "55px",
                            display: "inline-block",
                          }}
                          className=" rounded-sm py-[2px] customClassSecond bg-[#FFB200]"
                        >
                          {" "}
                          {latestMonth["V4"].toFixed(1)}%
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <p className="text-[#000000] w-[75%] text-[12px] ml-1 font-[500] text-['DM Sans'] leading-[18px] text-center">
                        <span
                          className="px-8 rounded-sm py-[2px] customClassSecond"
                          style={getStyle(each.metrics, "font")}
                        >
                          {latestMonth["0"].toFixed(1)}
                        </span>
                        <span className="px-8 rounded-sm py-[2px] customClassSecond">
                          {latestMonth["<6"].toFixed(1)}
                        </span>
                        <span className="px-8 rounded-sm py-[2px] customClassSecond">
                          {latestMonth["6-12"].toFixed(1)}
                        </span>
                        <span className="px-8 rounded-sm py-[2px] customClassSecond">
                          {latestMonth["12+"].toFixed(1)}
                        </span>
                      </p> */}
                </div>
                <hr className="w-[100%] mt-[3px]" />
                <div
                  // key={index}
                  className="flex justify-between w-[100%] p-1.5 mt-1.5 "
                >
                  <p className="text-[#000000] w-[37%] text-[12px] leading-[18px] font-[500] text-['DM Sans']  text-left">
                    # Payer Rate%
                  </p>

                  <div className=" flex justify-between  w-[100%]  ">
                    <div className="w-[36%] text-center">
                      <p className=" text-[12px]  font-[500] text-['DM Sans'] leading-[18px]  customClassSecond  text-white ">
                        <span
                          style={{
                            backgroundColor: comparisonPayer["V1"],
                            width: "55px",
                            display: "inline-block",
                          }}
                          className="px-3.5 rounded-sm py-[2px] customClassSecond"
                        >
                          {" "}
                          {latestMonthPayer["V1"].toFixed(1)}%
                        </span>
                      </p>
                    </div>
                    <div className="w-[36%] text-center">
                      <p className="text-[12px]  font-[500] text-['DM Sans'] leading-[18px]   customClassSecond  text-white ">
                        <span
                          style={{
                            backgroundColor: comparisonPayer["V2"],
                            width: "55px",
                            display: "inline-block",
                          }}
                          className="rounded-sm py-[2px] customClassSecond"
                        >
                          {" "}
                          {latestMonthPayer["V2"].toFixed(1)}%
                        </span>
                      </p>
                    </div>
                    <div className="w-[36%] text-center">
                      <p className="text-[12px]  font-[500] text-['DM Sans'] leading-[18px]    customClassSecond   text-white ">
                        <span
                          style={{
                            backgroundColor: comparisonPayer["V3"],
                            width: "55px",
                            display: "inline-block",
                          }}
                          className="rounded-sm py-[2px] customClassSecond"
                        >
                          {latestMonthPayer["V3"].toFixed(1)}%
                        </span>
                      </p>
                    </div>
                    <div className="w-[36%] text-center ">
                      <p className="text-[12px]  font-[500] text-['DM Sans'] leading-[18px]   customClassSecond text-white  ">
                        <span
                          style={{
                            backgroundColor: comparisonPayer["V4"],
                            width: "55px",
                            display: "inline-block",
                          }}
                          className="rounded-sm py-[2px] customClassSecond"
                        >
                          {" "}
                          {latestMonthPayer["V4"].toFixed(1)}%
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <p className="text-[#000000] w-[75%] text-[12px] ml-1 font-[500] text-['DM Sans'] leading-[18px] text-center">
                        <span
                          className="px-8 rounded-sm py-[2px] customClassSecond"
                          style={getStyle(each.metrics, "font")}
                        >
                          {latestMonth["0"].toFixed(1)}
                        </span>
                        <span className="px-8 rounded-sm py-[2px] customClassSecond">
                          {latestMonth["<6"].toFixed(1)}
                        </span>
                        <span className="px-8 rounded-sm py-[2px] customClassSecond">
                          {latestMonth["6-12"].toFixed(1)}
                        </span>
                        <span className="px-8 rounded-sm py-[2px] customClassSecond">
                          {latestMonth["12+"].toFixed(1)}
                        </span>
                      </p> */}
                </div>
              </div>
              <div
                className="px-4 py-2.5 bg-slate-500 rounded-[100px] justify-center items-center inline-flex"
                style={{ background: "#6750A4" }}
              >
                <div className="px-2 justify-center items-center flex">
                  <div
                    className="text-center text-white text-sm font-medium leading-tight tracking-tight cursor-pointer customClassThird"
                    onClick={navigateToRecoveryModule}
                  >
                    Go to Dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
