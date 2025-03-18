'use client';
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import ButtonNext from '../../common/Button/ButtonNext';
import ButtonPrev from '../../common/Button/ButtonPrev';
import OurTeamItem from './OurTeamItem';
import OurTeamSkeleton from './OurTeamSkeleton';
import Link from 'next/link';

export default function OurTeamSlide({ data = [], primary, secondary }) {
  const swiperRef = useRef(null);
  const handleClickNextButton = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slideNext();
  };
  const handleClickPrevButton = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slidePrev();
  };

  return (
    <Swiper
      speed={1000}
      ref={swiperRef}
      spaceBetween={15}
      slidesPerView={'auto'}
    >
      {data.length > 0 &&
        data.map((item) => (
          <SwiperSlide key={item.id} className="!w-[17.6875rem] !pb-[4rem]">
            <Link href="#" className="inline-block !h-[26rem] md:!h-[28.5rem]">
              <OurTeamItem
                image={item?.image}
                name={item?.name}
                role={item?.role}
                exp={item?.exp}
                desc={item?.desc}
              />
            </Link>
          </SwiperSlide>
        ))}
      {data.length === 0 &&
        [...Array(10)].map((_, index) => (
          <SwiperSlide key={index} className="!w-[17.6875rem]">
            <OurTeamSkeleton />
          </SwiperSlide>
        ))}
      <div
        className={`${
          primary ? 'from-[rgba(19,40,25,0)] via-[#132819] to-[#132819]' : ''
        } ${
          secondary
            ? 'bg-[linear-gradient(90deg,rgba(255,255,255,0.00)_1.95%,#FFF_94.2%)]'
            : ''
        } absolute top-0 right-0 !z-50 h-[28.5rem] w-[8rem] shrink-0 bg-gradient-to-r from-[1.95%] via-[94.2%]`}
      ></div>
      <div
        onClick={handleClickPrevButton}
        className="hover:bg-orange-normal__hover absolute top-[40%] left-[2rem] !z-50 size-[2.5rem] cursor-pointer rounded-full transition-colors max-md:hidden"
      >
        <ButtonPrev />
      </div>
      <div
        onClick={handleClickNextButton}
        className="hover:bg-orange-normal__hover absolute top-[40%] right-[2rem] !z-50 size-[2.5rem] cursor-pointer rounded-full transition-colors max-md:hidden"
      >
        <ButtonNext />
      </div>
    </Swiper>
  );
}
