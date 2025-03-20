import Image from 'next/image';
import React from 'react';
import OverlayAnimate from '../../common/OverlayAnimate';

export default function BlogPostItem({ data }) {
  return (
    <article className="group relative col-span-2 flex h-[15.3125rem] flex-col justify-between overflow-hidden rounded-xl p-5 hover:cursor-pointer md:col-span-1 md:h-[25.8rem] md:p-8">
      <Image
        src={data.url}
        alt=""
        fill
        className="absolute top-0 right-0 bottom-0 left-0 z-0 object-cover duration-500 ease-in-out group-hover:scale-110"
      ></Image>
      <div
        className="overlay absolute top-0 right-0 bottom-0 left-0 z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #000 100%)',
        }}
      ></div>
      <div className="post-btn sub2-regular !text-greyscaletext-80-main relative z-10 !w-fit uppercase max-md:!px-[1.19rem] max-md:!py-[0.62rem] max-md:!text-[0.75rem]">
        {data.tag}
      </div>
      <div className="relative z-10 flex flex-col gap-[0.31rem]">
        <span className="h6-bold !text-greyscaletext-5">{data.title}</span>
        <span className="caption-regular">{data.date}</span>
      </div>
    </article>
  );
}
