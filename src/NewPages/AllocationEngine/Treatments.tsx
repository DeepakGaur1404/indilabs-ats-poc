import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerformance } from "../../redux/reducers/ReviewPerformanceReducer/ReviewPerformanceSlice";

type Props = {
  performance: any;
};
const Treatment = (props: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className="min-w-[280px] flex flex-col overflow-x-auto -ml-3 lg:-ml-0">
        <div className="h-[385px] table_wrapper bg-white w-300 p-4 rounded-xl mb-5 overflow-x-auto ">
          <table className="w-300 table-auto  ">
            <thead>
              <tr>
                <th className="px-4 py-2 font-['calibri' !important] text-[#000000] text-[15px] font-[500] text-start">
                  Treatment
                </th>
                <th className="px-4 py-2 font-['calibri' !important] text-[#000000] text-[15px font-[500]">
                  Status
                </th>
                <th className="px-4 py-2 font-['calibri' !important] text-[#000000] text-[15px font-[500]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-['calibri' !important] text-[#000000] font-[400]">
                  Champion
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <div className="status_logo bg-[#00B050] text-white w-3 h-3 rounded-full flex items-center justify-center"></div>
                    <span className="ml-1 font-['calibri' !important] text-[#000000] font-[400]">
                      Active
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-white border border-gray-400 text-[#7f7f7f] py-1 px-6 rounded-lg">
                    Stop
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-['calibri' !important] text-[#000000] font-[400]">
                  Challenger1
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <div className="status_logo bg-[#00B050] text-white w-3 h-3 rounded-full flex items-center justify-center"></div>
                    <span className="ml-1 font-['calibri' !important] text-[#000000] font-[400]">
                      Active
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-white border border-gray-400 text-[#7f7f7f] py-1 px-6 rounded-lg">
                    Stop
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-['calibri' !important] text-[#000000] font-[400]">
                  Challenger2
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <div className="status_logo bg-[#00B050] text-white w-3 h-3 rounded-full flex items-center justify-center"></div>
                    <span className="ml-1 font-['calibri' !important] text-[#000000] font-[400]">
                      Active
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-white border border-gray-400 text-[#7f7f7f] py-1 px-6 rounded-lg">
                    Stop
                  </button>
                </td>
              </tr>
              {props.performance && (
                <tr>
                  <td className="px-4 py-2 font-['calibri' !important] text-[#000000] font-[400]">
                    {props.performance.segment}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div
                        className={`status_logo ${
                          isActive ? "bg-[#00B050]" : "bg-orange-400"
                        }  text-white w-3 h-3 rounded-full flex items-center justify-center`}
                      ></div>
                      <span className="ml-1 font-['calibri' !important] text-[#000000] font-[400]">
                        {isActive ? "Active" : "Build"}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-white border border-gray-400 text-[#7f7f7f] py-1 px-6 rounded-lg"
                      onClick={() => setTimeout(() => setIsActive(true), 3000)}
                    >
                      {isActive ? "Stop" : "Execute"}
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <button
          type="button"
          className="w-[90px] font-[500] rounded-md pt-1 pb-1 bg-violet-300 border text-[13px] font-['calibri' !important] self-end -mt-4"
          onClick={() => dispatch(addPerformance(props.performance))}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default Treatment;
