import React, { useEffect, useState } from "react";
import yellowimpactball from "../../assets/images/yellowimpactball.png";
import lightorangeimpactball from "../../assets/images/lightorangeimpactball.png";
import middleorangeimpactball from "../../assets/images/middleorangeimpactball.png";
import darkorangeimpactball from "../../assets/images/darkorangeimpactball.png";
import redimpactball from "../../assets/images/redimpactball.png";
import peachimpactball from "../../assets/images/peachimpactball.png";
import "../../NewPages/AllocationEngine/Allocation.scss";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  LabelList,
} from "recharts";

type Props = {
  Category: any;
};

const ImpactAssessment = ({ Category }: Props) => {
  console.log("Category value", Category);
  const [impactAssessmentData, setImpactAssessmentData] = useState<any>();

  const [loader, setLoader] = useState(false);

  const Loader = () => {
    return <span className="loader"></span>;
  };

  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    const circle_diameter = payload.circle_diameter * 100;
    const circle_color = payload.circle_color;
    const getColor = (color: string) => {
      switch (color) {
        case "red":
          return "red";
        case "green":
          return "green";
        case "pink":
          return "pink";
        case "orange":
          return "orange";
        case "violet":
          return "violet";
        case "yellow":
          return "yellow";
        default:
          return "#FFFFFF"; // Default color
      }
    };
    const backgroundColor = getColor(payload.color);
    console.log("payload?.kpi_name length", payload?.kpi_name.length);

    return (
      <g>
        <foreignObject
          x={cx - 100}
          y={cy - 35}
          width={
            payload?.kpi_name.length <= 13
              ? 160
              : payload?.kpi_name.length <= 16
              ? 180
              : payload?.kpi_name.length <= 19
              ? 190
              : payload?.kpi_name.length <= 22
              ? 195
              : payload?.kpi_name.length >= 22
              ? 225
              : payload?.kpi_name.length <= 7
              ? 150
              : 145
          }
          height={55}
          style={{ zIndex: 10 }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "5%",
              backgroundColor: "#ffffff",
              border: "1px solid #beb9de",
              textAlign: "center",
              padding: "6px",
              position: "absolute",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                // width: "15px",
                // height: "15px",
                // borderRadius: "50%",
                // backgroundColor: backgroundColor,
                // border: "1px solid #000000",
                textAlign: "center",
                padding: "0px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: `${
                    payload.circle_diameter >= 0.5 ||
                    payload.circle_diameter >= 0.8
                      ? circle_diameter / 2
                      : payload.circle_diameter < 0.1
                      ? circle_diameter * 1.1
                      : circle_diameter
                  }px`,
                  height: `${
                    payload.circle_diameter >= 0.5 ||
                    payload.circle_diameter >= 0.8
                      ? circle_diameter / 2
                      : payload.circle_diameter < 0.1
                      ? circle_diameter * 1.2
                      : circle_diameter
                  }px`,
                  borderRadius: "100%",
                  backgroundColor: circle_color,
                }}
              ></div>
            </div>
            {/* <span className="ml-5 w-full"> {payload.name}</span> */}
            <div
              className={`flex flex-col items-center ${
                payload.circle_diameter >= 0.8
                  ? "ml-12"
                  : payload.circle_diameter >= 0.6
                  ? "ml-[40px]"
                  : payload.circle_diameter >= 0.3
                  ? "ml-[36px]"
                  : "ml-6"
              } `}
            >
              {Category === "All" ? (
                <div className="text-[#78747ef0] text-[14px] flex self-start">
                  {payload.kpi_category}
                </div>
              ) : (
                <div className="text-[#78747ef0] text-[14px] flex self-start">
                  {Category}
                </div>
              )}
              <div
                className={`${
                  payload.kpi_name === "Current Ratio " && "w-[112%]"
                } font-[500] text-[#1a162c] text-[14px] flex self-start items-center`}
              >
                {payload?.kpi_name}
              </div>
            </div>
            {/* <circle cx={cx} cy={cy} r={6} fill="#8884d8"  /> */}
          </div>
        </foreignObject>
      </g>
    );
  };

  const CustomTooltip = (props: any) => {
    const { payload } = props;
    console.log("payload customTooltip value", payload);

    if (payload && payload.length) {
      const { performance, distribution } = payload[0].payload;
      return (
        <div className="custom-tooltip bg-white p-4 shadow rounded">
          <p className="label text-black">{`Performance: ${performance}`}</p>
          <p className="intro text-black">{`Distribution: ${distribution}`}</p>
        </div>
      );
    }

    return null;
  };
  console.log("set loader value", loader);

  useEffect(() => {
    fetchImpactAssessmentData();
    // fetchNewImpactAssessmentData();
  }, [Category]);

  const fetchImpactAssessmentData = async () => {
    setLoader(true);
    const apiUrl =
      "https://smfg-backend-service.site/v1/monitoring/home/collection";
    // const proxyUrl = "https://smfg-backend-service.site/v1/home/";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          data?.impact_assessment?.coordinates,
          " Impact Assessment Table data"
        );
        if (Category === "All") {
          setImpactAssessmentData(data?.impact_assessment?.coordinates);
        } else if (Category == "Portfolio") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const portfolioCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Portfolio"
            );
            setImpactAssessmentData(portfolioCoordinatesWhenEmpty);
          } else {
            const portfolioCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Portfolio"
            );
            console.log("portfolioCoordinates value", portfolioCoordinates);
            setImpactAssessmentData(portfolioCoordinates);
          }
        } else if (Category == "Origination") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const originationCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Origination"
            );
            setImpactAssessmentData(originationCoordinatesWhenEmpty);
          } else {
            const originationCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Origination"
            );
            console.log("originationCoordinates value", originationCoordinates);
            console.log(
              "originationCoordinates value",
              originationCoordinates.length
            );

            if (originationCoordinates.length === 0) {
              setImpactAssessmentData("");
              return;
            } else {
              setImpactAssessmentData(originationCoordinates);
            }
          }
        } else if (Category == "Location") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const locationCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Location"
            );
            setImpactAssessmentData(locationCoordinatesWhenEmpty);
          } else {
            const locationCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Location"
            );
            console.log("locationCoordinates value", locationCoordinates);
            setImpactAssessmentData(locationCoordinates);
          }
        } else if (Category == "Collections") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const collectionsCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Collections"
            );
            setImpactAssessmentData(collectionsCoordinatesWhenEmpty);
          } else {
            const collectionsCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Collections"
            );
            console.log("collectionsCoordinates value", collectionsCoordinates);
            setImpactAssessmentData(collectionsCoordinates);
          }
        } else if (Category == "Recovery") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const RecoveryCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Recovery"
            );
            setImpactAssessmentData(RecoveryCoordinatesWhenEmpty);
          } else {
            const RecoveryCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Recovery"
            );
            console.log("RecoveryCoordinates value", RecoveryCoordinates);
            setImpactAssessmentData(RecoveryCoordinates);

            if (RecoveryCoordinates.length === 0) {
              setImpactAssessmentData("");
              return;
            } else {
              setImpactAssessmentData(RecoveryCoordinates);
            }
          }
        }
        // // else {
        // //   setImpactAssessmentData(impactAssessmentData);
        // }
        // console.log("balanceData", data?.balance);
        setLoader(false);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  };

  const fetchNewImpactAssessmentData = async () => {
    setLoader(true);
    const apiUrl =
      "https://smfg-backend-service.site/v1/monitoring/home/collection";
    const apiKey = "368f286f442e50f720ef7d8d952add8b";
    const urlWithParams = `${apiUrl}?api_key=${apiKey}`;
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          data?.impact_assessment?.coordinates,
          " Impact Assessment Table data"
        );
        if (Category === "All") {
          setImpactAssessmentData(data?.impact_assessment?.coordinates);
        } else if (Category == "Portfolio") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const portfolioCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Portfolio"
            );
            setImpactAssessmentData(portfolioCoordinatesWhenEmpty);
          } else {
            const portfolioCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Portfolio"
            );
            console.log("portfolioCoordinates value", portfolioCoordinates);
            setImpactAssessmentData(portfolioCoordinates);
          }
        } else if (Category == "Origination") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const originationCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Origination"
            );
            setImpactAssessmentData(originationCoordinatesWhenEmpty);
          } else {
            const originationCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Origination"
            );
            console.log("originationCoordinates value", originationCoordinates);
            console.log(
              "originationCoordinates value",
              originationCoordinates.length
            );

            if (originationCoordinates.length === 0) {
              setImpactAssessmentData("");
              return;
            } else {
              setImpactAssessmentData(originationCoordinates);
            }
          }
        } else if (Category == "Location") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const locationCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Location"
            );
            setImpactAssessmentData(locationCoordinatesWhenEmpty);
          } else {
            const locationCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Location"
            );
            console.log("locationCoordinates value", locationCoordinates);
            setImpactAssessmentData(locationCoordinates);
          }
        } else if (Category == "Collections") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const collectionsCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Collections"
            );
            setImpactAssessmentData(collectionsCoordinatesWhenEmpty);
          } else {
            const collectionsCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Collections"
            );
            console.log("collectionsCoordinates value", collectionsCoordinates);
            setImpactAssessmentData(collectionsCoordinates);
          }
        } else if (Category == "Recovery") {
          if (
            impactAssessmentData.length <
            data?.impact_assessment?.coordinates.length
          ) {
            const RecoveryCoordinatesWhenEmpty = (
              data?.impact_assessment?.coordinates || []
            ).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Recovery"
            );
            setImpactAssessmentData(RecoveryCoordinatesWhenEmpty);
          } else {
            const RecoveryCoordinates = (impactAssessmentData || []).filter(
              (coord: { kpi_category: any }) =>
                coord.kpi_category === "Recovery"
            );
            console.log("RecoveryCoordinates value", RecoveryCoordinates);
            setImpactAssessmentData(RecoveryCoordinates);

            if (RecoveryCoordinates.length === 0) {
              setImpactAssessmentData("");
              return;
            } else {
              setImpactAssessmentData(RecoveryCoordinates);
            }
          }
        }
        // // else {
        // //   setImpactAssessmentData(impactAssessmentData);
        // }
        // console.log("balanceData", data?.balance);
        setLoader(false);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  };

  return (
    <div
      className="relative w-[100%] mt-10 h-[555px] p-3 bg-white rounded-xl shadow flex-col justify-start items-center flex gap-5 xl:w-[48%]"
      style={{ zIndex: 1 }}
    >
      <h1 className="text-black text-base font-medium font-['DM Sans']">
        Impact Assessment
      </h1>

      <p
        className=" text-[13px] italic text-[#56478A] font-[400] 
    font-['calibri' !important] 
    -rotate-90 
     frequency_text"
      >
        Likelihood
      </p>
      {loader ? (
        <Loader />
      ) : (
        <>
          <ResponsiveContainer width="95%" height={470}>
            <ScatterChart margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
              {/* {data.map((point, index) => (
            <text
              key={index}
              x={point.performance}
              y={point.distribution}
              dy={-10}
              textAnchor="middle"
            >
              {point.name}
            </text>
          ))} */}

              <g stroke="#cdd1db" strokeWidth={2}>
                <rect
                  x="0"
                  y="0"
                  width="33%"
                  height="33%"
                  fill="#fffdeb"
                  opacity="1"
                />
              </g>
              <g stroke="#cdd1db" strokeWidth={2}>
                <rect
                  x="33%"
                  y="0"
                  width="33%"
                  height="33%"
                  fill="#ffebeb"
                  opacity="1"
                />
              </g>
              <g stroke="#cdd1db" strokeWidth={2}>
                <rect
                  x="66%"
                  y="0"
                  width="33%"
                  height="33%"
                  fill="#ffebeb"
                  opacity="1"
                />
              </g>
              <g stroke="#cdd1db" strokeWidth={2}>
                <rect
                  x="0"
                  y="33%"
                  width="33%"
                  height="33%"
                  fill="#f0ffeb"
                  opacity="1"
                />
              </g>
              <g stroke="#cdd1db" strokeWidth={2}>
                <rect
                  x="33%"
                  y="33%"
                  width="33%"
                  height="33%"
                  fill="#fffdeb"
                  opacity="1"
                />
              </g>
              <g stroke="#cdd1db" strokeWidth={2}>
                <rect
                  x="66%"
                  y="33%"
                  width="33%"
                  height="33%"
                  fill="#ffebeb"
                  opacity="1"
                />
              </g>
              <g stroke="#cdd1db" strokeWidth={2}>
                <rect
                  x="0"
                  y="66%"
                  width="33%"
                  height="33%"
                  fill="#f0ffeb"
                  opacity="1"
                />
              </g>
              <g stroke="#cdd1db" strokeWidth={2}>
                <rect
                  x="33%"
                  y="66%"
                  width="33%"
                  height="33%"
                  fill="#f0ffeb"
                  opacity="1"
                />
              </g>
              <g stroke="#cdd1db" strokeWidth={2}>
                {/* <text x="100" y="90%" dy={18} textAnchor="middle" fill="#ff0000">
              Noise
            </text> */}
                <text
                  x="85%"
                  y="90%"
                  dy={18}
                  textAnchor="middle"
                  fill="#ff0000"
                >
                  Blind Spots
                </text>

                <rect
                  x="66%"
                  y="66%"
                  width="33%"
                  height="33%"
                  fill="#fffdeb"
                  opacity="1"
                />
              </g>

              <XAxis
                dataKey="x_coordinate"
                name="Performance"
                axisLine={false}
                tickLine={false}
                tick={false}
              >
                <Label
                  value=""
                  position="insideBottom"
                  offset={0}
                  dy={10}
                  style={{
                    textAnchor: "middle",
                    fontSize: 16,
                    fontStyle: "italic",
                  }}
                />
              </XAxis>
              <YAxis
                dataKey="y_coordinate"
                name="Distribution"
                width={40}
                axisLine={false}
                tickLine={false}
                tick={false}
              >
                <Label
                  value=""
                  angle={-90}
                  position="outside"
                  offset={0}
                  dx={-40}
                  style={{
                    textAnchor: "middle",
                    fontSize: 16,
                    fontStyle: "italic",
                  }}
                />
              </YAxis>

              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomTooltip payload={impactAssessmentData} />}
                labelStyle={{ display: "none" }}
              />

              <Scatter
                name="Data"
                data={impactAssessmentData}
                fill="#8884d8"
                shape={<CustomDot />}
              />
            </ScatterChart>
          </ResponsiveContainer>
          <div
            style={{
              position: "absolute",
              top: "13%",
              left: "20%",
              transform: "translate(-50%, -50%)",
              fontFamily: "DM Sans",
              color: "#3E4259",
              fontStyle: "italic",
              fontWeight: "400",
              fontSize: "14px",
              zIndex: 1,
            }}
          >
            Blind Spots
          </div>
          <div
            style={{
              position: "absolute",
              top: "13%",
              left: "80%",
              transform: "translate(-50%, -50%)",
              fontFamily: "DM Sans",
              color: "#3E4259",
              fontStyle: "italic",
              fontWeight: "400",
              fontSize: "14px",
              // zIndex: -10,
            }}
            className="hotspot_text"
          >
            HotSpots
          </div>
          <div
            style={{
              position: "absolute",
              top: "92%",
              left: "20%",
              transform: "translate(-50%, -50%)",
              fontFamily: "DM Sans",
              color: "#3E4259",
              fontStyle: "italic",
              fontWeight: "400",
              fontSize: "14px",
              // zIndex: 0,
              zIndex: 1,
            }}
          >
            Alert
          </div>
          <div
            style={{
              position: "absolute",
              top: "92%",
              left: "80%",
              transform: "translate(-50%, -50%)",
              fontFamily: "DM Sans",
              color: "#3E4259",
              fontStyle: "italic",
              fontWeight: "400",
              fontSize: "14px",
              zIndex: 1,
            }}
            className="Blind_Text"
          >
            Blind Spots
          </div>

          <p className="-mt-6 text-[14px] italic text-[#6A7691] font-[400] font-['DM Sans' !important] benchmark_text">
            Severity
          </p>
        </>
      )}
    </div>
  );
};

export default ImpactAssessment;
