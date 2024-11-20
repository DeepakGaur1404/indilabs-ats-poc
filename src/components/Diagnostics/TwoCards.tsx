const Exclusions = [
  { name: "POS", amount: "<10,000" },
  { name: "Allocation", amount: "Inhouse" },
];

const NotAvailable = [
  { name: "Bureau", amount: "" },
  { name: "Operational", amount: "" },
];

interface TwoRecoveryProps {
  selectedCategory: any;
}

const TwoCards: React.FC<TwoRecoveryProps> = ({ selectedCategory }) => {
  return (
    <div className="w-[100%] h-[325px]  space-y-4">
      <div className="bg-white shadow  rounded-xl  py-3 px-3 gap-3">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
          Exclusions
        </p>

        <div className="">
          {Exclusions.map((data, index) => (
            <div
              key={index}
              className={`flex justify-between ${
                selectedCategory === "insights" 
                ? "py-6" 
                : selectedCategory === "validation" 
                ? "py-[23px]" 
                : "py-4"
              } px-4 items-center ${
                index < Exclusions.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <p className="text-[#161D29]  font-['DM Sans'] font-[500] text-[14px] leading-[21px] w-[40%]">
                {data.name}
              </p>
              <p className="text-[#79747E] font-['DM Sans'] font-[400] text-[14px] leading-[21px] w-[60%] ml-8">
                {data.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow py-3 px-3 gap-3 ">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] leading-[21px]">
          Not Available
        </p>

        <div className="">
          {NotAvailable.map((data, index) => (
            <div
              key={index}
              className={`flex justify-between ${
                selectedCategory === "insights" 
                ? "py-6" 
                : selectedCategory === "validation" 
                ? "py-[23px]"  
                : "py-4"
              

              } px-4 items-center ${
                index < NotAvailable.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <p className="text-[#161D29] font-['DM Sans'] font-[400] text-[14px] leading-[21px] w-[40%]">
                {data.name}
              </p>
              <p className="text-[#79747E] font-['DM Sans'] font-[400] text-[14px] leading-[21px] w-[60%] ml-8">
                {data.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoCards;
