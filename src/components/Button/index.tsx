import React from "react";
type buttonType = "button" | "submit" | "reset" | undefined;
type Props = {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  type?: buttonType;
  buttonDisable?: boolean;
};

const Button = ({ type = "button", ...props }: Props) => {
  const buttonStyle = {
    background: "#6750A4",
    width: props.width || "auto",
    height: props.height || "auto",
    fontSize: props.fontSize || "font-medium",
    padding: props.padding || "16px",
    borderRadius: props.borderRadius || "4px",
  };
  return (
    <button
      onClick={props.onClick}
      style={buttonStyle}
      className="justify-center items-center text-white text-xl font-medium"
      type={type}
      disabled={props.buttonDisable}
    >
      {props.children}
    </button>
  );
};

export default Button;
