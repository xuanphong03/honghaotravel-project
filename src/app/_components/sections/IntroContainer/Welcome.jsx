"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import ButtonPrev from "../../../../../components/common/Button/ButtonPrev";
import ButtonNext from "../../../../../components/common/Button/ButtonNext";
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
      gsap.to(".text-zoom-in", {
        scale: 0.8,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".box-zoom-out",
          toggleActions: "play none none none",
        },
      });
      gsap.to(".box-zoom-out", {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".box-zoom-out",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );
  return (
    <section
      id="welcome"
      ref={container}
      className="min-w-full min-h-screen max-lg:min-w-full max-lg:min-h-0 flex flex-col items-center lg:mt-0 max-md:mt-[2.63rem] md:mt-[10rem] relative"
    >
      <div className="text-zoom-in lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 text-center py-[1rem] z-10 scale-100">
        <h3 className="lg:text-[1.125rem] text-[0.875rem] md:text-[2rem] font-bold leading-[1] text-white/40 mb-[0.5rem]">
          Welcome to...
        </h3>
        <h2 className="text-green-light font-black text-[1.45rem] md:text-[5rem] font-londrina-solid leading-none">
          Ha Giang Naturally
        </h2>
        <Image
          alt="Hong Hao Travel"
          width={500}
          height={500}
          src="/images/beautiful-text.png"
          className="lg:w-[23.875rem] lg:h-[18.75rem] mx-auto object-contain mt-[-1rem] w-[9rem] h-[7rem] md:w-[30rem] md:h-[20rem]"
        />
      </div>

      <div className="w-full h-auto md:h-[100vh]">
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          effect={"fade"}
          modules={[EffectFade, Navigation, Pagination]}
          className="box-zoom-out scale-50 relative !h-full !w-full"
        >
          <SwiperSlide>
            <video
              loop
              muted
              autoPlay
              playsInline
              type="video/mp4"
              src="https://cms.honghaotravel.com/wp-content/uploads/0622.mov"
              className="w-full min-h-full rounded-[1rem] overflow-hidden object-cover"
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
              className="w-full min-h-full rounded-[1rem] overflow-hidden object-cover"
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
              className="w-full min-h-full rounded-[1rem] overflow-hidden object-cover"
            ></video>
          </SwiperSlide>

          <div
            onClick={handleClickPrevButton}
            className="absolute top-1/2 left-[1.5rem] -translate-y-1/2 md:left-[5rem] !z-50 size-[2.5rem] rounded-full hover:bg-orange-normal__hover transition-colors cursor-pointer"
          >
            <ButtonPrev />
          </div>
          <div
            onClick={handleClickNextButton}
            className="absolute top-1/2 right-[1.5rem] -translate-y-1/2 md:right-[5rem] !z-50 size-[2.5rem] rounded-full  hover:bg-orange-normal__hover transition-colors cursor-pointer"
          >
            <ButtonNext />
          </div>
        </Swiper>
      </div>
    </section>
  );
}
