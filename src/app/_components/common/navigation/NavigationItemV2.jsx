import React from "react";
import AccordionV2 from "./AccordionV2";
import Link from "next/link";

export default function NavigationItemV2({ title, links }) {
  return (
    <div className="py-[0.5rem]">
      <AccordionV2 title="Tours" name="tours">
        <ul>
          {links.map(({ title, to }, index) => (
            <li className="capitalize">
              <Link
                href={to}
                key={index}
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
