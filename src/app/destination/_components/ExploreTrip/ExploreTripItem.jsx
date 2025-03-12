import Image from "next/image";
import React from "react";

export default function ExploreTripItem() {
  return (
    <article className="group !h-full flex flex-col gap-[1.25rem]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          width={400}
          height={600}
          alt="Hong Hao Travel"
          src="/images/destination/trip-item1.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute left-[1rem] bottom-[8.125rem] group-hover:bottom-[15rem] group-hover:invisible group-hover:opacity-0 transition-all duration-500">
        <button className="inline-flex items-center px-[0.75rem] py-[0.375rem] gap-[0.5rem] rounded-[1.5rem] border border-solid border-white/50 bg-white/20 backdrop-blur-[2px]">
          <span className="inline-flex items-center justify-center size-[1.5rem]">
            <Image
              width={20}
              height={20}
              alt="Hong Hao Travel"
              src="/images/destination/clock-icon.png"
              className="size-full object-contain"
            />
          </span>
          <span className="capitalize text-white/80 tracking-[0.0125rem] leading-[1.2] text-[0.75rem] md:text-[1rem]">
            4 days 5 nights
          </span>
        </button>
      </div>
      <div className="group-hover:bottom-[calc(100%-3rem)] transition-all duration-500 absolute bottom-[5.3125rem] left-0 right-0">
        <div className="flex items-center gap-[1.25rem] text-white px-[1rem]">
          <p className="flex items-center gap-[0.4125rem]">
            <span className="text-[1.25rem] md:text-[1.5rem] leading-[1.2] font-medium">
              $199
            </span>
            <span className="text-[0.75rem] md:text-[0.875rem] leading-[1.5] tracking-[0.00219rem] py-[0.25rem] border-b-[0.0625rem] border-solid border-white">
              Self-Driving
            </span>
          </p>
          <p className="flex items-center gap-[0.4125rem]">
            <span className="text-[1.25rem] md:text-[1.5rem] leading-[1.2] font-medium">
              $199
            </span>
            <span className="text-[0.75rem] md:text-[0.875rem] leading-[1.5] tracking-[0.00219rem] py-[0.25rem] border-b-[0.0625rem] border-solid border-white">
              Self-Driving
            </span>
          </p>
        </div>
      </div>
      <div className="group-hover:bottom-[13.5rem] transition-all duration-300 absolute left-0 bottom-[1.5rem] right-0">
        <h4 className="text-[1rem] md:text-[1.25rem] font-black leading-[1.2] text-white line-clamp-2 px-[1rem]">
          Ha Giang Loop tour: Itinerary in 4 Days 5 Nights
        </h4>
      </div>
      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <ul className="px-[1rem] py-[1.5rem] hidden md:block">
          <li className="flex items-center mb-[0.5rem] gap-[0.5rem]">
            <span className="text-[0.875rem] font-bold text-white mx-[0.25rem] w-[6rem]">
              Accomodation:
            </span>
            <span className="text-[0.875rem] tracking-[0.00875rem] text-white line-clamp-1">
              Private room
            </span>
          </li>
          <li className="flex items-center mb-[0.5rem] gap-[0.5rem]">
            <span className="text-[0.875rem] font-bold text-white mx-[0.25rem] w-[6rem]">
              Accomodation:
            </span>
            <span className="text-[0.875rem] tracking-[0.00875rem] text-white line-clamp-1">
              Private room
            </span>
          </li>
          <li className="flex items-center mb-[0.5rem] gap-[0.5rem]">
            <span className="text-[0.875rem] font-bold text-white mx-[0.25rem] w-[6rem]">
              Accomodation:
            </span>
            <span className="text-[0.875rem] tracking-[0.00875rem] text-white line-clamp-1">
              Private room
            </span>
          </li>
          <li className="flex items-center mb-[0.5rem] gap-[0.5rem]">
            <span className="text-[0.875rem] font-bold text-white mx-[0.25rem] w-[6rem]">
              Accomodation:
            </span>
            <span className="text-[0.875rem] tracking-[0.00875rem] text-white line-clamp-1">
              Private room
            </span>
          </li>
        </ul>
        <button className="text-white bg-orange-normal inline-block w-full px-[2rem] py-[1rem] font-bold uppercase text-[0.875rem]">
          Book now
        </button>
      </div>
    </article>
  );
}
