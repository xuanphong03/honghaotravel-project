import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SiteList() {
  return (
    <div className="flex flex-col items-center gap-2 pt-[2.75rem]">
      <p className="text-center text-[0.875rem] leading-[1.2] font-bold tracking-[0.00875rem]">
        View us on:
      </p>
      <ul className="flex items-center gap-x-[0.75rem]">
        <li>
          <Link
            href="#"
            className="inline-flex h-[2.25rem] w-[2.5rem] items-center justify-center rounded-full"
          >
            <Image
              alt="Hong Hao Travel"
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
            className="inline-flex h-[2.25rem] w-[2.5rem] items-center justify-center rounded-full"
          >
            <Image
              alt="Hong Hao Travel"
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
            className="inline-flex h-[2.25rem] w-[2.5rem] items-center justify-center rounded-full"
          >
            <Image
              alt="Hong Hao Travel"
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
            className="inline-flex h-[2.25rem] w-[2.5rem] items-center justify-center rounded-full"
          >
            <Image
              alt="Hong Hao Travel"
              width={50}
              height={50}
              src="/images/home/clients-say/site4.svg"
              className="w-full object-contain"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
