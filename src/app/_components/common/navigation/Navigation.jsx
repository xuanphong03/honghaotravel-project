'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationList from './NavigationList';

// Import Swiper styles
import CardVertical from '@/components/common/card/CardVertical';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import './Navigation.scss';
import { SheetClose } from '@/components/ui/sheet-v2';
import { X } from 'lucide-react';

export default function Navigation() {
  return (
    <div
      id="navigation_container"
      className="bg-green-dark relative w-full md:h-[40.125rem]"
    >
      <div className="absolute inset-0">
        <Image
          alt="Hong Hao Travel"
          width={2000}
          height={1000}
          src="/images/navigation/bg-mountain.svg"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute right-0 left-0 z-[10] flex items-center justify-between py-[1.5rem] max-md:px-[1.25rem] md:px-[5rem]">
        <Link
          href="/"
          className="inline-block h-[5rem] w-[12rem] lg:h-[3.375rem] lg:w-[7.5625rem]"
        >
          <Image
            alt="Logo Hong Hao Travel"
            width={200}
            height={100}
            src="/images/navigation/logo.svg"
            className="size-full object-contain"
          />
        </Link>

        <SheetClose className="absolute top-[3.38rem] right-[1.25rem] inline-flex size-[2.75rem] cursor-pointer items-center justify-center rounded-full bg-white/20 opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden disabled:pointer-events-none md:top-[1.5rem] md:right-[2.25rem]">
          <X className="text-white" />
        </SheetClose>
      </div>
      <div className="relative flex h-full w-full bg-[linear-gradient(180deg,#122718_0%,rgba(18,39,24,0.00)_35%,rgba(18,39,24,0)_70%,#122718_100%)]">
        <div className="h-full flex-1 px-[1.25rem] pt-[1.5rem] pb-[3.81rem] max-md:mt-[8.31rem] md:pt-[9.31rem] md:pl-[5rem]">
          <nav className="flex h-[27rem] w-full flex-col md:w-[22.5rem] xl:w-[30rem]">
            <NavigationList />
          </nav>
        </div>
        <div className="relative hidden h-full shrink-0 md:block md:w-[51.875rem]">
          <div className="hidden size-full">
            <Image
              alt="Hong Hao Travel"
              width={600}
              height={400}
              src="/images/navigation/bg-mountain2.svg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="z-10 flex size-full flex-col justify-center">
            <div className="mb-[1.91rem] text-[1.5rem] font-bold text-white">
              Find your tour:
            </div>
            <div className="h-[28rem] w-full">
              <Swiper
                scrollbar={{
                  hide: false,
                }}
                slidesPerView="auto"
                modules={[Scrollbar]}
                spaceBetween="30"
                className="navigation_swiper !h-full !w-full"
              >
                {[...Array(5)].map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className="relative !h-[26rem] !w-[22rem] cursor-pointer overflow-hidden rounded-[1.5rem] max-md:!h-[15rem]"
                  >
                    <CardVertical />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
