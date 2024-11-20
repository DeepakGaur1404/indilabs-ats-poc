import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
  Tooltip,
  TooltipProps,
  LabelProps,
} from "recharts";

interface Bar {
  sub_segment: string;
  value: number;
}

interface StateData {
  state: string;
  bars: {
    bar: Bar;
  }[];
}

interface Data {
  states: StateData[];
}

interface CustomPayload {
  fill: string;
  name: string;
  value: number;
}

interface CustomLabelProps extends LabelProps {
  averageScore: number;
}

interface MonitoringRecoveryPieChartProps {
  categoriesMatricHeatMap: string;
}

type StateBar = /*unresolved*/ any;

const data: any = {
  states: [
    {
      state: "ROMG_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 1,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 2,
          },
        },
       
         {
          bar: {
            sub_segment: "High Risk",
            value: 9,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.2,
          },
        },
      ],
      series: [
        {
          sub_segment: "ROMG_Payer%",
          value: [
            0.576645939192853, 1.03130841735919, 1.54066176992939,
            2.1717084891811, 2.78311456817841, 3.26262743677539,
            3.57097206299341, 3.81619864850877, 4.02398852647546,
            4.08986841472167, 4.18489584668812, 4.24288463268074,
          ],
        },
      ],
    },

    {
      state: "ROMG_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 1,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 9,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.2,
          },
        },
      ],
      series: [
        {
          sub_segment: "ROMG_MRR%",
          value: [
            0.872623458033109, 1.3169431938806, 1.94377932993445,
            2.66202173116728, 3.23378876663226, 3.59569278146069,
            3.9270667743267, 4.01557863526469, 4.1510443973459,
            4.03096910218555, 4.14746727190432, 4.18977691819955,
          ],
        },
      ],
    },

    {
      state: "MUM_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 1,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 9,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.1,
          },
        },
      ],
      series: [
        {
          sub_segment: "MUM_Payer%",
          value: [
            0.504316201596402, 0.928450878940626, 1.45122566353963,
            2.00969553523009, 2.50811632568083, 2.92962668720633,
            3.17678849865713, 3.35603486921756, 3.4632474571212,
            3.59492292529123, 3.78350059015837, 3.92560390950869,
          ],
        },
      ],
    },

    {
      state: "POS<5L_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 8,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.0,
          },
        },
      ],
      series: [
        {
          sub_segment: "POS<5L_Payer%",
          value: [
            0.553246677064331, 0.880789829369032, 1.37180129270812,
            1.89291208863084, 2.37934864845543, 2.73732641699045,
            2.90557747193718, 3.49090524880775, 3.46620147744426,
            3.42065387478009, 3.40287536988057, 3.36030297091702,
          ],
        },
      ],
    },

    {
      state: "DEL_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 8,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 2.0,
          },
        },
      ],
      series: [
        {
          sub_segment: "DEL_Payer%",
          value: [
            0.655547349621176, 0.84099302914026, 1.36761396778192,
            2.18817367214776, 2.33068219269252, 2.68509642561373,
            2.69173946492361, 2.41628032422987, 2.22002305813167,
            2.07764095765142, 2.02832536659724,
          ],
        },
      ],
    },

    {
      state: "MUM_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.8,
          },
        },
      ],
      series: [
        {
          sub_segment: "MUM_MRR%",
          value: [
            0.459942709064743, 0.825627206710427, 1.01133131788665,
            1.01133131788665, 1.30838450269827, 1.78840858977703,
            1.75405151027474, 2.08472641904102, 2.48534074602795,
            3.0385680442163, 3.19512603309792, 3.41459811540956,
          ],
        },
      ],
    },

    {
      state: "POS<5L_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 4,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 6,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.8,
          },
        },
      ],
      series: [
        {
          sub_segment: "POS<5L_MRR%",
          value: [
            0.667412562354217, 0.9789301205208, 1.17982278633469,
            1.60620733485666, 1.98662690702347, 2.25618861726895,
            2.30666663071786, 2.45877259732007, 2.62075215319862,
            2.19436760467665, 2.10452969034398, 1.89648741347682,
          ],
        },
      ],
    },

    {
      state: "TN_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 3,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 4,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.6,
          },
        },
      ],
      series: [
        {
          sub_segment: "TN_MRR%",
          value: [
            0.542458197487791, 0.877924760752354, 1.31141652259684,
            1.930282483875, 2.28625289340921, 2.63370485387618, 2.556320993424,
            2.41227355464953, 1.97878179280504, 1.35991583152688,
            1.00394542199267, 1.00394542199267,
          ],
        },
      ],
    },

    {
      state: "MOB_0_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 3,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 4,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.6,
          },
        },
      ],
      series: [
        {
          sub_segment: "MOB_0_Payer%",
          value: [
            0.108401581775661, 0.108401581775661, 0.585322996539136,
            1.06337369080491, 1.34087130941785, 1.65553587692327,
            2.56840680609854, 2.85976957030275, 2.38284815553928,
            2.13319655084485, 1.94794058107316, 1.69878108241759,
          ],
        },
      ],
    },

    {
      state: "DEL_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 2,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.3,
          },
        },
      ],
      series: [
        {
          sub_segment: "DEL_MRR%",
          value: [
            0.519464735347985, 0.519464735347985, 0.710537808148631,
            1.32902790571141, 1.52685209352896, 1.96889381843422,
            2.34025686151635, 2.34025686151635, 1.98477416099559,
            1.36628406343281, 0.813404767987392, 0.371363043082127,
          ],
        },
      ],
    },

    {
      state: "TN_Payer%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 6,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 6,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 0,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 1.0,
          },
        },
      ],
      series: [
        {
          sub_segment: "TN_Payer%",
          value: [
            0.536200825088493, 0.624047358888049, 0.935274256330638,
            1.26815258767884, 1.45515413020241, 1.58271661594407,
            1.5849260368098, 1.57030851887737, 1.25908162143479,
            0.926203290086581, 0.739201747563011, 0.538066894007298,
          ],
        },
      ],
    },

    {
      state: "0_MOB_MRR%",
      bars: [
        {
          bar: {
            sub_segment: "Low Risk",
            value: 7,
          },
        },
        {
          bar: {
            sub_segment: "Medium Risk",
            value: 5,
          },
        },
        {
          bar: {
            sub_segment: "High Risk",
            value: 0,
          },
        },
        {
          bar: {
            sub_segment: "Average Score",
            value: 0.9,
          },
        },
      ],
      series: [
        {
          sub_segment: "0_MOB_MRR%",
          value: [
            1.11278326881604, 0.849464377206082, 0.849464377206082,
            1.14267067012398, 0.828271582198899, 0.515226947289105,
            1.16072417165701, 1.16072417165701, 1.16072417165701,
            0.699204996730939, 0.645497224367903, 0.645497224367903,
          ],
        },
      ],
    },
  ],
};


const COLORS = ["#34B53A", "#FFB200", "#EA3323",];

const renderCustomLabel = ({ viewBox, averageScore }: CustomLabelProps) => {
  if (!viewBox) {
    return null;
  }
  const { cx, cy } = viewBox as { cx: number; cy: number };
  return (
    <text
      x={cx}
      y={cy}
      fill="black"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan
        x={cx}
        dy="-0.3em"
        fontSize="32px"
        fontWeight="500"
        fontFamily="DM Sans"
      >
        {averageScore.toFixed(1)}
      </tspan>
      <tspan x={cx} dy="1.5em" fontSize="15px">
        Year Average
      </tspan>
    </text>
  );
};

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  console.log(payload, "payload value");

  if (active && payload && payload.length) {
    const data = payload[0]?.payload as CustomPayload;
    console.log(data, "data value");

    const color = data.fill;

    return (
      <div className="bg-white border-2 w-max h-max py-2.5 px-2.5">
        <p style={{ color: color }}>{`${data.name}: ${data.value}`}</p>
      </div>
    );
  }
  return null;
};

const MonitoringRecoveryPieChart: React.FC<MonitoringRecoveryPieChartProps> = ({
  categoriesMatricHeatMap,
}) => {
  // Find the data for the selected state
  const stateData = data.states.find(
    (state: StateData) => state.state === categoriesMatricHeatMap
  );

  if (!stateData || !stateData.bars) {
    return <div>No data available</div>;
  }

  const pieData = stateData.bars
    .filter((item: StateBar) => item.bar.sub_segment !== "Average Score")
    .map((item: StateBar) => ({
      name: item.bar.sub_segment,
      value: item.bar.value,
    }));

  const averageScore =
    stateData.bars.find(
      (item: StateBar) => item.bar.sub_segment === "Average Score"
    )?.bar.value || 0;

  return (
    <div className="min-w-[300px] w-[100%] sm:w-[72%] md:w-[77.3%] lg:w-[73%] xl:w-[50%]  h-[500px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex gap-2">
      <h1 className="w-[100%] text-black text-[16px] text-center flex justify-center font-semibold font-['DM Sans'] customClassRisk mb- mt-[2px]">
        Overview
      </h1>
      <PieChart width={800} height={400}>
        <Pie
          data={pieData}
          cx={320}
          cy={200}
          innerRadius={110}
          outerRadius={170}
          fill="#8884d8"
          dataKey="value"
          stroke="none"
        >
          {pieData.map((entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            content={(props) => renderCustomLabel({ ...props, averageScore })}
            position="center"
          />
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
      <div className="flex flex-row justify-center items-center gap-4 w-[100%]">
        <div className="flex items-center gap-1">
          <div className="w-[10px] h-[10px] bg-[#EA3323] rounded-[2px]"></div>
          <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
            High Risk
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[10px] h-[10px] bg-[#FFB200] rounded-[2px]"></div>
          <div className="text-[12px] font-[400] font-['DM Sans'] text-[#493b3b] customClassThird">
            Medium Risk
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[10px] h-[10px] bg-[#34B53A] rounded-[2px]"></div>
          <div className="text-[12px] font-[400] font-['DM Sans'] text-[#000000] customClassThird">
            Low Risk
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringRecoveryPieChart;
