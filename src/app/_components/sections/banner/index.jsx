'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';
import styles from './banner.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import BannerSlide from './banner-slide';
import { ScrollTrigger } from 'gsap/all';
import { cn } from '@/lib/utils';
import FilterTour from '../filter-tour';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const SlideList = [
    {
      id: 1,
      top: 18.7,
      left: 4,
      imageSrc: '/images/home/banner/banner1.jpg',
      imageAlt: 'Hong Hao Travel',
    },
    {
      id: 2,
      top: 11.5,
      left: 3,
      imageSrc: '/images/home/banner/banner1.jpg',
      imageAlt: 'Hong Hao Travel',
    },
    {
      id: 3,
      top: 9,
      left: 8,
      imageSrc: '/images/home/banner/banner2.jpg',
      imageAlt: 'Hong Hao Travel',
    },
    {
      id: 4,
      top: 3.5,
      left: 14.5,
      imageSrc: '/images/home/banner/banner3.jpg',
      imageAlt: 'Hong Hao Travel',
    },
    {
      id: 5,
      top: 7,
      left: 16.5,
      imageSrc: '/images/home/banner/banner4.jpg',
      imageAlt: 'Hong Hao Travel',
    },
    {
      id: 6,
      top: 18,
      left: 11,
      imageSrc: '/images/home/banner/banner5.jpg',
      imageAlt: 'Hong Hao Travel',
    },
  ];
  const container = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const positionDotMap = useMemo(() => {
    const item = SlideList[currentIndex];
    const positionTop = item?.top;
    const positionLeft = item?.left;
    return {
      positionTop: positionTop + 'rem',
      positionLeft: positionLeft + 'rem',
    };
  }, [currentIndex]);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  useGSAP(
    () => {
      gsap.to('.scale-animation', {
        scale: 15,
        delay: 2.25,
        duration: 1.5,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
        },
      });
      gsap.to('.opacity-fade-out', {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
        },
      });
      gsap.to('.opacity-fade-in', {
        opacity: 1,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
        },
      });
      gsap.to('.heading-animation', {
        y: '-500%',
        delay: 2.25,
        duration: 2.5,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
        },
      });
      gsap.to('.slide-animation', {
        scale: 1,
        y: 0,
        delay: 2,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
        },
      });
      gsap.to('.side-panel-animation', {
        x: 0,
        delay: 3.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
        },
      });
      gsap.to(container.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'bottom bottom',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="home_banner relative h-[100vh] w-full overflow-hidden"
    >
      <div className="absolute top-0 left-0 hidden h-full w-full xl:block">
        <div className="relative size-full">
          <div className="bg-green-normal__hover absolute z-[1] h-full w-full shrink-0"></div>
          <Image
            width={1920}
            height={1080}
            alt="Hong Hao Travel"
            src="/images/home/banner/discover-home-bg.png"
            className="absolute z-[1] h-full w-full object-cover"
          />
          <p className="absolute top-1/2 z-[2] -translate-y-1/2 rotate-90 text-center text-[0.75rem] leading-[120%] font-extrabold tracking-[0.00938rem] text-white">
            Hong Hao Travel
          </p>
          <div className="absolute top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
            <div className="scale-animation relative h-[30.3125rem] w-[30.3125rem] scale-100">
              <Image
                width={500}
                height={500}
                alt="Hong Hao Travel"
                src="/images/home/banner/map-home.png"
                className="opacity-fade-out absolute inset-0 size-full object-cover opacity-100"
              />
              <Image
                alt="map"
                width={500}
                height={500}
                src="/images/home/banner/map-home-black.png"
                className="opacity-fade-in absolute inset-0 size-full object-cover opacity-0"
              />
            </div>
          </div>

          <div
            className={cn(
              'heading-animation absolute top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 uppercase',
              styles.textLinearGradient,
            )}
          >
            <p className="mb-[0.75rem] text-center text-[1.125rem] leading-none font-extrabold text-white/40">
              Get ready
            </p>
            <h1 className="text-center text-[6rem] leading-none font-black">
              Discover <br />
              Ha Giang Loop
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3rem] left-1/2 z-[100] -translate-x-1/2">
        <FilterTour />
      </div>

      <div className="absolute inset-0 !z-50 hidden xl:block">
        <div className="slide-animation relative z-[10] size-full translate-y-full scale-0">
          <BannerSlide data={SlideList} onChange={handleSlideChange} />
        </div>
        <div className="side-panel-animation pointer-events-none absolute top-0 right-0 z-30 h-full w-[27.3975rem] translate-x-full select-none">
          <div className="absolute top-[10rem] right-[3rem] z-20 h-[24rem] w-[19.5rem]">
            <Image
              width={1000}
              height={1000}
              alt="hong hao travel"
              src="/images/home/banner/map.svg"
              className="size-full object-contain select-none"
            />
            <span
              style={{
                top: positionDotMap?.positionTop,
                left: positionDotMap?.positionLeft,
              }}
              className="absolute inline-flex size-4 items-center justify-center rounded-full bg-red-500 transition-all duration-500"
            >
              <span className="inline-block size-1.5 rounded-full bg-white"></span>
            </span>
          </div>
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 h-full w-full bg-[linear-gradient(90deg,rgba(9,42,27,0.00)_11.52%,#092A1B_89.04%)] select-none"></div>
        </div>
      </div>

      <div className="absolute inset-0 !z-50 xl:hidden">
        <BannerSlide data={SlideList} onChange={handleSlideChange} />
      </div>
    </section>
  );
}
