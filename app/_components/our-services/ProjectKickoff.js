import Image from "next/image";
import achievementBgIcon from "@/public/images/achievement-bg-icon.png";

export default function ProjectKickoff() {
  return (
    <div className="relative w-full h-auto lg:h-[497px] bg-[url('/images/achievement-bg.png')] bg-[length:200%] bg-center bg-no-repeat rounded-[10px] mt-[54px] md:mt-[125px] overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-95 rounded-[10px] z-0"></div>

      <Image
        src={achievementBgIcon}
        alt="achievementBgIcon"
        className="absolute z-0 opacity-40 animate-fadeIn"
      />

      <div className="relative z-10 w-full h-full px-6 sm:px-12 md:px-20 lg:px-[100px] py-10 text-white flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-[45px] leading-[110%] font-bold max-w-[70%] sm:max-w-[80%] md:max-w-[60%] text-center animate-slideInUp">
          Are you prepared to kick off your project?
        </h1>
        <p className="text-base sm:text-lg md:text-[24px] leading-[120%] mt-5 text-center">
          Let&apos;s bring your vision to life!
        </p>

        <button className="sm:w-[320px] w-full sm:h-[79px] h-[60px] mt-[31px] rounded-[10px] text-[var(--color-primary)] bg-white text-[24px] leading-[100%] font-bold transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 cursor-pointer">
          Book a call now
        </button>
      </div>
    </div>
  );
}
