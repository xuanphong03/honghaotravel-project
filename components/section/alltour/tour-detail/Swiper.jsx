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
        className="max-h-[32rem] rounded-lg bg-transparent"
        onSlideChange={handleSlideChange}
      >
        {arrTest.map((_, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide swiper-slide-active mb-14 flex h-fit w-full cursor-pointer"
          >
            <div className="relative flex space-x-[7.87rem]">
              <div className="relative ms-6 w-[2rem]">
                <div
                  className={`bg-greyscaletext-10 absolute left-1/2 z-[5] h-full w-[0.2rem] transition-all duration-1000`}
                ></div>
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
          className="swiper-slide tablet:left-[-4rem] !absolute left-12 !transition-all !duration-1000"
          style={{ top: `${activeIndex * 19}rem` }}
        >
          <div className="relative h-[3.125rem] w-[2.9375rem]">
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
