import React from "react";
import Search from "../searchComponent/search";

interface TableProps {
  // Define any props your Table component may accept
}

const Table: React.FC<TableProps> = (props) => {
  return (
    <div className="p-[6px] lg:p-[59px]">
      <Search />
    </div>
  );
};

export default Table;
