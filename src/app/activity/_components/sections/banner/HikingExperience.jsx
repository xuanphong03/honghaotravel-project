import Image from "next/image";

export default function HikingExperience() {
  const HIKING_EXPERIENCE = [
    "Thủy điện Nho Quế 3",
    "Vách đá trắng",
    "Mã Pì Lèng",
    "Thôn Tha",
    "Thác số 6",
    "Thôn Lũng Giày",
    "Thôn Pả Vi",
    "Thôn Pả Vi",
    "Thôn Pả Vi",
    "Thôn Pả Vi",
    "Thôn Pả Vi",
    "Thôn Pả Vi",
    "Thôn Pả Vi",
    "Thôn Pả Vi",
    "Thôn Pả Vi",
    "Thôn Pả Vi",
  ];
  return (
    <div className="relative">
      <div className="mb-[2.82rem]">
        <h3 className="text-gradient text-[6.25rem] font-bold leading-none uppercase max-md:text-[2.94194rem] relative">
          HIKING
        </h3>
        <div className="text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4 backdrop-blur-lg max-md:px-[0.353rem] max-md:text-[0.52956rem] md:mt-[0.3rem] max-md:py-[0.1765rem] px-3 py-1.5 rounded-3xl">
          Experience
        </div>
      </div>
      <ul className="activity_scrollbar_custom mb-[1rem] flex overflow-y-auto text-white uppercase text-[0.78906rem] font-medium  max-md:max-h-[8rem] max-h-[18rem] max-md:w-[13.6875rem] w-[28.6875rem] items-start content-start gap-2 flex-wrap">
        {HIKING_EXPERIENCE.map((tour, index) => (
          <li
            key={index}
            className="hover:cursor-pointer hover:bg-orange-normal transition-colors duration-500 py-[0.8125rem] px-[2.125rem] flex items-center justify-center gap-[0.625rem] rounded-full border border-solid border-white/40"
          >
            {tour}
          </li>
        ))}
      </ul>
    </div>
  );
}
