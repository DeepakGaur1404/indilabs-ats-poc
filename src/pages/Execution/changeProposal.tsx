import React from "react";
// import Sidebar from "../../components/common/Sidebar";
import RedDownArrow from '../../assets/icons/red-down-shift.png'
import shiftOrange from '../../assets/icons/shift-orange.svg'
import './changeControl.scss'

const ChangeProposal: React.FC = () => {
  return (
    <div className="w-[100%] p-1 border-2 border-gray-200  rounded-xl flex flex-col lg:w-[50%]">
      <h1 className="text-[#000000] opacity-80 text-[19px] font-medium font-['Calibri' !important] ">Change Proposal</h1>
      <div className="flex justify-between mr-4">
        <h1 className="text-[#000000] font-['Calibri' !important] text-[19px] font-medium opacity-80">Case ID:</h1>
        <h1 className="text-[#000000] font-['Calibri' !important] text-[19px] font-medium opacity-80 mr-60 date_text">Date:</h1>
        <h1 className="text-[#000000] font-['Calibri' !important] text-[19px] font-medium opacity-80 proposer_text">Proposer: XYZ</h1>
      </div>
      <div className="w-[100%] flex justify-start self-center mb-4 mt-3 lg:w-[45%] lg:justify-between lg:self-start xl:self-center bucket_location">
        <div className="flex items-center mr-5 lg:mr-10">
          <input className="w-[80px] ml-3 mr-2 border-2 border-gray-300 rounded-sm text-[#7f7f7f] text-[16px] font-medium font-['Calibri' !important] pr-4 pl-2 pt-1 pb-1 lg:w-[100px]" placeholder="Bucket" />
          <div className="text-[#7f7f7f] text-[15px] font-medium font-['Calibri' !important] ">B1</div>
        </div>
        <div className="flex items-center location_input">
          <input className="w-[80px] mr-2 border-2 border-gray-300 rounded-sm text-[#7f7f7f] text-[16px] font-medium font-['Calibri' !important] pr-4 pl-2 pt-1 pb-1 lg:w-[100px]" placeholder="Location" />
          <div className="text-[#7f7f7f] text-[15px] font-medium font-['Calibri' !important] ">DEL</div>
        </div>
      </div>
      {/* <div className="mb-4 mr-3">
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-500 table-text">Performance</p>
                <div className="w-[75%]">
                <div className="w-[100%] flex justify-around items-center border-t-2 border-r-2 border-l-2 border-gray-400 text-sm font-bold table-box">
                    <div className="border-r-2 pr-6">Dur .</div>
                    <div className="border-r-2 pr-6">DCA 1</div>
                    <div className="border-r-2 pr-6">DCA 2</div>
                    <div className="border-r-2 pr-6">DCA 3</div>
                    <div>DCA 4</div>
                </div>
                <div className="w-[100%] flex justify-around items-center border-t-2 border-r-2 border-b-2 rounded border-black text-sm font-semibold table-box">
                    <div>30</div>
                    <div>65%</div>
                    <div>25%</div>
                    <div>55%</div>
                    <div>40%</div>
                </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className=" text-gray-500 table-text ">Recommended<br/> Allocation</p>
                <div className="w-[75%] flex justify-around items-center border-2 border-gray-400 text-sm font-semibold table-box">
                    <div>30</div>
                    <div>40%</div>
                    <div>5%</div>
                    <div>35%</div>
                    <div>20%</div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-500 table-text ">Proposed <br/> Allocation</p>
                <div className="w-[75%] flex justify-around  items-center border-2 border-gray-400 table-box">
                    <div className="text-sm font-semibold">30</div>
                    <div className="text-red-700 text-sm font-semibold">35%</div>
                    <div className="text-red-700 text-sm font-semibold">10%</div>
                    <div className="text-red-700 text-sm font-semibold">30%</div>
                    <div className="text-red-700 text-sm font-semibold">25%</div>
                </div>
            </div>
        </div> */}
        <div className="flex flex-col">
          <div className="flex justify-between sm:ml-2">
            <p className="self-end w-[83px] text-[#7f7f7f] text-[14px] sm:text-[16px] font-medium font-['Calibri' !important] changeProposal-tableText ">Performance</p>
            <table className="w-[60%] sm:w-[70%] mr-4 performance_table" cellPadding={0}>
              <thead>
                <tr className="border-b">
                  <th className="font-medium  text-[#000000] text-[14px] tracking-wider text-center border-r-2  pt-1 pb-1 font-['Calibri' !important] Dur_text">Dur</th>
                  <th className="font-medium  text-[#000000] text-[14px] font-['Calibri' !important] tracking-wider text-center  border-r-2">DCA 1</th>
                  <th className=" font-medium text-[#000000] text-[14px] font-['Calibri' !important] tracking-wider text-center  border-r-2 ">DCA 2</th>
                  <th className=" font-medium text-[#000000] text-[14px] font-['Calibri' !important] tracking-wider text-center  border-r-2">DCA 3</th>
                  <th className="font-medium  text-[#000000] text-[14px] font-['Calibri' !important] tracking-wider text-center  border-r-2">DCA 4</th>
                </tr>
              </thead>
              <tbody className="" >
                <tr className="border-r-[2.5px] border-t-[2.5px] border-b-[2.5px]  border-gray-600">
                  <td className="text-center font-medium text-[#000000] text-[14px] font-['Calibri' !important] border-l-2 pt-1 pb-1">30</td>
                  <td className="text-center text-[#7f7f7f] text-[16px] font-medium font-['Calibri' !important] bg-gray-200">65%</td>
                  <td className="text-center text-[#7f7f7f] text-[16px] font-medium font-['Calibri' !important] bg-gray-200">25%</td>
                  <td className="text-center text-[#7f7f7f] text-[16px] font-medium font-['Calibri' !important] bg-gray-200">55%</td>
                  <td className="text-center text-[#7f7f7f] text-[15px] font-medium font-['Calibri' !important]">40%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-4 sm:ml-2">
            <p className="self-end sm:w-[83px] text-[#7f7f7f] text-[14px] sm:text-[16px] font-medium font-['Calibri' !important] changeProposal-tableText ">Recommended Allocation</p>
            <table className="w-[160%] sm:w-[70%] h-[20px] mr-4 recommended_table" cellPadding={0}>
              <tbody>
                <tr className=" border-t-2 border-b-2">
                  <td className="text-center font-medium text-[#000000] text-[15px] border-l-2 border-r-2 pt-1 pb-1">30</td>
                  <td className="text-center font-medium text-[#595959] text-[15px] border-r-2 ">40%</td>
                  <td className="text-center font-medium text-[#7f7f7f] text-[15px] border-r-2">5%</td>
                  <td className="text-center font-medium text-[#595959] text-[15px] border-r-2">35%</td>
                  <td className="text-center font-medium text-[#595959] text-[15px] border-r-2">20%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between sm:ml-2">
            <p className="self-end w-[83px] text-[#7f7f7f] text-[14px] sm:text-[16px] font-medium font-['Calibri' !important] changeProposal-tableText ">Proposed Allocation</p>
            <table className="w-[60%] sm:w-[70%] h-[20px] mr-4 proposed_table" cellPadding={0}>
              <tbody>
                <tr className=" border-t-2 border-b-2">
                  <td className="text-center font-medium text-[#000000]  text-[15px] border-l-2 border-r-2 pt-1 pb-1">30</td>
                  <td className="text-center font-medium text-[#C00000]  text-[15px] border-r-2 ">35%</td>
                  <td className="text-center font-medium text-[#C00000]  text-[15px] border-r-2">10%</td>
                  <td className="text-center font-medium text-[#C00000]  text-[15px] border-r-2">30%</td>
                  <td className="text-center font-medium text-[#C00000]  text-[15px] border-r-2">25%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      <div className="w-[75%] flex justify-between mb-7 mt-5 impact-container text-center">
        <div className="text-gray-500 mr-2 ml-2 font-medium impact_text">
          <div className="impact text-[#7f7f7f] text-[16px] font-medium font-['Calibri' !important]">Impact relative to</div>
          <div className="text-[#7f7f7f] text-[16px] font-medium font-['Calibri' !important]">Recommended</div>
        </div>
        <div className="text-[#7f7f7f] text-[16px] font-medium font-['Calibri' !important] mr-2 perf_text">
          <div>Performance:</div>
          <div>Cost</div>
        </div>
        <div className="text-gray-500 font-medium vsRecommend_text">
          <div className="flex items-center recomended-container bg-white"><img src={RedDownArrow} className="mr-0 mb-5 lg:mb-0" alt="" /><p className="text-[#7f7f7f] text-[13px] font-medium font-['Calibri' !important] ml-5"> <span className="text-[#000000] text-[13px] font-normal font-['Calibri' !important]">-5%</span> vs. Recommended</p></div>
          <div className="flex items-center recomended-container bg-white"><img src={shiftOrange} className="mr-0 mb-5 lg:mb-0" alt="" /><p className="text-[#7f7f7f] text-[13px] font-medium font-['Calibri' !important] ml-1"> <span className="text-[#000000] text-[13px] font-normal font-['Calibri' !important] ml-2">+2%</span> vs. Recommended</p></div>
        </div>
      </div>
      <div className="text-[#7f7f7f] text-[16px] font-medium font-['Calibri' !important] ml-2 font-medium ">
        <div>Exception request</div>
        <div className=" text-[#7f7f7f] text-[15px]  font-medium font-['Calibri' !important]">Maintain min allocation for DAC2 rebuild the performance. DCA impacted by spike in attrintion. performance monitoring initiated</div>
      </div>
      <button className="self-end bg-[#56478A] border-primary text-white pl-9 pr-9 pt-1 pb-1 rounded-3xl mr-4 mt-3">
        Initiate Case
      </button>

    </div>
  );
};

export default ChangeProposal;
