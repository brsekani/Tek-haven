"use client";

import target from "@/public/svg/target.svg";
import team from "@/public/svg/team.svg";
import thinking from "@/public/svg/thinking.svg";
import FeatureCard from "./FeatureCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: target,
    title: "Client-Centric Approach",
    description:
      "Your goals become our mission. We prioritize understanding your needs and exceeding expectations.",
  },
  {
    icon: thinking,
    title: "Innovative Thinking",
    description:
      "Transforming challenges into opportunities. Embracing creativity and forward-thinking solutions.",
  },
  {
    icon: team,
    title: "Expert Team",
    description:
      "Our expert team brings unparalleled expertise to every project. We're committed to delivering high-quality solutions.",
  },
];

export default function PinnacleSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate the heading and paragraph
      gsap.from(".text-content", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate feature cards one after another
      gsap.from(".feature-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-[50px] md:mt-[135px] mt-[129px]"
    >
      <div className="space-y-5 max-w-[793px] w-full text-content">
        <h2 className="md:text-[45px] text-[36px] leading-[100%] font-bold text-primary text-center">
          The pinnacle of IT excellence
        </h2>
        <p className="md:text-[24px] text-[20px] leading-[100%] text-center text-secondary">
          At TekHaven Solutions, we believe technology is the bridge between
          challenges and transformative solutions.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-[31px] w-full"
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            className="feature-card"
          />
        ))}
      </div>
    </div>
  );
}
