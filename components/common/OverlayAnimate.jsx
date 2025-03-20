'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function OverlayAnimate() {
  const ab = useRef(null);
  useGSAP(() => {
    gsap.to(ab.current, {
      duration: 1, // Thời gian hiệu ứng (2 giây)
      backgroundColor: 'transparent', // Màu nền biến mất
      ease: 'power2.out',
      zIndex: 0,
      opacity: 0,
    });
  });
  return (
    <div
      ref={ab}
      className="about-ab absolute top-0 right-0 left-0 z-30 h-screen"
      style={{
        background:
          'conic-gradient(rgb(6, 78, 59), rgb(6, 95, 70), rgb(6, 78, 59))',
      }}
    ></div>
  );
}
