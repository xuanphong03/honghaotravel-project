import Image from "next/image";

export default function CarouselMobileItem() {
  return (
    <div className="mx-[0.25rem] item_slide w-[23.83063rem] flex-shrink-0 h-[14.18094rem] relative group md:w-[31.83063rem] md:h-[20.18094rem]">
      <Image
        alt="demo"
        width={400}
        height={300}
        src="/images/home/moment/moment-item1.svg"
        className="object-cover size-full rounded-[0.67131rem]"
      />
    </div>
  );
}
