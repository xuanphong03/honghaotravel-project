import React from 'react';
import Tours from '../../../components/section/alltour';

export const metadata = {
  title: 'Tours - Hong Hao Travel',
  description: 'Hong Hao Travel',
  openGraph: {
    title: 'Tours - Hong Hao Travel',
    description: 'Hong Hao Travel',
    url: 'https://honghaotravel-project-beta.vercel.app/tours',
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
      <Tours />
    </div>
  );
}
