'use client';
import React, { useRef } from 'react';
import TestM from '../../../common/TestM';
import FormBookTour from './FormBookTour';

export default function BookTour() {
  const commit = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data); // Handle form data
  };
  return (
    <div className="h-fit w-full overflow-hidden md:mb-16">
      <div
        ref={commit}
        className="relative h-fit w-full max-md:px-3 max-md:pt-[3.18rem] md:mt-[20rem] md:bg-[rgb(19,52,28)] md:pb-28"
      >
        <div className="max-md:hidden">
          <TestM commit={commit} />
        </div>
        <div className="md:hidden"></div>
        <div className="form relative mx-auto flex w-full max-w-[87.5rem] justify-center">
          <FormBookTour />
        </div>
      </div>
    </div>
  );
}
