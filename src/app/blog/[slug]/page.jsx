import React from 'react';
import Blog from '../../../../components/section/blog';

export const metadata = {
  title: 'Blog - Hong Hao Travel',
  description: 'Hong Hao Travel',
  openGraph: {
    title: 'Blog - Hong Hao Travel',
    description: 'Hong Hao Travel',
    url: 'https://honghaotravel-project-beta.vercel.app/blog',
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
      <Blog />
    </div>
  );
}
