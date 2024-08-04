"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { TailwindcssButtons } from "@/components/buttons";
import Link from "next/link";
import { Button } from "@/components/ui/MovingBorders";

export default function LayoutGridDemo() {
  return (
    <div className="min-h-screen py-20 w-full bg-gray-900  ">
      <h1 className="text-4xl text-center font-semibold text-white font-['Space_Grotesk']">Here are my <span className="font-['Space_Grotesk'] text-[#8b5cf6]  font-semibold text-4xl">Thoughts</span> </h1>
    
      <LayoutGrid cards={cards} />
      {/* <button className="text-xl font-semibold bg-green-500 text-white "> Back to Home</button> */}
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
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Student Dashboard Feature</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Accredian aims to enhance the student experience by providing a smooth, integrated communication platform within it’s ecosystem. This feature will promote peer interaction, collaboration, & networking without relying on external communications networks like LinkedIn, WhatsApp, Telegram, etc. The primary goal is to develop a unified communication experience, increase student engagement and improve retention within Accredians’s platform.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:"/Accredian.svg"
      // `https://images.unsplash.com/photo-14/76231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:""
      // `https://images.unsplash/.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:""
      // `https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: ""
      // `https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
];
