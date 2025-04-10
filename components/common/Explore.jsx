'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ItemTour from './ItemTour/ItemTour';
import CardVertical from '@/components/common/card/CardVertical';

gsap.registerPlugin(useGSAP);

export default function Explore({ className, textColor }) {
  const text = useRef(null);
  const explore = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: explore.current,
        start: 'top center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });
    tl.to(text.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
    });
  });
  return (
    <div
      ref={explore}
      className={`explore mx-auto flex max-w-[87.5rem] flex-col gap-4 max-md:px-3 md:gap-[3.56rem] ${className}`}
    >
      <div className="title flex flex-col gap-3 max-md:w-[16.04469rem]">
        <p
          ref={text}
          className="sub2-bold__mb caption-bold !text-greyscaletext-80-main translate-y-24 transform !text-[1.125rem] !leading-[100%] !font-bold opacity-0"
        >
          EXPLORE
        </p>
        <h2 className={`h3-bold__mb h2-bold ${textColor}`}>
          BEST TRIPS FOR YOU
        </h2>
      </div>
      <div className="no-scrollbar gap-3 max-md:flex max-md:items-center max-md:overflow-x-scroll md:grid md:grid-cols-4 md:gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="relative h-[23.33956rem] w-[16.8755rem] overflow-hidden rounded-xl max-md:shrink-0 md:h-[29.5625rem] md:w-[21.375rem] md:rounded-3xl"
          >
            <CardVertical />
          </div>
        ))}
      </div>
    </div>
  );
}
