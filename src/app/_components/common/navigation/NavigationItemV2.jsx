"use client";
import { AppContext } from "@/app/context/AppProvider";
import Link from "next/link";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import AccordionV2 from "./AccordionV2";

export default function NavigationItemV2({ title, links }) {
  const { setShowNavigation } = useContext(AppContext);
  const handleCloseNavigation = () => {
    setShowNavigation(false);
  };
  return (
    <div className="py-[1rem] md:py-[0.5rem]">
      <AccordionV2 title={title} name="tours">
        <ul>
          {links.map(({ title, to }) => (
            <li key={uuidv4()} className="capitalize">
              <Link
                href={to}
                onClick={handleCloseNavigation}
                className="inline-flex px-0 py-[0.5rem] text-[1.25rem] font-medium leading-[1.2] text-white/80"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </AccordionV2>
    </div>
  );
}
