"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import AboutData from './AboutData'
import AboutL from './AboutL'
import AboutR from './AboutR'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import OverlayAnimate from '../../common/OverlayAnimate'

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BannerAbout() {
  const about = useRef(null)
  const abd1 = useRef(null)
  const abd2 = useRef(null)
  const aboutL= useRef(null)
  useGSAP(() => {
   

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: about.current,
        start: "50% center",
        end:"70% center",
        end:false,
       markers:false,
        once: true, // Hiệu ứng chỉ chạy một lần
      scrub: false, 
      },
    });
    tl.to(
      abd1.current,
      {
        opacity: 1,
        y:0,
        duration: 1,
      }
    ).to(abd2.current, {
      opacity: 1,
      y:0,
      duration: 1,
    })

    gsap.to(aboutL.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    })
  });
  return (
    <div ref={about} className='about relative h-[49.375rem] sm:h-[101rem] pt-[7.25rem] sm:pt-[9rem] overflow-hidden '>
      <OverlayAnimate/>
      <div className="w-full h-full absolute top-0 left-0 right-0" >
          <div className="absolute top-0 right-0 left-0 bottom-0 z-10" style={{background:"linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)"}}></div>
          <Image src="/images/about/about-banner.png" alt="" fill className='object-cover absolute top-0 left-0 right-0 bottom-0 z-0'></Image>
      </div>
      <div className="max-sm:hidden absolute w-[25.36806rem] h-[10.74656rem] shrink-0 top-[33.5rem] -right-[6.437rem] z-10">
        <Image src="/images/about/cloud.png" alt="" fill className='object-contain'/>
      </div>
      
      <div className='max-w-[87.5rem] h-full mx-4 sm:mx-auto relative  z-10'>
        
        <div className="w-[27.522rem] h-[55.90219rem] sm:w-[57rem] sm:h-[82rem] absolute -bottom-[16.5rem] sm:bottom-0 -left-[5.5rem] sm:left-[33%] ">
          <Image src="/images/about/map.png" fill alt='' className=' max-sm:hidden object-contain ' />
          <Image src="/images/about/map-mb.png" fill alt='' className='sm:hidden  object-contain ' />
          <div className=" absolute top-[35%] max-sm:-right-[9%] sm:top-[45%] sm:left-[35.5%] inline-flex flex-col items-center w-[8.75013rem]"><svg className="circle animate-ping max-sm:size-[1.8rem] max-sm:mt-[0.4rem] size-[2.25rem] mr-[0.95rem]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827"></circle><circle cx="10" cy="10" r="9.5" stroke="#E64827"></circle></svg></div>
          <div className=" absolute left-[10%] top-[64%] sm:top-[68%] sm:-left-[1.5%] inline-flex flex-col items-center w-[8.75013rem]"><svg className="circle animate-ping max-sm:size-[1.8rem] max-sm:mt-[0.4rem] size-[2.25rem] mr-[0.95rem]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827"></circle><circle cx="10" cy="10" r="9.5" stroke="#E64827"></circle></svg></div>
        </div>
      <AboutData ref={abd1} exp={{ text: "10.000", notice: "Visitors experience" } } cl1="items-end absolute top-[44.5%] right-[13%] sm:top-[47.5%] sm:right-0 flex flex-col items-end" cl2="text-end"  />
      <AboutData ref={abd2} exp={{ text: "13 year", notice: "Experience" }} cl1="sm:items-end absolute top-[76%] sm:top-[68%] left-0 flex flex-col items-start" cl2="sm:text-end" />
      
        <AboutL ref={aboutL} />
        <AboutR />
      </div>
      
      
   </div>
  )
}
