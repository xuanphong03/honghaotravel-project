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

const arrPost = [{
    id: 1,
    url: "/images/blog/post1.png",
    tag:"Article",
    title: "Seychelles Hotel Guide; Advice from the Experts",
    date:"Ngày 24, tháng 5, 2024"
},
{
    id: 2,
    url: "/images/blog/post2.png",
    tag:"Travel",
    title: "Seychelles Hotel Guide; Advice from the Experts",
    date:"Ngày 24, tháng 5, 2024"
    },
{
    id: 3,
    url: "/images/blog/post3.png",
    tag:"Destination",
    title: "Seychelles Hotel Guide; Advice from the Experts",
    date:"Ngày 24, tháng 5, 2024"
}
]

export default function OurBlogPost() {
  return (
    <div className="our-blog-post md:mt-[2.81rem] md:border-t-[1px] md:border-solid md:border-gray-scale-5 max-md:px-5">
      <div className="max-w-[89.9375rem] mx-auto">
        <div className="our-blog-post-pagination mt-6 md:mt-3 md:mb-[3.94rem] flex w-full justify-center items-center gap-[0.62rem] md:gap-[0.94rem] overflow-x-scroll no-scrollbar">
          {arrPaginate.map((item) => (
            <Button
              className={
                'our-blog group max-md:!px-8 max-md:!py-[0.69rem] !font-bold hover:cursor-pointer hover:!bg-orange-normal__hover transition-colors duration-500 ease-in-out'
              }
              key={item.id}
            >
              <span className="text-blog-bold group-hover:!text-greyscaletext-0 max-md:!text-[0.75rem] ">
                {item.content}
              </span>
            </Button>
          ))}
        </div>
        <div className="max-md:hidden our-blog-post-banner w-full h-[43.6875rem] rounded-[0.375rem] overflow-hidden relative flex items-end hover:cursor-pointer">
          <Image
            src={'/images/alltour/banner.jpeg'}
            alt="anh2"
            fill
            className="object-cover opacity-[0.8457] hover:scale-110 duration-500 ease-in-out"
                  />
                  <article className="5-min-read md:w-[29.89381rem] md:h-[22.17188rem] bg-green-darker p-[3.75rem] relative z-10">
                      <div className='post-btn !w-fit sub2-regular !text-greyscaletext-80-main'>ARTICLE</div>
                      <p className='post-btn-p mt-[1.19rem] mb-[2.43rem] overflow-y-scroll h-[7.68rem]'>Seychelles Hotel Guide;
Advice from the Experts</p>
                      <span className='post-btn-span uppercase'>5 min read</span>
                      <div className='post-btn !w-fit absolute -right-[4.109rem] top-[1.8rem] rotate-90 !rounded-md !rounded-b-none sub2-regular !text-greyscaletext-80-main'>ARTICLE</div>
            </article>
        </div>
        <div className="our-blog-posts grid grid-cols-2 gap-4 md:gap-[1.44rem] mt-5 md:mt-[2.62rem]">
                 {arrPost.map((item) =>  <BlogPostItem key={item.id} data={item} />)}
              </div>
              <div className="our-blog-post-pagination mt-8">
                  <PaginationCus/>
              </div>
      </div>
    </div>
  );
}