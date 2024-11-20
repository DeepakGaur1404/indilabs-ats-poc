import React from "react";
import Sidebar from "../../components/common/Sidebar";
import Table from "../../components/table/Table";
import Loader from "../../components/loader/loader";
import "./data.scss"
interface DataPageProps {
  // Define any props your DataPage component may accept
}

const DataPage: React.FC<DataPageProps> = (props) => {
  return (
    <div className="CommonBodyWrap">
      <div className="DataTable">
        <Table />
        {/* <Loader /> */}
      </div>
    </div>
  );
};

export default DataPage;
