"use client";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function BestTrips(props) {
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

  useEffect(() => {
    if (!tripListRef.current) return;
    const listItems = tripListRef.current.querySelectorAll(".trip-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = entry.target.dataset.index;
            setCurrentIndex(+itemIndex);
          }
        });
      },
      {
        threshold: [1],
      }
    );

    listItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="best-trips" className="relative w-full bg-white z-10">
      <div className="max-w-[87.5rem] mx-auto pt-[5.63rem] pb-[4.94rem] flex justify-between flex-wrap lg:flex-nowrap">
        <div className="lg:max-h-screen lg:sticky lg:top-28">
          <div className="relative md:mb-[2.44rem] mb-[2rem] pl-[0.75rem] lg:pl-[4rem] w-screen lg:w-auto">
            <h3 className="text-[#262626]/40 text-[1.125rem] font-extrabold leading-none mb-[0.75rem]">
              EXPLORE
            </h3>
            <h2 className="text-[#262626] text-[2.5rem] md:text-[3.5rem] font-black font-londrina-solid leading-none w-1/2 lg:w-full">
              BEST TRIPS FOR YOU
            </h2>
            <p className="absolute origin-bottom-right -rotate-90  right-0 bottom-full rounded-t-[0.5rem] bg-orange-normal h-[2.125rem] w-[7.9rem] lg:h-[3.4rem] lg:w-[9.4rem] flex justify-center items-center text-white text-[0.875rem] font-extrabold">
              All tour
            </p>
          </div>
          <div className="hidden lg:block relative w-[29.29231rem] h-[28.12494rem]">
            {TRIPS.map((item, index) => {
              const isActive = currentIndex === index;
              return (
                <Image
                  width={500}
                  height={500}
                  key={item?.id}
                  alt={item?.name || ""}
                  src={item?.mapThumbnail || ""}
                  className={`w-full h-full object-contain absolute inset-0 ${
                    isActive ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                />
              );
            })}
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
              <article className="group relative mb-[2rem] h-[23.33956rem] w-[16.8755rem] md:h-[43.33956rem] md:w-[36rem] lg:w-[47.3125rem] lg:h-[34.375rem] shrink-0 rounded-[0.75rem] lg:rounded-[1.5rem] text-white bg-white pb-[1.5rem] overflow-hidden">
                <Image
                  width={800}
                  height={550}
                  alt={item?.name || ""}
                  src={item?.background || ""}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)",
                  }}
                ></div>
                <div className="absolute left-[1rem] bottom-[1rem] lg:left-[1.5rem] lg:bottom-[1.5rem] flex flex-col gap-[0.75rem] items-start">
                  <h4 className="group-hover:underline text-[1rem] md:text-[3rem] lg:text-[1.5rem] font-black leading-[120%]">
                    {item?.name}
                  </h4>
                  <ul className="hidden lg:block">
                    <li className="text-[1rem] font-bold leading-[1.5] flex items-center gap-[0.25rem]">
                      Accommodation:{" "}
                      <span className="text-[#f1f1f1] tracking-[0.0125rem] leading-[1.2] font-normal">
                        {item?.accommodation}
                      </span>
                    </li>
                    <li className="text-[1rem] font-bold leading-[1.5] flex items-center gap-[0.25rem]">
                      Motorbike:{" "}
                      <span className="text-[#f1f1f1] tracking-[0.0125rem] leading-[1.2] font-normal">
                        {item?.motorbike}
                      </span>
                    </li>
                    <li className="text-[1rem] font-bold leading-[1.5] flex items-center gap-[0.25rem]">
                      Tour guide:{" "}
                      <span className="text-[#f1f1f1] tracking-[0.0125rem] leading-[1.2] font-normal">
                        {item?.tourGuide}
                      </span>
                    </li>
                    <li className="text-[1rem] font-bold leading-[1.5] flex items-center gap-[0.25rem]">
                      Transport:{" "}
                      <span className="text-[#f1f1f1] tracking-[0.0125rem] leading-[1.2] font-normal">
                        {item?.transport}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="transition-transform duration-500 group-hover:-translate-y-full absolute left-[1rem] bottom-[3rem] lg:left-auto lg:right-[1.785rem] lg:bottom-[1.875rem] text-right flex items-center gap-[0.5rem] lg:block">
                  <p className="text-white/60 tracking-[0.0125rem] leading-[1.2] text-[1rem] font-bold">
                    From to
                  </p>
                  <p className="lg:text-[3rem] font-bold leading-[1.2] text-[1rem]">
                    ${item?.price || 0}
                  </p>
                </div>
                <button className="cursor-pointer font-extrabold border border-solid border-[#da4b19] text-[0.875rem] px-[2rem] py-[1rem] uppercase rounded-[0.5rem] absolute right-[1.5rem] bottom-[1.875rem] bg-orange-normal transition-transform duration-500 translate-x-[200%] group-hover:translate-0">
                  Detail
                </button>
                <button className="max-lg:left-[1rem] max-lg:bottom-[5rem] lg:top-[2rem] lg:right-[1.125rem] absolute px-[0.75rem] py-[0.25rem] md:py-[0.375rem] rounded-[1.5rem] border border-solid border-white/50 bg-white/20 backdrop-blur-[2px] inline-flex items-center gap-[0.5rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      fill="#E64827"
                    />
                    <path
                      d="M15.7106 15.9298C15.5806 15.9298 15.4506 15.8998 15.3306 15.8198L12.2306 13.9698C11.4606 13.5098 10.8906 12.4998 10.8906 11.6098V7.50977C10.8906 7.09977 11.2306 6.75977 11.6406 6.75977C12.0506 6.75977 12.3906 7.09977 12.3906 7.50977V11.6098C12.3906 11.9698 12.6906 12.4998 13.0006 12.6798L16.1006 14.5298C16.4606 14.7398 16.5706 15.1998 16.3606 15.5598C16.2106 15.7998 15.9606 15.9298 15.7106 15.9298Z"
                      fill="#FEEEE8"
                    />
                  </svg>
                  <span className="text-[1rem] leading-[1.2] tracking-[0.0125rem] text-white/80">
                    {item?.time}
                  </span>
                </button>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

BestTrips.propTypes = {};

export default BestTrips;
