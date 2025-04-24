"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/svg/logo.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false); // Close menu on large screen
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-[#F5F4FF] md:rounded-[20px] rounded-[10px] px-6 lg:px-[91px] py-4 flex items-center justify-between lg:h-[102px] h-[50px] relative">
      {/* Logo */}
      <Image
        src={logo}
        alt="logo"
        className="cursor-pointer h-[21.58px] lg:h-full"
      />

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-[25px] text-[16px] text-[#000000]">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Our Services</li>
        <li className="cursor-pointer">Our Team</li>
        <li className="cursor-pointer">Contact Us</li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden lg:block h-[50px] w-[140px] rounded-[10px] bg-[#004BB1] text-white text-[18px] font-semibold">
        Get Started
      </button>

      {/* Mobile Toggle */}
      <div
        className="lg:hidden flex flex-col justify-center items-center w-[17.5px] h-[11.5px] cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-full h-[2px] bg-[#004BB1] transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-[4px]" : ""
          }`}
        ></div>
        <div
          className={`w-full h-[2px] bg-[#004BB1] my-[2px] transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-full h-[2px] bg-[#004BB1] transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[4px]" : ""
          }`}
        ></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-[#F5F4FF] flex flex-col items-center py-6 gap-6 z-50 shadow-md rounded-b-[20px] lg:hidden">
          <ul className="flex flex-col gap-6 text-[16px] text-[#000000]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Our Services</li>
            <li className="cursor-pointer">Our Team</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
          <button className="h-[50px] w-[140px] rounded-[10px] bg-[#004BB1] text-white text-[18px] font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
