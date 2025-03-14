"use client"
import React, { useRef } from 'react'
import TestM from '../../../common/TestM'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import NumberInput from './CusINum';

export default function BookTour() {
    const commit = useRef(null)


    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data); // Handle form data
  };
  return (
    <div ref={commit} className='relative h-[800px] w-full px-20 min-h-[50rem] py-[3.18rem] sm:pt-[11rem] sm:pb-24'>
          <TestM commit={commit} />
           <div  className="title flex flex-col max-sm:w-[16.04469rem] gap-3 translate-y-0 ">
                  <p className='sub2-regular sm:caption-regular !text-xl !font-bold !leading-[100%] !text-greyscaletext-0 opacity-40'>EASY WITH HONG HA TRAVEL</p>
                  <h2 className='h3-bold sm:h2-bold !text-greyscaletext-0'>ONLINE BOOKING</h2>
          </div>
          <div className="form relative">
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 space-y-6 bg-white rounded-3xl p-8 min-w-[54.1875rem] ">
      <div className="space-y-4 flex gap-3 items-center">
        <span className='sub2-bold !mb-0 !text-greyscaletext-80-main'>Type of tour :</span>
        <span className='body1-regular !text-grey-50'>Ha Giang Loop tour: Itinerary in 3 Days 4 Nights</span>
      </div>
      <div className="space-y-4">
                     <div className="flex items-center justify-between border-b pb-2">
        <div className="sub2-regular text-greyscaletext-60 ">4 days of self-driving</div>
        <div className="flex items-center gap-3">
                              <div className="sub2-bold !text-greyscaletext-40">$215</div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18" viewBox="0 0 2 18" fill="none">
  <path d="M1 1L1 17" stroke="#D9D9D9" strokeLinecap="round"/>
</svg>
            <div className="flex items-center space-x-2">
                <div className="sub2-regular !text-greyscaletext-60">Pax</div>
                <div className="flex items-center  rounded px-2 py-1">
                    <NumberInput/>
                </div>
                              </div>
                              
                          </div>
            </div>
            <div className="hr bg-[#D9D9D9] w-full h-[0.0625rem] mt-[0.75rem]">
                                          
                                      </div>
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
          </div>
    </div>
  )
}
