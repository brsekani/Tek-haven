import "./globals.css";
import "./fonts.css";

import Footer from "./_components/Footer";
import Nav from "./_components/Nav";

export const metadata = {
  title: "Tekhaven Solutions",
  description:
    "At Tekhaven Solutions, we specialize in transforming innovative ideas into impactful solutions that drive success. Explore our digital services today.",
  keywords:
    "Tekhaven Solutions, digital solutions, innovation, impactful solutions, software development",
  author: "Tekhaven Solutions",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased md:pt-[30px] pt-[14px]  w-full`}
        style={{ fontFamily: "var(--font-sf-pro-display)" }}
      >
        <div className="md:px-[45px] px-[25px]">
          <Nav />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
