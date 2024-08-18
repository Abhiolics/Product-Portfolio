"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/MovingBorders";
import Link from "next/link";

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
          <Link target="blank" href="https://drive.google.com/file/d/1Rb7NI6Qu95cOQexAD0zA7jblGKlZEOTL/view?usp=drivesdk">
          <Button
        borderRadius="1.75rem"
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Download Resume
      </Button> 
      </Link>
      <Link href={`/posts`}>
      <button
      
        className="ml-4 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
      >
        More About Me
        </button>
      </Link>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 ">
          <Image
            src={`/01.svg`}
            alt="hero"
            height={520}
          
            width={400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top z-30"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

