'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import CardVertical from '@/components/common/card/CardVertical';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';

export default function ExploreTrip() {
  return (
    <section id="explore-trip" className="relative w-full bg-white">
      <div className="mx-auto w-full px-[1rem] md:px-[4rem] lg:w-[87.5rem] lg:px-0">
        <div className="relative mb-[2rem] flex flex-col gap-[0.75rem] md:mb-[3.75rem]">
          <h3 className="text-green-dark__active/40 text-[1.125rem] leading-none font-extrabold uppercase">
            Explore
          </h3>
          <h2 className="font-londrina-solid text-green-normal__hover text-[2.5rem] leading-none font-black uppercase md:text-[3.5rem]">
            Trips for you
          </h2>
        </div>
        <div>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={15}
            breakpoints={{
              640: {
                slidesPerView: 'auto',
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1600: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
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
              <SwiperSlide
                key={index}
                className="!h-[23.33956rem] max-md:!w-[17.7875rem] md:!h-[29.5625rem]"
              >
                <Link
                  href="#"
                  className="relative inline-block h-full w-full overflow-hidden rounded-[1.5rem]"
                >
                  <CardVertical />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
