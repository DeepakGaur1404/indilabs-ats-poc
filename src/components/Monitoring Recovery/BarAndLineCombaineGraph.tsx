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
  Line,
  ResponsiveContainer,
  LineChart,
  ReferenceLine,
  ComposedChart,
  Cell,
} from "recharts";

type Props = {
  delinquencyGraphTitle: string;
  delinquencyUniqueGraphTitle: string;
  activeButton: string;
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
  selectedSubCategoryLocation: string;
  selectedSubCategoryAgency: string;
  selectedSubCategoryTOS: string;
  selectedSubCategorySegments: string;
  selectedSubCategoryPayment: string;
  selectedSubCategoryUniquePayerSegments: string;
  portfolioRecoveryGraphData: any;
  portfolioRecoveryUniquePayerGraphData: any;
};

type SubCategories = [
  {
    month: any;
    sub_segment: any;
    active_recovery_balance: any;
    recovery: any;
    benchmark_recovery: any;
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
  benchmark_recovery: any;
  value: number;
}

const colors = ["#4169E1", "#FFB200"];

const BarAndLineCombaineGraph = ({
  delinquencyGraphTitle,
  delinquencyUniqueGraphTitle,
  activeButton,
  selectedCategory,
  selectedSubCategory,
  selectedSubCategoryTwo,
  selectedSubCategoryLocation,
  selectedSubCategoryAgency,
  selectedSubCategoryTOS,
  selectedSubCategorySegments,
  selectedSubCategoryPayment,
  selectedSubCategoryUniquePayerSegments,
  portfolioRecoveryGraphData,
  portfolioRecoveryUniquePayerGraphData,
}: Props) => {
  const [selectedActiveButton, setselectedActiveButton] = useState("");
  const [selectedCategories, setselectedCategory] = useState("");
  const [selectedSubCategories, setselectedSubCategory] = useState("");
  const [selectedSubCategoriesTwo, setselectedSubCategoryTwo] = useState("");
  const [selectedSubCategoriesAgency, setselectedSubCategoryAgency] =
    useState("");
  const [selectedSubCategoriesTOS, setselectedSubCategoryTOS] = useState("");
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

  const formatYAxisTick = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed(1)}%`;
    }
  };
  const formatYAxisTickRight = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed()}`;
    }
  };
  const formatYAxisTickRecovery = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed(1)}%`;
    }
  };

  useEffect(() => {
    setselectedActiveButton(activeButton);
    setselectedCategory(selectedCategory);
    setselectedSubCategory(selectedSubCategory);
    setselectedSubCategoryTwo(selectedSubCategoryTwo);
    setselectedSubCategoryAgency(selectedSubCategoryAgency);
    setselectedSubCategoryTOS(selectedSubCategoryTOS);
    setselectedSubCategoryPayment(selectedSubCategoryPayment);
    setselectedSubCategoryLocation(selectedSubCategoryLocation);
    setselectedSubCategorySegments(selectedSubCategorySegments);
    // setselectedSubCategoriesAgencyUniquePayer(
    //   selectedSubCategoryUniquePayerAgency
    // );
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
    selectedSubCategoryTOS,
    selectedSubCategorySegments,
    selectedSubCategoryUniquePayerSegments,
  ]);

  const graphData =
    selectedCategory === "all" && selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.all.map((item: any) => ({
          month: item[1].month,
          recovery: item[1].recovery,
          "%Recovery": item[1]["%Recovery"],
          benchmark_recovery: item[1].benchmark_recovery,
          benchmark_rate: item[1].benchmark_rate,
        }))
      : selectedSubCategories === "V1" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V1")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : //   const newItem: {
      //     month: any;
      //     recovery: any;
      //     "%Recovery"?: any;
      //   } = {
      //     month: item[1].month,
      //     recovery: item[1].recovery,
      //   };

      //   // Add average_recovery_balance only if it's not 0 or "0"
      //   if (item[1]["%Recovery"] !== 0 && item[1]["%Recovery"] !== "0") {
      //     newItem["%Recovery"] = item[1]["%Recovery"];
      //   } else {
      //     newItem["%Recovery"] = null;
      //   }

      //   return newItem;
      // })
      selectedSubCategories === "V2" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V2")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategories === "V3" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V3")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategories === "V4" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V4")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategories === "V5" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V5")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategories === "V6" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V6")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategories === "V7" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V7")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "UP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "UP")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "MH" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "MH")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "TN" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "TN")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "MP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "MP")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "KA" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "KA")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "HR" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "HR")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "AP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "AP")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "GJ" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "GJ")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "DL" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "DL")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "TG" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "TG")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "OTHERS" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "OTHERS")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesTOS === "<1L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[1].sub_segment === "<1L")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesTOS === "1-5L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[1].sub_segment === "1-5L")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesTOS === "5-10L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[1].sub_segment === "5-10L")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesTOS === "10L+" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[1].sub_segment === "10L+")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesAgency === "Very Small" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.agency
          .filter((item: SubCategories) => item[1].sub_segment === "Very Small")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesAgency === "Small" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.agency
          .filter((item: SubCategories) => item[1].sub_segment === "Small")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesAgency === "Medium" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.agency
          .filter((item: SubCategories) => item[1].sub_segment === "Medium")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }))
      : selectedSubCategoriesAgency === "Large" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "$Recovery" &&
        portfolioRecoveryGraphData?.agency
          .filter((item: SubCategories) => item[1].sub_segment === "Large")
          .map((item: any) => ({
            month: item[1].month,
            recovery: item[1].recovery,
            "%Recovery": item[1]["%Recovery"],
            benchmark_recovery: item[1].benchmark_recovery,
            benchmark_rate: item[1].benchmark_rate,
          }));

  const formatNumberCroreBar = (num: any) => {
    if (num >= 1e7) {
      // 1 crore and above
      return (num / 1e7).toFixed(2);
    } else if (num >= 1e6) {
      // 10 lakh to 1 crore
      return (num / 1e7).toFixed(2);
    } else if (num >= 1e5) {
      // 1 lakh to 10 lakh
      return (num / 1e7).toFixed(3);
    } else if (num == 0) {
      return "0";
    } else {
      // Less than 1 lakh
      return (num / 1e7).toFixed(3); // You can adjust this if needed
    }
  };
  const formatNumberMillion = (num: any) => {
    if (num === 0) {
      return "0";
    } else if (num >= 1e7) {
      // 10 million and above
      return (num / 1e6).toFixed(0);
    } else if (num >= 1e6) {
      // 1 million to 10 million
      return (num / 1e6).toFixed(2);
    } else if (num >= 1e5) {
      // 100,000 to 1 million
      return (num / 1e6).toFixed(2);
    } else {
      // Less than 100,000
      return (num / 1e6).toFixed(2); // You can adjust this if needed
    }
  };
  const arrGraphTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (graphData) {
      maxNum = Math.max(...graphData?.map((item: any) => item["%Recovery"]));
    } else {
      return [0];
    }
    let num1 = 0;
    for (let i = 0; i <= 10; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 10;
    }
    return arr;
  };
  const arrGraphleft = () => {
    let arr = [];
    let maxNum = 0;
    if (graphData) {
      maxNum = Math.max(...graphData?.map((item: any) => item?.recovery));
    } else {
      return [0];
    }
    let num1 = 0;
    let increment = Math.ceil(maxNum / 10);

    for (let i = 0; i <= 10; i++) {
      arr.push(num1);
      num1 += increment;
    }

    return arr;
  };

  //========================
  const uniqueGraphData =
    selectedCategory === "all" && selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.all.map((item: any) => ({
          month: item[0].month,
          unique_payers: item[1].unique_payers,
          "%Unique_payers": item[0]["%Unique_payers"],
          benchmark_recov_accounts: item[1].benchmark_recov_accounts,
          benchmark_rate: item[0].benchmark_rate,
        }))
      : selectedSubCategories === "V0" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V0")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategories === "V1" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V1")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategories === "V2" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V2")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategories === "V3" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V3")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategories === "V4" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V4")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategories === "V5" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V5")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategories === "V6" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V6")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategories === "V7" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V7")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "UP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "UP")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "MH" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "MH")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "TN" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "TN")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "MP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "MP")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "KA" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "KA")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "HR" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "HR")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "AP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "AP")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "TG" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "TG")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "GJ" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "GJ")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "DL" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "DL")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesLocation === "OTHERS" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "OTHERS")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesTOS === "<1L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[0].sub_segment === "<1L")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesTOS === "1-5L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[0].sub_segment === "1-5L")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesTOS === "5-10L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[0].sub_segment === "5-10L")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesTOS === "10L+" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[0].sub_segment === "10L+")
          .map((item: any) => ({
            month: item[0].month,
            unique_payers: item[1].unique_payers,
            "%Unique_payers": item[0]["%Unique_payers"],
            benchmark_recov_accounts: item[1].benchmark_recov_accounts,
            benchmark_rate: item[0].benchmark_rate,
          }))
      : selectedSubCategoriesAgency === "Very Small" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.agency
          .filter((item: SubCategories) => item[0].sub_segment === "Very Small")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategoriesAgency === "Small" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.agency
          .filter((item: SubCategories) => item[0].sub_segment === "Small")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategoriesAgency === "Medium" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.agency
          .filter((item: SubCategories) => item[0].sub_segment === "Medium")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          })
      : selectedSubCategoriesAgency === "Large" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "uniquePayer" &&
        portfolioRecoveryUniquePayerGraphData?.agency
          .filter((item: SubCategories) => item[0].sub_segment === "Large")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              "%Unique_payers"?: any;
            } = {
              month: item[0].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };
            if (
              item[0]["%Unique_payers"] !== 0 &&
              item[0]["%Unique_payers"] !== "0"
            ) {
              newItem["%Unique_payers"] = item[0]["%Unique_payers"];
            } else {
              newItem["%Unique_payers"] = null;
            }
            return newItem;
          });

  const arrGraphUniqueTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (uniqueGraphData) {
      maxNum = Math.max(
        ...uniqueGraphData?.map((item: any) => item["%Unique_payers"])
      );
    } else {
      return [0];
    }
    let num1 = 0;
    for (let i = 0; i <= 10; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 10;
    }
    return arr;
  };
  var maxNum = 0;
  const arrGraphUniqueleft = () => {
    let arr = [];

    if (uniqueGraphData) {
      maxNum = Math.max(
        ...uniqueGraphData?.map((item: any) => item?.unique_payers)
      );
    } else {
      return [0];
    }
    let num1 = 0;
    let increment = Math.ceil(maxNum / 10);

    for (let i = 0; i <= 10; i++) {
      arr.push(num1);
      num1 += increment;
    }

    return arr;
  };
  const formatNumber = (num: any) => {
    if (num >= 1e7) {
      return (num / 1e7).toFixed(0);
    } else if (num >= 1e5) {
      return (num / 1e7).toFixed(0);
    } else {
      return num.toString();
    }
  };

  // Check and ensure graphData is an array
  const safeGraphData = Array.isArray(graphData) ? graphData : [];

  // Calculate maxNum safely
  const maxbe =
    safeGraphData.length > 0
      ? Math.max(...safeGraphData.map((item: any) => item?.recovery ?? 0))
      : 0;
  const benchmark = maxbe / 2;

  const safeGraphUniqueData = Array.isArray(uniqueGraphData)
    ? uniqueGraphData
    : [];

  // Calculate maxNum safely
  const maxUnique =
    safeGraphUniqueData.length > 0
      ? Math.max(
          ...safeGraphUniqueData.map((item: any) => item?.unique_payers ?? 0)
        )
      : 0;
  const benchmarkUnique = maxUnique / 2;
  console.log(benchmarkUnique, "benchmarkUnique....");

  return (
    <div className="w-full xl:w-[100%] ml-3 h-[405px]  flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3">
      <div className="w-full flex flex-wrap md:flex justify-between lg:px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          {delinquencyUniqueGraphTitle}
        </h1>
        <div
          className={`flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7 ${
            delinquencyUniqueGraphTitle === "Recovery (millions)"
              ? "mr-4"
              : "mr-6"
          }`}
        >
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
              {delinquencyUniqueGraphTitle === "Payer%"
                ? "Payers (left scale)"
                : "Recovery (left scale)"}
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-color"
              style={{
                backgroundColor: "#FF7A00",
                width: "13px",
                height: "13px",
                marginRight: "5px",
                borderRadius: "3px",
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              {delinquencyUniqueGraphTitle === "Payer%"
                ? "% Payer (right scale) "
                : "% Recovery (right scale)"}
            </span>
          </div>
          <div className="flex items-center">
            <div
              className="legend-line"
              style={{
                width: "25px", // Length of the line
                height: "4px", // No height for a horizontal line
                marginRight: "5px",
                borderBottom: "4px dashed #DC3C49", // Dotted horizontal line
              }}
            />
            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
              Benchmark
            </span>
          </div>
        </div>
      </div>

      {delinquencyUniqueGraphTitle === "Recovery (millions)" &&
        selectedActiveButton === "$Recovery" && (
          <ResponsiveContainer width="99%" height={315}>
            <ComposedChart
              margin={{ top: 10, right: 35, left: 10, bottom: 25 }}
              barGap={0}
              barCategoryGap={0}
              data={graphData}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="month"
                angle={-70}
                dy={0}
                dx={-4}
                textAnchor="end"
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
                interval={0}
              />
              <YAxis
                yAxisId="left"
                fontWeight={400}
                fontSize={9}
                fill={"#3E4259"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={28}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatNumberMillion}
                ticks={arrGraphleft()}
                interval={0}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                fontSize={11}
                fontWeight={400}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={25}
                axisLine={false}
                tickLine={false}
                tickFormatter={formatYAxisTick}
                ticks={arrGraphTicks()}
              />
              <Tooltip
                formatter={(value: any, name) => {
                  const formattedValue =
                    typeof value === "number" && name === "% Recovery"
                      ? `${value.toFixed(1)}%`
                      : typeof value === "number" && name === "Benchmark Rate"
                      ? `${value.toFixed(2)}%`
                      : typeof value === "number"
                      ? `₹ ${Math.floor(value).toLocaleString()}`
                      : `₹ ${parseFloat(value.toFixed(2)).toLocaleString()}`;

                  return [formattedValue, `${name}`];
                }}
              />
              {/* <ReferenceLine
          y={benchmark}
          yAxisId="left"
          stroke="#DC3C49"
          strokeWidth={3}  
          strokeDasharray="5 5"
          // label={{ position: 'right', value: '100M', fill: 'red' }}
        /> */}
              <Bar
                yAxisId="left"
                dataKey="recovery"
                name="Recovery"
                stackId="a"
                // fill={colors[0]}
                barSize={10}
                radius={[10, 10, 10, 10]}
              >
                {safeGraphData.map((entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.recovery < entry.benchmark_recovery
                        ? "#DC3C49"
                        : "#4169E1"
                    }
                  />
                ))}
              </Bar>
              <Line
                yAxisId="right"
                type="linear"
                dataKey="%Recovery"
                name="% Recovery"
                stroke="#FF7A00"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="right"
                type="linear"
                dataKey="benchmark_rate"
                name="Benchmark Rate"
                stroke="#DC3C49"
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={false}
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}

      {delinquencyUniqueGraphTitle === "Payer%" &&
        selectedActiveButton === "uniquePayer" && (
          <ResponsiveContainer width="99%" height={315}>
            <ComposedChart
              margin={{ top: 10, right: 15, left: 10, bottom: 25 }}
              barGap={0}
              barCategoryGap={0}
              data={uniqueGraphData}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="month"
                fontWeight={400}
                fontSize={10}
                angle={-70}
                dy={0}
                dx={-4}
                textAnchor="end"
                fontFamily="DM Sans"
                fill={"#3B414B"}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                fontWeight={400}
                fontSize={9}
                fill={"#3E4259"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={28}
                tickFormatter={formatNumber}
                tickLine={false}
                axisLine={false}
                ticks={arrGraphUniqueleft()}
                interval={0}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                fontSize={11}
                fontWeight={400}
                fill={"#3B414B"}
                fontFamily="DM Sans"
                domain={[0, "dataMax"]}
                width={25}
                axisLine={false}
                tickFormatter={formatYAxisTick}
                tickLine={false}
                ticks={arrGraphUniqueTicks()}
              />
              <Tooltip
                formatter={(value: any, name) => {
                  const formattedValue =
                    typeof value === "number" && name === "% Payers"
                      ? // ? `${value.toFixed(2)}%`
                        `${value.toFixed(1)}%`
                      : typeof value === "number" && name === "Benchmark Rate"
                      ? `${value.toFixed(1)}%`
                      : typeof value === "number"
                      ? `₹ ${Math.floor(value).toLocaleString()}`
                      : `₹ ${parseFloat(value.toFixed(2)).toLocaleString()}`;
                  return [formattedValue, `${name}`];
                }}
              />

              <Bar
                yAxisId="left"
                dataKey="unique_payers"
                name="Payers"
                stackId="a"
                // fill={colors[0]}
                barSize={10}
                radius={[10, 10, 10, 10]}
              >
                {safeGraphUniqueData.map((entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.unique_payers < entry.benchmark_recov_accounts
                        ? "#DC3C49"
                        : "#4169E1"
                    }
                  />
                ))}
              </Bar>

              <Line
                yAxisId="right"
                type="linear"
                dataKey="%Unique_payers"
                name="% Payers"
                stroke="#FF7A00"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="right"
                type="linear"
                dataKey="benchmark_rate"
                name="Benchmark Rate"
                stroke="#DC3C49"
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={false}
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}
    </div>
  );
};

export default BarAndLineCombaineGraph;
