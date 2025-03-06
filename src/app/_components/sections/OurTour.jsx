"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";
import "./OurTour.css";

export default function OurTour() {
  return (
    <section
      id="our-tour"
      className="relative mt-[6.62rem] z-[1] overflow-hidden"
    >
      <div className="relative hidden md:flex md:max-w-[100rem] mx-auto flex-col items-center">
        <div className="mx-auto inline-flex flex-col items-center gap-[1.8125rem]">
          <h2 className="sub2-bold text-center !text-white opacity-90 md:!text-[1.75rem] lg:!text-[0.875rem]">
            EXPLORE YOUR JOURNEY WITH US
          </h2>
          <button>
            <Image
              width={100}
              height={100}
              alt="Hong Hao Travel"
              src="/images/arrow-down.png"
              className="size-[3.0625rem] object-center"
            />
          </button>
        </div>
      </div>
      <div className="relative w-screen overflow-hidden">
        <div className="hidden md:block absolute right-[-50rem] top-0 left-0 pt-[5.3125rem] pb-[7.6875rem]">
          <Image
            width={500}
            height={500}
            alt="Hong Hao Travel"
            src="/images/cloud.png"
            className="absolute top-[1rem] left-1/2 animate-cloud delay-300 opacity-30 z-[1]"
          />
          <Image
            width={500}
            height={500}
            alt="Hong Hao Travel"
            src="/images/motobike-tour.png"
            className="w-screen h-[44.375rem] object-contain z-0"
          />
          <Image
            alt="Hong Hao Travel"
            width={500}
            height={500}
            src="/images/cloud2.png"
            className="absolute top-[2rem] left-1/2 animate-cloud2"
          />
        </div>
        <div className="md:w-[38.8125rem] w-full px-[1rem] md:pt-[5rem] md:pl-[4rem] lg:pl-[6.75rem] pb-0 pt-0 md:pb-[5rem] lg:pb-[20.87rem] relative z-[2]">
          <h2 className="max-md:w-3/4 font-londrina-solid text-[2.5rem] md:text-[3.5rem] font-black leading-none text-white opacity-90 mb-[2rem] md:mb-[3.5rem]">
            HONG HAO MOTORBIKE TOUR
          </h2>
          <p className="text-white/60 lg:text-[1rem] md:text-[1.75rem] lg:mb-[2rem] md:leading-normal md:tracking-0 text-[0.875rem] md:tracking-[0.005rem] md:mb-[1rem] mb-[1.5rem] tracking-[0.00219rem] leading-normal">
            Experience the raw beauty of Hà Giang with our immersive travel
            adventures. From rugged mountain landscapes to vibrant ethnic
            cultures, Hà Giang offers a truly unique and authentic experience.
            Explore remote villages.
          </p>
          <ul className="flex flex-col gap-[0.75rem] mb-[2rem]">
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Tours accommodate a maximum of 10 guests
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Flexible cancellation policy
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Book now, pay later
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Fluent English-speaking guides
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Creating job opportunities for the Vietnamese community
              </span>
            </li>
          </ul>
          <div className="flex gap-[1rem]">
            <button className="cursor-pointer bg-orange-normal border-orange-normal py-[0.75rem] px-[1.5rem] h-[3rem] md:h-[5rem] lg:h-[3.5rem] group whitespace-nowrap text-sm font-bold ring-offset-white ease-linear duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 md:text-[1.5rem] flex uppercase button text-white justify-center items-center gap-2 border border-orange-hover bg-orange-hover rounded-lg border-solid md:w-fit w-[10.21875rem] lg:py-[1rem] lg:px-[2rem] lg:mr-[1rem]">
              Book now
            </button>
            <button className="cursor-pointer hover:bg-orange-normal hover:border-orange-normal py-[0.75rem] px-[1.5rem] h-[3rem] md:h-[5rem] lg:h-[3.5rem] group whitespace-nowrap text-sm font-bold ring-offset-white ease-linear duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 md:text-[1.5rem] flex uppercase button text-white justify-center items-center gap-2 border border-orange-hover bg-orange-hover rounded-lg border-solid md:w-fit w-[10.21875rem] lg:py-[1rem] lg:px-[2rem] lg:mr-[1rem]">
              All tour
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 1, visibility: "visible" }}
        whileInView={{ opacity: 0, visibility: "hidden" }}
        transition={{
          duration: 1,
          delay: 10,
        }}
        viewport={{ once: true }}
        className="hidden md:block w-[11rem] h-[50rem] absolute top-1/2 left-1/2 -translate-1/2"
      >
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{
            duration: 2,
          }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <Image
            alt=""
            width={200}
            height={1080}
            src="/images/motorbike-way.png"
            className="w-full h-[44.5625rem] object-cover"
          />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 animation_motorbike opacity-0">
            <Image
              alt=""
              width={50}
              height={50}
              src="/images/xemay.png"
              className="w-[8.12644rem] h-[6.9375rem] object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
