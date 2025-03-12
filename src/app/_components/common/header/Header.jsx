"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AppContext } from "@/app/context/AppProvider";
import Navigation from "../navigation/Navigation";

function Header() {
  const { showHeader, isPositionTop } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 !z-[100] transition-all duration-500 ${
          isPositionTop ? "bg-transparent" : "bg-white shadow"
        } ${!showHeader && !showMenu ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="flex justify-between items-center max-w-[100rem] mx-auto px-[1.25rem] py-[0.5rem] md:px-[5rem] md:py-[1.5rem]">
          <Link
            href="/"
            className="relative inline-block w-[7.1875rem] h-[3.1875rem] md:w-[9.625rem] md:h-[3.1875rem] shrink-0"
          >
            <Image
              alt="Hong Hao Travel"
              width={200}
              height={200}
              loading="lazy"
              src="/images/logo-honghaohostel.png"
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-100 ${
                isPositionTop ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            />
            <Image
              alt="Hong Hao Travel"
              width={200}
              height={200}
              loading="lazy"
              src="/images/logo-honghaohostel2.png"
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-100 ${
                !isPositionTop ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`${
                  !isPositionTop ? "bg-orange-normal" : "bg-transparent"
                } border-bg-elevation-white-50 border-solid border md:border-orange-normal md:bg-orange-normal text-[1rem] leading-[120%] cursor-pointer md:text-[1.25rem] font-bold flex justify-end items-center gap-[0.4375rem] uppercase text-white pl-[0.5rem] pr-[1rem] py-[0.25rem] md:py-[0.5rem] !rounded-[1.5rem]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  className="size-[2.0625rem]"
                >
                  <path
                    opacity="0.9"
                    d="M23.375 10.7812H9.625C9.06125 10.7812 8.59375 10.4412 8.59375 10.0312C8.59375 9.62125 9.06125 9.28125 9.625 9.28125H23.375C23.9388 9.28125 24.4062 9.62125 24.4062 10.0312C24.4062 10.4412 23.9388 10.7812 23.375 10.7812Z"
                    fill="white"
                  />
                  <path
                    opacity="0.9"
                    d="M23.375 16.9688H9.625C9.06125 16.9688 8.59375 16.6287 8.59375 16.2188C8.59375 15.8088 9.06125 15.4688 9.625 15.4688H23.375C23.9388 15.4688 24.4062 15.8088 24.4062 16.2188C24.4062 16.6287 23.9388 16.9688 23.375 16.9688Z"
                    fill="white"
                  />
                  <path
                    opacity="0.9"
                    d="M23.375 23.1562H9.625C9.06125 23.1562 8.59375 22.8162 8.59375 22.4062C8.59375 21.9963 9.06125 21.6562 9.625 21.6562H23.375C23.9388 21.6562 24.4062 21.9963 24.4062 22.4062C24.4062 22.8162 23.9388 23.1562 23.375 23.1562Z"
                    fill="white"
                  />
                </svg>
                <span className="leading-none">Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="p-0 m-0 !z-[200]">
              <SheetTitle className="hidden"></SheetTitle>
              <Navigation />
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

export default Header;
