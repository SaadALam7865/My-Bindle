"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import connectionLeft1 from "../../public/mob1.png";
import connectionLeft2 from "../../public/mob2.png";
import { AboutCardData } from "@/app/data/about";
import Aos from "aos";
import "aos/dist/aos.css";
import BlurText from "@/components/BlurText";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      className="relative mt-[10%]  pb-10 flex flex-col lg:flex-row justify-between items-center overflow-hidden"
      aria-label="About Section"
      id="About"
    >
      <div className="container mt-10 mx-auto flex flex-col lg:flex-row items-center justify-center max-w-7xl px-4">
        <div className="relative w-full lg:w-[600px] flex justify-center items-center mb-10 lg:mb-0 lg:mr-10">
          <div className="absolute w-[330px] h-[330px]  md:w-[320px] md:h-[320px] lg:w-[500px] lg:h-[500px] bg-[#FF5349] rounded-full  z-0"></div>
          <Image
            src={connectionLeft1}
            alt="Connection image 1"
            className="relative z-10 w-[65%]  md:w-[30%]  lg:w-[400px] -left-16  md:-left-[8%] lg:-left-28 lg:-top-10"
            data-aos="fade-up"
          />
          <Image
            src={connectionLeft2}
            alt="Connection image 2"
            className="absolute z-20 -top-10 left-[30%]  md:left-[30%] lg:left-[30%] translate-x-[-50%] w-[75%]  md:w-[35%] lg:w-[450px] "
            data-aos="fade-down"
          />
        </div>
      </div>
      <div className="rightConnectionImage px-4 sm:px-6 lg:pr-[8%] text-center lg:text-left">
        <BlurText
          text="Where Every Click Sparks  a Connection!"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl pb-4 font-extrabold leading-tight text-[#282722]"
        />
        <p className="text-lg md:text-xl mt-3 font-medium leading-8 text-[#525252] mb-6">
          A small act of kindness today can create a lifetime of impact for
          someone in need. Give from the heart and change a life!
        </p>
        <div className="space-y-6 p-6 overflow-hidden w-[100%] justify-center ">
          {AboutCardData.map((item, idx) => (
            <div
              key={idx}
              className="AboutCard p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-transparent group relative overflow-hidden"
              data-aos={item.animation}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5349]/10 via-white/0 to-[#FF5349]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-[2px] pointer-events-none" />
              <h2 className="text-2xl font-bold text-[#1A293C] mb-2 group-hover:text-[#FF5349] transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-gray-700 font-medium text-base transition-colors duration-300 group-hover:text-[#333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
