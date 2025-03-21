// components/MousewheelSwiper.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules'; // Import từ swiper/modules
import 'swiper/css'; // Import CSS cơ bản của Swiper
import Image from 'next/image';

const arrTest = [0, 1, 2, 3, 4, 5];

const MousewheelSwiper = ({ handleSlideChange, activeIndex }) => {
  return (
    <div className="container mx-auto">
      <Swiper
        direction="vertical"
        mousewheel={true}
        modules={[Mousewheel]}
        slidesPerView={2}
        spaceBetween={0}
        className="max-h-[32rem] !overflow-visible rounded-lg bg-transparent"
        onSlideChange={handleSlideChange}
      >
        {arrTest.map((_, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide swiper-slide-active mb-14 flex h-fit w-full cursor-pointer"
          >
            <div className="relative flex space-x-[7.87rem]">
              <div className="caicot relative ms-[4.5rem] w-[2rem]">
                <div
                  className={`bg-greyscaletext-10 ${activeIndex === 5 && 'bg-transparent'} absolute left-1/2 z-[5] h-full w-[0.2rem] transition-all duration-1000`}
                >
                  <div
                    className={`absolute -bottom-6 left-4 flex flex-col items-start`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        opacity="1"
                        d="M17.1849 7.04134C16.3099 3.19134 12.9515 1.45801 10.0015 1.45801C10.0015 1.45801 10.0015 1.45801 9.99321 1.45801C7.05154 1.45801 3.68488 3.18301 2.80988 7.03301C1.83488 11.333 4.46821 14.9747 6.85154 17.2663C7.73488 18.1163 8.86821 18.5413 10.0015 18.5413C11.1349 18.5413 12.2682 18.1163 13.1432 17.2663C15.5265 14.9747 18.1599 11.3413 17.1849 7.04134Z"
                        fill={`${activeIndex > index ? '#E64827' : '#c5c5c5'}`}
                      />
                      <path
                        d="M10 11.2168C11.4497 11.2168 12.625 10.0415 12.625 8.5918C12.625 7.14205 11.4497 5.9668 10 5.9668C8.55025 5.9668 7.375 7.14205 7.375 8.5918C7.375 10.0415 8.55025 11.2168 10 11.2168Z"
                        fill="white"
                      />
                    </svg>
                    <span className="body2-bold !text-greyscaletext-10 w-28 text-ellipsis">
                      Tp.Ha Noi
                    </span>
                  </div>
                </div>
                <div
                  className={` ${activeIndex > index ? 'bg-green-normal__active h-full' : 'bg-greyscaletext-10'} absolute left-1/2 z-[5] h-0 w-[0.2rem] transition-all duration-1000`}
                ></div>
                <div
                  className={`${activeIndex === index || activeIndex > index ? 'bg-green-normal__active' : 'bg-greyscaletext-10'} absolute top-0 left-[37%] z-50 size-[0.675rem] rounded-full transition-all delay-500 duration-500`}
                ></div>
              </div>
              <article className="scrollbar-popup-tour-detail relative mb-[2rem] max-h-[25rem] min-h-[17.875rem] flex-1 overflow-hidden rounded-[1.5rem] border-[3px] border-transparent bg-[#F5F5F5] p-[1.88rem] transition-all duration-1000 ease-out">
                <h3 className="!text-greyscaletext-50 h6-semibold font-extrabold md:w-[30rem]">
                  Night 1 : Hanoi – Ha Giang city.
                </h3>
                <div className="detail_sched !text-greyscaletext-50 body1-regular mt-[1.12rem]">
                  <p>
                    The bus pick up from your hotel/hostel in Hanoi between
                    7:30pm and 8:00pm, you will arrive to Ha Giang City around
                    4:00am.
                  </p>
                  <p>
                    Then, you are able to check-in at Hong Hao hostel and sleep
                    few hours before starting the tour.
                  </p>
                  <p>
                    Then, you are able to check-in at Hong Hao hostel and sleep
                    few hours before starting the tour.
                  </p>
                </div>
                <div className="text-greyscale-50 absolute top-[1rem] right-[1rem] flex h-[1.625rem] w-[4.625rem] items-center justify-center rounded-[1.5rem] bg-[#E6E6E6] text-[0.75rem] leading-[1.2] font-normal tracking-[0.00375rem] md:h-[2.5rem] md:w-[8rem] md:text-[1.3rem]">
                  300 km
                </div>
                <div className="!text-orange-normal sub1-bold absolute right-[1rem] bottom-[1rem] z-[10000] !text-[0.875rem] !font-bold !uppercase">
                  Xem them
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-[4rem] w-full bg-gradient-to-t from-white to-transparent"></div>
              </article>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide
          className="swiper-slide !absolute top-0 !transition-all !duration-1000"
          style={{ top: `${activeIndex * 19}rem` }}
        >
          <div className="relative top-0 left-8 h-[3.125rem] w-[2.9375rem]">
            <Image
              src={'/images/alltour/detail/schedule-moto.png'}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MousewheelSwiper;
