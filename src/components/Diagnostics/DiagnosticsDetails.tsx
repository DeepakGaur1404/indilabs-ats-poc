const DiagnosticsData = [
  {
    segment_name: "Risk",
    statement: [
      {
        name: "Value at Risk",
        value: "510 cr.",
      },
      {
        name: "Volume affected",
        value: "20,300",
      },
      {
        name: "Severity",
        value: "25%",
      },
      {
        name: "Occurence",
        value: "3",
      },
    ],
  },
  {
    segment_name: "Identification",
    statement: [
      {
        name: "High Risk Clusters Identified",
        value: "10",
      },
      {
        name: "Cluster Value at Risk",
        value: "220 cr.",
      },
      {
        name: "Cluster Volume",
        value: "7,500",
      },
    ],
  },
  {
    segment_name: "Impact",
    statement: [
      {
        name: "Cluster Recovery%",
        value: "0.5%",
      },
      {
        name: "Non Cluster Recovery%",
        value: "2.1%",
      },
    ],
  },
  {
    segment_name: "Drivers",
    statement: [
      {
        name: "Loan Amount",
        value: "1-3L, 5-8L",
      },
      {
        name: "Loan Term",
        value: "> 60 month",
      },
      {
        name: "Empolyment Term",
        value: "< 3 years",
      },
      {
        name: "Location",
        value: "12",
      },
      {
        name: "Agencies",
        value: "8",
      },
    ],
  },
];

const DiagnosticsCard = () => {
  return (
    <article className="w-full h-[450px] overflow-hidden  px-3 py-3 bg-white rounded-xl shadow flex flex-col justify-start items-start gap-4">
      <h2 className="text-black text-base font-medium font-['DM Sans']">
        Diagnostics
      </h2>
      <div className="flex-1 w-full overflow-y-auto">
        {DiagnosticsData.map((each, index) => (
          <div key={index} className="w-full">
            <section className="flex  flex-col md:flex-row justify-between w-full gap-3 px-5 py-4">
              <div className="w-full md:w-1/3">
                <h4 className="text-[#000000] text-[14px] font-[500] font-['DM Sans'] leading-[18.23px]">
                  {each.segment_name}
                </h4>
              </div>
              <div className="w-full md:w-2/3 flex flex-col gap-[12px]">
                {each.statement.map((statement, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <p className="text-[#323335] font-['DM Sans'] font-[400] text-[14px] leading-[18.23px] gap-2.5">
                      {statement.name}
                    </p>

                    <div
                      // className="flex items-center justify-center w-[64px] h-[24px] rounded-sm py-1 px-2 gap-2.5"
                      className="flex items-center justify-center w-[100px]"
                    >
                      <p
                        style={{
                          color:
                            statement.name === "High Risk Clusters Identified"
                              ? "#FF0F00"
                              : statement.name === "Cluster Recovery%"
                              ? "#FF0F00"
                              : statement.name === "Non Cluster Recovery%"
                              ? "#00A76F"
                              : "",
                          backgroundColor:
                            statement.name === "High Risk Clusters Identified"
                              ? "#FFE7E6"
                              : statement.name === "Cluster Recovery%"
                              ? "#FFE7E6"
                              : statement.name === "Non Cluster Recovery%"
                              ? "#DBF5EC"
                              : "",
                          border:
                            statement.name === "High Risk Clusters Identified"
                              ? "none"
                              : statement.name === "Cluster Recovery%"
                              ? "none"
                              : statement.name === "Non Cluster Recovery%"
                              ? "none"
                              : "2px solid #E0D8FF",
                        }}
                        className={`text-[#422D88] font-['DM Sans'] font-[500] text-[12px] text-center leading-[15.62px] h-[24px] rounded-sm py-1 px-2 gap-2.5
                      ${
                        each.segment_name === "Drivers" &&
                        (statement.name === "Loan Amount" ||
                          statement.name === "Loan Term" ||
                          statement.name === "Empolyment Term")
                          ? "w-max"
                          : "w-[64px]"
                      }`}
                      >
                        {statement.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <hr className="w-[100%] mt-1" />
          </div>
        ))}
      </div>
    </article>
  );
};

export default DiagnosticsCard;
