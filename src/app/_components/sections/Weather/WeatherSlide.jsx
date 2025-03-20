'use client';
import React, { useMemo, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import Image from 'next/image';
import ButtonPrev from '../../../../../components/common/Button/ButtonPrev';
import ButtonNext from '../../../../../components/common/Button/ButtonNext';
import { cn } from '@/lib/utils';

export default function WeatherSlide() {
  const swiperRef = useRef(null);
  const MONTHS = [
    { id: 1, name: 'Jan', bannerUrl: '/images/home/weather/january.png' },
    { id: 2, name: 'Feb', bannerUrl: '/images/home/weather/february.png' },
    { id: 3, name: 'Mar', bannerUrl: '/images/home/weather/march.png' },
    { id: 4, name: 'Apr', bannerUrl: '/images/home/weather/april.png' },
    { id: 5, name: 'May', bannerUrl: '/images/home/weather/may.png' },
    { id: 6, name: 'Jun', bannerUrl: '/images/home/weather/june.png' },
    { id: 7, name: 'July', bannerUrl: '/images/home/weather/july.png' },
    { id: 8, name: 'Aug', bannerUrl: '/images/home/weather/august.png' },
    { id: 9, name: 'Sep', bannerUrl: '/images/home/weather/september.png' },
    { id: 10, name: 'Oct', bannerUrl: '/images/home/weather/october.png' },
    { id: 11, name: 'Nov', bannerUrl: '/images/home/weather/november.png' },
    { id: 12, name: 'Dec', bannerUrl: '/images/home/weather/november.png' },
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
        className="!relative !h-[12rem] !w-full rounded-[1.5rem] max-md:rounded-[0.5rem] md:!h-[44rem]"
      >
        {MONTHS.map(({ bannerUrl }, index) => (
          <SwiperSlide key={index} className="!h-full !w-full">
            <Image
              width={2000}
              height={1000}
              alt="Hong Ha Travel"
              src={bannerUrl}
              className="!h-full !w-full object-cover"
            />
          </SwiperSlide>
        ))}
        <div className="absolute top-3 left-3 z-10 flex items-center rounded-[0.44rem] border-[0.5px] border-white/40 bg-[rgba(255,255,255,0.2)] px-[0.52rem] max-md:py-[0.45rem] md:top-9 md:left-9 md:w-[9.375rem] md:flex-col md:space-y-3 md:rounded-[0.7rem] md:pt-4 md:pb-2">
          <span className="ml-[0.46rem] text-center text-[1.25rem] font-extrabold text-white md:text-[2rem]">
            20°C
          </span>
          <Image
            alt="Hong Hao Travel"
            src="/images/home/weather/cloudy.svg"
            width={50}
            height={50}
            className="h-[1.667rem] w-[2.3rem] max-md:order-first md:h-[2.687rem] md:w-[3.73rem]"
          />
          <p className="hidden text-center text-[1.125rem] text-white md:block">
            9/3
          </p>
        </div>
        <div
          onClick={handleClickPrevButton}
          className="hover:bg-orange-normal__hover absolute top-1/2 left-[5rem] !z-50 hidden size-[2.5rem] cursor-pointer rounded-full transition-colors md:block"
        >
          <ButtonPrev />
        </div>
        <div
          onClick={handleClickNextButton}
          className="hover:bg-orange-normal__hover absolute top-1/2 right-[5rem] !z-50 hidden size-[2.5rem] cursor-pointer rounded-full transition-colors md:block"
        >
          <ButtonNext />
        </div>
        <div className="absolute right-0 bottom-0 left-0 !z-50 hidden w-full px-[2.5rem] md:block">
          <div className="mx-auto inline-flex w-[82.5rem] justify-between border-t border-solid border-white py-[2rem]">
            {MONTHS.map((m, index) => (
              <button
                key={index}
                onClick={() => handleChangeSlide(index)}
                className="w-[5.5rem] cursor-pointer overflow-hidden rounded-[0.71156rem] border border-solid border-white bg-[linear-gradient(180deg,rgba(125,125,125,0.50)_20%,rgba(255,255,255,0.20)_80%)] py-[0.25rem] backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.50)_0%,rgba(255,255,255,0.05)_100%)] transition-opacity ${
                    currentSlideIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
                <div className="mt-[0.625rem] mr-[0.875rem] mb-[0.43rem] ml-[1rem] flex flex-col items-center gap-[0.25rem] text-white">
                  <h5 className="text-[1rem] leading-[1.2] font-bold tracking-[0.0125rem] uppercase">
                    {m.name}
                  </h5>
                  <p className="text-[0.75rem] leading-[1.2] tracking-[0.00375rem]">
                    Degree
                  </p>
                  <p className="text-[0.75rem] leading-[1.2] font-bold tracking-[0.00375rem]">
                    27-32
                  </p>
                  <div className="flex size-[0.875rem] items-center justify-center pb-[0.02188rem]">
                    <Image
                      width={20}
                      height={20}
                      alt="Hong Ha Travel"
                      src="/images/home/weather/rain-icon.png"
                      className="w-full object-contain"
                    />
                  </div>
                  <p className="text-[0.75rem] leading-[1.2] font-bold tracking-[0.00375rem]">
                    65-68 mm
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div
            style={{
              left: `${positionLeft}rem`,
              transform: 'translateX(-50%)',
            }}
            className="absolute bottom-full left-[5.25rem] flex flex-col items-center gap-[0.5rem] font-bold text-white"
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
        <div className="z-10 mt-[1rem] flex w-full flex-row flex-nowrap gap-3 overflow-auto px-[0.75rem]">
          {MONTHS.map((m, index) => (
            <button
              key={index}
              onClick={() => handleChangeSlide(index)}
              className={`w-[5.25rem] shrink-0 cursor-pointer rounded-[0.71156rem] border border-solid py-[0.25rem] ${
                currentSlideIndex === index
                  ? 'border-red-500'
                  : 'border-gray-200'
              } bg-[linear-gradient(180deg,rgba(125,125,125,0.50)_20%,rgba(255,255,255,0.20)_80%)] backdrop-blur-[5px]`}
            >
              <div className="mt-[0.625rem] mr-[0.875rem] mb-[0.43rem] ml-[1rem] flex flex-col items-center gap-[0.25rem] text-black">
                <h5 className="text-[1rem] leading-[1.2] font-bold tracking-[0.0125rem] uppercase">
                  {m.name}
                </h5>
                <p className="text-[0.75rem] leading-[1.2] tracking-[0.00375rem]">
                  Degree
                </p>
                <p className="text-[0.75rem] leading-[1.2] font-bold tracking-[0.00375rem]">
                  27-32
                </p>
                <div className="flex size-[0.875rem] items-center justify-center pb-[0.02188rem]">
                  <Image
                    width={20}
                    height={20}
                    alt="Hong Ha Travel"
                    src="/images/home/weather/cloud-with-raining-mobile.svg"
                    className="w-full object-contain"
                  />
                </div>
                <p className="text-[0.75rem] leading-[1.2] font-bold tracking-[0.00375rem]">
                  0 mm
                </p>
              </div>
            </button>
          ))}
        </div>
      </Swiper>
      <div className="relative z-10 mt-[1rem] flex w-full flex-row flex-nowrap gap-3 overflow-auto px-[0.75rem] md:hidden">
        {MONTHS.map((m, index) => (
          <button
            key={index}
            onClick={() => handleChangeSlide(index)}
            className={cn(
              'w-[5.25rem] shrink-0 cursor-pointer rounded-[0.71156rem] border border-solid bg-[linear-gradient(180deg,rgba(125,125,125,0.50)_20%,rgba(255,255,255,0.20)_80%)] py-[0.25rem] backdrop-blur-[5px]',
              currentSlideIndex === index
                ? 'border-red-500'
                : 'border-gray-200',
            )}
          >
            <div className="mt-[0.625rem] mr-[0.875rem] mb-[0.43rem] ml-[1rem] flex flex-col items-center gap-[0.25rem] text-black">
              <h5 className="text-[1rem] leading-[1.2] font-bold tracking-[0.0125rem] uppercase">
                {m.name}
              </h5>
              <p className="text-[0.75rem] leading-[1.2] tracking-[0.00375rem]">
                Degree
              </p>
              <p className="text-[0.75rem] leading-[1.2] font-bold tracking-[0.00375rem]">
                27-32
              </p>
              <div className="flex size-[0.875rem] items-center justify-center pb-[0.02188rem]">
                <Image
                  width={20}
                  height={20}
                  alt="Hong Ha Travel"
                  src="/images/home/weather/cloud-with-raining-mobile.svg"
                  className="w-full object-contain"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.2] font-bold tracking-[0.00375rem]">
                0 mm
              </p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
