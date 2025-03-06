import React from 'react'

export default function AboutData({exp, cl1, cl2}) {
  return (
      <div className={ `  max-sm:w-[12.5rem] max-sm:h-[5.56rem] z-10 flex flex-col ${cl1} `}>
          <p className={`text-exp max-sm:!text-[3.5rem] sm:w-[26.25rem]  ${cl2}`}>{ exp.text}</p>
          <div className='about-notice w-fit max-sm:!text-[0.875rem]'>
              <span>{ exp.notice}</span>
          </div>
    </div>
  )
}
