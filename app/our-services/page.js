"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServiceCard from "../_components/our-services/ServiceCard";
import customWebsite from "@/public/svg/customWebsite.svg";
import webDev from "@/public/svg/webDev.svg";
import aiAndMachineLearning from "@/public/svg/aiAndMachineLearning.svg";
import appDev from "@/public/svg/appDev.svg";
import cloudIntegration from "@/public/svg/cloudIntegration.svg";
import VR from "@/public/svg/VR.svg";
import ProjectShowcase from "../_components/our-services/ProjectShowcase";
import ProjectKickoff from "../_components/ProjectKickoff";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: customWebsite,
    title: "Custom Software",
    description:
      "Tailored solutions for unique needs. Empowering businesses with precision and efficiency. Unlocking growth and innovation.",
  },
  {
    icon: aiAndMachineLearning,
    title: "AI and Machine Learning",
    description:
      "Smart solutions that leverage data to automate processes, predict trends, and drive smarter decisions.",
  },
  {
    icon: webDev,
    title: "Web Development",
    description:
      "From stunning websites to advanced web-based platforms, we ensure seamless online presence and functionality.",
  },
  {
    icon: appDev,
    title: "Apps Development",
    description:
      "Designing user-friendly apps for Android and iOS, focusing on scalability and superior user experiences.",
  },
  {
    icon: cloudIntegration,
    title: "Cloud Integration",
    description:
      "Enabling secure and scalable cloud computing solutions to power businesses globally.",
  },
  {
    icon: VR,
    title: "AR/VR & 3D Technology",
    description:
      "Immersive technologies for real estate, gaming, and e-commerce to bring ideas to life.",
  },
];

export default function Page() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate service cards
    ScrollTrigger.batch(cardsRef.current, {
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          }
        );
      },
      start: "top 90%",
    });
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto w-full h-full font-sfpro">
      <div
        ref={headingRef}
        className="md:mt-[90px] mt-[65px] md:mb-[128px] mb-[51px] flex items-center flex-col md:gap-[27px] gap-[10px] text-center px-4"
      >
        <h1 className="text-[36px] sm:text-[48px] lg:text-[70px] font-bold leading-[120%] text-primary">
          Our Technology Solutions
        </h1>
        <p className="text-[16px] sm:text-[20px] lg:text-[24px] leading-[100%] text-secondary">
          Powering innovation through specialized Expertise
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[31px] w-full">
        {features.map((feature, index) => (
          <div key={index} ref={addToRefs}>
            <ServiceCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>

      <ProjectShowcase />
      <ProjectKickoff />
    </section>
  );
}
