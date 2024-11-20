import React, { useState } from "react";
import "./LandingPage.scss";
import scrollCircle from "../../assets/images/Ellipse 4.png";
import indilabslogolandingpage from "../../assets/images/logoindilabs.svg";
import calendarMonth from "../../assets/images/calendar_month.png";
import landingpagedtopimage from "../../assets/images/landingpagetopimagenew.jpg";
import endtoendImage from "../../assets/images/endtoend.png";
import DynamicStrategiesImage from "../../assets/images/DynamicStrategies.png";
import ProfitOptimizationImage from "../../assets/images/ProfitOptimization.png";
import DecisionSciencePoweredImage from "../../assets/images/DecisionSciencePowered.png";
import EfficiencyEnhancementImage from "../../assets/images/EfficiencyEnhancement.png";
import YourSolutionsforporfitablegrowthImage from "../../assets/images/YourSolutionsforporfitablegrowth.png";
import indilabsImage from "../../assets/images/indliabs.png";
import LinkedinImage from "../../assets/images/Linkedin.png";
import MailImage from "../../assets/images/mail.png";
import CallImage from "../../assets/images/call.png";
import fpsimage from "../../assets/images/30fps.png";
import FrameI2 from "../../assets/images/FrameI2.svg";
import Frame1 from "../../assets/images/Frame1.jpg";
import Frame3 from "../../assets/images/Frame3.jpg";
import FrameI4 from "../../assets/images/FrameI4.svg";
import FrameImage from "../../assets/images/FrameImage.svg";
import separationline from "../../assets/images/separationline.svg";
import MissionImage from "../../assets/images/MissionImage.png";
import ValuesImage from "../../assets/images/ValuesImage.png";
import VisionImage from "../../assets/images/VisionImage.png";
import FounderImage from "../../assets/images/FounderImage.png";
import { useNavigate } from "react-router-dom";
import { CarouselDefault } from "./Carousel";
import ConatactForm from "../Contact Form/ContactForm";
import { CarouselAbout } from "./CarouselAbout";

const content = [
  {
    title: "WHY INDILABS.AI?",
    description:
      "Category defining AI & ML powered Credit Risk and Collections Strategy platform engineered for modern lending ecosystem",
  },
];

const dataCards = [
  {
    src: Frame1,
    title: "Portfolio Risk Monitoring & Diagnostics",
    description:
      "Are you ready to optimize your Risk<br />Intelligence and Collections<br />capabilities for Profitable Growth?",
  },
  {
    src: FrameI2,
    title: "Pre-Delinquency Management",
    description:
      "Are you ready to optimize your Risk<br />Intelligence and Collections<br />capabilities for Profitable Growth?",
  },
  {
    src: Frame3,
    title: "Collection Strategy <br /> Optimization",
    description:
      "Are you ready to optimize your Risk<br />Intelligence and Collections<br />capabilities for Profitable Growth?",
  },
  {
    src: FrameI4,
    title: "Recovery Optimization",
    description:
      "Are you ready to optimize your Risk<br />Intelligence and Collections<br />capabilities for Profitable Growth?",
  },
];
const scrollRow = [
  {
    id: 0,
    rowText: "Reduce Man Hours",
    rowImage: scrollCircle,
  },
  {
    id: 1,
    rowText: "Speedy Process",
    rowImage: scrollCircle,
  },
  {
    id: 2,
    rowText: "Improved Strategies",
    rowImage: scrollCircle,
  },
  {
    id: 3,
    rowText: "Faster Recoveries",
    rowImage: scrollCircle,
  },
  {
    id: 4,
    rowText: "Reduce Man Hours",
    rowImage: scrollCircle,
  },
];

const jsonData = [
  {
    title: "Banks",
    countImage: fpsimage,

    description:
      "Drive sustainable growth and profitability with our tailored services.",
  },
  {
    title: "Financing Firms",
    countImage: fpsimage,
    description:
      "Recover outstanding debts efficiently with our AI/ML platform.",
  },
  {
    title: "Digital Lenders",
    countImage: fpsimage,
    description:
      "Optimize financial performance and mitigate risks with advanced capabilities.",
  },
];

const data = [
  {
    bgColor: "#F2EFFE",
    text: "OPTIMIZED",
    textColor: "#5C4E8E",
  },
  {
    bgColor: "#FFF0D9",
    text: "ADAPTIVE",
    textColor: "#AC2631",
  },
  {
    bgColor: "#E2F3FF",
    text: "SECURE",
    textColor: "#236695",
  },
  {
    bgColor: "#E0FFD6",
    text: "INTELLIGENT",
    textColor: "#2D8410",
  },
  {
    bgColor: "#DCD6FF",
    text: "SIMPLIFIED",
    textColor: "#2E2356",
  },
];
const aboutJsonData = [
  {
    cardImage: MissionImage,
    heading: "Mission",
    description:
      "Are you ready to optimize your Risk Intelligence and Collections capabilities for Profitable Growth?",
  },
  {
    cardImage: ValuesImage,
    heading: "Values",
    description:
      "Are you ready to optimize your Risk Intelligence and Collections capabilities for Profitable Growth?",
  },
  {
    cardImage: VisionImage,
    heading: "Vision",
    description:
      "Are you ready to optimize your Risk Intelligence and Collections capabilities for Profitable Growth?",
  },
];

const founderData = [
  {
    title: "MEET THE FOUNDER",
    name: "Amit Chandola",
    description1:
      "20+ years of global experience in Credit and collections across US, India, Hong Kong and the Asia Pacific markets",
    description2:
      "In his most recent role, Amit was Asia Head of Credit Control Services for a Global Bank, with scope spanning USD100+ Billion in consumer lending assets across 16 markets",
  },
];

const cardData = [
  {
    image: endtoendImage,
    title: "End-to-end risk mitigation",
    description:
      "Seamless risk management through comprehensive strategies and leveraging AI/ML to drive optimal decisions at the right time.",
    width: "w-[434px]",
  },
  {
    image: DynamicStrategiesImage,
    title: "Dynamic Strategies",
    description:
      "Algorithms to tailor dynamic strategies that adapt to the unique risk characteristics of each client’s portfolio and customers.",
    width: "w-[770px]",
  },
  {
    image: ProfitOptimizationImage,
    title: "Profit Optimization",
    description:
      "From optimizing collection strategies to identifying revenue streams, we help you make smarter decisions that drive results.",
    width: "w-[351px]",
  },
  {
    image: DecisionSciencePoweredImage,
    title: "Decision Science Powered",
    description:
      "Are you ready to optimize your Risk Intelligence and Collections capabilities for Profitable Growth?",
    width: "w-[392px]",
  },
  {
    image: EfficiencyEnhancementImage,
    title: "Efficiency Enhancement",
    description:
      "Our AI/ML platform streamlines workflows, automates repetitive tasks, and empowers your team to focus on what matters most – growing your business.",
    width: "w-[417px]",
  },
];

const Landingpage = () => {
  const [activePage, setActivePage] = useState("Product");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();
  const handleProductClick = () => {
    setActivePage("Product");
  };
  const handleAboutClick = () => {
    setActivePage("About");
  };

  // const navigateToContactUs = () => {
  //   navigate("/contactus");
  // };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="overflow-hidden w-full h-fit overflow-x-auto ">
        <div className="w-full">
          <div className="flex sm:justify-around items-center p-3 px-2 sm:px-16">
            <div className="flex items-center">
              <img src={indilabslogolandingpage} alt="logo" className="" />
            </div>
            <div className="flex gap-2 sm:gap-16 w-full items-center justify-center">
              <div className="text-[#000000]  font-[400] sm:font-[500] text-[16px] font-['DM Sans']">
                <button onClick={handleProductClick}>Product</button>
              </div>
              <div className="text-[#000000] font-[400] sm:font-[500] text-[16px] font-['DM Sans']">
                <button
                  onClick={handleAboutClick}
                  style={{
                    borderBottom:
                      activePage === "About" ? "2px solid #000000" : "none",
                  }}
                >
                  {" "}
                  About
                </button>
              </div>
            </div>
            <div
              className="hidden sm:flex bg-[#E84855] items-center gap-2 px-1 sm:px-4 py-2 rounded-3xl cursor-pointer"
              onClick={openModal}
            >
              <div className="text-[#FFFFFF] flex self-start font-[500] w-[100px] text-[16px] font-['DM Sans']">
                Book a Demo
              </div>
              <div className="w-[20px] h-[20px]">
                <img src={calendarMonth} alt="calendaricon" className="" />
              </div>
            </div>
            <div
              className="flex sm:hidden fixed bottom-10 right-0 bg-[#E84855] items-center gap-2 px-4 py-2 rounded-3xl z-50"
              onClick={openModal}
            >
              <div className="text-[#FFFFFF] flex self-start font-[500] text-[16px] font-['DM Sans']">
                Book a Demo
              </div>
              <div className="w-[20px] h-[20px]">
                <img src={calendarMonth} alt="calendaricon" className="" />
              </div>
            </div>
          </div>
        </div>
        {activePage === "Product" && (
          <>
            <div className=" w-full bg-[#FFEEEE]  bg-gradient-to-b from-[#FFEEEE] to-[#FFFFFF]">
              <div className="flex justify-between flex-wrap lg:flex-nowrap items-center xl:items-center lg:flex lg:flex-row lg:items-center  md:flex-col md:items-center sm:flex-col sm:items-center  px-3 py-16 xl:px-32 lg:px-22 ml-0 sm:ml-0 lg:-ml-16 xl:ml-0 md:px-18 sm:px-3">
                <div className="flex flex-col gap-2 justify-center items-center xl:items-start lg:items-start md:items-center sm:items-center ">
                  <div className="text-[#000000] font-[600] text-center xl:text-start lg:text-start md:text-center sm:text-center text-[22px] xl:text-[52px] lg:text-[52px] md:text-[42px] sm:text-[22px] font-['DM Sans'] px-1 xl:px-16 lg:px-16 md:px-14 sm:px-0">
                    The Business of Lending is Transforming
                  </div>
                  <div className="text-[#535353] font-[400] text-center xl:text-start lg:text-start md:text-center sm:text-center text-[12px] xl:text-[24px] lg:text-[24px] md:text-[18px] sm:text-[12px] font-['DM Sans'] tracking-tight px-1 xl:px-16 lg:px-16 md:px-14 sm:px-0">
                    Are your Risk Intelligence and Collection Capabilities
                    optimized for{" "}
                    <span className="text-[#AC2631] font-[700] italic ">
                      {" "}
                      Profitable Growth?
                    </span>
                  </div>
                  <div
                    className="w-[144px] flex items-center xl:items-center lg:item-center  md:items-center sm:items-center px-6 py-2 rounded-3xl text-[#FFFFFF] mt-6 ml-0 xl:mt-16 xl:ml-16 lg:mt-16 lg:ml-16 md:mt-12 md:ml-12 sm:mt-6 sm:ml-0"
                    style={{ background: "#E84855" }}
                  >
                    Explore More
                  </div>
                </div>
                <div className="flex justify-center w-full xl:w-[640px] lg:w-[640px] sm:w-[600px] ml-4 lg:-ml-2 xl:ml-6 mt-10 lg:mt-0 md:ml-6 sm:ml-4 py-2">
                  <div className="w-full h-full xl:w-[640px] lg:w-[640px] md:w-[600px] sm:w-full  shadow-[0_4px_12px_2px_rgba(232,72,85,0.15)] rounded-[16px] h xl:h-[490px] lg:h-[490px] md:h-[490px] sm:h-[490px] z-1">
                    <div className="z-0">
                      <img
                        src={landingpagedtopimage}
                        alt="dashboardimage"
                        // style={{ height: "490px", borderRadius: "16px" }}
                        className="w-full h-full lg:w-[640px] lg:h-[490px] md:w-[600px] md:h-[490px] sm:w-full sm:h-[490px] rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* <div className="w-[360px] relative top-36 right-36 h-[270px] z-10">
                <img
                  src={subtractTwo}
                  alt="calendaricon"
                  className="w-[50px] h-[50px] absolute top-[7rem] right-[17rem] z-0 squareImage"
                />
                <img
                  src={landingpagestrategy}
                  alt="dashboardimage"
                  className=""
                />
                <img
                  src={subtract}
                  alt="calendaricon"
                  className="w-[50px] h-[50px] absolute left-[242px] bottom-10"
                />
              </div> */}
                  {/* <div className="">
            </div> */}
                </div>
              </div>

              <div className="flex justify-center items-center -mt-4 pb-4">
                <img src={separationline} alt="separation" />
              </div>

              <section className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-[300px]  sm:w-[510px] md:w-[520px] lg:w-[900px] xl:w-[1048px] 2xl:w-[1348px] h-[350px]  sm:h-[340px] md:h-[320px] lg:h-[385px] bg-[#E84855] rounded-r-[20px] rounded-l-[20px] flex flex-col items-center">
                    {content.map((item, index) => (
                      <div
                        key={index}
                        className="text-center flex flex-col items-center pt-4  sm:pt-8 md:pt-8 lg:pt-16"
                      >
                        <div className=" p-1  sm:p-2 md:p-3  mb-2 sm:mb-3 md:mb-1 lg:mb-4 w-[250px] sm:w-[300px]  rounded-[40px] bg-white text-[#AC2631] font-['DM Sans'] font-bol d text-[20px] flex items-center justify-center">
                          {item.title}
                        </div>
                        <div className="w-[290] sm:w-[480px]  md:w-[500px] lg:w-[800px] h-[150px] sm:h-[95px]  md:h-[80px] lg:h-[90px] rounded-[40px] text-[#FFFFFF] font-['DM Sans'] font-[700] text-[20px]">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className=" p-4 absolute top-[65%] hidden lg:flex w-full gap-4 xl:gap-6 2xl:gap-12 justify-center overflow-hidden ">
                    {dataCards.map((item, index) => (
                      <div
                        key={index}
                        className="h-full lg:h-[330px] xl:h-[350px] 2xl:h-[370px]  w-full max-w-[300px] xl:max-w-[300px] 2xl:max-w-[348px] bg-white rounded-[10px] overflow-hidden flex flex-col items-center shadow-lg"
                      >
                        <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2
                          className="w-full text-center font-['DM Sans'] font-[700] text-[20px] p-2 border-l border-r text-[#000000]"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h2>
                        <p
                          className="w-full flex-grow p-2 border-l border-r border-b font-['DM Sans'] font-[400] text-[14px] text-[#000000] text-center"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
                      </div>
                    ))}
                  </div>

                  <div className=" p-4 absolute top-[65%] flex sm:hidden object-cover justify-center items-center">
                    <div className="w-[330px] h-[390px] rounded-[10px] shadow-lg">
                      <CarouselDefault dataCards={dataCards} numPage={1} />
                    </div>
                  </div>
                  <div className=" p-4 absolute top-[65%] hidden sm:flex lg:hidden object-cover justify-center items-center">
                    <div className="w-[640px] h-[380px]  rounded-[10px] shadow-lg">
                      <CarouselDefault dataCards={dataCards} numPage={2} />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex relative flex-col items-center  gap-4 mt-96 lg:mt-80">
              <button className="bg-[#E84855] text-[#FFFFFF] font-['DM Sans'] font-[500] py-2 px-4 rounded-[100px]">
                Get in Touch
              </button>
              <img src={FrameImage} alt="" className="h-[463px] w-full p-5" />
            </div>

            <div
              className=" w-[100%] bg-[#FBFBFB] h-[100%] flex flex-col p-4 items-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${YourSolutionsforporfitablegrowthImage})`,
              }}
            >
              <h1 className="font-['DM Sans'] font-[700] text-[32px] text-[#AC2631] text-center mt-9">
                Active Risk Management for Profitable Growth
              </h1>
              <p className="font-['DM Sans'] w-full lg:w-[873px] md:w-[600px] sm:w-[450px] font-[400] text-[18px] text-[#888686] text-center mt-3">
                Unlike other platforms, we cover all areas of the lending
                business under one roof, ensuring that you have everything you
                need to thrive in today's competitive landscape.
              </p>
              <div className="flex flex-col flex-wrap justify-between lg:flex lg:flex-row lg:justify-between  md:flex-wrap md:justify-start sm:flex-col gap-12 lg:gap-12 md:gap-6 sm:gap-4 w-full xl:w-[1280px] lg:w-[1024px] md:w-[800px] sm:w-[400px] mt-20">
                {data.map((each, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 lg:flex-row lg:gap-3 md:gap-3 sm:gap-2 sm:w-full lg:w-auto md:w-auto items-center "
                  >
                    <div
                      className="rounded-3xl w-[190px] text-center p-2"
                      style={{ backgroundColor: each.bgColor }}
                    >
                      <div
                        className="text-['DM Sans'] font-[500] text-[17px]"
                        style={{ color: each.textColor }}
                      >
                        {each.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="gap-11 flex flex-wrap justify-center items-center w-full mb-20 mt-20">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className={`h-[251px] bg-[white] w-full sm:w-[450px] md:w-[650px] lg:${card.width} lg:gap-6 lg:p-6 md:gap-4 md:p-4 sm:p-2 sm:gap-2 gap-6 p-6 rounded-lg shadow-md shadow-[#e8485540] flex flex-col justify-center items-start`}
                  >
                    <img
                      src={card.image}
                      alt=""
                      className="w-[52px] h-[52px]"
                    />
                    <div className="gap-3 lg:gap-3 md:gap-2 sm:gap-1">
                      <h2 className="text-['DM Sans'] font-[700] lg:text-[24px] md:text-[18px] sm:text-[14px] text-[#000000]">
                        {card.title}
                      </h2>
                      <p className="text-[#535353] text-['DM Sans'] font-[400] text-[16px] leading-7 tracking-wider">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full items-center flex flex-col justify-center h-full mt-10 px-32 xl:px-32 lg:px-32 md:px-32 max-sm:px-12 sm:px-12">
              <div className="bg-[#E84855] w-full xl:w-full lg:w-full md:w-full sm:w-full h-full flex flex-col items-center rounded-xl p-2 lg:p-12 md:p-20 sm:p-2 ">
                <div className="flex flex-col  items-center">
                  <p className="w-full 3font-['DM Sans'] font-[700] text-[18px] lg:text-[32px] md:text-[28px] sm:text-[18px] text-[#ffffff] text-center sm:px-3">
                    Built for lenders, big or small
                  </p>

                  <div className="px-22 flex flex-col 2xl:flex-row justify-between items-center 2xl:justify-between lg:items-center md:flex md:flex-col md:justify-between md:items-center sm:flex sm:flex-col sm:justify-between sm:items-center gap-6 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-6  mt-10">
                    {jsonData.map((each, index) => (
                      <div
                        key={index}
                        className="w-full h-full xl:w-[383px] xl:h-[153px] lg:w-[383px] lg:h-[153px] md:w-[383px] md:h-[153px] sm:w-full sm:h-full  rounded-xl gap-5 py-4 px-5 xl:px-5 lg:px-5 md:px-5 sm:px-5 flex flex-wrap items-center sm:mt-2 lg:mt-0 md:mt-0 mt-2"
                      >
                        <div className="bg-[#FFFFFF] h-[29px] w-[29px] lg:w-[49px] lg:h-[49px] md:w-[49px] md:h-[49px] sm:w-[29px] sm:h-[29px]  rounded-full flex items-center justify-center">
                          <img src={each.countImage} alt="fpsicon" />
                        </div>
                        <h2 className="font-['DM Sans'] font-[700] text-[#ffffff] text-[18px] lg:text-[22px] md:text-[22px] sm:text-[18px]  ">
                          {each.title}
                        </h2>
                        <p className="font-['DM Sans'] font-[400] text-[#ffffff] text-[14px] lg:text-[18px] md:text-[18px] sm:text-[12px]  tracking-wide">
                          {each.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activePage === "About" && (
          <>
            <div className="relative">
              <div
                className="w-full border-t-2 flex flex-col items-center gap-4 h-[870px] sm:h-[720px] md:h-[700px] lg:h-[650px] bg-cover bg-center mb-10"
                style={{
                  backgroundImage: `url(${YourSolutionsforporfitablegrowthImage})`,
                }}
              >
                <p className="text-['DM Sans'] text-[#000000] font-[700] text-[32px] w-full  text-center mt-16">
                  Fintech founded by experts in Risk management and collections
                  with <br /> decades of experience across Global markets.
                </p>
                <p className="text-['DM Sans'] text-[#000000] font-[400] text-[18px]  w-full  text-center mt-1">
                  We build solutions that harness the exponential power of Data,
                  Cloud Computing and
                  <br /> AI/ML to help businesses optimize risks and achieve
                  profitable growth.
                </p>
                <button className="bg-[#E84855] text-[#FFFFFF] font-['DM Sans'] font-[500] py-2 px-5 rounded-[100px] mt-2">
                  Get in Touch
                </button>
              </div>

              <div className="absolute top-[70%] inset-x-0 mx-auto hidden lg:flex gap-12 items-center w-full justify-center z-10 -mt-20  ">
                {aboutJsonData.map((each, index) => (
                  <div
                    key={index}
                    className="bg-white h-[360px] lg:w-[310px] xl:w-[384px] rounded-[10px] gap-4 py-5 px-4 flex flex-col items-center justify-center shadow-[0_4px_6px_2px_#00000024]"
                  >
                    <img
                      src={each.cardImage}
                      alt={each.heading}
                      className="w-[48px] h-[48px] mt-12"
                    />
                    <p className="text-[#000000] font-['DM Sans'] font-[700] text-[24px] leading-8 text-center mt-4">
                      {each.heading}
                    </p>
                    <p className="text-[#000000] font-['DM Sans'] font-[500] text-[16px] leading-[30px] tracking-wide w-[80%]  text-center">
                      {each.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="absolute top-[80%] inset-x-0 mx-auto flex sm:hidden gap-12  items-center w-full justify-center z-10 -mt-20 ">
                <div className="w-[310px] ">
                  <CarouselAbout aboutJsonData={aboutJsonData} numPage={1} />
                </div>
              </div>

              <div className="absolute top-[75%] inset-x-0  mx-auto hidden sm:flex lg:hidden gap-12  items-center w-full  z-10 -mt-20 tomediaMDWidth tomediaMD1Width object-cover justify-center">
                <div className=" sm:w-[640px] md:w-[768px] ">
                  <CarouselAbout aboutJsonData={aboutJsonData} numPage={2} />
                </div>
              </div>
            </div>
            {/* <div className="relative flex flex-col items-center bg-[#E84855] w-full h-[679px] pt-40 z-0 -mt-36">
              <div className="flex flex-col md:flex-row items-center gap-6 pr-10 mt-10">
                <div className="flex justify-center">
                  <img
                    src={FounderImage}
                    alt="founder"
                    className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg pr-10"
                  />
                </div>
                <div className="flex flex-col items-center gap-6">
                  {founderData.map((founder, index) => (
                    <div
                      key={index}
                      className="text-center max-w-2xl mx-auto p-4 mt-20"
                    >
                      <h2 className="w-[199px] h-[42px] font-['DM Sans'] font-[700] text-[14px] rounded-[40px] bg-[#FFEEEE] gap-[10px] text-[#000000] pt-3 mb-2">
                        {founder.title}
                      </h2>
                      <h3 className="text-start mb-4 pb-10 mt-6 w-[288px] h-[72px] font-['DM Sans'] font-[700] text-[40px] text-[#FFFFFF]">
                        {founder.name}
                      </h3>
                      <p className="text-start mb-2 pt-2 w-[90%] sm:w-[843px] h-[80px] font-['DM Sans'] font-[400] text-[20px] gap-1 text-[#FFFFFF]">
                        {founder.description1}
                      </p>
                      <p className="text-start w-[90%] sm:w-[843px] h-[180px] font-['DM Sans'] font-[400] text-[20px] text-[#FFFFFF]">
                        {founder.description2}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="relative flex flex-col items-center bg-[#E84855] pt-40 z-0 -mt-36 w-full h-full xl:h-[679px] lg:h-full md:h-full sm:h-full ">
              <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-1 2xl:gap-6 xl:pr-20 2xl:pr-10 pr-0 mt-10">
                <div className="flex justify-center">
                  <img
                    src={FounderImage}
                    alt="founder"
                    className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg xl:pr-10 pr-0"
                  />
                </div>
                <div className="flex flex-col items-center gap-4 xl:gap-6 lg:gap-5 md:gap-5 sm:gap-4">
                  {founderData.map((founder, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center xl:items-start lg:items-center md:items-center sm:items-center max-w-2xl mx-auto p-4 mt-2 xl:mt-20 ml-0 xl:-ml-[5.5rem] 2xl:ml-0 lg:mt-0 md:mt-2 sm:mt-2"
                    >
                      <h2 className="xl:text-center text-center w-[199px] h-[42px] font-['DM Sans'] font-[700] text-[14px] rounded-[40px] bg-[#FFEEEE] gap-[10px] text-[#000000] pt-3 mb-2">
                        {founder.title}
                      </h2>
                      <h3 className="xl:text-start text-center mb-1 xl:mb-4 lg:mb-2 md:mb-1 sm:mb-1 pb-1 xl:pb-10 lg:pb-5 md:pb-2 sm:pb-1  mt-1 xl:mt-6 lg:mt-4 md:mt-2 sm:mt-1 w-full h-[30px] xl:w-[288px] xl:h-[72px] lg:w-[288px] lg:h-[72px] md:w-[250px] md:h-[72px] sm:w-[180px] sm:h-[30px] font-['DM Sans'] font-[700] text-[20px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[20px] text-[#FFFFFF]">
                        {founder.name}
                      </h3>
                      <p className="xl:text-start text-center mb-2 pt-2 w-full h-[40px] xl:w-[843px] xl:h-[80px] lg:w-[600px] lg:h-[80px] md:w-[600px] md:h-[72px] sm:w-[400px] sm:h-[40px] font-['DM Sans'] font-[400] text-[12px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[14px] gap-1 text-[#FFFFFF]">
                        {founder.description1}
                      </p>
                      <p className="xl:text-start text-center pt-2 sm:pt-3 w-full h-[150px] xl:w-[843px] xl:h-[180px] lg:w-[600px] lg:h-[180px] md:w-[600px] md:h-[72px] sm:w-[400px] sm:h-[40px]  font-['DM Sans'] font-[400] text-[12px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[14px] text-[#FFFFFF]">
                        {founder.description2}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="flex flex-col items-center gap-4 mt-16 mb-16">
          <div className="font-['DM Sans'] font-[700] text-[36px] text-[#000000] text-center">
            Ready to Grow Profits with Indilabs.ai?
          </div>
          <div className="font-['DM Sans'] font-[400] text-[18px] text-[#000000] text-center min-w-full lg:w-[664px]">
            Are you ready to optimize Risk Intelligence And Collections
            Capabilities <br /> for Profitable Growth?
          </div>
          <button className="bg-[#E84855] text-[#FFFFFF] font-['DM Sans'] font-[500] py-2 px-4 rounded-[100px] mt-16">
            Get in Touch
          </button>
        </div>
        <div className="p-6 sm:p-[3rem] flex flex-col gap-6 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3 bg-[#FFEEEE]">
          <footer className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3 mb-8  text-center sm:text-left">
            <div className="w-full sm:w-1/5 flex justify-center sm:justify-start">
              <img src={indilabsImage} alt="" />
            </div>
            <div className="w-full sm:w-1/5">
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3">
                <p className="text-[#AC2631] text-[22px] sm:text-[24px] font-[700] font-['DM Sans'] leading-6">
                  Explore
                </p>
                <p className="font-['DM Sans'] font-[400] text-[16px] sm:text-[18px] text-[#000000] leading-5">
                  Product
                </p>
                <p className="font-['DM Sans'] font-[400] text-[16px] sm:text-[18px] text-[#000000] leading-5">
                  Why Indilabs.ai
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/5">
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3">
                <p className="text-[#AC2631] text-[22px] sm:text-[24px] font-[700] font-['DM Sans'] leading-6">
                  Company
                </p>
                <p className="font-['DM Sans'] font-[400] text-[16px] sm:text-[18px] text-[#000000] leading-5">
                  About us
                </p>
                <p className="font-['DM Sans'] font-[400] text-[16px] sm:text-[18px] text-[#000000] leading-5">
                  Features
                </p>
                <p className="font-['DM Sans'] font-[400] text-[16px] sm:text-[18px] text-[#000000] leading-5">
                  Privacy policy
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/5">
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3">
                <p className="text-[#AC2631] text-[22px] sm:text-[24px] font-[700] font-['DM Sans'] leading-6">
                  Get in touch
                </p>
                <p className="font-['DM Sans'] font-[400] text-[16px] sm:text-[18px] text-[#000000] leading-5">
                  Reach out to us for any assistance and support
                </p>
                <div className="flex flex-col items-center sm:flex-row sm:justify-start gap-1 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <img
                      src={MailImage}
                      alt=""
                      className="w-[15px] h-[12px] sm:w-[18px] sm:h-[15px] -mt-4 sm:-mt-4 sm:ml-2 md:-mt-4 md:ml-2 lg:mt-0 lg:ml-0"
                    />
                    <p className="font-['DM Sans'] font-[400] text-[16px] sm:text-[18px] text-[#000000] leading-5">
                      info@indilabs.ai
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3">
                  <div className="flex items-center justify-center gap-1">
                    <img
                      src={CallImage}
                      alt=""
                      className="w-[15px] h-[12px] -mt-4 ml-2 sm:-mt-4 sm:ml-2 md:-mt-4 md:ml-2 lg:mt-0 lg:ml-0 sm:w-[18px] sm:h-[15px] "
                    />
                    <p className="font-['DM Sans'] font-[400] text-[16px] sm:text-[18px] text-[#000000] leading-5">
                      +919618111778
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/5 flex justify-center sm:justify-end">
              <img src={LinkedinImage} alt="" />
            </div>
          </footer>
          <div className="flex w-full justify-center flex-col items-center relative top-12">
            <div className="bg-[#E1E1E1] w-full sm:w-[90%] text-center border"></div>
            <div className="text-center text-[#B5B5B5] font-['DM Sans'] text-[14px] sm:text-[16px] font-[400] leading-4 tracking-wide mt-3 sm:mt-5 mb-3 sm:mb-5">
              Copyright @2024 Company All Rights Reserved
            </div>
          </div>
        </div>
        {modalIsOpen ? (
          <ConatactForm
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            closeModal={closeModal}
            openModal={openModal}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Landingpage;
