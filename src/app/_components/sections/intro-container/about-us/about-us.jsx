import Image from 'next/image';

export default function AboutUs() {
  const ACHIEVEMENTS = [
    { id: 1, title: '13 years experience' },
    { id: 2, title: 'Personalization ' },
    { id: 3, title: 'Tour guide with good English' },
    { id: 4, title: '10.000 customers' },
    { id: 5, title: 'Unique Experiences' },
  ];

  return (
    <section id="about-us" className="relative">
      <div className="absolute top-0 right-0 left-0 h-[9.25406rem] w-full shrink-0 -translate-y-1/5 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1600"
          height="148"
          viewBox="0 0 1600 148"
          fill="none"
        >
          <path
            d="M27.6749 7.67356C27.619 7.67159 27.5632 7.6696 27.5075 7.66759C27.6907 7.66759 27.8665 7.66752 28.0351 7.66738C31.7785 7.60562 32.8779 7.66342 28.0351 7.66738C27.9176 7.66932 27.7975 7.67138 27.6749 7.67356C42.7482 8.20436 64.3362 7.30376 78.8556 9.01005C88.853 10.1849 99.6545 10.9359 110.031 11.4368C128.356 12.3212 147.8 15.5909 165.353 17.4778C203.584 21.5877 268.22 28.1687 305.184 21.1437C331.301 16.1804 350.551 9.13432 382.359 8.59698C399.327 8.31035 415.315 7.01793 431.874 6.7382C439.03 6.61731 462.033 1.69265 462.744 1.88473C479.896 6.52087 498.904 12.5454 521.274 14.225C556.973 16.9052 593.059 15.2874 628.555 19.285C631.499 19.6166 665.36 24.2008 668.441 22.8993C675.153 20.0647 684.719 18.4414 694.574 16.9615C705.736 15.2854 714.612 11.3851 727.736 11.3851C735.271 11.3851 736.419 10.6779 742.713 9.7329C747.472 9.01823 753.475 10.1577 757.842 9.01005C765.492 6.99983 770.861 1.16187 781.224 1.16187C786.317 1.16187 789.248 2.09126 793.602 2.09126C799.973 2.09126 804.446 0.357599 811.483 0.232481C827.295 -0.0486955 827.378 -1.00511 835.628 4.87943C839.652 7.7492 845.243 8.79998 852.133 10.6623C860.266 12.8606 867.548 14.7273 878.113 15.8256C895.131 17.5948 918.897 16.6258 933.129 20.4725C941.333 22.69 957.573 22.7519 966.138 25.1195C979.324 28.7645 1002.17 30.0538 1017.79 32.5546C1025.2 33.7408 1074.78 41.4527 1081.06 38.8021C1092.96 33.7779 1117.47 29.0249 1134.7 25.7907C1147.1 23.4639 1157.52 23.4653 1171.84 23.4671L1173.06 23.4672C1179.91 23.4672 1180.13 25.1681 1186.2 25.326C1194.11 25.5314 1200.6 26.2554 1208.97 26.2554C1241.19 26.2554 1272.18 25.8757 1303.57 28.5272C1316.51 29.6202 1331.67 31.8317 1345.14 31.8317H1386.4C1390.43 31.8317 1400.33 32.4514 1402.9 31.367C1406.11 30.0134 1415.64 32.5931 1419.41 32.9676C1432.69 34.2878 1446.64 38.9879 1460.67 39.2668C1466.15 39.3758 1469.48 40.177 1474.42 40.9191C1483.03 42.2114 1494.29 40.2294 1503.15 41.5903C1515.38 43.468 1538.17 41.4592 1548.54 44.3785C1553.46 45.7627 1585.77 45.2624 1591.72 45.8363C1611.49 47.7453 1612.5 54.8912 1612.5 60.5C1629.23 84.4802 1610.51 114.331 1607.18 140.149C1608.22 141.05 1609.9 141.643 1612.5 141.706C1615.12 141.769 1612.16 141.759 1607 141.721C1606.8 143.599 1606.69 145.454 1606.69 147.283V141.718C1597.61 141.65 1582.12 141.5 1577.58 141.5L1576.11 141.5C1565.43 141.499 1553.51 141.499 1542.28 141.706C1505.64 142.383 1470.21 142.239 1433.93 141.448C1377.67 140.222 1319.84 135.923 1263.83 135.923C1207.62 135.923 1152.65 134.994 1096.8 134.994H992.118C958.151 134.994 924.985 136.604 891.103 136.801C814.228 137.249 737.228 136.853 660.342 136.853H167.034H66.7827C55.5225 136.853 41.9085 137.543 30.8696 136.853C-8.50056 136.853 -13.1416 108.5 -5.50055 108.5C-13.2817 94.5666 -0.000397682 85.5607 -0.000397682 71.3824V23.4672V11.3851C-0.000397682 8.51881 19.4581 7.81962 27.6749 7.67356Z"
            fill="#122718"
          />
        </svg>
      </div>
      <Image
        width={2000}
        height={500}
        alt="Hong Hao Travel"
        src="/images/home/about-us/bg-overlay-mountain.svg"
        className="absolute bottom-0 left-0 z-0 h-auto w-full object-contain max-md:hidden"
      />
      <Image
        alt="Hong"
        width={500}
        height={500}
        src="/images/home/about-us/bg-mount-mb.svg"
        className="absolute top-[3rem] left-0 z-[1] hidden opacity-100 max-md:flex"
      />
      <div className="relative z-[1] mx-auto flex w-full flex-col items-center gap-[1.56rem] md:w-[65.5rem] md:gap-[4rem] md:pt-[10rem]">
        <Image
          alt="Hong Ha Travel"
          width={100}
          height={100}
          src="/images/home/about-us/hh-logo-intro.png"
          className="h-[8.3125rem] w-[7rem] object-cover"
        />
        <p className="font-londrina-solid px-[1.5rem] text-center text-[1.5rem] leading-none font-black text-white opacity-80 md:w-[53.75rem] md:px-0 md:text-[3.5rem]">
          Hong Hao Travel is a travel company in Ha Giang, we specialize in
          organizing unforgettable tours to explore Ha Giang loop but still
          focus on the pristine nature of nature.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-[0.75rem] text-center leading-[120%] font-bold text-white uppercase md:flex-nowrap">
          {ACHIEVEMENTS.map((item, index) => (
            <li
              key={index}
              className="group hover:bg-orange-normal__hover relative inline-flex size-[6rem] items-center justify-center rounded-full duration-500 md:size-[16rem] xl:size-[12.5rem]"
            >
              <div className="animate-spin-slow pointer-events-none absolute inset-0 !duration-[10s]">
                <Image
                  width={200}
                  height={200}
                  alt="Hong Hao Travel"
                  src="/images/home/about-us/border-dotted.png"
                  className="size-full object-cover"
                />
              </div>
              <div className="relative h-[4.6rem] w-full overflow-hidden text-[0.5rem] leading-[1.2] transition-colors md:text-[1.5rem] xl:text-[16px]">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transition-transform duration-500 group-hover:translate-y-[-5.5rem]">
                  {item?.title}
                </p>
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[5.5rem] text-center transition-transform duration-300 group-hover:-translate-y-1/2">
                  {item?.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
