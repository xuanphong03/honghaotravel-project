'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

function ActivityCard() {
  return (
    <article className="h-[27.9375rem] w-[38.0625rem] overflow-hidden rounded-[1.25rem]">
      <Image
        width={600}
        height={400}
        alt="Hong Hao Travel"
        src="/images/activity/activity1.png"
        className="h-full w-full object-cover"
      />
    </article>
  );
}

export default function Activity() {
  return (
    <Carousel>
      <CarouselContent className="bg-white py-[2.5rem] pl-[2.5rem]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-auto not-first:pl-[0.5rem]"
          >
            <ActivityCard />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
