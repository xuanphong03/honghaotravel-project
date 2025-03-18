'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Explore() {
  const text = useRef(null);
  const explore = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: explore.current,
        start: 'top center',
        end: '70% center',
        end: false,
        markers: true,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });
    tl.to(text.current, {
      opacity: 0.4,
      y: 0,
      duration: 0.5,
    });
  });
  return (
    <div
      ref={explore}
      className="explore mx-auto flex max-w-[87.5rem] flex-col gap-[3.56rem] py-16 max-md:px-5"
    >
      <div className="title flex flex-col gap-3 max-md:w-[16.04469rem]">
        <p
          ref={text}
          className="sub2-regular md:caption-regular !text-greyscaletext-80-main translate-y-24 transform !text-xl !leading-[100%] !font-bold opacity-0"
        >
          EXPLORE
        </p>
        <h2 className="h3-bold md:h2-bold !text-greyscaletext-80-main">
          BEST TRIPS FOR YOU
        </h2>
      </div>
    </div>
  );
}
