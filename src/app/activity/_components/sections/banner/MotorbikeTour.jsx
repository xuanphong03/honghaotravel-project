import React from "react";

export default function MotorbikeTour() {
  const MOTOBIKE_TOURS = [
    "Du Gia Village",
    "Mã Pì Lèng Pass",
    "Nho Quế River",
    "Du Gia Village",
    "Mã Pì Lèng Pass",
    "Nho Quế River",
    "Mã Pì Lèng Pass",
    "Nho Quế River",
  ];
  return (
    <div className="relative">
      <div className="relative">
        <h3 className="text-[6.25rem] font-bold uppercase leading-none text-gradient">
          Motobike tour
        </h3>
        <div className="absolute bottom-[0.8125rem] right-[5rem] rounded-[1.5rem] bg-white/15 backdrop-blur-[16px] py-[0.375rem] px-[0.75rem] flex items-center justify-center">
          <span className="text-white text-[1.125rem] font-bold leading-[1.2]">
            Experience
          </span>
        </div>
      </div>
      <ul className="activity_scrollbar_custom mt-[1.19rem]  max-h-[18rem] overflow-y-auto hidden_scrollbar flex flex-wrap gap-[0.5rem] uppercase text-[0.78906rem] font-medium tracking-[0.03125rem] text-white">
        {MOTOBIKE_TOURS.map((tour, index) => (
          <li
            key={index}
            className="hover:cursor-pointer hover:bg-orange-normal transition-colors duration-500 py-[0.8125rem] px-[2.125rem] flex items-center justify-center gap-[0.625rem] rounded-full border border-solid border-white/40"
          >
            {tour}
          </li>
        ))}
      </ul>
    </div>
  );
}
