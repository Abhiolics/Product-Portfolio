"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const words = `Turning ideas into intuitive  experiences. `;

export default function SplashScreen() {
  return (

 <div className="bg-black  flex justify-center items-center w-full  min-h-screen text-white">
        <TextGenerateEffect className="text-center text-white text-4xl" words={words} />
       
 </div>

  );
}

