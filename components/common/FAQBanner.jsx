import Image from 'next/image'
import React from 'react'
import OverlayAnimate from './OverlayAnimate'

export default function FAQBanner({urlTitle}) {
  return (
      <div className='alltour py-[7.25rem] md:py-[6.19rem] ps-[1.25rem] md:ps-[8.13rem] flex md:min-h-screen md:pe-16 relative justify-center items-center'>
          <OverlayAnimate/>
          <div className="bg  absolute top-0 left-0 right-0 bottom-0 z-0">
              <Image src={"/images/alltour/banner.jpeg"} alt="banner" fill className='object-cover -z-20'/>
          </div>
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 z-0" style={{background:"linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)"}}>
              
          </div>
          <div className="title w-[19.1605rem] h-[7.42925rem] md:w-[52.1105rem] md:h-[19.6875rem] relative">
              <Image src={urlTitle} alt="title" fill  className='object-contain'/>
          </div>
          
    </div>
  )
}
