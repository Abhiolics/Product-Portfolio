"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Case Study 1",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Case Study 1</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Case Study 2",
      value: "Case Study 2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Case Study 2</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Case Study 3",
      value: "Case Study 3",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Case Study 3</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "PRD",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Requirement Document</p>
          <DummyContent />
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
    <h1 className="font-['Space_Grotesk'] text-white text-4xl font-semibold text-center mb-8">My Projects</h1>
      <Tabs tabs={tabs} />
    </div>
   
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
