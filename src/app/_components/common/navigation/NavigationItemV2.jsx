"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-v2";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function NavigationItemV2({ title, links }) {
  return (
    <div className="py-[1rem] md:py-[0.5rem]">
      <Accordion type="single" collapsible className="w-full p-0">
        <AccordionItem value={title}>
          <AccordionTrigger className="flex items-center gap-[0.25rem] group p-0 relative data-[state=open]:text-orange-normal text-white [&[data-state=open]>div]:translate-x-[1.5rem] [&[data-state=open]>svg]:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              className={`fill-white group-data-[state=open]:fill-orange-normal group-hover:opacity-100 absolute top-1/2 left-0 -translate-y-1/2 w-[0.75rem] h-[0.875rem] transition-all duration-500 opacity-0`}
            >
              <path d="M12 7L8.17435e-07 14L4.82759 7L0 0L12 7Z" />
            </svg>

            <div
              className={`group-hover:translate-x-[1.5rem] cursor-pointer inline-flex gap-[0.5rem] items-center leading-[1.2] font-bold text-[1.5rem] md:text-[2rem] transition-all duration-500`}
            >
              {title}
            </div>
            <ChevronDown
              className={`transition-all duration-500 group-hover:opacity-0 group-data-[state=open]:translate-x-[1.5rem] group-data-[state=open]:text-orange-normal`}
            />
          </AccordionTrigger>
          <AccordionContent className="mt-[1rem]">
            <ul className="flex flex-col gap-[0.75rem]">
              {links.map(({ title, to }) => (
                <li
                  key={uuidv4()}
                  className="capitalize not-last:border-b not-last:border-solid not-last:border-white/20 w-fit"
                >
                  <Link
                    href={to}
                    className="inline-flex px-0 py-[0.5rem] text-[1.25rem] font-medium leading-[1.2] text-white/80 "
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
