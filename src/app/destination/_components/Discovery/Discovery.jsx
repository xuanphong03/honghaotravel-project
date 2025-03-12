import Image from "next/image";
import React from "react";
import TourList from "./TourList";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";

export default function Discovery() {
  const tours = [
    {
      id: 1,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
    {
      id: 2,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
    {
      id: 3,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
    {
      id: 4,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
    {
      id: 5,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
    {
      id: 6,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
    {
      id: 7,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
    {
      id: 8,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
    {
      id: 9,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
    {
      id: 10,
      tag: "Best destination",
      title: "Dong Van",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim eum, beatae autem veniam consequuntur sit ab ea ipsam dolorem voluptas! Aut nesciunt quibusdam qui accusantium id quidem esse fuga.",
    },
  ];
  const _page = 1;
  const _limit = 9;

  return (
    <section
      id="discovery"
      className="relative pt-[4rem] lg:min-h-[90vh] md:min-h-[88vh] max-md:min-h-[130vh] md:mb-[2rem] "
    >
      <div className="w-full md:w-[87.5rem] xl:w-[93rem] mx-auto flex max-md:px-[1rem] gap-x-[2.88rem] max-md:flex-wrap">
        <div className="absolute size-[6.75181rem] top-[1.5rem] left-[1.5rem] md:hidden">
          <Image
            alt="Hong Hao Travel"
            width={100}
            height={100}
            src="/images/destination/moon-bg.png"
            className="size-full object-contain"
          />
        </div>
        <div className="absolute bottom-[13.5rem] left-[18.5rem] size-[12.39444rem] hidden md:block">
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
        <div className="md:sticky md:max-h-screen md:top-28">
          <h3 className="text-[#103223]/40 font-bold text-[0.875rem] md:text-[1.125rem] leading-none mb-[0.75rem]">
            Discovery Ha Giang
          </h3>
          <h2 className="mb-[1.5rem] font-londrina-solid leading-[1.5] text-[2.5rem] md:text-[3.5rem] font-black md:leading-none text-[#206545] uppercase">
            Destinations
          </h2>
          <p className="w-full md:w-[27.5625rem] text-[0.875rem] md:text-[1rem] leading-[1.5] tracking-[0.005rem] text-[#454545]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam,
            beckons adventurers with its breathtaking scenery and vibrant
            cultural tapestry. From the towering peaks of the Dong Van Karst
            Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers
            an unforgettable journey through some of Vietnam's most
            awe-inspiring landscapes.
          </p>
        </div>
        <div className="relative inline-flex flex-col items-center gap-[2rem] max-md:mt-[1.7rem]">
          <div className="flex flex-col items-center gap-[2rem]">
            <TourList tours={tours} />
            <div className="py-[2rem]">
              <PaginationWithLinks
                page={_page}
                pageSize={_limit}
                totalCount={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
