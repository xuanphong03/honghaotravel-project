"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import CardDefault from "@/components/common/card/CardDefault";

function BestTrips() {
  const TRIPS = [
    {
      id: 1,
      name: "Ha Giang Loop tour 4d5n",
      accommodation: "Private room",
      motorbike: "Semi-Automatic",
      tourGuide: "Expert Local Guides speak Fluent English",
      transport: "VIP Cabin Bus",
      time: "4 days 5 nights",
      price: 212,
      mapThumbnail: "/images/best-trips/namdan-hagiang-4n1.png",
      background: "/images/best-trips/item1.png",
    },
    {
      id: 2,
      name: "Ha Giang Loop tour 4d5n",
      accommodation: "Private room",
      motorbike: "Semi-Automatic",
      tourGuide: "Expert Local Guides speak Fluent English",
      transport: "VIP Cabin Bus",
      time: "3 days 4 nights",
      price: 172,
      mapThumbnail: "/images/best-trips/dugia-hagiang-3n1.png",
      background: "/images/best-trips/item1.png",
    },
    {
      id: 3,
      name: "Ha Giang Loop tour 4d5n",
      accommodation: "Dormitory",
      motorbike: "Semi-Automatic motorbike",
      tourGuide: "Expert Local Guides speak Fluent English",
      transport: "VIP Cabin Bus",
      time: "4 days 5 nights",
      price: 138,
      mapThumbnail: "/images/best-trips/dongvan-hagiang-2n1.png",
      background: "/images/best-trips/item1.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const tripListRef = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      if (!tripListRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const tripItems = gsap.utils.toArray(".trip-item", tripListRef.current);
      tripItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentIndex(index),
          onEnterBack: () => setCurrentIndex(index),
        });
      });
      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <section
      id="best-trips"
      ref={container}
      className="relative w-full bg-white z-10"
    >
      <div className="w-full md:w-[87.5rem] mx-auto pt-[3rem] md:pt-[5.63rem] pb-[4.94rem] flex justify-between flex-wrap lg:flex-nowrap">
        <div className="lg:max-h-screen lg:sticky lg:top-28 h-fit w-full mb-[2rem]">
          <div className="relative md:mb-[2.44rem] max-md:pl-[0.75rem] lg:w-auto">
            <h3 className="text-[#262626]/40 text-[1.125rem] font-extrabold leading-none mb-[0.75rem]">
              EXPLORE
            </h3>
            <h2 className="text-[#262626] text-[2.5rem] md:text-[3.5rem] font-black font-londrina-solid leading-none w-1/2 lg:w-full">
              BEST TRIPS FOR YOU
            </h2>
            <Link
              href="/tours"
              className="lg:hidden absolute origin-bottom-right -rotate-90 right-0 bottom-full rounded-t-[0.5rem] bg-orange-normal h-[2.125rem] w-[7.9rem] lg:h-[3.4rem] lg:w-[9.4rem] flex justify-center items-center text-white text-[0.875rem] font-extrabold"
            >
              All tour
            </Link>
          </div>

          <div className="hidden lg:block relative w-[29.29231rem] h-[28.12494rem]">
            <Image
              width={500}
              height={500}
              alt="Hong Hao Travel"
              src={TRIPS[currentIndex]?.mapThumbnail || ""}
              className={`w-full h-full object-contain absolute inset-0 opacity-100 visible}`}
            />
          </div>
        </div>

        <div className="hidden lg:block absolute top-0 bottom-0 right-0 h-full pt-[5.63rem] pb-[4.94rem] ">
          <div className="sticky top-[10rem] max-h-screen !z-50">
            <div className="w-[2rem] h-[25rem] bg-transparent relative">
              <Link
                href="/tours"
                className="w-[10rem] inline-flex h-[3.5rem] px-[2rem] py-[1rem] gap-[0.5rem] items-center justify-center rounded-t-[0.5rem] absolute right-0 bg-orange-normal origin-bottom-right -rotate-90"
              >
                <span className="text-white uppercase text-[0.875rem] font-bold leading-[1.2]">
                  All tour
                </span>
                <Image
                  alt=""
                  width={50}
                  height={50}
                  src="/images/arrow/arrow-right.svg"
                  className="size-[0.875rem] object-contain rotate-90 "
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="w-full lg:w-[47.3125rem] flex lg:block overflow-x-auto lg:overflow-visible hidden_scrollbar px-[0.75rem] lg:px-0 gap-[0.75rem]"
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
