import Image from 'next/image'
import React from 'react'
import OverlayAnimate from '../../common/OverlayAnimate'

export default function BlogPostItem({data}) {
  return (
    <article className='group col-span-2 md:col-span-1 h-[15.3125rem] md:h-[25.8rem] rounded-xl overflow-hidden relative flex flex-col justify-between p-8 hover:cursor-pointer'>
      <Image src={data.url} alt="" fill className='object-cover absolute top-0 left-0 right-0 bottom-0 group-hover:scale-110 duration-500 ease-in-out -z-40'></Image>
      <div className="overlay absolute top-0 left-0 right-0 bottom-0 -z-10" style={{background:"linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #000 100%)"}}>
      </div>
      <div className='post-btn !w-fit uppercase sub2-regular !text-greyscaletext-80-main max-md:!px-[1.19rem] max-md:!py-[0.62rem] '>{ data.tag}</div>
      <div className='flex flex-col  gap-[0.31rem]'>
        <span className='h6-bold !text-greyscaletext-5'>{data.title}</span>
      <span className='caption-regular'>{ data.date}</span>
      </div>
    </article>
  )
}
