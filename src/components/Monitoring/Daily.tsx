import React from "react";
import PaidNotPaid from "./PaidNotPaid";
import DailyCycleLiquidation from "./DailyCycleLiquidation";

type Props = {};
const data = [
  { x: 1, "Cycle 1": 0.7, "Cycle 2": 0.4, "Cycle 3": 0.5, "Cycle 4": 0.3 },
  { x: 2, "Cycle 1": 0.65, "Cycle 2": 0.35, "Cycle 3": 0.45, "Cycle 4": 0.25 },
  { x: 3, "Cycle 1": 0.6, "Cycle 2": 0.3, "Cycle 3": 0.4, "Cycle 4": 0.2 },
  { x: 4, "Cycle 1": 0.55, "Cycle 2": 0.25, "Cycle 3": 0.35, "Cycle 4": 0.15 },
  { x: 5, "Cycle 1": 0.5, "Cycle 2": 0.2, "Cycle 3": 0.3, "Cycle 4": 0.1 },
  { x: 6, "Cycle 1": 0.45, "Cycle 2": 0.15, "Cycle 3": 0.25, "Cycle 4": 0.05 },
  { x: 7, "Cycle 1": 0.4, "Cycle 2": 0.1, "Cycle 3": 0.2, "Cycle 4": 0 },
  { x: 8, "Cycle 1": 0.35, "Cycle 2": 0.05, "Cycle 3": 0.15, "Cycle 4": -0.05 },
  { x: 9, "Cycle 1": 0.3, "Cycle 2": 0, "Cycle 3": 0.1, "Cycle 4": -0.1 },
  {
    x: 10,
    "Cycle 1": 0.25,
    "Cycle 2": -0.05,
    "Cycle 3": 0.05,
    "Cycle 4": -0.15,
  },
  { x: 11, "Cycle 1": 0.2, "Cycle 2": -0.1, "Cycle 3": 0, "Cycle 4": -0.2 },
  {
    x: 12,
    "Cycle 1": 0.15,
    "Cycle 2": -0.15,
    "Cycle 3": -0.05,
    "Cycle 4": -0.25,
  },
  { x: 13, "Cycle 1": 0.1, "Cycle 2": -0.2, "Cycle 3": -0.1, "Cycle 4": -0.3 },
  {
    x: 14,
    "Cycle 1": 0.05,
    "Cycle 2": -0.25,
    "Cycle 3": -0.15,
    "Cycle 4": -0.35,
  },
  { x: 15, "Cycle 1": 0, "Cycle 2": -0.3, "Cycle 3": -0.2, "Cycle 4": -0.4 },
  {
    x: 16,
    "Cycle 1": -0.05,
    "Cycle 2": -0.35,
    "Cycle 3": -0.25,
    "Cycle 4": -0.45,
  },
  { x: 17, "Cycle 1": -0.1, "Cycle 2": -0.4, "Cycle 3": -0.3, "Cycle 4": -0.5 },
  {
    x: 18,
    "Cycle 1": -0.15,
    "Cycle 2": -0.45,
    "Cycle 3": -0.35,
    "Cycle 4": -0.55,
  },
  { x: 19, "Cycle 1": -0.2, "Cycle 2": -0.5, "Cycle 3": -0.4, "Cycle 4": -0.6 },
  {
    x: 20,
    "Cycle 1": -0.25,
    "Cycle 2": -0.55,
    "Cycle 3": -0.45,
    "Cycle 4": -0.65,
  },
  { x: 21, "Cycle 1": -0.3, "Cycle 2": -0.6, "Cycle 3": -0.5, "Cycle 4": -0.7 },
  {
    x: 22,
    "Cycle 1": -0.35,
    "Cycle 2": -0.65,
    "Cycle 3": -0.55,
    "Cycle 4": -0.75,
  },
  { x: 23, "Cycle 1": -0.4, "Cycle 2": -0.7, "Cycle 3": -0.6, "Cycle 4": -0.8 },
  {
    x: 24,
    "Cycle 1": -0.45,
    "Cycle 2": -0.75,
    "Cycle 3": -0.65,
    "Cycle 4": -0.85,
  },
  { x: 25, "Cycle 1": -0.5, "Cycle 2": -0.8, "Cycle 3": -0.7, "Cycle 4": -0.9 },
  {
    x: 26,
    "Cycle 1": -0.55,
    "Cycle 2": -0.85,
    "Cycle 3": -0.75,
    "Cycle 4": -0.95,
  },
  { x: 27, "Cycle 1": -0.6, "Cycle 2": -0.9, "Cycle 3": -0.8, "Cycle 4": -1.0 },
  {
    x: 28,
    "Cycle 1": -0.65,
    "Cycle 2": -0.95,
    "Cycle 3": -0.85,
    "Cycle 4": -1.05,
  },
  { x: 29, "Cycle 1": -0.7, "Cycle 2": -1.0, "Cycle 3": -0.9, "Cycle 4": -1.1 },
  {
    x: 30,
    "Cycle 1": -0.75,
    "Cycle 2": -1.05,
    "Cycle 3": -0.95,
    "Cycle 4": -1.15,
  },
];
const Daily = (props: Props) => {
  return (
    <div className="w-full h-[325px] flex items-center justify-center gap-10 flex-wrap">
      <PaidNotPaid />
      <DailyCycleLiquidation data={data} title={"daily"} />
    </div>
  );
};

export default Daily;
