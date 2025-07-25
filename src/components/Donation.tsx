"use client";

// Import dependencies for component functionality

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Effect from "../../public/Line.png";
// Define the Donate component
const Donation = () => {
  // State for donation modal and confetti effect
  const [donate, setDonate] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Track window size for Confetti canvas
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle donation button click
  const handleDonateClick = () => {
    setDonate(true);
    setShowConfetti(true);
    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  // Close donation modal
  const closeModal = () => {
    setDonate(false);
  };

  return (
    <section
      className="donateSec relative overflow-hidden flex flex-col lg:flex-row bg-[#FF5349] h-full w-full rounded-3xl px-6 py-16 lg:py-24 lg:-top-40"
      aria-labelledby="donate-heading"
    >
      {/* Background line effect image */}
      <Image
        src={Effect}
        alt="Decorative background line effect"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />

      {/* Left content: Donation call-to-action */}
      <div className="donateLeft w-full lg:w-1/2 mb-10 lg:mb-0 lg:ml-10 mt-10 lg:-mt-[8%] relative z-10">
        <h1
          id="donate-heading"
          className="text-4xl lg:text-5xl xl:text-6xl leading-tight text-white font-extrabold"
        >
          Be the Reason <br />
          Someone Smiles Today!
        </h1>
        <p className="lg:w-[150%] text-lg md:text-xl lg:text-2xl font-extralight mt-4 text-white leading-[40px]">
          Your generosity can change lives — every donation brings hope,
          support, and a brighter <br />
          future. Give today and make a difference!
        </p>
        <button
          className=" rounded-[12.5px] text-[#FF5349] bg-white px-6 py-4 w-[203px] h-[54px] text-1xl font-semibold mt-6 hover:bg-[#f5f5f5]"
          onClick={handleDonateClick}
          aria-label="Donate now to support our cause"
        >
          Donate Now
        </button>
      </div>

      {/* Right content: Images */}
      <div
        className="footerRight  relative  flex gap-4 w-full lg:w-1/2 justify-center lg:justify-end top-16 lg:top-25 items-end z-10"
        role="region"
        aria-label="Donation section images"
      >
        <Image
          src="/donate_img1.png"
          alt="Illustration of donation impact"
          className="w-[150px]   sm:w-[200px] lg:w-[300px] xl:w-[384px] object-contain"
          width={384}
          height={384}
          loading="lazy"
        />
        <Image
          src="/donate_img2.png"
          alt="Illustration of community support"
          className="w-[150px] sm:w-[200px] lg:w-[300px] xl:w-[384px]  mt-4"
          width={384}
          height={384}
          loading="lazy"
        />
      </div>

      {/* Donation confirmation modal */}
      {donate && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-50"
            onClick={closeModal}
            aria-hidden="true"
          ></div>

          {/* Modal Dialog */}
          <dialog
            className="fixed z-50 bg-white rounded-xl p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg text-center"
            open
            aria-labelledby="modal-heading"
          >
            <h2
              id="modal-heading"
              className="text-2xl font-bold mb-4 text-[#FF5349]"
            >
              Thank You for Your Donation!
            </h2>
            <p className="mb-6 text-gray-700">
              Your kindness makes a huge difference. We appreciate your support!
            </p>
            <button
              className="bg-[#FF5349] text-white px-6 py-2 rounded-lg hover:bg-red-600"
              onClick={closeModal}
              aria-label="Close donation confirmation modal"
            >
              Close
            </button>
          </dialog>
        </>
      )}

      {/* Confetti effect for donation confirmation */}
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
    </section>
  );
};

export default Donation;
