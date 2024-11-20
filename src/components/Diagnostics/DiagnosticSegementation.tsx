import { useEffect, useState } from "react";
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
  percentage: number;
}


const DiagnosticSegementation = () => {
  // const [data, setData] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   fetchData("diagnostics_segmentation");
  // }, []);
  
  // const fetchData = async (blob: any) => {
  //   const url = `https://indilab-apim.azure-api.net/api/diagnostics?blob=diagnostics_segmentation`;
  //   const headers = {
  //     "Ocp-Apim-Subscription-Key": "9a4cebcda5b449bdb29fe6b2b75a4dfa",
  //   };
  
  //   try {
  //     const response = await fetch(url, { method: "GET", headers });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const result = await response.json();
  //     console.log(result, "fetched data");
  //   setData(result.data);
  //   } catch (err: any) {
  //     setError(err.message);
  //   }
  // };
  
  // useEffect(() => {
  //   if (data) {
  //     // console.log(data, "Updated data****");
  //   }
  // }, [data]);

  const data = {
   
      "segmentation": {
          "#account level": {
              "low": 23.178861135651754,
              "medium/high": 76.82113886434824
          },
          "balance level": {
              "low": 39.97514926172313,
              "medium/high": 60.02485073827686
          },
          "recovery percentage": {
              "low": 6.487951568189118,
              "medium/high": 16.757110765019835
          }
      }
  }
  

  const datakeyAccounts: DataItem[] = [
    {
      name: "Low Payer",
      percentage: data && data.segmentation["#account level"].low,
    },
    {
      name: "High / Medium Payer",
      percentage: data && data.segmentation["#account level"]["medium/high"],
    },
  ];
  
  const datakeyBalances: DataItem[] = [
    {
      name: "Low Payer",
      percentage: data && data.segmentation["balance level"].low,
    },
    {
      name: "High / Medium Payer",
      percentage: data && data.segmentation["balance level"]["medium/high"],
    },
  ];
  
  const bardata = [
    {
      name: "Low Payer",
      percentage: data && data.segmentation["recovery percentage"].low,
      fill: "#fcb400",
    },
    {
      name: "High / Medium Payer",
      percentage: data && data.segmentation["recovery percentage"]["medium/high"],
      fill: "#4c74e6",
    },
  ];
  
  const COLORS = ["#FFB200", "#4169E1"];
  const getColorBySubSegment = ["#FFB200", "#4169E1"];
  
  const renderCustomizedLabel = (props: any) => {
    const {
      cx,
      cy,
      midAngle,
      outerRadius,
      innerRadius,
      percent,
      value,
      payload,
    } = props;
    const RADIAN = Math.PI / 180; // Declare RADIAN here
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle  *  RADIAN);
    const y = cy + radius * Math.sin(-midAngle  *  RADIAN);
    
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };
  
  const formatYAxisTick = (tick: any) => {
    if (tick === 0) {
      return `${tick}%`;
    } else {
      return `${tick}%`;
    }
  };
  const arrTicks: any = (bardata: any[]): number[] => {
    let arr: number[] = [];
    let maxNum = 0;

    if (bardata && bardata.length > 0) {
      maxNum = Math.max(
        ...bardata.flatMap((item) => {
          return Object.values(item).filter(
            (value): value is number => typeof value === "number"
          );
        })
      );
    } else {
      return [0];
    }

    const numberOfTicks = 6;
    let stepSize = maxNum / numberOfTicks;
    maxNum = Math.ceil(maxNum / stepSize) * stepSize;
    let num1 = 0;
    for (let i = 0; i <= numberOfTicks; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += stepSize;
    }

    return arr;
  };
 
  
  return (
    <div className="bg-[white] w-[100%] mt-3 shadow rounded-xl p-4 gap-4">
      <p className="text-[#000000] font-['DM Sans'] font-[700] text-[16px] leading-[21px]">
        Segmentation Results
      </p>
      <div className="flex flex-wrap justify-between items-center gap-3 mt-3 w-[100%]">
        <div className="w-[100%] xl:w-[49%] h-[285px] border-[#E3E3E3] border-[1px] rounded-xl flex flex-col items-center gap-[8px] sm:py-1 lg:py-4 py-4 px-3 ">
          <p className="text-center text-[#000000] font-['DM Sans'] font-[500] text-[14px] leading-[21px] -mt-2">
            Accounts
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={datakeyAccounts}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                label={renderCustomizedLabel}
                fill="#8884d8"
                dataKey="percentage"
              >
                {datakeyAccounts.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    stroke="#ffffff"
                    strokeWidth={3}
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
          <div className="flex items-center flex-wrap gap-3 lg:gap-3">
            <div className=" flex items-center gap-3">
              <div className="flex items-center">
                <div
                  className="legend-color"
                  style={{
                    backgroundColor: getColorBySubSegment[0],
                    width: "13px",
                    height: "13px",
                    marginRight: "5px",
                    borderRadius: "3px",
                  }}
                />
                <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                  Low Payer
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className="legend-color"
                  style={{
                    backgroundColor: getColorBySubSegment[1],
                    width: "13px",
                    height: "13px",
                    marginRight: "5px",
                    borderRadius: "3px",
                  }}
                />
                <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                  High / Medium Payer
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] xl:w-[49%]   h-[285px]  border-[#E3E3E3] border-[1px] rounded-xl flex flex-col items-center gap-[8px] sm:py-1 lg:py-4  py-4 px-3 ">
          <p className="text-center text-[#000000] font-['DM Sans'] font-[500] text-[14px] leading-[21px] -mt-2">
            Balances
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={datakeyBalances}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                label={renderCustomizedLabel}
                fill="#8884d8"
                dataKey="percentage"
              >
                {datakeyBalances.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    stroke="#ffffff"
                    strokeWidth={3}
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
          <div className="flex items-center flex-wrap gap-3 lg:gap-3">
            <div className=" flex items-center gap-3">
              <div className="flex items-center">
                <div
                  className="legend-color"
                  style={{
                    backgroundColor: getColorBySubSegment[0],
                    width: "13px",
                    height: "13px",
                    marginRight: "5px",
                    borderRadius: "3px",
                  }}
                />
                <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                  Low Payer
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className="legend-color"
                  style={{
                    backgroundColor: getColorBySubSegment[1],
                    width: "13px",
                    height: "13px",
                    marginRight: "5px",
                    borderRadius: "3px",
                  }}
                />
                <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                  High / Medium Payer
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]  h-[298px]  border-[#E3E3E3] border-[1px] rounded-xl flex flex-col items-center gap-[12px] sm:py-1 lg:py-4  py-4 px-3 ">
          <p className="text-center text-[#000000] font-['DM Sans'] font-[500] text-[14px] leading-[21px] -mt-2">
            Performance
          </p>

          <ResponsiveContainer width="99%" height={200}>
            <BarChart
              layout="vertical"
              data={bardata}
              margin={{
                top: 5,
                right: 15,
                left: -40,
                bottom: 1,
              }}
            >
              <CartesianGrid horizontal={false} strokeDasharray="3 3" />
              <XAxis
                type="number"
                domain={[0, "datamax"]}
                // ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
                ticks={arrTicks(bardata)}
                fontWeight={400}
                fontFamily="DM Sans"
                fontSize={10}
                tickFormatter={formatYAxisTick}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tick={false}
              />
              <Tooltip
                formatter={(value, name) => {
                  const formattedValue =
                    typeof value === "number" ? `${value.toFixed(2)}%` : value;
                  return [formattedValue, `${name}`];
                }}
              />
              <Bar dataKey="percentage" barSize={45} radius={[5, 5, 5, 5]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center flex-wrap gap-3 lg:gap-3">
            <div className=" flex items-center gap-3">
              <div className="flex items-center">
                <div
                  className="legend-color"
                  style={{
                    backgroundColor: getColorBySubSegment[0],
                    width: "13px",
                    height: "13px",
                    marginRight: "5px",
                    borderRadius: "3px",
                  }}
                />
                <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                  Low Payer
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className="legend-color"
                  style={{
                    backgroundColor: getColorBySubSegment[1],
                    width: "13px",
                    height: "13px",
                    marginRight: "5px",
                    borderRadius: "3px",
                  }}
                />
                <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                  High / Medium Payer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticSegementation;
