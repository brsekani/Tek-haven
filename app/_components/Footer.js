"use client";

import Image from "next/image";
import logo from "@/public/svg/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/our-services" },
  { name: "Our Team", href: "/our-team" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#F5F4FF] px-10 md:pt-[60px] md:pb-[30px] py-10 mt-[185px]">
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-[43px]">
        {/* Logo and Description */}
        <div className="flex flex-col gap-5 max-w-[322px]">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo"
              className="cursor-pointer w-[150px] h-auto"
            />
          </Link>
          <p className="text-[15px] leading-[100%] text-secondary">
            Established with the vision to innovate, simplify, and empower, we
            are a dynamic technology solutions company that creates impactful
            digital tools and services tailored to meet the unique needs of
            businesses and communities.
          </p>
        </div>

        <div className="flex flex-row justify-between md:gap-[71px] gap-5">
          {/* Menu Links */}
          <div className="flex flex-col gap-[18px] text-secondary">
            <h3 className="md:text-[24px] text-[14px] font-medium leading-[100%]">
              Menu
            </h3>
            <ul className="md:text-[20px] text-[14px] leading-[100%] flex flex-col gap-[11px]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    ("",
                    pathname === item.href
                      ? "text-primary"
                      : "text-secondary hover:text-primary")
                  }
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-[18px] text-secondary">
            <h3 className="md:text-[24px] text-[14px] font-medium leading-[100%]">
              Services
            </h3>
            <ul className="md:text-[20px] text-[14px] leading-[100%] space-y-[11px]">
              <li className="">Software Development</li>
              <li className="">AI & Machine Learning</li>
              <li className="">Apps Development</li>
              <li className="">Cloud Integration</li>
            </ul>
          </div>

          {/* Socials links */}
          <div className="flex flex-col gap-[18px] text-secondary">
            <h3 className="md:text-[24px] text-[14px] font-medium leading-[100%]">
              Socials
            </h3>
            <ul className="md:text-[20px] text-[14px] leading-[100%] space-y-[11px]">
              <li className="hover:text-primary cursor-pointer">
                <Link
                  href="https://www.instagram.com/tekhavensolutions/profilecard/?igsh=MXM5dWJ3YWtjMWQzMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>

              <li className="hover:text-primary cursor-pointer">
                <Link
                  href="https://www.facebook.com/share/1ATBc9tNVL/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <Link
                  href="https://www.linkedin.com/posts/tekhaven-solutions_tekhavensolutions-innovativesolutions-businesssuccess-activity-7289979448576167936-2OS6?utm_source=share&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedln
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-secondary" />
      <div className=" mt-[27px] flex md:flex-row flex-col md:items-center justify-between gap-[10px]">
        <p className="text-[14px] leading-[100%]">
          © {new Date().getFullYear()} TekHaven Solutions. All rights reserved.
          <br />
          <span>Designed by TekHaven Solutions</span>
        </p>

        <div className="flex items-center gap-4 md:text-[20px] text-[14px] leading-[100%] text-secondary">
          <a
            href="mailto:admin@tekhavensolutions.co.uk"
            className="hover:underline"
          >
            admin@tekhavensolutions.co.uk
          </a>
          <a href="tel:+2348131324588" className="hover:underline">
            +234 813 132 4588
          </a>
        </div>
      </div>
    </footer>
  );
}
