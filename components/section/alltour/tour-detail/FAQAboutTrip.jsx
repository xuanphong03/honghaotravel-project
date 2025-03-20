'use client';
import React, { useRef } from 'react';
import { AccordionDemo } from './Accordion';
import { DialogDemo } from './DialogVideo';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function FAQAboutTrip() {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: '-40% center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });

    tl.to(
      text1.current,
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      },
      's',
    ).to(
      text2.current,
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      },
      's',
    );
  });
  return (
    <div
      ref={container}
      className="mx-auto max-w-[87.5rem] py-[5.62remm] max-md:hidden"
    >
      <h2
        ref={text1}
        className="h2-bold__mb h2-bold !text-greyscaletext-80-main translate-y-12 transform opacity-0"
      >
        FAQ about the trip
      </h2>
      <div
        ref={text2}
        className="mt-12 flex w-full translate-y-8 transform justify-between opacity-0"
      >
        <div className="w-1/2">
          <AccordionDemo />
        </div>
        <div className="w-[47%]">
          <DialogDemo />
        </div>
      </div>
    </div>
  );
}
