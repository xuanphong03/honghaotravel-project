"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import ExploreTripItem from "./ExploreTripItem";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

export default function ExploreTrip() {
  return (
    <section id="explore-trip" className="w-full relative bg-white">
      <div className=" max-w-[90.375rem] mx-auto">
        <div className="relative flex flex-col gap-[0.75rem] mb-[3.75rem]">
          <h3 className="text-[1.125rem] font-extrabold leading-none text-green-dark__active/40 uppercase">
            Explore
          </h3>
          <h2 className="font-londrina-solid text-green-normal__hover uppercase text-[3.5rem] leading-none font-black">
            Trips for you
          </h2>
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="relative"
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <Link
                  href="#"
                  className="relative !w-full inline-block !h-[29.5625rem] rounded-[1.5rem] overflow-hidden"
                >
                  <ExploreTripItem />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
