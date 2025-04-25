// components/FeatureCard.tsx
import Image from "next/image";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div
      className="border border-[#ADB5BD] py-[23px] px-[26px] rounded-[10px] shadow h-[251px] gap-[31px] flex flex-col"
      style={{
        boxShadow: `
        6px -2px 14px 0px #0000001A,
        24px -7px 25px 0px #00000017,
        54px -16px 34px 0px #0000000D,
        97px -28px 40px 0px #00000003,
        151px -44px 44px 0px #00000000
      `,
      }}
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
