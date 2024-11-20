import React from "react";

const TestPipeLine: React.FC = () => {
  return (
    <div className="min-w-[310px] w-[100%] md:w-[48%] xl:w-[33%] bg-white rounded-xl p-3 lg:ml-2 border-2 overflow-x-auto">
        <h1 className="text-[18px] mt-2 font-['calibri' !important] text-[#000000] font-[400]">Test Pipeline</h1>
       <table className="-ml-3" cellPadding={15}>
      <thead >
        <tr  className="">
            <th className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">Test ID</th>
            <th className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">Start</th>
            <th className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">Volume</th>
            <th className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">KPI 1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">Champion</td>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">01 Apr 22</td>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">52,000</td>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">20%</td>
        </tr>
        <tr>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">Challenger 1</td>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">24 AUG 23</td>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">6,500</td>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">18%</td>
        </tr>
        <tr>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">Challenger 2</td>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">20 SEP 22</td>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">6,5000</td>
            <td className="text-[16px] font-[400] text-start font-['calibri' !important] text-[#000000] ">23%</td>
        </tr>
      </tbody>
      </table>
    </div>
  );
};

export default TestPipeLine;

