'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

export default function Banner() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to('.background-overlay', {
        delay: 0.5,
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
      className="bg-green-dark relative h-[21.04713rem] w-full md:h-screen"
    >
      <Image
        alt="Hong Hao Travel"
        width={2000}
        height={1000}
        src="/images/contact-us/bg-banner.jpeg"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-[35%] left-[1.25rem] brightness-125 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <Image
          alt="Hong Hao Travel"
          width={2000}
          height={1000}
          className="h-[17.125rem] w-[51.52831rem] object-contain max-md:hidden"
          src="/images/contact-us/banner-text.png"
        />
        <Image
          alt="Hong Hao Travel"
          width={400}
          height={200}
          className="h-[7.55425rem] w-[18.09813rem] object-contain md:hidden"
          src="/images/contact-us/banner-text.png"
        />
      </div>
      <div className="absolute right-0 bottom-0 left-0 h-[5rem] w-full bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)] md:h-[19.8125rem]"></div>
      <div
        style={{ background: 'conic-gradient(#064e3b, #065f46, #064e3b)' }}
        className="background-overlay pointer-events-none absolute inset-0 z-[500] opacity-100 contrast-125"
      ></div>
    </section>
  );
}
