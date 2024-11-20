import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface DataItem {
  sub_segment: string;
  value: number;
}

interface CustomizeBarScatterAgencyChartProps {
  activeButton: string;
  uniquedata: DataItem[];
}

const COLORS = [
  "#6F91EA", // Very Small
  "#4339F2", // Small
  "#34B53A", // Med
  "#FFB200", // Large
  "#FA7B33", // Inhouse
  "#79747E", // Extra color if needed
];

const VALUE_CATEGORY_MAPPING: { [key: string]: string } = {
  "Very Small": COLORS[0],
  Small: COLORS[1],
  Med: COLORS[2],
  Large: COLORS[3],
  Inhouse: COLORS[4],
};

const CustomizeBarScatterAgencyChart: React.FC<
  CustomizeBarScatterAgencyChartProps
> = ({  uniquedata, activeButton }) => {
  // const CustomTooltip: React.FC<{ payload?: any[] }> = ({ payload }) => {
  //   if (payload && payload.length) {
  //     const { value, payload: tooltipPayload } = payload[0];
  //     const sub_segment = tooltipPayload.sub_segment;
  //     const formattedValue =
  //       typeof value === "number" ? value.toFixed(1) : value.toFixed(1);
  //     const color = VALUE_CATEGORY_MAPPING[sub_segment] || COLORS[5];
  //     return (
  //       <div className="bg-white border-2 w-max h-max py-2.5 px-2.5">
  //         <span style={{ color }}>{sub_segment}:</span>{" "}
  //         <span style={{ color }}>{`${formattedValue}%`}</span>
  //       </div>
  //     );
  //   }
  //   return null;
  // };
// agency
  const CustomTooltip: React.FC<{
    payload?: any[];
    coordinate?: { x: number; y: number };
  }> = ({ payload, coordinate }) => {
    if (payload && payload.length) {
      const { value, payload: tooltipPayload } = payload[0];
      const sub_segment = tooltipPayload.sub_segment;
      const formattedValue =
        typeof value === "number" ? value.toFixed(1) : value.toFixed(1);
      const color = VALUE_CATEGORY_MAPPING[sub_segment] || COLORS[5];
      return (
        <div
          className="bg-white border-2 w-max h-max py-2.5 px-2.5"
          style={{
            position: "absolute",
            top: coordinate ? coordinate.y + 10 : 0,
            left: coordinate ? coordinate.x + 10 : 0,
            transform: "translate(0, 0)",
            pointerEvents: "none",
            transition: "top 0.1s ease-out, left 0.1s ease-out",
            zIndex: 1000,
          }}
        >
          <span style={{ color }}>{sub_segment}:</span>{" "}
          <span style={{ color }}>{`${formattedValue}%`}</span>
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, value, payload } = props;
    const RADIAN = Math.PI / 180; // Declare RADIAN here
    const radius = outerRadius + 38; // Increase radius to move labels outside
    const x = cx + radius * Math.cos(-midAngle * RADIAN); // Correct usage of Math.cos
    const y = cy + radius * Math.sin(-midAngle * RADIAN); // Correct usage of Math.sin
    const color = VALUE_CATEGORY_MAPPING[payload.sub_segment] || COLORS[5];

    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fill={color}
      >
        {`${value.toFixed(1)}%`}
      </text>
    );
  };

  const CustomTooltipAgency: React.FC<{
    payload?: any[];
    coordinate?: { x: number; y: number };
  }> = ({ payload, coordinate }) => {
    if (payload && payload.length) {
      const { value, payload: tooltipPayload } = payload[0];
      const sub_segment = tooltipPayload.sub_segment;
      const formattedValue =
        typeof value === "number" ? value.toFixed(1) : value.toFixed(1);
      const color = VALUE_CATEGORY_MAPPING[sub_segment] || COLORS[5];
      return (
        <div
          className="bg-white border-2 w-max h-max py-2.5 px-2.5"
          style={{
            position: "absolute",
            top: coordinate ? coordinate.y + 10 : 0,
            left: coordinate ? coordinate.x + 10 : 0,
            transform: "translate(0, 0)",
            pointerEvents: "none",
            transition: "top 0.1s ease-out, left 0.1s ease-out",
            zIndex: 1000,
          }}
        >
          <span style={{ color }}>{sub_segment}:</span>{" "}
          <span style={{ color }}>{`${formattedValue}%`}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {activeButton === "uniquePayer" && (
        <div className="w-full xl:w-[48%] ml-3 h-[460px] mt-10 flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white">
          <div className="w-full flex flex-wrap md:flex justify-between lg:px-0 my-3">
          <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans']">
              Allocation $
            </h1>
            <div className="flex items-center gap-2 lg:gap-7">
              { uniquedata.map((entry, index) => (
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
            </div>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={uniquedata}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={renderCustomizedLabel}
                outerRadius={135}
                dataKey="value"
              >
                {uniquedata.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      VALUE_CATEGORY_MAPPING[entry.sub_segment] || COLORS[5]
                    }
                    stroke="none"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* {activeButton === "uniquePayer" && (
        <div className="w-full xl:w-[48%] ml-3 h-[380px] mt-10 flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white">
          <div className="w-full flex flex-wrap md:flex justify-between lg:px-0 my-3">
          <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans']">
              Allocation Count
            </h1>
            <div className="flex items-center gap-2 lg:gap-7">
              {uniquedata.map((entry, index) => (
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
            </div>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={600} height={600}>
              <Pie
                data={uniquedata} // Use uniquedata for the Pie chart
                cx="50%"
                cy="50%"
                labelLine={true}
                label={renderCustomizedLabel}
                outerRadius={110}
                dataKey="value"
              >
                {uniquedata.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      VALUE_CATEGORY_MAPPING[entry.sub_segment] || COLORS[5]
                    }
                    stroke="none"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltipAgency />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )} */}
    </>
  );
};

export default CustomizeBarScatterAgencyChart;
