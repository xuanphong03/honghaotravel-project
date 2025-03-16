'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

function ActivityCard() {
  return (
    <article className="h-[27.9375rem] w-[38.0625rem] rounded-[1.25rem] bg-red-500"></article>
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
