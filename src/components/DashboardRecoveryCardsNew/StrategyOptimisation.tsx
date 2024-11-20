import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DynamoImage from "../../assets/images/Dynamo.svg";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  LineChart,
  ReferenceLine,
  ComposedChart,
} from "recharts";

// const arrGraphTicks = () => {
//   let arr = [];
//   let maxNum = 0;
//   if (data) {
//     maxNum = Math.max(...data?.map((item: any) => item["roi"]));
//   } else {
//     return [0];
//   }
//   let num1 = 0;
//   for (let i = 0; i <= 10; i++) {
//     arr.push(parseFloat(num1.toFixed(1)));
//     num1 += Math.ceil(maxNum) / 10;
//   }
//   return arr;
// };

const StrategyOptimisation = () => {
  // const formatYAxisTick = (tick: any) => `${tick}%`;
  const navigate = useNavigate();

  const handleHotspotReviewClick = () => {
    navigate("/strategy/recovery");
  };

  const handleStrategyReviewClick = () => {
    navigate("/strategy/recovery");
  };

  const [newData, setNewData] = useState<any>(null); // Ensure initial state is null or an empty object
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/homedashboard/?blob=dynamo_home`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data, "fetched data");
      setNewData(result.data);
      // setHotspotCounts(result.data.Hotspot_Counts);
      // setpieChart(result.data.Hotspot_Percentages);
      // console.log(result.data.Hotspot_Percentages);
      // setBarData(result.data.Top_5_Segments);
      // console.log(result.data.Top_5_Segments);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData("dynamo_home");
  }, []);
  // if (!newData || !newData.data) {
  //   return <div>Loading...</div>; // Render loading or fallback UI
  // }

  const returnOnInvestment = newData?.["Return On Investment"] || {};

  // Safely map over the keys of "Return On Investment" to create the data array
  const data = Object.keys(returnOnInvestment).length
    ? Object.keys(returnOnInvestment).map((key) => ({
        name: key,
        recovery: returnOnInvestment[key].recovery || 0,
        cost: returnOnInvestment[key].cost || 0,
        roi: returnOnInvestment[key].roi || 0,
      }))
    : []; // Default empty array if no data is available

  const segmentation = newData?.Segmentation || {};

  // Safely map over the keys of "Segmentation"
  const payersData = Object.keys(segmentation).length
    ? Object.keys(segmentation).map((key) => ({
        label: key,
        amount: segmentation[key]?.volume || 0, // Assuming amount is stored in segmentation[key]
        currentRate: segmentation[key]?.percentage || 0, // Assuming currentRate is stored
        previousRate: segmentation[key]?.benchmark || 0, // Assuming previousRate is stored
      }))
    : []; // Default empty array if no data is available

  // const payersData = [
  //   {
  //     label: "High Payer",
  //     amount: newData.data.Segmentation.H.volume,
  //     currentRate: newData.data.Segmentation.H.percentage,
  //     previousRate: newData.data.Segmentation.H.benchmark,
  //     isSpecialRate: false,
  //     specialRateColor: "",
  //   },
  //   {
  //     label: "Medium Payer",
  //     amount: newData.data.Segmentation.M.volume,
  //     currentRate: newData.data.Segmentation.M.percentage,
  //     previousRate: newData.data.Segmentation.M.benchmark,
  //     isSpecialRate: true,
  //     specialRateColor: "#10B981",
  //   },
  //   {
  //     label: "Low Payer",
  //     amount: newData.data.Segmentation.L.volume,
  //     currentRate: newData.data.Segmentation.L.percentage,
  //     previousRate: newData.data.Segmentation.L.benchmark,
  //     isSpecialRate: true,
  //     specialRateColor: "#F9C700",
  //   },
  // ];

  const arrTicks: any = (data: any[]): number[] => {
    let arr: number[] = [];
    let maxNum = 0;

    if (data && data.length > 0) {
      maxNum = Math.max(
        ...data.flatMap((item) => {
          return Object.values(item).filter(
            (value): value is number => typeof value === "number"
          );
        })
      );
    } else {
      return [0];
    }

    const numberOfTicks = 10;
    let stepSize = maxNum / numberOfTicks;
    maxNum = Math.ceil(maxNum / stepSize) * stepSize;
    let num1 = 0;
    for (let i = 0; i <= numberOfTicks; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += stepSize;
    }

    return arr;
  };

  const formatNumberMillion = (num: any) => {
    if (num === 0) {
      return "0";
    } else if (num >= 1e7) {
      // 10 million and above
      return (num / 1e6).toFixed(2);
    } else if (num >= 1e6) {
      // 1 million to 10 million
      return (num / 1e6).toFixed(2);
    } else if (num >= 1e5) {
      // 100,000 to 1 million
      return (num / 1e6).toFixed(2);
    } else {
      // Less than 100,000
      return (num / 1e6).toFixed(2); // You can adjust this if needed
    }
  };

  const formatYAxisTick = (tick: number) => {
    return tick === 0 ? `${tick}` : `${tick.toFixed(1)}`;
  };

  const arrGraphTicks = () => {
    let arr = [0];
    let maxNum = 0;
    if (data) {
      maxNum = Math.max(...data?.map((item: any) => item["roi"]));
    } else {
      return [0];
    }
    let num1 = 0;
    for (let i = 0; i <= 10; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 10;
    }
    return arr;
  };

  return (
    <div className="lg:w-[32%] sm:w-[90%] h-full rounded-xl shadow p-4 gap-3  bg-[#FFF8F2]">
      <div className="cursor-pointer flex flex-col items-center">
        <img
          className=" border border-[#F3A359] bg-white gap-[8px] py-[6px] px-[8px] customClassFifth rounded-[4px] h-[34px] w-[110px]"
          src={DynamoImage}
          alt="DynamoImage"
        />
        <p className="font-[500] text-[#EC7421] text-center text-[11px] font-['DM Sans'] mt-1 customClassFifth">
          Diagnostic, Segmentation & Strategy Decision Engine
        </p>
      </div>
      <div className="bg-white h-[116px] p-1 rounded-xl mt-4 flex flex-col items-center ">
        <span className="font-['DM Sans'] text-[32px] text-[#10B981] font-[500] customClassThird">
          {newData?.["last roi"]?.toFixed(2) || "0.00"}
        </span>
        <p className="font-['DM Sans'] text-[14px] font-[500] ">ROI Value</p>
        <p className="font-['DM Sans'] text-[10px] font-[400] gap-[4px]">
          {newData?.["roi change"]?.toFixed(2) || "0.00"} vs last month
        </p>
        <p className="font-['DM Sans'] text-[12px] text-[#9CA4B6] font-[400]">
          Improvement Opportunity: $15Ok
        </p>
      </div>
      <div className="h-[364px] p-2 w-[100%]  bg-white  rounded-xl mt-3">
        <div className="flex justify-between py-2 px-1">
          <p className="font-[DM Sans] font-[500] text-[14px] leading-[18px] text-[#000000] customClassThird">
            Return on Investment (millions)
          </p>
          <button
            className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] mr-1 customClassThird"
            onClick={handleStrategyReviewClick}
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center mt-1 w-[100%]  rounded-xl">
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart
              // width={400}
              // height={280}
              data={data}
              margin={{ top: 10, right: -25, left: -25, bottom: 20 }}
              barGap={0}
              barCategoryGap={0}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                angle={-70}
                dy={0}
                dx={-4}
                textAnchor="end"
              />
              <YAxis
                yAxisId="left"
                interval={0}
                axisLine={false}
                tickLine={false}
                fontWeight={400}
                fontSize={9}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                domain={[0, "datamax"]}
                tickFormatter={formatNumberMillion}
                ticks={arrTicks(data)}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                fontWeight={400}
                fontSize={9}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                domain={[0, "dataMax"]}
                tickFormatter={formatYAxisTick}
                ticks={arrGraphTicks()}
              />
              <Tooltip
                formatter={(value: any, name) => {
                  const formattedValue =
                    typeof value === "number" && name === "ROI"
                      ? `${parseFloat(value.toFixed(2)).toLocaleString()}`
                      : typeof value === "number"
                      ? `₹ ${Math.floor(value).toLocaleString()}`
                      : `${parseFloat(value.toFixed(2)).toLocaleString()}`;
                  return [formattedValue, `${name}`];
                }}
              />
              <Bar
                dataKey="recovery"
                fill="#FFB200"
                name="Recovery"
                yAxisId="left"
                barSize={10}
                radius={[10, 10, 10, 10]}
              />
              <Bar
                dataKey="cost"
                name="Cost"
                fill="#4339F2"
                yAxisId="left"
                barSize={10}
                radius={[10, 10, 10, 10]}
              />
              <Line
                type="linear"
                dataKey="roi"
                name="ROI"
                yAxisId="right"
                stroke="#FF7A00"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#4339F2] rounded-xl"></div>
              <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
                ₹Cost
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#FFB200] rounded-xl"></div>
              <div className="text-[12px] font-[400] font-['DM Sans'] text-[#493b3b] customClassThird">
                ₹Recovery
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#FF7A00] rounded-xl"></div>
              <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
                Rol
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[364px] p-2  bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-2">
          <p className="font-[DM Sans] font-[500] text-[14px] leading-[18px] customClassThird">
            Segmentation
          </p>
          <button
            className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] customClassThird"
            onClick={handleHotspotReviewClick}
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        <table className="w-[100%] p-2">
          <thead>
            <tr className="border-b-[1px] border-[#F3F4F6] flex justify-between text-left p-3">
              <th className="font-[400] text-[#9CA4B6] text-[10px] font-['DM Sans'] w-[87px] ">
                Segments
              </th>
              <th className="font-[400] text-[#9CA4B6] text-[10px] font-['DM Sans'] w-[38px]">
                Volume
              </th>
              <th className="font-[400] text-[#9CA4B6] text-[10px] font-['DM Sans'] w-[52px]">
                Current KPI
              </th>
              <th className="font-[400] text-[#9CA4B6] text-[10px] font-['DM Sans'] w-[52px]">
                Benchmark
              </th>
            </tr>
          </thead>
          <tbody className="w-full flex flex-col">
            {payersData.map((payer, index) => (
              <tr
                key={index}
                className="border-b-[1px] border-[#F3F4F6] flex justify-between items-center p-3"
              >
                <td className="text-start text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[87px]">
                  {payer.label === "M"
                    ? "Medium Payer"
                    : payer.label === "L"
                    ? "Low Payer"
                    : "High Payer"}
                </td>

                <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[38px]">
                  {payer.amount}
                </td>

                <td className="text-center text-[#ffffff] w-[52px] font-[400] text-[12px] font-['DM Sans']">
                  <span className="text-[#161D29]">
                    {parseFloat(payer.currentRate).toFixed(2)}%
                  </span>
                </td>

                <td className="text-center text-[#161D29] font-[400] text-[12px] font-['DM Sans'] w-[52px]">
                  {parseFloat(payer.previousRate)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StrategyOptimisation;
