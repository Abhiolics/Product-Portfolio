"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";



export  const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const wordss = `Excited about Problems & even more hyped about Solving them.`;
  const wordssArray = words.split(" ");

  

  const renderWords = () => {
    
  
    return (
      <motion.div ref={scope}>
        {wordssArray.map((word, idx) => {
          let className = "opacity-0 ";
  
          if (word === "Problems") {
            className += "text-orange-500";
          } else if (word === "Solving") {
            className += "text-green-500";
          } else {
            className += idx > 3 ? "text-[#45ff42]" : "dark:text-white text-white";
          }
  
          return (
            <motion.span
              key={word + idx}
              className={className}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-semibold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-white text-2xl lg:text-4xl font-['Montserrat'] leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
