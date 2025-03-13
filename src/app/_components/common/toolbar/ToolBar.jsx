import React from "react";
import { BookNowButton } from "./BookNowButton";
import WhatsAppButton from "./WhatsAppButton";
import GoogleButton from "./GoogleButton";
import ScrollToTopButton from "./ScrollToTopButton";

export default function ToolBar() {
  return (
    <div className="fixed !z-[500] right-[0.5rem] md:right-[1.5em] bottom-[4rem] md:bottom-[2.88rem] flex flex-col items-center gap-y-[0.5rem] md:gap-y-[1rem]">
      <BookNowButton />
      <WhatsAppButton />
      <GoogleButton />
      <ScrollToTopButton />
    </div>
  );
}
