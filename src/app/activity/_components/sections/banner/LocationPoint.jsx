import Image from "next/image";
import React from "react";

export default function LocationPoint() {
  return (
    <>
      <div className="max-md:hidden relative">
        <Image
          width={50}
          height={50}
          alt="location point"
          src="/images/activity/album.png"
          className="w-[4.75rem] cursor-pointer h-[4.55rem]"
        />
      </div>
      <svg
        className="circle size-[2.25rem] mr-[0.95rem]"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle
          cx="10"
          cy="10"
          r="3.5"
          fill="#E64827"
          stroke="#E64827"
        ></circle>
        <circle cx="10" cy="10" r="9.5" stroke="#E64827" className=""></circle>
      </svg>
    </>
  );
}
