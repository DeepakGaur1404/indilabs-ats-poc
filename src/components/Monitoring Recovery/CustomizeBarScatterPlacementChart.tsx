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

const data = [
  {
    Placements: "DCA 1",
    B1: 9.25,
    Target: 8.9,
  },
  {
    Placements: "DCA 2",
    B1: 3.5,
    Target: 3.5,
  },
  {
    Placements: "DCA 3",
    B1: 3.0,
    Target: 3.7,
  },
  {
    Placements: "DCA 4",
    B1: 1.3,
    Target: 2.9,
  },
];

const CustomizeBarScatterPlacementChart = () => {
  return (
    <div className="w-full xl:w-[48%] ml-3 h-[447px] mt-11 flex flex-col justify-center items-center shadow-md p-3 rounded-[10px] bg-white py-3  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans']">
          Agency Peformance
        </h1>

        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7">
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#4169E1",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              Resolution
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#FFB200",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              Target
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="98%" height={410}>
        <ComposedChart
          // <BarChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 2,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" vertical={false} />
          <XAxis
            dataKey="Placements"
            fontWeight={400}
            fontSize={12}
            fontFamily="DM Sans"
            fill={"#3B414B"}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            fontWeight={400}
            fontSize={11}
            fill={"#3B414B"}
            fontFamily="DM Sans"
            domain={[0, 11]}
            width={28}
            tickLine={false}
            axisLine={false}
            // tick={false}
            //   ticks={arrTicks()}
            // ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]}
            ticks={[0, 2.75, 5.5, 8.25, 11]}
            //   interval={50}
          />
          <Tooltip />

          <Bar
            dataKey="B1"
            stackId="a"
            fill={"#4169E1"}
            barSize={62}
            radius={[5, 5, 5, 5]}
          />
          <Scatter dataKey="Target" fill="#FFB200" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomizeBarScatterPlacementChart;
