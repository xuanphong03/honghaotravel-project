import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="fixed inset-0 !z-[9999] bg-white">
      <div className="relative size-full">
        <div className="absolute top-[4.06rem] right-0 left-0 z-[1]">
          <div className="mx-auto w-full md:w-[87.5rem]">
            <h1
              className="font-londrina-solid text-center text-[25rem] leading-none font-black"
              style={{
                background:
                  ' linear-gradient(180deg, #407B5A 12.25%, rgba(64, 123, 90, 0.49) 56.05%, rgba(64, 123, 90, 0.00) 85.25%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              404
            </h1>
            <div className="-mt-10 flex flex-col items-center">
              <h2 className="font-londrina-solid mb-[1rem] text-center text-[2.5rem] leading-none font-black">
                Oops! The page doesn't exist.
              </h2>
              <p className="mx-auto w-[23.4375rem] text-center text-[1rem] leading-[1.2] font-medium tracking-[0.0125rem] text-[#262626]">
                We apologize for the inconvenience, but the page you are trying
                to reach is unavailable
              </p>
              <div className="mt-[1.25rem] flex h-[3.0625rem] w-[22.5rem] items-center gap-[1.25rem]">
                <Button className="hover:bg-orange-normal__hover inline-flex h-full cursor-pointer items-center justify-center rounded-[0.5rem] border border-solid border-[#a9a9a9] bg-white px-[2rem] py-[1rem] text-[0.875rem] leading-[1.2] font-bold text-[#6a6a6a] uppercase hover:text-white">
                  Contact support
                </Button>
                <Button className="hover:bg-orange-normal__hover text-orange-normal__hover border-orange-normal__hover inline-flex h-full cursor-pointer items-center justify-center rounded-[0.5rem] border border-solid bg-white px-[2rem] py-[1rem] text-[0.875rem] leading-[1.2] font-bold uppercase hover:text-white">
                  BACK HOMEPAGE
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Image
          alt="Hong Hao Travel"
          width={1980}
          height={1080}
          className="absolute right-0 bottom-0 left-0"
          src="/images/sub-layout/bg-mountain.png"
        />
      </div>
    </div>
  );
}
