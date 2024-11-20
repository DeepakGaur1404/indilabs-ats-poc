import React, { useState } from "react";

type Props = {
  setTreatment: (value: any) => void;
  showSequence?: any;
};

function TestId(props: Props) {
  const { showSequence, setTreatment } = props;
  const [clickedCreateBtn, setClickedCreateBtn] = useState(false);
  const [data, setData] = useState<any>({});

  const onClickCallSequence = () => {
    setTreatment(data);
    setClickedCreateBtn(true);
    showSequence();
  };

  return (
    <div className="min-w-[300px] p-4 flex flex-row gap-5 border-2 bg-white border-gray-300 rounded-lg flex-wrap -ml-3 lg:ml-3">
      <div className="mb-1 flex flex-row items-center space-x-2">
        <label
          htmlFor="testId"
          className="mr-2 font-[500] font-['calibri' !important] text-[15px] text-[#000000]"
        >
          Test ID:
        </label>
        <input
          onChange={(e) => setData({ ...data, segment: e.target.value })}
          type="text"
          className="border-2 text-[16px] text-[#7f7f7f] border-[#D9D9D9] rounded p-2 rounded-lg w-32"
          placeholder="Challenger 3"
        />
      </div>
      <div className="mb-1 flex flex-row items-center space-x-2">
        <label
          htmlFor="target"
          className="mr-2 font-[500] font-['calibri' !important] text-[15px] text-[#000000]"
        >
          Target Vol:
        </label>
        <select
          name="target"
          id="target"
          className="w-[140px] border-2 py-2 px-12 rounded-lg text-[#7f7f7f] border-[#D9D9D9]  "
          onChange={(e) => setData({ ...data, volume: e.target.value })}
        >
          <option value="10%">10%</option>
          <option value="20%">20%</option>
          <option value="30%">30%</option>
          <option value="40%">40%</option>
          <option value="50%">50%</option>
        </select>
      </div>
      <div className="mb-1 flex flex-row items-center space-x-2">
        <label
          htmlFor="date"
          className="mr-2 font-[500] font-['calibri' !important] text-[15px] text-[#000000]"
        >
          Start Date:
        </label>
        <input
          type="date"
          name="date"
          id="date"
          defaultValue="2023-10-02"
          className="border-2 p-2 rounded-lg w-28 text-[#7f7f7f] border-[#D9D9D9] "
          onChange={(e) => setData({ ...data, startDate: e.target.value })}
        />
      </div>
      <div className="mb-1 flex flex-row items-center space-x-2">
        <button
          onClick={onClickCallSequence}
          className={`w-[140px] font-['calibri' !important] text-[#7f7f7f] border-2 border-gray-300 py-2 px-6  rounded-lg  ${
            clickedCreateBtn && "bg-violet-300"
          }`}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default TestId;
