"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = `Excited about Problems & even more hyped about Solving them.`;

const wordss = [
    {
      text: "Designer,",
    },
    {
      text: "Developer",
    },
    {
      text: "& Aspiring Product Manager",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[50rem] w-full bg-gray-950 relative flex items-center justify-center  antialiased p-10 ml-10 overflow-hidden ">
      <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row items-center lg:items-start justify-between z-20 ">
        <div className="lg:w-1/2 ">
          <h1 className="text-white text-xl font-['Bricolage_Grotesque']">Hey, I'm</h1>
          <h1 className="text-blue-100 text-3xl  lg:text-6xl font-semibold font-['Bricolage_Grotesque'] ">Abhay Pratap Singh</h1>
          <TextGenerateEffect words={words}  />
          <h1 className="text-white text-sm mt-8 font-light lg:text-3xl font-['Bricolage_Grotesque']"> 
          <TypewriterEffectSmooth words={wordss} /></h1>
        </div>
        {/* <svg width="200" height="11" viewBox="0 0 272 11" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M268.783 10.4905C165.145 1.45153 48.529 6.72521 3.20693 10.4914C1.83096 10.6057 0.622822 9.58298 0.508481 8.20702C0.394141 6.83105 1.41689 5.62291 2.79286 5.50857C48.2818 1.72852 165.201 -3.56253 269.217 5.50944C270.593 5.6294 271.61 6.84171 271.49 8.2172C271.37 9.59269 270.158 10.6105 268.783 10.4905Z"  stroke-width="4" fill="#14756E"/>
</svg> */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 ">
          <Image
            src={`/pm.png`}
            alt="hero"
            height={520}
            width={700}
            className="mx-auto rounded-2xl object-cover h-full object-left-top z-30"
            draggable={false}
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

