import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  YAxis,
  ReferenceLine,
} from "recharts";

const data = [
  {
    name: "Page E",
    uv: -1890,
    pv: 6200,
    amt: 2181
  },
  {
    name: "Page F",
    uv: -2300,
    pv: 4090,
    amt: 2500
  },
];

const CustomBar = (props: any) => {
  const { x, y, width, height, fill, color } = props;

  const cornerRadius = color === "#00B050" && "#FF0000" ? 15 : 0;

  let path = `M${x},${y + height}`;
  path += `v${-height + cornerRadius}`;
  path += `a${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},${-cornerRadius}`;
  path += `h${width - 2 * cornerRadius}`;
  path += `a${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},${cornerRadius}`;
  path += `v${height - cornerRadius}`;

  return <path d={path} fill={fill} />;
};

const PLImpactChart: React.FC = () => { 
  const chartStyles: React.CSSProperties = {
    width: "350px",
    height: "300px",
    margin: "5px 30px 5px -30px",
    position: "relative",
  };
  const gridStyles: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 80,
    width: "65%",
    height: "100%",
    background: "repeating-linear-gradient(to bottom, transparent 0, transparent 65px, #ddd 65px, #ddd 66px)",
    pointerEvents: "none",
  };

  return (
    <div className="min-w-[310px] w-[100%] md:w-[48%] md:ml-2 xl:w-[27%] 2xl:w-[29%] xl:ml-0 flex flex-col items-start gap-10 p-2 bg-white border-2 rounded-xl overflow-x-auto">
      <h1 className="ml-5 text-[19px] font-['calibri' !important] text-[#000000] font-[400]">P&L Impact (Incremental)</h1>
      <div style={chartStyles}>
        <BarChart
          width={350}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <Bar dataKey="pv" fill="#00B050" stackId="stack" shape={<CustomBar color="#00B050" />} />
          <Bar dataKey="uv" fill="#FF0000" stackId="stack" radius={[10, 10, 0, 0]}  />
          <CartesianGrid strokeDasharray="1 1" vertical={false} horizontal={false} />
          <YAxis ticks={[0]} />
          {/* Remove the Tooltip component */}
          {/* <Tooltip /> */}
          <ReferenceLine y={0} stroke="#000" />
        </BarChart>
        <div style={gridStyles}></div>
      </div>
    </div>
  );
};

export default PLImpactChart;
