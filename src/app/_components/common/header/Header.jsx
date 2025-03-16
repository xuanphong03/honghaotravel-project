"use client";
import { AppContext } from "@/app/context/AppProvider";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet-v2";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Navigation from "../navigation/Navigation";

function Header() {
  const { showHeader, isPositionTop, showNavigation, setShowNavigation } =
    useContext(AppContext);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 !z-[500] transition-all duration-500 ${
          isPositionTop ? "bg-transparent" : "bg-white shadow"
        } ${!showHeader ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="flex justify-between items-center w-full mx-auto px-[1.25rem] py-[0.5rem] md:px-[5rem] md:py-[1.5rem]">
          <Link
            href="/"
            className="relative inline-block w-[7.1875rem] h-[3.1875rem] md:w-[12rem] md:h-[5rem] lg:w-[9.625rem]  lg:h-[3.1875rem] shrink-0"
          >
            <Image
              alt="Hong Hao Travel"
              width={200}
              height={200}
              priority
              src="/images/logo-honghaohostel.png"
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-100 ${
                isPositionTop ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            />
            <Image
              alt="Hong Hao Travel"
              width={200}
              height={200}
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
                } border-bg-elevation-white-50 border-solid border md:border-orange-normal md:bg-orange-normal cursor-pointer flex justify-end items-center pl-[0.5rem] pr-[1rem] py-[0.25rem] md:py-[0.5rem] !rounded-[1.5rem]`}
              >
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src="/images/header/menu.svg"
                  className="size-[2.0625rem] object-contain mr-[0.44rem] md:size-[4rem] lg:size-[2.0625rem]"
                />
                <span className="leading-[1.5] text-[1rem] md:text-[1.75rem] lg:text-[1rem] 3xl:text-[16px] font-bold uppercase text-white">
                  Menu
                </span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="p-0 m-0 !z-[9999] !border-0 data-[state=closed]:duration-700 data-[state=open]:duration-700"
            >
              <SheetHeader className="hidden">
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <Navigation />
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

export default Header;
