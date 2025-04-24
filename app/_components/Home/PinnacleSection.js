import target from "@/public/svg/target.svg";
import team from "@/public/svg/team.svg";
import thinking from "@/public/svg/thinking.svg";
import Image from "next/image";

export default function PinnacleSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px] md:mt-[135px] mt-[129px]">
      <div className="space-y-5 max-w-[793px] w-full">
        <h2 className="sm:text-[45px] text-[36px] leading-[100%] font-bold text-primary text-center">
          The pinnacle of IT excellence
        </h2>
        <p className="sm:text-[24px] text-[20px] leading-[100%] text-center text-secondary">
          At TekHaven Solutions, we believe technology is the bridge between
          challenges and transformative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[31px] w-full">
        <div className="border border-[#ADB5BD] py-[23px] px-[26px] rounded-[10px] shadow h-[251px] justify-between flex flex-col">
          <Image src={target} alt="target" className="w-16 h-16" />
          <div className="space-y-[9px]">
            <h3 className="text-[24px] leading-[100%] font-medium text-secondary">
              Client-Centric Approach
            </h3>
            <p className="text-[20px] leading-[100%] text-secondary">
              Your goals become our mission. We prioritize understanding your
              needs and exceeding expectations.
            </p>
          </div>
        </div>
        <div className="border border-[#ADB5BD] py-[23px] px-[26px] rounded-[10px] shadow h-[251px] justify-between flex flex-col">
          <Image src={thinking} alt="thinking" className="w-16 h-16" />
          <div className="space-y-[9px]">
            <h3 className="text-[24px] leading-[100%] font-medium text-secondary">
              Innovative Thinking
            </h3>
            <p className="text-[20px] leading-[100%] text-secondary">
              Transforming challenges into opportunities. Embracing creativity
              and forward-thinking solutions.
            </p>
          </div>
        </div>
        <div className="border border-[#ADB5BD] py-[23px] px-[26px] rounded-[10px] shadow h-[251px] justify-between flex flex-col">
          <Image src={team} alt="team" className="w-16 h-16" />
          <div className="space-y-[9px]">
            <h3 className="text-[24px] leading-[100%] font-medium text-secondary">
              Expert Team
            </h3>
            <p className="text-[20px] leading-[100%] text-secondary">
              Our expert team brings unparalleled expertise to every project.
              We&apos;re committed to delivering high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
