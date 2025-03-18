import React from 'react'
import OurBlogHead from './OurBlogHead'
import OurBlogPost from './OurBlogPost'

export default function OurBlog() {
  return (
    <div className='pt-[2.44rem] pb-24 md:pt-[4.38rem] md:pb-28 '>
      <OurBlogHead />
      <OurBlogPost/>
    </div>
  )
}
