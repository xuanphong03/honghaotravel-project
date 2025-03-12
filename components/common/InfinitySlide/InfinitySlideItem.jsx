import Image from "next/image";
import React from "react";

export default function InfinitySlideItem() {
  return (
    <div className="!w-full !h-full">
      <Image
        width={500}
        height={500}
        alt="Hong Hao Travel"
        className="w-full h-full object-cover"
        src="/images/destination/banner-slide-1.jpeg"
      />
    </div>
  );
}
