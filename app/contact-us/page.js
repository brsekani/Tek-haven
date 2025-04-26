"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import phone from "@/public/svg/phone.svg";
import mail from "@/public/svg/mail.svg";
import location from "@/public/svg/location.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactFormSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  description: Yup.string().required("Description is required"),
});

export default function Page() {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const iconsRef = useRef([]);
  const formRef = useRef(null);
  const submitButtonRef = useRef(null);

  useEffect(() => {
    // Animate section heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate subheading
    gsap.fromTo(
      subHeadingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subHeadingRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate icons (phone, email, location)
    gsap.fromTo(
      iconsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate form fields
    gsap.set(formRef.current.querySelectorAll("input, textarea"), {
      opacity: 0,
      y: 40,
    });
    gsap.to(formRef.current.querySelectorAll("input, textarea"), {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 85%",
      },
    });

    // Animate submit button
    gsap.fromTo(
      submitButtonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: submitButtonRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto w-full h-full font-sfpro flex items-center flex-col">
      <div
        ref={headingRef}
        className="md:mt-[90px] mt-[65px] md:mb-[128px] mb-[51px] flex items-center flex-col md:gap-[27px] gap-[10px] text-center px-4 max-w-[1100px] w-full"
      >
        <h1 className="text-[36px] sm:text-[48px] lg:text-[70px] font-bold leading-[120%] text-primary">
          If You Have Any Query, Feel Free To Contact Us
        </h1>
        <p
          ref={subHeadingRef}
          className="text-[16px] sm:text-[20px] lg:text-[24px] leading-[100%] text-secondary"
        >
          Our team is here to help. Get in touch with any questions or concerns.
        </p>
      </div>

      <div className="flex w-full items-start justify-center md:justify-start md:pl-[66px]">
        <div className="flex flex-col gap-[22px] lg:gap-[76px] w-full max-w-5xl items-center md:items-start">
          {/* Row 1: Phone & Email */}
          <div className="flex flex-wrap justify-center lg:justify-between gap-[22px] lg:gap-[186px] w-full">
            {/* Phone */}
            <div
              ref={(el) => (iconsRef.current[0] = el)}
              className="flex flex-col items-center md:items-start gap-[19px] text-center md:text-left"
            >
              <div className="md:w-16 w-12 md:h-16 h-12 border border-[#ADB5BD] rounded-[13.33px] flex items-center justify-center">
                <Image src={phone} alt="Phone Icon" />
              </div>
              <Link
                href="tel:+2348131324588"
                className="md:text-[32px] text-[16px] leading-[100%] text-secondary"
              >
                +234 813 132 4588
              </Link>
            </div>

            {/* Email */}
            <div
              ref={(el) => (iconsRef.current[1] = el)}
              className="flex flex-col items-center md:items-start gap-[19px] text-center md:text-left"
            >
              <div className="md:w-16 w-12 md:h-16 h-12 border border-[#ADB5BD] rounded-[13.33px] flex items-center justify-center">
                <Image src={mail} alt="Email Icon" />
              </div>
              <Link
                href="mailto:admin@tekhavensolutions.co.uk"
                className="md:text-[32px] text-[16px] leading-[100%] text-secondary"
              >
                admin@tekhavensolutions.co.uk
              </Link>
            </div>
          </div>

          {/* Optional: Another Contact like Location */}
          <div
            ref={(el) => (iconsRef.current[2] = el)}
            className="flex flex-col items-center md:items-start gap-[19px] text-center md:text-left"
          >
            <div className="md:w-16 w-12 md:h-16 h-12 border border-[#ADB5BD] rounded-[13.33px] flex items-center justify-center">
              <Image src={location} alt="Location Icon" />
            </div>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=123+Tech+Avenue,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-[32px] text-[16px] leading-[100%] text-secondary"
            >
              123 Tech Avenue, Lagos
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:mt-[96px] mt-[132px] border-t border-[#ADB5BD] pt-[38px] md:pl-[66px] md:space-y-[68px] space-y-[51px]">
        <h6 className="text-[24px] leading-[100%] text-primary">
          Or fill out the form below
        </h6>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            subject: "",
            description: "",
          }}
          validationSchema={ContactFormSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form submitted:", values);
            resetForm();
          }}
        >
          {() => (
            <Form ref={formRef} className="w-full flex flex-col gap-[46px]">
              <div className="w-full flex md:flex-row flex-col gap-[46px]">
                {/* Full Name */}
                <div className="md:w-1/2 w-full flex flex-col md:gap-5 gap-[10px]">
                  <label className="md:text-[32px] text-[20px] text-secondary">
                    Full Name
                  </label>
                  <Field
                    name="fullName"
                    placeholder="Ademola James"
                    className="h-[70px] border-[0.5px] border-[#ADB5BD] px-[27px] rounded-[5px] focus:outline-none text-[20px] leading-[100%] placeholder:text-[#ADB5BD]"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Email */}
                <div className="md:w-1/2 w-full flex flex-col md:gap-5 gap-[10px]">
                  <label className="md:text-[32px] text-[20px] text-secondary">
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Ademolajames@gmail.com"
                    className="h-[70px] border-[0.5px] border-[#ADB5BD] px-[27px] rounded-[5px] focus:outline-none text-[20px] leading-[100%] placeholder:text-[#ADB5BD]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="w-full flex flex-col md:gap-5 gap-[10px]">
                <label className="md:text-[32px] text-[20px] text-secondary">
                  Subject
                </label>
                <Field
                  name="subject"
                  placeholder="I need project"
                  className="h-[70px] border-[0.5px] border-[#ADB5BD] px-[27px] rounded-[5px] focus:outline-none text-[20px] leading-[100%] placeholder:text-[#ADB5BD]"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Description */}
              <div className="w-full flex flex-col md:gap-5 gap-[10px]">
                <label className="md:text-[32px] text-[20px] text-secondary">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Your message here..."
                  className="md:h-[112px] h-[208px] resize-none border-[0.5px] border-[#ADB5BD] px-[27px] py-5 rounded-[5px] focus:outline-none text-[20px] placeholder:text-[#ADB5BD]"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  ref={submitButtonRef}
                  type="submit"
                  className="md:w-1/2 w-full h-[79px] bg-primary rounded-[10px] cursor-pointer text-[16px] sm:text-[20px] lg:text-[24px] leading-[100%] text-white md:-mt-[16px]"
                >
                  Send a message
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
