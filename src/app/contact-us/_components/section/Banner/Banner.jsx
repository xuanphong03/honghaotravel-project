import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section id="banner" className="w-full h-screen bg-red-500">
      <div className="absolute left-1/2 top-1/2 -translate-1/2 w-[51.52831rem] h-[17.125rem]">
        <Image
          alt=""
          width={2000}
          height={1000}
          className="w-full h-full object-cover"
          src="/images/contact-us/banner-text.png"
        />
      </div>
    </section>
  );
}
