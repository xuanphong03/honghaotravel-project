import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogRelatedList from "./BlogRelatedList";

const getRelatedBlogList = async () => {
  const fakeItemData = {
    id: 1,
    tag: "Article",
    title: "Seychelles Hotel Guide; Advice from the Experts",
    createdDate: "Ngày 24, tháng 5, 2024",
  };
  return [...Array(5)].map((_, index) => ({
    ...fakeItemData,
    id: fakeItemData.id + index,
  }));
};

export default async function BlogRelated() {
  const blogs = await getRelatedBlogList();
  return (
    <section
      id="blog-related"
      className="relative md:mt-[4.5rem] md:h-[60.18244rem] max-md:h-[31.1875rem] z-10"
    >
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        src="/images/blog-detail/related-bg-mount.png"
        className="z-[-1] max-md:hidden absolute inset-0 w-full h-full text-transparent"
      />
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        src="/images/blog-detail/related-bg-mount-mobi.png"
        className="w-full z-[-1] h-[36.1875rem] absolute bottom-[-1rem] md:hidden"
      />
      <div className="xl:w-[87.5rem] mx-auto flex flex-col items-center">
        <p className="max-md:mt-[1rem] mt-[6rem] inline-flex z-10 justify-center items-center gap-2.5 px-[2.125rem] py-[0.8125rem]  max-md:py-[0.5rem] max-md:px-[1.25rem] rounded-[62.5rem]   text-white bg-[rgba(252,248,247,0.05)] text-center max-md:text-[0.75rem] text-[0.78906rem] not-italic font-normal max-md:leading-[1.2] leading-4 tracking-[0.03125rem] uppercase   ">
          OUR BLOG
        </p>
        <div className="mt-[3.3rem] max-md:w-full max-md:mt-[1.45rem] flex z-10 items-center max-md:justify-between max-md:space-x-[1.25rem] space-x-[1.75rem]">
          <div className="flex items-center max-md:space-x-[0.56rem] space-x-[1.875rem]">
            <div className="max-md:w-[2rem] w-[14.25813rem] h-[0.0625rem] bg-[rgba(217,217,217,0.28)]"></div>
          </div>
          <h2 className="font-londrina-solid text-[#F1F1F1]/80 text-[2rem] md:text-[3.5rem] max-md:font-black max-md:leading-[1.2] max-md:tracking-[0.005rem] opacity-80">
            Related Articles
          </h2>
          <div className="flex items-center max-md:space-x-[0.56rem] space-x-[1.875rem]">
            <div className="max-md:w-[2rem] w-[14.25813rem] h-[0.0625rem] bg-[rgba(217,217,217,0.28)]"></div>
          </div>
        </div>
        <div className="flex justify-center relative z-20 mt-[1.89rem] md:mt-[3.8rem] w-full max-md:px-[1rem] md:w-[87.5rem] mx-auto">
          <BlogRelatedList blogs={blogs} />
        </div>
        <div className="mt-[1.97rem] md:mt-[3.06rem]">
          <Link
            href="#"
            className="group inline-flex h-[3.5rem] px-[2rem] py-[1rem] items-center justify-center gap-[0.5rem] rounded-[0.5rem] border border-solid border-orange-normal bg-orange-normal  hover:border-orange-normal__hover hover:bg-orange-normal__hover transition-colors duration-500"
          >
            <span className="text-white text-center text-[0.875rem] font-bold leading-[1.2] uppercase">
              See all blogs
            </span>
            <Image
              alt="Hong Hao Travel"
              width={20}
              height={20}
              src="/images/arrow/arrow-right.svg"
              className="group-hover:translate-x-1/2 transition-transform duration-500 w-[0.75rem] h-[0.65625rem] shrink-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
