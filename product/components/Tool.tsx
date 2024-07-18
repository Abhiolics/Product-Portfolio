"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { div } from "three/examples/jsm/nodes/Nodes.js";
const people = [
  {
    id: 1,
    name: "Step 1",
    designation: "Identify Problem",
    image: 
      "https://img.icons8.com/3d-fluency/94/search.png",
  },
  {
    id: 2,
    name: "Step 2",
    designation: "Research about Pain Points",
    image: 
      "https://img.icons8.com/3d-fluency/94/reading.png",
  },
  // {
  //   id: 3,
  //   name: "Step 3",
  //   designation: "Data Analysis",
  //   image: 
  //     "https://img.icons8.com/3d-fluency/94/statistics.png",
  // },
  {
    id: 3,
    name: "Step 4",
    designation: "Make Plan",
    image: 
      "https://img.icons8.com/3d-fluency/94/goal.png",
  },
  {
    id: 5,
    name: "Step 5",
    designation: "Conclusion",
    image: 
      "https://img.icons8.com/3d-fluency/94/flash-on.png",
  },
 
 
];

export default function AnimatedTooltipPreview() {
  return (
    
    <div className="flex flex-row items-center justify-center mt-10 w-full mb-5 ">
      <AnimatedTooltip items={people} />
    </div>
  );
}
