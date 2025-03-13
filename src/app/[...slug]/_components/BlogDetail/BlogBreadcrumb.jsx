import Link from "next/link";
import React from "react";

export default function BlogBreadcrumb() {
  return (
    <div className="">
      <div className="flex items-center w-full md:w-[87.5rem] mx-auto gap-[0.5rem]">
        <Link href="/" className="inline-flex items-center gap-[0.25rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 17"
            fill="none"
            className="size-[1rem]"
          >
            <path
              d="M13.3346 11.9233V8.22466C13.3346 7.86844 13.3343 7.69022 13.291 7.52446C13.2526 7.37757 13.1896 7.23856 13.1043 7.11294C13.0081 6.97119 12.8743 6.85364 12.6063 6.61906L9.40625 3.81906C8.90851 3.38354 8.65964 3.16589 8.37956 3.08306C8.13276 3.01007 7.86971 3.01007 7.62292 3.08306C7.34304 3.16582 7.09453 3.38327 6.59754 3.81813L3.39648 6.61906C3.1284 6.85364 2.99466 6.97119 2.89844 7.11294C2.81316 7.23856 2.74967 7.37757 2.71128 7.52446C2.66797 7.69023 2.66797 7.86843 2.66797 8.22466V11.9233C2.66797 12.5445 2.66797 12.8551 2.76946 13.1001C2.90479 13.4268 3.16418 13.6867 3.49089 13.822C3.73591 13.9235 4.04654 13.9235 4.6678 13.9235C5.28905 13.9235 5.60002 13.9235 5.84505 13.822C6.17176 13.6867 6.43108 13.4268 6.56641 13.1001C6.6679 12.8551 6.66797 12.5445 6.66797 11.9232V11.2566C6.66797 10.5202 7.26492 9.92323 8.0013 9.92323C8.73768 9.92323 9.33464 10.5202 9.33464 11.2566V11.9232C9.33464 12.5445 9.33464 12.8551 9.43613 13.1001C9.57145 13.4268 9.83085 13.6867 10.1576 13.822C10.4026 13.9235 10.7132 13.9235 11.3345 13.9235C11.9557 13.9235 12.2667 13.9235 12.5117 13.822C12.8384 13.6867 13.0977 13.4268 13.2331 13.1001C13.3346 12.8551 13.3346 12.5445 13.3346 11.9233Z"
              fill="#C5C5C5"
            />
          </svg>
          <span className="text-[0.875rem] tracking-[0.00219rem] text-[#C5C5C5]">
            Home
          </span>
        </Link>
        <div className="w-[0.1875rem] h-[0.375rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="9"
            viewBox="0 0 5 9"
            fill="none"
          >
            <path
              d="M1 1.58984L4 4.58984L1 7.58984"
              stroke="#C5C5C5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Link href="/" className="inline-flex items-center gap-[0.25rem]">
          <span className="text-[0.875rem] tracking-[0.00219rem] text-[#C5C5C5]">
            Blog
          </span>
        </Link>
        <div className="w-[0.1875rem] h-[0.375rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="9"
            viewBox="0 0 5 9"
            fill="none"
          >
            <path
              d="M1 1.58984L4 4.58984L1 7.58984"
              stroke="#E64827"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Link href="#" className="inline-flex items-center gap-[0.25rem]">
          <span className="text-[0.875rem] tracking-[0.00219rem] line-clamp-1">
            Tanzania is known for it world-class opportunities for big game
            spotting and stunning National Parks. But what don't you know about
            this wonderful destination?
          </span>
        </Link>
      </div>
    </div>
  );
}
