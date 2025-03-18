'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import InfinitySlide from '../../../../../components/common/InfinitySlide/InfinitySlide';
import './Banner.css';

export default function Banner() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to('.fade-in-up', {
        y: 0,
        opacity: 1,
        duration: 0.75,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
        },
      });
      gsap.to('.fade-in-left', {
        x: 0,
        opacity: 1,
        duration: 0.75,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
        },
      });
      gsap.to('.background-overlay', {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: container },
  );
  return (
    <section
      id="banner"
      ref={container}
      className="relative h-[21.04713rem] w-full md:h-[43.3125rem]"
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          priority
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/destination/banner-bg.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="custom-bg-gradient absolute inset-0 h-full w-full"></div>
      <div className="absolute top-1/2 left-3/4 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <Image
          width={500}
          height={500}
          alt="Hong Hao Travel"
          src="/images/destination/map.png"
          className="fade-in-up h-full w-full translate-y-[5%] object-cover opacity-0"
        />
      </div>
      <div className="fade-in-up absolute top-0 left-1/2 z-10 h-full w-full -translate-x-1/2 translate-y-[5%] opacity-0 xl:max-w-[100rem]">
        <Image
          priority
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/destination/banner-text.png"
          className="absolute top-[36%] left-[1.25rem] h-[7.55425rem] w-[18.09813rem] md:top-[9rem] md:left-[5rem] md:h-[17.50006rem] md:w-[41.10125rem]"
        />
      </div>
      <div className="fade-in-left absolute top-0 right-[4.75rem] bottom-0 z-20 hidden translate-x-[5%] opacity-0 md:block">
        <InfinitySlide />
      </div>
      <div
        style={{ background: 'conic-gradient(#064e3b, #065f46, #064e3b)' }}
        className="background-overlay pointer-events-none absolute inset-0 z-[500] opacity-100 contrast-125"
      ></div>
    </section>
  );
}
