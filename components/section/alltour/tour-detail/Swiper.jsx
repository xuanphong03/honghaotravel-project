// components/MousewheelSwiper.js
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules"; // Import từ swiper/modules
import "swiper/css"; // Import CSS cơ bản của Swiper
import Image from "next/image";

const arrTest = [0,1,2,3,4,5]

const MousewheelSwiper = ({handleSlideChange, activeIndex}) => {
    
  return (
    <div className="container mx-auto ">
      <Swiper
        direction="vertical" 
        mousewheel={true} 
        modules={[Mousewheel]} 
        slidesPerView={2} 
        spaceBetween={100} 
              className="max-h-[32rem] bg-transparent rounded-lg "
              onSlideChange={handleSlideChange}
      >
              {arrTest.map((_, index) => <SwiperSlide key={index} className="swiper-slide swiper-slide-active w-full flex h-fit cursor-pointer">
                  <div className="flex space-x-[7.87rem] relative">
                      <div className=" relative w-[2rem] ms-6">
                          <div className={`  absolute z-[5] left-1/2 w-[0.2rem]  bg-greyscaletext-10 h-full transition-all duration-1000`}></div>
                          <div className={` ${activeIndex > index ? "bg-green-normal__active h-full":"bg-greyscaletext-10 "} absolute z-[5] left-1/2 w-[0.2rem] h-0 transition-all duration-1000 `}></div>
                          <div className={`${activeIndex === index ||  activeIndex > index? "bg-green-normal__active":"bg-greyscaletext-10"} delay-500  size-[0.675rem] rounded-full absolute top-0 left-[37%] z-50 transition-all duration-500`}></div>
                      </div>
                      <article className="min-h-[17.875rem] scrollbar-popup-tour-detail tablet:overflow-hidden tablet:h-[10rem] 2xl:min-h-[18.875rem] 3xl:min-h-[20.875rem] 4xl:!min-h-[24.875rem] mb-[2rem] xl:border-[3px] ease-out border-[2px] flex-1 duration-1000 transition-all rounded-[1.5rem] bg-[#F5F5F5] p-[1.88rem] xlg:p-[2rem] xmd:p-[1rem] xlg:rounded-[0.75rem] relative border-transparent lg:overflow-hidden max-h-[25rem]">
                          <h3 className="text-[1.25rem] md:w-[30rem] font-extrabold leading-[1.2] text-greyscale-80 xlg:text-[2rem] xmd:text-[1rem] xlg:tracking-[0.0125rem] xmd:w-[14.8125rem] xlg:w-[80%]">
                              Night 1 : Hanoi – Ha Giang city.
                          </h3>
                          <div className="detail_sched text-greyscale-50 text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] mt-[1.12rem] xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem]">
                              <p>The bus pick up from your hotel/hostel in Hanoi between 7:30pm and 8:00pm, you will arrive to Ha Giang City around 4:00am.</p>
                              <p>Then, you are able to check-in at Hong Hao hostel and sleep few hours before starting the tour.</p>
                              <p>Then, you are able to check-in at Hong Hao hostel and sleep few hours before starting the tour.</p>
                          </div>
                          <div className=" rounded-[1.5rem] bg-[#E6E6E6] w-[4.625rem] h-[1.625rem] text-[0.75rem] font-normal leading-[1.2] tracking-[0.00375rem] flex    justify-center items-center absolute top-[1rem] right-[1rem] text-greyscale-50 md:w-[8rem] md:h-[2.5rem] md:text-[1.3rem]">300 km</div>
                          <div className=" text-orange-normal text-[0.875rem] font-bold uppercase z-[10000] absolute bottom-[1rem] right-[1rem]">Xem them</div>
                          <div className="absolute bottom-0 left-0 w-full h-[4rem] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                      </article>
          </div>
              </SwiperSlide>)}
              <SwiperSlide className="swiper-slide !absolute !transition-all !duration-1000 tablet:left-[-4rem] left-12 " style={{top:`${activeIndex * 19}rem`}}>
                  <div className="relative w-[2.9375rem] h-[3.125rem]"><Image src={"/images/alltour/detail/schedule-moto.png"} alt="" fill className="object-contain"/></div>
              </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MousewheelSwiper;