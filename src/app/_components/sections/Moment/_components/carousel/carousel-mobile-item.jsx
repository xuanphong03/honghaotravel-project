import Image from 'next/image';

export default function CarouselMobileItem() {
  return (
    <div className="item_slide group relative mx-[0.25rem] h-[14.18094rem] w-[23.83063rem] flex-shrink-0 md:h-[20.18094rem] md:w-[31.83063rem]">
      <Image
        alt="demo"
        width={400}
        height={300}
        src="/images/home/moment/moment-item1.svg"
        className="size-full rounded-[0.67131rem] object-cover"
      />
    </div>
  );
}
