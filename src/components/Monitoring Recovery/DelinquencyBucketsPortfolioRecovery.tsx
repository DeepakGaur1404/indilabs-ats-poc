import React, { useEffect, useState } from "react";
import rightarrow from "../../assets/images/rightarrow.svg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  delinquencyGraphTitle: string;
  activeButton: string;
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
  selectedSubCategoryLocation: string;
  selectedSubCategoryAgency: string;
  selectedSubCategorySegments: string;
  selectedSubCategoryPayment: string;
  selectedSubCategoryUniquePayerAgency: string;
  selectedSubCategoryUniquePayerSegments: string;
  portfolioRecoveryGraphData: any;
  portfolioRecoveryUniquePayerGraphData: any;
  // setselectedCategory: any;
  // setselectedSubCategory: any;
  // setselectedSubCategoryTwo: any;
  // setselectedSubCategoryAgency: any;
  // setselectedSubCategoryPayment: any;
  // setselectedSubCategoryLocation: any;
  // setselectedSubCategorySegments: any;
};

type SubCategories = [
  {
    month: any;
    sub_segment: any;
    active_recovery_balance: any;
    recovery: any;
  },
  {
    month: any;
    sub_segment: any;
    value: any;
  }
];

interface Entry {
  month: string;
  sub_segment: string;
  active_recovery_balance: number;
  recovery: number;
  value: number;
}

const data = [
  {
    month: "Jan",
    B1: 240,
    B2: 150,
  },
  {
    month: "Feb",
    B1: 230,
    B2: 130,
  },
  {
    month: "Mar",
    B1: 260,
    B2: 165,
  },
  {
    month: "Apr",
    B1: 230,
    B2: 130,
  },
  {
    month: "May",
    B1: 230,
    B2: 100,
  },
  {
    month: "Jun",
    B1: 240,
    B2: 120,
  },
  {
    month: "Jul",
    B1: 250,
    B2: 150,
  },
];

const dataUnique = [
  {
    month: "Jan",
    B1: 23000,
    B2: 11500,
  },
  {
    month: "Feb",
    B1: 22000,
    B2: 12000,
  },
  {
    month: "Mar",
    B1: 23000,
    B2: 11500,
  },
  {
    month: "Apr",
    B1: 22000,
    B2: 12000,
  },
  {
    month: "May",
    B1: 18000,
    B2: 14000,
  },
  {
    month: "Jun",
    B1: 21000,
    B2: 12000,
  },
  {
    month: "Jul",
    B1: 22000,
    B2: 14000,
  },
];

const colors = ["#4169E1", "#FFB200"];

const DelinquencyBucketsPortfolioRecovery = ({
  delinquencyGraphTitle,
  activeButton,
  selectedCategory,
  selectedSubCategory,
  selectedSubCategoryTwo,
  selectedSubCategoryLocation,
  selectedSubCategoryAgency,
  selectedSubCategorySegments,
  selectedSubCategoryPayment,
  selectedSubCategoryUniquePayerAgency,
  selectedSubCategoryUniquePayerSegments,
  portfolioRecoveryGraphData,
  portfolioRecoveryUniquePayerGraphData,
}: // setselectedCategory,
// setselectedSubCategory,
// setselectedSubCategoryTwo,
// setselectedSubCategoryAgency,
// setselectedSubCategoryPayment,
// setselectedSubCategoryLocation,
// setselectedSubCategorySegments,
Props) => {
  // const [portfolioRecoveryGraphData, setPortfolioRecoveryGraphData] =
  //   useState<any>();
  const [selectedActiveButton, setselectedActiveButton] = useState("");
  const [selectedCategories, setselectedCategory] = useState("");
  const [selectedSubCategories, setselectedSubCategory] = useState("");
  const [selectedSubCategoriesTwo, setselectedSubCategoryTwo] = useState("");
  const [selectedSubCategoriesAgency, setselectedSubCategoryAgency] =
    useState("");
  const [selectedSubCategoriesPayment, setselectedSubCategoryPayment] =
    useState("");
  const [selectedSubCategoriesLocation, setselectedSubCategoryLocation] =
    useState("");
  const [selectedSubCategoriesSegments, setselectedSubCategorySegments] =
    useState("");
  const [
    selectedSubCategoriesSegmentsUniquePayer,
    setselectedSubCategoriesSegmentsUniquePayer,
  ] = useState("");
  const [
    selectedSubCategoriesAgencyUniquePayer,
    setselectedSubCategoriesAgencyUniquePayer,
  ] = useState("");

  const [yAxisDomain, setYAxisDomain] = useState<[number, number]>([0, 0]);
  const [yAxisDomainUniquePayer, setYAxisDomainUniquePayer] = useState<
    [number, number]
  >([0, 0]);

  useEffect(() => {
    setselectedActiveButton(activeButton);
    setselectedCategory(selectedCategory);
    setselectedSubCategory(selectedSubCategory);
    setselectedSubCategoryTwo(selectedSubCategoryTwo);
    setselectedSubCategoryAgency(selectedSubCategoryAgency);
    setselectedSubCategoryPayment(selectedSubCategoryPayment);
    setselectedSubCategoryLocation(selectedSubCategoryLocation);
    setselectedSubCategorySegments(selectedSubCategorySegments);
    setselectedSubCategoriesAgencyUniquePayer(
      selectedSubCategoryUniquePayerAgency
    );
    setselectedSubCategoriesSegmentsUniquePayer(
      selectedSubCategoryUniquePayerSegments
    );
    // fetchNewdata();
  }, [
    activeButton,
    selectedCategory,
    selectedSubCategory,
    selectedSubCategoryTwo,
    selectedSubCategoryAgency,
    selectedSubCategoryPayment,
    selectedSubCategoryLocation,
    selectedSubCategorySegments,
    selectedSubCategoryUniquePayerAgency,
    selectedSubCategoryUniquePayerSegments,
  ]);

  // const formatYAxisTick = (tick: any) => `${(tick / 1000).toLocaleString()}`;
  const getMaxSummation = (data: Entry[][]) => {
    let maxSum = 0;
    data?.forEach((entry) => {
      entry?.forEach((item) => {
        const sum = item.active_recovery_balance + item.recovery;
        if (sum > maxSum) {
          maxSum = sum;
        }
      });
    });
    return maxSum;
  };
  const getMaxSummationUniquePayer = (data: Entry[][]) => {
    let maxSum = 0;
    data?.forEach((entry) => {
      entry?.forEach((item) => {
        const sum = item.active_recovery_balance + item.recovery;
        if (sum > maxSum) {
          maxSum = sum;
        }
      });
    });
    return maxSum;
  };

  const maxSumAll = getMaxSummation(portfolioRecoveryGraphData?.all);
  const maxSumMob = getMaxSummation(portfolioRecoveryGraphData?.mob);
  const maxSumPlacement = getMaxSummation(
    portfolioRecoveryGraphData?.placement
  );
  const maxSumlocation = getMaxSummation(portfolioRecoveryGraphData?.location);
  const maxSumagency = getMaxSummation(portfolioRecoveryGraphData?.agency);
  const maxSumsegments = getMaxSummation(portfolioRecoveryGraphData?.segments);
  console.log("maxSumsegments value...", maxSumsegments);

  const maxSumpayment = getMaxSummation(portfolioRecoveryGraphData?.payment);

  const overallMaxSum = Math.max(
    maxSumAll,
    maxSumMob,
    maxSumPlacement,
    maxSumlocation,
    maxSumagency,
    maxSumsegments,
    maxSumpayment
  );
  const yAxisUpperLimit = overallMaxSum;
  let domainUpperLimit = 0;

  function calculateTicks(
    yAxisUpperLimit: any,
    maxSumMob: any,
    maxSumPlacement: any,
    maxSumlocation: any,
    maxSumagency: any,
    maxSumsegments: any,
    maxSumpayment: any
  ) {
    // Determine the step size based on the yAxisUpperLimit
    let step;

    if (selectedCategory === "all" && selectedActiveButton === "$Recovery") {
      if (yAxisUpperLimit <= 500) {
        step = 50;
      } else if (yAxisUpperLimit <= 100) {
        step = 10;
      } else if (yAxisUpperLimit <= 50) {
        step = 5;
      } else if (yAxisUpperLimit <= 20) {
        step = 2;
      } else {
        step = 90;
      }
      domainUpperLimit = yAxisUpperLimit;
    } else if (
      selectedCategory === "mob" &&
      selectedActiveButton === "$Recovery"
    ) {
      if (maxSumMob <= 10) {
        step = 1;
      } else if (maxSumMob <= 16) {
        step = 2;
      } else if (maxSumMob <= 30) {
        step = 3;
      } else if (maxSumMob <= 50) {
        step = 5;
      } else if (maxSumMob <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimit = maxSumMob;
    } else if (
      selectedCategory === "placement" &&
      selectedActiveButton === "$Recovery"
    ) {
      if (maxSumPlacement <= 10) {
        step = 1;
      } else if (maxSumPlacement <= 16) {
        step = 2;
      } else if (maxSumPlacement <= 30) {
        step = 3;
      } else if (maxSumPlacement <= 50) {
        step = 5;
      } else if (maxSumPlacement <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimit = maxSumPlacement;
    } else if (
      selectedCategory === "location" &&
      selectedActiveButton === "$Recovery"
    ) {
      if (maxSumlocation <= 10) {
        step = 1;
      } else if (maxSumlocation <= 16) {
        step = 2;
      } else if (maxSumlocation <= 30) {
        step = 3;
      } else if (maxSumlocation <= 50) {
        step = 5;
      } else if (maxSumlocation <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimit = maxSumlocation;
    } else if (
      selectedCategory === "agency" &&
      selectedActiveButton === "$Recovery"
    ) {
      if (maxSumagency <= 10) {
        step = 1;
      } else if (maxSumagency <= 16) {
        step = 2;
      } else if (maxSumagency <= 30) {
        step = 3;
      } else if (maxSumagency <= 50) {
        step = 5;
      } else if (maxSumagency <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimit = maxSumagency;
    } else if (
      selectedCategory === "segments" &&
      selectedActiveButton === "$Recovery"
    ) {
      if (maxSumsegments <= 10) {
        step = 1;
      } else if (maxSumsegments <= 16) {
        step = 2;
      } else if (maxSumsegments <= 30) {
        step = 3;
      } else if (maxSumsegments <= 50) {
        step = 5;
      } else if (maxSumsegments <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimit = maxSumsegments;
    } else if (
      selectedCategory === "payment" &&
      selectedActiveButton === "$Recovery"
    ) {
      if (maxSumpayment <= 10) {
        step = 1;
      } else if (maxSumpayment <= 16) {
        step = 2;
      } else if (maxSumpayment <= 30) {
        step = 3;
      } else if (maxSumpayment <= 50) {
        step = 5;
      } else if (maxSumpayment <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimit = maxSumpayment;
    } else {
      return;
    }
    console.log("domainUpperLimit value", domainUpperLimit);

    let ticks = [];
    for (let i = 0; i <= domainUpperLimit; i += step) {
      ticks.push(i);
    }
    return ticks;
  }

  const ticks = calculateTicks(
    yAxisUpperLimit,
    maxSumMob,
    maxSumPlacement,
    maxSumlocation,
    maxSumagency,
    maxSumsegments,
    maxSumpayment
  );

  useEffect(() => {
    setYAxisDomain([0, domainUpperLimit]);
  }, [
    yAxisUpperLimit,
    domainUpperLimit,
    selectedCategory,
    maxSumMob,
    maxSumPlacement,
    maxSumlocation,
    maxSumsegments,
    maxSumpayment,
    maxSumagency,
  ]);

  const maxSumAllUniquePayer = getMaxSummationUniquePayer(
    portfolioRecoveryUniquePayerGraphData?.all
  );
  const maxSumMobUniquePayer = getMaxSummationUniquePayer(
    portfolioRecoveryUniquePayerGraphData?.mob
  );
  const maxSumPlacementUniquePayer = getMaxSummationUniquePayer(
    portfolioRecoveryUniquePayerGraphData?.placement
  );
  const maxSumlocationUniquePayer = getMaxSummationUniquePayer(
    portfolioRecoveryUniquePayerGraphData?.location
  );
  const maxSumagencyUniquePayer = getMaxSummationUniquePayer(
    portfolioRecoveryUniquePayerGraphData?.agency
  );
  const maxSumsegmentsUniquePayer = getMaxSummationUniquePayer(
    portfolioRecoveryUniquePayerGraphData?.segments
  );
  const maxSumpaymentUniquePayer = getMaxSummationUniquePayer(
    portfolioRecoveryUniquePayerGraphData?.payment
  );

  const overallMaxSumUniquePayer = Math.max(
    maxSumAllUniquePayer,
    maxSumMobUniquePayer,
    maxSumPlacementUniquePayer,
    maxSumlocationUniquePayer,
    maxSumagencyUniquePayer,
    maxSumsegmentsUniquePayer,
    maxSumpaymentUniquePayer
  );

  const yAxisUpperLimitUniquePayer = overallMaxSumUniquePayer;
  let domainUpperLimitUniquePayer = 0;

  function calculateTicksUniquePayer(
    yAxisUpperLimitUniquePayer: any,
    maxSumMobUniquePayer: any,
    maxSumPlacementUniquePayer: any,
    maxSumlocationUniquePayer: any,
    maxSumagencyUniquePayer: any,
    maxSumsegmentsUniquePayer: any,
    maxSumpaymentUniquePayer: any
  ) {
    // Determine the step size based on the yAxisUpperLimit
    let step;

    if (selectedCategory === "all" && selectedActiveButton === "uniquePayer") {
      if (yAxisUpperLimitUniquePayer <= 500) {
        step = 50;
      } else if (yAxisUpperLimitUniquePayer <= 100) {
        step = 10;
      } else if (yAxisUpperLimitUniquePayer <= 50) {
        step = 5;
      } else if (yAxisUpperLimitUniquePayer <= 20) {
        step = 2;
      } else {
        step = 90;
      }
      domainUpperLimitUniquePayer = yAxisUpperLimitUniquePayer;
    } else if (
      selectedCategory === "mob" &&
      selectedActiveButton === "uniquePayer"
    ) {
      if (maxSumMobUniquePayer <= 10) {
        step = 1;
      } else if (maxSumMobUniquePayer <= 16) {
        step = 2;
      } else if (maxSumMobUniquePayer <= 30) {
        step = 3;
      } else if (maxSumMobUniquePayer <= 50) {
        step = 5;
      } else if (maxSumMobUniquePayer <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimitUniquePayer = maxSumMobUniquePayer;
    } else if (
      selectedCategory === "placement" &&
      selectedActiveButton === "uniquePayer"
    ) {
      if (maxSumPlacementUniquePayer <= 10) {
        step = 1;
      } else if (maxSumPlacementUniquePayer <= 16) {
        step = 2;
      } else if (maxSumPlacementUniquePayer <= 30) {
        step = 3;
      } else if (maxSumPlacementUniquePayer <= 50) {
        step = 5;
      } else if (maxSumPlacementUniquePayer <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimitUniquePayer = maxSumPlacementUniquePayer;
    } else if (
      selectedCategory === "location" &&
      selectedActiveButton === "uniquePayer"
    ) {
      if (maxSumlocationUniquePayer <= 10) {
        step = 1;
      } else if (maxSumlocationUniquePayer <= 16) {
        step = 2;
      } else if (maxSumlocationUniquePayer <= 30) {
        step = 3;
      } else if (maxSumlocationUniquePayer <= 50) {
        step = 5;
      } else if (maxSumlocationUniquePayer <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimitUniquePayer = maxSumlocationUniquePayer;
    } else if (
      selectedCategory === "agency" &&
      selectedActiveButton === "uniquePayer"
    ) {
      if (maxSumagencyUniquePayer <= 10) {
        step = 1;
      } else if (maxSumagencyUniquePayer <= 16) {
        step = 2;
      } else if (maxSumagencyUniquePayer <= 30) {
        step = 3;
      } else if (maxSumagencyUniquePayer <= 50) {
        step = 5;
      } else if (maxSumagencyUniquePayer <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimitUniquePayer = maxSumagencyUniquePayer;
    } else if (
      selectedCategory === "segments" &&
      selectedActiveButton === "uniquePayer"
    ) {
      if (maxSumsegmentsUniquePayer <= 10) {
        step = 1;
      } else if (maxSumsegmentsUniquePayer <= 16) {
        step = 2;
      } else if (maxSumsegmentsUniquePayer <= 30) {
        step = 3;
      } else if (maxSumsegmentsUniquePayer <= 50) {
        step = 5;
      } else if (maxSumsegmentsUniquePayer <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimitUniquePayer = maxSumsegmentsUniquePayer;
    } else if (
      selectedCategory === "payment" &&
      selectedActiveButton === "uniquePayer"
    ) {
      if (maxSumpaymentUniquePayer <= 10) {
        step = 1;
      } else if (maxSumpaymentUniquePayer <= 16) {
        step = 2;
      } else if (maxSumpaymentUniquePayer <= 30) {
        step = 3;
      } else if (maxSumpaymentUniquePayer <= 50) {
        step = 5;
      } else if (maxSumpaymentUniquePayer <= 100) {
        step = 10;
      } else {
        step = 100;
      }
      domainUpperLimitUniquePayer = maxSumpaymentUniquePayer;
    } else {
      return;
    }
    console.log(
      "domainUpperLimitUniquePayer value",
      domainUpperLimitUniquePayer
    );

    // Generate the ticks array
    let ticks = [];
    for (let i = 0; i <= domainUpperLimitUniquePayer; i += step) {
      ticks.push(i);
    }
    return ticks;
  }
  const ticksUniquePayer = calculateTicksUniquePayer(
    yAxisUpperLimitUniquePayer,
    maxSumMobUniquePayer,
    maxSumPlacementUniquePayer,
    maxSumlocationUniquePayer,
    maxSumagencyUniquePayer,
    maxSumsegmentsUniquePayer,
    maxSumpaymentUniquePayer
  );

  useEffect(() => {
    setYAxisDomainUniquePayer([0, domainUpperLimitUniquePayer]);
  }, [
    yAxisUpperLimitUniquePayer,
    domainUpperLimitUniquePayer,
    selectedCategory,
    maxSumMobUniquePayer,
    maxSumPlacementUniquePayer,
    maxSumlocationUniquePayer,
    maxSumagencyUniquePayer,
    maxSumsegmentsUniquePayer,
    maxSumpaymentUniquePayer,
  ]);

  return (
    <div className="w-full xl:w-[48%] ml-3 h-[355px] mt-10 flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          {delinquencyGraphTitle}
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
              {delinquencyGraphTitle === "Unique Payer %"
                ? "Active Accounts"
                : "Active Recovery Balance"}
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
              {delinquencyGraphTitle === "Unique Payer %"
                ? "Unique Payers"
                : "Recovery"}
            </span>
          </div>
        </div>
      </div>
      {delinquencyGraphTitle === "Monthly Recovery (Coincidental)" &&
        selectedActiveButton === "$Recovery" && (
          <ResponsiveContainer width="98%" height={315}>
            <BarChart
              data={
                selectedCategory === "all" &&
                selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.all.map((item: any) => ({
                      month: item[0].month,
                      active_recovery_balance: item[0].active_recovery_balance,
                      recovery: item[0].recovery,
                    }))
                  : selectedSubCategories === "<6" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "<6"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "6-12" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "6-12"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "12-18" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "12-18"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "18-24" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "18-24"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "24-36" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "24-36"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "36+" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "36+"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "1" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "1"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "2" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "2"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "3" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "3"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "4" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "4"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "5" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "5"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "6+" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "6+"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "MUM" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "MUM"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "BLR" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "BLR"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "DEL" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DEL"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "PUN" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "PUN"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "HYD" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "HYD"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "KOL" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "KOL"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "Others" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.location
                      .filter(
                        (item: SubCategories) =>
                          item[0].sub_segment === "Others"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgency === "DCA1" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA1"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgency === "DCA2" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA2"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgency === "DCA3" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA3"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgency === "DCA4" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA4"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgency === "DCA5" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA5"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegments === "Score" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.segments
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "Score"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegments === "Age" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.segments
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "Age"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegments === "Industry" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.segments
                      .filter(
                        (item: SubCategories) =>
                          item[0].sub_segment === "Industry"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegments === "Employment" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.segments
                      .filter(
                        (item: SubCategories) =>
                          item[0].sub_segment === "Employment"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegments === "Seg5" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.segments
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "Seg5"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegments === "Others" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.segments
                      .filter(
                        (item: SubCategories) =>
                          item[0].sub_segment === "Others"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesPayment === "PA" &&
                    selectedCategories === "payment" &&
                    selectedActiveButton === "$Recovery"
                  ? portfolioRecoveryGraphData?.payment
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "PA"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesPayment === "FFS" &&
                    selectedCategories === "payment" &&
                    selectedActiveButton === "$Recovery" &&
                    portfolioRecoveryGraphData?.payment
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "FFS"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
              }
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
              barGap={0}
              barCategoryGap={0}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="month"
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                fontWeight={400}
                fontSize={9}
                fill={"#3E4259"}
                fontFamily="DM Sans"
                // domain={[0, yAxisDomain[1]]}
                domain={yAxisDomain}
                width={28}
                tickLine={false}
                axisLine={false}
                ticks={ticks}
                interval={0}
              />
              <Tooltip />

              <Bar
                dataKey="active_recovery_balance"
                stackId="a"
                fill={colors[0]}
                barSize={10}
                radius={[0, 0, 10, 10]}
              />
              <Bar
                dataKey="recovery"
                stackId="a"
                fill={colors[1]}
                barSize={10}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      {delinquencyGraphTitle === "Unique Payer %" &&
        selectedActiveButton === "uniquePayer" && (
          <ResponsiveContainer width="99%" height={315}>
            <BarChart
              data={
                selectedCategory === "all" &&
                selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.all.map(
                      (item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      })
                    )
                  : selectedSubCategories === "<6" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "<6"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "6-12" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "6-12"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "12-18" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "12-18"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "18-24" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "18-24"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "24-36" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "24-36"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategories === "36+" &&
                    selectedCategories === "mob" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.mob
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "36+"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "1" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "1"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "2" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "2"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "3" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "3"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "4" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "4"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "5" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "5"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesTwo === "6+" &&
                    selectedCategories === "placement" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.placement
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "6+"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "MUM" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "MUM"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "BLR" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "BLR"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "DEL" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DEL"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "PUN" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "PUN"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "HYD" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "HYD"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "KOL" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.location
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "KOL"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesLocation === "Others" &&
                    selectedCategories === "location" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.location
                      .filter(
                        (item: SubCategories) =>
                          item[0].sub_segment === "Others"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgencyUniquePayer === "DCA1" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA1"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgencyUniquePayer === "DCA2" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA2"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgencyUniquePayer === "DCA3" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA3"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgencyUniquePayer === "DCA4" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA4"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgencyUniquePayer === "DCA5" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.agency
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "DCA5"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesAgencyUniquePayer === "Others" &&
                    selectedCategories === "agency" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.agency
                      .filter(
                        (item: SubCategories) =>
                          item[0].sub_segment === "Others"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegmentsUniquePayer === "Seg1" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.segments
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "Seg1"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegmentsUniquePayer === "Seg2" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.segments
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "Seg2"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegmentsUniquePayer === "Seg3" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.segments
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "Seg3"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegmentsUniquePayer === "Seg4" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.segments
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "Seg4"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegmentsUniquePayer === "Seg5" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.segments
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "Seg5"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesSegmentsUniquePayer === "Others" &&
                    selectedCategories === "segments" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.segments
                      .filter(
                        (item: SubCategories) =>
                          item[0].sub_segment === "Others"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesPayment === "PA" &&
                    selectedCategories === "payment" &&
                    selectedActiveButton === "uniquePayer"
                  ? portfolioRecoveryUniquePayerGraphData?.payment
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "PA"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
                  : selectedSubCategoriesPayment === "FFS" &&
                    selectedCategories === "payment" &&
                    selectedActiveButton === "uniquePayer" &&
                    portfolioRecoveryUniquePayerGraphData?.payment
                      .filter(
                        (item: SubCategories) => item[0].sub_segment === "FFS"
                      )
                      .map((item: any) => ({
                        month: item[0].month,
                        active_recovery_balance:
                          item[0].active_recovery_balance,
                        recovery: item[0].recovery,
                      }))
              }
              margin={{ top: 20, right: 0, left: 10, bottom: 0 }}
              barGap={0}
              barCategoryGap={0}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="month"
                fontWeight={400}
                fontSize={10}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                fontWeight={400}
                fontSize={9}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                domain={yAxisDomainUniquePayer}
                width={28}
                tickLine={false}
                axisLine={false}
                // tickFormatter={formatYAxisTick}
                // ticks={[
                //   0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000,
                // ]}
                // interval={50}
                ticks={ticksUniquePayer}
                interval={0}
              />
              <Tooltip />

              <Bar
                dataKey="active_recovery_balance"
                stackId="a"
                fill={colors[0]}
                barSize={10}
                radius={[0, 0, 10, 10]}
              />
              <Bar
                dataKey="recovery"
                stackId="a"
                fill={colors[1]}
                barSize={10}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
    </div>
  );
};

export default DelinquencyBucketsPortfolioRecovery;
