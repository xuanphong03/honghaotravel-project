'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';
import AlbumItem from './AlbumItem';

// Import Swiper styles
import './Album.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Album() {
  return (
    <div className="mx-auto w-[81.5rem]">
      <div className="grid h-full w-full grid-cols-2 gap-x-[3.81rem] max-md:hidden">
        <div className="col-span-1 flex flex-col items-end gap-y-[4.69rem]">
          <div className="h-[17.625rem] w-[26.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <AlbumItem thumbnailURL="/images/activity/album1.png" />
          </div>
          <div className="h-[23.8125rem] w-[35.6875rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <AlbumItem thumbnailURL="/images/activity/album2.png" />
          </div>
          <div className="h-[16.75rem] w-[25.125rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <AlbumItem thumbnailURL="/images/activity/album3.png" />
          </div>
          <div className="h-[23.8125rem] w-[35.6875rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <AlbumItem thumbnailURL="/images/activity/album4.png" />
          </div>
          <div className="h-[12.25rem] w-[18.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <AlbumItem thumbnailURL="/images/activity/album5.png" />
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-start gap-y-[4.63rem] pt-[4.69rem]">
          <div className="h-[17.625rem] w-[26.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <AlbumItem thumbnailURL="/images/activity/album6.png" />
          </div>
          <div className="h-[23.8125rem] w-[35.6875rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <AlbumItem thumbnailURL="/images/activity/album7.png" />
          </div>
          <div className="grid grid-cols-2 gap-x-[4.69rem]">
            <div className="col-span-1 h-[12.25rem] w-[18.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
              <AlbumItem thumbnailURL="/images/activity/album8.png" />
            </div>
            <div className="col-span-1 h-[12.25rem] w-[18.4375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
              <AlbumItem thumbnailURL="/images/activity/album9.png" />
            </div>
          </div>
          <div className="h-[23.8125rem] w-[35.6875rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <AlbumItem thumbnailURL="/images/activity/album10.png" />
          </div>
          <div className="grid grid-cols-2 gap-x-[4.69rem]">
            <div className="col-span-1 h-[12.25rem] w-[18.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
              <AlbumItem thumbnailURL="/images/activity/album11.png" />
            </div>
            <div className="col-span-1 h-[12.25rem] w-[18.4375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
              <AlbumItem thumbnailURL="/images/activity/album12.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          centeredSlides={true}
          modules={[]}
          className="!w-full"
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index} className="!h-[14.4375rem] !w-[19.25rem]">
              <article className="bg-grey-green-light size-full rounded-[1.25rem] bg-[url('/images/activity/activity1.png')] bg-cover bg-no-repeat"></article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-[1.75rem] flex w-full justify-center md:mt-[4rem]">
        <Link href="#" className="inline-block">
          <Button className="hover:bg-orange-normal__hover hover:border-orange-normal__hover inline-flex h-[2.75rem] items-center justify-center rounded-[0.5rem] border border-solid border-[#c3c3c3] bg-transparent px-[1.25rem] py-[0.62rem] text-[0.875rem] leading-[1.2] font-bold text-[#6a6a6a] uppercase transition-all duration-300 hover:cursor-pointer hover:text-white">
            Learn more
          </Button>
        </Link>
      </div>
    </div>
  );
}
