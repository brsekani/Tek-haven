import ProjectKickoff from "../_components/ProjectKickoff";
import Image from "next/image";
import elispeimage4 from "@/public/images/elispeimage4.png";
import OladimejiDosunmu from "@/public/images/OladimejiDosunmu.png";
import VictorMorgan from "@/public/images/VictorMorgan.png";
import KoviPeace from "@/public/images/KoviPeace.png";
import OgundiranAdeniyi from "@/public/images/OgundiranAdeniyi.png";
import DoyinAkintola from "@/public/images/DoyinAkintola.png";
import AyomideTemilade from "@/public/images/AyomideTemilade.png";
import AdisaDamilare from "@/public/images/AdisaDamilare.png";
import AdejumoAishat from "@/public/images/AdejumoAishat.png";
import AdenijiGodwin from "@/public/images/AdenijiGodwin.png";
import AfolayanOlamide from "@/public/images/AfolayanOlamide.png";
import FaithAustin from "@/public/images/FaithAustin.png";
import QuwamAkeem from "@/public/images/QuwamAkeem.png";
import DavidAdeshina from "@/public/images/DavidAdeshina.png";
import SalmaGambo from "@/public/images/SalmaGambo.png";
import DavidFaloye from "@/public/images/DavidFaloye.png";
import GeorgeOlatoyan from "@/public/images/GeorgeOlatoyan.png";
import FolaweOluwole from "@/public/images/FolaweOluwole.png";
import IsholaAbdulquadri from "@/public/images/IsholaAbdulquadri.png";
import SamuelOkoduwa from "@/public/images/SamuelOkoduwa.png";
import AbiodunFaruq from "@/public/images/AbiodunFaruq.png";
import YusufMusa from "@/public/images/YusufMusa.png";
import OseoboSuccess from "@/public/images/OseoboSuccess.png";
import ChimezieDeclan from "@/public/images/ChimezieDeclan.png";

const staffs = [
  {
    name: "Oladimeji Dosunmu",
    position: "Director",
    image: OladimejiDosunmu,
  },
  {
    name: "Victor Morgan",
    position: "Project Manager",
    image: VictorMorgan,
  },
  {
    name: "Kovi Peace",
    position: "Project Manager",
    image: KoviPeace,
  },
  {
    name: "Ogundiran Adeniyi",
    position: "Lead Product Marketer",
    image: OgundiranAdeniyi,
  },
  {
    name: "Doyin Akintola",
    position: "Product  Manager",
    image: DoyinAkintola,
  },
  {
    name: "Ayomide Temilade",
    position: "Human Resource Manager",
    image: AyomideTemilade,
  },
  {
    name: "Adisa Damilare",
    position: "Customer Service Manager",
    image: AdisaDamilare,
  },
  {
    name: "Adejumo Aishat",
    position: "Social Media Manager",
    image: AdejumoAishat,
  },
  {
    name: "Adeniji Godwin",
    position: "Creative Director",
    image: AdenijiGodwin,
  },
  {
    name: "Afolayan Olamide",
    position: "Product Designer",
    image: AfolayanOlamide,
  },
  {
    name: "Faith Austin",
    position: "Product Designer",
    image: FaithAustin,
  },
  {
    name: "Quwam Akeem",
    position: "Product Designer",
    image: QuwamAkeem,
  },
  {
    name: "David Adeshina",
    position: "Mobile Developer",
    image: DavidAdeshina,
  },
  {
    name: "Salma Gambo",
    position: "Mobile Developer",
    image: SalmaGambo,
  },
  {
    name: "David Faloye",
    position: "Game Developer",
    image: DavidFaloye,
  },
  {
    name: "George Olatoyan",
    position: "Frontend Developer",
    image: GeorgeOlatoyan,
  },
  {
    name: "Folawe Oluwole",
    position: "Frontend Developer",
    image: FolaweOluwole,
  },
  {
    name: "Ishola Abdulquadri",
    position: "Back-End Developer",
    image: IsholaAbdulquadri,
  },
  {
    name: "Samuel Okoduwa",
    position: "Back-End Developer",
    image: SamuelOkoduwa,
  },
  {
    name: "Abiodun Faruq",
    position: "Back-End Developer",
    image: AbiodunFaruq,
  },
  {
    name: "Yusuf Musa",
    position: "Cyber security Analyst",
    image: YusufMusa,
  },
  {
    name: "Oseobo Success",
    position: "Cyber security Analyst",
    image: OseoboSuccess,
  },
  {
    name: "Chimezie Declan",
    position: "Cyber security Analyst",
    image: ChimezieDeclan,
  },
];

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
        {staffs.map((staff, i) => (
          <div
            key={i}
            className="md:max-w-[386px] max-h-[459px] w-full h-full rounded-[10px] space-y-[18px]"
          >
            <Image
              src={staff.image}
              alt={`Member ${i + 1}`}
              className="h-[78.65%] object-full rounded-[10px]"
            />
            <div>
              <h4 className="text-[32px] leading-[100%] font-medium text-primary">
                {staff.name}
              </h4>
              <p className="text-[24px] leading-[100%] text-secondary">
                {staff.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ProjectKickoff />
    </section>
  );
}
