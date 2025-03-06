import React from "react";
import Image from "next/image";
import AboutUs from "./AboutUs";
import OurTour from "./OurTour";
import "./Introduction.css";
import Welcome from "./Welcome";

export default function Introduction() {
  return (
    <div
      id="introduction"
      className="relative w-full bg-green-normal mt-[100vh] !z-[9999]"
    >
      <div className="absolute inset-0 z-[1]">
        <Image
          alt="Hong Hao Travel"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          src="/images/bg-rung-nui.png"
        />
      </div>

      <div className="relative font-londrina-solid">
        <AboutUs />
        <OurTour />
        <Welcome />
      </div>
    </div>
  );
}
