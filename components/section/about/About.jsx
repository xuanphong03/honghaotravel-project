import Image from 'next/image'
import React from 'react'
import AboutData from './AboutData'
import AboutL from './AboutL'
import AboutR from './AboutR'


export default function About() {
  return (
    <div className='about relative py-[8.69rem] overflow-x-hidden'>
      <div className="w-[101.5625rem] h-full absolute top-0 left-0 right-0" >
          <div className="absolute top-0 right-0 left-0 bottom-0 z-10" style={{background:"linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)"}}></div>
          <Image src="/images/about/about-banner.png" alt="" fill className='object-cover absolute top-0 left-0 right-0 bottom-0 z-0'></Image>
      </div>
      <div className="absolute top-[15.5rem] right-[8.55rem]  h-[85.19rem] w-[56.58rem] z-10">
        <Image src="/images/about/map.png" alt='' fill className='object-cover'/>
      </div>
      <div className="absolute w-[25.36806rem] h-[10.74656rem] shrink-0 top-[33.5rem] -right-[6.437rem] z-10">
        <Image src="/images/about/cloud.png" alt="" fill className='object-contain'/>
      </div>
      <AboutL />
      <AboutData />
      <AboutData/>
      <AboutR />
      
   </div>
  )
}
