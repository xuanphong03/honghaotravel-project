
import Image from 'next/image'
import React from 'react'


export default function AboutL({ref}) {
  
  return (
      <div ref={ref} className='about-l relative  translate-y-[4.6875rem] z-20 opacity-0'>
          
          <div className='w-[20.098rem] sm:w-[58.19256rem] h-[7.42925rem] sm:h-[22.1875rem] shrink-0 relative z-10'>
              <Image src={"/images/about/h1.png"} alt="" fill  />
          </div>
          <div className="max-sm:mt-6 flex flex-col gap-[2.06rem] relative z-10">
              <p className='sub2-regular sm:body1-regular !text-greyscaletext-0 w-full sm:w-[52.3125rem]'>Ha Giang, nestled in the rugged mountains of northern Vietnam, beckons adventurers with its breathtaking scenery and vibrant cultural tapestry. From the towering peaks of the Dong Van Karst Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable journey through some of Vietnam's most awe-inspiring landscapes.</p>
              <div className="max-sm:hidden flex items-center gap-4 ">
                  <button className='flex items-center justify-center gap-2 btn-size-l btn-default btn-bold !text-greyscaletext-0 !font-bold'>
                      <span>BOOK NOW</span>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 12 12" fill="none" className='w-4 h-4 px-[0.125rem] py-[0.17188rem]'>
  <path d="M10.125 6H0" stroke="url(#paint0_linear_11183_20582)" strokeWidth="2"/>
  <g filter="url(#filter0_i_11183_20582)">
    <path d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z" fill="white"/>
  </g>
  <defs>
    <filter id="filter0_i_11183_20582" x="6" y="0.75" width="26" height="14.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="20" dy="4"/>
      <feGaussianBlur stdDeviation="50"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_11183_20582"/>
    </filter>
    <linearGradient id="paint0_linear_11183_20582" x1="4.53912" y1="6" x2="4.53912" y2="6.892" gradientUnits="userSpaceOnUse">
      <stop offset="0.31" stopColor="white"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
    </linearGradient>
  </defs>
                        </svg>
                  </button>
                  <button className='flex items-center justify-center gap-2 btn-size-l  btn-bold !text-greyscaletext-0 btn-line-white !font-bold'>
                      <span>ALL TOUR</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 px-[0.125rem] py-[0.17188rem]' viewBox="0 0 12 12" fill="none">
  <path d="M10.125 6H0" stroke="url(#paint0_linear_11183_20582)" strokeWidth="2"/>
  <g filter="url(#filter0_i_11183_20582)">
    <path d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z" fill="white"/>
  </g>
  <defs>
    <filter id="filter0_i_11183_20582" x="6" y="0.75" width="26" height="14.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="20" dy="4"/>
      <feGaussianBlur stdDeviation="50"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_11183_20582"/>
    </filter>
    <linearGradient id="paint0_linear_11183_20582" x1="4.53912" y1="6" x2="4.53912" y2="6.892" gradientUnits="userSpaceOnUse">
      <stop offset="0.31" stopColor="white"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
    </linearGradient>
  </defs>
                        </svg>
                  </button>
              </div>
          </div>
    </div>
  );
}
