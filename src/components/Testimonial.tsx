"use client";

import React, { useState } from "react";
import { testimonialData } from "@/app/data/testimonialdata";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section aria-labelledby="testimonials-heading">
      {/* Heading */}
      <h1
       data-aos="zoom-in"
        id="testimonials-heading"
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-center mt-[20%] md:mt-[10%] text-[#282722]"
      >
        What Our Users Say
      </h1>

      {/* Testimonials */}
      <section
        className="testimonialSec  py-16 relative overflow-hidden"
        role="region"
        aria-label="User testimonials"
      >
        <div className="max-w-7xl   mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {(showAll ? testimonialData : testimonialData.slice(0, 3)).map(
            (item, index: number) => (
              <div
               data-aos="zoom-in-up"
                key={index}
                className="group p-6  testomonialCard bg-gray-200/50 rounded-[36px] hover:bg-gray-400/50  shadow-[0_4px_12px_rgba(0,0,0,0.07)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] relative overflow-hidden"
                role="listitem"
              >
                {/* Gradient hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5349]/10 via-transparent to-[#FF5349]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[36px] blur-[2px] pointer-events-none" />

                {/* Stars */}
                <div className="flex text-[#FACC15] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} aria-label="Star" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-[#212121] font-medium mb-5 leading-relaxed">
                  {item.feedback}
                </p>

                {/* Profile */}
                <div className="flex items-center">
                  {item.userImage ? (
                    <Image
                      src={item.userImage}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px] rounded-full object-cover mr-4"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-[60px] h-[60px] rounded-full bg-gray-300 flex items-center justify-center mr-4">
                      <span className="text-gray-600 font-bold text-xl">
                        {item.name[0]}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-lg text-[#212121]">
                      {item.name}
                    </h4>
                    <span className="text-sm font-medium text-[#828487]">
                      {item.country}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Show More / Show Less Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-[#FF5349] text-white rounded-full font-semibold hover:bg-[#e4483e] transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
