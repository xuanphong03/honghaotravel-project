'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function ScrollToTopButton() {
  gsap.registerPlugin(ScrollTrigger);
  const circleRef = useRef(null);

  useGSAP(() => {
    if (!circleRef.current) return;

    const pathLength = circleRef.current.getTotalLength();

    gsap.set(circleRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(circleRef.current, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      data-aos="fade-up"
      data-aos-offset="0"
      onClick={handleScrollToTop}
      className="xmd:size-[2.3rem] z-[9] size-[3.375rem] cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 54"
        fill="none"
        className="size-full"
      >
        <g clipPath="url(#clip0_11465_24723)">
          <circle
            ref={circleRef}
            cx="27"
            cy="27"
            r="25.5"
            stroke="#E64827"
            strokeWidth="3"
          />
          <path d="M27 16L37 32L27 27L17 32L27 16Z" fill="#E64827" />
        </g>
        <defs>
          <clipPath id="clip0_11465_24723">
            <rect width="54" height="54" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
