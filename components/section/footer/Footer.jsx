import React from 'react'
import ContactFooter from '../../common/ContactFooter'
import FollowUs from './FollowUs'
import FooterAllTour from './FooterAllTour'
import FooterEnd from './FooterEnd'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='footer  px-5 md:px-[5.96rem] h-fit items-start relative mx-auto overflow-x-hidden  z-50 bg-white'>
      <div className="footer-bg-l absolute top-8 md:-top-[1.375rem] -left-[3.25rem] md:-left-7  bg-[url(/images/footer/footer-mbg.png)] w-[58.1875rem] md:w-[109.5rem] h-[20.89425rem] md:h-[33.57038rem]   md:bg-center md:bg-cover bg-no-repeat shrink-0 opacity-30 -z-10"></div>
      <div className="footer-bg-r absolute top-20 -right-[2.8125rem] md:top-0 md:right-0  bg-[url(/images/footer/ft-mountain.png)] w-[44.1875rem] md:w-[70%] h-[32.57038rem] shrink-0   bg-contain md:bg-center md:bg-cover bg-no-repeat -z-10"></div>
      <div className="max-w-[87.5rem] mx-auto">
        <div className="footer-logo w-[7.8845rem] md:w-[13.875rem] h-[2.772rem] md:h-[4.875rem] relative mt-[2.62rem] md:mt-[3.37rem] -translate-x-4 z-10">
        <Image src="/images/footer/logo-footer.png" fill alt="no-img" className="object-cover object-center"  />
      </div>
      <div className="footer-inf flex max-md:flex-col-reverse  w-full mt-[2.62rem] md:mt-[2.81rem] gap-[2.62rem] md:gap-[7.5rem]">
        <ContactFooter />
        <FooterAllTour/>
      </div>
      <div className="footer-followus mt-[2.62rem] md:mt-[2.81rem]">
        <FollowUs/>
      </div>
      <div className="footer-hr mt-[2.62rem] md:mt-[4.31rem]">
        <FooterEnd/>
      </div>
      </div>
    </div>
  )
}
