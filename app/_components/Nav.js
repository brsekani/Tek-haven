"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/svg/logo.svg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // To check click outside
  const navRef = useRef(null); // To detect scroll
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/our-services" },
    { name: "Our Team", href: "/our-team" },
    { name: "Contact Us", href: "/contact-us" },
  ];

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

      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          className="cursor-pointer md:w-[200px] w-[150px] h-auto"
          onClick={() => setIsOpen(false)}
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-[25px] text-[16px] text-[#000000]">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              ("",
              pathname === item.href
                ? "text-primary"
                : "text-secondary hover:text-primary")
            }
          >
            {item.name}
          </Link>
        ))}
      </ul>

      {/* Desktop Button */}
      <Link
        href={"/contact-us"}
        className="hidden lg:flex h-[50px] w-[140px] rounded-[10px] bg-[#004BB1] text-white text-[18px] font-semibold  items-center justify-center"
      >
        Get Started
      </Link>

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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={
                  ("",
                  pathname === item.href
                    ? "text-primary"
                    : "text-secondary hover:text-primary")
                }
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <Link
            href={"/contact-us"}
            onClick={() => setIsOpen(false)}
            className="h-[50px] w-full rounded-[10px] bg-[#004BB1] text-white text-[14px] font-semibold flex items-center justify-center"
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
