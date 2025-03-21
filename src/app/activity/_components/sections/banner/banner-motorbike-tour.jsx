import { cn } from '@/lib/utils';
import styles from './banner.module.css';
export default function MotorbikeTour() {
  const MOTOBIKE_TOURS = [
    'Du Gia Village',
    'Mã Pì Lèng Pass',
    'Nho Quế River',
    'Du Gia Village',
    'Mã Pì Lèng Pass',
    'Nho Quế River',
    'Mã Pì Lèng Pass',
    'Nho Quế River',
  ];
  return (
    <div className="relative">
      <div className="relative">
        <h3
          className={cn(
            styles.textLinearGradient,
            'text-[2.94194rem] leading-none font-bold uppercase md:text-[6.25rem]',
          )}
        >
          Motobike tour
        </h3>
        <div className="absolute right-[2.75rem] bottom-[0.4rem] flex items-center justify-center rounded-[1.5rem] bg-white/15 px-[0.353rem] py-[0.1765rem] backdrop-blur-[16px] md:right-[5rem] md:bottom-[0.8125rem] md:px-[0.75rem] md:py-[0.375rem]">
          <span className="text-[0.52956rem] leading-[1.2] font-bold text-white md:text-[1.125rem]">
            Experience
          </span>
        </div>
      </div>
      <ul
        className={cn(
          styles.activityScrollbarCustom,
          'hidden_scrollbar mt-[0.62rem] flex max-h-[5.5rem] flex-wrap gap-[0.5rem] overflow-y-auto text-[0.75rem] font-medium tracking-[0.03125rem] text-white uppercase max-md:w-[10.5rem] md:mt-[1.19rem] md:max-h-[18rem] md:text-[0.78906rem]',
        )}
      >
        {MOTOBIKE_TOURS.map((tour, index) => (
          <li
            key={index}
            className="hover:bg-orange-normal flex items-center justify-center gap-[0.625rem] rounded-full border border-solid border-white/40 px-[1.1875rem] py-[0.4375rem] transition-colors duration-500 hover:cursor-pointer md:px-[2.125rem] md:py-[0.8125rem]"
          >
            {tour}
          </li>
        ))}
      </ul>
    </div>
  );
}
