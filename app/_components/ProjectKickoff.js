"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import achievementBgIcon from "@/public/images/achievement-bg-icon.png";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectKickoff() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      )
      .fromTo(
        iconRef.current,
        { opacity: 0, y: 40 },
        { opacity: 0.4, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6"
      );

    // Optional: floating animation for background icon
    gsap.to(iconRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-auto lg:h-[497px] bg-[url('/images/achievement-bg.png')] bg-[length:200%] bg-center bg-no-repeat rounded-[10px] mt-[54px] md:mt-[125px] overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary opacity-95 rounded-[10px] z-0"></div>

      <Image
        ref={iconRef}
        src={achievementBgIcon}
        alt="achievementBgIcon"
        className="absolute z-0 opacity-40"
      />

      <div className="relative z-10 w-full h-full px-6 sm:px-12 md:px-20 lg:px-[100px] py-10 text-white flex flex-col justify-center items-center">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-[45px] leading-[110%] font-bold max-w-[70%] sm:max-w-[80%] md:max-w-[60%] text-center"
        >
          Are you prepared to kick off your project?
        </h1>

        <p
          ref={textRef}
          className="text-base sm:text-lg md:text-[24px] leading-[120%] mt-5 text-center"
        >
          Let&apos;s bring your vision to life!
        </p>

        <button
          ref={buttonRef}
          className="sm:w-[320px] w-full sm:h-[79px] h-[60px] mt-[31px] rounded-[10px] text-[var(--color-primary)] bg-white text-[24px] leading-[100%] font-bold transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 cursor-pointer"
        >
          Book a call now
        </button>
      </div>
    </div>
  );
}
