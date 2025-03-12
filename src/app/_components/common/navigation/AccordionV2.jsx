import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export default function AccordionV2({ title, name, children }) {
  const [openItem, setOpenItem] = useState(null);
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      onValueChange={(value) => setOpenItem(value)}
    >
      <AccordionItem value={name}>
        <AccordionTrigger className="p-0 hover:no-underline w-full [&>svg]:hidden">
          <div className="group relative w-full">
            <div
              className={`cursor-pointer inline-flex gap-[0.5rem] items-center leading-[1.2] font-bold text-[2rem] transition-all duration-500 ${
                openItem === name
                  ? "translate-x-[1.125rem] text-orange-normal"
                  : "group-hover:translate-x-[1.125rem] translate-x-0 text-white"
              }`}
            >
              {title}
              <ChevronDown
                className={`transition-transform duration-500 ${
                  openItem === name ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              className={`absolute top-1/2 left-0 -translate-y-1/2 w-[0.75rem] h-[0.875rem] transition-all duration-500 ${
                openItem
                  ? "fill-orange-normal"
                  : "invisible opacity-0 group-hover:opacity-100 group-hover:visible fill-white"
              }`}
            >
              <path d="M12 7L8.17435e-07 14L4.82759 7L0 0L12 7Z" />
            </svg>
          </div>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
