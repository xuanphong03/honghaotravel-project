'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import HikingExperience from './banner-hiking-experience';
import LocationPoint from './banner-location-point';
import MotorbikeTour from './banner-motorbike-tour';
import styles from './banner.module.css';
import { cn } from '@/lib/utils';

export default function Banner() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to('.background-overlay', {
        opacity: 0,
        duration: 1.5,
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
      className="relative w-full overflow-hidden bg-white xl:h-[100rem]"
    >
      <h1 className="fixed top-0 left-0 z-[-1] opacity-0">Activity Ha Giang</h1>
      <div className="absolute inset-0 h-full w-full">
        <Image
          priority
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/activity/banner.svg"
          className="size-full object-cover max-md:hidden"
        />
        <Image
          priority
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/activity/banner-mb.svg"
          className="size-full object-cover md:hidden"
        />
        <div
          className={cn(
            styles.backgroundOverlay,
            'absolute right-0 bottom-0 left-0 h-[120.9375rem] w-full',
          )}
        ></div>
      </div>
      <div className="absolute right-0 bottom-0 left-0">
        <Image
          priority
          width={2000}
          height={400}
          alt="Climbing"
          src="/images/activity/climbing.svg"
          className="h-[24.47356rem] w-[101.49219rem] translate-y-[2rem] object-fill max-md:hidden"
        />
        <Image
          priority
          width={1600}
          height={400}
          alt="Hong Hao Travel"
          src="/images/activity/climbing-mb.svg"
          className="w-full object-cover md:hidden"
        />
      </div>
      <div className="relative z-10 mx-auto h-[100rem] w-full max-md:mt-[5.3rem] max-md:h-[105rem] max-md:px-[1rem] md:w-[87.5rem]">
        <Image
          priority
          width={400}
          height={200}
          data-aos="fade-up"
          alt="Activity Ha Giang"
          src="/images/activity/activity-text.svg"
          className="top-[9rem] h-[8.65rem] w-[20.9605rem] md:absolute md:left-[5rem] md:h-[22.1875rem] md:w-[52.3605rem] lg:left-[0rem]"
        />
        <div className="py-[0.5rem] md:hidden">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-[0.5rem]">
              <BreadcrumbItem className="text-[0.75rem] tracking-[0.00219rem] text-[#C5C5C5]">
                <BreadcrumbLink
                  href="/"
                  className="flex items-center gap-[0.25rem]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="size-[1rem]"
                  >
                    <path
                      d="M13.3346 11.3334V7.63482C13.3346 7.27859 13.3343 7.10038 13.291 6.93462C13.2526 6.78772 13.1896 6.64871 13.1043 6.52309C13.0081 6.38134 12.8743 6.26379 12.6063 6.02922L9.40625 3.22922C8.90851 2.79369 8.65964 2.57604 8.37956 2.49321C8.13276 2.42023 7.86971 2.42023 7.62292 2.49321C7.34304 2.57598 7.09453 2.79343 6.59754 3.22829L3.39648 6.02922C3.1284 6.2638 2.99466 6.38134 2.89844 6.52309C2.81316 6.64871 2.74967 6.78772 2.71128 6.93462C2.66797 7.10038 2.66797 7.27859 2.66797 7.63482V11.3334C2.66797 11.9547 2.66797 12.2652 2.76946 12.5102C2.90479 12.8369 3.16418 13.0968 3.49089 13.2321C3.73591 13.3336 4.04654 13.3336 4.6678 13.3336C5.28905 13.3336 5.60002 13.3336 5.84505 13.2321C6.17176 13.0968 6.43108 12.837 6.56641 12.5103C6.6679 12.2653 6.66797 11.9546 6.66797 11.3334V10.6667C6.66797 9.93034 7.26492 9.33338 8.0013 9.33338C8.73768 9.33338 9.33464 9.93034 9.33464 10.6667V11.3334C9.33464 11.9546 9.33464 12.2653 9.43613 12.5103C9.57145 12.837 9.83085 13.0968 10.1576 13.2321C10.4026 13.3336 10.7132 13.3336 11.3345 13.3336C11.9557 13.3336 12.2667 13.3336 12.5117 13.2321C12.8384 13.0968 13.0977 12.8369 13.2331 12.5102C13.3346 12.2652 13.3346 11.9547 13.3346 11.3334Z"
                      fill="#C5C5C5"
                    />
                  </svg>
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem className="text-[0.75rem] tracking-[0.00375rem] md:text-[0.875rem] md:tracking-[0.00219rem]">
                <BreadcrumbLink href="/activity" className="text-white">
                  Activity
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="top-[32rem] left-[0rem] flex-col items-start space-y-[2.0625rem] md:absolute md:left-[5rem] lg:left-[0rem]">
          <p
            data-aos="fade-up"
            className="max-md:tracking-0.00219 text-base leading-[150%] font-normal tracking-[0.005rem] text-white max-md:overflow-y-auto max-md:text-[0.875rem] md:w-[52.3125rem]"
          >
            Ha Giang, nestled in the rugged mountains of northern Vietnam,
            beckons adventurers with its breathtaking scenery and vibrant
            cultural tapestry. From the towering peaks of the Dong Van Karst
            Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers
            an unforgettable journey through some of Vietnam's most
            awe-inspiring landscapes.
          </p>
          <div
            data-aos="fade-up"
            className="mt-[2.06rem] flex items-center gap-[1rem] font-bold text-white"
          >
            <button
              className={cn(
                styles.buttonDefault,
                'group bg-orange-normal border-orange-normal__hover border border-solid',
              )}
            >
              <span>Book now</span>
              <Image
                width={10}
                height={10}
                alt="Hong Hao Travel"
                src="/images/arrow/arrow-right.svg"
                className="size-[0.625rem] object-contain duration-200 ease-linear group-hover:translate-x-[0.5rem]"
              />
            </button>
            <button
              className={cn(
                styles.buttonDefault,
                'group hover:bg-orange-normal hover:border-orange-normal border border-solid border-white bg-transparent opacity-60 duration-300 ease-linear hover:opacity-100',
              )}
            >
              <span>All tour</span>
              <Image
                alt="Hong Hao Travel"
                width={10}
                height={10}
                src="/images/arrow/arrow-right.svg"
                className="size-[0.625rem] object-contain duration-300 ease-linear group-hover:translate-x-[0.5rem]"
              />
            </button>
          </div>
        </div>
        <Image
          alt="Hong Hao Travel"
          priority
          width={2000}
          height={1000}
          data-aos="fade-up"
          src="/images/activity/map-desktop.svg"
          className="absolute bottom-0 left-[35%] h-[82rem] w-[57rem] max-md:hidden"
        />
        <Image
          alt="Hong Hao Travel"
          priority
          width={700}
          height={1500}
          src="/images/activity/map-mb.svg"
          className="absolute top-[25.2rem] left-0 mx-auto mt-[3.25rem] h-[55rem] px-[2rem] md:hidden"
        />

        <div className="absolute top-[43.5rem] left-[2.8rem] h-[6.25rem] w-[4.75rem] max-md:top-[43.2rem] md:left-[-1rem]">
          <div className="relative">
            <div
              data-aos="fade-up"
              className="absolute inline-flex w-[8.75013rem] flex-col items-center space-y-[0] max-md:top-[7rem] max-md:left-[-1rem] md:top-[-1rem] md:left-[50.75rem]"
            >
              <LocationPoint />
            </div>
            <div
              data-aos="fade-up"
              className="absolute flex flex-col items-start space-y-[1.2rem] max-md:top-[11rem] max-md:left-[5.5rem] max-md:space-y-[0.75rem] md:top-[3rem] md:left-[58rem] lg:left-[58.7rem]"
            >
              <MotorbikeTour />
            </div>
          </div>
        </div>
        <div className="absolute top-[63.5rem] left-[-0.7rem] h-[6.25rem] w-[4.75rem] md:left-[0.5rem] lg:left-[-3.6rem]">
          <div className="relative">
            <div
              data-aos="fade-up"
              className="absolute top-[5rem] left-[13.75rem] inline-flex w-[8.75013rem] flex-col items-center md:top-[7rem] md:left-[28rem] lg:left-[32rem]"
            >
              <LocationPoint />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="300"
              className="absolute top-[1rem] left-[3.5rem] flex flex-col items-start space-y-[2.82rem] max-md:top-[4.5rem] max-md:left-[2rem] max-md:space-y-[0.75rem]"
            >
              <HikingExperience />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[10.5rem] max-md:bottom-[10rem] max-md:pr-[0.75rem] md:right-[8rem] md:w-[38.0625rem] lg:right-[0rem]">
          <p
            data-aos="fade-up"
            className="line-clamp-[9] text-left text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-white not-italic md:text-right md:text-[1rem] md:tracking-[0.005rem]"
          >
            Embark on an unforgettable journey to Ha Giang, where breathtaking
            landscapes and vibrant cultures await you. Explore the majestic
            mountains, winding roads, and terraced rice fields while immersing
            yourself in the rich traditions of the local ethnic communities. Let
            our guided tours lead you through this mesmerizing region, filled
            with authentic experiences and hidden gems waiting to be discovered.
            Join us in Ha Giang and create memories that will last a lifetime
          </p>
        </div>
      </div>
      <div
        style={{ background: 'conic-gradient(#064e3b, #065f46, #064e3b)' }}
        className="background-overlay pointer-events-none absolute inset-0 z-[500] opacity-100 contrast-125"
      ></div>
    </section>
  );
}
