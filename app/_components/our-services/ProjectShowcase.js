"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "@/public/images/elispeimage1.png";
import eGovernanceApplications from "@/public/images/E-governanceApplications.png";
import healthcareApplications from "@/public/images/HealthcareApplications.png";

gsap.registerPlugin(ScrollTrigger);

const data = [1, 2, 3, 4];

export default function ProjectShowcase() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
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

    gsap.set(cardsRef.current, { opacity: 0, y: 50 });

    gsap.to(cardsRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="mt-[101px] flex items-center flex-col gap-[31px] w-full h-full">
      <h1
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-[45px] leading-[110%] font-bold text-center w-full max-w-[950px] text-primary"
      >
        We pride ourselves on delivering a wide range of successful projects
      </h1>

      <div className="w-full h-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((_, i) => (
            <SwiperSlide
              key={i}
              className="md:!w-[561px] w-full"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="bg-white shadow-lg rounded-xl h-[516px] flex flex-col border border-[#D1D1D6] md:max-w-[561px] sm:max-w-[380px] w-full overflow-hidden">
                <div className="h-[60%] w-full relative">
                  <Image
                    src={image1}
                    alt="image1"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="h-[40%] space-y-[20px] px-[18px] pt-10">
                  <h1 className="text-[18px] md:text-[24px] leading-[100%] font-medium text-primary">
                    Client {i + 1}
                  </h1>
                  <p className="text-[14px] md:text-[16px] leading-[100%] text-secondary">
                    Transforming patient care, streamlining workflows, and
                    empowering professionals with innovative technology
                    solutions that improve outcomes and save lives. {i + 1}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
