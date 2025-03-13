"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import InfinitySlide from "../../../../../components/common/InfinitySlide/InfinitySlide";
import "./Banner.css";

export default function Banner() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".fade-in-up", {
        y: 0,
        opacity: 1,
        duration: 0.75,
      });
      gsap.to(".fade-in-left", {
        x: 0,
        opacity: 1,
        duration: 0.75,
      });
      gsap.to(".background-overlay", {
        opacity: 0,
        duration: 1,
      });
    },
    { scope: container }
  );
  return (
    <section
      id="banner"
      ref={container}
      className="relative w-full h-[21.04713rem] md:h-[43.3125rem]"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/destination/banner-bg.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 w-full h-full custom-bg-gradient"></div>
      <div className="hidden md:block absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2">
        <Image
          width={500}
          height={500}
          alt="Hong Hao Travel"
          src="/images/destination/map.png"
          className="fade-in-up w-full h-full object-cover translate-y-[5%] opacity-0"
        />
      </div>
      <div className="absolute xl:max-w-[100rem] left-1/2 z-10 h-full w-full -translate-x-1/2 top-0 opacity-0 translate-y-[5%] fade-in-up">
        <Image
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/destination/banner-text.png"
          className="w-[18.09813rem] h-[7.55425rem] md:w-[41.10125rem] md:h-[17.50006rem] absolute left-[1.25rem] top-[36%] md:left-[5rem] md:top-[9rem]"
        />
      </div>
      <div className="absolute top-0 bottom-0 right-[4.75rem] z-20 hidden md:block translate-x-[5%] fade-in-left opacity-0">
        <InfinitySlide />
      </div>
      <div
        style={{ background: "conic-gradient(#064e3b, #065f46, #064e3b)" }}
        className="background-overlay absolute inset-0 z-[500] contrast-125 pointer-events-none opacity-100"
      ></div>
    </section>
  );
}
