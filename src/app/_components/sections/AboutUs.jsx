import Image from "next/image";

export default function AboutUs() {
  const ACHIEVEMENTS = [
    { id: 1, title: "13 years experience" },
    { id: 2, title: "Personalization " },
    { id: 3, title: "Tour guide with good English" },
    { id: 4, title: "10.000 customers" },
    { id: 5, title: "Unique Experiences" },
  ];

  return (
    <section id="about-us" className="relative">
      <div className="absolute top-0 left-0 right-0 -translate-y-1/5 w-full h-[9.25406rem] shrink-0">
        <Image
          alt=""
          width={1980}
          height={200}
          className="w-full h-full object-cover"
          src="/images/moutain-top.svg"
        />
      </div>
      <Image
        alt="Hong Hao Travel"
        width={2000}
        height={500}
        className="absolute bottom-0 left-0 w-full object-contain z-0"
        src="/images/bg-overlay-mountain.svg"
      />
      <div className="relative flex flex-col items-center gap-[1.56rem] md:gap-[4rem] pt-[10rem] w-full md:w-[65.5rem] mx-auto z-[1]">
        <Image
          alt="Hong Ha Travel"
          width={100}
          height={100}
          src="/images/hh-logo-intro.png"
          className="w-[7rem] h-[8.3125rem] object-cover"
        />
        <p className="px-[1.5rem] md:w-[53.75rem] md:px-0 text-white text-center text-[1.5rem] md:text-[3.5rem] font-black leading-none opacity-80">
          Hong Hao Travel is a travel company in Ha Giang, we specialize in
          organizing unforgettable tours to explore Ha Giang loop but still
          focus on the pristine nature of nature.
        </p>
        <ul className="flex flex-wrap md:flex-nowrap gap-[0.75rem] items-center justify-center text-white font-bold uppercase leading-[120%] text-center">
          {ACHIEVEMENTS.map((item, index) => (
            <li
              key={index}
              className="group size-[6rem] md:size-[16rem] xl:size-[12.5rem] rounded-full inline-flex items-center justify-center relative hover:bg-orange-normal__hover duration-500"
            >
              <div className="absolute inset-0 animate-spin duration-500 pointer-events-none">
                <Image
                  width={200}
                  height={200}
                  alt="Hong Hao Travel"
                  src="/images/border-dotted.png"
                  className="size-full object-cover"
                />
              </div>
              <div className="relative w-full h-[4.6rem] overflow-hidden transition-colors text-[0.5rem] md:text-[1.5rem] xl:text-[0.875rem] leading-[1.2]">
                <p className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-[-7rem] transition-transform duration-500">
                  {item?.title}
                </p>
                <p className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 translate-y-[7rem] group-hover:-translate-y-1/2 transition-transform duration-500">
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
