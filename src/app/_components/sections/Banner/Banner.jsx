"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useMemo, useState } from "react";
import "./Banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import FilterTour from "../FilterTour/FilterTour";
import BannerSlide from "./BannerSlide";

export default function Banner() {
  const SlideList = [
    {
      id: 1,
      top: 18.7,
      left: 4,
      imageSrc: "/images/bg-hagiang-city.webp",
      imageAlt: "Hong Hao Travel",
    },
    {
      id: 2,
      top: 11.5,
      left: 3,
      imageSrc: "/images/bg-tamson.jpeg",
      imageAlt: "Hong Hao Travel",
    },
    {
      id: 3,
      top: 9,
      left: 8,
      imageSrc: "/images/bg-yenminh.webp",
      imageAlt: "Hong Hao Travel",
    },
    {
      id: 4,
      top: 3.5,
      left: 14.5,
      imageSrc: "/images/bg-dongvan.jpeg",
      imageAlt: "Hong Hao Travel",
    },
    {
      id: 5,
      top: 7,
      left: 16.5,
      imageSrc: "/images/bg-meovac.jpeg",
      imageAlt: "Hong Hao Travel",
    },
    {
      id: 6,
      top: 18,
      left: 11,
      imageSrc: "/images/bg-dongvan.jpeg",
      imageAlt: "Hong Hao Travel",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const positionDotMap = useMemo(() => {
    const item = SlideList[currentIndex];
    const positionTop = item?.top;
    const positionLeft = item?.left;
    return {
      positionTop: positionTop + "rem",
      positionLeft: positionLeft + "rem",
    };
  }, [currentIndex]);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="hidden xl:block absolute top-0 left-0 w-full h-full">
        <div className="size-full relative">
          <div className="bg-green-normal__hover w-full h-full shrink-0 absolute z-[1]"></div>
          <Image
            alt=""
            width={1920}
            height={1080}
            src="/images/discover-home-bg.png"
            className="absolute h-full w-full object-cover z-[1]"
          />
          <p className="absolute top-1/2 -translate-y-1/2 rotate-90 text-[0.75rem] font-extrabold tracking-[0.00938rem] leading-[120%] text-center text-white z-[2]">
            Hong Hao Travel
          </p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 15 }}
              transition={{
                delay: 2.25,
                duration: 1.5,
              }}
              className="relative w-[30.3125rem] h-[30.3125rem]"
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 1,
                }}
                className="absolute top-0 left-0 size-full"
              >
                <Image
                  alt="map"
                  width={500}
                  height={500}
                  src="/images/map-home.png"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                }}
                className="absolute top-0 left-0 size-full"
              >
                <Image
                  alt="map"
                  width={500}
                  height={500}
                  src="/images/map-home-black.png"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-500%" }}
            transition={{
              delay: 2.25,
              duration: 1.25,
            }}
            className="custom-heading-banner absolute uppercase top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
          >
            <p className="text-center text-[1.125rem] font-extrabold leading-none text-white/40 mb-[0.75rem]">
              Get ready
            </p>
            <h1 className="font-black leading-none text-center text-[6rem] ">
              <div>Discover</div>
              <div>Ha Giang Loop</div>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="absolute z-[100] bottom-[3rem] left-1/2 -translate-x-1/2">
        <FilterTour />
      </div>

      <div className="hidden xl:block absolute inset-0 !z-50">
        <motion.div
          initial={{ scale: 0.5, y: "100%" }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          className="relative size-full z-[10]"
        >
          <BannerSlide data={SlideList} onChange={handleSlideChange} />
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.75,
            delay: 3.5,
          }}
          className="h-full w-[27.3975rem] absolute top-0 right-0 z-30"
        >
          <div className="w-[19.5rem] h-[24rem] absolute top-[10rem] right-[3rem] z-20">
            <Image
              width={1000}
              height={1000}
              loading="lazy"
              alt="hong hao travel"
              src="/images/bannerSlideMap.svg"
              className="object-contain size-full"
            />
            <span
              style={{
                top: positionDotMap?.positionTop,
                left: positionDotMap?.positionLeft,
              }}
              className={`absolute inline-flex items-center justify-center size-4 bg-red-500 rounded-full duration-500 transition-all`}
            >
              <span className="inline-block size-1.5 bg-white rounded-full"></span>
            </span>
          </div>
          <div className="w-full h-full absolute top-0 right-0 bg-[linear-gradient(90deg,rgba(9,42,27,0.00)_11.52%,#092A1B_89.04%)] z-10"></div>
        </motion.div>
      </div>

      <div className="xl:hidden absolute inset-0 !z-50">
        <BannerSlide data={SlideList} onChange={handleSlideChange} />
      </div>

      {/* <div className="fixed inset-0 !z-[9999] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className={`relative transition-all duration-500 ${
            openCustomTourForm
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible scale-50"
          }`}
        >
          <CustomTourForm />
        </div>
      </div> */}
    </section>
  );
}
