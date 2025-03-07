import Image from "next/image";
import React from "react";
import DiscoverItem from "./DiscoveryItem";
import "./Discovery.css";
import Link from "next/link";

export default function Discovery() {
  return (
    <section id="discovery" className="relative pt-[4rem]">
      <div className="max-w-[100rem] mx-auto flex pl-[5rem] gap-x-[2.88rem]">
        <div className="absolute bottom-[13.5rem] left-[18.5rem] size-[12.39444rem]">
          <Image
            alt="Hong Hao Travel"
            width={500}
            height={500}
            src="/images/destination/moon-bg.png"
            className="size-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <Image
            alt="Hong Hao Travel"
            width={1600}
            height={900}
            src="/images/destination/discover-bg.png"
            className="min:w-[125.0625rem] w-screen h-[24.8125rem] object-cover"
          />
        </div>
        <div className="sticky max-h-screen top-28">
          <h3 className="text-[#103223]/40 font-bold text-[1.125rem] leading-none mb-[0.75rem]">
            Discovery Ha Giang
          </h3>
          <h2 className="mb-[1.5rem] font-londrina-solid text-[3.5rem] font-black leading-none text-[#206545] uppercase">
            Destinations
          </h2>
          <p className="w-[27.5625rem] text-[1rem] leading-[1.5] tracking-[0.005rem] text-[#454545]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam,
            beckons adventurers with its breathtaking scenery and vibrant
            cultural tapestry. From the towering peaks of the Dong Van Karst
            Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers
            an unforgettable journey through some of Vietnam's most
            awe-inspiring landscapes.
          </p>
        </div>
        <div className="relative inline-flex flex-col items-center gap-[2rem]">
          <div className="flex flex-col items-center gap-[2rem]">
            <div className="grid grid-cols-2 w-[59.5625rem] gap-[1.25rem]">
              {[...Array(6)].map((_, index) => (
                <Link
                  href="#"
                  key={index}
                  className="inline-block col-span-1 w-[29.375rem] h-[31.25rem] rounded-[1.25rem] overflow-hidden"
                >
                  <DiscoverItem />
                </Link>
              ))}
            </div>
            <button className="bg-orange-normal">Pagination</button>
          </div>
        </div>
      </div>
    </section>
  );
}
