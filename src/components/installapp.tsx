"use client";

// Import necessary dependencies
import React, { useEffect } from "react";
import { installApp } from "@/app/data/installapp";
import Aos from "aos";
import "aos/dist/aos.css";
import BlurText from "@/components/BlurText";

// Define the Installapp component
const Installapp = () => {
  // Initialize AOS for animations on component mount
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      className="py-10 min-h-screen flex items-center justify-center lg:mb-[186px] md:mb-30 mb-20"
      aria-labelledby="install-heading"
    >
      <div className="container mx-auto text-center px-4">
        {/* Main heading with ID and animation */}
        <h1
          id="install-heading"
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-[#282722]"
        >
          <BlurText
            text="How to Install Our App"
            delay={100}
            animateBy="words"
            direction="top"
          />
        </h1>

        {/* Description paragraph  */}
        <p className="text-lg md:text-xl lg:text-2xl font-medium mt-4 text-gray-600">
          Getting started is quick and easy! Follow these simple steps to
          install and start using MyBindle today.
        </p>

        {/* Step indicator for larger screens */}
        <div className="hidden xl:block lg:block md:block" aria-hidden="true">
          <div className="installAppDiv mt-10 flex items-center justify-center gap-6">
            <span className="text-4xl font-bold hover:text-red-500">01</span>
            <div className="h-[2px] w-20 md:w-32 lg:w-[25%] bg-gray-400"></div>
            <span className="text-4xl font-bold hover:text-red-500">02</span>
            <div className="h-[2px] w-20 md:w-32 lg:w-[25%] bg-gray-400"></div>
            <span className="text-4xl font-bold hover:text-red-500">03</span>
          </div>
        </div>

        {/* Installation steps cards */}
        <div
          className="installappCards mt-10 flex flex-col md:flex-row justify-center gap-6"
          role="list"
        >
          {installApp.map((item, idx) => (
            <article
              key={idx}
              className="group installCard w-full lg:w-[400px] md:w-[300px] h-[150px] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-4 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-transparent relative overflow-hidden"
              data-aos={item.animation}
              role="listitem"
            >
              {/* Gradient overlay for hover effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5349]/10 via-white/0 to-[#FF5349]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-[2px] pointer-events-none" />

              {/* Step number for smaller screens */}
              <span className="lg:hidden md:hidden text-3xl sm:text-4xl font-bold text-red-500 mb-2">
                {`0${idx + 1}`}
              </span>

              {/* Card title */}
              <h2 className="text-2xl font-bold text-[#1A293C] mb-2 group-hover:text-[#FF5349] transition-colors duration-300">
                {item.title}
              </h2>

              {/* Card description */}
              <p className="text-gray-700 text-base font-medium transition-colors duration-300 group-hover:text-[#333]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installapp;
