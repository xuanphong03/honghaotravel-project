"use client";
import { AppContext } from "@/app/context/AppProvider";
import Link from "next/link";
import React, { useContext } from "react";

export default function NavigationItemV1({ title, to }) {
  const { setShowNavigation } = useContext(AppContext);
  const handleCloseNavigation = () => {
    setShowNavigation(false);
  };
  return (
    <>
      <div className="group relative w-fit py-[1rem] md:py-[0.5rem]">
        <Link
          href={to || "#"}
          onClick={handleCloseNavigation}
          className="inline-flex gap-[0.5rem] items-center text-white leading-[1.2] font-bold text-[1.5rem] md:text-[2rem] group-hover:translate-x-[1.125rem] translate-x-0 transition-all duration-500"
        >
          {title}
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[0.75rem] h-[0.875rem] invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-500"
        >
          <path d="M12 7L8.17435e-07 14L4.82759 7L0 0L12 7Z" fill="#FFF" />
        </svg>
      </div>
      <div className="w-full md:w-[22.5rem] xl:w-full h-[0.0625rem] bg-white/20"></div>
    </>
  );
}
