"use client";
import React from "react";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/MovingBorders";
import Link from "next/link";




const wordss = [
    {
      text: "Cracking Product Management Role in 60 Days",
      className: "text-white-500 dark:text-white-500",
    },
   
    {
      text: "#Stay Tuned",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];


  export default function Page() {
    return (
  <div className="h-screen w-full bg-gray-950 relative flex items-center justify-center  antialiased   overflow-hidden flex-col">
    <h1 className="text-white font-semibold">
  <TypewriterEffectSmooth words={wordss} />
  </h1>
  <div className="flex justify-center items-center">
        <Link href={`/`}>
        <Button
        borderRadius="1.75rem"
        className="bg-slate-700 font-['Space_Grotesk'] font-semibold  w-36 h-[3rem] dark:bg-slate-900 text-white dark:text-white border-slate-800 dark:border-slate-800"
      >
        Return to Home
      </Button>
      
      </Link>
      </div>
  </div>

    )
}