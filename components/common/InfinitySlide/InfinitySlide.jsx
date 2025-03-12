"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Thumbs,
} from "swiper/modules";
import "swiper/swiper-bundle.css";

import { useRef, useState } from "react";
import InfinitySlideItem from "./InfinitySlideItem";
import "./InfinitySlide.css";

export default function InfinitySlide() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleChangeSlide = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  return (
    <div id="infinity_slide" className="h-full w-[10.875rem] relative">
      <div className="absolute top-[60%] -translate-y-1/2 right-full milestone">
        <div className="size-[3.375rem] flex items-center justify-center banner-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
          >
            <path d="M38 27L22 37L27 27L22 17L38 27Z" fill="white" />
          </svg>
        </div>
      </div>
      <Swiper
        id="infinity_marquee_slide"
        ref={swiperRef}
        spaceBetween={10}
        loop={true}
        speed={2000}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSwiper={(swiper) => {
          console.log("swiper", swiper);
        }}
        slidesPerView={"auto"}
        direction={"vertical"}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        centeredSlides={true}
        watchSlidesProgress={true}
        mousewheel={true}
        onSlideChange={handleChangeSlide}
        modules={[Autoplay, FreeMode, Thumbs, Navigation, Mousewheel]}
        className="!h-full"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide
            key={index}
            className={`pointer-events-none select-none relative !w-full !h-[6.35rem] rounded-[0.75rem] overflow-hidden`}
          >
            <div
              className={`absolute inset-0 border-solid border-2 rounded-[0.75rem] !transition-colors duration-1000 ${
                activeSlideIndex === index
                  ? "bg-transparent border-white"
                  : "bg-black/40 border-transparent"
              }`}
            ></div>
            <InfinitySlideItem index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
