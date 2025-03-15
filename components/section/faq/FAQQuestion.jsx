"use client"
import { Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import { AccordionDemo } from '../alltour/tour-detail/Accordion'

export default function FAQQuestion() {
    const [ans, setAns] = useState(false)
    const [active,setActive] = useState(0)
  return (
    <div className='max-w-[87.5rem] mx-auto max-sm:px-5 py-16 max-sm:py-8 flex flex-col gap-[1.12rem] sm:gap-[3.56rem]'>
           <div  className="title flex flex-col w-full  gap-3 ">
                  <p className='sub2-regular sm:caption-regular !text-xl !font-bold !leading-[100%] !text-greyscaletext-80-main opacity-40'>FAQS</p>
              <h2 className='h2-bold !text-greyscaletext-80-main max-sm:!text-[2rem]'>QUESTIONS ? LOOK HERE</h2>
              </div>
          <p className='body1-bold !text-greyscaletext-40 w-[38.8125rem] max-w-full'>Experience the raw beauty of Hà Giang with our immersive travel adventures. From rugged mountain landscapes to vibrant ethnic cultures, Hà Giang offers a truly unique and authentic experience........</p>
          
          <div className="questions max-sm:flex max-sm:overflow-x-scroll sm:grid sm:grid-cols-4   gap-[1.125rem]">
              {Array.from({ length: 5 }).map((_, index) =>
                  <div key={index} onMouseEnter={() => {
                  setAns(true)
                 setActive(index)
             }} onMouseLeave={() => {
                  setAns(false)
                 setActive(index)
             }} className={` sm:col-span-1  sm:overflow-hidden w-[16.8125rem] h-[16.75rem]  sm:w-full sm:h-[21.75rem]  shrink-0 rounded-3xl ${ans && active === index ? " bg-greyscaletext-5 opacity-100": " bg-[#F8EAE4] opacity-100"}   duration-500 ease-in-out p-8 relative`}>
                  <div className="w-full h-full flex flex-col justify-between">
                      <div className="plus w-full flex justify-end">
                          <div onClick={() => {
                  setAns(true)
                 setActive(index)
             }} className={`rounded-md bg-orange-normal ${ans && active === index ? "transform translate-x-14 opacity-0":""} w-fit h-fit p-2 sm:p-3 flex justify-center items-center duration-500 ease-in-out cursor-pointer`}>
                          <Plus className='w-4 h-4   ' color='#fff' />
                          </div>
                      </div>
                      <p className={`sub2-medium ${ans && active === index ? "transform translate-y-14 opacity-0":""} !text-[2.75rem] max-sm:!text-[2rem] !text-greyscaletext-80-main duration-500 ease-in-out`}>What is excluded?</p>
                  </div>
                  <div className={`absolute w-full h-full top-0 left-0 p-8 flex flex-col gap-3 sm:gap-6  ${ans && active === index ? "opacity-100" : "opacity-0"} duration-500 ease-in-out`}>
                      <X className="w-3 h-3 absolute top-8 right-8 cursor-pointer" color={ "#6a6a6a "} onClick={() => {
                  setAns(false)
                 setActive(index)
             }}/>
                      <strong className={`sub2-medium !text-[1.125rem] !text-greyscaletext-80-main`}>What is excluded?</strong>
                  <p className={`body1-regular !text-greyscaletext-40 overflow-y-scroll`}>Included: Experienced tour guide Bike rentals (semi-automatic or manual) Fuel for the bikes Accommodation (private rooms available) Meals (breakfast, lunch, and dinner) Entrance fees to attractions Protective gear (helmet, knee, and elbow pads)</p>
                  </div>
                  </div>
              )}
              
          </div>
          <div className="asked">
              <h2 className='h2-bold-tripsan !text-greyscaletext-80-main !text-[2.5rem] max-sm:!text-[1.5rem]  !font-bold'>Frequently asked Questions</h2>
              <div className='mt-[2.81rem]'>
                  <AccordionDemo/>
              </div>
          </div>

    </div>
  )
}
