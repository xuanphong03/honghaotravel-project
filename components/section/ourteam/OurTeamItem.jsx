import Image from 'next/image';
import PropTypes from 'prop-types';

function OurTeamItem({ name, image, role, exp, desc }) {
  return (
    <article className="ourteam-item group relative flex !h-full !w-full flex-col items-center gap-[0.69rem] overflow-hidden rounded-[1.5rem] border border-solid border-gray-200 bg-white pb-[0.6875rem] shadow-md">
      <div className="invisible absolute top-[1.5rem] right-[1.5rem] z-[1] size-[4rem] opacity-0 transition-all duration-700 group-hover:visible group-hover:opacity-100">
        <Image
          alt="Hong Hao Travel"
          width={50}
          height={50}
          className="animate-spin-slow absolute inset-0 size-full object-cover"
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
      <div className="h-[24rem] w-full transition-all duration-700 group-hover:h-[20rem]">
        <div className="h-[24.125rem] w-[17.6875rem] overflow-hidden rounded-3xl duration-500 ease-linear group-hover:h-[20.3125rem] max-md:h-[21.83156rem] max-md:w-[17.7875rem]">
          <Image
            width={300}
            height={400}
            alt="Hong Hao Travel"
            src={image}
            className="h-full w-full scale-105 object-cover transition-all duration-700 group-hover:scale-100"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[0.25rem]">
        <h4 className="text-orange-normal text-center text-base text-[1rem] leading-[120%] font-bold tracking-[0.0125rem] not-italic">
          {name}
        </h4>
        <div className="flex flex-row items-center gap-[0.75rem] text-[0.875rem] leading-[1.2] tracking-[0.00875rem]">
          <p>{role}</p>
          <span className="bg-Gray-Scale-80 inline-block size-1 rounded-full"></span>
          <p>{exp}</p>
        </div>
      </div>
      <p className="custom_scrollbar_v2 mx-auto h-[4rem] w-[15.75rem] translate-y-[2rem] overflow-y-auto text-center text-xs leading-[1.2] transition-all duration-700 group-hover:translate-y-0">
        {desc}
      </p>
    </article>
  );
}

OurTeamItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  role: PropTypes.string,
  exp: PropTypes.string,
  desc: PropTypes.string,
};

export default OurTeamItem;
