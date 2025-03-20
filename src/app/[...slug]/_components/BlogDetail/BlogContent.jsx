import Image from 'next/image';
import React from 'react';
import CopyBtn from '../Button/CopyBtn';
import ShareBtn from '../Button/ShareBtn';

export default function BlogContent() {
  return (
    <div
      id="blog-content"
      className="relative w-full border-y border-solid border-gray-200 bg-white"
    >
      <div className="mx-auto flex w-full flex-col items-center border-x border-solid border-gray-200 md:w-[87.5rem]">
        <div className="w-full py-[1.875rem] max-md:px-[1rem] md:w-[65.6875rem] md:pt-[5rem] md:pb-[5.33rem]">
          <h2 className="font-londrina-solid mb-[1rem] w-full text-[1.5rem] leading-[1.2] font-black tracking-[0.00375rem] text-[#313131] opacity-80 md:mb-[3.56rem] md:text-[3.5rem]">
            Tanzania is known for it world-class opportunities for big game
            spotting and stunning National Parks. But what don't you know about
            this wonderful destination?
          </h2>
          <div className="flex w-full flex-col gap-[1.5rem] md:gap-[2.5rem]">
            <div className="flex flex-col gap-[0.625rem] bg-[#f1f1f1] p-[1.25rem] md:gap-[1.875rem]">
              <h4 className="blog-sub-title !text-[#828282] max-md:text-[1.125rem]">
                Table of Contents
              </h4>
              <ul className="flex list-disc flex-col justify-center px-[1.25rem] text-[0.875rem] leading-[1.2] font-bold tracking-[0.00875rem] md:w-[63.34188rem]">
                <li>
                  Tanzanians are passionate about soccer (football). The sport
                  is a significant part of the culture, and you'll often find
                </li>
                <li>
                  Locals engaging in lively discussions about their favorite
                  teams and players.
                </li>
                <li>
                  Traditional dance forms like "Ngoma" are also cherished, often
                  performed during cultural festivals
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[0.5rem] md:gap-[1.88rem]">
              <h4 className="blog-sub-title">Music and Dance</h4>
              <p className="blog-desc">
                Tanzanian music, particularly Bongo Flava, is popular not only
                within the country but also across East Africa. Traditional
                dance forms like "Ngoma" are also cherished, often performed
                during cultural festivals and celebrations. Tanzanian music,
                particularly Bongo Flava, is popular not only within the country
                but also across East Africa. Traditional dance forms like
                "Ngoma" are also cherished, often performed during cultural
                festivals and celebrations.Tanzanian music, particularly Bongo
                Flava, is popular not only within the country but also across
                East Africa. Traditional dance forms like "Ngoma" are also
                cherished, often performed during cultural festivals and
                celebrations.Tanzanian music, particularly Bongo Flava, is
                popular not only within the country but also across East Africa.
                Traditional dance forms like "Ngoma" are also cherished, often
                performed during cultural festivals and celebrations.Tanzanian
                music, particularly Bongo Flava, is popular not only within the
                country but also across East Africa. Traditional dance forms
                like "Ngoma" are also cherished, often performed during cultural
                festivals and celebrations.
              </p>
            </div>
            <div className="w-full">
              <Image
                width={1000}
                height={1000}
                alt="Hong Hao Travel"
                src="/images/blog-detail/blog-image-1.png"
                className="w-full rounded-[0.75rem] object-cover"
              />
            </div>
            <div className="flex flex-col gap-[0.5rem] md:gap-[1.88rem]">
              <h4 className="blog-sub-title">Beach Bonfires</h4>
              <p className="blog-desc">
                Along the coastline of Tanzania, particularly in places like
                Zanzibar and Dar es Salaam, beach bonfires are a common sight.
                Locals and tourists gather around the fire to enjoy grilled
                seafood, music, and dancing under the stars.
              </p>
            </div>
            <div className="flex flex-col gap-[0.5rem] md:gap-[1.88rem]">
              <h4 className="blog-sub-title">Beach Bonfires</h4>
              <p className="blog-desc">
                Along the coastline of Tanzania, particularly in places like
                Zanzibar and Dar es Salaam, beach bonfires are a common sight.
                Locals and tourists gather around the fire to enjoy grilled
                seafood, music, and dancing under the stars.
              </p>
            </div>
            <div className="w-full">
              <Image
                width={1000}
                height={1000}
                alt="Hong Hao Travel"
                src="/images/blog-detail/blog-image-2.png"
                className="w-full rounded-[0.75rem] object-cover"
              />
            </div>
            <div className="flex flex-col gap-[0.5rem] md:gap-[1.88rem]">
              <h4 className="blog-sub-title">Beach Bonfires</h4>
              <p className="blog-desc">
                Tanzanian music, particularly Bongo Flava, is popular not only
                within the country but also across East Africa. Traditional
                dance forms like "Ngoma" are also cherished, often performed
                during cultural festivals and celebrations. Tanzanian music,
                particularly Bongo Flava, is popular not only within the country
                but also across East Africa. Traditional dance forms like
                "Ngoma" are also cherished, often performed during cultural
                festivals and celebrations.Tanzanian music, particularly Bongo
                Flava, is popular not only within the country but also across
                East Africa. Traditional dance forms like "Ngoma" are also
                cherished, often performed during cultural festivals and
                celebrations.Tanzanian music, particularly Bongo Flava, is
                popular not only within the country but also across East Africa.
                Traditional dance forms like "Ngoma" are also cherished, often
                performed during cultural festivals and celebrations.Tanzanian
                music, particularly Bongo Flava, is popular not only within the
                country but also across East Africa. Traditional dance forms
                like "Ngoma" are also cherished, often performed during cultural
                festivals and celebrations.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center border-t border-solid border-gray-200">
          <div className="mx-auto flex h-[3.75rem] w-full items-center gap-[1rem] max-md:pl-[1rem] md:h-[5rem] md:w-[65.6875rem]">
            <div className="shrink-0 text-[1rem] leading-[1.2] tracking-[0.0125rem] text-[#030922]">
              Chia sẻ:
            </div>
            <ul className="flex shrink-0 items-center gap-[0.25rem]">
              <li className="flex size-[2rem] shrink-0 items-center justify-center">
                <ShareBtn />
              </li>
              <li className="flex size-[2rem] shrink-0 items-center justify-center">
                <CopyBtn />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
