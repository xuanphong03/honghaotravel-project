'use client';
import { AppContext } from '@/app/context/AppProvider';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet-v2';
import Image from 'next/image';
import Link from 'next/link';
import { createContext, useContext, useState } from 'react';
import Navigation from '../navigation/Navigation';
import { cn } from '@/lib/utils';

export const HeaderContext = createContext();

function Header() {
  const { showHeader, isPositionTop } = useContext(AppContext);
  const [openSheet, setOpenSheet] = useState(false);

  const handleCloseSheet = () => {
    setOpenSheet(false);
  };

  return (
    <HeaderContext.Provider value={{ handleCloseSheet }}>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 !z-[500] transition-all duration-500',
          isPositionTop ? 'bg-transparent' : 'bg-white shadow',
          !showHeader ? '-translate-y-full' : 'translate-y-0',
        )}
      >
        <div className="mx-auto flex w-full items-center justify-between px-[1.25rem] py-[0.5rem] md:px-[5rem] md:py-[1.5rem]">
          <Link
            href="/"
            className="relative inline-block h-[3.1875rem] w-[7.1875rem] shrink-0 md:h-[5rem] md:w-[12rem] lg:h-[3.1875rem] lg:w-[9.625rem]"
          >
            <Image
              priority
              width={200}
              height={200}
              alt="Hong Hao Travel"
              src="/images/header/logo.svg"
              className={cn(
                'absolute top-0 left-0 h-full w-full object-contain transition-opacity duration-100 select-none',
                isPositionTop ? 'visible opacity-100' : 'invisible opacity-0',
              )}
            />
            <Image
              priority
              width={200}
              height={200}
              alt="Hong Hao Travel"
              src="/images/header/logo2.png"
              className={`absolute top-0 left-0 h-full w-full object-contain transition-opacity duration-100 ${
                !isPositionTop ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            />
          </Link>
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <button
                className={`${
                  !isPositionTop ? 'bg-orange-normal' : 'bg-transparent'
                } border-bg-elevation-white-50 md:border-orange-normal md:bg-orange-normal flex cursor-pointer items-center justify-end !rounded-[1.5rem] border border-solid py-[0.25rem] pr-[1rem] pl-[0.5rem] md:py-[0.5rem]`}
              >
                <Image
                  width={50}
                  height={50}
                  alt="Hong Hao Travel"
                  src="/images/header/menu.svg"
                  className="mr-[0.44rem] size-[2.0625rem] object-contain select-none md:size-[4rem] lg:size-[2.0625rem]"
                />
                <span className="3xl:text-[16px] text-[1rem] leading-[1.5] font-bold text-white uppercase select-none md:text-[1.75rem] lg:text-[1rem]">
                  Menu
                </span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="!z-[9999] m-0 !border-0 p-0 data-[state=closed]:duration-700 data-[state=open]:duration-700"
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
    </HeaderContext.Provider>
  );
}

export default Header;
