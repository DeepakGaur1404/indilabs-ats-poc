import { IoMdArrowDropup } from "react-icons/io";

const TemperatureGrapgh = () => {
  return (
    <div className="w-[282px] h-[66px] flex-col justify-center items-center inline-flex  p-3 bg-[#FFFFFF]">
      <div className="self-stretch justify-center items-center gap-[15px] inline-flex">
        <div className="flex justify-center items-center">
          {/* <div className="text-black text-sm font-medium font-['DM Sans']">
            6%
          </div> */}
          <div className="text-[#403176] text-[12px] font-[500] relative font-['DM Sans']">
           Health Score
            <IoMdArrowDropup
              className="text text-xs absolute -bottom-[34px] left-28  transform -translate-x-1/2"
              style={{
                width: "20px",
                height: "30px",
              }}
            />
          </div>
          {/* <div className="text-black text-sm font-medium font-['DM Sans']">
            3%
          </div> */}
        </div>
        {/* <div className="text-black text-sm font-medium font-['DM Sans']">3%</div> */}
      </div>
      <div className="w-full h-[18px] relative">
        <div className="w-full h-2 left-[-0.50px] tempLocationControl top-1 absolute  bg-gradient-to-r from-[#ED0E00] via-[#FFF509] to-[#09FF4E] rounded-xl" />
      </div>
    </div>
  );
};

export default TemperatureGrapgh;