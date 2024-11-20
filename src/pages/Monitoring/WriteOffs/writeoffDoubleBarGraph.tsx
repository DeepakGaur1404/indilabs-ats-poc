import React from "react";
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

// const data2 = [
//   {
//     name: "Jan",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Feb",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Mar",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Apr",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "May",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Jun",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Jul",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: "Aug",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Sep",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const data = [
  {
    name: "Jan",
    uv: (4000 / 4000) * 100, // Calculate percentage
    pv: (2400 / 4000) * 100, // Calculate percentage
    amt: (2400 / 4000) * 100, // Calculate percentage
    lineData: 50, // Calculate percentage
  },
  {
    name: "Feb",
    uv: (3000 / 4000) * 100, // Calculate percentage
    pv: (1398 / 4000) * 100, // Calculate percentage
    amt: (2210 / 4000) * 100, // Calculate percentage
    lineData: 90, // Calculate percentage
  },
  {
    name: "Mar",
    uv: (2000 / 4000) * 100, // Calculate percentage
    pv: (9800 / 4000) * 100, // Calculate percentage
    amt: (2290 / 4000) * 100, // Calculate percentage
    lineData: (800 / 4000) * 100, // Calculate percentage
  },
  {
    name: "Apr",
    uv: (2780 / 4000) * 100, // Calculate percentage
    pv: (3908 / 4000) * 100, // Calculate percentage
    amt: (2000 / 4000) * 100, // Calculate percentage
    lineData: (1500 / 4000) * 100, // Calculate percentage
  },
  {
    name: "May",
    uv: (1890 / 4000) * 100, // Calculate percentage
    pv: (4800 / 4000) * 100, // Calculate percentage
    amt: (2181 / 4000) * 100, // Calculate percentage
    lineData: (1600 / 4000) * 100, // Calculate percentage
  },
  {
    name: "Jun",
    uv: (2390 / 4000) * 100, // Calculate percentage
    pv: (3800 / 4000) * 100, // Calculate percentage
    amt: (2500 / 4000) * 100, // Calculate percentage
    lineData: (1400 / 4000) * 100, // Calculate percentage
  },
  {
    name: "Jul",
    uv: (3490 / 4000) * 100, // Calculate percentage
    pv: (4300 / 4000) * 100, // Calculate percentage
    amt: (2100 / 4000) * 100, // Calculate percentage
    lineData: (1100 / 4000) * 100, // Calculate percentage
  },
  {
    name: "Aug",
    uv: (2390 / 4000) * 100, // Calculate percentage
    pv: (3800 / 4000) * 100, // Calculate percentage
    amt: (2500 / 4000) * 100, // Calculate percentage
    lineData: (1400 / 4000) * 100, // Calculate percentage
  },
  {
    name: "Sep",
    uv: (3490 / 4000) * 100, // Calculate percentage
    pv: (4300 / 4000) * 100, // Calculate percentage
    amt: (2100 / 4000) * 100, // Calculate percentage
    lineData: (1100 / 4000) * 100, // Calculate percentage
  },
];

export default function WriteOffDoubleBarGraph() {
  const formatYAxisTick = (tick: any) => `${tick}%`;
  return (
    <div className="w-[100%] overflow-x-auto p-3 mt-10 shadow-md bg-white flex flex-col items-center relative WritoffChart rounded-xl xl:w-[48%]">
      <ComposedChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        barGap={0}
        barCategoryGap={0}
      >
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis
          yAxisId="left"
          interval={0}
          padding={{ top: 0, bottom: 0 }}
          axisLine={false}
          label={{
            value: `$ Writeoff, Recovery`,
            angle: -90,
            position: "insideLeft",
            fontFamily: "roboto",
            fontSize: "15px",
            dy: 60,
            fontWeight: "bold",
          }}
          // ticks={[0, 50, 100, 150, 200, 250, 300]}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          interval={0}
          padding={{ top: 0, bottom: 0 }}
          axisLine={false}
          label={{
            value: `%Monthly Recovery Rate`,
            angle: -90,
            position: "outside",
            fontFamily: "roboto",
            fontSize: "15px",
            dy: -20,
            dx: 20,
            fontWeight: "bold",
          }}
        />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="#FFEED6" yAxisId="left" barSize={10} />
        <Bar dataKey="uv" fill="#FFE086" yAxisId="left" barSize={10} />
        <Line
          type="linear"
          dataKey="amt"
          yAxisId="right"
          stroke="#D39E00"
          strokeWidth={4}
          dot={false}
        />
      </ComposedChart>

      {/* <div className="w-full flex justify-center items-center absolute top-[9%] right-0">
        <ResponsiveContainer width="57%" height={350}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="none"
              vertical={false}
            />
            <XAxis
              // yAxisId="left"
              // orientation="left"
              dataKey="month"
              fontSize={12}
              axisLine={false}
              tickLine={false}
              // ticks={[0, 50, 100, 150, 200, 250, 300]}
              // hide={true}
            />
            <YAxis
              fontSize={10}
              domain={[0, "dataMax"]}
              width={25}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              ticks={[0, 25, 50, 75, 100]}
              hide={true}
              label={{
                value: `% Monthly Recovery Rate`,
                angle: -90,
                position: "outsideLeft",
                fontFamily: "roboto",
                fontSize: "13px",
                dy: 20,
              }}
            />
            <Tooltip />

            <Line
              type="linear"
              dataKey="lineData"
              name="MR"
              // stroke="rgb(248 113 113"
              stroke="#FEBD03"
              strokeWidth={4}
              // activeDot={{ r: 8 }}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div> */}

      {/* <ComposedChart width={600} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="pv" barSize={20} fill="#F7DA84" />
        <Bar dataKey="uv" barSize={20} fill="#FEBD03" />
        <Line type="monotone" dataKey="lineData" dot={false} stroke="#ff7300" />
      </ComposedChart> */}

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-[30px] h-[8px] bg-[#FFEED6] "></div>
          <div className="text-[11px] font-semibold">Write off</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[8px] bg-[#FFE086]"></div>
          <div className="text-[11px] font-semibold">Recovery</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[8px] bg-[#D39E00]"></div>
          <div className="text-[11px] font-semibold">M R R%</div>
        </div>
      </div>
    </div>
  );
}
