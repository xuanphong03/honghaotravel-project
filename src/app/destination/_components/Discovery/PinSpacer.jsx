'use client';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function PinSpacer() {
  const pinSpacer = useRef();
  useGSAP(() => {
    // Pin the container
    gsap.to(pinSpacer.current, {
      scrollTrigger: {
        trigger: pinSpacer.current,
        start: 'top top',
        scrub: true,
        pinSpacing: false,
        pin: true,
      },
    });
  });
  return (
    <>
      <Image
        alt="Hong Hao Travel"
        width={1600}
        height={900}
        ref={pinSpacer}
        src="/images/destination/discover-bg.png"
        className="absolute z-0 h-[120vh] w-full object-cover pb-[3rem] max-md:hidden"
      />
      {/* <div className="absolute top-[1.5rem] left-[1.5rem] md:hidden">
        <Image
          alt="Hong Hao Travel"
          width={100}
          height={100}
          src="/images/destination/moon-bg.png"
          className="relative size-[6.75181rem] object-contain"
        />
      </div> */}
      {/* <div className="absolute bottom-[13.5rem] left-[18.5rem]">
        <Image
          alt="Hong Hao Travel"
          width={500}
          height={500}
          src="/images/destination/moon-bg.png"
          className="relative size-[12.39444rem] object-contain max-md:hidden"
        />
      </div> */}
    </>
  );
}
