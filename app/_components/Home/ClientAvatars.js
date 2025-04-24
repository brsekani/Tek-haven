import Image from "next/image";
import elispeimage1 from "@/public/images/elispeimage1.png";
import elispeimage2 from "@/public/images/elispeimage2.png";
import elispeimage3 from "@/public/images/elispeimage3.png";
import elispeimage4 from "@/public/images/elispeimage4.png";

export default function ClientAvatars() {
  const images = [elispeimage1, elispeimage2, elispeimage3, elispeimage4];

  return (
    <div className="relative w-[120px] h-10">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`client ${index + 1}`}
          className={`w-10 h-10 rounded-full absolute right-[${
            65 - index * 20
          }px] z-[${4 + index * 2}]`}
          // priority
        />
      ))}
    </div>
  );
}
