import Image from 'next/image';
import React from 'react';
import BlogPostItem from './BlogPostItem';
import { Button } from '@/components/ui/button';
import { PaginationCus } from './PaginationCus';

const arrPaginate = [
  {
    id: 1,
    content: 'All',
  },
  {
    id: 2,
    content: 'Article',
  },
  {
    id: 3,
    content: 'Destination',
  },
  {
    id: 4,
    content: 'Travel',
  },
];

const arrPost = [
  {
    id: 1,
    url: '/images/blog/post1.png',
    tag: 'Article',
    title: 'Seychelles Hotel Guide; Advice from the Experts',
    date: 'Ngày 24, tháng 5, 2024',
  },
  {
    id: 2,
    url: '/images/blog/post2.png',
    tag: 'Travel',
    title: 'Seychelles Hotel Guide; Advice from the Experts',
    date: 'Ngày 24, tháng 5, 2024',
  },
  {
    id: 3,
    url: '/images/blog/post3.png',
    tag: 'Destination',
    title: 'Seychelles Hotel Guide; Advice from the Experts',
    date: 'Ngày 24, tháng 5, 2024',
  },
];

export default function OurBlogPost() {
  return (
    <div className="our-blog-post md:border-gray-scale-5 max-md:px-5 md:mt-[2.81rem] md:border-t-[1px] md:border-solid">
      <div className="mx-auto max-w-[89.9375rem]">
        <div className="our-blog-post-pagination no-scrollbar mt-6 flex w-full items-center justify-center gap-[0.62rem] overflow-x-scroll md:mt-3 md:mb-[3.94rem] md:gap-[0.94rem]">
          {arrPaginate.map((item) => (
            <Button
              className={`our-blog group ${item.id === 1 ? '!bg-orange-normal__hover' : ''} hover:!bg-orange-normal__hover !font-bold transition-colors duration-500 ease-in-out hover:cursor-pointer max-md:!px-8 max-md:!py-[0.69rem]`}
              key={item.id}
            >
              <span
                className={`text-blog-bold ${item.id === 1 ? '!text-greyscaletext-0' : ''} group-hover:!text-greyscaletext-0 max-md:!text-[0.75rem]`}
              >
                {item.content}
              </span>
            </Button>
          ))}
        </div>
        <div className="our-blog-post-banner relative z-0 flex h-[43.6875rem] w-full items-end overflow-hidden rounded-[0.375rem] hover:cursor-pointer max-md:hidden">
          <Image
            src={'/images/alltour/banner.jpeg'}
            alt="anh2"
            fill
            className="object-cover opacity-[0.8457] duration-500 ease-in-out hover:scale-110"
          />
          <article className="5-min-read bg-green-darker relative z-10 p-[3.75rem] md:h-[22.17188rem] md:w-[29.89381rem]">
            <div className="post-btn sub2-regular !text-greyscaletext-80-main !w-fit">
              ARTICLE
            </div>
            <p className="post-btn-p mt-[1.19rem] mb-[2.43rem] h-[7.68rem] overflow-y-scroll">
              Seychelles Hotel Guide; Advice from the Experts
            </p>
            <span className="post-btn-span uppercase">5 min read</span>
            <div className="post-btn sub2-regular !text-greyscaletext-80-main absolute top-[1.8rem] -right-[4.109rem] !w-fit rotate-90 !rounded-md !rounded-b-none">
              ARTICLE
            </div>
          </article>
        </div>
        <div className="our-blog-posts mt-5 grid grid-cols-2 gap-4 md:mt-[2.62rem] md:gap-[1.44rem]">
          {arrPost.map((item) => (
            <BlogPostItem key={item.id} data={item} />
          ))}
        </div>
        <div className="our-blog-post-pagination mt-8">
          <PaginationCus />
        </div>
      </div>
    </div>
  );
}
