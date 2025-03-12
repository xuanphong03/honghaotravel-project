import React from "react";
import Image from "next/image";

import PropTypes from "prop-types";
import "./ItemTour.css";

function ItemTour({ tag, title, content }) {
  return (
    <article id="item_tour" className="group relative w-full h-full">
      <Image
        alt="Hong Ha Travel"
        width={500}
        height={500}
        src="/images/destination/discover-item1.png"
        className="size-full object-cover scale-100 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black opacity-0 invisible group-hover:opacity-50 group-hover:visible transition-all duration-700"></div>
      {tag && (
        <div className="absolute top-[1.5rem] left-[1.5rem] z-[1]">
          <div className="overflow-hidden relative group-hover:bg-white/10 transition-colors duration-500 items-center justify-center rounded-[1.5rem] w-[9rem] h-[2.125rem] md:h-[2.375rem] inline-flex bg-[rgba(255,53,11,0.70)] backdrop-blur-[16px]">
            <span className="text-[0.875rem] font-bold tracking-[0.00875rem] leading-[1.2] text-white">
              {tag}
            </span>
            <div
              className="absolute left-[0rem] w-[3.80475rem] h-[5.10919rem] rotate-[-24.824deg] opacity-30 animation_skeleton"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%, rgba(255, 253, 253, 0.00) 100%)",
              }}
            ></div>
          </div>
        </div>
      )}
      <div className="absolute z-[1] left-[1.94rem] right-[1.94rem] bottom-[2.5rem] px-[1rem] py-[1.5rem] inline-flex flex-col group-hover:gap-[1rem] rounded-[1.5rem] bg-white/15 backdrop-blur-[16px]">
        <div className="flex items-center justify-between w-full">
          <span className="text-[1.25rem] line-clamp-3 md:line-clamp-1 md:text-[1.5rem] font-extrabold leading-[1.2] text-white">
            {title}
          </span>
          <div className="size-[1.5rem] md:size-[2rem] flex items-center justify-center arrow_animation">
            <Image
              alt="Hong Ha Travel"
              width={20}
              height={20}
              className="w-full h-full object-contain"
              src="/images/destination/arrow-animation.png"
            />
          </div>
        </div>
        <p className="group-hover:h-[6rem] duration-500 ease-in transition-all line-clamp-4 h-0 md:w-[23.5625rem] text-white text-base not-italic font-normal leading-[150%] tracking-[0.005rem]">
          {content}
        </p>
      </div>
    </article>
  );
}

ItemTour.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ItemTour;
