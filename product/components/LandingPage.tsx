"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden p-2">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className=" text-xl lg:text-4xl font-semibold text-black dark:text-white">
              Hey, I'm  <br />
              <span className="text-4xl md:text-[6rem] font-semibold mt-1 leading-none font-['Bricolage_Grotesque']">
                Abhay Pratap Singh
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/www.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
