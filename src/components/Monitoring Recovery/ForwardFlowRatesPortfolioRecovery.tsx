import React, { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  forwardFlowRateTitle: string;
  activeButton: string;
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
  selectedSubCategoryAgency: string;
  selectedSubCategoryPayment: string;
  selectedSubCategoryLocation: string;
  selectedSubCategorySegments: string;
  selectedSubCategoryUniquePayerSegments: string;
  selectedSubCategoryUniquePayerAgency: string;
  portfolioRecoveryFlowGraphData: any;
  portfolioUniqueFlowGraphData: any;
};

interface DataPoint {
  month: string;
  value: number;
}
interface DataPointForUnique {
  month: string;
  value: number;
}
interface LineChartProps {
  data: DataPoint[];
}

interface LineChartPropsForUnique {
  dataUnique: DataPointForUnique[];
}

const ForwardFlowRatesPortfolioRecovery = ({
  forwardFlowRateTitle,
  activeButton,
  selectedCategory,
  selectedSubCategory,
  selectedSubCategoryTwo,
  selectedSubCategoryAgency,
  selectedSubCategoryPayment,
  selectedSubCategoryLocation,
  selectedSubCategorySegments,
  selectedSubCategoryUniquePayerSegments,
  selectedSubCategoryUniquePayerAgency,
  portfolioRecoveryFlowGraphData,
  portfolioUniqueFlowGraphData,
}: Props) => {
  // const formatYAxisTick = (tick: any) => `${tick}.0%`;

  const [dataUnique, setDataUnique] = useState([]);
  const [allData, setAllData] = useState([]);
  const [mobData, setMobData] = useState([]);
  const [placementData, setPlacementData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [agencyData, setAgencyData] = useState([]);
  const [segmentData, SetSegmentData] = useState([]);
  const [paymentData, SetPaymentData] = useState([]);
  const formatYAxisTick = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed(1)}%`;
    }
  };
  const FormatRef = useRef();
  const arrTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (dataUnique) {
      maxNum = Math.max(...dataUnique?.map((item: any) => item?.value));
    } else {
      return [];
    }
    let num1 = 0;
    for (let i = 0; i < 7; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 5;
    }
    return arr;
  };
  const toFetchFilterData = async (data: any) => {
    let AllData = data?.all.map((item: any) => item[1]);
    setAllData(AllData);
    let MobData = data?.mob.map((item: any) => item[1]);
    setMobData(MobData);
    let PlacementData = data?.placement.map((item: any) => item[1]);
    setPlacementData(PlacementData);
    let LocationData = data?.location.map((item: any) => item[1]);
    setLocationData(LocationData);
    let AgencyData = data?.agency.map((item: any) => item[1]);
    setAgencyData(AgencyData);
    let SegmentData = data?.segments.map((item: any) => item[1]);
    SetSegmentData(SegmentData);
    let PaymentData = data?.payment.map((item: any) => item[1]);
    SetPaymentData(PaymentData);
  };
  useEffect(() => {
    toFetchFilterData(
      activeButton === "$Recovery"
        ? portfolioRecoveryFlowGraphData
        : portfolioUniqueFlowGraphData
    );
  }, [
    portfolioRecoveryFlowGraphData,
    activeButton,
    portfolioUniqueFlowGraphData,
  ]);

  useEffect(() => {
    setDataUnique(allData);
    if (selectedCategory === "all") {
      setDataUnique(allData);
    }
    if (selectedCategory === "mob") {
      if (selectedSubCategory === "<6") {
        const dataMob = mobData?.filter(
          (item: any) => item.sub_segment === "<6"
        );
        setDataUnique(dataMob);
      }
      if (selectedSubCategory === "6-12") {
        const dataMob = mobData?.filter(
          (item: any) => item.sub_segment === "6-12"
        );
        setDataUnique(dataMob);
      }
      if (selectedSubCategory === "12-18") {
        const dataMob = mobData?.filter(
          (item: any) => item.sub_segment === "12-18"
        );
        setDataUnique(dataMob);
      }
      if (selectedSubCategory === "18-24") {
        const dataMob = mobData?.filter(
          (item: any) => item.sub_segment === "18-24"
        );
        setDataUnique(dataMob);
      }
      if (selectedSubCategory === "24-36") {
        const dataMob = mobData?.filter(
          (item: any) => item.sub_segment === "24-36"
        );
        setDataUnique(dataMob);
      }
      if (selectedSubCategory === "36+") {
        const dataMob = mobData?.filter(
          (item: any) => item.sub_segment === "36+"
        );
        setDataUnique(dataMob);
      }
    }
    if (selectedCategory === "placement") {
      if (selectedSubCategoryTwo === "1") {
        const dataPlacement = placementData?.filter(
          (item: any) => item.sub_segment === "1"
        );
        setDataUnique(dataPlacement);
      }
      if (selectedSubCategoryTwo === "2") {
        const dataPlacement = placementData?.filter(
          (item: any) => item.sub_segment === "2"
        );
        setDataUnique(dataPlacement);
      }
      if (selectedSubCategoryTwo === "3") {
        const dataPlacement = placementData?.filter(
          (item: any) => item.sub_segment === "3"
        );
        setDataUnique(dataPlacement);
      }
      if (selectedSubCategoryTwo === "4") {
        const dataPlacement = placementData?.filter(
          (item: any) => item.sub_segment === "4"
        );
        setDataUnique(dataPlacement);
      }
      if (selectedSubCategoryTwo === "5") {
        const dataPlacement = placementData?.filter(
          (item: any) => item.sub_segment === "5"
        );
        setDataUnique(dataPlacement);
      }
      if (selectedSubCategoryTwo === "6+") {
        const dataPlacement = placementData?.filter(
          (item: any) => item.sub_segment === "6+"
        );
        setDataUnique(dataPlacement);
      }
    }
    if (selectedCategory === "location") {
      if (selectedSubCategoryLocation === "MUM") {
        const dataLocation = locationData?.filter(
          (item: any) => item.sub_segment === "MUM"
        );
        setDataUnique(dataLocation);
      }
      if (selectedSubCategoryLocation === "BLR") {
        const dataLocation = locationData?.filter(
          (item: any) => item.sub_segment === "BLR"
        );
        setDataUnique(dataLocation);
      }
      if (selectedSubCategoryLocation === "DEL") {
        const dataLocation = locationData?.filter(
          (item: any) => item.sub_segment === "DEL"
        );
        setDataUnique(dataLocation);
      }
      if (selectedSubCategoryLocation === "PUN") {
        const dataLocation = locationData?.filter(
          (item: any) => item.sub_segment === "PUN"
        );
        setDataUnique(dataLocation);
      }
      if (selectedSubCategoryLocation === "HYD") {
        const dataLocation = locationData?.filter(
          (item: any) => item.sub_segment === "HYD"
        );
        setDataUnique(dataLocation);
      }
      if (selectedSubCategoryLocation === "KOL") {
        const dataLocation = locationData?.filter(
          (item: any) => item.sub_segment === "KOL"
        );
        setDataUnique(dataLocation);
      }
      if (selectedSubCategoryLocation === "Others") {
        const dataLocation = locationData?.filter(
          (item: any) => item.sub_segment === "Others"
        );
        setDataUnique(dataLocation);
      }
    }
    if (selectedCategory === "agency" && activeButton === "$Recovery") {
      if (selectedSubCategoryAgency === "DCA1") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA1"
        );
        setDataUnique(dataAgency);
      }
      if (selectedSubCategoryAgency === "DCA2") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA2"
        );
        setDataUnique(dataAgency);
      }
      if (selectedSubCategoryAgency === "DCA3") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA3"
        );
        setDataUnique(dataAgency);
      }
      if (selectedSubCategoryAgency === "DCA4") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA4"
        );
        setDataUnique(dataAgency);
      }
      if (selectedSubCategoryAgency === "DCA5") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA5"
        );
        setDataUnique(dataAgency);
      }
    }
    if (selectedCategory === "agency" && activeButton === "uniquePayer") {
      if (selectedSubCategoryUniquePayerAgency === "DCA1") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA1"
        );
        setDataUnique(dataAgency);
      }
      if (selectedSubCategoryUniquePayerAgency === "DCA2") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA2"
        );
        setDataUnique(dataAgency);
      }
      if (selectedSubCategoryUniquePayerAgency === "DCA3") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA3"
        );
        setDataUnique(dataAgency);
      }
      if (selectedSubCategoryUniquePayerAgency === "DCA4") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA4"
        );
        setDataUnique(dataAgency);
      }
      if (selectedSubCategoryUniquePayerAgency === "DCA5") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "DCA5"
        );
        setDataUnique(dataAgency);
      }
      if (selectedSubCategoryUniquePayerAgency === "Others") {
        const dataAgency = agencyData?.filter(
          (item: any) => item.sub_segment === "Others"
        );
        setDataUnique(dataAgency);
      }
    }
    if (selectedCategory === "segments" && activeButton === "uniquePayer") {
      if (selectedSubCategoryUniquePayerSegments === "Seg1") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Seg1"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategoryUniquePayerSegments === "Seg2") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment == "Seg2"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategoryUniquePayerSegments === "Seg3") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Seg3"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategoryUniquePayerSegments === "Seg4") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Seg4"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategoryUniquePayerSegments === "Seg5") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Seg5"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategoryUniquePayerSegments === "Others") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Others"
        );
        setDataUnique(dataSegment);
      }
    }
    if (selectedCategory === "segments" && activeButton === "$Recovery") {
      if (selectedSubCategorySegments === "Score") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Score"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategorySegments === "Age") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Age"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategorySegments === "Industry") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Industry"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategorySegments === "Employment") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Employment"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategorySegments === "Seg5") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Seg5"
        );
        setDataUnique(dataSegment);
      }
      if (selectedSubCategorySegments === "Others") {
        const dataSegment = segmentData?.filter(
          (item: any) => item.sub_segment === "Others"
        );
        setDataUnique(dataSegment);
      }
    }
    if (selectedCategory === "payment") {
      if (selectedSubCategoryPayment === "PA") {
        const dataPayment = paymentData?.filter(
          (item: any) => item.sub_segment === "PA"
        );
        setDataUnique(dataPayment);
      }
      if (selectedSubCategoryPayment === "FFS") {
        const dataPayment = paymentData?.filter(
          (item: any) => item.sub_segment === "FFS"
        );
        setDataUnique(dataPayment);
      }
    }
  }, [
    allData,
    forwardFlowRateTitle,
    activeButton,
    selectedCategory,
    selectedSubCategory,
    selectedSubCategoryTwo,
    selectedSubCategoryAgency,
    selectedSubCategoryPayment,
    selectedSubCategoryLocation,
    selectedSubCategorySegments,
    selectedSubCategoryUniquePayerSegments,
    selectedSubCategoryUniquePayerAgency,
  ]);

  return (
    <div className="w-full xl:w-[48%] h-[355px] mt-10 rounded-lg py-4 p-3 -mr-2 shadow-md bg-white">
      <div className="w-full flex justify-between px-0 mt-0 mb-3">
        <h1 className="text-center text-[16px] font-[500] text-[#000000] font-['DM Sans']">
          {forwardFlowRateTitle}
        </h1>
      </div>
      {forwardFlowRateTitle === "Monthly Recovery % (Coincidental)" && (
        <ResponsiveContainer width="99%" height={310}>
          <LineChart data={dataUnique} margin={{ left: 7 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              fontWeight={400}
              fontSize={11}
              fill={"#3B414B"}
              fontFamily="DM Sans"
              axisLine={false}
              tickLine={false}
              padding={{ left: 22, right: 10 }}
            />
            <YAxis
              fontSize={11}
              fontWeight={400}
              fill={"#3B414B"}
              fontFamily="DM Sans"
              domain={[0, "dataMax"]}
              width={25}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              ticks={arrTicks()}
            />
            <Tooltip />
            <Line
              type="linear"
              dataKey="value"
              name="value"
              stroke="#FFB200"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      {forwardFlowRateTitle === "Unique Payer Rate" && (
        <ResponsiveContainer width="99%" height={310}>
          <LineChart data={dataUnique} margin={{ left: 7 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              fontWeight={400}
              fontSize={11}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              axisLine={false}
              tickLine={false}
              padding={{ left: 22, right: 10 }}
            />
            <YAxis
              fontSize={11}
              fontWeight={400}
              fill={"#3B414B"}
              fontFamily="DM Sans"
              domain={[0, "dataMax"]}
              width={25}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
              ticks={arrTicks()}
            />
            <Tooltip />
            <Line
              type="linear"
              dataKey="value"
              name="value"
              stroke="#FFB200"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ForwardFlowRatesPortfolioRecovery;
