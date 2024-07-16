"use client"
import LandingPage from "@/components/LandingPage"
import Navbar from "@/components/Navbar"
import Intro from "@/components/Intro"
import Skills from "@/components/Skills"
import { TracingBeam } from "@/components/ui/tracing-beam"
import Process from "@/components/Process"
import MyProcess from "@/components/MyProcess"
import { useEffect, useState } from "react"
import Projects from "@/components/Projects"
import Strength from "@/components/Strength"



export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <>
     <div className={darkMode ? 'dark' : ''}>
     <div className="dark:bg-gray-800 min-h-screen">
    <TracingBeam>
    <LandingPage/>
    <Navbar/>
    <Intro/>
    <Skills/>
   
    {/* <Process/> */}
    <MyProcess/>
    <Projects/>
    <Strength/>
    </TracingBeam >

    </div>
    </div>
    
    </>
  )
}
