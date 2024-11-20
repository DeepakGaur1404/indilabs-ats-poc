import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Allocation } from "../../../redux/model/dashboard.model"
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import Agency from "../../Monitoring Recovery/Agency Recovery";

const COLORS = [
  "#b8cde8",
  "#84aedc",
  "#5991c9",
  "#3b71a8",
  "#2d5c8c",
  "#113c69",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <rect
        x={x - 30} // Adjust this value to center the background
        y={y - 15} // Adjust this value to center the background
        rx="2"
        ry="2"
        width="60"
        height="30"
        fill="#2071c1"
      />
      <text
        x={x}
        y={y}
        style={{
          fontFamily: "calibri",
          letterSpacing: "1px",
          fontWeight: "bold",
          fontSize: "14px",
          fill: "white",
          textAnchor: "middle",
          dominantBaseline: "middle",
        }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

type Data = {
  allocationData?: Allocation[];
  // selectedCity: any;
  // activeBucket: any;
};

export default function AgencyRadialBarChart({ allocationData }: Data) {
  const [outter, setOutter] = useState<any>([]);
  const [inner, setInner] = useState<any>([]);

  useEffect(() => {
    const outerData = allocationData?.map((data, index) => {
      return {
        name: data?.agency_name,
        value: data?.current_month_allocated_percentage,
      };
    });

    const innerData = allocationData?.map((data, index) => {
      return {
        name: data?.agency_name,
        value: data?.previous_month_allocated_percentage,
      };
    });
    setOutter(outerData);
    setInner(innerData);
  }, [allocationData]);

  return (
    <div className="lg:col-span-5  xl:w-[48%] h-[460px] bg-white rounded-xl p-3 shadow  mt-3">
    <p className=" text-[16px] font-[500] text-[#000000] font-['DM Sans'] my-1">
      Allocation Share
    </p>
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={inner}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="68%"
            innerRadius="43%"
            fill="#8884d8"
            dataKey="value"
          >
            {inner?.map((entry: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={outter}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="95%"
            innerRadius="70%"
            fill="#8884d8"
            dataKey="value"
          >
            {outter?.map((entry: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex lg:flex-col gap-4 mr-5">
        {outter?.map(
          (item: { name: string; id: Key | null | undefined }, i: number) => (
            <div key={item.id} className="flex items-center gap-2">
              <div
                className={`bg-[${COLORS[i]}] w-[13px] h-[13px] border`}
              ></div>
              <div className="text-gray-600 font-medium text-[12px]">
                {item.name}
              </div>
            </div>
          )
        )}
      </div>
    </div>
    </div>
  );
}
