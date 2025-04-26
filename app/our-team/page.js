import ProjectKickoff from "../_components/ProjectKickoff";
import Image from "next/image";
import elispeimage4 from "@/public/images/elispeimage4.png";

export default function Page() {
  return (
    <section className="max-w-[1440px] mx-auto w-full h-full font-sfpro">
      <div className="md:mt-[90px] mt-[65px] md:mb-[128px] mb-[51px] flex items-center flex-col md:gap-[27px] gap-[10px] text-center px-4">
        <h1 className="text-[36px] sm:text-[48px] lg:text-[70px] font-bold leading-[120%] text-primary max-w-[700px] w-full">
          Meet the Minds Behind{" "}
          <span className="text-white bg-primary px-1 rounded-[10px]">
            TEKHAVEN
          </span>
        </h1>
        <p className="text-[16px] sm:text-[20px] lg:text-[24px] leading-[100%] text-secondary max-w-[800px] w-full">
          Where creativity meets innovation,Delivering exceptional results,
          every time to make long lasting Impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px] w-full">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="md:max-w-[386px] max-h-[459px] w-full h-full rounded-[10px] space-y-[18px]"
          >
            <Image
              src={elispeimage4}
              alt={`Member ${i + 1}`}
              className="h-[78.65%] object-full rounded-[10px]"
            />
            <div>
              <h4 className="text-[32px] leading-[100%] font-medium text-primary">
                Oladimeji Dosunmu
              </h4>
              <p className="text-[24px] leading-[100%] text-secondary">
                Director
              </p>
            </div>
          </div>
        ))}
      </div>

      <ProjectKickoff />
    </section>
  );
}
