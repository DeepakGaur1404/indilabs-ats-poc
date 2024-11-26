import React, { useEffect, useState } from "react";
import rightarrow from "../../assets/images/rightarrow.svg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



type Props = {
  
  AllData:any
    PreDueData:any
    ELData:any
    LLData:any
    DLData:any
    activeTabs:any
    newselectedCategory:any
    newselectedAllCategory:any
};
const colors = [
  "#8EB5F4",
  "#496CD5",
  "#FFB200",
  // "#FA7B33",
  "#DC3C49",
  "#34B53A",
  "#808080",
  "#A020F0",
];
const colorvintage:any=[
  "#8EB5F4","#496CD5","#FFB200","#DC3C49","#FFF6F6",
 "#FDDBC7",
  "#EF8A62",
   "#DC3C49",
]
interface DataPoint {
  "Pre_due_policy_count_percentage"?:number;
  "Early_lapse_policy_count_percentage":number;
  "Deep_lapse_policy_count_percentage": number;
              "Late_lapse_policy_count_percentage":number;
    "COUNT_<=20k_percentage"?: number;
    "COUNT_>20k, <=50k_percentage"?: number;
    "COUNT_>50k, <=150k_percentage"?: number;
    "COUNT_>150k_percentage"?: number;
    "1_percentage"?: number;
    "3_percentage"?: number;
    "6_percentage"?: number;
    "12_percentage"?: number;
    // "1_percentage"?:number;
    "TERM_percentage"?: number,
    "TRADITIONAL_percentage"?:number,
    "ULIP_percentage"?: number,
    "contribution_1_percentage"?: number,
    "contribution_13M_percentage"?: number,
    "contribution_25M_percentage"?: number,
    "contribution_37M_percentage"?:number,
    "contribution_49M_percentage"?: number,
    "contribution_61M_percentage"?: number,
    "contribution_FYRP_percentage"?: number,
    // "contribution_1_percentage": 0.0,
    "contribution_TERM_percentage": number,
    "contribution_TRADITIONAL_percentage": number,
    "contribution_ULIP_percentage": number,
  }
  
  interface ChartData {
    name: string; // Represents the time period (e.g., "Jan2023")
    [key: string]: number | string | undefined; // Dynamically support additional fields
  }



//  const allData: ChartData[] = processData(staticRevisedJsonDataSettlement.all);

const DistributionATSnew = ({
  AllData, PreDueData,ELData,LLData,DLData,
    activeTabs,
    newselectedCategory,
    newselectedAllCategory
}: Props) => {
  //recovery
  const [data, setData] = useState<ChartData[]>([]);
  const [dataUnique, setDataUnique] = useState<ChartData[]>([]);
  const [selectedCategoriesAll, setselectedCategoriesAll] = useState()

  const [staticRevisedJsonDataSettlement, setStaticRevisedJsonDataSettlement] = useState<any>();
  const [error, setError] = useState<string | null>(null);

  const processDataPreDue  = (data: [DataPoint, string][]): ChartData[] => {
    return data?.map(([dataPoint, period]) => {
      return {
        name: period, 
        ...dataPoint, 
      };
    });
  };
  
  console.log(processDataPreDue,"processDataPreDue");
  
  console.log(PreDueData,"PreDueData");
  
  
 
  useEffect(() => {
    console.log("PreDueData:", PreDueData);
    if (
      activeTabs === "All" &&
      newselectedAllCategory === "Lapse Bkt" &&
      AllData &&
      AllData.All["Lapse bucket"]?.length > 0
    ) {
      const allData: ChartData[] = processDataPreDue(
        AllData.All["Lapse bucket"]
      );

      setData(allData);
    } else if (
      activeTabs === "All" &&
      newselectedAllCategory === "Prem_OS" &&
      AllData &&
      AllData.All["Principal Outstanding bucket"]?.length > 0
    ) {
      const allData: ChartData[] = processDataPreDue(
        AllData.All["Principal Outstanding bucket"]
      );

      setData(allData);
    } else if (
      activeTabs === "All" &&
      newselectedAllCategory === "Prem_Frequency" &&
      AllData &&
      AllData.All["Premium Frequency bucket"]?.length > 0
    ) {
      const allData: ChartData[] = processDataPreDue(
        AllData.All["Premium Frequency bucket"]
      );

      setData(allData);
    } else if (
      activeTabs === "All" &&
      newselectedAllCategory === "Product" &&
      AllData &&
      AllData.All["Product Type bucket"]?.length > 0
    ) {
      const allData: ChartData[] = processDataPreDue(
        AllData.All["Product Type bucket"]
      );

      setData(allData);
    } else if (
      activeTabs === "All" &&
      newselectedAllCategory === "Policy_Year" &&
      AllData &&
      AllData.All["Policy Year bucket"]?.length > 0
    ) {
      const allData: ChartData[] = processDataPreDue(
        AllData.All["Policy Year bucket"]
      );

      setData(allData);
    }
    
      
     
    else if (
      activeTabs === "Pre-Due" &&
      newselectedCategory === "Prem_OS" &&
      PreDueData &&
      PreDueData["Pre-due"]["Principal Outstanding bucket"]?.length > 0
    ) {
      const allData: ChartData[] = processDataPreDue(
        PreDueData["Pre-due"]["Principal Outstanding bucket"]
      );
      
      setData(allData);
    } 
    else if (
        activeTabs === "Pre-Due" &&
        newselectedCategory === "Prem_Frequency" &&
        PreDueData &&
        PreDueData["Pre-due"]["Premium Frequency bucket"]?.length > 0
      ) {
        const allData: ChartData[] = processDataPreDue(
          PreDueData["Pre-due"]["Premium Frequency bucket"]
        );
        console.log("Processed allData:........", allData);
        setData(allData);
      }
      else if (
        activeTabs === "Pre-Due" &&
        newselectedCategory === "Product" &&
        PreDueData &&
        PreDueData["Pre-due"]["Product Type bucket"]?.length > 0
      ) {
        const allData: ChartData[] = processDataPreDue(
          PreDueData["Pre-due"]["Product Type bucket"]
        );
        console.log("Processed allData Product.......................:", allData);
        setData(allData);
      } 
      else if (
        activeTabs === "Pre-Due" &&
        newselectedCategory === "Policy_Year" &&
        PreDueData &&
        PreDueData["Pre-due"]["Policy Year bucket"]?.length > 0
      ) {
        const allData: ChartData[] = processDataPreDue(
          PreDueData["Pre-due"]["Policy Year bucket"]
        );
        console.log("Processed allData:", allData);
        setData(allData);
      }

      
      else if (
        activeTabs === "Early Lapse" &&
        newselectedCategory === "Prem_OS" &&
        ELData &&
        ELData["Early-Lapse"]["Premium Outstanding bucket"]?.length > 0
      ) {
        const allData: ChartData[] = processDataPreDue(
          ELData["Early-Lapse"]["Premium Outstanding bucket"]
        );
        
        setData(allData);
      } 
      else if (
          activeTabs === "Early Lapse" &&
          newselectedCategory === "Prem_Frequency" &&
          ELData &&
          ELData["Early-Lapse"]["Premium Frequency bucket"]?.length > 0
        ) {
          const allData: ChartData[] = processDataPreDue(
            ELData["Early-Lapse"]["Premium Frequency bucket"]
          );
          console.log("Processed allData:........", allData);
          setData(allData);
        }
        else if (
          activeTabs === "Early Lapse" &&
          newselectedCategory === "Product" &&
          ELData &&
          ELData["Early-Lapse"]["Product Type bucket"]?.length > 0
        ) {
          const allData: ChartData[] = processDataPreDue(
            ELData["Early-Lapse"]["Product Type bucket"]
          );
          console.log("Processed allData Product.......................:", allData);
          setData(allData);
        } 
        else if (
          activeTabs === "Early Lapse" &&
          newselectedCategory === "Policy_Year" &&
          ELData &&
          ELData["Early-Lapse"]["Policy Year bucket"]?.length > 0
        ) {
          const allData: ChartData[] = processDataPreDue(
            ELData["Early-Lapse"]["Policy Year bucket"]
          );
          console.log("Processed allData:", allData);
          setData(allData);
        }


        else if (
          activeTabs === "Deep Lapse" &&
          newselectedCategory === "Prem_OS" &&
          DLData &&
          DLData["Deep-Lapse"]["Premium Outstanding bucket"]?.length > 0
        ) {
          const allData: ChartData[] = processDataPreDue(
            DLData["Deep-Lapse"]["Premium Outstanding bucket"]
          );
          
          setData(allData);
        } 
        else if (
            activeTabs === "Deep Lapse" &&
            newselectedCategory === "Prem_Frequency" &&
            DLData &&
            DLData["Deep-Lapse"]["Premium Frequency bucket"]?.length > 0
          ) {
            const allData: ChartData[] = processDataPreDue(
              DLData["Deep-Lapse"]["Premium Frequency bucket"]
            );
            console.log("Processed allData:........", allData);
            setData(allData);
          }
          else if (
            activeTabs === "Deep Lapse" &&
            newselectedCategory === "Product" &&
            DLData &&
            DLData["Deep-Lapse"]["Product Type bucket"]?.length > 0
          ) {
            const allData: ChartData[] = processDataPreDue(
              DLData["Deep-Lapse"]["Product Type bucket"]
            );
            console.log("Processed allData Product.......................:", allData);
            setData(allData);
          } 
          else if (
            activeTabs === "Deep Lapse" &&
            newselectedCategory === "Policy_Year" &&
            DLData &&
            DLData["Deep-Lapse"]["Policy Year bucket"]?.length > 0
          ) {
            const allData: ChartData[] = processDataPreDue(
              DLData["Deep-Lapse"]["Policy Year bucket"]
            );
            console.log("Processed allData:", allData);
            setData(allData);
          }


          else if (
            activeTabs === "Late Lapse" &&
            newselectedCategory === "Prem_OS" &&
            LLData &&
            LLData["Late-Lapse"]["Premium Outstanding bucket"]?.length > 0
          ) {
            const allData: ChartData[] = processDataPreDue(
              LLData["Late-Lapse"]["Premium Outstanding bucket"]
            );
            
            setData(allData);
          } 
          else if (
              activeTabs === "Late Lapse" &&
              newselectedCategory === "Prem_Frequency" &&
              LLData &&
              LLData["Late-Lapse"]["Premium Frequency bucket"]?.length > 0
            ) {
              const allData: ChartData[] = processDataPreDue(
                LLData["Late-Lapse"]["Premium Frequency bucket"]
              );
              console.log("Processed allData:........", allData);
              setData(allData);
            }
            else if (
              activeTabs === "Late Lapse" &&
              newselectedCategory === "Product" &&
              LLData &&
              LLData["Late-Lapse"]["Product Type bucket"]?.length > 0
            ) {
              const allData: ChartData[] = processDataPreDue(
                LLData["Late-Lapse"]["Product Type bucket"]
              );
              console.log("Processed allData Product.......................:", allData);
              setData(allData);
            } 
            else if (
              activeTabs === "Late Lapse" &&
              newselectedCategory === "Policy_Year" &&
              LLData &&
              LLData["Late-Lapse"]["Policy Year bucket"]?.length > 0
            ) {
              const allData: ChartData[] = processDataPreDue(
                LLData["Late-Lapse"]["Policy Year bucket"]
              );
              console.log("Processed allData:", allData);
              setData(allData);
            }
        else{
          setData(PreDueData)
        }
  }, [activeTabs, newselectedCategory, newselectedAllCategory,AllData]);
  
  console.log("Rendered data:", data);
  const formatYAxisTick = (tick: any) => {
    // if (tick == 0) {
    return `${tick}%`;
    // } else {
    // return `${Math.floor(tick).toLocaleString()}`;
    // }
  };

  return (
    <div className="w-full xl:w-[100%] ml-3 h-[500px]  flex flex-col justify-center items-center shadow-md p-3 rounded-lg bg-white py-3  ">
      <div className="w-full flex flex-wrap  md:flex justify-between lg: px-0 my-3 mt-5">
        <h1 className="text-start text-[16px] font-[500] text-[#000000] font-['DM Sans']">
          Contribution %
        </h1>
        <div className="flex flex-wrap justify-between items-center gap-2  ColorIndicator ">
         
        {activeTabs === "All" &&
          newselectedAllCategory === "Lapse Bkt" &&
          AllData &&
          AllData.All["Lapse bucket"]
            ? Object.keys(AllData.All["Lapse bucket"][0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor:
                          colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : activeTabs === "All" &&
              newselectedAllCategory === "Prem_OS" &&
              AllData &&
              AllData.All["Principal Outstanding bucket"]
            ? Object.keys(
                AllData.All["Principal Outstanding bucket"][0][0]
              ).map((series: any, index: any) => (
                <div className="flex items-center" key={index}>
                  <div
                    className="legend-color"
                    style={{
                      backgroundColor:
                        colorvintage[index % colorvintage.length],
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                      borderRadius: "3px",
                    }}
                  />
                  <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                    {series}
                  </span>
                </div>
              ))
            : activeTabs === "All" &&
              newselectedAllCategory === "Policy_Year" &&
              AllData &&
              AllData.All["Policy Year bucket"]
            ? Object.keys(AllData.All["Policy Year bucket"][0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor:
                          colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : activeTabs === "All" &&
              newselectedAllCategory === "Prem_Frequency" &&
              AllData &&
              AllData.All["Premium Frequency bucket"]
            ? Object.keys(AllData.All["Premium Frequency bucket"][0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor:
                          colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            : activeTabs === "All" &&
              newselectedAllCategory === "Product" &&
              AllData &&
              AllData.All["Product Type bucket"]
            ? Object.keys(AllData.All["Product Type bucket"][0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor:
                          colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
            :
          activeTabs === "Pre-Due" &&
          newselectedCategory ==="Prem_OS" &&
          PreDueData &&
          PreDueData["Pre-due"]["Principal Outstanding bucket"]?
             Object.keys(PreDueData["Pre-due"]["Principal Outstanding bucket"][0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )
              :activeTabs === "Pre-Due" &&
              newselectedCategory === "Product" &&
              PreDueData &&
              PreDueData["Pre-due"]["Product Type bucket"]?
                 Object.keys(PreDueData["Pre-due"]["Product Type bucket"][0][0]).map(
                    (series: any, index: any) => (
                      <div className="flex items-center" key={index}>
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor: colorvintage[index % colorvintage.length],
                            width: "13px",
                            height: "13px",
                            marginRight: "5px",
                            borderRadius: "3px",
                          }}
                        />
                        <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                          {series}
                        </span>
                      </div>
                    )
                  ):
                  activeTabs === "Pre-Due" &&
          newselectedCategory === "Policy_Year" &&
          PreDueData &&
          PreDueData["Pre-due"]["Policy Year bucket"]?
             Object.keys(PreDueData["Pre-due"]["Policy Year bucket"][0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "3px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              ):
              activeTabs === "Pre-Due" &&
          newselectedCategory === "Prem_Frequency" &&
          PreDueData &&
          PreDueData["Pre-due"]["Premium Frequency bucket"]?
             Object.keys(PreDueData["Pre-due"]["Premium Frequency bucket"][0][0]).map(
                (series: any, index: any) => (
                  <div className="flex items-center" key={index}>
                    <div
                      className="legend-color"
                      style={{
                        backgroundColor: colorvintage[index % colorvintage.length],
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                        borderRadius: "3px",
                      }}
                    />
                    <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                      {series}
                    </span>
                  </div>
                )
              )

            : activeTabs === "Early Lapse" &&
            newselectedCategory === "Prem_OS" &&
            ELData &&
            ELData["Early-Lapse"]["Premium Outstanding bucket"]?
               Object.keys(ELData["Early-Lapse"]["Premium Outstanding bucket"][0][0]).map(
                  (series: any, index: any) => (
                    <div className="flex items-center" key={index}>
                      <div
                        className="legend-color"
                        style={{
                          backgroundColor: colorvintage[index % colorvintage.length],
                          width: "13px",
                          height: "13px",
                          marginRight: "5px",
                          borderRadius: "3px",
                        }}
                      />
                      <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                        {series}
                      </span>
                    </div>
                  )
                )
                :activeTabs === "Early Lapse" &&
                newselectedCategory === "Product" &&
                ELData &&
                ELData["Early-Lapse"]["Product Type bucket"]?
                   Object.keys(ELData["Early-Lapse"]["Product Type bucket"][0][0]).map(
                      (series: any, index: any) => (
                        <div className="flex items-center" key={index}>
                          <div
                            className="legend-color"
                            style={{
                              backgroundColor: colorvintage[index % colorvintage.length],
                              width: "13px",
                              height: "13px",
                              marginRight: "5px",
                              borderRadius: "3px",
                            }}
                          />
                          <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                            {series}
                          </span>
                        </div>
                      )
                    ):
                    activeTabs === "Early Lapse" &&
            newselectedCategory === "Policy_Year" &&
            ELData &&
            ELData["Early-Lapse"]["Policy Year bucket"]?
               Object.keys(ELData["Early-Lapse"]["Policy Year bucket"][0][0]).map(
                  (series: any, index: any) => (
                    <div className="flex items-center" key={index}>
                      <div
                        className="legend-color"
                        style={{
                          backgroundColor: colorvintage[index % colorvintage.length],
                          width: "13px",
                          height: "13px",
                          marginRight: "3px",
                          borderRadius: "3px",
                        }}
                      />
                      <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                        {series}
                      </span>
                    </div>
                  )
                ):
                activeTabs === "Early Lapse" &&
            newselectedCategory === "Prem_Frequency" &&
            ELData&&
            ELData["Early-Lapse"]["Premium Frequency bucket"]?
               Object.keys(ELData["Early-Lapse"]["Premium Frequency bucket"][0][0]).map(
                  (series: any, index: any) => (
                    <div className="flex items-center" key={index}>
                      <div
                        className="legend-color"
                        style={{
                          backgroundColor: colorvintage[index % colorvintage.length],
                          width: "13px",
                          height: "13px",
                          marginRight: "5px",
                          borderRadius: "3px",
                        }}
                      />
                      <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                        {series}
                      </span>
                    </div>
                  )
                )


              : activeTabs === "Late Lapse" &&
              newselectedCategory === "Prem_OS" &&
              LLData &&
              LLData["Late-Lapse"]["Premium Outstanding bucket"]?
                 Object.keys(LLData["Late-Lapse"]["Premium Outstanding bucket"][0][0]).map(
                    (series: any, index: any) => (
                      <div className="flex items-center" key={index}>
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor: colorvintage[index % colorvintage.length],
                            width: "13px",
                            height: "13px",
                            marginRight: "5px",
                            borderRadius: "3px",
                          }}
                        />
                        <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                          {series}
                        </span>
                      </div>
                    )
                  )
                  :activeTabs === "Late Lapse" &&
                  newselectedCategory === "Product" &&
                  LLData &&
                  LLData["Late-Lapse"]["Product Type bucket"]?
                     Object.keys(LLData["Late-Lapse"]["Product Type bucket"][0][0]).map(
                        (series: any, index: any) => (
                          <div className="flex items-center" key={index}>
                            <div
                              className="legend-color"
                              style={{
                                backgroundColor: colorvintage[index % colorvintage.length],
                                width: "13px",
                                height: "13px",
                                marginRight: "5px",
                                borderRadius: "3px",
                              }}
                            />
                            <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                              {series}
                            </span>
                          </div>
                        )
                      ):
                      activeTabs === "Late Lapse" &&
              newselectedCategory === "Policy_Year" &&
              LLData &&
              LLData["Late-Lapse"]["Policy Year bucket"]?
                 Object.keys(LLData["Late-Lapse"]["Policy Year bucket"][0][0]).map(
                    (series: any, index: any) => (
                      <div className="flex items-center" key={index}>
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor: colorvintage[index % colorvintage.length],
                            width: "13px",
                            height: "13px",
                            marginRight: "3px",
                            borderRadius: "3px",
                          }}
                        />
                        <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                          {series}
                        </span>
                      </div>
                    )
                  ):
                  activeTabs === "Late Lapse" &&
              newselectedCategory === "Prem_Frequency" &&
              LLData &&
              LLData["Late-Lapse"]["Premium Frequency bucket"]?
                 Object.keys(LLData["Late-Lapse"]["Premium Frequency bucket"][0][0]).map(
                    (series: any, index: any) => (
                      <div className="flex items-center" key={index}>
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor: colorvintage[index % colorvintage.length],
                            width: "13px",
                            height: "13px",
                            marginRight: "5px",
                            borderRadius: "3px",
                          }}
                        />
                        <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                          {series}
                        </span>
                      </div>
                    )
                  )


                : activeTabs === "Deep Lapse" &&
                newselectedCategory === "Prem_OS" &&
                DLData &&
                DLData["Deep-Lapse"]["Premium Outstanding bucket"]?
                   Object.keys(DLData["Deep-Lapse"]["Premium Outstanding bucket"][0][0]).map(
                      (series: any, index: any) => (
                        <div className="flex items-center" key={index}>
                          <div
                            className="legend-color"
                            style={{
                              backgroundColor: colorvintage[index % colorvintage.length],
                              width: "13px",
                              height: "13px",
                              marginRight: "5px",
                              borderRadius: "3px",
                            }}
                          />
                          <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                            {series}
                          </span>
                        </div>
                      )
                    )
                    :activeTabs === "Deep Lapse" &&
                    newselectedCategory === "Product" &&
                    DLData &&
                    DLData["Deep-Lapse"]["Product Type bucket"]?
                       Object.keys(DLData["Deep-Lapse"]["Product Type bucket"][0][0]).map(
                          (series: any, index: any) => (
                            <div className="flex items-center" key={index}>
                              <div
                                className="legend-color"
                                style={{
                                  backgroundColor: colorvintage[index % colorvintage.length],
                                  width: "13px",
                                  height: "13px",
                                  marginRight: "5px",
                                  borderRadius: "3px",
                                }}
                              />
                              <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                                {series}
                              </span>
                            </div>
                          )
                        ):
                        activeTabs === "Deep Lapse" &&
                newselectedCategory === "Policy_Year" &&
                DLData &&
                DLData["Deep-Lapse"]["Policy Year bucket"]?
                   Object.keys(DLData["Deep-Lapse"]["Policy Year bucket"][0][0]).map(
                      (series: any, index: any) => (
                        <div className="flex items-center" key={index}>
                          <div
                            className="legend-color"
                            style={{
                              backgroundColor: colorvintage[index % colorvintage.length],
                              width: "13px",
                              height: "13px",
                              marginRight: "3px",
                              borderRadius: "3px",
                            }}
                          />
                          <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                            {series}
                          </span>
                        </div>
                      )
                    ):
                    activeTabs === "Deep Lapse" &&
                newselectedCategory === "Prem_Frequency" &&
                DLData &&
                DLData["Deep-Lapse"]["Premium Frequency bucket"]?
                   Object.keys(DLData["Deep-Lapse"]["Premium Frequency bucket"][0][0]).map(
                      (series: any, index: any) => (
                        <div className="flex items-center" key={index}>
                          <div
                            className="legend-color"
                            style={{
                              backgroundColor: colorvintage[index % colorvintage.length],
                              width: "13px",
                              height: "13px",
                              marginRight: "5px",
                              borderRadius: "3px",
                            }}
                          />
                          <span className="text-[12px] font-[400] text-[#000000] font-['DM Sans']">
                            {series}
                          </span>
                        </div>
                      )
                    )
                  :null 
           }
        </div> 
      </div>
     
        <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
         
          <CartesianGrid strokeDasharray="7 7" vertical={false} />
            <XAxis
              dataKey="name"
              fontWeight={400}
              fontSize={12}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis
              fontWeight={400}
              fontSize={10}
              fontFamily="DM Sans"
              fill={"#3B414B"}
              domain={[0, "dataMax"]}
              width={28}
              tickLine={false}
              axisLine={false}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tickFormatter={formatYAxisTick}
              // ticks={arrTicks()}
              interval={0}
            />
             <Tooltip
              formatter={(value, name) => {
                const formattedValue =
                  typeof value === "number" && value !== 0
                    ? `${value.toFixed(2)}%`
                    : `${value}%`;
                return [formattedValue, `${name}`];
              }}
            />
          {/* <Legend /> */}
          
          {activeTabs === "All" && newselectedAllCategory === "Lapse Bkt" ? (
            <>
              <Bar
                dataKey="Pre_due_policy_count_percentage"
                stackId="a"
                fill={colorvintage[0]}
                barSize={35}
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="Early_lapse_policy_count_percentage"
                stackId="a"
                fill={colorvintage[1]}
                barSize={35}
              />
              <Bar
                dataKey="Deep_lapse_policy_count_percentage"
                stackId="a"
                fill={colorvintage[2]}
                barSize={35}
              />
              <Bar
                dataKey="Late_lapse_policy_count_percentage"
                stackId="a"
                fill={colorvintage[3]}
                barSize={35}
                radius={[4, 4, 0, 0]}
              />
            </>
          ) : activeTabs === "All" && newselectedAllCategory === "Prem_OS" ? (
            <>
              <Bar
                dataKey="COUNT_<=20k_percentage"
                stackId="a"
                fill={colorvintage[0]}
                barSize={35}
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="COUNT_>20k, <=50k_percentage"
                stackId="a"
                fill={colorvintage[1]}
                barSize={35}
              />
              <Bar
                dataKey="COUNT_>50k, <=150k_percentage"
                stackId="a"
                fill={colorvintage[2]}
                barSize={35}
              />
              <Bar
                dataKey="COUNT_>150k_percentage"
                stackId="a"
                fill={colorvintage[3]}
                barSize={35}
                radius={[4, 4, 0, 0]}
              />
            </>
          ) : activeTabs === "All" && newselectedAllCategory === "Product" ? (
            <>
              <Bar
                dataKey="1_percentage"
                stackId="a"
                fill={colorvintage[0]}
                barSize={35}
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="TERM_percentage"
                stackId="a"
                fill={colorvintage[1]}
                barSize={35}
              />
              <Bar
                dataKey="TRADITIONAL_percentage"
                stackId="a"
                fill={colorvintage[2]}
                barSize={35}
              />
              <Bar
                dataKey="ULIP_percentage"
                stackId="a"
                fill={colorvintage[3]}
                barSize={35}
                radius={[4, 4, 0, 0]}
              />
            </>
          ) : activeTabs === "All" &&
            newselectedAllCategory === "Policy_Year" ? (
            <>
              <Bar
                dataKey="contribution_1_percentage"
                stackId="a"
                fill={colorvintage[0]}
                barSize={35}
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="contribution_13M_percentage"
                stackId="a"
                fill={colorvintage[1]}
                barSize={35}
              />
              <Bar
                dataKey="contribution_25M_percentage"
                stackId="a"
                fill={colorvintage[2]}
                barSize={35}
              />
              <Bar
                dataKey="contribution_37M_percentage"
                stackId="a"
                fill={colorvintage[3]}
                barSize={35}
              />
              <Bar
                dataKey="contribution_49M_percentage"
                stackId="a"
                fill={colorvintage[4]}
                barSize={35}
              />
              <Bar
                dataKey="contribution_61M_percentage"
                stackId="a"
                fill={colorvintage[5]}
                barSize={35}
              />
              <Bar
                dataKey="contribution_FYRP_percentage"
                stackId="a"
                fill={colorvintage[6]}
                barSize={35}
                radius={[4, 4, 0, 0]}
              />
            </>
          ) : activeTabs === "All" &&
            newselectedAllCategory === "Prem_Frequency" ? (
            <>
              <Bar
                dataKey="1_percentage"
                stackId="a"
                fill={colorvintage[0]}
                barSize={35}
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="3_percentage"
                stackId="a"
                fill={colorvintage[1]}
                barSize={35}
              />
              <Bar
                dataKey="6_percentage"
                stackId="a"
                fill={colorvintage[2]}
                barSize={35}
              />
              <Bar
                dataKey="12_percentage"
                stackId="a"
                fill={colorvintage[3]}
                barSize={35}
                radius={[4, 4, 0, 0]}
              />
            </>
          ) :
        activeTabs === "Pre-Due" &&
      newselectedCategory === "Prem_OS" ?
      (<>
            <Bar dataKey="COUNT_<=20k_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                  radius={[0, 0, 4, 4]} />
          <Bar dataKey="COUNT_>20k, <=50k_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
          <Bar dataKey="COUNT_>50k, <=150k_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
          <Bar dataKey="COUNT_>150k_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                  radius={[4, 4, 0, 0]} /></>)
        : activeTabs === "Pre-Due" &&
        newselectedCategory === "Product"  ?
        (<>
              <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                    radius={[0, 0, 4, 4]} />
            <Bar dataKey="TERM_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
            <Bar dataKey="TRADITIONAL_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
            <Bar dataKey="ULIP_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                    radius={[4, 4, 0, 0]} /></>)
    :
    activeTabs === "Pre-Due" &&
    newselectedCategory ==="Policy_Year" ?
    (<>
          <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                radius={[0, 0, 4, 4]} />
        <Bar dataKey="contribution_13M_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
        <Bar dataKey="contribution_25M_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
        <Bar dataKey="contribution_37M_percentage" stackId="a" fill={colorvintage[3] } barSize={35}/>
        <Bar dataKey="contribution_49M_percentage" stackId="a" fill={colorvintage[4]} barSize={35}/>
        <Bar dataKey="contribution_61M_percentage" stackId="a" fill={colorvintage[5]} barSize={35}/>
        <Bar dataKey="contribution_FYRP_percentage" stackId="a" fill={colorvintage[6]}  barSize={35}
                radius={[4, 4, 0, 0]} /></>)
    : activeTabs === "Pre-Due" &&
    newselectedCategory === "Prem_Frequency" ?
    (<> 
          <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                radius={[0, 0, 4, 4]} />
        <Bar dataKey="3_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
        <Bar dataKey="6_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
        <Bar dataKey="12_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                radius={[4, 4, 0, 0]} /></>)
         :activeTabs === "Pre-Due" &&
      newselectedCategory === "Prem_OS" ?
      (<>
            <Bar dataKey="COUNT_<=20k_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                  radius={[0, 0, 4, 4]} />
          <Bar dataKey="COUNT_>20k, <=50k_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
          <Bar dataKey="COUNT_>50k, <=150k_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
          <Bar dataKey="COUNT_>150k_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                  radius={[4, 4, 0, 0]} /></>)
        : activeTabs === "Pre-Due" &&
        newselectedCategory === "Product"  ?
        (<>
              <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                    radius={[0, 0, 4, 4]} />
            <Bar dataKey="TERM_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
            <Bar dataKey="TRADITIONAL_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
            <Bar dataKey="ULIP_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                    radius={[4, 4, 0, 0]} /></>)
    :
    activeTabs === "Pre-Due" &&
    newselectedCategory ==="Policy_Year" ?
    (<>
          <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                radius={[0, 0, 4, 4]} />
        <Bar dataKey="contribution_13M_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
        <Bar dataKey="contribution_25M_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
        <Bar dataKey="contribution_37M_percentage" stackId="a" fill={colorvintage[3] } barSize={35}/>
        <Bar dataKey="contribution_49M_percentage" stackId="a" fill={colorvintage[4]} barSize={35}/>
        <Bar dataKey="contribution_61M_percentage" stackId="a" fill={colorvintage[5]} barSize={35}/>
        <Bar dataKey="contribution_FYRP_percentage" stackId="a" fill={colorvintage[6]}  barSize={35}
                radius={[4, 4, 0, 0]} /></>)
    : activeTabs === "Pre-Due" &&
    newselectedCategory === "Prem_Frequency" ?
    (<> 
          <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                radius={[0, 0, 4, 4]} />
        <Bar dataKey="3_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
        <Bar dataKey="6_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
        <Bar dataKey="12_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                radius={[4, 4, 0, 0]} /></>)
                :activeTabs === "Pre-Due" &&
      newselectedCategory === "Prem_OS" ?
      (<>
            <Bar dataKey="COUNT_<=20k_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                  radius={[0, 0, 4, 4]} />
          <Bar dataKey="COUNT_>20k, <=50k_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
          <Bar dataKey="COUNT_>50k, <=150k_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
          <Bar dataKey="COUNT_>150k_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                  radius={[4, 4, 0, 0]} /></>)
        : activeTabs === "Pre-Due" &&
        newselectedCategory === "Product"  ?
        (<>
              <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                    radius={[0, 0, 4, 4]} />
            <Bar dataKey="TERM_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
            <Bar dataKey="TRADITIONAL_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
            <Bar dataKey="ULIP_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                    radius={[4, 4, 0, 0]} /></>)
    :
    activeTabs === "Pre-Due" &&
    newselectedCategory ==="Policy_Year" ?
    (<>
          <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                radius={[0, 0, 4, 4]} />
        <Bar dataKey="contribution_13M_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
        <Bar dataKey="contribution_25M_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
        <Bar dataKey="contribution_37M_percentage" stackId="a" fill={colorvintage[3] } barSize={35}/>
        <Bar dataKey="contribution_49M_percentage" stackId="a" fill={colorvintage[4]} barSize={35}/>
        <Bar dataKey="contribution_61M_percentage" stackId="a" fill={colorvintage[5]} barSize={35}/>
        <Bar dataKey="contribution_FYRP_percentage" stackId="a" fill={colorvintage[6]}  barSize={35}
                radius={[4, 4, 0, 0]} /></>)
    : activeTabs === "Pre-Due" &&
    newselectedCategory === "Prem_Frequency" ?
    (<> 
          <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                radius={[0, 0, 4, 4]} />
        <Bar dataKey="3_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
        <Bar dataKey="6_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
        <Bar dataKey="12_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                radius={[4, 4, 0, 0]} /></>)
         :activeTabs === "Early Lapse" &&
      newselectedCategory === "Prem_OS" ?
      (<>
            <Bar dataKey="COUNT_<=20k_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                  radius={[0, 0, 4, 4]} />
          <Bar dataKey="COUNT_>20k, <=50k_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
          <Bar dataKey="COUNT_>50k, <=150k_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
          <Bar dataKey="COUNT_>150k_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                  radius={[4, 4, 0, 0]} /></>)
        : activeTabs === "Early Lapse" &&
        newselectedCategory === "Product"  ?
        (<>
              <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                             radius={[0, 0, 4, 4]} />
                      <Bar dataKey="contribution_TERM_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
                     <Bar dataKey="contribution_TRADITIONAL_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
                     <Bar dataKey="contribution_ULIP_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                            radius={[4, 4, 0, 0]} /></>)
    :
    activeTabs === "Early Lapse" &&
    newselectedCategory ==="Policy_Year" ?
    (<>
          <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                radius={[0, 0, 4, 4]} />
        <Bar dataKey="contribution_13M_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
        <Bar dataKey="contribution_25M_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
        <Bar dataKey="contribution_37M_percentage" stackId="a" fill={colorvintage[3] } barSize={35}/>
        <Bar dataKey="contribution_49M_percentage" stackId="a" fill={colorvintage[4]} barSize={35}/>
        <Bar dataKey="contribution_61M_percentage" stackId="a" fill={colorvintage[5]} barSize={35}/>
        <Bar dataKey="contribution_FYRP_percentage" stackId="a" fill={colorvintage[6]}  barSize={35}
                radius={[4, 4, 0, 0]} /></>)
    : activeTabs === "Early Lapse" &&
    newselectedCategory === "Prem_Frequency" ?
    (<> 
          <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                radius={[0, 0, 4, 4]} />
        <Bar dataKey="3_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
        <Bar dataKey="6_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
        <Bar dataKey="12_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                radius={[4, 4, 0, 0]} /></>)
              //   :activeTabs === "Early Lapse" &&
              //   newselectedCategory === "Prem_OS" ?
              //   (<>
              //         <Bar dataKey="PREMIUM_<=20k_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
              //               radius={[0, 0, 4, 4]} />
              //       <Bar dataKey="PREMIUM_>20k, <=50k_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
              //       <Bar dataKey="PREMIUM_>50k, <=150k_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
              //       <Bar dataKey="PREMIUM_>150k_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
              //               radius={[4, 4, 0, 0]} /></>)
              //     : activeTabs === "Early Lapse" &&
              //     newselectedCategory === "Product"  ?
              //     (<>
              //           <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
              //                 radius={[0, 0, 4, 4]} />
              //         <Bar dataKey="contribution_TERM_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
              //         <Bar dataKey="contribution_TRADITIONAL_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
              //         <Bar dataKey="contribution_ULIP_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
              //                 radius={[4, 4, 0, 0]} /></>)
              // :
              // activeTabs === "Early Lapse" &&
              // newselectedCategory ==="Policy_Year" ?
              // (<>
              //       <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
              //             radius={[0, 0, 4, 4]} />
              //     <Bar dataKey="contribution_13M_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
              //     <Bar dataKey="contribution_25M_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
              //     <Bar dataKey="contribution_37M_percentage" stackId="a" fill={colorvintage[3] } barSize={35}/>
              //     <Bar dataKey="contribution_49M_percentage" stackId="a" fill={colorvintage[4]} barSize={35}/>
              //     <Bar dataKey="contribution_61M_percentage" stackId="a" fill={colorvintage[5]} barSize={35}/>
              //     <Bar dataKey="contribution_FYRP_percentage" stackId="a" fill={colorvintage[6]}  barSize={35}
              //             radius={[4, 4, 0, 0]} /></>)
              // : activeTabs === "Early Lapse" &&
              // newselectedCategory === "Prem_Frequency" ?
              // (<> 
              //       <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
              //             radius={[0, 0, 4, 4]} />
              //     <Bar dataKey="3_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
              //     <Bar dataKey="6_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
              //     <Bar dataKey="12_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
              //             radius={[4, 4, 0, 0]} /></>)
                          :activeTabs === "Late Lapse" &&
                          newselectedCategory === "Prem_OS" ?
                          (<>
                               <Bar dataKey="COUNT_<=20k_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                  radius={[0, 0, 4, 4]} />
          <Bar dataKey="COUNT_>20k, <=50k_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
          <Bar dataKey="COUNT_>50k, <=150k_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
          <Bar dataKey="COUNT_>150k_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                  radius={[4, 4, 0, 0]} /></>)
                            : activeTabs === "Late Lapse" &&
                            newselectedCategory === "Product"  ?
                            (<>
                                  <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                                        radius={[0, 0, 4, 4]} />
                                <Bar dataKey="contribution_TERM_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
                                <Bar dataKey="contribution_TRADITIONAL_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
                                <Bar dataKey="contribution_ULIP_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                                        radius={[4, 4, 0, 0]} /></>)
                        :
                        activeTabs === "Late Lapse" &&
                        newselectedCategory ==="Policy_Year" ?
                        (<>
                              <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                                    radius={[0, 0, 4, 4]} />
                            <Bar dataKey="contribution_13M_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
                            <Bar dataKey="contribution_25M_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
                            <Bar dataKey="contribution_37M_percentage" stackId="a" fill={colorvintage[3] } barSize={35}/>
                            <Bar dataKey="contribution_49M_percentage" stackId="a" fill={colorvintage[4]} barSize={35}/>
                            <Bar dataKey="contribution_61M_percentage" stackId="a" fill={colorvintage[5]} barSize={35}/>
                            <Bar dataKey="contribution_FYRP_percentage" stackId="a" fill={colorvintage[6]}  barSize={35}
                                    radius={[4, 4, 0, 0]} /></>)
                        : activeTabs === "Late Lapse" &&
                        newselectedCategory === "Prem_Frequency" ?
                        (<> 
                              <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                                    radius={[0, 0, 4, 4]} />
                            <Bar dataKey="3_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
                            <Bar dataKey="6_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
                            <Bar dataKey="12_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                                    radius={[4, 4, 0, 0]} /></>)
                                    :activeTabs === "Deep Lapse" &&
                                    newselectedCategory === "Prem_OS" ?
                                    (<>
                                           <Bar dataKey="COUNT_<=20k_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                  radius={[0, 0, 4, 4]} />
          <Bar dataKey="COUNT_>20k, <=50k_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
          <Bar dataKey="COUNT_>50k, <=150k_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
          <Bar dataKey="COUNT_>150k_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                  radius={[4, 4, 0, 0]} /></>)
                                      : activeTabs === "Deep Lapse" &&
                                      newselectedCategory === "Product"  ?
                                      (<>
                                            <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                                                  radius={[0, 0, 4, 4]} />
                                          <Bar dataKey="contribution_TERM_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
                                          <Bar dataKey="contribution_TRADITIONAL_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
                                          <Bar dataKey="contribution_ULIP_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                                                  radius={[4, 4, 0, 0]} /></>)
                                  :
                                  activeTabs === "Deep Lapse" &&
                                  newselectedCategory ==="Policy_Year" ?
                                  (<>
                                        <Bar dataKey="contribution_1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                                              radius={[0, 0, 4, 4]} />
                                      <Bar dataKey="contribution_13M_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
                                      <Bar dataKey="contribution_25M_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
                                      <Bar dataKey="contribution_37M_percentage" stackId="a" fill={colorvintage[3] } barSize={35}/>
                                      <Bar dataKey="contribution_49M_percentage" stackId="a" fill={colorvintage[4]} barSize={35}/>
                                      <Bar dataKey="contribution_61M_percentage" stackId="a" fill={colorvintage[5]} barSize={35}/>
                                      <Bar dataKey="contribution_FYRP_percentage" stackId="a" fill={colorvintage[6]}  barSize={35}
                                              radius={[4, 4, 0, 0]} /></>)
                                  : activeTabs === "Deep Lapse" &&
                                  newselectedCategory === "Prem_Frequency" ?
                                  (<> 
                                        <Bar dataKey="1_percentage" stackId="a" fill={colorvintage[0]} barSize={35}
                                              radius={[0, 0, 4, 4]} />
                                      <Bar dataKey="3_percentage" stackId="a" fill={colorvintage[1] } barSize={35}/>
                                      <Bar dataKey="6_percentage" stackId="a" fill={colorvintage[2]} barSize={35}/>
                                      <Bar dataKey="12_percentage" stackId="a" fill={colorvintage[3]}  barSize={35}
                                              radius={[4, 4, 0, 0]} /></>)
                                              :null}
        </BarChart>
      </ResponsiveContainer>
    
    </div>
  );
};

export default DistributionATSnew;
