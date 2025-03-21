import React from 'react';
import TourDetail from '../../../../components/section/alltour/tour-detail';

export const metadata = {
  title: 'Tours Detail - Hong Hao Travel',
  description: 'Hong Hao Travel',
  openGraph: {
    title: 'Tours Detail - Hong Hao Travel',
    description: 'Hong Hao Travel',
    url: 'https://honghaotravel-project-beta.vercel.app/tours/1',
    images: [
      {
        url: '/images/about/logo-metadata.png',
        width: 32,
        height: 32,
        alt: 'Hong Hao Travel Logo',
      },
    ],
  },
  icons: {
    icon: '/images/about/logo-metadata.ico',
  },
};

export default function page() {
  return (
    <div>
      <TourDetail />
    </div>
  );
}
