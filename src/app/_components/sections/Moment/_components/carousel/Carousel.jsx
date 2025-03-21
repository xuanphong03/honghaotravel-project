'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef, useState } from 'react';
import MomentSlideItem from './carousel-item';

export default function Carousel() {
  const slideContainerRef = useRef(null);
  const slideFirstRowRef = useRef(null);
  const slideSecondRowRef = useRef(null);
  const tl = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef(null);

  useGSAP(
    () => {
      if (
        !slideFirstRowRef.current ||
        !slideSecondRowRef.current ||
        !slideContainerRef.current
      )
        return;

      const slideContainerWidth = slideContainerRef.current.scrollWidth;
      const screenWidth = window.innerWidth;
      const moveDistanceWidth = slideContainerWidth - screenWidth;

      // Tạo timeline để chạy animation tự động
      tl.current = gsap.timeline({ repeat: 0, paused: true });
      const speed = 20;

      tl.current.to([slideFirstRowRef.current, slideSecondRowRef.current], {
        x: `-${moveDistanceWidth}px`,
        duration: speed,
        ease: 'linear',
      });

      return () => {
        tl.current?.kill();
      };
    },
    {
      scope: slideContainerRef,
    },
  );

  // Xử lý sự kiện kéo slide
  const handlePointerDown = (e) => {
    setIsDragging(true);
    console.log('Point down');
    startX.current = e.clientX || e.touches?.[0]?.clientX;
    currentX.current = startX.current;
    velocity.current = 0;

    tl.current.pause();
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const deltaX = clientX - currentX.current;
    currentX.current = clientX;

    const containerWidth = slideContainerRef.current.offsetWidth;
    const slideWidth = slideFirstRowRef.current.scrollWidth;
    const maxOffset = slideWidth - containerWidth;

    const currentXPos = gsap.getProperty(slideFirstRowRef.current, 'x');
    let newX = currentXPos + deltaX;

    // Giới hạn không kéo quá bên trái hoặc bên phải
    if (newX > 0) newX = 0;
    if (newX < -maxOffset) newX = -maxOffset;

    gsap.to([slideFirstRowRef.current, slideSecondRowRef.current], {
      x: newX,
      duration: 0.1,
      ease: 'power1.out',
    });
  };
  const handlePointerUp = () => {
    setIsDragging(false);

    // Tiếp tục chuyển động theo quán tính khi thả chuột
    const friction = 0.95;
    const animateMomentum = () => {
      if (Math.abs(velocity.current) > 0.5) {
        gsap.to([slideFirstRowRef.current, slideSecondRowRef.current], {
          x: `+=${velocity.current}`,
          duration: 0.2,
          ease: 'power1.out',
        });

        velocity.current *= friction;
        animationFrame.current = requestAnimationFrame(animateMomentum);
      } else {
        cancelAnimationFrame(animationFrame.current);
        tl.current.play();
      }
    };

    animateMomentum();
  };

  return (
    <div
      ref={slideContainerRef}
      className="slide_container relative h-full w-full overflow-hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      onMouseEnter={() => tl.current.pause()}
      onMouseLeave={() => tl.current.play()}
    >
      <div className="absolute top-0 left-0 flex h-full cursor-grab flex-col space-y-[0.75rem] select-none">
        <div
          id="slide_row_1"
          ref={slideFirstRowRef}
          className="flex space-x-[0.75rem] pl-[16.665rem]"
        >
          {[...Array(5)].map((_, i) => (
            <MomentSlideItem key={i} />
          ))}
          <div className="flex w-[10rem] items-center justify-center">
            <Link
              href="#"
              className="group relative flex size-[7.625rem] items-center justify-center rounded-full transition-all duration-200 lg:hover:bg-[#E64828]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="122"
                height="122"
                viewBox="0 0 122 122"
                fill="none"
                className="absolute top-0 left-0 size-full animate-spin"
              >
                <circle
                  cx="61"
                  cy="61"
                  r="60.25"
                  transform="rotate(90 61 61)"
                  stroke="#E64828"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
              <div className="relative overflow-hidden text-[0.875rem] leading-[1.2] font-bold text-transparent uppercase">
                DISCOVERY
                <span className="text-orange-normal absolute top-0 left-0 text-[0.875rem] leading-[1.2] font-bold uppercase transition-all duration-300 group-hover:-translate-y-full">
                  DISCOVERY
                </span>
                <span className="absolute bottom-0 left-0 translate-y-full text-[0.875rem] leading-[1.2] font-bold text-white uppercase transition-all duration-300 group-hover:translate-y-0">
                  DISCOVERY
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div
          id="slide_row_2"
          ref={slideSecondRowRef}
          className="flex space-x-[0.75rem]"
        >
          {[...Array(7)].map((_, i) => (
            <MomentSlideItem key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
