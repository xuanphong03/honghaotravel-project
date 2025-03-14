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
    { id: 1, name: "Jan", bannerUrl: "/images/home/weather/january.png" },
    { id: 2, name: "Feb", bannerUrl: "/images/home/weather/february.png" },
    { id: 3, name: "Mar", bannerUrl: "/images/home/weather/march.png" },
    { id: 4, name: "Apr", bannerUrl: "/images/home/weather/april.png" },
    { id: 5, name: "May", bannerUrl: "/images/home/weather/may.png" },
    { id: 6, name: "Jun", bannerUrl: "/images/home/weather/june.png" },
    { id: 7, name: "July", bannerUrl: "/images/home/weather/july.png" },
    { id: 8, name: "Aug", bannerUrl: "/images/home/weather/august.png" },
    { id: 9, name: "Sep", bannerUrl: "/images/home/weather/september.png" },
    { id: 10, name: "Oct", bannerUrl: "/images/home/weather/october.png" },
    { id: 11, name: "Nov", bannerUrl: "/images/home/weather/november.png" },
    { id: 12, name: "Dec", bannerUrl: "/images/home/weather/november.png" },
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
    <>
      <Swiper
        speed={500}
        ref={swiperRef}
        modules={[]}
        className="!relative !w-full !h-[12rem] md:!h-[44rem] max-md:rounded-[0.5rem] rounded-[1.5rem]"
      >
        {MONTHS.map(({ bannerUrl }, index) => (
          <SwiperSlide key={index} className="!w-full !h-full">
            <Image
              width={2000}
              height={1000}
              alt="Hong Ha Travel"
              src={bannerUrl}
              className="!w-full !h-full object-cover"
            />
          </SwiperSlide>
        ))}
        <div className="absolute top-3 left-3 md:top-9 md:left-9 md:w-[9.375rem] rounded-[0.44rem] md:rounded-[0.7rem] bg-[rgba(255,255,255,0.2)] px-[0.52rem] max-md:py-[0.45rem] md:pt-4 md:pb-2 flex md:flex-col md:space-y-3 z-10 items-center border-[0.5px] border-white/40">
          <span className="font-extrabold text-center text-[1.25rem] md:text-[2rem] text-white ml-[0.46rem]">
            20°C
          </span>
          <Image
            alt="Hong Hao Travel"
            src="/images/home/weather/cloudy.svg"
            width={50}
            height={50}
            className="w-[2.3rem] h-[1.667rem] md:w-[3.73rem] md:h-[2.687rem] max-md:order-first"
          />
          <p className="hidden md:block text-[1.125rem] text-center text-white">
            9/3
          </p>
        </div>
        <div
          onClick={handleClickPrevButton}
          className="hidden md:block absolute top-1/2 left-[5rem] !z-50 size-[2.5rem] rounded-full hover:bg-orange-normal__hover transition-colors cursor-pointer"
        >
          <ButtonPrev />
        </div>
        <div
          onClick={handleClickNextButton}
          className="hidden md:block absolute top-1/2 right-[5rem] !z-50 size-[2.5rem] rounded-full  hover:bg-orange-normal__hover transition-colors cursor-pointer"
        >
          <ButtonNext />
        </div>
        <div className="hidden md:block absolute bottom-0 left-0 right-0 px-[2.5rem] w-full !z-50">
          <div className="justify-between w-[82.5rem] mx-auto inline-flex py-[2rem] border-t border-solid border-white ">
            {MONTHS.map((m, index) => (
              <button
                key={index}
                onClick={() => handleChangeSlide(index)}
                className="overflow-hidden py-[0.25rem] cursor-pointer w-[5.5rem] rounded-[0.71156rem] border border-solid border-white backdrop-blur-sm bg-[linear-gradient(180deg,rgba(125,125,125,0.50)_20%,rgba(255,255,255,0.20)_80%)]"
              >
                <div
                  className={`bg-[linear-gradient(180deg,rgba(255,255,255,0.50)_0%,rgba(255,255,255,0.05)_100%)] absolute inset-0 transition-opacity ${
                    currentSlideIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
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
        <div className="mt-[1rem] px-[0.75rem] overflow-auto z-10 w-full flex flex-row gap-3 flex-nowrap">
          {MONTHS.map((m, index) => (
            <button
              key={index}
              onClick={() => handleChangeSlide(index)}
              className={`shrink-0 py-[0.25rem] cursor-pointer  w-[5.25rem] rounded-[0.71156rem] border border-solid ${
                currentSlideIndex === index
                  ? "border-red-500"
                  : "border-gray-200"
              } backdrop-blur-[5px]  bg-[linear-gradient(180deg,rgba(125,125,125,0.50)_20%,rgba(255,255,255,0.20)_80%)] `}
            >
              <div className="ml-[1rem] mt-[0.625rem] mr-[0.875rem] mb-[0.43rem] flex flex-col items-center gap-[0.25rem] text-black">
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
                    src="/images/home/weather/cloud-with-raining-mobile.svg"
                    className="w-full object-contain"
                  />
                </div>
                <p className="font-bold tracking-[0.00375rem] leading-[1.2] text-[0.75rem]">
                  0 mm
                </p>
              </div>
            </button>
          ))}
        </div>
      </Swiper>
      <div className="relative md:hidden mt-[1rem] px-[0.75rem] overflow-auto z-10 w-full flex flex-row gap-3 flex-nowrap">
        {MONTHS.map((m, index) => (
          <button
            key={index}
            onClick={() => handleChangeSlide(index)}
            className={`shrink-0 py-[0.25rem] cursor-pointer  w-[5.25rem] rounded-[0.71156rem] border border-solid ${
              currentSlideIndex === index ? "border-red-500" : "border-gray-200"
            } backdrop-blur-[5px]  bg-[linear-gradient(180deg,rgba(125,125,125,0.50)_20%,rgba(255,255,255,0.20)_80%)] `}
          >
            <div className="ml-[1rem] mt-[0.625rem] mr-[0.875rem] mb-[0.43rem] flex flex-col items-center gap-[0.25rem] text-black">
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
                  src="/images/home/weather/cloud-with-raining-mobile.svg"
                  className="w-full object-contain"
                />
              </div>
              <p className="font-bold tracking-[0.00375rem] leading-[1.2] text-[0.75rem]">
                0 mm
              </p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
