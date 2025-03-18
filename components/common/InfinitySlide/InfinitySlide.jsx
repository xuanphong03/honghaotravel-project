'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import required modules
import {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Thumbs,
} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { useRef, useState } from 'react';
import InfinitySlideItem from './InfinitySlideItem';
import './InfinitySlide.css';

export default function InfinitySlide() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleChangeSlide = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  return (
    <div id="infinity_slide" className="relative h-full w-[10.875rem]">
      <div className="milestone absolute top-[60%] right-full -translate-y-1/2">
        <div className="banner-arrow flex size-[3.375rem] items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
          >
            <path d="M38 27L22 37L27 27L22 17L38 27Z" fill="white" />
          </svg>
        </div>
      </div>
      <Swiper
        id="infinity_marquee_slide"
        ref={swiperRef}
        spaceBetween={10}
        loop={true}
        speed={2000}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={'auto'}
        direction={'vertical'}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        centeredSlides={true}
        watchSlidesProgress={true}
        mousewheel={true}
        onSlideChange={handleChangeSlide}
        modules={[Autoplay, FreeMode, Thumbs, Navigation, Mousewheel]}
        className="pointer-events-none !h-full"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide
            key={index}
            className={`pointer-events-none relative !h-[6.35rem] !w-full overflow-hidden rounded-[0.75rem] select-none`}
          >
            <div
              className={`absolute inset-0 rounded-[0.75rem] border-2 border-solid !transition-colors duration-1000 ${
                activeSlideIndex === index
                  ? 'border-white bg-transparent'
                  : 'border-transparent bg-black/40'
              }`}
            ></div>
            <InfinitySlideItem index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
