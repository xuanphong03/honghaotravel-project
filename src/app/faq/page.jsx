import React from 'react';
import FAQ from '../../../components/section/faq';

export const metadata = {
  title: 'FAQ - Hong Hao Travel',
  description: 'Hong Hao Travel',
  openGraph: {
    title: 'FAQ - Hong Hao Travel',
    description: 'Hong Hao Travel',
    url: 'https://honghaotravel-project-beta.vercel.app/faq',
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
    title: 'FAQ - Hong Hao Travel',
    description: 'Hong Hao Travel',
    images: ['/images/about/logo-metadata.png'],
  },
  icons: {
    icon: '/images/about/logo-metadata.ico',
  },
};

export default function page() {
  return (
    <div className="faq">
      <FAQ />
    </div>
  );
}
