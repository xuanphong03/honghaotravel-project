import Image from 'next/image';
import React from 'react';

export default function BlogPlanning() {
  return (
    <section id="blog-planning" className="relative">
      <div className="relative mt-[3rem] w-full md:h-[48.875rem]">
        <Image
          alt="Hong Hao Travel"
          width={2000}
          height={1000}
          src="/images/blog-detail/blog-planning-bg-start.png"
          className="relative h-full w-full max-md:hidden"
        />
        <Image
          alt="Hong Hao Travel"
          width={400}
          height={400}
          src="/images/blog-detail/blog-planning-bg-start-mobi.png"
          className="relative w-full md:hidden"
        />
        <div className="absolute top-1/2 flex w-full justify-center max-md:top-[3.6rem] md:-translate-y-1/2">
          <div className="relative flex h-full w-full items-center md:mx-auto md:w-[87.5rem] md:space-x-[2.3rem]">
            <div className="hidden p-[0rem] md:relative md:block">
              <Image
                alt="Hong Hao Travel"
                width={250}
                height={250}
                className="circular-infinity absolute top-[-4rem] z-50 size-[12rem] max-md:top-[-6.5rem] max-md:right-[1.5rem] max-md:size-[5.51563rem] md:left-[-4rem]"
                src="/images/blog-detail/enquire-now.png"
              />
              <Image
                alt="Hong Hao Travel"
                width={1000}
                height={600}
                className="hidden h-[40.02563rem] rounded-[1.5rem] md:block md:w-[65.45rem]"
                src="/images/blog-detail/blog-planning.png"
              />
            </div>
            <div className="mx-auto flex flex-col items-center max-md:px-[1rem]">
              <h2 className="font-londrina-solid mb-[2.26rem] shrink-0 text-center text-[3.5rem] leading-none font-bold text-[#313131]/80 max-md:mb-[0.75rem] max-md:text-[1.5rem] max-md:leading-[1.2] max-md:!font-black max-md:tracking-[0.00875rem] md:h-[6.4375rem] md:w-[27.5rem] lg:!h-auto">
                Start planning your journey of joy
              </h2>
              <div className="mb-[2.38rem] w-[20.3125rem] shrink-0 text-center text-base leading-[150%] font-normal tracking-[0.005rem] text-[#A9A9A9] not-italic max-md:mb-[2rem] max-md:text-[0.875rem] max-md:leading-[1.5] md:h-[4.875rem]">
                Experience the raw beauty of Hà Giang with our immersive travel
                adventu a truly unique and authentic experience.
              </div>
              <div className="inline-flex w-full items-start justify-center gap-x-[0.5625rem] max-md:px-[1rem]">
                <button className="blog_planning_btn blog_planning_btn-primary">
                  Our tours
                </button>
                <button className="blog_planning_btn blog_planning_btn-secondary group">
                  <span>Call us</span>
                  <Image
                    alt="Hong Hao Travel"
                    width={20}
                    height={20}
                    src="/images/arrow/arrow-right.svg"
                    className="size-[0.875rem] object-contain duration-300 ease-linear group-hover:translate-x-[0.5rem]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
