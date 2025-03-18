import React from 'react';
import Image from 'next/image';
import AboutUs from './AboutUs';
import OurTour from './OurTour';
import './Introduction.css';
import Welcome from './Welcome';

export default function Introduction({ children }) {
  return (
    <div id="introduction" className="relative !z-50 w-full bg-[#122718]">
      <div className="absolute inset-0 z-[1]">
        <Image
          alt="Hong Hao Travel"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          src="/images/home/intro/bg-mountain-overlay.png"
        />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
