import { useState } from "react";
import { Fragment } from "react";
// import uparrow from "../../assets/images/uparrow.svg";
import shiftGreen from "../../assets/icons/shift-green.svg";
import { RxTriangleDown } from 'react-icons/rx';
import './strategy.scss'
import { useNavigate } from "react-router-dom";


const Controls = () => {
  const [defaultData, setDefaultData] = useState(true);
  const [placementCriteria, setPlacementCriteria] = useState(false);
  const [CostConstraints, setCostConstraints] = useState(false);
  const [SpecialAssignments, setSpecialAssignments] = useState(false);
  const [location, setLocation] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [changeRequest, setChangeRequest] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  console.log(placementCriteria);

  const navigateToAllocationPage = () =>{
    navigate('/AllocationEngine')
  }

  return (
    <div>
      <div className="flex minBoxContainer">
        <div className="w-1/2 p-12 rounded-xl border-2 border-[#9CA3AF] border-opacity-40 shadow-sm me-2 my-4 paddingOuterTabel">
          <div className="w-full mx-auto">
            <table className="w-full border-collapse outline-8	">
              <thead>
                <tr>
                  <th className="p-2 text-start text-black font-['Calibri' !important] text-[19px] font-[400]">
                    Controls
                  </th>
                  <th className="p-2  text-black font-['Calibri' !important] text-[19px] font-normal">
                    Existing
                  </th>
                  <th className="p-2  text-black font-['Calibri' !important] text-[19px] font-normal">
                    Today
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onClick={() => {
                    setPlacementCriteria(true);
                    setCostConstraints(false);
                    setDefaultData(false);
                    setSpecialAssignments(false);
                    setLocation(false);
                    setChangeRequest(false);
                  }}
                  // style={{
                  //   borderRadius: placementCriteria ? '30px' : '0px', // Adjust the radius value as needed
                  // }}

                  className={
                    placementCriteria
                      ? " text-gray-600  border-2 border-gray-400 rounded-md"
                      : "border-b "
                  }
                >
                  <td
                    className={`p-2 text-[#7f7f7f]  text-[19px] font-normal font-['calibri' !important] cursor-pointer ${
                      placementCriteria
                        ? "text-gray-600 border-t  rounded-tl-3xl"
                        : "border-b"
                    }`}
                  >
                    Placement Criteria
                  </td>

                  <td
                    className={`p-2 text-[#000000] text-center border-b font-['calibri' !important] text-[19px] font-[400] ${
                      placementCriteria ? "border-t rounded-tl-3xl" : "border-b"
                    }`}
                  >
                    7
                  </td>
                  <td
                    className={`p-2 text-center border-b ${
                      placementCriteria
                        ? "border-t border-r rounded-tl-3xl"
                        : "border-b"
                    }`}
                  ></td>
                </tr>
                <tr
                  onClick={() => {
                    setCostConstraints(true);
                    setPlacementCriteria(false);
                    setDefaultData(false);
                    setSpecialAssignments(false);
                    setLocation(false);
                    setChangeRequest(false);
                  }}
                  className={
                    CostConstraints
                      ? " text-gray-600  border-2 border-gray-400 rounded-3xl"
                      : "border-b "
                  }
                >
                  <td
                    className={`p-2 text-[#7f7f7f] text-[19px] font-normal font-['DM Sans'] cursor-pointer ${
                      CostConstraints
                        ? " text-gray-600   border-gray-400"
                        : "border-b "
                    }`}
                  >
                    Cost Constraints
                  </td>

                  <td
                    className={`p-2 text-[#000000] text-center border-b font-['calibri' !important] text-[19px] font-[400] ${
                      CostConstraints ? "border-t rounded-tl-3xl" : "border-b"
                    }`}
                  >
                    3
                  </td>
                  <td
                    className={`p-2 text-center border-b ${
                      CostConstraints
                        ? "border-t border-r rounded-tl-3xl"
                        : "border-b"
                    }`}
                  ></td>
                </tr>
                <tr
                  onClick={() => {
                    setSpecialAssignments(true);
                    setCostConstraints(false);
                    setPlacementCriteria(false);
                    setDefaultData(false);
                    setLocation(false);
                    setChangeRequest(false);
                  }}
                  className={
                    SpecialAssignments
                      ? " text-gray-600  border-2 border-gray-400 rounded-3xl"
                      : "border-b "
                  }
                >
                  {/* <td
                    className={`p-2 text-gray-400 text-lg font-normal font-['DM Sans'] cursor-pointer ${SpecialAssignments
                      ? "border-t border-l rounded-tl-3xl"
                      : "border-b"
                      }`}
                  >
                    Special Assignments
                  </td> */}
                  <td
                    className={`p-2 text-[#7f7f7f] text-[19px] font-normal font-['DM Sans'] cursor-pointer ${
                      SpecialAssignments
                        ? " text-gray-600   border-gray-400"
                        : "border-b "
                    }`}
                  >
                    Special Assignments
                  </td>

                  <td
                    className={`p-2 text-[#000000] text-center border-b font-['calibri' !important] text-[19px] font-[400] ${
                      SpecialAssignments
                        ? "border-t rounded-tl-3xl"
                        : "border-b"
                    }`}
                  >
                    3
                  </td>
                  <td
                    className={`p-2 text-center border-b ${
                      SpecialAssignments
                        ? "border-t border-r rounded-tl-3xl"
                        : "border-b"
                    }`}
                  ></td>
                </tr>
                <tr
                  onClick={() => {
                    setSpecialAssignments(false);
                    setCostConstraints(false);
                    setPlacementCriteria(false);
                    setDefaultData(false);
                    setLocation(true);
                    setChangeRequest(false);
                  }}
                  className={
                    location
                      ? " text-gray-600  border-2 border-gray-400 rounded-3xl"
                      : "border-b "
                  }
                >
                  {/* <td
                    className={`p-2 text-gray-400 text-lg font-normal font-['DM Sans'] cursor-pointer ${location ? "border-t border-l rounded-tl-3xl" : "border-b"
                      }`}
                  >
                    Locations / Agencies
                  </td> */}
                  <td
                    className={`p-2 text-[#7f7f7f] text-[19px] font-normal font-['DM Sans'] cursor-pointer ${
                      location
                        ? " text-gray-600   border-gray-400"
                        : "border-b "
                    }`}
                  >
                    Locations / Agencies
                  </td>

                  <td className="p-2 border-b text-[#000000] text-center font-['calibri' !important] text-[19px] font-[400]">
                    60
                  </td>
                  <td className="p-2 border-b"></td>
                </tr>
                <tr
                  onClick={() => {
                    setSpecialAssignments(false);
                    setCostConstraints(false);
                    setPlacementCriteria(false);
                    setDefaultData(false);
                    setLocation(false);
                    setChangeRequest(true);
                  }}
                  className={
                    changeRequest
                      ? " text-gray-600  border-2 border-gray-400 rounded-3xl"
                      : "border-b "
                  }
                >
                  {/* <td className="p-2 border-b text-gray-400 text-lg font-normal font-['DM Sans'] cursor-pointer">
                    Change Requests
                  </td> */}
                  <td
                    className={`p-2 text-[#7f7f7f] text-[19px] font-normal font-['DM Sans'] cursor-pointer ${
                      changeRequest
                        ? " text-gray-600   border-gray-400"
                        : "border-b "
                    }`}
                  >
                    Change Requests
                  </td>
                  <td className="p-2 text-[#000000] border-b text-center font-['calibri' !important] text-[19px] font-[400]">
                    3
                  </td>
                  <td className="p-2 border-b"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/2 p-12 rounded-xl border-2 border-[#9CA3AF] border-opacity-40 shadow-sm my-4 paddingOuterTabel relative">
          {defaultData == true ? (
            <div className="w-full mx-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-2 text-start text-[#000000] font-['Calibri' !important] text-[21px] font-normal">
                      Optimization
                    </th>
                    <th className="p-2 text-[#000000] font-['Calibri' !important] text-[21px] font-normal">
                      MTD
                    </th>
                    <th className="p-2 text-[#000000] font-['Calibri' !important] text-[21px] font-normal">
                      Today
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 text-[#7f7f7f] border-b text-[19px] font-normal font-['Calibri' !important]]">
                      Accounts Optimized
                    </td>
                    <td className="p-2 text-[#000000] text-[19px] font-normal font-['Calibri' !important] text-center border-b">
                      8,500
                    </td>
                    <td className="p-2 text-[#000000] text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      1,500
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important]">
                      Balances Optimized
                    </td>
                    <td className="p-2 text-[#000000] text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      $ XX,XXX
                    </td>
                    <td className="p-2 text-[#000000] text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      $ X,XXX
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important]">
                      Error Count
                    </td>
                    <td className="p-2 text-[#000000] text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      0
                    </td>
                    <td className="p-2 text-[#000000] text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      0
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important]">
                      Optimization Gain
                    </td>
                    <td className="p-2 text-[#000000] text-[19px] font-normal font-['Calibri' !important] border-b text-center flex items-center justify-center pl-12 mt-1">
                      $XXX <img src={shiftGreen} width={17} alt="" className="ml-4 mt-1" />{" "}
                      <span className="text-[13px] text-[#000000] font-medium font-['Calibri' !important] ml-4 mt-1">+5%</span>
                    </td>
                    <td className="p-2 text-[#000000] text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      $XX
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="p-2 text-gray-400 text-sm font-normal font-['DM Sans']">
                      Optimization Gain
                    </td>
                    <td className="p-2 text-sm font-normal font-['DM Sans'] border-b flex justify-between text-center">
                      $XXX{" "}
                      <span className="flex">
                        <img src={uparrow} alt="" />
                        5%
                      </span>
                    </td>
                    <td className="p-2 text-sm font-normal font-['DM Sans'] border-b text-center">
                      $XXX
                    </td>
                  </tr> */}
                  <tr>
                    <td className="p-2 pl-10 text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important]">
                      Performance
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-10 text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important]">
                      Cost
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-10 text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important]">
                      $ Collection
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
          {placementCriteria == true ? (
            <div className="w-full mx-auto">
              <table className="w-full border-collapse">
                <thead className="bg-[#E8DFF8]">
                  <tr>
                    <th className="p-2 text-start  text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Location
                    </th>
                    <th className="p-2  text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Bucket
                    </th>
                    <th className="p-2  text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Min. Balance
                    </th>
                    <th className="p-2  text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Score
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-2  border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      All
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal text-center border-b">
                      X
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center">
                      1,1000
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center">
                      540
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      MUM
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center">
                      1
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center">
                      2,500
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center">
                      540
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="absolute right-[30px] bottom-[20px] text-blue-700 underline">
                Edit / Add
              </button>
            </div>
          ) : null}
          {CostConstraints == true ? (
            <div className="w-full mx-auto">
              <table className="w-full border-collapse">
                <thead className="bg-[#E8DFF8]">
                  <tr>
                    <th className="p-2 text-start text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Location
                    </th>
                    <th className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Bucket
                    </th>
                    <th className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      % Change
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-2  border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      All
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal text-center border-b">
                      $ XXX
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      MUM
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center">
                      -5%
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="absolute right-[30px] bottom-[20px] text-blue-700 underline">
                Edit / Add
              </button>
            </div>
          ) : null}
          {SpecialAssignments == true ? (
            <div className="w-full mx-auto">
              <table className="w-full border-collapse">
                <thead className="bg-[#E8DFF8]">
                  <tr>
                    <th className="p-2 text-start text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Location
                    </th>
                    <th className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Flag Name
                    </th>
                    <th className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      DCA
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-2  border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      All
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal text-center border-b"></td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      MUM
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                  </tr>
                </tbody>
              </table>
              <button className="absolute right-[30px] bottom-[20px] text-blue-700 underline">
                Edit / Add
              </button>
            </div>
          ) : null}

          {location == true ? (
            <div className="w-full mx-auto">
              <table className="w-full border-collapse">
                <thead className="bg-[#E8DFF8]">
                  <tr>
                    {/* <th className="p-2 text-start ">
                      <div className="  relative text-slate-800 ">
                        <select className="text-center text-gray-400 font-['Calibri' !important] rounded-lg h-8 w-[100px] flex items-center justify-between appearance-none select-none bg-white ">
                          <option className="h-8 w-full" value="Daily">
                            Other
                          </option>
                          <option className="h-8 w-full" value="Weekly">
                            Mumbai
                          </option>
                          <option className="h-8 w-full" value="Monthly">
                            Nagpur
                          </option>
                        </select>
                        <div className="Arrow w-6 h-6 top-[8px] absolute"></div>
                      </div>
                      {isDropdownOpen && (
                        <div>
                          <ul>
                            <li>DCA1</li>
                            <li>DCA2</li>
                            <li>DCA3</li>
                            <li>DCA4</li>
                          </ul>
                        </div>
                      )}
                    </th> */}
                    <th>
                      <div className="select-containe">
                      <select
                       className="select-box text-center text-[#7f7f7f] font-['Calibri' !important] border-gray-400 focus:border-gray-400 focus:ring-1 rounded-lg appearance-none select-none bg-white p-1 px-5"
                        // className="text-center text-gray-400 font-['Calibri' !important] border-gray-400 focus:border-gray-400 focus:ring-1 rounded-lg appearance-none select-none bg-white p-1 px-5"
                        name=""
                        id=""
                      >
                        <option className="text-start" value="">
                          DCA-1
                        </option>
                        <option className="text-start" value="">
                          DCA-2
                        </option>
                        <option className="text-start" value="">
                          DCA-3
                        </option>
                      </select>
                      {/* <div className="icon">
                      <RxTriangleDown/>
                      </div> */}
                      </div>
                    </th>
                    <th className="p-2 text-start  text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      DCA1
                    </th>
                    <th className="p-2 text-start  text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      DCA2
                    </th>
                    <th className="p-2 text-start  text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      DCA3
                    </th>
                    <th className="p-2 text-start  text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      DCA4
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* <tr>
                    <td className="p-2  border-b text-sm font-normal font-['DM Sans']">
                      All
                    </td>
                    <td className="p-2 text-sm font-normal font-['DM Sans'] text-center border-b"></td>
                    <td className="p-2 text-sm font-normal font-['DM Sans'] border-b text-center"></td>
                  </tr> */}
                  {/* <tr>
                    <td className="p-2 border-b text-sm font-normal font-['DM Sans']">
                      MUM
                    </td>
                    <td className="p-2 text-sm font-normal font-['DM Sans'] border-b text-center"></td>
                    <td className="p-2 text-sm font-normal font-['DM Sans'] border-b text-center"></td>
                  </tr> */}

                  <tr className="border-b">
                    <td className="text-center md:text-center lg:text-center p-2  border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      B1
                    </td>
                    <td className=" p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b  text-center"></td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center md:text-center  p-2 border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      B2
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center md:text-center  p-2 border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      B3
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center md:text-center  p-2 border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      B4
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center md:text-center  p-2 border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      B5
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal] border-b text-center"></td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center  md:text-center  p-2 border-b text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      WO-P1
                    </td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                    <td className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal border-b text-center"></td>
                  </tr>
                </tbody>
              </table>
              <button className="absolute right-[30px] bottom-[20px] text-blue-700 underline">
                Edit / Add
              </button>
            </div>
          ) : null}

          {changeRequest == true ? (
            <div className="w-full mx-auto">
              <table className="w-full border-collapse">
                <thead className="bg-[#E8DFF8]">
                  <tr>
                    <th className="p-2 text-start text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Case Id
                    </th>
                    <th className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Date Request
                    </th>
                    <th className="p-2 text-[#000000] font-['Calibri' !important] text-[19px] font-normal">
                      Status
                    </th>
                    <th className="p-2"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-2  border-b text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important]">
                      MUM023
                    </td>
                    <td className="p-2 text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important] text-center border-b">
                      09/09/23
                    </td>
                    <td className="p-2 text-[19px] font-normal font-['Calibri' !important] border-b text-center text-orange-500">
                      Pending
                    </td>
                    <td className="p-2 text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      <a className="underline text-blue-500" href="#">
                        {" "}
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important]">
                      DEL011
                    </td>
                    <td className="p-2 text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      09/09/23
                    </td>
                    <td className="p-2 text-[19px] font-normal font-['Calibri' !important] border-b text-center text-red-500">
                      Declined
                    </td>
                    <td className="p-2 text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      <a className="underline text-blue-500" href="#">
                        {" "}
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important]">
                      BLR002
                    </td>
                    <td className="p-2 text-[#7f7f7f] text-[19px] font-normal font-['Calibri' !important] border-b text-center">
                      09/09/23
                    </td>
                    <td className="p-2 text-[19px] font-normal font-['Calibri' !important] border-b text-center text-green-400">
                      Approved
                    </td>
                    <td className="p-2 text-[19px] font-normal font-['Calibri' !important] border-b text-center ">
                      <a className="underline text-blue-500" href="#">
                        {" "}
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
      <div className="text-end mt-3 w-full BTNMAIN">
        <button className="self-end bg-[#56478A] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl">
          Run Optimization
        </button>
        <button onClick={navigateToAllocationPage} className="self-end bg-[#56478A] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl ml-2">
          Review Allocations
        </button>
      </div>
    </div>
  );
};

export default Controls;
