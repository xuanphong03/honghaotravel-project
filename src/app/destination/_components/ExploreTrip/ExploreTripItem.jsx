import Image from 'next/image';

export default function ExploreTripItem() {
  return (
    <article className="group flex !h-full flex-col gap-[1.25rem]">
      <div className="absolute inset-0 h-full w-full">
        <Image
          width={400}
          height={600}
          alt="Hong Hao Travel"
          src="/images/destination/trip-item1.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-[8.125rem] left-[1rem] transition-all duration-500 group-hover:invisible group-hover:bottom-[15rem] group-hover:opacity-0">
        <button className="inline-flex items-center gap-[0.5rem] rounded-[1.5rem] border border-solid border-white/50 bg-white/20 px-[0.75rem] py-[0.375rem] backdrop-blur-[2px]">
          <span className="inline-flex size-[1.5rem] items-center justify-center">
            <Image
              width={20}
              height={20}
              alt="Hong Hao Travel"
              src="/images/destination/clock-icon.png"
              className="size-full object-contain"
            />
          </span>
          <span className="text-[0.75rem] leading-[1.2] tracking-[0.0125rem] text-white/80 capitalize md:text-[1rem]">
            4 days 5 nights
          </span>
        </button>
      </div>
      <div className="absolute right-0 bottom-[5.3125rem] left-0 transition-all duration-500 group-hover:bottom-[calc(100%-3rem)]">
        <div className="flex items-center gap-[1.25rem] px-[1rem] text-white">
          <p className="flex items-center gap-[0.4125rem]">
            <span className="text-[1.25rem] leading-[1.2] font-medium md:text-[1.5rem]">
              $199
            </span>
            <span className="border-b-[0.0625rem] border-solid border-white py-[0.25rem] text-[0.75rem] leading-[1.5] tracking-[0.00219rem] md:text-[0.875rem]">
              Self-Driving
            </span>
          </p>
          <p className="flex items-center gap-[0.4125rem]">
            <span className="text-[1.25rem] leading-[1.2] font-medium md:text-[1.5rem]">
              $199
            </span>
            <span className="border-b-[0.0625rem] border-solid border-white py-[0.25rem] text-[0.75rem] leading-[1.5] tracking-[0.00219rem] md:text-[0.875rem]">
              Self-Driving
            </span>
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-[1.5rem] left-0 transition-all duration-300 group-hover:bottom-[13.5rem]">
        <h4 className="line-clamp-2 px-[1rem] text-[1rem] leading-[1.2] font-black text-white md:text-[1.25rem]">
          Ha Giang Loop tour: Itinerary in 4 Days 5 Nights
        </h4>
      </div>
      <div className="absolute right-0 bottom-0 left-0 translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
        <ul className="hidden px-[1rem] py-[1.5rem] md:block">
          <li className="mb-[0.5rem] flex items-center gap-[0.5rem]">
            <span className="mx-[0.25rem] w-[6rem] text-[0.875rem] font-bold text-white">
              Accomodation:
            </span>
            <span className="line-clamp-1 text-[0.875rem] tracking-[0.00875rem] text-white">
              Private room
            </span>
          </li>
          <li className="mb-[0.5rem] flex items-center gap-[0.5rem]">
            <span className="mx-[0.25rem] w-[6rem] text-[0.875rem] font-bold text-white">
              Accomodation:
            </span>
            <span className="line-clamp-1 text-[0.875rem] tracking-[0.00875rem] text-white">
              Private room
            </span>
          </li>
          <li className="mb-[0.5rem] flex items-center gap-[0.5rem]">
            <span className="mx-[0.25rem] w-[6rem] text-[0.875rem] font-bold text-white">
              Accomodation:
            </span>
            <span className="line-clamp-1 text-[0.875rem] tracking-[0.00875rem] text-white">
              Private room
            </span>
          </li>
          <li className="mb-[0.5rem] flex items-center gap-[0.5rem]">
            <span className="mx-[0.25rem] w-[6rem] text-[0.875rem] font-bold text-white">
              Accomodation:
            </span>
            <span className="line-clamp-1 text-[0.875rem] tracking-[0.00875rem] text-white">
              Private room
            </span>
          </li>
        </ul>
        <button className="bg-orange-normal inline-block w-full px-[2rem] py-[1rem] text-[0.875rem] font-bold text-white uppercase">
          Book now
        </button>
      </div>
    </article>
  );
}
