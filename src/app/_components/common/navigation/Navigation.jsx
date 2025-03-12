import Image from "next/image";
import Link from "next/link";
import React from "react";
import AccordionV2 from "./AccordionV2";
import NavigationList from "./NavigationList";

export default function Navigation() {
  return (
    <div className="bg-green-dark w-full relative">
      <div className="absolute inset-0">
        <Image
          alt="Hong Hao Travel"
          width={2000}
          height={1000}
          src="/images/navigation/bg-mountain.svg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute left-[5rem] top-[1.5rem] z-[2]">
        <Image
          alt="Logo Hong Hao Travel"
          width={200}
          height={100}
          src="/images/navigation/logo-honghaotravel.svg"
          className="w-auto h-[3.375rem] object-cover"
        />
      </div>
      <div className="relative flex h-full w-full bg-[linear-gradient(180deg,#122718_0%,rgba(18,39,24,0.00)_35%,rgba(18,39,24,0)_70%,#122718_100%)] ">
        <div className="pl-[5rem] pt-[9.31rem] pb-[3.81rem] flex-1 h-full">
          <nav className="w-[22.5rem] h-[27rem] flex flex-col">
            <NavigationList />
          </nav>
        </div>
        <div className="w-[51.875rem] h-full shrink-0">
          <Image
            alt="Hong Hao Travel"
            width={600}
            height={400}
            src="/images/navigation/bg-mountain2.svg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
