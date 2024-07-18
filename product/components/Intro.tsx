"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="p-10">
<h1 className="text-4xl font-semibold text-center text-white font-['Space_Grotesk']">About Me</h1>
{/* <TextGenerateEffect className="text-center text-sm" words={words} /> */}
<div className="flex justify-center">
<p className="font-semibold text-white text-center w-full md:w-3/5 p-4 font-['Montserrat'] text-xs sm:text-xs md:text-base lg:text-lg leading-tight md:leading-snug lg:leading-relaxed">
        An experienced Product manager and a Web developer with an extreme focus on designing and developing UI and UX. Thanks to more than 10 years of experience in developing products and online services besides the experience in running my startup, I pose a collection of skills ranging from design skills and coding with modern web technologies and techniques to marketing, SEO, and managing skills. I can conceptualize, create, develop and maintain user-friendly websites, applications, and landing pages based on the customer journey. I am considered a team player with excellent verbal and written communication skills who works effectively with people at all levels. I am passionate about creating online services to impact a wide range of people and making a change in their life.
      </p>
      </div>
      </div>
  )
}
