"use client";
import React, { useMemo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import ButtonPrev from "../../../../../components/common/Button/ButtonPrev";
import ButtonNext from "../../../../../components/common/Button/ButtonNext";

export default function WeatherSlide() {
  const swiperRef = useRef(null);
  const MONTHS = [
    { id: 1, name: "Jan" },
    { id: 2, name: "Feb" },
    { id: 3, name: "Mar" },
    { id: 4, name: "Apr" },
    { id: 5, name: "May" },
    { id: 6, name: "Jun" },
    { id: 7, name: "July" },
    { id: 8, name: "Aug" },
    { id: 9, name: "Sep" },
    { id: 10, name: "Oct" },
    { id: 11, name: "Nov" },
    { id: 12, name: "Dec" },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const positionLeft = useMemo(() => {
    return (currentSlideIndex + 1) * 5.25 + 1.75 * currentSlideIndex;
  }, [currentSlideIndex]);

  const handleChangeSlide = (slideIndex) => {
    if (!swiperRef.current) return;
    setCurrentSlideIndex(slideIndex);
    swiperRef.current.swiper.slideTo(slideIndex);
  };

  const handleClickPrevButton = () => {
    if (!swiperRef.current || currentSlideIndex <= 0) return;
    setCurrentSlideIndex(currentSlideIndex - 1);
    swiperRef.current.swiper.slideTo(currentSlideIndex - 1);
  };

  const handleClickNextButton = () => {
    if (!swiperRef.current || currentSlideIndex + 1 >= 12) return;
    setCurrentSlideIndex(currentSlideIndex + 1);
    swiperRef.current.swiper.slideTo(currentSlideIndex + 1);
  };

  return (
    <Swiper
      speed={500}
      ref={swiperRef}
      modules={[]}
      className="!relative !w-full"
    >
      {[...Array(12)].map((_, index) => (
        <SwiperSlide key={index} className="!w-full !h-full">
          <Image
            width={2000}
            height={1000}
            alt="Hong Ha Travel"
            src="/images/home/weather/weather-item1.png"
            className="!w-full !h-full object-cover"
          />
        </SwiperSlide>
      ))}
      <div
        onClick={handleClickPrevButton}
        className="absolute top-1/2 left-[5rem] !z-50 size-[2.5rem] rounded-full hover:bg-orange-normal__hover transition-colors cursor-pointer"
      >
        <ButtonPrev />
      </div>
      <div
        onClick={handleClickNextButton}
        className="absolute top-1/2 right-[5rem] !z-50 size-[2.5rem] rounded-full  hover:bg-orange-normal__hover transition-colors cursor-pointer"
      >
        <ButtonNext />
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-[2.5rem] w-full !z-50">
        <div className="justify-between w-[82.5rem] mx-auto inline-flex py-[2rem] border-t border-solid border-white ">
          {MONTHS.map((m, index) => (
            <button
              key={index}
              onClick={() => handleChangeSlide(index)}
              className="py-[0.25rem] cursor-pointer hover:bg-red-500 w-[5.5rem] rounded-[0.71156rem] border border-solid border-white backdrop-blur-[5px] bg-gradient-to-b from-white/10 to-white/1"
            >
              <div className="ml-[1rem] mt-[0.625rem] mr-[0.875rem] mb-[0.43rem] flex flex-col items-center gap-[0.25rem] text-white">
                <h5 className="uppercase text-[1rem] font-bold leading-[1.2] tracking-[0.0125rem]">
                  {m.name}
                </h5>
                <p className="tracking-[0.00375rem] leading-[1.2] text-[0.75rem]">
                  Degree
                </p>
                <p className="font-bold tracking-[0.00375rem] leading-[1.2] text-[0.75rem]">
                  27-32
                </p>
                <div className="flex items-center justify-center size-[0.875rem] pb-[0.02188rem]">
                  <Image
                    width={20}
                    height={20}
                    alt="Hong Ha Travel"
                    src="/images/home/weather/rain-icon.png"
                    className="w-full object-contain"
                  />
                </div>
                <p className="font-bold tracking-[0.00375rem] leading-[1.2] text-[0.75rem]">
                  65-68 mm
                </p>
              </div>
            </button>
          ))}
        </div>
        <div
          style={{
            left: `${positionLeft}rem`,
            transform: "translateX(-50%)",
          }}
          className="absolute bottom-full left-[5.25rem]  flex flex-col gap-[0.5rem] items-center text-white font-bold"
        >
          <p>Now</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="8"
            viewBox="0 0 18 8"
            fill="none"
          >
            <path d="M8.83378 0L17.1226 8H0.544922L8.83378 0Z" fill="white" />
          </svg>
        </div>
      </div>
    </Swiper>
  );
}
