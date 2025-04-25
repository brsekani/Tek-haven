import target from "@/public/svg/target.svg";
import team from "@/public/svg/team.svg";
import thinking from "@/public/svg/thinking.svg";
import Image from "next/image";
import FeatureCard from "./FeatureCard";

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
  return (
    <div className="flex flex-col items-center justify-center gap-[50px] md:mt-[135px] mt-[129px]">
      <div className="space-y-5 max-w-[793px] w-full">
        <h2 className="md:text-[45px] text-[36px] leading-[100%] font-bold text-primary text-center">
          The pinnacle of IT excellence
        </h2>
        <p className="md:text-[24px] text-[20px] leading-[100%] text-center text-secondary">
          At TekHaven Solutions, we believe technology is the bridge between
          challenges and transformative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[31px] w-full">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
