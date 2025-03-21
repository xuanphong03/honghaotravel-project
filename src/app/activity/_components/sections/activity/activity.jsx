'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs-v2';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef } from 'react';
import Album from './album/album-list';

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
      <div className="absolute top-[2.875rem] right-0 left-0 flex w-full justify-center md:hidden">
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
        <div className="relative w-full pt-[9.05rem] md:pt-[12.5rem]">
          <div className="mx-auto w-full max-md:px-[1rem] md:w-[87.5rem]">
            <h2
              data-aos="fade-up"
              className="font-londrina-solid text-[1.5rem] leading-none font-black text-[#122718] opacity-80 max-md:text-center md:w-[65.25rem] md:text-[3.5rem]"
            >
              Discover the raw beauty of Ha Giang through our immersive tours,
              where every twist of the road unveils a new panorama of
              awe-inspiring landscapes.
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="flex w-full items-center justify-center">
            <Tabs
              defaultValue="people"
              className="flex w-full items-center justify-center gap-y-[1rem] md:gap-y-[4.56rem]"
            >
              <TabsList
                data-aos="fade-up"
                data-aos-offset="300"
                className="flex items-center gap-[2.25rem] bg-transparent"
              >
                <TabsTrigger value="people">PEOPLE</TabsTrigger>
                <TabsTrigger value="hiking">HIKING</TabsTrigger>
                <TabsTrigger value="discovery">DISCOVERY</TabsTrigger>
                <TabsTrigger value="food">FOOD</TabsTrigger>
              </TabsList>
              <div data-aos="fade-up" data-aos-offset="300">
                <TabsContent value="people">
                  <Album />
                </TabsContent>
                <TabsContent value="hiking">
                  <Album />
                </TabsContent>
                <TabsContent value="discovery">
                  <Album />
                </TabsContent>
                <TabsContent value="food">
                  <Album />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
