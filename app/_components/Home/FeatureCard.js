// components/FeatureCard.tsx
import Image from "next/image";

export default function FeatureCard({ icon, title, description, className }) {
  return (
    <div
      className={`border border-[#ADB5BD] py-[23px] px-[26px] rounded-[10px] shadow h-[251px] justify-between flex flex-col ${className}`}
    >
      <Image src={icon} alt={title} className="w-16 h-16" />
      <div className="space-y-[9px]">
        <h3 className="md:text-[24px] text-[20px] leading-[100%] font-medium text-secondary">
          {title}
        </h3>
        <p className="md:text-[20px] text-[16px] leading-[100%] text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
