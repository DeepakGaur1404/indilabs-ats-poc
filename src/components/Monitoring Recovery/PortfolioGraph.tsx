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
} from "recharts";

type Props = {
  delinquencyGraphTitle: string;
  activeButton: string;
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSubCategoryTwo: string;
  selectedSubCategoryLocation: string;
  selectedSubCategoryTOS: string;
  selectedSubCategoryAgency: string;
  selectedSubCategorySegments: string;
  selectedSubCategoryPayment: string;
  selectedSubCategoryUniquePayerSegments: string;
  portfolioRecoveryGraphData: any;
  portfolioRecoveryUniquePayerGraphData: any;
  delinquencyUniqueGraphTitle: any;
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

const colors = ["#4169E1", "#FFB200"];

const PortfolioGraph = ({
  delinquencyGraphTitle,
  activeButton,
  selectedCategory,
  selectedSubCategory,
  selectedSubCategoryTwo,
  selectedSubCategoryLocation,
  selectedSubCategoryTOS,
  selectedSubCategoryAgency,
  selectedSubCategorySegments,
  selectedSubCategoryPayment,
  selectedSubCategoryUniquePayerSegments,
  portfolioRecoveryGraphData,
  portfolioRecoveryUniquePayerGraphData,
  delinquencyUniqueGraphTitle,
}: Props) => {
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
  const [selectedSubCategoriesTOS, setselectedSubCategoryTOS] = useState("");
  // const [selectedSubCategoriesTOSUnique, setselectedSubCategoryTOSUnique] =
  //   useState("");
  const [selectedSubCategoriesSegments, setselectedSubCategorySegments] =
    useState("");
  const [
    selectedSubCategoriesSegmentsUniquePayer,
    setselectedSubCategoriesSegmentsUniquePayer,
  ] = useState("");
  // const [
  //   selectedSubCategoriesAgencyUniquePayer,
  //   setselectedSubCategoriesAgencyUniquePayer,
  // ] = useState("");

  const formatNumber = (num: any) => {
    if (num >= 1e8) {
      // 10 crores or more
      return (num / 1e7).toFixed(0); // 1 crore is 10^7
    } else if (num >= 1e7) {
      // 1 crore to less than 10 crores
      return (num / 1e7).toFixed(1); // 1 crore is 10^7
    }
    //  else if (num >= 1e5) { // 1 lakh to less than 1 crore
    //    return (num / 1e5).toFixed(0); // 1 lakh is 10^5
    // }
    else if (num >= 1e5) {
      return (num / 1e7).toFixed(1); // 1 crore is 10^7
    } else {
      return num.toString();
    }
  };
  const formatNumberMillion = (num: any) => {
    if (num === 0) {
      return "0";
    } else if (num >= 1e7) {
      // 10 million and above
      return (num / 1e6).toFixed(0) ;
    } else if (num >= 1e6) {
      // 1 million to 10 million
      return (num / 1e6).toFixed(2) ;
    } else if (num >= 1e5) {
      // 100,000 to 1 million
      return (num / 1e6).toFixed(2);
    } else {
      // Less than 100,000
      return (num / 1e6).toFixed(2) ; // You can adjust this if needed
    }
  };

  // const formatNumber = (num: any) => {
  //   if (num >= 1e7) { // 1 crore or more
  //     return (num / 1e7).toFixed(0); // 1 crore is 10^7
  //   } else if (num >= 1e7) { // 1 crore to less than 10 crores
  //         return (num / 1e7).toFixed(1); // 1 crore is 10^7
  //        } else if (num >= 1e5) {
  //     return (num / 1e7).toFixed(2); // 1 crore is 10^7
  //   } else {
  //     return num.toString();
  //   }
  // };

  // const formatNumberLakh = (num: any) => {
  //   if (num >= 1e5) {
  //     // 1 lakh is 100,000
  //     return (num / 1e5).toFixed(1);
  //   } else if (num >= 1e4) {
  //     // handle numbers greater than 10,000 but less than 1 lakh
  //     return (num / 1e5).toFixed(1);
  //   } else {
  //     return num.toFixed(0).toString();
  //   }
  // };
  const formatNumberCroreLine = (num: any) => {
    if (num >= 1e7) {
      // 1 crore and above
      return (num / 1e7).toFixed(4) 
    } else if (num >= 1e6) {
      // 10 lakh to 1 crore
      return (num / 1e7).toFixed(4) 
    } else if (num >= 1e5) {
      // 1 lakh to 10 lakh
      return (num / 1e7).toFixed(4)
    } else if (num == 0) {
      
      return "0"
    } 
    else {
      // Less than 1 lakh
      return (num / 1e7).toFixed(4)  // You can adjust this if needed
    }
    
  };
  const formatYAxisTick = (tick: any) => {
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
    setselectedSubCategoryPayment(selectedSubCategoryPayment);
    setselectedSubCategoryLocation(selectedSubCategoryLocation);
    setselectedSubCategorySegments(selectedSubCategorySegments);
    setselectedSubCategoryTOS(selectedSubCategoryTOS);
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
          month: item[0].month,
          active_recovery_balance: item[0].active_recovery_balance,
          average_recovery_balance: item[0].average_recovery_balance,
          // value: item[1].value,
        }))
      : selectedSubCategories === "V0" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V0")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V1" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V1")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V2" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V2")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V3" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V3")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V4" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V4")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V5" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V5")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V6" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V6")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V7" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.mob
          .filter((item: SubCategories) => item[0].sub_segment === "V7")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategoriesLocation === "UP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "UP")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "HR" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "HR")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "MH" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "MH")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "TN" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "TN")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "MU" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "MU")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "DL" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "DL")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "KA" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "KA")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "TG" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "TG")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "RO" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "RO")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "KO" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "KO")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "AP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "AP")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "GJ" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "GJ")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "MP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "MP")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesLocation === "OTHERS" &&
        selectedCategories === "location" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.location
          .filter((item: SubCategories) => item[0].sub_segment === "OTHERS")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesTOS === "<1L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[0].sub_segment === "<1L")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesTOS === "1-5L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[0].sub_segment === "1-5L")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesTOS === "5-10L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[0].sub_segment === "5-10L")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesTOS === "10L+" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.pos
          .filter((item: SubCategories) => item[0].sub_segment === "10L+")
          .map((item: any) => ({
            month: item[0].month,
            active_recovery_balance: item[0].active_recovery_balance,
            average_recovery_balance: item[0].average_recovery_balance,
            // value: item[1].value,
          }))
      : selectedSubCategoriesAgency === "Very Small" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.agency
          .filter((item: SubCategories) => item[0].sub_segment === "Very Small")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategoriesAgency === "Small" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.agency
          .filter((item: SubCategories) => item[0].sub_segment === "Small")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }

            return newItem;
          })
      : selectedSubCategoriesAgency === "Medium" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "$Recovery"
      ? portfolioRecoveryGraphData?.agency
          .filter((item: SubCategories) => item[0].sub_segment === "Medium")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }
            return newItem;
          })
      : selectedSubCategoriesAgency === "Large" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "$Recovery" &&
        portfolioRecoveryGraphData?.agency
          .filter((item: SubCategories) => item[0].sub_segment === "Large")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_balance: any;
              average_recovery_balance?: any;
            } = {
              month: item[0].month,
              active_recovery_balance: item[0].active_recovery_balance,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].average_recovery_balance !== 0 &&
              item[0].average_recovery_balance !== "0"
            ) {
              newItem.average_recovery_balance =
                item[0].average_recovery_balance;
            } else {
              newItem.average_recovery_balance = null;
            }
            return newItem;
          });
  // : selectedSubCategoriesAgency === "DCA5" &&
  //   selectedCategories === "agency" &&
  //   selectedActiveButton === "$Recovery"
  //  portfolioRecoveryGraphData?.agency
  //     .filter((item: SubCategories) => item[0].sub_segment === "DCA5")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegments === "Score" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "$Recovery"
  // ? portfolioRecoveryGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Score")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegments === "Age" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "$Recovery"
  // ? portfolioRecoveryGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Age")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegments === "Industry" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "$Recovery"
  // ? portfolioRecoveryGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Industry")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegments === "Employment" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "$Recovery"
  // ? portfolioRecoveryGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Employment")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegments === "Seg5" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "$Recovery"
  // ? portfolioRecoveryGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Seg5")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegments === "Others" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "$Recovery"
  // ? portfolioRecoveryGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Others")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesPayment === "PA" &&
  //   selectedCategories === "payment" &&
  //   selectedActiveButton === "$Recovery"
  // ? portfolioRecoveryGraphData?.payment
  //     .filter((item: SubCategories) => item[0].sub_segment === "PA")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesPayment === "FFS" &&
  //   selectedCategories === "payment" &&
  //   selectedActiveButton === "$Recovery" &&
  //   portfolioRecoveryGraphData?.payment
  //     .filter((item: SubCategories) => item[0].sub_segment === "FFS")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }));

  const arrGraphTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (graphData) {
      maxNum = Math.max(
        ...graphData?.map((item: any) => {
          console.log(
            "item?.average_recovery_balance value",
            item?.average_recovery_balance
          );
          return item?.average_recovery_balance;
        })
      );
    } else {
      return [0];
    }
    let num1 = 0;
    for (let i = 0; i <= 10; i++) {
      arr.push(parseFloat(num1.toFixed(1)));
      num1 += Math.ceil(maxNum) / 10;
    }
    console.log("arr values", arr);
    return arr;
  };
  const arrGraphleft = () => {
    let arr = [];
    let maxNum = 0;
    if (graphData) {
      maxNum = Math.max(
        ...graphData?.map((item: any) => item?.active_recovery_balance)
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

  //=========================================================
  const uniqueGraphData =
    selectedCategory === "all" && selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.all.map((item: any) => ({
          month: item[1].month,
          average_payment_size: item[1].average_payment_size,
          active_recovery_accounts: item[0].active_recovery_accounts,
        }))
      : selectedSubCategories === "V0" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V0")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V1" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V1")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V2" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V2")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V3" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V3")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V4" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V4")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V5" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V5")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }
            return newItem;
          })
      : selectedSubCategories === "V6" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V6")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }

            return newItem;
          })
      : selectedSubCategories === "V7" &&
        selectedCategories === "mob" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.mob
          .filter((item: SubCategories) => item[1].sub_segment === "V7")
          .map((item: any) => {
            const newItem: {
              month: any;
              active_recovery_accounts: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              active_recovery_accounts: item[0].active_recovery_accounts,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }

            return newItem;
          })
      : // : selectedSubCategories === "24-36" &&
      //   selectedCategories === "mob" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.mob
      //     .filter((item: SubCategories) => item[0].sub_segment === "24-36")
      //     .map((item: any) => ({
      //       month: item[0].month,
      //       active_recovery_balance: item[0].active_recovery_balance,
      //       recovery: item[0].recovery,
      //       value: item[1].value,
      //     }))
      // : selectedSubCategories === "36+" &&
      //   selectedCategories === "mob" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.mob
      //     .filter((item: SubCategories) => item[0].sub_segment === "36+")
      //     .map((item: any) => ({
      //       month: item[0].month,
      //       active_recovery_balance: item[0].active_recovery_balance,
      //       recovery: item[0].recovery,
      //       value: item[1].value,
      //     }))
      // : selectedSubCategoriesTwo === "1" &&
      //   selectedCategories === "placement" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.placement
      //     .filter((item: SubCategories) => item[0].sub_segment === "1")
      //     .map((item: any) => ({
      //       month: item[0].month,
      //       active_recovery_balance: item[0].active_recovery_balance,
      //       recovery: item[0].recovery,
      //       value: item[1].value,
      //     }))
      // : selectedSubCategoriesTwo === "2" &&
      //   selectedCategories === "placement" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.placement
      //     .filter((item: SubCategories) => item[0].sub_segment === "2")
      //     .map((item: any) => ({
      //       month: item[0].month,
      //       active_recovery_balance: item[0].active_recovery_balance,
      //       recovery: item[0].recovery,
      //       value: item[1].value,
      //     }))
      // : selectedSubCategoriesTwo === "3" &&
      //   selectedCategories === "placement" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.placement
      //     .filter((item: SubCategories) => item[0].sub_segment === "3")
      //     .map((item: any) => ({
      //       month: item[0].month,
      //       active_recovery_balance: item[0].active_recovery_balance,
      //       recovery: item[0].recovery,
      //       value: item[1].value,
      //     }))
      // : selectedSubCategoriesTwo === "4" &&
      //   selectedCategories === "placement" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.placement
      //     .filter((item: SubCategories) => item[0].sub_segment === "4")
      //     .map((item: any) => ({
      //       month: item[0].month,
      //       active_recovery_balance: item[0].active_recovery_balance,
      //       recovery: item[0].recovery,
      //       value: item[1].value,
      //     }))
      // : selectedSubCategoriesTwo === "5" &&
      //   selectedCategories === "placement" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.placement
      //     .filter((item: SubCategories) => item[0].sub_segment === "5")
      //     .map((item: any) => ({
      //       month: item[0].month,
      //       active_recovery_balance: item[0].active_recovery_balance,
      //       recovery: item[0].recovery,
      //       value: item[1].value,
      //     }))
      // : selectedSubCategoriesTwo === "6+" &&
      //   selectedCategories === "placement" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.placement
      //     .filter((item: SubCategories) => item[0].sub_segment === "6+")
      //     .map((item: any) => ({
      //       month: item[0].month,
      //       active_recovery_balance: item[0].active_recovery_balance,
      //       recovery: item[0].recovery,
      //       value: item[1].value,
      //     }))
      selectedSubCategoriesLocation === "UP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "UP")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesLocation === "MH" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "MH")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesLocation === "TN" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "TN")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesLocation === "MP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "MP")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesLocation === "KA" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "KA")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesLocation === "HR" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "HR")
          .map((item: any) => {
            const newItem: {
              month: any;
              average_payment_size: any;
              active_recovery_accounts?: any;
            } = {
              month: item[1].month,
              average_payment_size: item[1].average_payment_size,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].active_recovery_accounts !== 0 &&
              item[0].active_recovery_accountss !== "0"
            ) {
              newItem.active_recovery_accounts =
                item[0].active_recovery_accounts;
            } else {
              newItem.active_recovery_accounts = null;
            }

            return newItem;
          })
      : selectedSubCategoriesLocation === "AP" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "AP")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesLocation === "TG" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "TG")
          .map((item: any) => {
            const newItem: {
              month: any;
              average_payment_size: any;
              active_recovery_accounts?: any;
            } = {
              month: item[1].month,
              average_payment_size: item[1].average_payment_size,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].active_recovery_accounts !== 0 &&
              item[0].active_recovery_accounts !== "0"
            ) {
              newItem.active_recovery_accounts =
                item[0].active_recovery_accounts;
            } else {
              newItem.active_recovery_accounts = null;
            }

            return newItem;
          })
      : selectedSubCategoriesLocation === "GJ" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "GJ")
          .map((item: any) => {
            const newItem: {
              month: any;
              average_payment_size: any;
              active_recovery_accounts?: any;
            } = {
              month: item[1].month,
              average_payment_size: item[1].average_payment_size,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].active_recovery_accounts !== 0 &&
              item[0].active_recovery_accounts !== "0"
            ) {
              newItem.active_recovery_accounts =
                item[0].active_recovery_accounts;
            } else {
              newItem.active_recovery_accounts = null;
            }

            return newItem;
          })
      : selectedSubCategoriesLocation === "DL" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "DL")
          .map((item: any) => {
            const newItem: {
              month: any;
              average_payment_size: any;
              active_recovery_accounts?: any;
            } = {
              month: item[1].month,
              average_payment_size: item[1].average_payment_size,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[0].active_recovery_accounts !== 0 &&
              item[0].active_recovery_accounts !== "0"
            ) {
              newItem.active_recovery_accounts =
                item[0].active_recovery_accounts;
            } else {
              newItem.active_recovery_accounts = null;
            }

            return newItem;
          })
      : selectedSubCategoriesLocation === "OTHERS" &&
        selectedCategories === "location" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.location
          .filter((item: SubCategories) => item[1].sub_segment === "OTHERS")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesTOS === "<1L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[1].sub_segment === "<1L")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesTOS === "1-5L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[1].sub_segment === "1-5L")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesTOS === "5-10L" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[1].sub_segment === "5-10L")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : selectedSubCategoriesTOS === "10L+" &&
        selectedCategories === "pos" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.pos
          .filter((item: SubCategories) => item[1].sub_segment === "10L+")
          .map((item: any) => ({
            month: item[1].month,
            average_payment_size: item[1].average_payment_size,
            active_recovery_accounts: item[0].active_recovery_accounts,
          }))
      : // : selectedSubCategoriesTOS === "20-25L" &&
      //   selectedCategories === "pos" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.tos
      //     .filter((item: SubCategories) => item[1].sub_segment === "20-25L")
      //     .map((item: any) => ({
      //       month: item[1].month,
      //       average_payment_size: item[1].average_payment_size,
      //       unique_payers: item[1].unique_payers,
      //     }))
      // selectedSubCategoriesTOS === "20L+" &&
      //   selectedCategories === "pos" &&
      //   selectedActiveButton === "uniquePayer"
      // ? portfolioRecoveryUniquePayerGraphData?.pos
      //     .filter((item: SubCategories) => item[1].sub_segment === "20L+")
      //     .map((item: any) => ({
      //       month: item[1].month,
      //       average_payment_size: item[1].average_payment_size,
      //       unique_payers: item[1].unique_payers,
      //     }))
      selectedSubCategoriesAgency === "Very Small" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.agency
          .filter((item: SubCategories) => item[1].sub_segment === "Very Small")
          .map((item: any) => {
            const newItem: {
              // month: any;
              // average_payment_size: any;
              // unique_payers?: any;
              month: any;
              unique_payers: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              unique_payers: item[1].unique_payers,
            };
            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }

            return newItem;
          })
      : selectedSubCategoriesAgency === "Small" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.agency
          .filter((item: SubCategories) => item[1].sub_segment === "Small")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              unique_payers: item[1].unique_payers,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }

            return newItem;
          })
      : selectedSubCategoriesAgency === "Medium" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "uniquePayer"
      ? portfolioRecoveryUniquePayerGraphData?.agency
          .filter((item: SubCategories) => item[1].sub_segment === "Medium")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              unique_payers: item[1].unique_payers,
            };
            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }

            return newItem;
          })
      : selectedSubCategoriesAgency === "Large" &&
        selectedCategories === "agency" &&
        selectedActiveButton === "uniquePayer" &&
        portfolioRecoveryUniquePayerGraphData?.agency
          .filter((item: SubCategories) => item[1].sub_segment === "Large")
          .map((item: any) => {
            const newItem: {
              month: any;
              unique_payers: any;
              average_payment_size?: any;
            } = {
              month: item[1].month,
              unique_payers: item[1].unique_payers,
            };

            // Add average_recovery_balance only if it's not 0 or "0"
            if (
              item[1].average_payment_size !== 0 &&
              item[1].average_payment_size !== "0"
            ) {
              newItem.average_payment_size = item[1].average_payment_size;
            } else {
              newItem.average_payment_size = null;
            }

            return newItem;
          });

  // : selectedSubCategoriesAgencyUniquePayer === "DCA5" &&
  //   selectedCategories === "agency" &&
  //   selectedActiveButton === "uniquePayer"
  // ? portfolioRecoveryUniquePayerGraphData?.agency
  //     .filter((item: SubCategories) => item[0].sub_segment === "DCA5")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesAgencyUniquePayer === "Others" &&
  //   selectedCategories === "agency" &&
  //   selectedActiveButton === "uniquePayer"
  // ? portfolioRecoveryUniquePayerGraphData?.agency
  //     .filter((item: SubCategories) => item[0].sub_segment === "Others")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegmentsUniquePayer === "Seg1" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "uniquePayer"
  // ? portfolioRecoveryUniquePayerGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Seg1")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegmentsUniquePayer === "Seg2" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "uniquePayer"
  // ? portfolioRecoveryUniquePayerGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Seg2")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegmentsUniquePayer === "Seg3" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "uniquePayer"
  // ? portfolioRecoveryUniquePayerGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Seg3")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegmentsUniquePayer === "Seg4" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "uniquePayer"
  // ? portfolioRecoveryUniquePayerGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Seg4")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegmentsUniquePayer === "Seg5" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "uniquePayer"
  // ? portfolioRecoveryUniquePayerGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Seg5")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesSegmentsUniquePayer === "Others" &&
  //   selectedCategories === "segments" &&
  //   selectedActiveButton === "uniquePayer"
  // ? portfolioRecoveryUniquePayerGraphData?.segments
  //     .filter((item: SubCategories) => item[0].sub_segment === "Others")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesPayment === "PA" &&
  //   selectedCategories === "payment" &&
  //   selectedActiveButton === "uniquePayer"
  // ? portfolioRecoveryUniquePayerGraphData?.payment
  //     .filter((item: SubCategories) => item[0].sub_segment === "PA")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       recovery: item[0].recovery,
  //       value: item[1].value,
  //     }))
  // : selectedSubCategoriesPayment === "FFS" &&
  //   selectedCategories === "payment" &&
  //   selectedActiveButton === "uniquePayer" &&
  //   portfolioRecoveryUniquePayerGraphData?.payment
  //     .filter((item: SubCategories) => item[0].sub_segment === "FFS")
  //     .map((item: any) => ({
  //       month: item[0].month,
  //       active_recovery_balance: item[0].active_recovery_balance,
  //       average_recovery_balance: item[0].average_recovery_balance,
  //       // value: item[1].value,
  //     }));

  const arrGraphUniqueTicks = () => {
    let arr = [];
    let maxNum = 0;
    if (uniqueGraphData) {
      maxNum = Math.max(
        ...uniqueGraphData?.map((item: any) => item?.active_recovery_accounts)
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
  //   const arrGraphUniqueTicks = () => {
  //     let arr = [];
  //     let maxNum = 0;

  //     if (uniqueGraphData) {
  //         maxNum = Math.max(
  //             ...uniqueGraphData?.map((item: any) => item?.unique_payers)
  //         );
  //     } else {
  //         return [0];
  //     }

  //     // Calculate the step size
  //     let step = Math.ceil(maxNum * 10) / 100; // Step size of 0.1

  //     // Ensure the final tick is slightly above the maximum value
  //     let finalValue = Math.ceil(maxNum * 10 + 1) / 10;

  //     for (let num1 = 0; num1 <= finalValue; num1 += step) {
  //         arr.push(parseFloat(num1.toFixed(1)));
  //     }

  //     return arr;
  // };
  const arrGraphUniqueleft = () => {
    let arr = [];
    let maxNum = 0;
    if (uniqueGraphData) {
      maxNum = Math.max(
        ...uniqueGraphData?.map((item: any) => item?.average_payment_size)
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
  const formatNumberThousand = (num: any) => {
    // if (num >= 1e5) {
    //     // 1 lakh is 100,000
    //     return (num / 1e5).toFixed(1);
    // }
    if (num >= 1e4) {
      // handle numbers greater than 10,000 but less than 1 lakh
      return (num / 1e3).toFixed();
    } else if (num >= 1e3) {
      // handle numbers greater than 1,000 but less than 10,000
      return (num / 1e3).toFixed();
    } else {
      return num.toFixed(0).toString();
    }
  };
  const formatYAxisTickRight = (tick: any) => {
    if (tick == 0) {
      return `${tick}`;
    } else {
      return `${tick.toFixed()}`;
    }
  };

  return (
    <div className="w-full xl:w-[100%] ml-3 h-[405px]  flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans'] leading-normal">
          {delinquencyGraphTitle}
        </h1>
        <div className="flex items-center gap-2 first-letter:lg:gap-3 ColorIndicator lg:gap-7 mr-3">
          <div className="flex items-center ">
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
              {delinquencyGraphTitle === "Total Accounts"
                ? "Accounts (left scale)"
                : "POS Balance (left scale)"}
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
              {delinquencyGraphTitle === "Total Accounts"
                ? "Average Payment (right scale,thousands)"
                : "Average POS (right scale)"}
            </span>
          </div>
        </div>
      </div>
      {delinquencyGraphTitle === "POS Balances (millions)" &&
        selectedActiveButton === "$Recovery" && (
          <ResponsiveContainer width="99%" height={315}>
            <ComposedChart
              margin={{ top: 10, right: 25, left: 10, bottom: 25 }}
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
                tickFormatter={formatNumberMillion}
                axisLine={false}
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
                tickFormatter={formatNumberMillion}
                axisLine={false}
                tickLine={false}
                // tickFormatter={formatYAxisTick}
                ticks={arrGraphTicks()}
              />

<Tooltip
  formatter={(value: any, name) => {
    const formattedValue =
      typeof value === "number"
        ? `${Math.floor(value).toLocaleString()}`
        : `${Math.floor(value).toLocaleString()}`;
    return [`₹ ${formattedValue}`, `${name}`];
  }}
/>

              <Bar
                yAxisId="left"
                dataKey="active_recovery_balance"
                name="POS Balances"
                stackId="a"
                fill={colors[0]}
                barSize={10}
                radius={[10, 10, 10, 10]}
              />
              {/* <Bar
                yAxisId="left"
                dataKey="recovery"
                stackId="a"
                fill={colors[1]}
                barSize={10}
                radius={[10, 10, 0, 0]}
              /> */}
              <Line
                yAxisId="right"
                type="linear"
                dataKey="average_recovery_balance"
                name="Average POS"
                stroke="#FFB200"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}
      {delinquencyGraphTitle === "Total Accounts" &&
        selectedActiveButton === "uniquePayer" && (
          <ResponsiveContainer width="99%" height={315}>
            <ComposedChart
              margin={{ top: 10, right: 24, left: 10, bottom: 23 }}
              barGap={0}
              barCategoryGap={0}
              data={uniqueGraphData}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis
                dataKey="month"
                fontWeight={400}
                fontSize={10}
                fontFamily="DM Sans"
                fill={"#3B414B"}
                angle={-70}
                dy={0}
                dx={-4}
                textAnchor="end"
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
                tickLine={false}
                axisLine={false}
                tickFormatter={formatYAxisTickRight}
                ticks={arrGraphUniqueTicks()}
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
                tickFormatter={formatNumberThousand}
                ticks={arrGraphUniqueleft()}
              />
                 <Tooltip
  formatter={(value: any, name) => {
    const formattedValue =
   typeof value === "number" && name === "Accounts "
        ? `${Math.floor(value).toLocaleString()}`
        : `${Math.floor(value).toLocaleString()}`;
    return [`₹ ${formattedValue}`, `${name}`];
  }}
/>
              <Bar
                yAxisId="left"
                dataKey="active_recovery_accounts"
                name="Accounts "
                stackId="a"
                fill={colors[0]}
                barSize={10}
                radius={[10, 10, 10, 10]}
              />
              <Line
                yAxisId="right"
                type="linear"
                dataKey="average_payment_size"
                name="Average Payment"
                stroke="#FFB200"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}
    </div>
  );
};

export default PortfolioGraph;
