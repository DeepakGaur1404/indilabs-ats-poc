import React, { useEffect, useState } from "react";
// import yellow from "../../assets/images/uparrowYellow.svg";
// import Red from "../../assets/images/uparrowRed.svg";
// import "./Custom.scss";
// import RedDownArrow from "../../assets/icons/red-down-shift.png";
import RedDownArrow from "../assets/icons/red-down-shift.png";
import shiftOrange from "../assets/icons/shift-orange.svg";
// import AllocationRadialBarChart from "./allocationSharePiechart";
// import AllocationShareScatterChart from "./allocationShareScatterChart";
// import { GetCityData } from "../../api/api";
import { GetCityData } from "../api/api";
import AllocationButtons from "./AllocationEngine/AllocationButtons";
import SegVolumeBadTable from "./AllocationEngine/segVolumeBadTable";
import AllocationStackedBarChart from "./AllocationEngine/allocationStackedBarChart";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  Allocation,
  ExclusionCriteria,
  IAllocationData,
  ImpactAnalysis,
  Overall,
} from "../redux/model/dashboard.model";
import DashboardHeader from "../components/DshboardHeader/DashboardHeader";
import "../NewPages/AllocationEngine/Custom.scss";
import penciledit from "../assets/images/penciledit.png";
import leadingplusicon from "../assets/images/leadingplusicon.png";
import savechangebuttonicon from "../assets/images/savechangebuttonicon.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import UnsavedChangesModal from "./UnSavedChangesModal";
// import { useCallbackPrompt } from "../hooks/useCallbackPrompt";
import { useCallback, useContext } from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";
import { usePrompt } from "../hooks/useBlocker";
import PerformanceDashboard from "../components/PerformanceDashboardHeader/PerformanceDashboard";

// import "./Allocation.scss";
// import { ResponsiveContainer } from "recharts";

// declare module "recharts" {
//   interface RadialBarProps {
//     minAngle?: number;
//     label?: any;
//     background?: any;
//     clockWise?: any;
//     dataKey?: any;
//   }
// }

// const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500"];
// const CUSTOM_LEGEND_COLORS = ["black", "black", "black"];

const RecoverySimulation = () => {
  const [buttons, setButtons] = useState(0);
  const [reviewBtn, setReviewBtn] = useState(false);
  const [optimizeBtn, setOptimizeBtn] = useState(false);
  const [b2, setB2] = useState(false);
  const [selectedCity, setSelectedCity] = useState("all");
  const [activeBucket, setActiveBucket] = useState("b1");
  const [activeButton, setActiveButton] = useState<string>("agency");
  const [placmentNumbersButtons, setPlacmentNumbersButtons] = useState("2");
  const [allocationData, setAllocationData] = useState<Allocation[]>();
  const [exclusion_criteria, setExclusion_criteria] =
    useState<ExclusionCriteria>();
  const [loader, setLoader] = useState(false);
  const [overall, setOverall] = useState<Overall>();
  const [impact_analysis, setImpact_analysis] = useState<ImpactAnalysis>();
  const navigate = useNavigate();
  const location = useLocation();

  // scatter chart
  const [minResolveRate, setMinResolveRate] = useState<number>(70); // Default to 70 if you like
  const [maxResolveRate, setMaxResolveRate] = useState<number>(100); // Default to 100 if you like
  const [resultArray, setResultArray] = useState<number[]>([]);
  const [cityData, setCityData] = useState<any>([]);

  const [maxAllocationData, setMaxAllocationData] = useState<number>();
  const [minAllocationData, setMinAllocationData] = useState<number>();
  const [resultArrayList, setResultArrayList] = useState<number[]>([]);
  const [selectedSegment, setSelectedSegment] =
    useState<string>("Very High Risk");
  const [addButton, setAddButton] = useState(false);
  const [addButtonOffer, setAddButtonOffer] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowAgencyRowData, setAgencyRowData] = useState([
    { id: 1, values: ["DCA 1", "", "", "", "", ""] }, // Initial row
    { id: 2, values: ["DCA 2", "", "", "", "", ""] },
    { id: 3, values: ["DCA 3", "", "", "", "", ""] },
    { id: 4, values: ["DCA 4", "", "", "", "", ""] },
  ]);
  const [bgColorApplied, setBgColorApplied] = useState<Array<Array<boolean>>>(
    () => {
      // Initialize with false values for all elements
      const initialArray: Array<Array<boolean>> = [];
      // Loop through the number of rows
      for (let i = 0; i < rowAgencyRowData.length; i++) {
        const row: Array<boolean> = [];
        // Loop through the number of columns
        for (let j = 0; j < rowAgencyRowData[i].values.length; j++) {
          row.push(false); // Set initial value as false
        }
        initialArray.push(row);
      }
      return initialArray;
    }
  );
  // const [showDialog, setShowDialog] = useState(false);
  // const [showPrompt, confirmNavigation, cancelNavigation] =
  //   useCallbackPrompt(showDialog);

  const [rowData, setRowData] = useState([
    { id: 1, values: ["Plc", "1", "2", "3", "4", "5"] }, // Initial row
  ]);
  const [rowDurationRowData, setDurationRowData] = useState([
    { id: 1, values: ["Dur", "60", "60", "60", "60", "90"] }, // Initial row
  ]);

  // const [rowAgencyRowData, setAgencyRowData] = useState([
  //   { id: 1, values: ["DCA 1", "", "", "", "", ""] }, // Initial row
  //   { id: 2, values: ["DCA 2", "", "", "", "", ""] },
  //   { id: 3, values: ["DCA 3", "", "", "", "", ""] },
  //   { id: 4, values: ["DCA 4", "", "", "", "", ""] },
  // ]);

  const [rowOfferRowData, setOfferRowData] = useState([
    { id: 1, values: ["Strategy", "Action", "Volume%", "Max Discount%"] }, // Initial row
    { id: 2, values: ["A", "Pause", "60%", "30%"] },
    { id: 3, values: ["B", "Start", "20%", "40%"] },
    { id: 4, values: ["C", "Pause", "20%", "50%"] },
  ]);

  const handleAddRow = () => {
    const updatedRowData = rowData.map((row) => {
      return {
        ...row,
        values: [...row.values, ""], // Add an empty string value to the existing row of placement
      };
    });
    setRowData(updatedRowData);
    const updatedDurationRowData = rowDurationRowData.map((row) => {
      return {
        ...row,
        values: [...row.values, ""], // Add an empty string value to the existing row of duration
      };
    });
    setDurationRowData(updatedDurationRowData);
    const updatedAgencyRowData = rowAgencyRowData.map((row) => {
      return {
        ...row,
        values: [...row.values, ""], // Add an empty string value to the existing row of Agency
      };
    });
    setAgencyRowData(updatedAgencyRowData);
  };

  const handleAddAgencyRow = () => {
    const newRow = {
      id: rowAgencyRowData.length + 1,
      values: rowAgencyRowData[0].values.map(() => ""),
    };
    setAgencyRowData([...rowAgencyRowData, newRow]);

    // Initialize background color state for the new row
    setBgColorApplied((prevBgColorApplied) => [
      ...prevBgColorApplied,
      Array(6).fill(false),
    ]);
  };

  const handleAddOfferRow = () => {
    const newRow = {
      id: rowOfferRowData.length + 1,
      values: ["", "", "", ""],
    };
    setOfferRowData([...rowOfferRowData, newRow]);
  };

  const handleCellValueChange = (
    rowIndex: any,
    columnIndex: any,
    value: any
  ) => {
    const updatedRowData = rowData.map((row, index) => {
      if (index === rowIndex) {
        const updatedValues = [...row.values];
        updatedValues[columnIndex] = value;
        return { ...row, values: updatedValues };
      }
      return row;
    });
    setRowData(updatedRowData);
  };

  // usePrompt("Are you sure you want to leave without saving changes");

  const handleCellDurationValueChange = (
    rowIndex: any,
    columnIndex: any,
    value: any
  ) => {
    const updatedDurationRowData = rowDurationRowData.map((row, index) => {
      if (index === rowIndex) {
        const updatedValues = [...row.values];
        updatedValues[columnIndex] = value;
        return { ...row, values: updatedValues };
      }
      return row;
    });
    setDurationRowData(updatedDurationRowData);
  };
  const handleCellAgencyValueChange = (
    rowIndex: any,
    columnIndex: any,
    value: any
  ) => {
    const updatedAgencyRowData = rowAgencyRowData.map((row, index) => {
      if (index === rowIndex) {
        const updatedValues = [...row.values];
        updatedValues[columnIndex] = value;
        return { ...row, values: updatedValues };
      }
      return row;
    });
    setAgencyRowData(updatedAgencyRowData);
  };

  const handleCellBgColorChange = (rowIndex: any, columnIndex: any) => {
    // Toggle the background color
    // setBgColorApplied(!bgColorApplied);
    const updatedBgColorApplied = bgColorApplied.map((row, index) => {
      if (index === rowIndex && columnIndex !== 0) {
        const updatedRow = [...row];
        updatedRow[columnIndex] = !updatedRow[columnIndex]; // Toggle background color for the clicked input field
        return updatedRow;
      } else if (index === rowIndex && columnIndex === 0) {
        return row;
      }
      return row;
    });
    setBgColorApplied(updatedBgColorApplied);
  };

  const handleCellOfferValueChange = (
    rowIndex: any,
    columnIndex: any,
    value: any
  ) => {
    const updatedOfferRowData = rowOfferRowData.map((row, index) => {
      if (index === rowIndex) {
        const updatedValues = [...row.values];
        updatedValues[columnIndex] = value;
        return { ...row, values: updatedValues };
      }
      return row;
    });
    setOfferRowData(updatedOfferRowData);
  };
  const cities = [
    { id: "all", name: "All" },
    { id: "pune", name: "Pune" },
    { id: "delhi", name: "Delhi" },
    { id: "mumbai", name: "Mumbai" },

    { id: "hyderabad", name: "Hyderabad" },
    { id: "chennai", name: "Chennai" },
    { id: "nagpur", name: "Nagpur" },
    { id: "bangalore", name: "Bangalore" },
    { id: "goa", name: "Goa" },
    { id: "kolkata", name: "Kolkata" },
  ];

  const Strategies = [
    { id: "agency", label: "Agency" },
    { id: "offer", label: "Offer" },
  ];

  const placmentNumbers = [
    { id: "1", label: "01" },
    { id: "2", label: "02" },
    { id: "3", label: "03" },
    { id: "4", label: "04" },
  ];

  const handleCityClick = async (cityId: string) => {
    // await fetchData(cityId, activeBucket);

    setSelectedCity(cityId);
  };

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
  };

  const handlePlacementClick = (buttonId: string) => {
    setPlacmentNumbersButtons(buttonId);
  };

  const fetchData = async (city: string, bucket: string) => {
    setLoader(true);

    const res = await GetCityData({ city, bucket, activeButton });

    if (res.status === 200) {
      setAllocationData(res.data.allocations);
      setExclusion_criteria(res.data?.exclusion_criteria);
      setOverall(res.data?.overall);
      setImpact_analysis(res.data?.impact_analysis);
      setLoader(false);

      //
      // scatter Chart data
      const resolveRates = res.data.allocations.map(
        (obj: { resolve_rate: any }) => obj.resolve_rate
      );

      const minResolveRate = Math.min(...resolveRates) - 4;
      const maxResolveRate = Math.max(...resolveRates) + 4;
      setMinResolveRate(minResolveRate);
      setMaxResolveRate(maxResolveRate);

      const resultAllocationArray = res.data.allocations
        .map(
          (obj: {
            previous_month_allocated_percentage: any;
            current_month_allocated_percentage: any;
          }) => [
            obj.previous_month_allocated_percentage,
            obj.current_month_allocated_percentage,
          ]
        )
        .flat();

      const minAllocationvalue = Math.min(...resultAllocationArray) - 4;
      const maxAllocationvalue = Math.max(...resultAllocationArray) + 4;

      setMaxAllocationData(maxAllocationvalue);
      setMinAllocationData(minAllocationvalue);

      const resultAllocationArrayList = Array.from(
        {
          length: Math.ceil((maxAllocationvalue - minAllocationvalue) / 2) + 1,
        },
        (_, idx) => minAllocationvalue + idx * 2
      );

      setResultArrayList(resultAllocationArrayList);

      const resultArray = Array.from(
        { length: Math.ceil((maxResolveRate - minResolveRate) / 2) + 1 },
        (_, idx) => minResolveRate + idx * 2
      );
      setResultArray(resultArray);
      setCityData(res?.data?.allocations);

      //
    }
    // dispatch(saveDashboardData(res.data))
  };

  // useEffect(() => {
  //   const pathName = location.pathname;
  //   if (pathName === "/strategy/simulationengine") {
  //   }
  //   if (!unsavedChanges) return;

  //   const handleBeforeUnload = (event: any) => {
  //     event.preventDefault();
  //     event.returnValue = "Wanna leave?"; // This line is needed for Chrome
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload, {
  //     capture: true,
  //   });

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload, {
  //       capture: true,
  //     });
  //   };
  // }, [unsavedChanges]);

  useEffect(() => {
    if (rowAgencyRowData) {
      const initialArray: Array<Array<boolean>> = [];
      // Loop through the number of rows
      for (let i = 0; i < rowAgencyRowData.length; i++) {
        const row: Array<boolean> = [];
        // Loop through the number of columns
        for (let j = 0; j < rowAgencyRowData[i].values.length; j++) {
          row.push(false); // Set initial value as false
        }
        initialArray.push(row);
      }
      setBgColorApplied(initialArray);
      console.log("bgColorApplied value", bgColorApplied);
    }
  }, [rowAgencyRowData]);

  console.log("allocationData", allocationData);

  const navigateToOptimizeStrategy = () => {
    setOptimizeBtn(true);
    // navigate("/strategy/allocationEngine/reviewPerformance");
  };
  const onEditChanges = () => {
    setIsEditing(true);
    setAddButton(true);
  };
  const onEditOfferChanges = () => {
    setAddButtonOffer(true);
  };
  const onSaveChanges = () => {
    setAddButton(true);
    // setUnsavedChanges(false);
  };

  const handleCancelLeave = () => {
    // setUnsavedChanges(false);
  };

  // Function to handle confirming leaving the page
  const handleConfirmLeave = () => {
    // Add logic to leave the page
  };

  return (
    <div className="  bg-[#FAFAFB] relative">
      {/* <DashboardHeader /> */}
      {/* <PerformanceDashboard /> */}
      {/* {loader ? <Loader /> : ""} */}
      <div className="bg-[#FAFAFB] rounded-xl mt-5 flex flex-col">
        <div className=" w-full flex flex-col gap-5 ml-1">
          {/* <div className="flex gap-11 ">
            <div className="flex items-center text-[#000000] font-[500] text-[16px] font-['DM Sans']">
              Strategies:
            </div> 
            <div className=" flex justify-between rounded-xl bg-[#FAFAFB] B1TabsContain">
              {Strategies.map((buttons, index) => (
                <div
                  key={buttons.id}
                  onClick={() => handleProductClick(buttons.id)}
                  className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                    activeButton === buttons.id
                      ? " bg-[#E8DEF8] "
                      : "bg-[#fafafb]"
                  } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                    index === Strategies.length - 1 ? "rounded-r-[4px]" : ""
                  }`}
                >
                  {buttons.label}
                </div>
              ))}
            </div>
          </div> */}

          <div className="flex gap-10 ">
            {/* <div className="flex items-center text-[#000000] font-[500] text-[16px] font-['DM Sans']">
              Locations:
            </div> */}
            <div className="flex flex-col gap-1">
              <div className=" flex justify-between ml-2 rounded-xl B1TabsContain">
                {cities.map((city, index) => (
                  <div
                    key={city.id}
                    onClick={() => handleCityClick(city.id)}
                    className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 w-full p-4 border border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                      selectedCity === city.id
                        ? " bg-[#E8DEF8] "
                        : "bg-[#fafafb]"
                    } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                      index === cities.length - 1 ? "rounded-r-[4px]" : ""
                    }`}
                  >
                    {city.name}
                  </div>
                ))}
              </div>
              <div className="flex justify-start ml-2 gap-4">
                <div className="flex self-start font-[400] text-[#161D29] text-[14px] font-['DM Sans']">
                  Accounts:
                  <span className="font-[700] text-[#1967D2] text-[14px] font-['DM Sans']">
                    1200
                  </span>
                </div>
                <div className="flex self-start font-[400] text-[#161D29] text-[14px] font-['DM Sans']">
                  Amounts:
                  <span className="font-[700] text-[#1967D2] text-[14px] font-['DM Sans']">
                    $130,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {activeButton && activeButton === "agency" && (
          <div className="w-full flex flex-col p-4 mt-6 mb-2 rounded-xl shadow bg-white">
            <div className="flex justify-start items-center text-[#000000] text-[16px] font-[500] font-['DM Sans' !important]">
              Placement Strategy
            </div>
            <div className="w-[800px] flex flex-wrap justify-between items-center gap-2 mt-4">
              <p className="text-[#000000] text-[14px] font-[400] font-['DM Sans' !important] md:w-f">
                Selection:
              </p>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="Queue"
                  autoComplete="off"
                  required
                  placeholder="Eg-22"
                  disabled
                />
                <label htmlFor="DPD">Queue</label>
                <div className="flex self-start font-[400] text-[#161D29] text-[14px] mt-1 font-['DM Sans']">
                  Accounts:
                  <span className="font-[700] text-[#1967D2] text-[14px] font-['DM Sans']">
                    800
                  </span>
                </div>
              </div>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="Ageing"
                  autoComplete="off"
                  required
                  placeholder="Eg-100,000"
                  disabled
                />
                <label htmlFor="minbal">Ageing</label>
                <div className="flex self-start font-[400] text-[#161D29] text-[14px] mt-1 font-['DM Sans']">
                  Amounts:
                  <span className="font-[700] text-[#1967D2] text-[14px] font-['DM Sans']">
                    $90,000
                  </span>
                </div>
              </div>
              <div className="commonInput form-item mb-6">
                <input
                  type="text"
                  id="Balance"
                  autoComplete="off"
                  required
                  placeholder="Eg-360"
                  disabled
                />
                <label htmlFor="score">Balance</label>
              </div>
              <div className="commonInput form-item mb-6">
                <input
                  type="text"
                  id="Other"
                  autoComplete="off"
                  required
                  placeholder="Eg-360"
                  disabled
                />
                <label htmlFor="flag">Other</label>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex gap-6">
                <p className="self-center w-[80px] text-[#000000] text-[14px] font-[400] font-['DM Sans' !important]">
                  Placements:
                </p>
                <table
                  className="w-[30%] sm:w-[40%] mr-4 performance_table"
                  cellPadding={0}
                >
                  <tbody className="cursor-pointer">
                    {rowData.map((row, rowIndex) => (
                      <tr
                        key={row.id}
                        className="border-t-[1px] border-b-[1px] cursor-pointer"
                      >
                        {row.values.map((cellValue, columnIndex) => (
                          <td
                            key={`${row.id}-${columnIndex}`}
                            className=" text-center text-[#000000] text-[14px] font-[500] font-['DM Sans' !important] border-l-[1px] border-r-[1px] border-b-[1px] cursor-pointer focus:outline-none"
                          >
                            <input
                              type="text"
                              value={cellValue}
                              onChange={(e) =>
                                handleCellValueChange(
                                  rowIndex,
                                  columnIndex,
                                  e.target.value
                                )
                              }
                              className="w-[90px] h-[28px] text-center border-none cursor-pointer focus:ring-0 focus:border-none focus:outline-0"
                              disabled={!isEditing}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {addButton && (
                  <div
                    className="flex gap-2 items-center -ml-6 cursor-pointer"
                    onClick={handleAddRow}
                  >
                    <div>
                      <img src={leadingplusicon} alt="plus" />
                    </div>
                    <div className="text-[#6750A4] text-[14px] font-[500] font-['DM Sans' !important]">
                      Add
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-6 mt-6">
                <p className="self-end w-[80px] text-[#000000] text-[14px] font-[400] font-['DM Sans' !important]">
                  Duration:
                </p>
                <table
                  className="w-[30%] sm:w-[40%] mr-4 performance_table"
                  cellPadding={0}
                >
                  <tbody className="cursor-pointer">
                    {rowDurationRowData.map((row, rowIndex) => (
                      <tr
                        key={row.id}
                        className="border-t-[1px] border-b-[1px] cursor-pointer"
                      >
                        {row.values.map((cellValue, columnIndex) => (
                          <td
                            key={`${row.id}-${columnIndex}`}
                            className=" text-center text-[#000000] text-[14px] font-[500] font-['DM Sans' !important] border-l-[1px] border-r-[1px] border-b-[1px] cursor-pointer focus:outline-none"
                          >
                            <input
                              type="text"
                              value={cellValue}
                              onChange={(e) =>
                                handleCellDurationValueChange(
                                  rowIndex,
                                  columnIndex,
                                  e.target.value
                                )
                              }
                              className="w-[90px] h-[28px] text-center border-none cursor-pointer focus:ring-0 focus:border-none focus:outline-0"
                              // disabled={!isEditing}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex gap-6 mt-6">
                <p className="self-start w-[80px] text-[#000000] text-[14px] font-[400] font-['DM Sans' !important]">
                  Agencies:
                </p>
                <table
                  className="w-[30%] sm:w-[40%] mr-4 performance_table"
                  cellPadding={0}
                >
                  <tbody className="cursor-pointer">
                    {rowAgencyRowData.map((row, rowIndex) => (
                      <tr
                        key={row.id}
                        className="border-t-[1px] border-b-[1px] cursor-pointer"
                      >
                        {row.values.map((cellValue, columnIndex) => (
                          <td
                            key={`${row.id}-${columnIndex}`}
                            className=" text-center text-[#000000] text-[14px] font-[500] font-['DM Sans' !important] border-l-[1px] border-r-[1px] border-b-[1px] cursor-pointer"
                          >
                            <input
                              type="text"
                              value={cellValue}
                              onChange={(e) =>
                                handleCellAgencyValueChange(
                                  rowIndex,
                                  columnIndex,
                                  e.target.value
                                )
                              }
                              onClick={() =>
                                handleCellBgColorChange(rowIndex, columnIndex)
                              }
                              className={`w-[90px] h-[28px] text-center border-none cursor-pointer focus:ring-0 focus:border-none focus:outline-0
                              ${
                                bgColorApplied[rowIndex][columnIndex]
                                  ? "bg-[#E0E8FF]"
                                  : ""
                              }
                              ${
                                rowIndex === 0 &&
                                (columnIndex === 1 || columnIndex === 3)
                                  ? "bg-[#E0E8FF]"
                                  : ""
                              }
                              ${
                                rowIndex === 1 && columnIndex === 1
                                  ? "bg-[#E0E8FF]"
                                  : ""
                              }
                              ${
                                rowIndex === 2 && columnIndex === 3
                                  ? "bg-[#E0E8FF]"
                                  : ""
                              }
                              ${
                                rowIndex === 3 &&
                                (columnIndex === 4 || columnIndex === 5)
                                  ? "bg-[#E0E8FF]"
                                  : ""
                              }`}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}

                    {addButton && (
                      <>
                        <div
                          className="flex gap-2 items-center mt-2 cursor-pointer"
                          onClick={handleAddAgencyRow}
                        >
                          <div>
                            <img src={leadingplusicon} alt="plus" />
                          </div>
                          <div className="text-[#6750A4] text-[14px] font-[500] font-['DM Sans' !important]">
                            Add
                          </div>
                        </div>
                      </>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="self-start mt-8 flex justify-center gap-2 flex-wrap">
                {addButton ? (
                  <button
                    onClick={onSaveChanges}
                    className="py-2.5 px-5 border flex gap-2 border-primary rounded-3xl text-white"
                    style={{ background: "#4EAD5B" }}
                  >
                    <div className="mt-1">
                      <img src={savechangebuttonicon} alt="save" />
                    </div>
                    Save Changes
                  </button>
                ) : (
                  <button
                    onClick={onEditChanges}
                    className="bg-primary py-2.5 px-5 border flex gap-2 border-primary rounded-3xl text-white"
                    style={{ background: "#6750A4" }}
                  >
                    <div className="mt-1">
                      <img src={penciledit} alt="edit" />
                    </div>
                    Edit Strategy
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {activeButton && activeButton === "offer" && (
          <div className="w-full flex flex-col p-4 mt-6 mb-2 rounded-xl shadow bg-white">
            <div className="flex justify-start items-center text-[#000000] text-[16px] font-[500] font-['DM Sans' !important]">
              Offer Strategy
            </div>
            <div className="w-[800px] flex flex-wrap justify-between items-center gap-2 mt-4">
              <p className="text-[#000000] text-[14px] font-[400] font-['DM Sans' !important] md:w-f">
                Selection:
              </p>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="Queue"
                  autoComplete="off"
                  required
                  placeholder="Eg-22"
                  disabled
                />
                <label htmlFor="DPD">Queue</label>
                <div className="flex self-start font-[400] text-[#161D29] text-[14px] mt-1 font-['DM Sans']">
                  Accounts:
                  <span className="font-[700] text-[#1967D2] text-[14px] font-['DM Sans']">
                    800
                  </span>
                </div>
              </div>
              <div className="commonInput form-item">
                <input
                  type="text"
                  id="Ageing"
                  autoComplete="off"
                  required
                  placeholder="Eg-100,000"
                  disabled
                />
                <label htmlFor="minbal">Ageing</label>
                <div className="flex self-start font-[400] text-[#161D29] text-[14px] mt-1 font-['DM Sans']">
                  Amounts:
                  <span className="font-[700] text-[#1967D2] text-[14px] font-['DM Sans']">
                    $90,000
                  </span>
                </div>
              </div>
              <div className="commonInput form-item mb-6">
                <input
                  type="text"
                  id="Balance"
                  autoComplete="off"
                  required
                  placeholder="Eg-360"
                  disabled
                />
                <label htmlFor="score">Balance</label>
              </div>
              <div className="commonInput form-item mb-6">
                <input
                  type="text"
                  id="Other"
                  autoComplete="off"
                  required
                  placeholder="Eg-360"
                  disabled
                />
                <label htmlFor="flag">Other</label>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex gap-6">
                <p className="self-center w-[80px] text-[#000000] text-[14px] font-[400] font-['DM Sans' !important]">
                  Offer:
                </p>
                <div className="w-[83px] h-[28px] px-[10px] py-[4px] rounded border-[0.5px] border-[#9F90D4] text-[#FFFFFF] text-[13px] bg-[#9F90D4] font-[400] font-['DM Sans' !important] ">
                  Settlement
                </div>
              </div>
              <div className="flex gap-6 flex-wrap mt-6">
                <p className="self-center w-[80px] text-[#000000] text-[14px] font-[400] font-['DM Sans' !important]">
                  Placements:
                </p>

                <div className="flex items-center gap-[14px]">
                  {placmentNumbers.map((numbers, idx) => (
                    <div
                      key={numbers.id}
                      onClick={() => handlePlacementClick(numbers.id)}
                      className={`flex h-[26px] p-[10px] cursor-pointer self-start items-center text-[13px] border-[0.5px] border-[#9F90D4] rounded  font-[400] font-[''DM Sans'' !important]
                      ${
                        placmentNumbersButtons === numbers.id
                          ? " bg-[#9F90D4] text-[#FFFFFF] "
                          : "bg-[#FFFFFF] text-[#000000]"
                      }`}
                    >
                      {numbers.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 mt-6">
                <p className="self-start w-[80px] text-[#000000] text-[14px] font-[400] font-['DM Sans' !important]">
                  Campaigns:
                </p>
                <table
                  className="w-[30%] sm:w-[35%] mr-4  performance_table"
                  cellPadding={0}
                >
                  <tbody className="cursor-pointer">
                    {rowOfferRowData.map((row, rowIndex) => (
                      <tr
                        key={row.id}
                        className="border-t-[1px] border-b-[1px]  cursor-pointer"
                      >
                        {row.values.map((cellValue, columnIndex) => (
                          <td
                            key={`${row.id}-${columnIndex}`}
                            className="text-center text-[#000000] text-[12px] font-[500] font-['DM Sans' !important] border-l-[1px] border-r-[1px] border-b-[1px] cursor-pointer"
                          >
                            <input
                              type="text"
                              value={cellValue}
                              onChange={(e) =>
                                handleCellOfferValueChange(
                                  rowIndex,
                                  columnIndex,
                                  e.target.value
                                )
                              }
                              className={`w-full h-[40px] text-center border-none cursor-pointer focus:ring-0 focus:border-none focus:outline-0 ${
                                rowIndex === 0 && "font-[700]"
                              }
                              ${columnIndex === 3 && "w-[145px]"}
                              ${
                                columnIndex === 1 && rowIndex > 0
                                  ? "text-[#6750A4]"
                                  : "text-[#000000]"
                              }
                              `}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}

                    {addButtonOffer && (
                      <>
                        <div
                          className="flex gap-2 items-center mt-2 cursor-pointer"
                          onClick={handleAddOfferRow}
                        >
                          <div>
                            <img src={leadingplusicon} alt="plus" />
                          </div>
                          <div className="text-[#6750A4] text-[14px] font-[500] font-['DM Sans' !important]">
                            Add
                          </div>
                        </div>
                      </>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="self-start mt-8 flex justify-center gap-2 flex-wrap">
                {addButtonOffer ? (
                  <button
                    onClick={onSaveChanges}
                    className="py-2.5 px-5 border flex gap-2 border-primary rounded-3xl text-white"
                    style={{ background: "#4EAD5B" }}
                  >
                    <div className="mt-1">
                      <img src={savechangebuttonicon} alt="save" />
                    </div>
                    Save Changes
                  </button>
                ) : (
                  <button
                    onClick={onEditOfferChanges}
                    className="bg-primary py-2.5 px-5 border flex gap-2 border-primary rounded-3xl text-white"
                    style={{ background: "#6750A4" }}
                  >
                    <div className="mt-1">
                      <img src={penciledit} alt="edit" />
                    </div>
                    Edit Strategy
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* <div className="self-end mt-8 flex justify-center gap-2 flex-wrap">
          <button
            onClick={() => navigate(-1)}
            className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-[#6750a4] text-sm font-medium "
          >
            Back
          </button>
          <button
            onClick={navigateToOptimizeStrategy}
            className="bg-primary py-2.5 px-9 border border-primary rounded-3xl text-white"
            style={{ background: "#6750A4" }}
          >
            Review Execution
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default RecoverySimulation;
