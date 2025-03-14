import Image from "next/image";
import React from "react";

export default function ContactInfoList() {
  const CONTACT_INFO = [
    {
      title: "Phone",
      imageUrl: "/images/contact-us/phone.svg",
      info: "+84 941556338",
    },
    {
      title: "Email",
      imageUrl: "/images/contact-us/email.svg",
      info: "honghaotravel@gmail.com",
    },
    {
      title: "Address",
      imageUrl: "/images/contact-us/address.svg",
      info: "No. 10 Pham Hong Thai, Minh Khai Ward, City. Ha Giang.",
    },
    {
      title: "Website",
      imageUrl: "/images/contact-us/website.svg",
      info: "Honghaotravel.com",
    },
  ];
  return (
    <ul className="flex flex-col gap-[1rem]">
      {CONTACT_INFO.map((item, index) => (
        <li key={index} className="inline-flex items-start gap-[0.5rem]">
          <Image
            width={16}
            height={16}
            alt={item.title}
            src={item.imageUrl}
            className="size-[1rem] object-contain"
          />
          <span className="text-[#6a6a6a] text-[1rem] leading-[1.2] tracking-[0.0125rem]">
            {item.info}
          </span>
        </li>
      ))}
    </ul>
  );
}
