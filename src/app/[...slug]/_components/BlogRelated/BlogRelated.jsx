import Image from 'next/image';
import Link from 'next/link';
import BlogRelatedList from './BlogRelatedList';
import { v4 as uuidv4 } from 'uuid';

const getRelatedBlogList = async () => {
  const fakeItemData = {
    id: 1,
    tag: 'Article',
    title: 'Seychelles Hotel Guide; Advice from the Experts',
    createdDate: 'Ngày 24, tháng 5, 2024',
  };
  return [...Array(5)].map(() => ({
    ...fakeItemData,
    id: uuidv4(),
  }));
};

export default async function BlogRelated() {
  const blogs = await getRelatedBlogList();
  return (
    <section
      id="blog-related"
      className="relative z-10 max-md:h-[31.1875rem] md:mt-[4.5rem] md:h-[60.18244rem]"
    >
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        src="/images/blog-detail/related-bg-mount.png"
        className="absolute inset-0 z-[-1] h-full w-full text-transparent max-md:hidden"
      />
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        src="/images/blog-detail/related-bg-mount-mobi.png"
        className="absolute bottom-[-1rem] z-[-1] h-[36.1875rem] w-full md:hidden"
      />
      <div className="mx-auto flex flex-col items-center xl:w-[87.5rem]">
        <p className="z-10 mt-[6rem] inline-flex items-center justify-center gap-2.5 rounded-[62.5rem] bg-[rgba(252,248,247,0.05)] px-[2.125rem] py-[0.8125rem] text-center text-[0.78906rem] leading-4 font-normal tracking-[0.03125rem] text-white uppercase not-italic max-md:mt-[1rem] max-md:px-[1.25rem] max-md:py-[0.5rem] max-md:text-[0.75rem] max-md:leading-[1.2]">
          OUR BLOG
        </p>
        <div className="z-10 mt-[3.3rem] flex items-center space-x-[1.75rem] max-md:mt-[1.45rem] max-md:w-full max-md:justify-between max-md:space-x-[1.25rem]">
          <div className="flex items-center space-x-[1.875rem] max-md:space-x-[0.56rem]">
            <div className="h-[0.0625rem] w-[14.25813rem] bg-[rgba(217,217,217,0.28)] max-md:w-[2rem]"></div>
          </div>
          <h2 className="font-londrina-solid text-[2rem] text-[#F1F1F1]/80 opacity-80 max-md:leading-[1.2] max-md:font-black max-md:tracking-[0.005rem] md:text-[3.5rem]">
            Related Articles
          </h2>
          <div className="flex items-center space-x-[1.875rem] max-md:space-x-[0.56rem]">
            <div className="h-[0.0625rem] w-[14.25813rem] bg-[rgba(217,217,217,0.28)] max-md:w-[2rem]"></div>
          </div>
        </div>
        <div className="relative z-20 mx-auto mt-[1.89rem] flex w-full justify-center max-md:px-[1rem] md:mt-[3.8rem] md:w-[87.5rem]">
          <BlogRelatedList blogs={blogs} />
        </div>
        <div className="mt-[1.97rem] md:mt-[3.06rem]">
          <Link
            href="#"
            className="group border-orange-normal bg-orange-normal hover:border-orange-normal__hover hover:bg-orange-normal__hover inline-flex h-[3.5rem] items-center justify-center gap-[0.5rem] rounded-[0.5rem] border border-solid px-[2rem] py-[1rem] transition-colors duration-500"
          >
            <span className="text-center text-[0.875rem] leading-[1.2] font-bold text-white uppercase">
              See all blogs
            </span>
            <Image
              alt="Hong Hao Travel"
              width={20}
              height={20}
              src="/images/arrow/arrow-right.svg"
              className="h-[0.65625rem] w-[0.75rem] shrink-0 transition-transform duration-500 group-hover:translate-x-1/2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
