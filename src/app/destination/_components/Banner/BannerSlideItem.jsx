import Image from "next/image";
import React from "react";

export default function BannerSlideItem() {
  return (
    <div className="!w-full !h-full">
      <Image
        alt=""
        width={500}
        height={500}
        className="w-full h-full object-cover"
        src="/images/destination/banner-slide-1.jpeg"
      />
    </div>
  );
}
