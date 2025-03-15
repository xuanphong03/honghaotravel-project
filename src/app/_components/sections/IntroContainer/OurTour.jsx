"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import "./OurTour.css";
import { MotionPathPlugin } from "gsap/all";

export default function OurTour() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(MotionPathPlugin);

      // Fade-out animation
      gsap.to(".fade-out-animation", {
        opacity: 0,
        duration: 1,
        delay: 12,
        scrollTrigger: {
          trigger: ".trigger-motorbike-button",
          toggleActions: "play none none none",
          start: "top 50%",
        },
      });
      // Line animation
      gsap.to(".line-red-container", {
        height: "100%",
        duration: 2,
        scrollTrigger: {
          trigger: ".trigger-motorbike-button",
          toggleActions: "play none none none",
          start: "top 50%",
        },
      });
      // Set initial motorbike position
      gsap.set("#motorbike", {
        xPercent: -50, // Center horizontally
        yPercent: -50, // Center vertically
        transformOrigin: "50% 50%", // Rotate around center
      });

      // Animate motorbike along the SVG path
      gsap.to("#motorbike", {
        delay: 2,
        duration: 10, // Adjusted for smoother timing,
        opacity: 1,
        motionPath: {
          path: "#line_path_motorbike", // The SVG path ID
          align: "#line_path_motorbike", // Aligns motorbike to the path
          autoRotate: true, // Rotates motorbike to follow path direction
          alignOrigin: [0.5, 0.5], // Ensures proper centering on the path
        },
        scrollTrigger: {
          trigger: ".trigger-motorbike-button", // Start when button is in view
          toggleActions: "play none none none",
          start: "top 50%", // Start when the trigger is 50% from the top
        },
      });
    },
    { scope: container }
  );
  return (
    <section
      id="our-tour"
      ref={container}
      className="relative mt-[6.62rem] z-[1] overflow-hidden"
    >
      <div className="relative hidden md:flex md:max-w-[100rem] mx-auto flex-col items-center">
        <div className="mx-auto inline-flex flex-col items-center gap-[1.8125rem]">
          <h2 className="sub2-bold text-center !text-white opacity-90 md:!text-[1.75rem] lg:!text-[0.875rem]">
            EXPLORE YOUR JOURNEY WITH US
          </h2>
          <button className="trigger-motorbike-button">
            <Image
              width={100}
              height={100}
              alt="Hong Hao Travel"
              src="/images/arrow-down.png"
              className="size-[3.0625rem] object-center"
            />
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden max-md:px-[1rem] max-md:pb-0 max-md:pt-0 md:pl-[4rem] md:pb-[5rem] lg:pl-[6.75rem] lg:pb-[7.6875rem] xl:pb-[20.875rem] pt-[5.3125rem]">
        <div className="hidden md:block absolute right-[-50rem] top-0 left-0">
          <Image
            width={500}
            height={500}
            alt="Hong Hao Travel"
            src="/images/cloud.png"
            className="absolute top-[1rem] left-1/2 animate-cloud delay-300 opacity-30 z-[1]"
          />
          <Image
            width={500}
            height={500}
            alt="Hong Hao Travel"
            src="/images/motobike-tour.png"
            className="w-screen h-[44.375rem] object-contain z-0"
          />
          <Image
            alt="Hong Hao Travel"
            width={500}
            height={500}
            src="/images/cloud2.png"
            className="absolute top-[2rem] left-1/2 animate-cloud2"
          />
        </div>
        <div className="md:w-[38.8125rem] w-full relative z-[2]">
          <h2 className="max-md:w-3/4 font-londrina-solid text-[2.5rem] md:text-[3.5rem] xl:text-[56px] font-black leading-none text-white mb-[2rem] md:mb-[3.5rem]">
            HONG HAO MOTORBIKE TOUR
          </h2>
          <p className="text-[rgb(197,197,197)] lg:text-[16px] md:text-[1.75rem] lg:mb-[2rem] md:leading-normal md:tracking-0 text-[0.875rem] md:tracking-[0.005rem] md:mb-[1rem] mb-[1.5rem] tracking-[0.00219rem] leading-normal">
            Experience the raw beauty of Hà Giang with our immersive travel
            adventures. From rugged mountain landscapes to vibrant ethnic
            cultures, Hà Giang offers a truly unique and authentic experience.
            Explore remote villages.
          </p>
          <ul className="flex flex-col gap-[0.75rem] mb-[2rem]">
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Tours accommodate a maximum of 10 guests
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Flexible cancellation policy
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Book now, pay later
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Fluent English-speaking guides
              </span>
            </li>
            <li className="flex items-center gap-[0.5rem]">
              <Image
                width={20}
                height={20}
                alt="Hong Hao Travel"
                src="/images/tick.svg"
                className="size-[1rem] object-cover"
              />
              <span className="lg:text-[1rem] md:text-[1.5rem] md:tracking-0 text-[0.875rem] md:leading-normal text-[#f1f1f1] font-bold ml-[0.5rem]">
                Creating job opportunities for the Vietnamese community
              </span>
            </li>
          </ul>
          <div className="flex items-center gap-4 md:gap-1">
            <button className="group xl:text-[16px] cursor-pointer bg-orange-normal border-orange-normal py-[0.75rem] px-[1.5rem] h-[3rem] md:h-[5rem] lg:h-[3.5rem] group whitespace-nowrap text-sm font-bold ring-offset-white ease-linear duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 md:text-[1.5rem] flex uppercase button text-white justify-center items-center gap-2 border border-orange-hover bg-orange-hover rounded-lg border-solid md:w-fit w-[10.21875rem] lg:py-[1rem] lg:px-[2rem] lg:mr-[1rem]">
              Book now
              <span className=" group-hover:translate-x-1/3 transition-transform duration-500 inline-flex justify-center items-center size-[1rem] px-[0.125rem] py-[0.17188rem]">
                <Image
                  alt="Hong Hao Travel"
                  width={20}
                  height={20}
                  src="/images/arrow/arrow-right.svg"
                  className="size-full object-contain"
                />
              </span>
            </button>
            <button className="group xl:text-[16px] cursor-pointer hover:bg-orange-normal hover:border-orange-normal py-[0.75rem] px-[1.5rem] h-[3rem] md:h-[5rem] lg:h-[3.5rem] group whitespace-nowrap text-sm font-bold ring-offset-white ease-linear duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 md:text-[1.5rem] flex uppercase button text-white justify-center items-center gap-2 border border-orange-hover bg-orange-hover rounded-lg border-solid md:w-fit w-[10.21875rem] lg:py-[1rem] lg:px-[2rem] lg:mr-[1rem]">
              All tour
              <span className="group-hover:translate-x-1/3 transition-transform duration-500 inline-flex justify-center items-center size-[1rem] px-[0.125rem] py-[0.17188rem]">
                <Image
                  alt="Hong Hao Travel"
                  width={20}
                  height={20}
                  src="/images/arrow/arrow-right.svg"
                  className="size-full object-contain"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="fade-out-animation pointer-events-none hidden md:block w-[11rem] h-[50rem] absolute top-1/2 left-1/2 -translate-y-[45%] -translate-x-[40%]">
        <div className="line-red-container overflow-hidden h-0">
          <svg
            width="68"
            height="714"
            viewBox="0 0 68 714"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full object-cover"
          >
            <path
              d="M12.1582 1.89551C9.56033 24.1217 1.63281 54.4379 1.63281 76.8445C1.63281 94.6201 5.52653 113.236 2.49001 130.848C-1.15298 151.977 12.7991 186.622 24.8723 203.614C41.5076 227.027 56.6881 254.78 62.9698 283.047C67.5053 303.457 66.8678 323.635 63.7318 344.194C62.2826 353.694 63.8138 363.39 62.3031 372.957C60.6279 383.567 58.2166 394.057 56.1123 404.578C52.6306 421.987 46.8569 437.015 36.7778 451.915C29.2215 463.085 23.0426 472.206 22.1102 485.726C20.9194 502.992 12.5121 520.164 9.34756 537.253C6.60436 552.066 10.2048 566.045 10.2048 580.684C10.2048 603.727 8.36815 626.026 14.9669 648.022C21.4484 669.626 13.2051 691.359 15.3479 712.787"
              stroke="#E64827"
              strokeWidth="2"
              strokeLinecap="round"
              id="line_path_motorbike"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "none",
              }}
            />
          </svg>
        </div>

        <div className="absolute bottom-full left-1/2 -translate-x-1/2">
          <Image
            width={50}
            height={50}
            id="motorbike"
            alt="Hong Hao Travel"
            src="/images/xemay.png"
            className="w-[8.12644rem] h-[6.9375rem] object-contain opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
