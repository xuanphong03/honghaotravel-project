import React from 'react';

export default function AboutData({ exp, cl1, cl2, ref }) {
  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-duration="900"
      className={`space-y-[0.75rem] ${cl1} translate-y-12 opacity-0`}
    >
      <h2
        className={`max-md:!text-[3.5rem] md:w-[26.25rem] ${cl2} text-exp relative`}
      >
        {exp.text}
      </h2>
      <div className="about-notice flex w-fit flex-col items-start gap-4 rounded-3xl bg-[rgba(255,255,255,0.15)] px-3 py-1.5 backdrop-blur-lg max-md:!text-[0.875rem]">
        {exp.notice}
      </div>
    </div>
  );
}
