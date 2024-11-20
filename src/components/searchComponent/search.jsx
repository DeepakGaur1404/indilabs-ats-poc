import { useState } from "react";
import SearchIcon from "../../assets/images/search-icon.png";
import { useNavigate} from "react-router-dom";
const data = [
  {
    fileName: "Personal Loans",
    fileSize: "201 MB",
    uploadDate: "19/05/23 23:12",
  },
  {
    fileName: "Credit Cards",
    fileSize: "202 MB",
    uploadDate: "19/05/23 23:12",
  },
  {
    fileName: "student Loans",
    fileSize: "203 MB",
    uploadDate: "19/05/23 23:12",
  },
  {
    fileName: "Auto Loanes",
    fileSize: "203 MB",
    uploadDate: "19/05/23 23:12",
  },
  {
    fileName: "BNPL",
    fileSize: "203 MB",
    uploadDate: "19/05/23 23:12",
  },
  {
    fileName: "Tom",
    fileSize: "203 MB",
    uploadDate: "19/05/23 23:12",
  },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  let navigate = useNavigate();
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = data.filter((item) =>
      item.fileName.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filtered);
  };
  console.log(filteredData);
  return (
    <div className=" flex flex-col items-start w-[616px] h-[368px]">
      <h1 className="text-black text-2xl font-medium">Your Files</h1>

      <div className=" mt-[16px] w-[435px] h-[42px]  bg-white rounded-[20px] justify-start shadow items-center  relative  ">
        <input
          type="text"
          className="w-full h-full border-0 pl-[50px] rounded-[20px] outline-none placeholder-violet-200 placeholder:text-xs "
          onChange={handleInputChange}
          value={searchTerm}
          placeholder="Search"
        />
        <img
          src={SearchIcon}
          className="absolute top-[50%] left-[16px] -translate-y-2/4"
          alt=""
        />
      </div>
      <div className="overData">
        <div className=" mt-[20px] w-[616px] h-[320px] bg-white rounded-xl shadow flex-col justify-start items-start inline-flex border-gray border-[1] mainDataTable">
          <div className="self-stretch px-5 py-3 bg-gray-100 rounded-tl-xl rounded-tr-xl border-b border-gray-100 justify-between items-start  inline-flex">
            <div className="w-40 text-zinc-700 text-xs font-normal leading-[18px]">
              File Name
            </div>
            <div className="w-[49px] text-center text-zinc-700 text-xs font-normal leading-[18px]">
              File Size
            </div>
            <div className="w-[92px] text-center text-zinc-700 text-xs font-normal leading-[18px]">
              Upload Date
            </div>
          </div>
          {filteredData.map((file, index) => (
            <>
              <div className="self-stretch h-[225px] rounded-xl flex-col justify-start items-start flex">
                <div className="self-stretch px-5 py-3 bg-white border-b border-gray-100 justify-between items-start  inline-flex">
                  <div className="w-40 text-gray-900 text-sm font-normal leading-[21px]">
                    {file.fileName}{" "}
                  </div>
                  <div className="text-center text-gray-900 text-sm font-normal leading-[21px]">
                    {file.fileSize}{" "}
                  </div>
                  <div className="text-center text-gray-900 text-sm font-normal leading-[21px]">
                    {file.uploadDate}{" "}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <button onClick={() => navigate(-1)} className=" self-end mt-[20%] ml-[24%] w-[87px] h-10 px-4 py-2.5 rounded-[100px] border border-zinc-500 justify-center items-center inline-flex text-center text-[#6750a4] text-sm font-medium leading-tight ">
        Back
      </button>
    </div>
  );
};

export default Search;
