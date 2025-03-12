import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SiteList() {
  return (
    <>
      {" "}
      <p className="text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2] text-center">
        View us on:
      </p>
      <ul className="flex items-center gap-x-[0.75rem]">
        <li>
          <Link
            href="#"
            className="inline-flex w-[2.5rem] h-[2.25rem] items-center justify-center rounded-full"
          >
            <Image
              alt=""
              width={50}
              height={50}
              src="/images/home/clients-say/site1.svg"
              className="w-full object-contain"
            />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-flex w-[2.5rem] h-[2.25rem] items-center justify-center rounded-full"
          >
            <Image
              alt=""
              width={50}
              height={50}
              src="/images/home/clients-say/site2.svg"
              className="w-full object-contain"
            />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-flex w-[2.5rem] h-[2.25rem] items-center justify-center rounded-full"
          >
            <Image
              alt=""
              width={50}
              height={50}
              src="/images/home/clients-say/site3.svg"
              className="w-full object-contain"
            />
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-flex w-[2.5rem] h-[2.25rem] items-center justify-center rounded-full"
          >
            <Image
              alt=""
              width={50}
              height={50}
              src="/images/home/clients-say/site4.svg"
              className="w-full object-contain"
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
