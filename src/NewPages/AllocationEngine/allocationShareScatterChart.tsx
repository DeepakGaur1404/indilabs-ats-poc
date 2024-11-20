import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import { GetCityData } from "../../api/api";
import { Allocation } from "../../redux/model/dashboard.model";

export default function AllocationShareScatterChart({
  selectedCity,
  activeBucket,

  minResolveRate,
  maxResolveRate,
  resultArray,
  cityData,
  resultArrayList,
  maxAllocationData,
  minAllocationData,
}: any) {
  const fetchCityData = async () => {
    try {
      const resp = {
        status: 200,
        data: {
          city: "Kolkata",
          code: "KOL",
          product: "Home loan",
          bucket: "B4",
          exclusion_criteria: {
            dpd: 5,
            min_balance: 1000,
            min_score: null,
            flag: null,
          },
          overall: {
            total_accounts: 42779,
            total_accounts_allocated: 42779,
            in_house_exclusion: 0,
            total_balance: 2156069305,
            total_balance_allocated: 2156069305,
          },
          impact_analysis: {
            resolve_rate: {
              base: 54.0,
              increment: 0,
            },
            cost_rate_on_resolved_amount: {
              value: 15,
              increment: 0,
            },
          },
          allocations: [
            {
              agency_name: "DCA015",
              previous_month_allocated_percentage: 21,
              current_month_allocated_percentage: 24,
              resolve_rate: 51,
              commission_rate: 16,
              accounts: 10247,
              balance: 514330380,
            },
            {
              agency_name: "DCA019",
              previous_month_allocated_percentage: 27,
              current_month_allocated_percentage: 28,
              resolve_rate: 59,
              commission_rate: 14,
              accounts: 11640,
              balance: 585648041,
            },
            {
              agency_name: "DCA041",
              previous_month_allocated_percentage: 29,
              current_month_allocated_percentage: 24,
              resolve_rate: 52,
              commission_rate: 12,
              accounts: 10429,
              balance: 528874679,
            },
            {
              agency_name: "DCA072",
              previous_month_allocated_percentage: 21,
              current_month_allocated_percentage: 24,
              resolve_rate: 52,
              commission_rate: 20,
              accounts: 10463,
              balance: 527216205,
            },
          ],
        },
      };
    } catch {}
  };

  const data = [
    ...cityData?.map((city: any, index: number) => {
      return {
        index: city?.resolve_rate,
        red: city?.current_month_allocated_percentage,
        blue: city?.previous_month_allocated_percentage,
      };
    }),
  ];
  console.log("data", data);
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      {/* <Legend /> */}

      <XAxis
        dataKey="index"
        type="number"
        label={{
          value: "% Resolve Rate",
          position: "insideBottom",
          offset: -20,
          style: { fontFamily: "'calibri' !important", fontSize: "18px" },
        }}
        tickLine={true}
        domain={[minResolveRate, maxResolveRate]}
        ticks={resultArray}
        axisLine={{ stroke: "blue", strokeWidth: 3 }}
      />
      <YAxis
        type="number"
        label={{
          value: `% Volume Share`,
          angle: -90,
          dx: -20,
          position: "outsideLeft",
          fontFamily: "'calibri' !important",
          fontSize: "18px",
        }}
        domain={[minAllocationData, maxAllocationData]}
        tickLine={true}
        tick={true}
        ticks={resultArrayList}
        axisLine={{ stroke: "blue", strokeWidth: 3 }}
      />
      <Scatter name="red" dataKey="red" fill="red" shape="triangle" />
      <Scatter name="blue" dataKey="blue" fill="blue" shape="circle" />

      <Line
        dataKey="redLine"
        stroke="blue"
        dot={false}
        activeDot={false}
        legendType="none"
        strokeDasharray="5 5"
      />
    </ComposedChart>
  );
}
