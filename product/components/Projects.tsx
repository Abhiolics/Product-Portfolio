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
          <p>The Digital Paathshala <span className="text-sm"> - An Online Intuitive  Learning Experience </span></p>
          <Link download={false} target="blank" href="https://drive.google.com/file/d/1Rb2ZSUlpaB0h9uJV06ZcycfB4vvSZjFu/view?usp=drivesdk">
        
          <DummyContent2 />
          </Link>
         
        </div>
      ),
    },
    {
      title: "Case Study",
      value: "Case Study 2 ",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Student Dashboard Feature <span className="text-sm"> - Assignment by Accredian </span></p>
          <Link target="blank" href="https://drive.google.com/file/d/1C1MB2IPh_5D2DyjggVUtWYmhTRKWcM5X/view?usp=drive_link">
          <DummyContent3 />
          </Link>
        </div>
      ),
    },
    {
      title: "Case Study",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Fianace Management System <span className="text-sm"> - Powered by AI </span></p>
          <Link target="blank" href="https://drive.google.com/file/d/1_OG6frsdNCCJhthluPH87-2OtF-l3zW8/view?usp=drivesdk">
          <DummyContent4 />
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
          and Logistics <span className="text-sm"> - Assignment</span></p>
          <Link target="blank" href="https://drive.google.com/file/d/19bjJp_KcSxYCfE_lNJcVOSA21piB9Vsd/view?usp=drive_link">
          <DummyContent5 />
          </Link>
        </div>
      ),
    },
  
    {
      title: "Case Study",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Increasing User Base of WhatsApp <span className="text-sm"> - A Case Study </span></p>
          <Link target="blank" href="https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/file/d/18uJ7gJsZ78ia_7WyvaAlrOFr8dplv5ZH/view?usp=drive_link"></Link>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
 

    
    <div className="h-[35rem] lg:h-[40rem] md:h-[35rem] [perspective:1000px] relative p-10  flex flex-col max-w-5xl mx-auto   items-start justify-start my-30">
    <h1 className="font-['Space_Grotesk'] text-white text-4xl font-semibold text-center mb-8">My <span className="Work Process text-[#8b5cf6]  text-4xl font-semibold">Projects</span> </h1>
      <Tabs  tabs={tabs} />
    </div>
   
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/whtsap.svg"
      alt="Image is Breaking"
      width="5000"
      height="5000"
      quality={100}
      className="object-cover object-left-top h-[80%] lg:h-[80%]  md:h-[90%] absolute -bottom-3 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent2 = () => {
  return (
    <Image
      src="/Paathshala.svg"
      alt="Image is Breaking"
      width="5000"
      height="5000"
      quality={100}
      className="object-cover object-left-top h-[80%] lg:h-[80%]  md:h-[90%] absolute -bottom-3 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent3 = () => {
  return (
    <Image
      src="/Accredian.svg"
      alt="Image is Breaking"
      width="5000"
      height="5000"
      quality={100}
      className="object-cover object-left-top h-[80%] lg:h-[80%]  md:h-[90%] absolute -bottom-3 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent4 = () => {
  return (
    <Image
      src="/Landing.svg"
      alt="Image is Breaking"
      width="5000"
      height="5000"
      quality={100}
      className="object-cover object-left-top h-[80%] lg:h-[80%]  md:h-[90%] absolute -bottom-3 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent5 = () => {
  return (
    <Image
      src="/Gocomet.svg"
      alt="Image is Breaking"
      width="5000"
      height="5000"
      quality={100}
      className="object-cover object-left-top h-[80%] lg:h-[80%]  md:h-[90%] absolute -bottom-3 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};