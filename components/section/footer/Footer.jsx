import React from 'react';
import ContactFooter from '../../common/ContactFooter';
import FollowUs from './FollowUs';
import FooterAllTour from './FooterAllTour';
import FooterEnd from './FooterEnd';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="footer relative z-50 mx-auto h-fit items-start overflow-x-hidden bg-white px-3 md:px-[5.96rem]">
      <div className="footer-bg-l absolute top-8 -left-[3.25rem] -z-10 h-[20.89425rem] w-[58.1875rem] shrink-0 bg-[url(/images/footer/footer-mbg.png)] bg-no-repeat opacity-30 md:top-0 md:-left-7 md:h-[33.57038rem] md:w-[109.5rem] md:bg-cover md:bg-center"></div>
      <div className="footer-bg-r absolute top-20 -right-[2.8125rem] -z-10 h-[32.57038rem] w-[44.1875rem] shrink-0 bg-[url(/images/footer/ft-mountain.png)] bg-contain bg-no-repeat md:top-0 md:right-0 md:w-[70%] md:bg-cover md:bg-center"></div>
      <div className="mx-auto max-w-[87.5rem]">
        <div className="footer-logo relative z-10 mt-[2.62rem] h-[2.772rem] w-[7.8845rem] -translate-x-4 md:mt-[3.37rem] md:h-[4.875rem] md:w-[13.875rem]">
          <Image
            src="/images/footer/logo-footer.png"
            fill
            alt="no-img"
            className="object-cover object-center"
          />
        </div>
        <div className="footer-inf mt-[2.62rem] flex w-full gap-[2.62rem] max-md:flex-col-reverse md:mt-[2.81rem] md:gap-[7.5rem]">
          <ContactFooter />
          <FooterAllTour />
        </div>
        <div className="footer-followus mt-[2.62rem] md:mt-[2.81rem]">
          <FollowUs />
        </div>
        <div className="footer-hr mt-[2.62rem] md:mt-[4.31rem]">
          <FooterEnd />
        </div>
      </div>
    </div>
  );
}
