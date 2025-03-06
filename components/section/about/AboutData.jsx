import React from 'react'

export default function AboutData({exp, cl1, cl2, ref}) {
  return (
      <div ref={ref} className={ `  max-sm:w-[12.5rem] max-sm:h-[5.56rem] z-10 flex flex-col ${cl1} opacity-0 translate-y-[4.6875rem]`}>
          <p className={` max-sm:!text-[3.5rem] sm:w-[26.25rem]  ${cl2} text-exp`}>{ exp.text}</p>
          <div className='about-notice w-fit max-sm:!text-[0.875rem]'>
              <span>{ exp.notice}</span>
          </div>
    </div>
  )
}
