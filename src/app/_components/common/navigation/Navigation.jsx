"use client";
import { AppContext } from "@/app/context/AppProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NavigationList from "./NavigationList";

// Import Swiper styles
import CardVertical from "@/components/common/card/CardVertical";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import "./Navigation.scss";

export default function Navigation() {
  const { setShowNavigation } = useContext(AppContext);

  const handleCloseNavigation = () => {
    setShowNavigation(false);
  };

  return (
    <div
      id="navigation_container"
      className="bg-green-dark w-full relative md:h-[40.125rem]"
    >
      <div className="absolute inset-0">
        <Image
          alt="Hong Hao Travel"
          width={2000}
          height={1000}
          src="/images/navigation/bg-mountain.svg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute flex items-center justify-between left-0 right-0 md:px-[5rem] py-[1.5rem] z-[10] max-md:px-[1.25rem]">
        <Link
          href="/"
          className="inline-block lg:w-[7.5625rem] lg:h-[3.375rem] w-[12rem] h-[5rem]"
        >
          <Image
            alt="Logo Hong Hao Travel"
            width={200}
            height={100}
            src="/images/navigation/logo-honghaotravel.svg"
            className="size-full object-contain"
          />
        </Link>
        <button
          onClick={handleCloseNavigation}
          className="cursor-pointer inline-flex items-center justify-center size-[2.75rem] shrink-0 bg-white/20 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className="size-[1.5rem] shrink-0"
          >
            <path
              d="M18 18.5L12 12.5M12 12.5L6 6.5M12 12.5L18 6.5M12 12.5L6 18.5"
              stroke="#A9A9A9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="relative flex h-full w-full bg-[linear-gradient(180deg,#122718_0%,rgba(18,39,24,0.00)_35%,rgba(18,39,24,0)_70%,#122718_100%)] ">
        <div className="px-[1.25rem] md:pl-[5rem] max-md:mt-[8.31rem] pt-[1.5rem] md:pt-[9.31rem] pb-[3.81rem] flex-1 h-full">
          <nav className="w-full md:w-[22.5rem] xl:w-[30rem] h-[27rem] flex flex-col">
            <NavigationList />
          </nav>
        </div>
        <div className="relative hidden md:block md:w-[51.875rem] h-full shrink-0">
          <div className="hidden size-full">
            <Image
              alt="Hong Hao Travel"
              width={600}
              height={400}
              src="/images/navigation/bg-mountain2.svg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="size-full  flex flex-col justify-center z-10">
            <div className="text-[1.5rem] text-white font-bold mb-[1.91rem]">
              Find your tour:
            </div>
            <div className="w-full h-[28rem]">
              <Swiper
                scrollbar={{
                  hide: false,
                }}
                slidesPerView="auto"
                modules={[Scrollbar]}
                spaceBetween="30"
                className="!w-full !h-full navigation_swiper"
              >
                {[...Array(5)].map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className="!w-[22rem] max-md:!h-[15rem] rounded-[1.5rem] relative overflow-hidden cursor-pointer !h-[26rem]"
                  >
                    <CardVertical />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
