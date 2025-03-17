'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import CardDefault from '@/components/common/card/CardDefault';

function BestTrips() {
  const TRIPS = [
    {
      id: 1,
      name: 'Ha Giang Loop tour 4d5n',
      accommodation: 'Private room',
      motorbike: 'Semi-Automatic',
      tourGuide: 'Expert Local Guides speak Fluent English',
      transport: 'VIP Cabin Bus',
      time: '4 days 5 nights',
      price: 212,
      mapThumbnail: '/images/best-trips/namdan-hagiang-4n1.png',
      background: '/images/best-trips/item1.png',
    },
    {
      id: 2,
      name: 'Ha Giang Loop tour 4d5n',
      accommodation: 'Private room',
      motorbike: 'Semi-Automatic',
      tourGuide: 'Expert Local Guides speak Fluent English',
      transport: 'VIP Cabin Bus',
      time: '3 days 4 nights',
      price: 172,
      mapThumbnail: '/images/best-trips/dugia-hagiang-3n1.png',
      background: '/images/best-trips/item1.png',
    },
    {
      id: 3,
      name: 'Ha Giang Loop tour 4d5n',
      accommodation: 'Dormitory',
      motorbike: 'Semi-Automatic motorbike',
      tourGuide: 'Expert Local Guides speak Fluent English',
      transport: 'VIP Cabin Bus',
      time: '4 days 5 nights',
      price: 138,
      mapThumbnail: '/images/best-trips/dongvan-hagiang-2n1.png',
      background: '/images/best-trips/item1.png',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const tripListRef = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      if (!tripListRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const tripItems = gsap.utils.toArray('.trip-item', tripListRef.current);
      tripItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setCurrentIndex(index),
          onEnterBack: () => setCurrentIndex(index),
        });
      });
      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <section
      id="best-trips"
      ref={container}
      className="relative z-10 w-full bg-white"
    >
      <div className="mx-auto flex w-full flex-wrap justify-between pt-[3rem] pb-[4.94rem] md:w-[87.5rem] md:pt-[5.63rem] lg:flex-nowrap">
        <div className="mb-[2rem] h-fit w-full lg:sticky lg:top-28 lg:max-h-screen">
          <div className="relative max-md:pl-[0.75rem] md:mb-[2.44rem] lg:w-auto">
            <h3 className="mb-[0.75rem] text-[1.125rem] leading-none font-extrabold text-[#262626]/40">
              EXPLORE
            </h3>
            <h2 className="font-londrina-solid w-1/2 text-[2.5rem] leading-none font-black text-[#262626] md:text-[3.5rem] lg:w-full">
              BEST TRIPS FOR YOU
            </h2>
            <Link
              href="/tours"
              className="bg-orange-normal absolute right-0 bottom-full flex h-[2.125rem] w-[7.9rem] origin-bottom-right -rotate-90 items-center justify-center rounded-t-[0.5rem] text-[0.875rem] font-extrabold text-white lg:hidden lg:h-[3.4rem] lg:w-[9.4rem]"
            >
              All tour
            </Link>
          </div>

          <div className="relative hidden h-[28.12494rem] w-[29.29231rem] lg:block">
            <Image
              width={500}
              height={500}
              alt="Hong Hao Travel"
              src={TRIPS[currentIndex]?.mapThumbnail || ''}
              className={`visible} absolute inset-0 h-full w-full object-contain opacity-100`}
            />
          </div>
        </div>

        <div className="absolute top-0 right-0 bottom-0 hidden h-full pt-[5.63rem] pb-[4.94rem] lg:block">
          <div className="sticky top-[10rem] !z-50 max-h-screen">
            <div className="relative h-[25rem] w-[2rem] bg-transparent">
              <Link
                href="/tours"
                className="bg-orange-normal absolute right-0 inline-flex h-[3.5rem] w-[10rem] origin-bottom-right -rotate-90 items-center justify-center gap-[0.5rem] rounded-t-[0.5rem] px-[2rem] py-[1rem]"
              >
                <span className="text-[0.875rem] leading-[1.2] font-bold text-white uppercase">
                  All tour
                </span>
                <Image
                  alt="Hong Hao Travel"
                  width={50}
                  height={50}
                  src="/images/arrow/arrow-right.svg"
                  className="size-[0.875rem] rotate-90 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hidden_scrollbar flex w-full gap-[0.75rem] overflow-x-auto px-[0.75rem] lg:block lg:w-[47.3125rem] lg:overflow-visible lg:px-0"
          ref={tripListRef}
        >
          {TRIPS.map((item, index) => (
            <Link
              data-index={index}
              key={item.id}
              href="#"
              className="trip-item inline-block"
            >
              <CardDefault data={item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestTrips;
