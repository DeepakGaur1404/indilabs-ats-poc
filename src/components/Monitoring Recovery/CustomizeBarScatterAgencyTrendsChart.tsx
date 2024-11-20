import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
  ComposedChart,
} from "recharts";

interface DataItem {
  sub_segment: string;
  value: number;
}

interface CustomizeBarScatterAgencyChartProps {
  data: DataItem[];
  activeButton: string;
  handleStateHover:any;
  setHoveredState:any;
  setHoveredSubSegment:any
}

const colors = ["#4169E1", "#FFB200"];

const CustomizeBarScatterAgencyTrendsChart: React.FC<
  CustomizeBarScatterAgencyChartProps
> = ({ data, activeButton,  handleStateHover,
  setHoveredState,setHoveredSubSegment}) => {

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
    
        const numberOfTicks = 4; // You can adjust the number of ticks as needed
        let stepSize = maxNum / numberOfTicks;
    
        // Adjust maxNum to the next multiple of stepSize
        maxNum = Math.ceil(maxNum / stepSize) * stepSize;
    
        let num1 = 0;
    
        for (let i = 0; i <= numberOfTicks; i++) {
          arr.push(parseFloat(num1.toFixed(1)));
          num1 += stepSize;
        }
    
        return arr;
      };

  const formatYAxisTick = (tick: any) => {
    if (tick === 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed(1)}`;
    }
  };

  const formatNumberMillion = (num: any) => {
    if (num === 0) {
      return "0";
    } else if (num >= 1e7) {
      // 10 million and above
      return (num / 1e6).toFixed(2) ;
    } else if (num >= 1e6) {
      // 1 million to 10 million
      return (num / 1e6).toFixed(2) ;
    } else if (num >= 1e5) {
      // 100,000 to 1 million
      return (num / 1e6).toFixed(2);
    } else {
      // Less than 100,000
      return (num / 1e6).toFixed(2) ; // You can adjust this if needed
    }
  };
  const tooltipFormatter = (value: any, name: any) => {
    if (name === "value") {
      return [`₹ : ${Math.floor(value).toLocaleString()}`];
    }
    return [value, name];
  };
//houre
  // const handleMouseOver = (state: any, idx: any) => {
  //   // setHoveredState(state);
  //   handleStateHover(state); // Pass state to parent or other component if necessary
  //   setHoveredState(false); // Reset active index on bar leave
  //   setHoveredSubSegment(state)
  // };
  // const handleBarLeave = () => {
  //   setHoveredState(true); // Reset active index on bar leave
  //   setHoveredSubSegment(null)
  // };

  const handleMouseOver = (state: any, value: any) => {
    // setHoveredState(state);
    handleStateHover(state); // Pass state to parent or other component if necessary
    setHoveredState(false);
    // Reset active index on bar leave
    setHoveredSubSegment(state);
  };
  const handleBarLeave = () => {
    setHoveredState(true); // Reset active index on bar leave
    setHoveredSubSegment(null);
  };

  return (
    <>
      {activeButton === "$Recovery" && (
        <div className="w-full xl:w-[48%] ml-3 h-[380px] mt-10  flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white">
          <div className="w-full flex flex-wrap md:flex justify-between lg:px-0">
            <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] mt-3">
              Recovery$ (millions)
            </h1>
            {/* <div className="flex items-center gap-2 lg:gap-7">
              {data.map((entry, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor:
                        VALUE_CATEGORY_MAPPING[entry.sub_segment] || COLORS[5],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {entry.sub_segment}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{left:5, top: 20, bottom: 15 }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="sub_segment"
                fontWeight={400}
                fontFamily="DM Sans"
                fontSize={12}
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
               
                domain={[0]}
              />
              <YAxis
                dataKey="value"
                fontWeight={400}
                fontSize={11}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                domain={[0, "datamax"]} 
                width={34}
                tickLine={false}
                axisLine={false}
                ticks={arrTicks(data)}
                // tickFormatter={formatYAxisTick}
                tickFormatter={formatNumberMillion}
              />
                  {/* <Tooltip formatter={tooltipFormatter} /> */}
                  <Tooltip
                content={({ payload, label }: any) => {
                  if (payload && payload.length) {
                    const data = payload[0].payload;
                    const value = payload[0].value;

                    handleMouseOver(data.sub_segment, value);

                    return (
                      <div className="bg-white border-2  w-max h-max py-2.5 px-2.5">
                        <p className="text-[#000000]">{`${label}`}</p>
                        <p className="text-[#4169E1]">{`₹: ${Math.floor(
                          value
                        ).toLocaleString()}`}</p>
                      </div>
                    );
                  } else {
                    handleBarLeave();
                  }
                  return null;
                }}
              /> 
              <Bar
                dataKey="value"
                data={data}
                fill={colors[0]}
                radius={[5, 5, 5, 5]}
                // onMouseOver={(data, idx) =>
                
                //   handleMouseOver(data.sub_segment, idx)
                // }
                // onMouseLeave={handleBarLeave}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default CustomizeBarScatterAgencyTrendsChart;
