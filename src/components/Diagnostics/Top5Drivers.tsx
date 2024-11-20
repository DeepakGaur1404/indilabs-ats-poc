import React from "react";
import NewDiagnostics from "./NewDiagnostics";

type Top5DriversProps = {
  onDriverClick: (driver: string) => void;
  selectedSegment: string;
  selectedCategory: any;
};

const driverData = [
  { driver: "MOB_woe", value: 80 },
  { driver: "interest_rate_woe", value: 90 },
  { driver: "loan_term_woe", value: 70 },
  { driver: "pos_woe", value: 60 },
  { driver: "loan_amount_woe", value: 40 },
];

const Top5Drivers: React.FC<Top5DriversProps> = ({
  onDriverClick,
  selectedSegment,
  selectedCategory,
}) => {
  return (
    <div className="flex flex-col w-[100%]  gap-3">
      <div className="w-[100%] shadow h-[325px] bg-white rounded-xl  px-3 gap-3">
        <p className="text-[black] font-['DM Sans'] font-[500] text-[14px] px-[2px] mt-4 leading-[21px]">
          Top 5 Drivers (SHAP values)
        </p>
        <div className="space-y-1 mt-3">
          {driverData.map((driver: any) => (
            <div
              key={driver.driver}
              className={`flex justify-between items-center h-[50px] cursor-pointer rounded-lg px-2 ${
                selectedCategory === "insights" &&
                selectedSegment === driver.driver
                  ? "border-violet-600 border-2"
                  : ""
              }`}
              onClick={() => {
                if (selectedCategory === "insights") {
                  onDriverClick(driver.driver);
                }
              }}
            >
              <p className="w-[40%] text-[black] font-['DM Sans'] font-[400] text-[14px] leading-[21px]">
                {driver.driver === "MOB_woe"
                  ? "MOB"
                  : driver.driver === "interest_rate_woe"
                  ? "Interest Rate"
                  : driver.driver === "loan_term_woe"
                  ? "Loan Term"
                  : driver.driver === "loan_amount_woe"
                  ? "Loan Amt"
                  : "POS"}
              </p>

              <div className="w-[60%] overflow-hidden">
                <div
                  className="bg-[#4169E1] h-[16px] rounded-md"
                  style={{ width: `${driver.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top5Drivers;
