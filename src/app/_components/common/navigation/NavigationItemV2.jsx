'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion-v2';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function NavigationItemV2({ title, links }) {
  return (
    <div className="py-[1rem] md:py-[0.5rem]">
      <Accordion type="single" collapsible className="w-full p-0">
        <AccordionItem value={title}>
          <AccordionTrigger className="group data-[state=open]:text-orange-normal relative flex items-center gap-[0.25rem] p-0 text-white [&[data-state=open]>div]:translate-x-[1.5rem] [&[data-state=open]>svg]:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              className={`group-data-[state=open]:fill-orange-normal absolute top-1/2 left-0 h-[0.875rem] w-[0.75rem] -translate-y-1/2 fill-white opacity-0 transition-all duration-500 group-hover:opacity-100`}
            >
              <path d="M12 7L8.17435e-07 14L4.82759 7L0 0L12 7Z" />
            </svg>

            <div
              className={`inline-flex cursor-pointer items-center gap-[0.5rem] text-[1.5rem] leading-[1.2] font-bold transition-all duration-500 group-hover:translate-x-[1.5rem] md:text-[2rem]`}
            >
              {title}
            </div>
            <ChevronDown
              className={`group-data-[state=open]:text-orange-normal transition-all duration-500 group-hover:opacity-0 group-data-[state=open]:translate-x-[1.5rem]`}
            />
          </AccordionTrigger>
          <AccordionContent className="mt-[1rem]">
            <ul className="flex flex-col gap-[0.75rem]">
              {links.map(({ title, to }) => (
                <li
                  key={uuidv4()}
                  className="w-fit capitalize not-last:border-b not-last:border-solid not-last:border-white/20"
                >
                  <Link
                    href={to || '#'}
                    className="inline-flex px-0 py-[0.5rem] text-[1.25rem] leading-[1.2] font-medium text-white/80"
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
