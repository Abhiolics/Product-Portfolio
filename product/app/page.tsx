"use client"
import React, { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";
import MyProcess from "@/components/MyProcess";
import Projects from "@/components/Projects";
import Tool from "@/components/Tool";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero"

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulate loading delay (replace with actual data fetching logic)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust delay as needed

    // Check if the user prefers dark mode
    const prefersDarkMode =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className={darkMode ? "dark" : ""}>
          <div className="dark:bg-gray-950 min-h-screen overflow-hidden">
            <TracingBeam className="">
              {/* <LandingPage /> */}
              <Hero/>
              <Navbar />
              <Intro />
              <Skills />
              <MyProcess />
              <Projects />
              <Tool />
              <Clients />
              <Footer />
            </TracingBeam>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

