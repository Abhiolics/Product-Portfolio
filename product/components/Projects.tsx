"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import Link from "next/link";
import { Button } from "./ui/MovingBorders";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Case Study",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Increasing User Base of WhatsApp</p>
          <Link target="blank" href="https://drive.google.com/file/d/18uJ7gJsZ78ia_7WyvaAlrOFr8dplv5ZH/view?usp=drive_link">
          <DummyContent />
          </Link>
        </div>
      ),
    },
    {
      title: "Case Study",
      value: "Case Study 2 ",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Student Dashboard Feature for Accredian</p>
          <Link target="blank" href="https://drive.google.com/file/d/1C1MB2IPh_5D2DyjggVUtWYmhTRKWcM5X/view?usp=drive_link">
          <DummyContent />
          </Link>
        </div>
      ),
    },
    {
      title: "Case Study",
      value: "Case Study ",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Revolutionizing Supply Chain
          and Logistics </p>
          <Link target="blank" href="https://drive.google.com/file/d/19bjJp_KcSxYCfE_lNJcVOSA21piB9Vsd/view?usp=drive_link">
          <DummyContent />
          </Link>
        </div>
      ),
    },
    {
      title: "RCA",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Root Cause Analysis of LinkedIn</p>
          <Link target="blank" href="https://drive.google.com/file/d/19DYgBvtAN1O9fYzHv-moTHrA-8wHsqAg/view?usp=drive_linkk">
          <DummyContent />
          </Link>
        </div>
      ),
    },
    {
      title: "Product Teardown",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Teardown</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
 

    
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative p-8  flex flex-col max-w-5xl mx-auto   items-start justify-start my-30">
      
    <h1 className="font-['Space_Grotesk'] text-white text-4xl font-semibold text-center mb-8">My <span className="Work Process text-[#8b5cf6]  text-4xl font-semibold">Projects</span> </h1>
      <Tabs tabs={tabs} />
    </div>
   
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/whtsap.png"
      alt="Image is Breaking"
      width="5000"
      height="500"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
