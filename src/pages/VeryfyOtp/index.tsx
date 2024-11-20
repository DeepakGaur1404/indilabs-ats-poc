// import { Formik, Form, ErrorMessage, useFormik } from "formik";
// import * as Yup from "yup";
import frame from "../../assets/images/frame.svg";
// import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
// import { ErrorMessage } from 'formik'

const Otp = () => {
  const Navigate = useNavigate();
  const [otp, setOtp] = useState<number>();
  function generateOTP(length: number) {
    const charset = "0123456789"; // Characters from which OTP will be generated
    let otp = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      otp += charset[randomIndex];
    }

    return otp;
  }

  // Usage example: Generate a 6-digit OTP
  useEffect(() => {
    const newOtp = generateOTP(6);
    setOtp(Number(newOtp));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="text-white flex items-center justify-center h-72 lg:h-full w-full lg:w-2/4 ">
        <img
          src={frame}
          alt="Background"
          className="w-full w- h-full object-left-top object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col p-10 xl:px-24">
        <div>
          <h2 className="text-3xl font-medium">Enter OTP</h2>
          <p className="text-lg	 font-normal">
            Enter your details to create your account
          </p>
        </div>
        <div className="flex-1 w-full flex items-center justify-center mt-20 md:mt-0">
          <form className="w-full mt-5" style={{ maxWidth: "600px" }}>
            <div className="mb-5">
              <label htmlFor="#" className="text-lg font-medium	">
                Enter OTP
              </label>
              <input
                type={"text"}
                id="#"
                name={"otp"}
                className="w-full border border-zinc-500 px-4 py-5 mt-3 rounded text-base outline-0 text-xl placeholder:text-base placeholder:text-zinc-700"
                placeholder={"enter otp"}
                autoComplete="new-password"
                value={otp}
              />
            </div>
            <div className="mt-7">
              <Button onClick={() => Navigate("/")} width="100%">
                Verify
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
