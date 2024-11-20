import React, { useState, useEffect } from "react";

type Props = {
  activeButton: string;
  recoveryData: any;
  uniqueData: any;
};

interface RecoveryItem {
  [key: string]: {
    name: string;
    value: string;
  };
}

const PortfolioBenchmarkTable = ({
  activeButton,
  recoveryData,
  uniqueData,
}: Props) => {
  // const [recoveryData, setRecoveryData] = useState<RecoveryItem[]>([]);
  const [selectedactiveButtons, setselectedactiveButtons] = useState("");

  useEffect(() => {
    setselectedactiveButtons(activeButton);
  }, [activeButton]);

  return (
    <table className="w-full mt-0 ml-3 p-2 bg-white rounded-xl shadow flex-col justify-start items-start flex">
      <thead className="w-full flex items-center py-5 p-3 bg-white-50 border-b border-gray-100 justify-between">
        <tr className="text-[#706d7b] text-xs font-normal leading-[18px] flex justify-between w-[150px] text-center"></tr>
        <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mx-8 w-[20px]">
          Jan
        </th>
        <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mx-8 w-[20px]">
          Feb
        </th>
        <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mx-8 w-[20px]">
          Mar
        </th>
        <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mx-8 w-[20px]">
          Apr
        </th>
        <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mx-8 w-[20px]">
          May
        </th>
        <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mx-8 w-[20px]">
          Jun
        </th>
        <th className="text-[#9CA4B6] text-[14px] font-[400] font-['DM Sans'] leading-[18px] mx-8 w-[20px]">
          Jul
        </th>
      </thead>

      {selectedactiveButtons === "$Recovery" && (
        <tbody className="w-full">
          {Object.keys(recoveryData[0] || {})
            .slice(1)
            .map((key, index) => (
              <tr
                key={index}
                className="w-full py-5 p-3 bg-white border-b border-t border-gray-100 flex justify-between items-center"
              >
                <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] w-[150px]">
                  {recoveryData[0][key].name}
                </td>
                {recoveryData.map((item: any, itemIndex: any) => (
                  <td
                    key={itemIndex}
                    className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] mx-8 w-[20px] text-center"
                  >
                    {index === 2
                      ? `${item[key] && item[key].value}%`
                      : `${item[key] && item[key].value}`}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      )}

      {selectedactiveButtons === "uniquePayer" && (
        <tbody className="w-full">
          {uniqueData.length > 0 &&
            Object.keys(uniqueData[0])
              .slice(1)
              .map((key, index) => (
                <tr
                  key={index}
                  className="w-full py-5 p-3 bg-white border-b border-t border-gray-100 flex justify-between items-center"
                >
                  <td className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] w-[150px]">
                    {uniqueData[0][key].name}
                  </td>
                  {uniqueData.map((item: any, itemIndex: any) => (
                    <td
                      key={itemIndex}
                      className="text-[#161D29] text-[14px] font-[400] font-['DM Sans'] leading-[21px] w-[30px] mx-8  text-center"
                    >
                      {index === 2
                        ? `${item[key] && item[key].value}%`
                        : `${Math.floor(
                            item[key] && item[key].value
                          ).toLocaleString()}`}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      )}
    </table>
  );
};

export default PortfolioBenchmarkTable;
