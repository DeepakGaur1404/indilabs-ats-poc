import React from "react";

type Props = {
  children: string;
  to: string;
};

const Anchor = (props: Props) => {
  return (
    <a href={props.to} className="text-slate-500 text-xs font-medium">
      {props.children}
    </a>
  );
};

export default Anchor;
