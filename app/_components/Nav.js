"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/svg/logo.svg";
import { motion } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // To check click outside
  const navRef = useRef(null); // To detect scroll

  // Close the menu on resize for larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false); // Close menu on large screen
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close the menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="bg-[#F5F4FF] md:rounded-[20px] rounded-[10px] px-6 lg:px-[91px] py-4 flex items-center justify-between lg:h-[102px] h-[50px] relative"
      ref={navRef}
    >
      {/* Logo */}
      <Image
        src={logo}
        alt="logo"
        className="cursor-pointer md:w-[200px] w-[150px] h-auto"
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
        <motion.div
          className="absolute top-[60px] left-0 w-full bg-[#F5F4FF] flex flex-col items-center py-6 px-6 gap-6 z-50 shadow-md rounded-b-[20px] lg:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          ref={menuRef}
        >
          <ul className="flex flex-col gap-6 text-[16px] text-[#000000] text-center">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Our Services</li>
            <li className="cursor-pointer">Our Team</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
          <button className="h-[50px] w-full rounded-[10px] bg-[#004BB1] text-white text-[14px] font-semibold">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}
