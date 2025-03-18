import Image from 'next/image';
import React from 'react';

export default function BlogThumbnail() {
  return (
    <div
      id="blog-thumbnail"
      className="h-[14.93325rem] w-full overflow-hidden md:h-[63.625rem]"
    >
      <div
        className="h-full w-full"
        style={{
          boxShadow:
            '90px 128px 44px 0px rgba(66, 72, 66, 0.00), 57px 82px 40px 0px rgba(66, 72, 66, 0.01), 32px 46px 34px 0px rgba(66, 72, 66, 0.05), 14px 20px 25px 0px rgba(66, 72, 66, 0.09), 4px 5px 14px 0px rgba(66, 72, 66, 0.10)',
        }}
      >
        <Image
          priority
          width={1920}
          height={1080}
          alt="Hong Hao Travel"
          src="/images/blog-detail/blog-thumbnail.png"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
