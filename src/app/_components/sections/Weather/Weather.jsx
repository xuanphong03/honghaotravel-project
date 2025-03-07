import React from "react";
import WeatherSlide from "./WeatherSlide";
import Image from "next/image";
import "./Weather.css";
// import required modules
export default function Weather() {
  return (
    <section
      id="weather"
      className="relative z-[10] bg-white pb-[2.5rem] pt-[7.75rem]"
    >
      <Image
        alt="cloud"
        width={500}
        height={500}
        src="/images/home/weather/cloud-full.png"
        className="absolute top-[2rem] right-0 left-0 w-full h-[6.185rem] -translate-y-[5rem]"
      />
      <div className="w-full h-screen absolute -top-[13.5rem] left-0 overflow-hidden">
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud1.png"
          className="absolute top-[2rem] -left-[10rem] w-[44.0625rem] h-[18.5625rem] object-fill animation_cloud1"
        />
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud2.png"
          className="absolute top-[6rem] -left-[15.75rem] w-[76.5625rem] h-[64rem] object-fill animation_cloud1"
        />
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud3.png"
          className="absolute top-[2rem] left-[5rem] w-[70.0625rem] h-[67.0625rem] object-fill animation_cloud2"
        />
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud4.png"
          className="absolute top-[2rem] -right-[20rem] w-[70.0625rem] h-[67.0625rem]  object-fill animation_cloud2"
        />
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud5.png"
          className="absolute top-[10rem] -right-[30rem]  w-[70.0625rem] h-[67.0625rem] object-fill animation_cloud2"
        />
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud6.png"
          className="absolute top-[10rem] left-1/2 w-[26.4375rem] h-[25.3125rem]  object-fill animation_cloud1"
        />
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud7.png"
          className="absolute top-[5rem] right-[5rem] w-[31.625rem] h-[30.25rem] object-fill animation_cloud2"
        />
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud8.png"
          className="absolute top-[5rem] left-1/2 w-[48.3125rem] h-[35.3125rem] object-fill animation_cloud2"
        />
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud9.png"
          className="absolute top-[5rem] right-[5rem] w-[60.4375rem] h-[32.0625rem] object-fill animation_cloud2"
        />
        <Image
          alt="cloud"
          width={500}
          height={500}
          src="/images/home/weather/cloud10.png"
          className="absolute top-[5rem] -right-[10rem] w-[60.4375rem] h-[32.0625rem] object-fill animation_cloud2"
        />
      </div>

      <div className="relative w-[90rem] h-[44rem] mx-auto shrink-0 rounded-[1.5rem] z-20">
        <WeatherSlide />
      </div>
    </section>
  );
}
