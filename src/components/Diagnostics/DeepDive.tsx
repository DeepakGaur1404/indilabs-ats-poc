import "./DeepDive.scss";
import { useState } from "react";
import download from "../../assets/images/download.png";
import shiftOrange from "../../assets/icons/shift-orange.svg";
import RedDownArrow from "../../assets/icons/reddownarrow.svg";
import DGraph from "../../assets/images/Divegraph.svg";
import ExpandMore from "../../assets/images/ExpandMore.svg";
import Arrowforward from "../../assets/images/arrowforward.svg";
import UpandDownArrow from "../../assets/images/upandDownarrow.svg";

const Buttons = [
  { id: "auto", label: "Auto" },
  { id: "manual", label: "Manual" },
];

const Level1Buttons = [
  { id: "<1,00,000", label: "< 1,00,000" },
  { id: "1-3L", label: "1 - 3L" },
  { id: "4-8L", label: "4 - 8L" },
  { id: ">8,00,000", label: "> 8,00,000" },
];

const Level2Buttons = [
  { id: "<1year", label: "< 1,00,000" },
  { id: "1-4years", label: "1 - 4 years" },
  { id: "4-6years", label: "4 - 6 years" },
  { id: ">6years", label: "> 6 years" },
];

const Level3Buttons = [
  { id: "<1year", label: "<1,00,000" },
  { id: "1-4years", label: "1 - 4 years" },
  { id: "4-6years", label: "4 - 6 years" },
  { id: ">6years", label: "> 6 years" },
];

const Level4Buttons = [
  { id: "Tier1", label: "Tier 1" },
  { id: "Tier2", label: "Tier 2" },
  { id: "Tier3", label: "Tier 3" },
  { id: "Tier4", label: "Tier 4" },
];

const DeepDive = () => {
  //metric
  const [activeButton, setActiveButton] = useState("auto");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Recovery Rate");

  //level1
  const [activelevel1Button, setActiveLevel1Button] = useState(""); //rightTabs
  const [isfilterlevel1Open, setFilterIsLevel1Open] = useState(false); //dropdown menu
  const [islevel1Expanded, setIsLevel1Expanded] = useState(true); //bottom graphexpand 
  const [filterlevel1selected, setFilterLevel1Selected] = useState(""); //graph dropdown label
  const [filterlevel1labelselected, setFilterLevel1LabelSelected] = useState(""); //graph tab's label

  //leve2
  const [activelevel2Button, setActiveLevel2Button] = useState(""); //rightTabs
  const [isfilterlevel2Open, setFilterIsLevel2Open] = useState(false); //dropdown menu
  const [islevel2Expanded, setIsLevel2Expanded] = useState(true); //bottom graphexpand
  const [filterlevel2selected, setFilterLevel2Selected] = useState(""); //graph dropdown label
  const [filterlevel2labelselected, setFilterLevel2LabelSelected] = useState(""); //graph tab's label

  const options = ["Recovery Rate", "Metric 1", "Metric 2", "Metric 3"];
  
  const optionsfilters = [
    "Select Parameter",
    "Loan Amount",
    "Loan Terms",
    "Yearly Earned",
    "Cities",
  ];

  const handleProductClick = async (buttonId: string) => {
    setActiveButton(buttonId);
  };

  //dropdown
  const handleOptionClicklevel1 = (option: any) => {
    setFilterLevel1LabelSelected(option);
    setFilterIsLevel1Open(false);
  };

  const handleOptionClicklevel2 = (option: any) => {
    setFilterLevel2LabelSelected(option);
    setFilterIsLevel2Open(false);
  };

  //tabs
  const handleProductClicklevel1 = (id: any) => {
    setActiveLevel1Button(id);
    const selectedButton = Level1Buttons.find((button) => button.id === id);
    setFilterLevel1Selected(selectedButton ? selectedButton.label : "");
  };

  const handleProductClicklevel2 = (id: any) => {
    setActiveLevel2Button(id);
    const selectedButton = Level2Buttons.find((button) => button.id === id);
    setFilterLevel2Selected(selectedButton ? selectedButton.label : "");
  };

  //Bottom graph container expand
  const toggleExpandlevel1 = () => {
    setIsLevel1Expanded(!islevel1Expanded);
  };

  const toggleExpandLevel2 = () => {
    setIsLevel2Expanded(!islevel2Expanded);
  };

  return (
    <div className="px-[6px] h-full lg:px-[49px]  lg:pt-[59px] -mt-10 lg:pb-20  bg-[#fafafb]">
      <div className="bg-[#FFFFFF] w-[100%] rounded-xl shadow py-5 px-4 gap-5">
        <div className="w-full flex justify-between">
          <div className="flex flex-row items-center gap-4">
            <p className="text-[#000000] font-[400] text-[14px] leading-[18.23px]">
              Selection:
            </p>
            <div className="form-item flex flex-row input-field custom-select w-[150px] ml-7  rounded-[4px] text-[14px] font-[400] font-['Dm Sans'] text-[#000000] leading-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-row justify-between items-center px-4 py-2 text-left bg-white border-gray-700 rounded-md shadow-sm "
              >
                <span>{selected}</span>
                <img
                  src={UpandDownArrow}
                  alt="Expand More"
                  className={`cursor-pointer transform transition-transform duration-400 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isOpen && (
                <ul className="absolute z-10 w-[150px] mt-10  bg-white border rounded-md shadow-lg">
                  {options.map((option) => (
                    <li
                      key={option}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                      className="px-4 w-[150px] py-2 text-[14px] font-[400] font-['Dm Sans'] text-[#000000] hover:bg-[#79747E] hover:text-[white] cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              <label
                htmlFor="RecoveryRate"
                className='text-[#5C4E8E] font-["DM Sans"] font-[400] text-[12px] leading-4'
              >
                Metric
              </label>
            </div>
            <div className="flex ">
              <div className=" flex w-full justify-between rounded-xl B1TabsContain">
                {Buttons.map((buttons, index) => (
                  <div
                    key={buttons.id}
                    onClick={() => handleProductClick(buttons.id)}
                    className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important] h-10 
                 border py-2.5 px-6 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                   activeButton === buttons.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#ffffff]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                      index === Buttons.length - 1 ? "rounded-r-[4px]" : ""
                    }`}
                  >
                    {buttons.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="flex items-center gap-1">
              <img
                className="w-[18px] h-[18px]"
                src={download}
                alt="download"
              />
              <p className=" h-[20px] text-[#6750A4] text-[14px] font-[500] cursor-pointer font-['DM Sans']">
                Download
              </p>
            </div>

            <button className="self-end h-[20px] py-5 px-4 flex items-center  rounded-3xl border border-zinc-500 text-center text-[#6750a4] text-sm font-medium">
              Saved Combos
            </button>
          </div>
        </div>
        <div className="w-[100%] flex flex-row md:flex-col 2xl:flex-row xl:flex-row lg:flex-row  sm:flex-col gap-4 mt-6">
          <p className="text-[#000000] font-[400] text-[14px] leading-[18.23px]">
            Filters:
          </p>
          <div className="flex flex-col">
            <div className="flex form-item ml-12">
              <p className="text-[#5C4E8E] font-['DM Sans'] font-[500] text-[12px] leading-4">
                Level 1
              </p>
              <div className="form-item flex flex-row -ml-9 input-field h-[40px] custom-select w-[175px] mt-7 rounded-[4px] text-[14px] font-[400] font-['Dm Sans'] text-[#000000] leading-6">
                <button
                  onClick={() => setFilterIsLevel1Open(!isfilterlevel1Open)}
                  className="w-full flex flex-row justify-between items-center px-4 py-2 text-left bg-white border-gray-700 rounded-md shadow-sm "
                >
                  <span>{filterlevel1labelselected || "Select Parameter"}</span>
                  <img
                    src={UpandDownArrow}
                    alt="Expand More"
                    className={`cursor-pointer transform transition-transform duration-400 ${
                      isfilterlevel1Open ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isfilterlevel1Open && (
                  <ul className="absolute z-10 w-[175px] mt-10 bg-white border rounded-md shadow-lg">
                    {optionsfilters.map((option) => (
                      <li
                        key={option}
                        onClick={() => handleOptionClicklevel1(option)}
                        className="px-4 w-[175px] py-2 text-[14px] font-[400] font-['Dm Sans'] text-[#000000] hover:bg-[#79747E] hover:text-[white] cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex  mt-7 ml-5">
                <div className="flex w-full justify-between rounded-xl B1TabsContain">
                  {Level1Buttons.map((buttons, index) => (
                    <div
                      key={buttons.id}
                      onClick={() => handleProductClicklevel1(buttons.id)}
                      className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important]  h-[40px] 
                 border py-2.5 px-6 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                   activelevel1Button === buttons.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#ffffff]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                        index === Level1Buttons.length - 1
                          ? "rounded-r-[4px]"
                          : ""
                      }`}
                    >
                      {buttons.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {activelevel1Button === "1-3L" &&( 
              <div className="flex form-item mt-7 ml-12">
                <p className="text-[#5C4E8E] font-['DM Sans'] font-[500] text-[12px] leading-4">
                  Level 2
                </p>
                <div className="form-item flex flex-row -ml-9 input-field custom-select  h-[40px] w-[175px] mt-7 rounded-[4px] text-[14px] font-[400] font-['Dm Sans'] text-[#000000] leading-6">
                  <button
                    onClick={() => setFilterIsLevel2Open(!isfilterlevel2Open)}
                    className="w-full flex flex-row justify-between items-center px-4 py-2 text-left bg-white border-gray-700 rounded-md shadow-sm "
                  >
                    <span>
                      {filterlevel2labelselected || "Select Parameter"}
                    </span>
                    <img
                      src={UpandDownArrow}
                      alt="Expand More"
                      className={`cursor-pointer transform transition-transform duration-400 ${
                        isfilterlevel2Open ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {isfilterlevel2Open && (
                    <ul className="absolute z-10 w-[175px] mt-10 bg-white border rounded-md shadow-lg">
                      {optionsfilters.map((option) => (
                        <li
                          key={option}
                          onClick={() => handleOptionClicklevel2(option)}
                          className="px-4 w-[175px] py-2 text-[14px] font-[400] font-['Dm Sans'] text-[#000000] hover:bg-[#79747E] hover:text-[white] cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex  mt-7 ml-5">
                  <div className=" flex w-full justify-between rounded-xl B1TabsContain">
                    {Level2Buttons.map((buttons, index) => (
                      <div
                        key={buttons.id}
                        onClick={() => handleProductClicklevel2(buttons.id)}
                        className={`text-center text-[#1C1B1F] text-[14px] font-[500] font-['DM Sans' !important]  h-[40px]
                 border py-2.5 px-6 border-[#79747E] flex align-center justify-center items-center cursor-pointer ${
                   activelevel2Button === buttons.id
                     ? " bg-[#E8DEF8] "
                     : "bg-[#ffffff]"
                 } ${index === 0 ? "rounded-l-[4px]" : ""} ${
                          index === Level2Buttons.length - 1
                            ? "rounded-r-[4px]"
                            : ""
                        }`}
                      >
                        {buttons.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            )}
          </div>
        </div>
        <div className="mt-6 ml-[100px] flex gap-4">
          <button className="self-end h-[30px] py-[18px] px-6 flex items-center  rounded-3xl  text-center text-[white] bg-[#6750a4] text-[14px] font-[500]">
            Run Filter
          </button>
          <button className="self-end h-[30px] py-[18px] px-6 flex items-center  rounded-3xl  text-center text-[white] bg-[#6750a4] text-[14px] font-[500]">
            Save Combo
          </button>
        </div>
      </div>
      <div className="w-full p-4 mt-7 mb-2 rounded-xl shadow bg-white">
        <div className=" flex flex-col gap-4">
          <div className="flex justify-start items-center ">
            <p className="text-[#000000] text-[16px]  font-[500] font-['DM Sans' !important] md:w-f">
              Statistics
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-1">
            <div className="flex  flex-col">
              <div className="flex items-center">
                <p className="text-[#161D29] text-[14px]  font-[500] font-['DM Sans' !important] ">
                  Total O/S
                </p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <p className=" text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important]">
                  5,334,843,865
                </p>

                <img src={shiftOrange} alt="" />
                <p className="text-[#161D29] text-[10px]  font-[400] font-['DM Sans' !important]">
                  +2% MOM
                </p>
              </div>
            </div>
            <div className="vertical-bar"></div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className=" text-[#161D29] text-[14px]  font-[500] font-['DM Sans' !important]">
                  Cluster O/S
                </p>
              </div>

              <div className="flex justify-between items-center gap-2">
                <p className="amount text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important]">
                  5,334,843,865
                </p>
                <img src={shiftOrange} alt="" />
                <p className="text-[#161D29] text-[10px]  font-[400] font-['DM Sans' !important]">
                  +2% MOM
                </p>
              </div>
            </div>
            <div className="vertical-bar"></div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="text-[#161D29] text-[14px]  font-[500] font-['DM Sans' !important]">
                  {" "}
                  Total Delq%
                </p>
              </div>

              <div className="flex justify-between items-center gap-2">
                <p className=" text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important]">
                  3.12%
                </p>
                <img className="" src={shiftOrange} alt="" />
                <p className="text-[#161D29] text-[10px]  font-[400] font-['DM Sans' !important]">
                  +2% MOM
                </p>
              </div>
            </div>
            <div className="vertical-bar"></div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="text-[#161D29] text-[14px]  font-[500] font-['DM Sans' !important]">
                  Cluster Delq%
                </p>
              </div>

              <div className="flex justify-between items-center gap-2">
                <p className="text-[#161D29] text-[14px]  font-[400] font-['DM Sans' !important]">
                  18.5%
                </p>
                <img className="" src={shiftOrange} alt="" />
                <p className="text-[#161D29] text-[10px]  font-[400] font-['DM Sans' !important]">
                  +2% MOM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-gray-200 border-[1px] mt-10 w-[100%]"></div>
      <div className="w-full p-4 mt-7 mb-2 gap-9 rounded-xl shadow bg-white">
        <div className="flex flex-row justify-between">
          <p className="text-[#5C4E8E] flex flex-row font-['DM Sans'] ml-2 font-[500] text-[12px] leading-4">
            Level 1{" "}
            {filterlevel1selected && (
              <span className="flex flex-row gap-3 ml-3">
                <img
                  src={Arrowforward}
                  alt=""
                  className={`h-[12px] w-[12px] mt-[3px] ${filterlevel1selected}`}
                />
                {filterlevel1selected}
              </span>
            )}
            {filterlevel1labelselected &&
              filterlevel1labelselected !== "Select Parameter" && (
                <span className="flex flex-row gap-3 ml-3">
                  <img
                    src={Arrowforward}
                    alt=""
                    className={`h-[12px] w-[12px] mt-[3px] ${filterlevel1labelselected}`}
                  />
                  {filterlevel1labelselected}
                </span>
              )}
          </p>
          <img
            src={ExpandMore}
            alt="Expand More"
            onClick={toggleExpandlevel1}
            className={`cursor-pointer transform transition-transform duration-400 ${
              islevel1Expanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`transition-all duration-400 overflow-hidden ${
            islevel1Expanded ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="flex items-center h-[313px] w-[100%] justify-center flex-col">
            <img width={250} height={180} src={DGraph} alt="" />
            <p className="text-[#ADADAD] font-[500] font-['Dm Sans'] text-[16px] leading-6">
              Apply the filters to diagnose through deep-dive
            </p>
          </div>
        </div>
      </div>
      {activelevel1Button === "1-3L" && (
        <div className="w-full p-4 mt-7 mb-2 gap-9 rounded-xl shadow bg-white">
          <div className="flex flex-row justify-between">
            <p className="text-[#5C4E8E] flex flex-row font-['DM Sans'] ml-2 font-[500] text-[12px] leading-4">
              Level 2{" "}
              {filterlevel2selected && (
                <span className="flex flex-row gap-3 ml-3">
                  <img
                    src={Arrowforward}
                    alt=""
                    className={`h-[12px] w-[12px] mt-[3px] ${filterlevel2selected}`}
                  />
                  {filterlevel2selected}
                </span>
              )}
              {filterlevel2labelselected &&
                filterlevel2labelselected !== "Select Parameter" && (
                  <span className="flex flex-row gap-3 ml-3">
                    <img
                      src={Arrowforward}
                      alt=""
                      className={`h-[12px] w-[12px] mt-[3px] ${filterlevel2labelselected}`}
                    />
                    {filterlevel2labelselected}
                  </span>
                )}
            </p>
            <img
              src={ExpandMore}
              alt="Expand More"
              onClick={toggleExpandLevel2}
              className={`cursor-pointer transform transition-transform duration-400 ${
                islevel2Expanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`transition-all duration-400 overflow-hidden ${
              islevel2Expanded ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="flex items-center h-[313px] w-[100%] justify-center flex-col">
              <img width={250} height={180} src={DGraph} alt="" />
              <p className="text-[#ADADAD] font-[500] font-['Dm Sans'] text-[16px] leading-6">
                Apply the filters to diagnose through deep-dive
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeepDive;
