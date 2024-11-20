import React from "react";
import { IoIosArrowForward, IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const Hotspot = () => {
  return (
    <div className="w-full h-[354px] p-3 bg-white rounded-xl shadow-md   flex-col justify-start items-start inline-flex">
      <div className="self-stretch grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-between items-center gap-2 inline-flex">
          <div className="text-black text-sm font-medium">Hotspots</div>
          <Link
            to="/diagnostics"
            className="flex text-[#6750a4] items-center text-xs justify-center gap-2"
          >
            Review
            <span>
              <IoIosArrowForward className="text-[#6750a4] w-4 h-4" />
            </span>
          </Link>
        </div>
        <div className="self-stretch grow shrink basis-0 flex-col justify-center items-start  flex">
          <div className="self-stretch px-3 py-3 rounded-lg border-b py-3justify-between items-center gap-10 inline-flex">
            <div className="text-black text-sm font-normal w-14 whitespace-nowrap ">
              Entry %
            </div>
            <div className="w-full flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-12 flex">
                  <div className="text-black text-xs font-normal">6%</div>
                  <div className="text-black text-xs font-normal relative">
                    4.2%
                    <IoMdArrowDropup
                      className="text text-xs absolute -bottom-7  left-1/2 transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                  </div>{" "}
                </div>
                <div className="text-black text-xs font-normal">3%</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-full h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E]  rounded-xl" />
              </div>
            </div>
          </div>
          <div className="self-stretch px-3 py-3 rounded-lg border-b justify-between items-center gap-10 inline-flex">
            <div className=" text-black text-sm font-normal w-14 whitespace-nowrap">
              2+%
            </div>
            <div className="w-full flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-10 flex">
                  <div className="text-black text-xs font-normal">7%</div>
                  <div className="text-black text-xs font-normal relative">
                    5.3%
                    <IoMdArrowDropup
                      className="text text-xs absolute -bottom-7  left-1/2 transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                  </div>{" "}
                </div>
                <div className="text-black text-xs font-normal">3%</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-full h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
              </div>
            </div>
          </div>
          <div className="self-stretch px-3 py-3 rounded-lg border-b justify-between items-center gap-10 inline-flex">
            <div className=" text-black text-sm font-normal  w-14">1-2%</div>
            <div className="w-full flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-9 flex">
                  <div className="text-black text-xs font-normal">42%</div>
                  <div className="text-black text-xs font-normal relative">
                    38%
                    <IoMdArrowDropup
                      className="text text-xs absolute -bottom-7  left-1/2 transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                  </div>{" "}
                </div>
                <div className="text-black text-xs font-normal">20%</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-full h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
              </div>
            </div>
          </div>
          <div className="self-stretch px-3 py-3 rounded-lg border-b justify-between items-center gap-10 inline-flex">
            <div className="text-black text-sm font-normal  w-14">Bkt3</div>
            <div className="w-full flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-10 flex">
                  <div className="text-black text-xs font-normal">350</div>
                  <div className="text-black text-xs font-normal relative">
                    310{" "}
                    <IoMdArrowDropup
                      className="text text-xs absolute -bottom-7  left-1/2 transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                  </div>
                </div>
                <div className="text-black text-xs font-normal">250</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-full h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
              </div>
            </div>
          </div>

          <div className="self-stretch px-3 py-3 rounded-lg justify-between items-center gap-10 inline-flex">
            <p className=" text-black text-sm font-normal w-14 whitespace-nowrap">
              RPC %
            </p>
            <div className="w-full flex-col justify-center items-start inline-flex">
              <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                <div className="justify-start items-start gap-16 flex">
                  <div className="text-black text-xs font-normal">8%</div>

                  <div className="text-black text-xs font-normal relative">
                    10%
                    <IoMdArrowDropup
                      className="text text-xs absolute -bottom-7  left-1/2 transform -translate-x-1/2"
                      style={{
                        width: "20px",
                        height: "25px",
                      }}
                    />
                  </div>
                </div>
                <div className="text-black text-xs font-normal">15%</div>
              </div>
              <div className="w-full h-[18px] relative">
                <div className="w-full h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotspot;
