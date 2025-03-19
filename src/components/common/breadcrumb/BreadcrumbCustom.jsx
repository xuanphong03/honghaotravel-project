import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

export default function BreadcrumbCustom({ data = [], className }) {
  return (
    <div className="mx-auto w-full md:w-[87.5rem]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-[0.875rem] tracking-[0.00219rem] text-[#C5C5C5]">
            <BreadcrumbLink
              href="/"
              className="flex items-center gap-[0.25rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="size-[1rem]"
              >
                <path
                  d="M13.3346 11.3334V7.63482C13.3346 7.27859 13.3343 7.10038 13.291 6.93462C13.2526 6.78772 13.1896 6.64871 13.1043 6.52309C13.0081 6.38134 12.8743 6.26379 12.6063 6.02922L9.40625 3.22922C8.90851 2.79369 8.65964 2.57604 8.37956 2.49321C8.13276 2.42023 7.86971 2.42023 7.62292 2.49321C7.34304 2.57598 7.09453 2.79343 6.59754 3.22829L3.39648 6.02922C3.1284 6.2638 2.99466 6.38134 2.89844 6.52309C2.81316 6.64871 2.74967 6.78772 2.71128 6.93462C2.66797 7.10038 2.66797 7.27859 2.66797 7.63482V11.3334C2.66797 11.9547 2.66797 12.2652 2.76946 12.5102C2.90479 12.8369 3.16418 13.0968 3.49089 13.2321C3.73591 13.3336 4.04654 13.3336 4.6678 13.3336C5.28905 13.3336 5.60002 13.3336 5.84505 13.2321C6.17176 13.0968 6.43108 12.837 6.56641 12.5103C6.6679 12.2653 6.66797 11.9546 6.66797 11.3334V10.6667C6.66797 9.93034 7.26492 9.33338 8.0013 9.33338C8.73768 9.33338 9.33464 9.93034 9.33464 10.6667V11.3334C9.33464 11.9546 9.33464 12.2653 9.43613 12.5103C9.57145 12.837 9.83085 13.0968 10.1576 13.2321C10.4026 13.3336 10.7132 13.3336 11.3345 13.3336C11.9557 13.3336 12.2667 13.3336 12.5117 13.2321C12.8384 13.0968 13.0977 12.8369 13.2331 12.5102C13.3346 12.2652 13.3346 11.9547 13.3346 11.3334Z"
                  fill="#C5C5C5"
                />
              </svg>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          {data.map(({ page, to }, index) => {
            const isLastChild = index === data.length - 1;
            return (
              <React.Fragment key={index}>
                <BreadcrumbSeparator
                  className={cn(isLastChild ? 'text-orange-normal' : '')}
                />
                <BreadcrumbItem className="line-clamp-1 text-[0.75rem] tracking-[0.00375rem] md:text-[0.875rem] md:tracking-[0.00219rem]">
                  <BreadcrumbLink
                    href={to}
                    className={cn(
                      isLastChild ? 'text-[#2c2c2c]' : 'text-[#C5C5C5]',
                      className,
                    )}
                  >
                    {page}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
