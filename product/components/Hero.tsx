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
    <div className="h-[50rem] w-full bg-gray-950 relative flex items-center justify-center  antialiased p-10 ml-10 overflow-hidden">
      <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row items-center lg:items-start justify-between ">
        <div className="lg:w-1/2">
          <h1 className="text-white text-xl font-['Bricolage_Grotesque']">Hey, I'm</h1>
          <h1 className="text-white text-3xl  lg:text-5xl font-semibold">Abhay Pratap Singh</h1>
          <TextGenerateEffect words={words} />
          <h1 className="text-white text-sm mt-8 font-light lg:text-3xl font-['Bricolage_Grotesque']"> 
          <TypewriterEffectSmooth words={wordss} /></h1>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 ">
          <Image
            src={`/pm.png`}
            alt="hero"
            height={520}
            width={700}
            className="mx-auto rounded-2xl object-cover h-full object-left-top "
            draggable={false}
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

