import Image from 'next/image';

export default function BlogRelatedItem({ title, createdDate, tag }) {
  return (
    <article className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[0.75rem] md:rounded-2xl">
      <Image
        alt="Hong Hao Travel"
        src="/images/blog-detail/related-article.png"
        width={500}
        height={500}
        className="z-10 size-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute right-0 bottom-0 left-0 h-[18.8125rem] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,#000_100%)]"></div>
      {tag && (
        <div className="absolute top-[1.5rem] left-[1.5rem] z-[12] inline-flex flex-col items-center justify-center rounded-[2.0625rem] bg-[#FAF1EE] px-[1.1875rem] py-2.5 text-sm leading-[1.2] font-normal tracking-[0.00875rem] text-[#030922] not-italic max-md:top-[1.12rem] max-md:left-[1.12rem] max-md:text-[0.75rem] max-md:tracking-[0.00375rem]">
          <div className="w-max">{tag}</div>
        </div>
      )}
      <div className="absolute bottom-[1.87rem] left-[1.87rem] z-[12] flex flex-col gap-y-[0.5rem] max-md:bottom-[1.12rem] max-md:left-[1.12rem]">
        <h4 className="flex flex-col justify-center text-xl leading-[120%] font-extrabold text-[#f1f1f1] not-italic max-md:line-clamp-2 max-md:text-[1rem]">
          {title}
        </h4>
        <p className="flex flex-col justify-center text-xs leading-[120%] font-normal tracking-[0.00375rem] text-[#f1f1f1] not-italic">
          {createdDate}
        </p>
      </div>
    </article>
  );
}
