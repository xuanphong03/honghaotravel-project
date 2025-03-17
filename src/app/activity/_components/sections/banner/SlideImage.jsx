'use client';
import Image from 'next/image';
import InfinitySlide from '../../../../../../components/common/InfinitySlide/InfinitySlide';

export default function SlideImage() {
  return (
    <div className="h-[44.75rem] w-[86.875rem] rounded-[1.5rem] bg-white p-[1.5rem]">
      <div className="relative h-full w-full rounded-[0.75rem]">
        <Image
          alt="Hong Hao Travel"
          width={1200}
          height={600}
          src="/images/activity/slide1.png"
          className="size-full object-cover"
        />
        <div className="absolute top-0 right-[5.25rem] bottom-0">
          <InfinitySlide />
        </div>
      </div>
    </div>
  );
}
