import React from "react";
import Image from "next/image";
import "./CloudFly.css";

export default function CloudFly() {
  return (
    <div
      id="cloud_fly"
      className="w-full h-[4rem] md:h-[13.5rem] z-10 relative bg-transparent overflow-hidden"
    >
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        src="/images/home/weather/cloud1.png"
        className="object-cover object-top min-w-[108vw] animation_cloud1"
      />
      <div
        className="absolute bottom-0 left-0 z-20 w-full h-6 md:h-[6rem]"
        style={{
          background:
            "linear-gradient(0deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)",
        }}
      ></div>
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        className="animation_cloud2 absolute -top-4 md:-top-6 left-0 md:left-[10%] z-10 w-[50rem] object-cover"
        src="/images/home/weather/cloud2.png"
      />
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        className="animation_cloud3 absolute top-0 md:top-5 right-0 z-10 w-[50rem] object-cover"
        src="/images/home/weather/cloud3.png"
      />
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        src="/images/home/weather/cloud4.png"
        className="animate-cloud-4 absolute top-0 md:top-4 right-0 md:right-[30%] z-10 w-[50rem] object-cover"
      />
    </div>
  );
}
