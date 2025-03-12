import Image from "next/image";
import React from "react";
import AboutData from "./AboutData";
import AboutL from "./AboutL";
import AboutR from "./AboutR";

export default function About() {
  return (
    <div className="about relative pt-[7.25rem] sm:py-[8.69rem] max-sm:min-h-[56.6963rem] overflow-hidden">
      <div className="w-[101.5625rem] h-full absolute top-0 left-0 right-0">
        <div
          className="absolute top-0 right-0 left-0 bottom-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)",
          }}
        ></div>
        <Image
          src="/images/about/about-banner.png"
          alt="Hong Hao Travel"
          fill
          className="object-cover absolute top-0 left-0 right-0 bottom-0 z-0"
        ></Image>
      </div>
      <div className="absolute top-[15rem] right-0 sm:top-[15.5rem] sm:right-[8.55rem] w-[27.522rem] h-[55.90219rem] sm:h-[85.19rem] max-h-full  sm:w-[56.58rem] z-10">
        <div className="chu flex items-end max-sm:flex-row-reverse sm:items-center gap-[0.70rem] sm:gap-20 absolute top-[18rem] right-[1.6rem] sm:top-[35rem]  sm:right-[1.25rem] z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5  animate-ping   max-sm:mb-2"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
            <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
          </svg>
          <AboutData
            exp={{ text: "10.000", notice: "Visitors experience" }}
            cl1="items-end"
            cl2="text-end"
          />
        </div>
        <div className="flex max-sm:flex-col sm:items-center gap-[3.14rem] sm:gap-20 absolute top-[27.85rem] max-sm:left-[6rem] sm:top-[54.5rem] sm:right-[55rem] z-20">
          <AboutData
            exp={{ text: "13 year", notice: "Experience" }}
            cl1="sm:items-end"
            cl2="sm:text-end"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5  animate-ping "
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
            <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full sm:hidden"
          viewBox="0 0 375 410"
          fill="none"
        >
          <path
            d="M243.704 895.367C243.704 857.78 242.802 821.346 237.075 784.094C235.366 772.983 237.624 760.489 232.156 750.114C227.787 741.825 219.671 733.808 212.801 727.291C200.292 715.425 190.381 705.229 176.338 695.238C148.882 675.705 118.222 660.653 90.5789 641.174C77.0236 631.622 61.4896 623.16 49.3035 612.063C40.437 603.988 33.3009 594.69 22.5707 588.631C11.8858 582.598 0.262912 578.489 -9.50861 570.982C-26.31 558.075 -44.0689 536.935 -54.5266 518.845C-61.6366 506.546 -65.8505 491.007 -66.1821 476.851C-66.6745 455.832 -53.2659 435.561 -45.0098 416.6C-25.6108 372.048 31.454 357.05 73.2561 337.684C100.255 325.177 129.116 319.534 158.053 314.76C166.401 313.383 173.376 309.38 181.15 306.544C190.393 303.172 201.69 301.804 211.411 300.154C232.599 296.557 258.953 296.573 278.35 287.373C301.81 276.246 315.014 259.784 326.897 238.076C342.341 209.861 350.045 179.847 347.534 147.699C346.441 133.698 343.792 119.784 343.792 105.705C342.993 88.1118 342.623 49.1434 347.534 34.0181C352.446 18.8927 367.329 5.65823 374.156 0.931641"
            stroke="white"
            strokeWidth="1.76768"
            strokeDasharray="3.54 3.54"
          />
        </svg>
        <Image
          src="/images/about/map.png"
          alt=""
          fill
          className="object-cover max-sm:hidden"
        />
      </div>
      <div className="max-sm:hidden absolute w-[25.36806rem] h-[10.74656rem] shrink-0 top-[33.5rem] -right-[6.437rem] z-10">
        <Image
          src="/images/about/cloud.png"
          alt="Hong Hao Travel"
          fill
          className="object-contain"
        />
      </div>
      <AboutL />

      <AboutR />
    </div>
  );
}
