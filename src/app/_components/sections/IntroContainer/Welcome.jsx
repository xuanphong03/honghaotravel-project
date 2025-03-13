"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Welcome() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".text-zoom-in", {
        scale: 0.8,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".box-zoom-out",
          toggleActions: "play none none none",
        },
      });
      gsap.to(".box-zoom-out", {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".box-zoom-out",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );
  return (
    <section
      id="welcome"
      ref={container}
      className="xl:min-w-full xl:min-h-screen min-w-full min-h-0 flex flex-col items-center relative z-[1]"
    >
      <div className="text-zoom-in xl:absolute xl:top-0 xl:left-1/2 xl:-translate-x-1/2 text-center py-[1rem] z-10 scale-100">
        <h3 className="lg:text-[1.125rem] text-[0.875rem] md:text-[2rem] font-bold leading-[1] text-white/40 mb-[0.5rem]">
          Welcome to...
        </h3>
        <h2 className="text-green-light font-black text-[1.45rem] md:text-[5rem] font-londrina-solid leading-none">
          Ha Giang Naturally
        </h2>
        <Image
          alt="Hong Hao Travel"
          width={500}
          height={500}
          src="/images/beautiful-text.png"
          className="lg:w-[23.875rem] lg:h-[18.75rem] mx-auto object-contain mt-[-1rem] w-[9rem] h-[7rem] md:w-[30rem] md:h-[20rem]"
        />
      </div>
      <div className="box-zoom-out w-full h-full hidden lg:block scale-50">
        <video
          type="video/mp4"
          loop
          autoPlay
          playsInline
          src="https://cms.honghaotravel.com/wp-content/uploads/0622.mov"
          className="w-full h-auto 2xl:h-full rounded-[1rem] overflow-hidden object-cover"
        ></video>
      </div>
      <video
        type="video/mp4"
        loop
        autoPlay
        playsInline
        src="https://cms.honghaotravel.com/wp-content/uploads/0622.mov"
        className="lg:hidden w-full h-auto 2xl:h-full rounded-[1rem] overflow-hidden object-cover"
      ></video>
    </section>
  );
}
