'use client';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Mousewheel,
  Thumbs,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SlideImage() {
  const Images = [
    { id: 1, imageUrl: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { id: 2, imageUrl: 'https://swiperjs.com/demos/images/nature-2.jpg' },
    { id: 3, imageUrl: 'https://swiperjs.com/demos/images/nature-3.jpg' },
    { id: 4, imageUrl: 'https://swiperjs.com/demos/images/nature-4.jpg' },
    { id: 5, imageUrl: 'https://swiperjs.com/demos/images/nature-5.jpg' },
    { id: 6, imageUrl: 'https://swiperjs.com/demos/images/nature-6.jpg' },
    { id: 7, imageUrl: 'https://swiperjs.com/demos/images/nature-7.jpg' },
    { id: 8, imageUrl: 'https://swiperjs.com/demos/images/nature-8.jpg' },
    { id: 9, imageUrl: 'https://swiperjs.com/demos/images/nature-9.jpg' },
    { id: 10, imageUrl: 'https://swiperjs.com/demos/images/nature-10.jpg' },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const mainSlideSwiper = useRef(null);
  const thumbSlideSwiper = useRef(null);
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setCurrentSlideIndex(newIndex);
    if (
      mainSlideSwiper.current &&
      typeof mainSlideSwiper.current.slideTo === 'function'
    ) {
      mainSlideSwiper.current.slideTo(swiper.realIndex); // Đồng bộ mainSwiper với thumbSwiper
    }
  };

  return (
    <div className="h-[44.75rem] w-[86.875rem] rounded-[1.5rem] bg-white p-[1.5rem]">
      <div className="relative h-full w-full rounded-[0.75rem]">
        <Swiper
          ref={mainSlideSwiper}
          modules={[EffectFade]}
          allowTouchMove={false}
          onSwiper={(swiper) => (mainSlideSwiper.current = swiper)}
          effect={'fade'}
          className="!h-full !w-full rounded-[0.75rem]"
        >
          {Images.map(({ id, imageUrl }) => (
            <SwiperSlide
              key={id}
              style={{ backgroundImage: `url('${imageUrl}')` }}
              className="pointer-events-none !h-full !w-full bg-gray-200 bg-cover bg-center bg-no-repeat select-none"
            ></SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 right-[5.25rem] bottom-0 !z-50 h-full w-[10.8745rem] overflow-hidden">
          <Swiper
            id="infinity_marquee_slide"
            ref={thumbSlideSwiper}
            spaceBetween={10}
            loop={true}
            speed={2000}
            onSwiper={setThumbsSwiper}
            onBeforeInit={(swiper) => {
              thumbSlideSwiper.current = swiper;
            }}
            slidesPerView={'auto'}
            direction={'vertical'}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            onSlideChange={handleSlideChange}
            modules={[Autoplay, FreeMode, Thumbs, Mousewheel]}
            className="!h-full !w-full"
          >
            {Images.map(({ id, imageUrl }, index) => (
              <SwiperSlide
                key={id}
                style={{ backgroundImage: `url('${imageUrl}')` }}
                className="pointer-events-none relative !h-[6.35rem] !w-full overflow-hidden rounded-[0.75rem] bg-blue-500 bg-cover bg-center bg-no-repeat text-white select-none"
              >
                <div
                  className={`absolute inset-0 rounded-[0.75rem] border-2 border-solid transition-all duration-500 ${currentSlideIndex === index ? 'border-white bg-black/0' : 'border-transparent bg-black/50'}`}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
