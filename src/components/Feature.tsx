"use client";

import React, { useEffect } from "react";
import  {featureData}  from "@/app/data/features";
import AOS from "aos";
import "aos/dist/aos.css";

const Feature = () => {
  // Initialize scroll animations on mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      {/* Section heading with animated blur effect */}
      <div className="featureHeading text-center text-[#282722] px-4 py-10 -mt-30 lg:mt-0">
        <h1 data-aos="fade-right"  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-[#282722]">
            Features That Keep You Hooked!
        </h1>
        <h3 className="text-lg md:text-xl lg:text-2xl font-medium mt-4">
          Meet, Chat, Share – Anytime, Anywhere!
        </h3>
      </div>

      {/* Features grid container */}
      <div className="flex flex-wrap justify-center gap-6 px-4 py-10 overflow-hidden">
        {featureData.map((item, idx) => (
          // Each feature card with hover animation and AOS animation
          <article
            key={idx}
            className="featureCards w-full sm:w-[48%] lg:w-[30%] text-center p-6 sm:p-8 rounded-3xl border border-gray-200 shadow transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.3)] hover:border-transparent group relative overflow-hidden"
            data-aos={item.animation}
            aria-label={`Feature: ${item.title}`}
          >
            {/* Hover gradient blur effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5349]/10 via-white/0 to-[#FF5349]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-[2px] pointer-events-none" />

            {/* Feature title */}
            <h4 className="text-2xl font-semibold text-[#1A293C] tracking-tighter leading-8 mb-4 group-hover:text-[#FF5349] transition-all duration-300">
              {item.title}
            </h4>

            {/* Feature description */}
            <p className="text-[#222222] text-lg leading-8 font-medium group-hover:text-gray-700 transition-all duration-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </>
  );
};

export default Feature;
