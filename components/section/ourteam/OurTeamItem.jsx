import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function OurTeamItem({ name, image, role, exp, desc }) {
  return (
    <article className="ourteam-item relative group !w-full !h-full pb-[0.6875rem] flex flex-col gap-[0.69rem] items-center bg-white rounded-[1.5rem] shadow-md border border-solid border-gray-200 overflow-hidden">
      <div className="size-[4rem] absolute top-[1.5rem] right-[1.5rem] z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-700">
        <Image
          alt="Hong Hao Travel"
          width={50}
          height={50}
          className="size-full absolute inset-0 object-cover animate-spin-slow"
          src="/images/common/hong-hao-travel-circle.png"
        />
        <Image
          alt="Hong Hao Travel"
          width={50}
          height={50}
          className="relative size-full object-cover"
          src="/images/common/map-xoay.png"
        />
      </div>
      <div className="absolute top-[1.5rem] right-[1.5rem] z-[1]"></div>
      <div className="h-[24rem] w-full group-hover:h-[20rem] transition-all duration-700">
        <div className="max-md:w-[17.7875rem] w-[17.6875rem] h-[24.125rem] max-md:h-[21.83156rem] group-hover:h-[20.3125rem] duration-500 ease-linear rounded-3xl overflow-hidden">
          <Image
            width={300}
            height={400}
            alt="Hong Hao Travel"
            src={image}
            className="w-full object-cover h-full scale-105 group-hover:scale-100 transition-all duration-700"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[0.25rem]">
        <h4 className="text-base not-italic leading-[120%] tracking-[0.0125rem] text-center text-orange-normal text-[1rem] font-bold">
          {name}
        </h4>
        <div className="flex flex-row items-center gap-[0.75rem] text-[0.875rem] leading-[1.2] tracking-[0.00875rem]">
          <p>{role}</p>
          <span className="inline-block size-1 rounded-full bg-Gray-Scale-80"></span>
          <p>{exp}</p>
        </div>
      </div>
      <p className="custom_scrollbar_v2 w-[15.75rem] mx-auto h-[4rem] overflow-y-auto text-xs text-center leading-[1.2] translate-y-[2rem] group-hover:translate-y-0 transition-all duration-700">
        {desc}
      </p>
    </article>
  );
}

OurTeamItem.propTypes = {};

export default OurTeamItem;
