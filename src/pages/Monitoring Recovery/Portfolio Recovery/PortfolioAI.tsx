import AIinsight from "../../../assets/images/AIInsightvector.svg";
import closeAI from "../../../assets/images/closeAI.svg";
import React from "react";


interface PortfolioAIprops {
    onClose: any;
  }

const PortfolioAI: React.FC<PortfolioAIprops> = ({ onClose }) => {
  return (
    <div className="w-[780px] bg-white p-4 h-[160px] "  
    style={{
      background: `
      linear-gradient(90deg, rgba(138, 199, 255, 0.12) 0%, rgba(122, 22, 252, 0.12) 35%, rgba(237, 14, 0, 0.12) 70.5%, rgba(255, 158, 69, 0.12) 99.5%)
    `,
      border: '3px solid transparent', // Fallback color is set to transparent
      borderImage: 'linear-gradient(to right, rgba(138,199,255,0.5), rgba(122,22,252,0.5), rgba(255,158,69,0.5))',
      borderImageSlice: 1, // Ensure the gradient is applied to the border
      overflow: 'hidden',
      boxShadow: "-8px 7px 30.4px 5px #00000033",
    }}   >
      <div className="flex justify-between">
      <div className="flex gap-[8px]">
        <img src={AIinsight} alt="AI Insight" />
        <p className="text-[#5C4E8E] font-['DM Sans'] font-bold text-[14px]">AI Insight</p>
      </div>
      <div     onClick={onClose}  className="flex cursor-pointer gap-[4px] items-center" aria-label="Close modal">
        <img src={closeAI} alt="Close" />
        <p className="text-[#5C4E8E] font-['DM Sans'] font-bold text-[14px]">Close</p>
      </div>
    </div>
    <ul className="text-gray-600 list-disc pl-5 mt-3 gap-5">
      <li className="font-['DM Sans'] text-[12px] font-normal text-[#000000]">
      Over the last six months, the recovery rate declined slightly by 0.01%, while the active recovery balance increased by 0.97%.
      </li>
      <li className="font-['DM Sans'] text-[12px] font-normal text-[#000000]">
      Vintage V1 exhibited the highest performance (2.59%), while V6 had the lowest (0.17%). Location-wise, KA performed best (1.18%), and GJ was the weakest (0.42%).
      </li>
      <li className="font-['DM Sans'] text-[12px] font-normal text-[#000000]">
      In terms of POS, loans under 1 lakh performed the best (2.20%), and those above 10 lakhs performed the worst (0.39%).
      </li>
    </ul>
      </div>
  
  );
};

export default PortfolioAI;
