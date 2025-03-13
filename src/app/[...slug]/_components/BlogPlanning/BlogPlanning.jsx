import Image from "next/image";
import React from "react";

export default function BlogPlanning() {
  return (
    <section id="blog-planning" className="relative">
      <div className="w-full md:h-[48.875rem] mt-[3rem] relative">
        <Image
          alt="Hong Hao Travel"
          width={2000}
          height={1000}
          src="/images/blog-detail/blog-planning-bg-start.png"
          className="relative w-full h-full max-md:hidden"
        />
        <Image
          alt="Hong Hao Travel"
          width={400}
          height={400}
          src="/images/blog-detail/blog-planning-bg-start-mobi.png"
          className="relative w-full z-[-500] md:hidden"
        />
        <div className="absolute flex justify-center w-full md:-translate-y-1/2 max-md:top-[3.6rem] top-1/2">
          <div className="relative flex items-center md:space-x-[2.3rem] h-full md:w-[87.5rem] md:mx-auto w-full">
            <div className="md:relative p-[0rem] hidden md:block">
              <Image
                alt="Hong Hao Travel"
                width={250}
                height={250}
                className="absolute z-50 max-md:size-[5.51563rem] circular-infinity max-md:top-[-6.5rem] top-[-4rem] max-md:right-[1.5rem] md:left-[-4rem] size-[12rem]"
                src="/images/blog-detail/enquire-now.png"
              />
              <Image
                alt="Hong Hao Travel"
                width={1000}
                height={600}
                className="rounded-[1.5rem] hidden md:block md:w-[65.45rem] h-[40.02563rem]"
                src="/images/blog-detail/blog-planning.png"
              />
            </div>
            <div className="flex flex-col mx-auto items-center max-md:px-[1rem]">
              <h2 className="text-[3.5rem] font-londrina-solid leading-none md:w-[27.5rem] max-md:text-[1.5rem] mb-[2.26rem] max-md:mb-[0.75rem] md:h-[6.4375rem] lg:!h-auto shrink-0 text-[#313131]/80 font-bold text-center max-md:!font-black max-md:tracking-[0.00875rem] max-md:leading-[1.2]">
                Start planning your journey of joy
              </h2>
              <div className="w-[20.3125rem] md:h-[4.875rem] max-md:mb-[2rem] mb-[2.38rem] shrink-0 text-[#A9A9A9] text-center text-base max-md:text-[0.875rem] max-md:leading-[1.5] not-italic font-normal leading-[150%] tracking-[0.005rem]">
                Experience the raw beauty of Hà Giang with our immersive travel
                adventu a truly unique and authentic experience.
              </div>
              <div className="w-full inline-flex items-start max-md:px-[1rem] gap-x-[0.5625rem]">
                <button className="blog_planning_btn blog_planning_btn-primary">
                  Our tours
                </button>
                <button className="blog_planning_btn blog_planning_btn-secondary">
                  Call us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
