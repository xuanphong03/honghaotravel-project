import Image from 'next/image';

export default function HikingExperience() {
  const HIKING_EXPERIENCE = [
    'Thủy điện Nho Quế 3',
    'Vách đá trắng',
    'Mã Pì Lèng',
    'Thôn Tha',
    'Thác số 6',
    'Thôn Lũng Giày',
    'Thôn Pả Vi',
    'Thôn Pả Vi',
    'Thôn Pả Vi',
    'Thôn Pả Vi',
    'Thôn Pả Vi',
    'Thôn Pả Vi',
    'Thôn Pả Vi',
    'Thôn Pả Vi',
    'Thôn Pả Vi',
    'Thôn Pả Vi',
  ];
  return (
    <div className="relative">
      <div className="mb-[0.75rem] md:mb-[2.82rem]">
        <h3 className="text-gradient relative text-[6.25rem] leading-none font-bold uppercase max-md:text-[2.94194rem]">
          HIKING
        </h3>
        <div className="z-[500] flex w-fit flex-col items-start gap-4 rounded-3xl bg-[rgba(255,255,255,0.15)] bg-clip-border px-3 py-1.5 text-lg leading-[120%] font-bold text-white not-italic backdrop-blur-lg max-md:px-[0.353rem] max-md:py-[0.1765rem] max-md:text-[0.52956rem] md:mt-[0.3rem]">
          Experience
        </div>
      </div>
      <ul className="activity_scrollbar_custom mb-[1rem] flex max-h-[8rem] w-[13.6875rem] flex-wrap content-start items-start gap-[0.5rem] overflow-y-auto text-[0.75rem] font-medium text-white uppercase max-md:max-h-[8rem] max-md:pr-4 md:max-h-[18rem] md:w-[28.6875rem] md:text-[0.78906rem]">
        {HIKING_EXPERIENCE.map((tour, index) => (
          <li
            key={index}
            className="hover:bg-orange-normal flex items-center justify-center gap-[0.625rem] rounded-full border border-solid border-white/40 px-[1.1875rem] py-[0.4375rem] transition-colors duration-500 hover:cursor-pointer md:px-[2.125rem] md:py-[0.8125rem]"
          >
            {tour}
          </li>
        ))}
      </ul>
    </div>
  );
}
