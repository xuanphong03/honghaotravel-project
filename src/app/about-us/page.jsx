import React from 'react';
import About from '../../../components/section/about';

export const metadata = {
  title: 'About Us - Hong Hao Travel',
  description: 'Hong Hao Travel',
  openGraph: {
    title: 'About Us - Hong Hao Travel',
    description: 'Hong Hao Travel',
    url: 'https://honghaotravel-project-beta.vercel.app/about-us',
    images: [
      {
        url: '/images/about/logo-metadata.png',
        width: 32,
        height: 32,
        alt: 'Hong Hao Travel Logo',
      },
    ],
  },
  twitter: {
    card: 'Hong Hao Travel Logo',
    title: 'About Us - Hong Hao Travel',
    description: 'Hong Hao Travel',
    images: ['/images/about/logo-metadata.png'],
  },
  icons: {
    icon: '/images/about/logo-metadata.ico',
  },
};

export default function Page() {
  return (
    <div>
      <About />
    </div>
  );
}
