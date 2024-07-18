import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className=" h-[30rem] mt-20 hidden lg:block">
      <h1 className="text-2xl  lg:text-4xl font-semibold text-center mt-8 text-white font-['Space_Grotesk'] ">Valuable <span className="text-[#8b5cf6] text-4xl font-semibold">Words </span> </h1>
    <div className="hidden md:block mt-8=10 p-2 rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Abhay did an outstanding job redesigning my Makeup Munch website. His professionalism and attention to detail resulted in a stunning, user-friendly site that perfectly represents my brand. I highly recommend Abhay for his exceptional design skills and dedication to excellence.",
    name: "Rahul Chaubey",
    title: "CEO @MakeUp Munch",
  },
  {
    quote:
      "Abhay's leadership in the product development of BookMySession was exceptional. He guided the team with strategic vision and ensured a seamless, user-centric experience. His dedication and expertise were instrumental in the successful launch of our platform.",
    name: "Alok Kumar Dubey",
    title: "Founder @Bookmysession",
  },
  {
    quote: "Abhay displayed exceptional project management skills while leading our team. His ability to coordinate tasks, manage timelines, and maintain clear communication was crucial to our project's success. We couldn't have asked for a better leader.",
    name: "Yash",
    title: "SDE @Bluestock",
  },
  {
    quote:
      "Abhay Pratap Singh brought innovative solutions to our project, addressing complex challenges with creativity and expertise. His forward-thinking approach and technical skills were key to the project's success.",
    name: "Shubham Pandey",
    title: "Director @PapayaCoders Pvt. Ltd.",
  },
  {
    quote:
      "Abhay Pratap Singh's freelance work on our marketing materials was outstanding. He delivered high-quality designs that captured our brand's essence and effectively communicated our message. His professionalism and creativity are unmatched.",
    name: "Herman Melville",
    title: "Founder @100K Designs",
  },
];
