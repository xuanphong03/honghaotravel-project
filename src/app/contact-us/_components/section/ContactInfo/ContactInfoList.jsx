import Image from "next/image";
import React from "react";

export default function ContactInfoList() {
  return (
    <ul className="flex flex-col gap-[1rem]">
      <li className="inline-flex items-center gap-[0.5rem]">
        <Image
          alt="Hong Hao Travel"
          width={16}
          height={16}
          src="/images/contact-us/icon-phone.png"
          className="size-[1rem] object-contain"
        />
        <span className="text-[#6a6a6a] text-[1rem] leading-[1.2] tracking-[0.0125rem]">
          +84 941556338
        </span>
      </li>
      <li className="inline-flex items-center gap-[0.5rem]">
        <Image
          alt="Hong Hao Travel"
          width={16}
          height={16}
          src="/images/contact-us/icon-phone.png"
          className="size-[1rem] object-contain"
        />
        <span className="text-[#6a6a6a] text-[1rem] leading-[1.2] tracking-[0.0125rem]">
          +84 941556338
        </span>
      </li>
      <li className="inline-flex items-center gap-[0.5rem]">
        <Image
          alt="Hong Hao Travel"
          width={16}
          height={16}
          src="/images/contact-us/icon-phone.png"
          className="size-[1rem] object-contain"
        />
        <span className="text-[#6a6a6a] text-[1rem] leading-[1.2] tracking-[0.0125rem]">
          +84 941556338
        </span>
      </li>
      <li className="inline-flex items-center gap-[0.5rem]">
        <Image
          width={16}
          height={16}
          alt="Hong Hao Travel"
          src="/images/contact-us/icon-phone.png"
          className="size-[1rem] object-contain"
        />
        <span className="text-[#6a6a6a] text-[1rem] leading-[1.2] tracking-[0.0125rem]">
          +84 941556338
        </span>
      </li>
    </ul>
  );
}
