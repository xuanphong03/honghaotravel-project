import Image from 'next/image'
import React from 'react'
import OverlayAnimate from '../../common/OverlayAnimate'

export default function BannerTours() {
  return (
      <div className='alltour py-[7.25rem] sm:py-[6.19rem] ps-[1.25rem] sm:ps-[8.13rem] flex sm:min-h-[43.75rem] items-center sm:pe-16 relative'>
          <OverlayAnimate/>
          <div className="bg  absolute top-0 left-0 right-0 bottom-0 ">
              <Image src={"/images/alltour/banner.jpeg"} alt="banner" fill className='object-cover -z-20'/>
          </div>
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 -z-10" style={{background:"linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)"}}>
              
          </div>
          <div className="title w-[19.1605rem] h-[7.42925rem] sm:w-[52.1105rem] sm:h-[19.6875rem] relative">
              <Image src={"/images/alltour/title.png"} alt="title" fill  className='object-contain'/>
          </div>
          <div className="map  w-[24.4375rem] h-[24.75rem] absolute right-0 max-sm:hidden">
              <Image src={"/images/alltour/map.png"} alt="map" fill  className='object-cover'/>
          </div>
    </div>
  )
}
