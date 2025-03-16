import Image from "next/image";

import LocationPoint from "./LocationPoint";
import MotorbikeTour from "./MotorbikeTour";

import "./Banner.scss";
import HikingExperience from "./HikingExperience";

export default function Banner() {
  return (
    <section
      id="banner"
      className="relative xl:h-[100rem] w-full overflow-hidden bg-white"
    >
      <h1 className="opacity-0 z-[-1] fixed top-0 left-0">Activity Ha Giang</h1>
      <div className="relative w-full h-full">
        <Image
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/activity/banner.svg"
          className="size-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 w-full h-[120.9375rem] bg-overlay"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          width={2000}
          height={400}
          alt="Climbing"
          src="/images/activity/climbing.svg"
          className="w-[101.49219rem] h-[24.47356rem] object-fill translate-y-[2rem]"
        />
      </div>
      <div className="absolute left-0 right-0 mx-auto w-[87.5rem] max-md:h-[105rem] h-[100rem] max-md:mt-[5.3rem] top-0">
        <Image
          width={400}
          height={200}
          alt="Activity Ha Giang"
          src="/images/activity/activity-text.svg"
          className="hidden md:inline-block w-[20.9605rem] h-[8.65rem] md:absolute md:left-[5rem] lg:left-[0rem] top-[9rem] md:w-[52.3605rem] md:h-[22.1875rem]"
        />
        <div className="md:absolute flex-col md:left-[5rem] lg:left-[0rem] left-[0rem] top-[32rem] items-start space-y-[2.0625rem]">
          <p className="max-md:max-h-[9rem] max-md:overflow-y-auto md:w-[52.3125rem] text-white max-md:text-[0.875rem] text-base font-normal leading-[150%] max-md:tracking-0.00219 tracking-[0.005rem]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam,
            beckons adventurers with its breathtaking scenery and vibrant
            cultural tapestry. From the towering peaks of the Dong Van Karst
            Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers
            an unforgettable journey through some of Vietnam's most
            awe-inspiring landscapes.
          </p>
          <div className="mt-[2.06rem] flex items-center gap-[1rem] font-bold text-white">
            <button className="group button_default bg-orange-normal border border-solid border-orange-normal__hover">
              <span>Book now</span>
              <Image
                alt=""
                width={10}
                height={10}
                src="/images/arrow/arrow-right.svg"
                className="size-[0.625rem] object-contain group-hover:translate-x-[0.5rem] ease-linear duration-200"
              />
            </button>
            <button className="group button_default border border-solid border-white opacity-60 bg-transparent hover:bg-orange-normal hover:opacity-100 ease-linear duration-300 hover:border-orange-normal">
              <span>All tour</span>
              <Image
                alt=""
                width={10}
                height={10}
                src="/images/arrow/arrow-right.svg"
                className="size-[0.625rem] object-contain group-hover:translate-x-[0.5rem] ease-linear duration-300"
              />
            </button>
          </div>
        </div>
        <Image
          alt=""
          width={2000}
          height={1000}
          src="/images/activity/map2.png"
          className="w-[57rem] left-[35%] max-md:hidden h-[82rem] absolute bottom-0"
        />
        <div className="absolute w-[4.75rem] h-[6.25rem] top-[43.5rem] max-md:top-[43.2rem] lg:left-[-1rem] md::left-[3.35rem] left-[2.8rem]">
          <div className="relative">
            <div className="absolute max-md:top-[6.4rem] max-md:left-[-1.5rem] md:left-[50.5rem] md:top-[-1rem] inline-flex flex-col items-center space-y-[0] w-[8.75013rem]">
              <LocationPoint />
            </div>
            <div className="max-md:top-[11rem] max-md:left-[5.5rem] md:top-[3rem] md:left-[58rem] lg:left-[58.7rem] absolute flex flex-col items-start max-md:space-y-[0.75rem] space-y-[1.2rem]">
              <MotorbikeTour />
            </div>
          </div>
        </div>
        <div className="absolute w-[4.75rem] h-[6.25rem] lg:left-[-3.6rem] md:left-[3rem] left-[-0.7rem] top-[63.5rem]">
          <div className="relative">
            <div className="absolute top-[5rem] left-[14.2rem] md:left-[28rem] lg:left-[30.5rem] md:top-[7rem] inline-flex flex-col items-center w-[8.75013rem]">
              <LocationPoint />
            </div>
            <div className="max-md:top-[4.5rem] max-md:left-[2rem] left-[3.5rem] top-[1rem] absolute flex flex-col items-start max-md:space-y-[0.75rem] space-y-[2.82rem]">
              <HikingExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
