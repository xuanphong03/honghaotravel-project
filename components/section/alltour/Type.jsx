import React from 'react';
import CheckboxList from './CheckboxList.';

export default function Type() {
  return (
    <div className="type bg-bg-elevation-30 rounded-3xl py-[4.19rem] max-md:hidden max-md:px-5">
      <div className="mx-auto max-w-[87.5rem]">
        <div className="type-box relative h-[75rem] w-fit">
          <div className="bg-greyscaletext-0 sticky top-0 h-[15.8125rem] w-[20.75rem] rounded-2xl p-[1.9rem]">
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
      </div>
    </div>
  );
}
