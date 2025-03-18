import React from 'react';
import { BookNowButton } from './BookNowButton';
import WhatsAppButton from './WhatsAppButton';
import GoogleButton from './GoogleButton';
import ScrollToTopButton from './ScrollToTopButton';

export default function ToolBar() {
  return (
    <div className="fixed right-[0.5rem] bottom-[4rem] !z-[300] flex flex-col items-center gap-y-[0.5rem] md:right-[1.5em] md:bottom-[2.88rem] md:gap-y-[1rem]">
      <BookNowButton />
      <WhatsAppButton />
      <GoogleButton />
      <ScrollToTopButton />
    </div>
  );
}
