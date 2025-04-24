import Image from "next/image";
import Hero from "./_components/Home/Hero";
import PinnacleSection from "./_components/Home/PinnacleSection";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto w-full h-screen font-sfpro">
      <Hero />
      <PinnacleSection />
    </div>
  );
}
