'use client';
import Link from 'next/link';

export default function NavigationItemV1({ title, to }) {
  return (
    <>
      <div className="group relative w-fit py-[1rem] md:py-[0.5rem]">
        <Link
          href={to || '#'}
          className="inline-flex translate-x-0 items-center gap-[0.5rem] text-[1.5rem] leading-[1.2] font-bold text-white transition-all duration-500 group-hover:translate-x-[1.125rem] md:text-[2rem]"
        >
          {title}
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          className="invisible absolute top-1/2 left-0 h-[0.875rem] w-[0.75rem] -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100"
        >
          <path d="M12 7L8.17435e-07 14L4.82759 7L0 0L12 7Z" fill="#FFF" />
        </svg>
      </div>
      <div className="h-[0.0625rem] w-full bg-white/20 md:w-[22.5rem] xl:w-full"></div>
    </>
  );
}
