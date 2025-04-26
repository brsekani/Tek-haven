"use client";

import CountUp from "react-countup";
import Image from "next/image";
import achievementBgIcon from "@/public/images/achievement-bg-icon.png";

export default function OurAchievement() {
  return (
    <div className="relative w-full h-auto lg:h-[497px] bg-[url('/images/achievement-bg.png')] bg-[length:200%] bg-center bg-no-repeat rounded-[10px] mt-[54px] md:mt-[125px] overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-95 rounded-[10px] z-0"></div>

      <Image
        src={achievementBgIcon}
        alt="achievementBgIcon"
        className="absolute z-0"
      />

      <div className="relative z-10 w-full h-full px-6 sm:px-12 md:px-20 lg:px-[100px] py-10 text-white flex flex-col lg:flex-row items-start lg:items-center gap-[79px] lg:gap-[121px]">
        <div className="w-full lg:max-w-[531px] space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-[45px] leading-[110%] font-bold">
            Our Achievement
          </h1>
          <p className="text-base sm:text-lg md:text-[24px] leading-[120%]">
            Delivering impactful solutions that drive success. Celebrating
            milestones and achievements in digital innovation.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex justify-between flex-wrap gap-4">
            <div className="flex-1 min-w-[120px] flex flex-col items-center">
              <h1 className="text-2xl md:text-[45px] font-bold leading-[100%]">
                <CountUp end={5} duration={2} />+
              </h1>
              <p className="text-sm md:text-[24px] text-center">
                Years Experience
              </p>
            </div>

            <div className="flex-1 min-w-[120px] flex flex-col items-center">
              <h1 className="text-2xl md:text-[45px] font-bold leading-[100%]">
                <CountUp end={100} duration={2} />+
              </h1>
              <p className="text-sm md:text-[24px] text-center whitespace-nowrap">
                Projects Completed
              </p>
            </div>
          </div>

          <div className="flex justify-between flex-wrap gap-4">
            <div className="flex-1 min-w-[120px] flex flex-col items-center">
              <h1 className="text-2xl md:text-[45px] font-bold leading-[100%]">
                <CountUp end={80} duration={2} />+
              </h1>
              <p className="text-sm md:text-[24px] text-center">
                Satisfied Clients
              </p>
            </div>

            <div className="flex-1 min-w-[120px] flex flex-col items-center">
              <h1 className="text-2xl md:text-[45px] font-bold leading-[100%]">
                <CountUp end={80} duration={2} />+
              </h1>
              <p className="text-sm md:text-[24px] text-center">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
