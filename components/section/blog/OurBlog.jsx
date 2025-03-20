'use client';
import React, { useRef } from 'react';
import OurBlogHead from './OurBlogHead';
import OurBlogPost from './OurBlogPost';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
export default function OurBlog() {
  const container = useRef(null);
  return (
    <div ref={container} className="py-[2.44rem] md:pt-[4.38rem] md:pb-28">
      <OurBlogHead ref={container} />
      <OurBlogPost ref={container} />
    </div>
  );
}
