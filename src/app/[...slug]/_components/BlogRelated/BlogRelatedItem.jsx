import Image from "next/image";
import React from "react";

export default function BlogRelatedItem({ title, createdDate, tag }) {
  return (
    <article className="rounded-[0.75rem] md:rounded-2xl relative group overflow-hidden cursor-pointer w-full h-full">
      <Image
        alt="Hong Hao Travel"
        src="/images/blog-detail/related-article.png"
        width={500}
        height={500}
        className="transition-transform z-10 duration-500 size-full group-hover:scale-110 object-cover"
      />
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[18.8125rem]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
        }}
      ></div>
      {tag && (
        <div className="inline-flex z-[12] absolute max-md:top-[1.12rem] max-md:left-[1.12rem] top-[1.5rem] left-[1.5rem] bg-[#FAF1EE] text-[#030922] max-md:text-[0.75rem] text-sm not-italic font-normal leading-[1.2] max-md:tracking-[0.00375rem] tracking-[0.00875rem] flex-col justify-center items-center py-2.5 px-[1.1875rem] rounded-[2.0625rem]">
          <div className="w-max">{tag}</div>
        </div>
      )}
      <div className="absolute z-[12] bottom-[1.87rem] max-md:bottom-[1.12rem] max-md:left-[1.12rem] left-[1.87rem] flex flex-col gap-y-[0.5rem]">
        <h4 className="flex max-md:line-clamp-2 flex-col justify-center text-[#f1f1f1] text-xl max-md:text-[1rem] not-italic font-extrabold leading-[120%]">
          {title}
        </h4>
        <p className="flex  flex-col justify-center text-[#f1f1f1] text-xs not-italic font-normal leading-[120%] tracking-[0.00375rem]">
          {createdDate}
        </p>
      </div>
    </article>
  );
}
