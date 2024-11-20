import { Field, useFormikContext } from "formik";
import React, { ChangeEvent, useState } from "react";
import { CiLock } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

type Props = {
  type?: string | null;
  placeholder?: string | null;
  name: string | null;
  value?: string | null;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  labelText?: string | null;
  validation: boolean | null | undefined;
  errText: string | null;
  isEmail: boolean | null;
  isContact: boolean | null;
  showPasswordToggle?: boolean;
  textColor: string | null;
};

const Input = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { values, setFieldValue } = useFormikContext<any>();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col relative`}>
      {props.name && !props.value && (
        <label
          htmlFor={props.name}
          className={`font-normal leading-normal tracking-tight -mb-7 text-zinc-700 ${
            props.isContact ? "left-[25px]" : "left-[54px]"
          } text-base`}
          style={{
            position: "absolute",
            top: "23px",
            // left: "54px",
            transition: "top 0.2s ease-in-out",
            fontFamily: "DM Sans",
            fontSize: "16px",
            color: "#4a5568",
            cursor: "pointer",
          }}
        >
          {props.labelText ? props.labelText : "Email address"}
          {props.isEmail ? (
            <div className="text-gray-300 text-xl relative bottom-[22px] right-9">
              <MdAlternateEmail />
            </div>
          ) : props.isContact ? null : (
            <>
              <div className="text-gray-300 text-xl relative bottom-[22px] right-[34px]">
                <CiLock />
              </div>
            </>
          )}
        </label>
      )}
      <Field
        type={
          props.type === "password"
            ? showPassword
              ? "text"
              : "password"
            : props.type
        }
        id={props.name}
        name={props.name}
        style={{
          paddingRight: props.showPasswordToggle ? "50px" : "0px",
        }}
        className="w-full border border-zinc-500 px-4 py-5 rounded text-base outline-0 text-xl placeholder:text-base placeholder:text-zinc-800"
        // placeholder={props.name && !props.value ? props.placeholder : ""}
        autoComplete="off"
        value={props.value}
        onChange={props.onChange}
      />

      {props.showPasswordToggle && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-6 right-4 z-10 h-6 w-6 text-[20px] text-black-400 cursor-pointer "
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      )}
      {props.validation && (
        <div className="flex flex-col items-center self-start">
          <div
            className={`text-[14px] font-medium px-3 min-h-[22px] self-start flex justify-start items-center text-[${props.textColor}]`}
          >
            {props.errText}
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
