"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "@/public/images/elispeimage1.png";
import Image from "next/image";
import gsap from "gsap";

export default function OurTrustedClients() {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!cardsRef.current) return;

    gsap.set(cardsRef.current, { opacity: 0, y: 50 });

    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex items-center flex-col mt-[80px] px-4">
      <div className="max-w-[793px] w-full text-center space-y-5 mb-12">
        <h1 className="text-primary text-[36px] md:text-[45px] leading-[100%] font-bold">
          Our Trusted Clients
        </h1>
        <p className="text-[18px] md:text-[24px] leading-[120%] text-secondary">
          Our Clients&apos; feedback speaks volumes. Discover the stories of
          success, collaboration, and the impact we’ve delivered together.
        </p>
      </div>

      <div className="w-full max-w-6xl">
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
          {[1, 2, 3, 4].map((_, i) => (
            <SwiperSlide key={i}>
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                className="bg-white shadow-lg rounded-xl md:pt-[76px] md:px-[25px] md:pb-[25px] p-[25px] md:min-h-[396px] min-h-[299px] flex flex-col justify-between md:max-w-[534px] sm:max-w-[380px] w-full border border-[#D1D1D6]"
              >
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Tek Haven&apos;s innovative solutions transformed our IT
                  infrastructure. Their expertise and support have been
                  invaluable. Tek Haven&apos;s innovative solutions transformed
                  our IT infrastructure. Their expertise and support have been
                  invaluable.Tek Haven&apos;s innovative solutions transformed
                  our IT infrastructure. Their expertise and support have been
                  invaluable.
                </p>

                <div className="flex flex-row items-center gap-[23px]">
                  <Image
                    src={image1}
                    alt="image1"
                    className="w-[60px] h-[60px] rounded-[10px]"
                  />

                  <div className="space-y-[10px]">
                    <h1 className="text-[18px] md:text-[24px] leading-[100%] font-medium text-secondary">
                      Client {i + 1}
                    </h1>
                    <p className="text-[14px] md:text-[16px] leading-[100%]  text-[#8E8E93]">
                      CEO, Company {i + 1}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
