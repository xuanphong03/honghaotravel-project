"use client";
import {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRef } from "react";

import React from "react";
import MomentSlideItem from "./MomentSlideItem";

export default function MomentSlideV1() {
  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" },
    { id: 5, content: "Slide 5" },
    { id: 6, content: "Slide 5" },
    { id: 7, content: "Slide 5" },
  ];
  const swiperRef = useRef(null);

  const handleReachEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  return (
    <div>
      <Swiper
        id="infinity_marquee_slide"
        ref={swiperRef}
        spaceBetween={30}
        speed={2500}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onReachEnd={handleReachEnd}
        slidesPerView={"auto"}
        direction={"horizontal"}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        mousewheel={true}
        modules={[Autoplay, FreeMode, Thumbs, Navigation, Mousewheel]}
        className="!h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="!w-[35.5rem] !h-[21.125rem] flex items-center justify-center"
          >
            <MomentSlideItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
