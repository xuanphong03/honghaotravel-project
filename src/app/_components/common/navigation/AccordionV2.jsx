import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

export default function AccordionV2({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" overflow-hidden">
      <div onClick={toggleAccordion} className="group relative w-full">
        <div
          className={`cursor-pointer inline-flex gap-[0.5rem] items-center leading-[1.2] font-bold text-[1.5rem] md:text-[2rem] transition-all duration-500 ${
            isOpen
              ? "translate-x-[1.125rem] text-orange-normal"
              : "group-hover:translate-x-[1.125rem] translate-x-0 text-white"
          }`}
        >
          {title}
          <ChevronDown
            className={`transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
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
            isOpen
              ? "fill-orange-normal"
              : "invisible opacity-0 group-hover:opacity-100 group-hover:visible fill-white"
          }`}
        >
          <path d="M12 7L8.17435e-07 14L4.82759 7L0 0L12 7Z" />
        </svg>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="px-4 py-3">{children}</div>
      </div>
    </div>
  );
}
