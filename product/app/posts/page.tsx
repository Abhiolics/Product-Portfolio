"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { TailwindcssButtons } from "@/components/buttons";
import Link from "next/link";
import { Button } from "@/components/ui/MovingBorders";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";

interface FAQ {
  question: string;
  answer: string;
} 


const faqData: FAQ[] = [
  {
    question: "Why do you want to transition from development & design to product management?",
    answer: "As a developer & designer, I enjoyed creating solutions, but I found myself more intrigued by the 'why' behind the product decisions and the strategy that drives the product’s direction. Product management allows me to leverage my technical expertise while also engaging in user research, market analysis, and cross-functional collaboration. My experience has given me a deep understanding of how products are built, and I want to take that knowledge to the next level by owning the product lifecycle from ideation to launch, ensuring that the end product aligns with both user needs and business objectives.",
  },
  {
    question: "What motivates you to work in product management?",
    answer: "I’m motivated by the opportunity to create products that solve real problems and make a difference in users’ lives. The ability to combine creativity, analytical thinking, and strategic decision-making in one role is what excites me about product management. My technical background allows me to understand the intricacies of product development, while my experience in design and user research helps me focus on delivering exceptional user experiences. Ultimately, I’m driven by the desire to build products that not only meet business goals but also provide value to users.",
  },
  {
    question: "Why should we hire you?",
    answer: "You should hire me because I bring a unique combination of technical expertise, leadership experience, and a passion for product management. My ability to understand both the technical and business sides of a product allows me to create solutions that are not only feasible but also aligned with user needs and business goals. I’ve proven my ability to lead teams, communicate effectively with stakeholders, and deliver high-quality products, all of which make me a strong fit for this role.",
  },
];

export const projects = [
  {
    title: "Product Management",
    description:
     `
      User Research & Analysis ✦
      Roadmap Planning ✦
      Stakeholder Engagement ✦ 
      Product Launch & Growth ✦
      Cross-Functional Collaboration ✦
    `,
    link: "",
  },
  {
    title: "UI/UX Design",
    description:
`
      User-Centered Design ✦
      Interaction Design ✦
      Usability Testing ✦
      Prototyping ✦ Wireframing
    `,
    link: "",
  },
  {
    title: "Frontend Development",
    description:
`Responsive Web Design ✦
      React & Next.js Development ✦
      API Integration ✦ 
      Performance Optimization`,
    link: "",
  },
 
];

export default function LayoutGridDemo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  }
  return (
    <div className="min-h-screen py-20 w-full bg-gray-900 p-10  ">

<HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl  font-['Bricolage_Grotesque']  px-4 md:text-3xl lg:text-4xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
       I Solve Problems With a Smile :){" "} <br />
        <Highlight className="text-black dark:text-white">
        Problem Solving = Discovery (60%) + Execution (40%)
        </Highlight>
      </motion.h1>
    </HeroHighlight>

    <h1 className="text-4xl text-center font-semibold text-white font-['Space_Grotesk']">My Signature <span className="font-['Space_Grotesk'] text-[#8b5cf6]  font-semibold text-4xl">Strengths</span> </h1>
    
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>


    

      <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
      <div className="space-y-4 ">
        {faqData.map((faq, index) => (
          <div key={index} className="  rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center text-left p-4 bg-purple-400 hover:bg-purple-500 focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <span>{faq.question}</span>
              <span className="ml-2">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-50 p-4 bg-white border-t' : 'max-h-0'
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-center mt-8 items-center">
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


