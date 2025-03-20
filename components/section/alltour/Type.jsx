import React from 'react';
import CheckboxList from './CheckboxList.';
import CardVertical from '@/components/common/card/CardVertical';

export default function Type() {
  return (
    <div className="type md:bg-bg-elevation-30 rounded-3xl pb-12 max-md:px-3 md:py-[4.19rem]">
      <div className="mx-auto flex max-w-[87.5rem] justify-between max-md:flex-col">
        <div className="type-box relative w-full max-md:hidden md:w-[22%]">
          <div className="bg-greyscaletext-0 sticky top-0 h-[15.8125rem] w-full rounded-2xl p-[1.9rem]">
            <div className="type-box-sub flex flex-col gap-5">
              <p className="sub1-bold">TYPE OF TOUR</p>
              <div className="bg-bg-greyscaletext-10 h-[0.0625rem]" />
              <div className="box">
                <CheckboxList />
              </div>
              <div className="pagination"></div>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 max-md:mt-5 md:w-[75%] md:grid-cols-3 md:gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="relative col-span-1 h-[15rem] w-[full] overflow-hidden rounded-xl md:h-[29.5625rem] md:rounded-3xl"
            >
              <CardVertical />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
