"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import appleIcon from "../../public/iconG.png";
import googleIcon from "../../public/iconsA.svg";
// You should import footerSec1 and footerSec2 at the top

const Footer = () => {
  return (
    <footer
      className="footerSec relative overflow-hidden flex flex-col lg:flex-row items-center justify-between bg-[#FF5349] w-full px-6 py-16 lg:py-2 shadow-inner -z-10"
      aria-labelledby="footer-heading"
    >
      {/* Left Content: Call-to-action */}
      <div className="footerLeft w-full lg:space-y-6   lg:w-1/2 mb-10 lg:mb-0 lg:pl-10 lg:mt-0 mt-10">
        <h1
          id="footer-heading"
          className="text-3xl  sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-1.33px] leading-[1.2] text-white"
        >
          Join the Fun – Download <br /> MyBindle Now!
        </h1>
        <p className="text-base   sm:text-lg lg:text-xl mt-4 font-semibold leading-[40px] tracking-[0px] text-white max-w-[600px]">
          Your Social Network, Your Way. <br />
          Download MyBindle Now and Be a Part <br /> of a Community That’s
          Always Evolving!
        </p>

        {/* App store download links */}
        <div className="iconsFooter hover:scale-105 transition-colors duration-300 flex flex-wrap gap-4 mt-6 lg:mt-10">
          <Link
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={appleIcon}
              alt="Download MyBindle on the Apple App Store"
              width={150}
              height={50}
              className="w-[150px]  h-auto"
              loading="lazy"
            />
          </Link>
          <Link
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={googleIcon}
              alt="Get MyBindle on Google Play"
              width={150}
              height={50}
              className="w-[150px] h-auto"
              loading="lazy"
            />
          </Link>
        </div>
      </div>

      {/* Right Content: Images full height aligned bottom */}
      <div
        className="footerRight relative flex gap-4 w-full lg:w-1/2 justify-center lg:justify-end items-end z-10 h-full min-h-[384px]"
        role="region"
        aria-label="Footer decorative images"
      >
        <Image
          src="/footer1.png"
          alt="Illustration of MyBindle community"
          width={384}
          height={384}
          className="w-[150px] sm:w-[200px] lg:w-[300px] xl:w-[384px] h-full object-cover"
          loading="lazy"
        />
        <Image
          src="/footer2.png"
          alt="Illustration of MyBindle features"
          width={384}
          height={384}
          className="w-[150px] sm:w-[200px] lg:w-[300px] xl:w-[384px] h-full object-cover mt-4"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
