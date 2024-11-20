// import React from "react";
// import ReactDOM from "react-dom";
// import { scaleLinear } from "d3-scale";
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   LabelList,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// interface DataItem {
//   name: string;
//   value: number | [number, number];
//   fill: string;
// }
// const colors = ["#4339F2", "#FFB200"];
// const data: DataItem[] = [
//   { name: `Total\ninventory`, value: [0, 35000], fill: colors[0] },
//   { name: "Promises", value: [23000, 35000], fill: colors[1] },
//   { name: "Policy\nExclusions", value: [16000, 23000], fill: colors[1] },
//   { name: "Strategy Hold", value: [9000, 18000], fill: colors[1] },
//   { name: "Workable Inventory", value: [0, 12000], fill: colors[0] },
// ];

// function formatYAxisTick(tick: number): string {
//   return `${tick / 1000}k`;
// }

// function WaterfallChart() {
//   const maxYValue: number = 40000;
//   const tickDifference: number = 5000;

//   const yTicks: number[] = [];
//   for (let i = 0; i <= maxYValue; i += tickDifference) {
//     yTicks.push(i);
//   }

//   return (
//     <div className="w-full lg:w-[48%] h-[325px] flex flex-col items-start mt-10 rounded-lg p-5 px-5 shadow-md bg-white">
//       <h1 className="text-black text-sm font-medium">Workable Volume</h1>
//       <div className="w-full flex justify-between mt-2 mb-3 gap-3">
//         <ResponsiveContainer width="100%" height={250}>
//           <BarChart
//             data={data}
//             margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
//           >
//             <CartesianGrid
//               strokeDasharray="3 3"
//               vertical={false}
//               horizontalCoordinatesGenerator={(args) => {
//                 let hPoints: number[] = [];
//                 const totalLines: number = Math.ceil(args.offset.height / 70);
//                 const hScale = scaleLinear()
//                   .range([args.offset.top, args.height - args.offset.bottom])
//                   .domain([0, totalLines]);

//                 for (let i = 0; i <= totalLines; i++) {
//                   hPoints = [...hPoints, hScale(i)];
//                 }

//                 return hPoints;
//               }}
//             />
//             <YAxis
//               dataKey="value"
//               tickFormatter={formatYAxisTick}
//               domain={[0, maxYValue]}
//               ticks={yTicks}
//               axisLine={false}
//               tickLine={false}
//               fontSize={10}
//               width={25}
//             />
//             <XAxis
//               dataKey="name"
//               height={20}
//               fontSize={12}
//               color="#3b414b"
//               fill="#3b414b"
//               width={30}
//               axisLine={false}
//               tickLine={false}
//             />

//             <Bar fill="#4BC0C0" dataKey="value" barSize={14} radius={7}>
//               <LabelList position="top" dataKey="label" />
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default WaterfallChart;
