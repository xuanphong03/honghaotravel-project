"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";

export default function Banner() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".background-overlay", {
        delay: 0.5,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );
  return (
    <section
      id="banner"
      ref={container}
      className="relative w-full h-[21.04713rem] md:h-screen bg-green-dark"
    >
      <Image
        alt="Hong Hao Travel"
        width={2000}
        height={1000}
        src="/images/contact-us/bg-banner.jpeg"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-[35%] left-[1.25rem] brightness-125 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ">
        <Image
          alt="Hong Hao Travel"
          width={2000}
          height={1000}
          className="w-[51.52831rem] h-[17.125rem] object-contain max-md:hidden"
          src="/images/contact-us/banner-text.png"
        />
        <Image
          alt="Hong Hao Travel"
          width={400}
          height={200}
          className="w-[18.09813rem] h-[7.55425rem] object-contain md:hidden"
          src="/images/contact-us/banner-text.png"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-[5rem] md:h-[19.8125rem] bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]"></div>
      <div
        style={{ background: "conic-gradient(#064e3b, #065f46, #064e3b)" }}
        className="background-overlay absolute inset-0 z-[500] contrast-125 pointer-events-none opacity-100"
      ></div>
    </section>
  );
}
