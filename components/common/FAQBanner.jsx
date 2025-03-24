'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import OverlayAnimate from './OverlayAnimate';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function FAQBanner({ urlTitle }) {
  const text = useRef(null);

  useGSAP(() => {
    gsap.to(text.current, {
      duration: 0.75,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    });
  });
  return (
    <section className="alltour relative flex items-center justify-center py-[7.25rem] ps-[1.25rem] md:min-h-[45.5rem] md:py-[6.19rem] md:ps-[8.13rem] md:pe-16">
      <OverlayAnimate />
      <div className="bg absolute top-0 right-0 bottom-0 left-0 z-0">
        <Image
          src={'/images/alltour/banner.jpeg'}
          alt="banner"
          fill
          className="-z-20 object-cover"
        />
      </div>
      <div
        className="overlay absolute top-0 right-0 bottom-0 left-0 z-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)',
        }}
      ></div>
      <div
        ref={text}
        className="title relative h-[6.42925rem] w-[19.1605rem] translate-y-12 transform opacity-0 md:h-[15.6875rem] md:w-[48.1105rem]"
      >
        <Image src={urlTitle} alt="title" fill className="object-contain" />
      </div>
    </section>
  );
}
