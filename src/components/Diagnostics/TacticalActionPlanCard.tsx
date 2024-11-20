import React from "react";

const TacticalActionPlanCard: React.FC = () => {
  return (
    <article className="w-full  p-4 bg-white rounded-xl shadow flex flex-col justify-start items-start gap-4">
      <section className="flex flex-col justify-start items-start gap-3 self-stretch h-28">
        <header className="flex justify-between items-center gap-10">
          <h2 className="text-black text-lg font-semibold font-['DM Sans']">
            Tactical Action Plan
          </h2>
          <div className="px-3 py-1 rounded-[100px] flex justify-center items-center gap-1">
            <button className="px-1 text-center text-slate-500 text-sm font-semibold leading-tight tracking-tight flex justify-center items-center font-['DM Sans']"  style={{ color: '#6750A4' }}>
              Create Tactical Plan
            </button>
          </div>
        </header>
        <div className="pl-4 flex justify-start items-center gap-1">
          <p className="text-black text-xs font-medium font-['DM Sans']">Review Q1 Vintage</p>
        </div>
        <div className="pl-4 flex justify-start items-center gap-1">
          <p className="text-black text-xs font-medium font-['DM Sans']">Review Segment C</p>
        </div>
        <div className="pl-4 flex justify-start items-center gap-1">
          <p className="text-black text-xs font-medium font-['DM Sans']">Review Capacity</p>
        </div>
      </section>
    </article>
  );
};

export default TacticalActionPlanCard;
