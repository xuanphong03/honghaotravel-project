'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';

function FeedbackSlide({ data = [] }) {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect={'fade'}
      modules={[EffectFade, Autoplay]}
      className=""
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            width={500}
            height={500}
            alt="Hong Hao Travel"
            className="h-full w-full object-contain"
            src={item?.path || '/images/home/clients-say/map-hg-item1.png'}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

FeedbackSlide.propTypes = {
  data: PropTypes.array,
};

export default FeedbackSlide;
