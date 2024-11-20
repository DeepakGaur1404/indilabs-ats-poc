import { IoIosArrowForward } from "react-icons/io";
import downorangeArrow from "../../assets/icons/down-orange-shift.svg";
import UporangeArrow from "../../assets/icons/shift-orange.svg";
import OptimusImage from "../../assets/images/NewOptimus.svg";
import React, { PureComponent, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  name: string;
  percentage: any;
}

// const datakey: DataItem[] = [
//   { name: "Payer", percentage: 6.457267386772787 },
//   { name: "Non Payer", percentage: 93.54273261322722 },
// ];

// interface DataKey {
//   name:string;
//   uv: number;
//   pv: number;
// }

// const data: any = {
//   "payer percentage": {
//     payer_percent: 6.457267386772787,
//     non_payer_percent: 93.542732613227216,
//   },
//   "settlement contributions": {
//     Jan2024: {
//       "Recovery from payment arrangements": 93239185.91,
//       "Recovery from settlements": 13169689.4,
//     },
//     Feb2024: {
//       "Recovery from payment arrangements": 93268836.75,
//       "Recovery from settlements": 12827355.0,
//     },
//     Mar2024: {
//       "Recovery from payment arrangements": 101068093.02999997,
//       "Recovery from settlements": 17335991.0,
//     },
//     Apr2024: {
//       "Recovery from payment arrangements": 66968657.750000022,
//       "Recovery from settlements": 14388164.18,
//     },
//     May2024: {
//       "Recovery from payment arrangements": 80638818.690000013,
//       "Recovery from settlements": 19757297.0,
//     },
//     Jun2024: {
//       "Recovery from payment arrangements": 68459450.91,
//       "Recovery from settlements": 18891896.0,
//     },
//   },
//   "last month recovery rate": 0.55029333613077869,
//   "recovery rate change": -1.1900809306596056,
// };

// const optimusCard = {
//   "last month recovery rate": 0.5502933361307787,
//   "recovery rate change": -1.1900809306596056,
// };

const arrTicks = (data: any[]): number[] => {
  let arr: number[] = [];
  let maxNum = 0;

  if (data && data.length > 0) {
    const sums = data.map((item) => {
      const settlement = item["Recovery from payment arrangements"] || 0;
      const recoverySettlement = item["Recovery from settlements"] || 0;
      return settlement + recoverySettlement;
    });

    maxNum = Math.max(...sums);

    const numberOfTicks = 5;
    const stepSize = maxNum / numberOfTicks;

    maxNum = Math.ceil(maxNum / stepSize) * stepSize;

    for (let i = 0; i <= numberOfTicks; i++) {
      arr.push(parseFloat((i * stepSize).toFixed(1)));
    }
  } else {
    arr = [0];
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

const transformDataForChart = (settlementContributions: any) => {
  return Object.keys(settlementContributions).map((month) => ({
    name: month,
    ...settlementContributions[month],
  }));
};

const Execution = () => {
  const [data, setData] = useState<any>();

  // const [pieChartData, setPieChartData] = useState<any>("payer percentage");

  const [error, setError] = useState();
  const transformedData = transformDataForChart(
    (data && data["settlement contributions"]) || 0
  );

  const COLORS = ["#C9C4D9", "#776BA1"];
  const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];
  const recoveryRateChange: any =
    data && data["recovery rate change"].toFixed(2);
  const fetchData = async (blob: any) => {
    const url = `https://indilab-apim.azure-api.net/api/homedashboard/?blob=optimus_home`;
    const headers = {
      "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
    };
    //  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result.data);
      setData(result.data);
      // setHotspotCounts(result.data.Hotspot_Counts);
      //  setPieChartData(result.data["payer percentage"]);
      // console.log(result.data.Hotspot_Percentages);
      // setBarData(result.data.Top_5_Segments);
      // console.log(result.data.Top_5_Segments);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData("optimus_home");
  }, []);

  const pieChartData = [
    {
      name: "Payer",
      percentage: data && data["payer percentage"].payer_percent,
    },
    {
      name: "Non Payer",
      percentage: data && data["payer percentage"].non_payer_percent,
    },
  ];
  return (
    <div className="lg:w-[32%] sm:w-[90%] h-full rounded-xl shadow p-4 gap-3 bg-[#E8F3ED]">
      <div className="cursor-pointer flex flex-col items-center">
        <img
          className=" border border-[#4EAD5B] bg-white gap-[8px] py-[6px] px-[8px] customClassFifth rounded-[4px] h-[34px] w-[110px]"
          src={OptimusImage}
          alt="OptimusImage"
        />
        <p className="font-[500] text-[#237E2F] text-center text-[11px] font-['DM Sans'] mt-1 customClassFifth">
          Execution
        </p>
      </div>
      <div className="bg-white p-1 h-[116px] rounded-xl mt-4 flex flex-col items-center">
        <span className="font-['DM Sans'] text-[32px] text-[#EF4444] font-[500] customClassThird">
          {data && data["last month recovery rate"].toFixed(2)}%
        </span>
        <p className="font-['DM Sans'] text-[14px] font-[500] ">
          Recovery Rate
        </p>
        <div className="flex items-center gap-1">
          <img
            src={recoveryRateChange < 0 ? downorangeArrow : UporangeArrow}
            alt="arrow"
            className="w-[14px] h-[14px] customClass"
          />
          <p className="font-['DM Sans'] text-[10px] font-[400] gap-[4px]">
            {recoveryRateChange} vs last month
          </p>
        </div>
        <p className="font-['DM Sans'] text-[12px] text-[#9CA4B6] font-[400]">
          Risk to Plan: $15Ok
        </p>
      </div>
      <div className="h-[364px] p-2  w-[100%] bg-white  rounded-xl mt-3">
        <div className="flex justify-between p-2 w-[100%]">
          <p className="font-[DM Sans] font-[500] text-[14px] leading-[18px] customClassThird">
            Key Results
          </p>
          <button className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] customClassThird">
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={110}
              fill="#8884d8"
              dataKey="percentage"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  stroke="none"
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => {
                const formattedValue =
                  typeof value === "number" ? `${value.toFixed(2)}%` : value;
                return [formattedValue, `${name}`];
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-3 -mt-3">
          {/* <div className="flex items-center gap-1">
            <div className="w-[8px] h-[8px] bg-[#E5E3ED] rounded-xl"></div>
            <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
              Payment%: <span className="ml-[2px]">5%</span>
            </div>
          </div> */}
          <div className="flex items-center gap-1">
            <div className="w-[8px] h-[8px] bg-[#C9C4D9] rounded-xl"></div>
            <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
              Payer:{" "}
              <span className="ml-[2px]">
                {typeof pieChartData[0]?.percentage === "number"
                  ? pieChartData[0]?.percentage.toFixed(2)
                  : "0.00"}
                %{" "}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[8px] h-[8px] bg-[#776BA1] rounded-xl"></div>
            <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
              Non Payer:{" "}
              <span className="ml-[2px]">
                {typeof pieChartData[1]?.percentage === "number"
                  ? pieChartData[1]?.percentage.toFixed(2)
                  : "0.00"}
                %{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[364px] p-2 w-[100%]  bg-white  rounded-xl mt-3">
        <div className="flex justify-between py-2 px-1">
          <p className="font-[DM Sans] text-[#000000] font-[500] text-[14px] leading-[18px] customClassThird">
            Settlement (millions)
          </p>
          <button className="flex text-[#6750a4] items-center text-[12px] font-[500] justify-center gap-2 w-[22%] customClassThird">
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] customClass" />
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center w-[100%] mt-2">
          <ResponsiveContainer width="100%" height={270}>
            <BarChart
              data={transformedData} // Use transformed data here
              margin={{
                top: 5,
                right: 0,
                left: -20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name" // Month name
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
                axisLine={false}
                tickLine={false}
                domain={[0, (dataMax: any) => Math.ceil(dataMax)]}
                tickFormatter={formatNumberMillion}
                ticks={arrTicks(transformedData)} // Calculate ticks with transformed data
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3E4259"}
              />
              <Tooltip
                formatter={(value: any, name) => {
                  const formattedValue =
                    typeof value === "number" && name === "Settlement"
                      ? ` ₹ ${Math.floor(value).toLocaleString()}`
                      : typeof value === "number" &&
                        name === "Recovery Settlement"
                      ? ` ₹ ${Math.floor(value).toLocaleString()}`
                      : typeof value === "number"
                      ? `${Math.floor(value).toLocaleString()}`
                      : ` ${parseFloat(value.toFixed(2)).toLocaleString()}`;
                  return [formattedValue, `${name}`];
                }}
              />
              <Bar
                dataKey="Recovery from payment arrangements"
                name="Settlement"
                stackId="a"
                fill="#4339F2"
                barSize={10}
                radius={[0, 0, 10, 10]}
              />
              <Bar
                dataKey="Recovery from settlements"
                name="Recovery Settlement"
                stackId="a"
                fill="#FFB200"
                barSize={10}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex items-center gap-5 mt-2">
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#4339F2] rounded-xl"></div>
              <div className="text-[12px] font-[400] text-[#000000] font-['DM Sans'] customClassThird">
                Settlement
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[8px] h-[8px] bg-[#FFB200] rounded-xl"></div>
              <div className="text-[12px] text-[#000000] font-[400] font-['DM Sans'] customClassThird">
                Recovery Settlement
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execution;
