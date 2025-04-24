import elispeimage1 from "@/public/images/elispeimage1.png";
import elispeimage2 from "@/public/images/elispeimage2.png";
import elispeimage3 from "@/public/images/elispeimage3.png";
import elispeimage4 from "@/public/images/elispeimage4.png";
import frame from "@/public/images/Frame 15.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex sm:flex-col flex-col-reverse gap-[42px] lg:gap-[45px] items-center justify-center sm:mt-[90px] w-full font-sfpro">
      {/* Left Side */}
      <div className="flex items-center justify-center flex-col text-center sm:max-w-[1031px]  w-full">
        {/* Client Images and Text Centered */}
        <div className="flex items-center justify-center gap-[12px] w-full">
          <div className="relative w-[120px] h-10">
            <Image
              src={elispeimage1}
              alt="elispeimage1"
              className="w-10 h-10 rounded-full absolute right-[70px] z-[4]"
              priority
            />
            <Image
              src={elispeimage2}
              alt="elispeimage2"
              priority
              className="w-10 h-10 rounded-full absolute right-[50px] z-[6]"
            />
            <Image
              src={elispeimage3}
              alt="elispeimage3"
              className="w-10 h-10 rounded-full absolute right-[30px] z-[8]"
              priority
            />
            <Image
              src={elispeimage4}
              alt="elispeimage4"
              className="w-10 h-10 rounded-full absolute right-0 z-[10]"
              priority
            />
          </div>

          <p className="text-[20px] leading-[100%] text-primary whitespace-nowrap">
            80+ Satisfied Clients
          </p>
        </div>

        {/* Rest of the Hero Content */}
        <h1 className="text-[36px] lg:text-[70px] font-bold leading-[120%] text-primary mt-[10px]">
          Transforming ideas into impactful solutions
        </h1>

        <p className="text-[16px] lg:text-[24px] leading-[150%] text-secondary md:mt-[27px] mt-5">
          Innovative tech solutions for a brighter future. We design and deliver
          bespoke digital tools and services. Empowering businesses and
          communities to thrive.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:mt-5 mt-3 sm:text-[24px] text-[20px] leading-[100%] font-bold w-full items-center justify-center">
          <button className="sm:w-[290px] w-full sm:h-[79px] h-[60px] rounded-[10px] bg-[var(--color-primary)] text-white hover:bg-[#0054d1] transition-all duration-300 ease-in-out cursor-pointer">
            Get Started
          </button>

          <button className="sm:w-[290px] w-full sm:h-[79px] h-[60px] rounded-[10px] border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      <Image
        src={frame}
        alt="person 1"
        className="w-full h-full object-cover max-w-[1207px] mt-[20px]"
        priority
      />
    </div>
  );
}
