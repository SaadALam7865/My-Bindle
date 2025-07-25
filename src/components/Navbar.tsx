import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 bg-[#FF5349] border-b-[1px] border-white/10  shadow-lg backdrop-blur-md"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="MyBindle Logo"
          width={230}
          height={80}
          priority
        />
      </div>
    </nav>
  );
};

export default Navbar;
