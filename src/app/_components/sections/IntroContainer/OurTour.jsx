'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/all';
import Image from 'next/image';
import { useRef } from 'react';

export default function OurTour() {
  const TOUR_DESC = [
    { id: 1, desc: 'Tours accommodate a maximum of 10 guests...' },
    { id: 2, desc: 'Flexible cancellation policy...' },
    { id: 3, desc: 'Book now, pay later...' },
    { id: 4, desc: 'Fluent English-speaking guides...' },
    {
      id: 5,
      desc: 'Creating job opportunities for the Vietnamese community...',
    },
    {
      id: 6,
      desc: 'Creating job opportunities for the Vietnamese community...',
    },
  ];
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(MotionPathPlugin);

      gsap.to('#mountain_container', {
        opacity: 1,
        left: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '.trigger-motorbike-button',
          toggleActions: 'play none none none',
          start: 'top 50%',
        },
      });

      gsap.to('.fade-out-animation', {
        opacity: 0,
        duration: 1,
        delay: 12,
        scrollTrigger: {
          trigger: '.trigger-motorbike-button',
          toggleActions: 'play none none none',
          start: 'top 50%',
        },
      });
      gsap.to('.line-red-container', {
        height: '100%',
        duration: 2,
        scrollTrigger: {
          trigger: '.trigger-motorbike-button',
          toggleActions: 'play none none none',
          start: 'top 50%',
        },
      });
      // Set initial motorbike position
      gsap.set('#motorbike', {
        xPercent: -50, // Center horizontally
        yPercent: -50, // Center vertically
        transformOrigin: '50% 50%', // Rotate around center
      });

      // Animate motorbike along the SVG path
      gsap.to('#motorbike', {
        delay: 2,
        duration: 10, // Adjusted for smoother timing,
        opacity: 1,
        motionPath: {
          path: '#line_path_motorbike', // The SVG path ID
          align: '#line_path_motorbike', // Aligns motorbike to the path
          autoRotate: true, // Rotates motorbike to follow path direction
          alignOrigin: [0.5, 0.5], // Ensures proper centering on the path
        },
        scrollTrigger: {
          trigger: '.trigger-motorbike-button', // Start when button is in view
          toggleActions: 'play none none none',
          start: 'top 50%', // Start when the trigger is 50% from the top
        },
      });
    },
    { scope: container },
  );
  return (
    <section
      id="our_tour"
      ref={container}
      className="relative z-[1] mt-[6.62rem] overflow-hidden"
    >
      <div className="relative mx-auto hidden flex-col items-center md:flex md:w-[87.5rem]">
        <div className="mx-auto inline-flex flex-col items-center gap-[1.8125rem]">
          <h2 className="text-center leading-[1.2] font-extrabold tracking-[0.00875rem] text-white opacity-90 md:text-[0.875rem]">
            EXPLORE YOUR JOURNEY WITH US
          </h2>
          <button className="trigger-motorbike-button">
            <Image
              width={100}
              height={100}
              alt="Hong Hao Travel"
              src="/images/home/our-tour/arrow-down.svg"
              className="size-[3.0625rem] object-center"
            />
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden pt-[5.3125rem] max-md:px-[1rem] max-md:pt-0 max-md:pb-0 md:pb-[5rem] md:pl-[4rem] lg:pb-[7.6875rem] lg:pl-[6.75rem] xl:pb-[20.875rem]">
        <div
          id="mountain_container"
          className="absolute top-0 right-[-50rem] bottom-0 hidden md:block"
        >
          <Image
            width={500}
            height={500}
            alt="Hong Hao Travel"
            src="/images/home/our-tour/cloud.png"
            className="animation_cloud1 absolute top-[1rem] left-1/2 z-[1] opacity-30 delay-300"
          />
          <Image
            width={500}
            height={500}
            alt="Hong Hao Travel"
            src="/images/home/intro/motorbike-tour.png"
            className="z-0 h-[44.375rem] w-screen object-contain"
          />
          <Image
            alt="Hong Hao Travel"
            width={500}
            height={500}
            src="/images/home/our-tour/cloud2.png"
            className="animation_cloud2 absolute top-[2rem] left-1/2"
          />
        </div>
        <div className="relative z-[2] w-full md:w-[38.8125rem]">
          <h2 className="font-londrina-solid mb-[2rem] text-[2.5rem] leading-none font-black text-white max-md:w-3/4 md:mb-[3.5rem] md:text-[3.5rem]">
            HONG HAO MOTORBIKE TOUR
          </h2>
          <p className="md:tracking-0 mb-[1.5rem] text-[0.875rem] leading-normal tracking-[0.00219rem] text-[rgb(197,197,197)] md:mb-[1rem] md:text-[1.75rem] md:leading-normal md:tracking-[0.005rem] lg:mb-[2rem] lg:text-[1rem]">
            Experience the raw beauty of Hà Giang with our immersive travel
            adventures. From rugged mountain landscapes to vibrant ethnic
            cultures, Hà Giang offers a truly unique and authentic experience.
            Explore remote villages.
          </p>
          <ul className="mb-[2rem] flex flex-col gap-[0.75rem]">
            {TOUR_DESC.map(({ id, desc }) => (
              <li key={id} className="flex items-center gap-[0.5rem]">
                <Image
                  width={20}
                  height={20}
                  alt="Hong Hao Travel"
                  src="/images/home/our-tour/tick.svg"
                  className="size-[1rem] object-cover"
                />
                <span className="md:tracking-0 ml-[0.5rem] text-[0.875rem] font-bold text-[#f1f1f1] md:text-[1.5rem] md:leading-normal lg:text-[1rem]">
                  {desc}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 md:gap-1">
            <button className="group bg-orange-normal border-orange-normal group button border-orange-hover bg-orange-hover flex h-[3rem] w-[10.21875rem] cursor-pointer items-center justify-center gap-2 rounded-lg border border-solid px-[1.5rem] py-[0.75rem] text-sm font-bold whitespace-nowrap text-white uppercase ring-offset-white duration-300 ease-linear focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[5rem] md:w-fit md:text-[1.5rem] lg:mr-[1rem] lg:h-[3.5rem] lg:px-[2rem] lg:py-[1rem] xl:text-[16px] dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
              Book now
              <span className="inline-flex size-[1rem] items-center justify-center px-[0.125rem] py-[0.17188rem] transition-transform duration-500 group-hover:translate-x-1/3">
                <Image
                  alt="Hong Hao Travel"
                  width={20}
                  height={20}
                  src="/images/arrow/arrow-right.svg"
                  className="size-full object-contain"
                />
              </span>
            </button>
            <button className="group hover:bg-orange-normal hover:border-orange-normal group button border-orange-hover bg-orange-hover flex h-[3rem] w-[10.21875rem] cursor-pointer items-center justify-center gap-2 rounded-lg border border-solid px-[1.5rem] py-[0.75rem] text-sm font-bold whitespace-nowrap text-white uppercase ring-offset-white duration-300 ease-linear focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-[5rem] md:w-fit md:text-[1.5rem] lg:mr-[1rem] lg:h-[3.5rem] lg:px-[2rem] lg:py-[1rem] xl:text-[16px] dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
              All tour
              <span className="inline-flex size-[1rem] items-center justify-center px-[0.125rem] py-[0.17188rem] transition-transform duration-500 group-hover:translate-x-1/3">
                <Image
                  alt="Hong Hao Travel"
                  width={20}
                  height={20}
                  src="/images/arrow/arrow-right.svg"
                  className="size-full object-contain"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="fade-out-animation pointer-events-none absolute top-1/2 left-1/2 hidden h-[50rem] w-[11rem] -translate-x-[40%] -translate-y-[45%] md:block">
        <div className="line-red-container h-0 overflow-hidden">
          <svg
            width="68"
            height="714"
            viewBox="0 0 68 714"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full object-cover"
          >
            <path
              d="M12.1582 1.89551C9.56033 24.1217 1.63281 54.4379 1.63281 76.8445C1.63281 94.6201 5.52653 113.236 2.49001 130.848C-1.15298 151.977 12.7991 186.622 24.8723 203.614C41.5076 227.027 56.6881 254.78 62.9698 283.047C67.5053 303.457 66.8678 323.635 63.7318 344.194C62.2826 353.694 63.8138 363.39 62.3031 372.957C60.6279 383.567 58.2166 394.057 56.1123 404.578C52.6306 421.987 46.8569 437.015 36.7778 451.915C29.2215 463.085 23.0426 472.206 22.1102 485.726C20.9194 502.992 12.5121 520.164 9.34756 537.253C6.60436 552.066 10.2048 566.045 10.2048 580.684C10.2048 603.727 8.36815 626.026 14.9669 648.022C21.4484 669.626 13.2051 691.359 15.3479 712.787"
              stroke="#E64827"
              strokeWidth="2"
              strokeLinecap="round"
              id="line_path_motorbike"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: 'none',
              }}
            />
          </svg>
        </div>

        <div className="absolute bottom-full left-1/2 -translate-x-1/2">
          <Image
            width={50}
            height={50}
            id="motorbike"
            alt="Hong Hao Travel"
            src="/images/home/our-tour/motor.png"
            className="h-[6.9375rem] w-[8.12644rem] object-contain opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
