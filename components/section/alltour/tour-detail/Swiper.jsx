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
              <article className="scrollbar-popup-tour-detail tablet:overflow-hidden xlg:p-[2rem] xmd:p-[1rem] xlg:rounded-[0.75rem] relative mb-[2rem] max-h-[25rem] min-h-[17.875rem] flex-1 rounded-[1.5rem] border-[2px] border-transparent bg-[#F5F5F5] p-[1.88rem] transition-all duration-1000 ease-out lg:overflow-hidden xl:border-[3px]">
                <h3 className="text-greyscale-80 xlg:text-[2rem] xmd:text-[1rem] xlg:tracking-[0.0125rem] xmd:w-[14.8125rem] xlg:w-[80%] text-[1.25rem] leading-[1.2] font-extrabold md:w-[30rem]">
                  Night 1 : Hanoi – Ha Giang city.
                </h3>
                <div className="detail_sched text-greyscale-50 xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem] mt-[1.12rem] text-[0.875rem] leading-[1.2] font-normal tracking-[0.00875rem]">
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
                <div className="text-orange-normal absolute right-[1rem] bottom-[1rem] z-[10000] text-[0.875rem] font-bold uppercase">
                  Xem them
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-[4rem] w-full bg-gradient-to-t from-white to-transparent"></div>
              </article>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MousewheelSwiper;
