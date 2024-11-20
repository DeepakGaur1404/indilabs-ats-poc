import React from "react";


type Props = {text:string};

const Labels = (props: Props) => {
  return (
    <div className="h-[25px] px-2 py-1 bg-white rounded border border-slate-400 justify-center items-center gap-1 inline-flex">
      <div className="text-black text-[13px] font-normal">
        {props.text}
      </div>
    </div>
  );
};

export default Labels;
