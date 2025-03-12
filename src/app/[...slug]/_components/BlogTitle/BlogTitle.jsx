import Image from "next/image";
import React from "react";
import BlogBreadcrumb from "../BlogDetail/BlogBreadcrumb";

export default function BlogTitle() {
  return (
    <section id="blog-title" className="relative bg-[#1A543A]">
      <div className="h-[25rem] md:h-[35.125rem]">
        <div className="max-w-[100rem] mx-auto flex flex-col gap-[1.5rem] md:gap-y-[4rem] items-center pt-[7.89rem]">
          <p className="hidden md:inline-flex px-[1.625rem] py-[0.5rem] items-center justify-center gap-[0.625rem] rounded-[6.25rem] bg-white">
            <span className="text-[#030922] text-center text-[0.90088rem] leading-[1.625rem] tracking-[0.0625rem] uppercase">
              Ha Giang Friends
            </span>
          </p>
          <div className="!bg-[#1A543A] text-white relative w-full md:hidden">
            <BlogBreadcrumb />
          </div>
          <div className="flex flex-col gap-[1.125rem] items-center">
            <div className="flex items-center md:gap-x-[1.5rem]">
              <span className="-rotate-180 inline-flex size-[1.71875rem] items-center justify-center self-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="size-full"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.8555 14.9617C22.2221 15.0474 21.5891 15.1328 20.9581 15.2294C19.5941 15.4381 18.2203 15.5562 16.8537 15.6737C16.6479 15.6914 16.4422 15.7091 16.2366 15.7271C14.67 16.0379 13.085 16.1529 11.5022 16.0703C9.87883 15.8884 8.28621 15.3732 6.78069 14.5429V14.1483C8.28621 13.318 9.87883 12.8028 11.5022 12.6209C13.085 12.5383 14.67 12.6533 16.2366 12.9641C17.8062 13.1015 19.3758 13.2731 20.9581 13.4618C22.5406 13.6506 24.1102 13.8737 25.6797 14.1483V14.5429C24.7411 14.7072 23.7979 14.8345 22.8555 14.9617ZM9.89356 2.80706C9.64428 3.38894 9.37035 3.94616 9.09737 4.50147C8.97588 4.7486 8.85455 4.99542 8.73569 5.2438C8.34974 6.05032 7.91232 6.82253 7.44918 7.57757C7.28063 7.85234 7.14105 8.15439 7.00377 8.45145C6.76382 8.97068 6.53092 9.47469 6.16266 9.79123C5.46674 10.3644 4.66483 10.6674 3.84693 10.6664L3.67969 10.4262C3.68778 9.33529 3.93853 8.27219 4.40014 7.37165C4.66074 6.78433 5.09708 6.44817 5.53381 6.11173C5.72232 5.9665 5.91092 5.8212 6.08547 5.65564C6.66441 5.10651 7.2562 4.57455 7.86086 4.05975C8.46552 3.54495 9.08305 3.0473 9.73917 2.58398L9.89356 2.80706ZM8.44002 25.4259C8.83038 25.7666 9.2198 26.1063 9.63616 26.4173L9.81628 26.1942C9.4689 25.3362 9.09581 24.5125 8.70986 23.706C8.3239 22.8995 7.91221 22.1101 7.50052 21.3379C7.37639 21.1051 7.26747 20.8535 7.15858 20.6021C6.90634 20.0195 6.65432 19.4375 6.214 19.0899C5.54058 18.4695 4.74243 18.1345 3.92398 18.129L3.74386 18.3521C3.73086 19.4452 3.95902 20.5193 4.39999 21.4409C4.6373 21.9321 5.01517 22.2427 5.40444 22.5628C5.62715 22.7459 5.85361 22.9321 6.05961 23.1569C6.62568 23.7747 7.17889 24.3581 7.79642 24.8729C8.01425 25.0545 8.22727 25.2403 8.44002 25.4259Z"
                    fill="white"
                  />
                </svg>
              </span>
              <h1 className="text-white text-center font-londrina-solid text-[2rem] max-md:w-[18.75rem] md:text-[3.5rem] leading-none">
                Ha Giang Hotel Guide; Advice from the Experts
              </h1>
              <span className="inline-flex size-[1.71875rem] items-center justify-center self-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="size-full"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.8555 14.9617C22.2221 15.0474 21.5891 15.1328 20.9581 15.2294C19.5941 15.4381 18.2203 15.5562 16.8537 15.6737C16.6479 15.6914 16.4422 15.7091 16.2366 15.7271C14.67 16.0379 13.085 16.1529 11.5022 16.0703C9.87883 15.8884 8.28621 15.3732 6.78069 14.5429V14.1483C8.28621 13.318 9.87883 12.8028 11.5022 12.6209C13.085 12.5383 14.67 12.6533 16.2366 12.9641C17.8062 13.1015 19.3758 13.2731 20.9581 13.4618C22.5406 13.6506 24.1102 13.8737 25.6797 14.1483V14.5429C24.7411 14.7072 23.7979 14.8345 22.8555 14.9617ZM9.89356 2.80706C9.64428 3.38894 9.37035 3.94616 9.09737 4.50147C8.97588 4.7486 8.85455 4.99542 8.73569 5.2438C8.34974 6.05032 7.91232 6.82253 7.44918 7.57757C7.28063 7.85234 7.14105 8.15439 7.00377 8.45145C6.76382 8.97068 6.53092 9.47469 6.16266 9.79123C5.46674 10.3644 4.66483 10.6674 3.84693 10.6664L3.67969 10.4262C3.68778 9.33529 3.93853 8.27219 4.40014 7.37165C4.66074 6.78433 5.09708 6.44817 5.53381 6.11173C5.72232 5.9665 5.91092 5.8212 6.08547 5.65564C6.66441 5.10651 7.2562 4.57455 7.86086 4.05975C8.46552 3.54495 9.08305 3.0473 9.73917 2.58398L9.89356 2.80706ZM8.44002 25.4259C8.83038 25.7666 9.2198 26.1063 9.63616 26.4173L9.81628 26.1942C9.4689 25.3362 9.09581 24.5125 8.70986 23.706C8.3239 22.8995 7.91221 22.1101 7.50052 21.3379C7.37639 21.1051 7.26747 20.8535 7.15858 20.6021C6.90634 20.0195 6.65432 19.4375 6.214 19.0899C5.54058 18.4695 4.74243 18.1345 3.92398 18.129L3.74386 18.3521C3.73086 19.4452 3.95902 20.5193 4.39999 21.4409C4.6373 21.9321 5.01517 22.2427 5.40444 22.5628C5.62715 22.7459 5.85361 22.9321 6.05961 23.1569C6.62568 23.7747 7.17889 24.3581 7.79642 24.8729C8.01425 25.0545 8.22727 25.2403 8.44002 25.4259Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div className="flex items-center md:gap-[0.625rem]">
              <div className="shrink-0 size-[2.8125rem] rounded-full overflow-hidden">
                <Image
                  alt="Hong Hao Travel"
                  width={20}
                  height={20}
                  src="/images/blog-detail/avatar.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="shrink-0 w-[6.0075rem] h-[1.625rem] text-[#fcf8f7] text-center text-[0.75rem] md:text-[0.8545rem] font-bold leading-[1.625rem] tracking-[0.0625rem] uppercase">
                Đức híu
              </p>
            </div>
          </div>
          <p className="text-[#D9D9D9] text-center text-[0.76175rem] leading-[1.625rem] tracking-[0.03125rem] uppercase opacity-[0.9562]">
            4 Mar
          </p>
        </div>
        <div className="w-full h-[0.0625rem] mt-[1rem] md:mt-[2rem] bg-[rgba(217,217,217,0.60)]"></div>
      </div>
    </section>
  );
}
