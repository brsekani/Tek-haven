import Image from "next/image";
import Hero from "./_components/Home/Hero";
import PinnacleSection from "./_components/Home/PinnacleSection";
import OurAchievement from "./_components/Home/OurAchievement";
import OurTrustedClients from "./_components/Home/OurTrustedClients";

export default function Home() {
  return (
    <section className="max-w-[1440px] mx-auto w-full h-full font-sfpro">
      <Hero />
      <PinnacleSection />
      <OurAchievement />
      <OurTrustedClients />
    </section>
  );
}
