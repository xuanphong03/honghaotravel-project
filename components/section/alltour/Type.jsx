import React from 'react'
import CheckboxList from './CheckboxList.'

export default function Type() {
  return (
    <div className='type bg-bg-elevation-30 rounded-3xl py-[4.19rem] max-md:px-5 max-md:hidden'>
      <div className='max-w-[87.5rem] mx-auto'>
 <div className="type-box bg-greyscaletext-0 p-[1.9rem] w-[20.75rem] h-[15.8125rem] rounded-2xl">
              <div className="type-box-sub flex flex-col gap-5">
                  <p className='sub1-bold'>TYPE OF TOUR</p>
              <div className='bg-bg-greyscaletext-10 h-[0.0625rem]'/>
                  <div className="box">
                      <CheckboxList/>
                  </div>
                  <div className="pagination">
                    
                  </div>
              </div>
      </div>
      </div>
         
    </div>
  )
}
