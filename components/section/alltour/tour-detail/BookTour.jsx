"use client"
import React, { useRef } from 'react'
import TestM from '../../../common/TestM'
import FormBookTour from './FormBookTour';

export default function BookTour() {
    const commit = useRef(null)


    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data); // Handle form data
  };
  return (
    <div className="w-full h-fit overflow-hidden sm:mb-12">
      <div ref={commit} className='relative h-fit w-full max-sm:px-5  max-sm:py-[3.18rem]  sm:pb-28  sm:mt-[20rem] sm:bg-[rgb(19,52,28)] '>
      <div className="max-sm:hidden ">
        <TestM commit={commit} />
          </div>
      <div className='sm:hidden'>
        
          </div>
          <div className="form relative w-full flex justify-center max-w-[87.5rem] mx-auto">
               <FormBookTour />
          </div>
    </div>
    </div>
  )
}
