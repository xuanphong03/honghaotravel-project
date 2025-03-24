'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import NextButton from '@/components/common/button/next-button';
import PrevButton from '@/components/common/button/prev-button';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
export default function Welcome() {
  const container = useRef(null);
  const swiperRef = useRef(null);

  const handleClickPrevButton = () => {
    swiperRef.current.swiper.slideTo(swiperRef.current.swiper.realIndex - 1);
  };

  const handleClickNextButton = () => {
    swiperRef.current.swiper.slideTo(swiperRef.current.swiper.realIndex + 1);
  };

  useGSAP(
    () => {
      gsap.to('.text-zoom-in', {
        scale: 0.8,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.box-zoom-out',
          toggleActions: 'play none none none',
        },
      });
      gsap.to('.box-zoom-out', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.box-zoom-out',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: container },
  );
  return (
    <section
      id="welcome"
      ref={container}
      className="relative flex min-h-screen min-w-full flex-col items-center max-lg:min-h-0 max-lg:min-w-full max-md:mt-[2.63rem] md:mt-[10rem] lg:mt-0"
    >
      <div className="text-zoom-in z-10 scale-100 py-[1rem] text-center lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
        <h3 className="mb-[0.5rem] text-[0.875rem] leading-[1] font-bold text-white/40 md:text-[2rem] lg:text-[1.125rem]">
          Welcome to...
        </h3>
        <h2 className="text-green-light font-londrina-solid text-[1.45rem] leading-none font-black md:text-[5rem]">
          Ha Giang Naturally
        </h2>
        <Image
          alt="Hong Hao Travel"
          width={500}
          height={500}
          src="/images/home/moment/beautiful.svg"
          className="mx-auto mt-[-1rem] h-[7rem] w-[9rem] object-contain md:h-[20rem] md:w-[30rem] lg:h-[18.75rem] lg:w-[23.875rem]"
        />
      </div>

      <div className="h-auto w-full md:h-[100vh]">
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
          modules={[EffectFade, Navigation, Pagination]}
          className="box-zoom-out relative !h-full !w-full scale-50"
        >
          <SwiperSlide>
            <video
              loop
              muted
              autoPlay
              playsInline
              type="video/mp4"
              src="https://cms.honghaotravel.com/wp-content/uploads/0622.mov"
              className="min-h-full w-full overflow-hidden rounded-[1rem] object-cover"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              loop
              muted
              autoPlay
              playsInline
              type="video/mp4"
              src="https://cms.honghaotravel.com/wp-content/uploads/0622.mov"
              className="min-h-full w-full overflow-hidden rounded-[1rem] object-cover"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              loop
              muted
              autoPlay
              playsInline
              type="video/mp4"
              src="https://cms.honghaotravel.com/wp-content/uploads/0622.mov"
              className="min-h-full w-full overflow-hidden rounded-[1rem] object-cover"
            ></video>
          </SwiperSlide>

          <div className="absolute top-1/2 left-[1.5rem] !z-50 -translate-y-1/2 md:left-[5rem]">
            <PrevButton onClick={handleClickPrevButton} />
          </div>
          <div className="absolute top-1/2 right-[1.5rem] !z-50 -translate-y-1/2 md:right-[5rem]">
            <NextButton onClick={handleClickNextButton} />
          </div>
        </Swiper>
      </div>
    </section>
  );
}
