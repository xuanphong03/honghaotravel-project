"use client";
import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

function BannerSlide({ data, onChange }) {
  const handleSlideChange = (swiper) => {
    if (!onChange) return;
    onChange(swiper?.realIndex);
  };
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      loop="true"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      onSlideChange={handleSlideChange}
      className="!z-50 !h-full !w-full"
    >
      {data.map((item) => (
        <SwiperSlide className="!h-full !w-full">
          <Image
            width={1920}
            height={1080}
            alt={item?.imageAlt || ""}
            src={item?.imageSrc || ""}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

BannerSlide.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
};

export default BannerSlide;
