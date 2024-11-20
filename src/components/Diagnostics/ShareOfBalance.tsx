import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AIProps {
  selectedSegment: string; 
  data:any
}

// const data: any = {
//   "MOB_woe": {
//       "payer rates": {
//           "payer": 47.59457071721147,
//           "non payer": 52.40542928278853
//       }
//   },
//   "interest_rate_woe": {
//       "payer rates": {
//           "payer": 47.59457071721147,
//           "non payer": 42.40542928278853
//       }
//   },
//   "pos_woe": {
//       "payer rates": {
//           "payer": 47.59457071721147,
//           "non payer": 92.40542928278853
//       }
//   },
//   "loan_term_woe": {
//       "payer rates": {
//           "payer": 47.59457071721147,
//           "non payer": 22.40542928278853
//       }
//   },
//   "loan_amount_woe": {
//       "payer rates": {
//           "payer": 47.59457071721147,
//           "non payer": 52.40542928278853
//       }
//   }
// }

const COLORS = ["#FFB200", "#4169E1"];

const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, value } = props;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + 40; 
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={16} fill="white">
      {`${value.toFixed(2)}%`}
    </text>
  );
};

const ShareOfBalances: React.FC<AIProps> = ({ selectedSegment ,data}) => {
  const chartData = data[selectedSegment]["payer rates"]; 

  const pieData = [
    { name: 'Payer', value: chartData.payer },
    { name: 'Non Payer', value: chartData['non payer'] }
  ];

  return (
    <div className="bg-white rounded-xl flex flex-col items-center border-[#E3E3E3] border-[1px] w-[100%] xl:w-[49%] h-[321px] py-3 px-3 ">
      <p className="text-[black] text-center font-['DM Sans'] font-[500] text-[14px] leading-[21px] mt-2">
        Share of balances
      </p>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={105}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => {
              const formattedValue = typeof value === "number" ? `${value.toFixed(2)}%` : value;
              return [formattedValue, `${name}`];
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex items-center flex-wrap gap-3 lg:gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div className="legend-color" style={{ backgroundColor: COLORS[0], width: "13px", height: "13px", marginRight: "5px", borderRadius: "3px" }} />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">Payer</span>
          </div>
          <div className="flex items-center">
            <div className="legend-color" style={{ backgroundColor: COLORS[1], width: "13px", height: "13px", marginRight: "5px", borderRadius: "3px" }} />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">Non Payer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareOfBalances;
