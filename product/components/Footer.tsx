import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/magicbutton";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/MovingBorders";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 p-10 bg-transparent " id="contact">
      {/* background grid */}
      <div>
      <div className="flex justify-center items-center mb-10">
        <Link href={`/posts`}>
        <Button
        borderRadius="1.75rem"
        className="bg-slate-700 font-['Space_Grotesk'] font-semibold  w-36 h-[3rem] dark:bg-slate-900 text-white dark:text-white border-slate-800 dark:border-slate-800"
      >
        My thoughts 
      </Button>
      
      </Link>
      </div>
      </div>
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      
      <div className="flex flex-col items-center mt-20 lg:mt-5">
        <h1 className="heading lg:max-w-[55vw] text-2xl lg:text-5xl font-semibold  text-white font-['Space_Grotesk']">
          Ready to take your Digital
           Presence to the<span className="text-[#8b5cf6] text-2xl  lg:text-5xl font-semibold "> Next level?</span>
        </h1>      <Image
            src="/foot.svg"
            width={80}
            height={50}
            alt="emoji"
            className="inline-block justify-center align-middle"
          />
        <p className="text-white md:mt-10 my-5 text-sm lg:text-2xl  text-center font-['Bricolage_Grotesque']">
          Reach out to me today and let&apos;s discuss how I can help you to
          achieve your goals.
        </p>
        <a href="mailto:abhiolics@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 mb-6 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal  font-light mb-2 text-white ">
        Created with bugs, laughs & &#128155; by <span className="text-[#45ff42] md:text-base text-sm md:font-normal  font-light font-['Bricolage_Grotesque']   mb-2">Abhay Pratap Singh</span> 
        </p>
        

        <div className="flex items-center md:gap-3 sm:gap-6 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.url} target="blank">   
              <img src={info.img} alt="icons" width={20} height={20} />
              </a>   
            </div>
          ))}
        </div>
      
      </div>
      <h1 className="text-gray-200 text-cente font-['Bricolage_Grotesque'] text-xs">⚠️ For better view, Open in PC or Laptop (Work in Progress)</h1>
    </footer>
  );
};

export default Footer;