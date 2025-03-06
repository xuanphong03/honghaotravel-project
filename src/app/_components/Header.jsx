"use client";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "../context/AppProvider";

function Header() {
  const { showHeader, isPositionTop } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 !z-[99999] transition-all duration-500 ${
          isPositionTop ? "bg-transparent" : "bg-white shadow"
        } ${!showHeader && !showMenu ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="flex justify-between items-center max-w-[100rem] mx-auto px-[1.25rem] py-[0.5rem] md:px-[5rem] md:py-[1.5rem]">
          <Link
            href="#"
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
          <button
            onClick={handleToggleMenu}
            className="bg-transparent border-bg-elevation-white-50 border-solid border md:border-orange-normal md:bg-orange-normal text-[1rem] leading-[120%] cursor-pointer md:text-[1.25rem] font-bold flex justify-end items-center gap-[0.4375rem] uppercase text-white pl-[0.5rem] pr-[1rem] py-[0.25rem] md:py-[0.5rem] !rounded-[1.5rem]"
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
        </div>
      </header>
      {showMenu && (
        <div
          onClick={handleToggleMenu}
          className="fixed !z-[9999] inset-0"
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 right-0 flex w-full h-[40.125rem] mx-auto transition-transform duration-500 !z-[99999] ${
          showMenu ? "translate-y-0" : "-translate-y-[calc(100%+4px)]"
        }`}
      >
        <div className="flex items-center absolute left-0 top-[1.5rem] right-0 px-[5rem] justify-between z-[2]">
          <Link href="/">
            <Image
              alt="Hong Hao Travel"
              width={200}
              height={200}
              loading="lazy"
              className="w-[9.5625rem] h-[3.375rem] shrink-0"
              src="/images/logo-honghaohostel.png"
            />
          </Link>
          <button
            onClick={handleToggleMenu}
            className="cursor-pointer inline-flex items-center justify-center size-[3.25rem] rounded-full shrink-0 bg-gray-50/20"
          >
            <Image
              alt="Hong Hao Travel"
              width={100}
              height={100}
              src="/icons/close_menu.svg"
              className="size-[1.5rem] object-cover"
            />
          </button>
        </div>
        <div className="absolute top-0 left-0 size-full bg-[rgba(66,96,72,0.9)] z-[1]"></div>
        <div className="flex bg-[linear-gradient(180deg,#122718_0%,rgba(18,39,24,0)_35%,rgba(18,39,24,0)_70%,#122718_100%)] absolute top-0 left-0 size-full z-[1]">
          <div className="relative basis-full md:basis-1/2 flex flex-col gap-[4.44rem] px-[1.25rem] md:px-[5rem] mt-[8.31rem]">
            <nav className="shrink-0 overflow-y-auto h-[27rem] md:w-[22.5rem] hidden_scrollbar">
              <ul className="py-[1.25rem] md:py-[1.5rem] capitalize inline-flex flex-col items-start text-[1.725rem] md:text-[2rem] font-bold leading-[120%] text-white w-full">
                <li className="group flex items-center gap-[0.5rem] [&:not(:last-child)]:border-b-[0.0625rem] border-solid border-white/20 w-full">
                  <Link href="#" className="relative">
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        width={50}
                        height={50}
                        alt="Hong Hao Travel"
                        src="/icons/arrow_circle_right.svg"
                        className="h-[1rem] w-auto object-cover"
                      />
                    </span>
                    <span className="inline-block py-[0.5rem] group-hover:translate-x-[1rem] transition-transform duration-500">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="group flex items-center gap-[0.5rem] [&:not(:last-child)]:border-b-[0.0625rem] border-solid border-white/20 w-full">
                  <Link href="#" className="relative">
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        width={50}
                        height={50}
                        alt="Hong Hao Travel"
                        src="/icons/arrow_circle_right.svg"
                        className="h-[1rem] w-auto object-cover"
                      />
                    </span>
                    <span className="inline-block py-[0.5rem] group-hover:translate-x-[1rem] transition-transform duration-500">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="group flex items-center gap-[0.5rem] [&:not(:last-child)]:border-b-[0.0625rem] border-solid border-white/20 w-full">
                  <Link href="#" className="relative">
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        width={50}
                        height={50}
                        alt="Hong Hao Travel"
                        src="/icons/arrow_circle_right.svg"
                        className="h-[1rem] w-auto object-cover"
                      />
                    </span>
                    <span className="inline-block py-[0.5rem] group-hover:translate-x-[1rem] transition-transform duration-500">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="group flex items-center gap-[0.5rem] [&:not(:last-child)]:border-b-[0.0625rem] border-solid border-white/20 w-full">
                  <Link href="#" className="relative">
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        width={50}
                        height={50}
                        alt="Hong Hao Travel"
                        src="/icons/arrow_circle_right.svg"
                        className="h-[1rem] w-auto object-cover"
                      />
                    </span>
                    <span className="inline-block py-[0.5rem] group-hover:translate-x-[1rem] transition-transform duration-500">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="group flex items-center gap-[0.5rem] [&:not(:last-child)]:border-b-[0.0625rem] border-solid border-white/20 w-full">
                  <Link href="#" className="relative">
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        width={50}
                        height={50}
                        alt="Hong Hao Travel"
                        src="/icons/arrow_circle_right.svg"
                        className="h-[1rem] w-auto object-cover"
                      />
                    </span>
                    <span className="inline-block py-[0.5rem] group-hover:translate-x-[1rem] transition-transform duration-500">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="group flex items-center gap-[0.5rem] [&:not(:last-child)]:border-b-[0.0625rem] border-solid border-white/20 w-full">
                  <Link href="#" className="relative">
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        width={50}
                        height={50}
                        alt="Hong Hao Travel"
                        src="/icons/arrow_circle_right.svg"
                        className="h-[1rem] w-auto object-cover"
                      />
                    </span>
                    <span className="inline-block py-[0.5rem] group-hover:translate-x-[1rem] transition-transform duration-500">
                      Home
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden md:block w-[51.1875rem] h-full shrink-0 bg-[url('/images/bg-mountain-nav.png')] bg-cover bg-center bg-no-repeat bg-gray-300"></div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {};

export default Header;
