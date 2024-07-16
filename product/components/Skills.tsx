"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="p-12">
  <h1 className="text-center text-4xl font-semibold mb-6 text-white">My Main Skills</h1>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full ">
    <WobbleCard
      containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[300px] lg:min-h-[300px]"
      className=""
    >
      <div className="max-w-xs">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Product Manager
        </h2>
        <p className="mt-4 text-left text-base text-neutral-200">
          Communicating with customers, designers, developers, software engineers, data analysts, and driving an idea into a real product affecting people's lives always makes me so satisfied. Thanks to running my startup, cafekado.org, I have gained a collection of abilities and skills ranging from marketing and design to financial matters and teamwork. You need to know many things when you are the founder of a startup!
        </p>
      </div>
      <Image
        src="/linear.webp"
        width={500}
        height={500}
        alt="linear demo image"
        className="absolute right-0 lg:right-10 grayscale filter bottom-0 lg:bottom-10 object-contain rounded-2xl"
      />
    </WobbleCard>
    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        UI/UX Design
      </h2>
      <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
        Thanks to more than 10 years of experience in UI and UX Designing, collaborating closely with product owners and customers, designers, and engineering teams to craft beautiful experiences through the use of colors, typography, hierarchy, advanced prototyping, or microinteractions, I am able to create intuitive, elegant, and shippable product experiences.
      </p>
    </WobbleCard>
    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[300px] lg:min-h-[300px] xl:min-h-[300px]">
      <div className="max-w-sm">
        <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Front-End Development
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
          Designing web applications and websites was not satisfying for me. I wanted to be able to create what I imagine, so I acquired many skills. As a computer engineer with a background in C#, PHP, and C, it was not so hard. I am always eager to catch new technologies and libraries in UI development. About two years ago, I started learning and working with Vue.js, which has been so joyful!
        </p>
      </div>
      <Image
        src="/linear.webp"
        width={500}
        height={500}
        alt="linear demo image"
        className="absolute right-0 lg:right-10 bottom-0 lg:bottom-10 object-contain rounded-2xl"
      />
    </WobbleCard>
  </div>
</div>

  );
}
