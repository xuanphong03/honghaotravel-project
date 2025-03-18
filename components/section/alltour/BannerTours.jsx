import Image from 'next/image';
import React from 'react';
import OverlayAnimate from '../../common/OverlayAnimate';

export default function BannerTours() {
  return (
    <div className="alltour relative flex items-center py-[7.25rem] ps-[1.25rem] md:min-h-[43.75rem] md:py-[6.19rem] md:ps-[8.13rem] md:pe-16">
      <OverlayAnimate />
      <div className="bg absolute top-0 right-0 bottom-0 left-0 z-0">
        <Image
          src={'/images/alltour/banner.jpeg'}
          alt="banner"
          fill
          className="-z-20 object-cover"
        />
      </div>
      <div
        className="overlay absolute top-0 right-0 bottom-0 left-0 z-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)',
        }}
      ></div>
      <div className="title relative h-[7.42925rem] w-[19.1605rem] md:h-[19.6875rem] md:w-[52.1105rem]">
        <Image
          src={'/images/alltour/title.png'}
          alt="title"
          fill
          className="object-contain"
        />
      </div>
      <div className="map absolute right-0 h-[24.75rem] w-[24.4375rem] max-md:hidden md:right-16">
        <Image
          src={'/images/alltour/map.png'}
          alt="map"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
