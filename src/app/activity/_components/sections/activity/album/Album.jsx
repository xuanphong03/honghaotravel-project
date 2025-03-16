'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import AlbumItem from './AlbumItem';
import './Album.scss';

export default function Album() {
  return (
    <div className="mx-auto w-[81.5rem]">
      <div className="grid h-full w-full grid-cols-2 gap-x-[3.81rem]">
        <div className="col-span-1 flex flex-col items-end gap-y-[4.69rem]">
          <div className="h-[17.625rem] w-[26.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <AlbumItem />
          </div>
          <div className="h-[23.8125rem] w-[35.6875rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <Image
              alt=""
              width={500}
              height={500}
              src="/images/activity/album2.png"
              className="size-full object-cover transition-all duration-500 hover:scale-120"
            />
          </div>
          <div className="h-[16.75rem] w-[25.125rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <Image
              alt=""
              width={500}
              height={500}
              src="/images/activity/album3.png"
              className="size-full object-cover transition-all duration-500 hover:scale-120"
            />
          </div>
          <div className="h-[23.8125rem] w-[35.6875rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <Image
              alt=""
              width={500}
              height={500}
              src="/images/activity/album4.png"
              className="size-full object-cover transition-all duration-500 hover:scale-120"
            />
          </div>
          <div className="h-[12.25rem] w-[18.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <Image
              alt=""
              width={500}
              height={500}
              src="/images/activity/album5.png"
              className="size-full object-cover transition-all duration-500 hover:scale-120"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-start gap-y-[4.63rem] pt-[4.69rem]">
          <div className="h-[17.625rem] w-[26.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <Image
              alt=""
              width={500}
              height={500}
              src="/images/activity/album6.png"
              className="size-full object-cover transition-all duration-500 hover:scale-120"
            />
          </div>
          <div className="h-[23.8125rem] w-[35.6875rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <Image
              alt=""
              width={500}
              height={500}
              src="/images/activity/album7.png"
              className="size-full object-cover transition-all duration-500 hover:scale-120"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[4.69rem]">
            <div className="col-span-1 h-[12.25rem] w-[18.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
              <Image
                alt=""
                width={500}
                height={500}
                src="/images/activity/album8.png"
                className="size-full object-cover transition-all duration-500 hover:scale-120"
              />
            </div>
            <div className="col-span-1 h-[12.25rem] w-[18.4375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
              <Image
                alt=""
                width={500}
                height={500}
                src="/images/activity/album9.png"
                className="size-full object-cover transition-all duration-500 hover:scale-120"
              />
            </div>
          </div>
          <div className="h-[23.8125rem] w-[35.6875rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
            <Image
              alt=""
              width={500}
              height={500}
              src="/images/activity/album10.png"
              className="size-full object-cover transition-all duration-500 hover:scale-120"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[4.69rem]">
            <div className="col-span-1 h-[12.25rem] w-[18.375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
              <Image
                alt=""
                width={500}
                height={500}
                src="/images/activity/album11.png"
                className="size-full object-cover transition-all duration-500 hover:scale-120"
              />
            </div>
            <div className="col-span-1 h-[12.25rem] w-[18.4375rem] shrink-0 overflow-hidden rounded-[0.75rem] hover:cursor-pointer">
              <Image
                alt=""
                width={500}
                height={500}
                src="/images/activity/album12.png"
                className="size-full object-cover transition-all duration-500 hover:scale-120"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] flex w-full justify-center">
        <Button className="hover:bg-orange-normal__hover hover:border-orange-normal__hover inline-flex h-[2.75rem] items-center justify-center rounded-[0.5rem] border border-solid border-[#c3c3c3] bg-transparent px-[1.25rem] py-[0.62rem] text-[0.875rem] leading-[1.2] font-bold text-[#6a6a6a] uppercase transition-all duration-300 hover:cursor-pointer hover:text-white">
          Learn more
        </Button>
      </div>
    </div>
  );
}
