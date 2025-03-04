import React from 'react'
import ContactFooter from './ContactFooter'
import FollowUs from './FollowUs'
import FooterAllTour from './FooterAllTour'
import FooterEnd from './FooterEnd'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='footer  px-5 sm:px-[5.96rem] h-fit items-start relative mx-auto overflow-x-hidden'>
      <div className="footer-bg-l absolute top-8 sm:-top-[1.375rem] -left-[3.25rem] sm:-left-7  bg-[url(/footer/footer-mountage-bw.png)] w-[58.1875rem] sm:w-[109.5rem] h-[20.89425rem] sm:h-[33.57038rem]   sm:bg-center sm:bg-cover bg-no-repeat shrink-0 opacity-30 -z-20"></div>
      <div className="footer-bg-r absolute top-20 -right-[2.8125rem] sm:top-0 sm:right-0  bg-[url(/footer/ft-mountain.png)] w-[44.1875rem] sm:w-[70%] h-[32.57038rem] shrink-0   bg-contain sm:bg-center sm:bg-cover bg-no-repeat -z-10"></div>
      <div className="footer-logo w-[7.8845rem] sm:w-[13.875rem] h-[2.772rem] sm:h-[4.875rem] relative mt-[2.62rem] sm:mt-[3.37rem] -translate-x-4">
        <Image src="/footer/logo-footer.png" fill alt="no-img" className="object-cover object-center"  />
      </div>
      <div className="footer-inf flex max-sm:flex-col-reverse  w-full mt-[2.62rem] sm:mt-[2.81rem] gap-[2.62rem] sm:gap-[7.5rem]">
        <ContactFooter />
        <FooterAllTour/>
      </div>
      <div className="footer-followus mt-[2.62rem] sm:mt-[2.81rem]">
        <FollowUs/>
      </div>
      <div className="footer-hr mt-[2.62rem] sm:mt-[4.31rem]">
        <FooterEnd/>
      </div>
    </div>
  )
}
