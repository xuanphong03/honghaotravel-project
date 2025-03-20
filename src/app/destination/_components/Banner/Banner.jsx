'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import InfinitySlide from '../../../../../components/common/InfinitySlide/InfinitySlide';

export default function Banner() {
  const container = useRef(null);
  useGSAP(
    () => {
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
          width={2000}
          height={1000}
          priority
          alt="Hong Hao Travel"
          src="/images/destination/banner-bg.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]"></div>
      <div
        data-aos="fade-up"
        className="absolute top-1/2 left-3/4 hidden -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <Image
          width={500}
          height={500}
          alt="Hong Hao Travel"
          src="/images/destination/map.png"
          className="h-full w-full translate-y-[5%] object-cover"
        />
      </div>
      <div
        data-aos="fade-up"
        className="absolute top-0 left-1/2 z-10 mx-0 h-full w-full -translate-x-1/2 max-md:px-[1.25rem] md:w-[87.5rem] xl:w-[93rem]"
      >
        <Image
          priority
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/destination/banner-text.png"
          className="absolute top-[36%] h-[7.55425rem] w-[18.09813rem] md:top-[9rem] md:h-[17.50006rem] md:w-[41.10125rem]"
        />
      </div>
      <div className="absolute top-0 right-[4.75rem] bottom-0 z-20 hidden translate-x-[5%] md:block">
        <InfinitySlide />
      </div>
      <div
        style={{ background: 'conic-gradient(#064e3b, #065f46, #064e3b)' }}
        className="background-overlay pointer-events-none absolute inset-0 z-[500] opacity-100 contrast-125"
      ></div>
    </section>
  );
}
