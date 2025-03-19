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
    <Image
      alt="Hong Hao Travel"
      width={1600}
      height={900}
      ref={pinSpacer}
      src="/images/destination/discover-bg.png"
      className="absolute z-0 h-[120vh] w-full object-cover pb-[3rem] max-md:hidden"
    />
  );
}
