'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import AboutData from './AboutData';
import AboutL from './AboutL';
import AboutR from './AboutR';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OverlayAnimate from '../../common/OverlayAnimate';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BannerAbout() {
  const about = useRef(null);
  const abd1 = useRef(null);
  const abd2 = useRef(null);
  const abd3 = useRef(null);

  const aboutL = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: about.current,
        start: '50% center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: about.current,
        start: '60% center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });
    tl.to(abd1.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    });
    tl2.to(
      abd2.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      's',
    );

    gsap.to(aboutL.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    });
  });
  return (
    <div
      ref={about}
      className="about relative h-[49.375rem] overflow-hidden pt-[7.25rem] md:h-[101rem] md:pt-[9rem]"
    >
      <OverlayAnimate />
      <div className="absolute top-0 right-0 left-0 h-full w-full">
        <div
          className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-cover bg-no-repeat"
          style={{
            background:
              'linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)',
          }}
        ></div>
        <Image
          src="/images/about/about-banner.jpeg"
          alt="banner"
          fill
          className="absolute top-0 right-0 bottom-0 left-0 z-0 object-cover"
        ></Image>
      </div>
      <div className="absolute top-[33.5rem] -right-[6.437rem] z-10 h-[10.74656rem] w-[25.36806rem] shrink-0 max-md:hidden">
        <Image
          src="/images/about/cloud.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-4 h-full max-w-[87.5rem] md:mx-auto">
        <div className="absolute -bottom-[16.5rem] -left-[5.5rem] h-[55.90219rem] w-[27.522rem] md:bottom-0 md:left-[33%] md:h-[82rem] md:w-[57rem]">
          <Image
            src="/images/about/map.png"
            fill
            alt=""
            className="object-contain max-md:hidden"
          />
          <Image
            src="/images/about/map-mb.png"
            fill
            alt=""
            className="object-contain md:hidden"
          />
          <div className="absolute top-[35%] inline-flex w-[8.75013rem] flex-col items-center max-md:-right-[9%] md:top-[45%] md:left-[35.5%]">
            <svg
              className="circle mr-[0.95rem] size-[2.25rem] animate-ping max-md:mt-[0.4rem] max-md:size-[1.8rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle
                cx="10"
                cy="10"
                r="3.5"
                fill="#E64827"
                stroke="#E64827"
              ></circle>
              <circle cx="10" cy="10" r="9.5" stroke="#E64827"></circle>
            </svg>
          </div>
          <div className="absolute top-[64%] left-[10%] inline-flex w-[8.75013rem] flex-col items-center md:top-[68%] md:-left-[1.5%]">
            <svg
              className="circle mr-[0.95rem] size-[2.25rem] animate-ping max-md:mt-[0.4rem] max-md:size-[1.8rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle
                cx="10"
                cy="10"
                r="3.5"
                fill="#E64827"
                stroke="#E64827"
              ></circle>
              <circle cx="10" cy="10" r="9.5" stroke="#E64827"></circle>
            </svg>
          </div>
        </div>
        <AboutData
          ref={abd1}
          exp={{ text: '10.000', notice: 'Visitors experience' }}
          cl1="items-end absolute top-[44.5%] right-[13%] md:top-[47.5%] md:right-0 flex flex-col items-end"
          cl2="text-end"
        />
        <AboutData
          ref={abd2}
          exp={{ text: '13 year', notice: 'Experience' }}
          cl1="md:items-end absolute top-[76%] md:top-[68%] left-0 flex flex-col items-start"
          cl2="md:text-end"
        />

        <AboutL ref={aboutL} />
        <div className="absolute top-[70%] z-10 flex w-full justify-end max-md:hidden">
          <AboutR />
        </div>
      </div>
    </div>
  );
}
