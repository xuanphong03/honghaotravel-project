import React from 'react'

export default function AboutData({exp, cl1, cl2, ref}) {
  return (
    <div ref={ref} data-aos="fade-up" data-aos-duration="900" className={`  space-y-[0.75rem] ${cl1} opacity-0 translate-y-[4.6875rem]`}>
      <h2 className={`max-sm:!text-[3.5rem] sm:w-[26.25rem]  ${cl2} text-exp relative`}>{exp.text}</h2>
      <div className="about-notice w-fit max-sm:!text-[0.875rem] flex    flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg  px-3 py-1.5 rounded-3xl">{ exp.notice}</div>
    </div>
  )
}
