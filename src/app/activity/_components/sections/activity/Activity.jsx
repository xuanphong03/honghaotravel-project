'use client';
import Title from './Title';
import Image from 'next/image';
import Content from './Content';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Activity() {
  const imageRef = useRef();
  const container = useRef();
  const contentRef = useRef();

  useGSAP(
    () => {
      // Pin the container
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top top',
          scrub: true,
          pinSpacing: false,
          pin: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full overflow-hidden bg-white"
    >
      <div
        ref={imageRef}
        className="absolute top-0 left-0 hidden h-[100rem] w-[100rem] md:block"
      >
        <Image
          width={1600}
          height={1400}
          alt="Hong Hao Travel"
          src="/images/activity/bg-activity.png"
          className="h-[49.0625rem] w-full object-cover"
        />
      </div>
      <div className="absolute top-[2.875rem] right-0 left-0 flex w-full justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="168"
          height="168"
          viewBox="0 0 168 168"
          fill="none"
        >
          <ellipse
            cx="84"
            cy="84"
            rx="84"
            ry="84"
            transform="rotate(-180 84 84)"
            fill="url(#paint0_linear_8629_29418)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8629_29418"
              x1="84"
              y1="7.62939e-06"
              x2="84"
              y2="168"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.315" stopColor="#FEBE10" stopOpacity="0" />
              <stop offset="1" stopColor="#FEBE10" stopOpacity="0.24" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        ref={contentRef}
        className="relative flex w-full flex-col gap-y-[1.75rem] bg-transparent"
      >
        <Title />
        <Content />
      </div>
    </section>
  );
}
