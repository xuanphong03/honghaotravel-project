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
        className="absolute top-0 left-0 h-[100rem] w-[100rem]"
      >
        <Image
          alt=""
          width={1600}
          height={1400}
          src="/images/activity/bg-activity.png"
          className="h-[49.0625rem] w-full object-cover"
        />
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
