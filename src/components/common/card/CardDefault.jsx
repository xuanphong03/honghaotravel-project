import Image from 'next/image';
import PropTypes from 'prop-types';

function CardDefault({ data }) {
  return (
    <article className="group relative mb-[2rem] h-[23.33956rem] w-[16.8755rem] shrink-0 overflow-hidden rounded-[0.75rem] bg-white pb-[1.5rem] text-white md:h-[43.33956rem] md:w-[36rem] lg:h-[34.375rem] lg:w-[47.3125rem] lg:rounded-[1.5rem]">
      <Image
        width={800}
        height={550}
        alt={data?.name || ''}
        src={data?.background || ''}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)',
        }}
      ></div>
      <div className="absolute bottom-[1rem] left-[1rem] flex flex-col items-start gap-[0.75rem] lg:bottom-[1.5rem] lg:left-[1.5rem]">
        <h4 className="text-[1rem] leading-[120%] font-black group-hover:underline md:text-[3rem] lg:text-[1.5rem]">
          {data?.name}
        </h4>
        <ul className="hidden lg:block">
          <li className="flex items-center gap-[0.25rem] text-[1rem] leading-[1.5] font-bold">
            Accommodation:{' '}
            <span className="leading-[1.2] font-normal tracking-[0.0125rem] text-[#f1f1f1]">
              {data?.accommodation}
            </span>
          </li>
          <li className="flex items-center gap-[0.25rem] text-[1rem] leading-[1.5] font-bold">
            Motorbike:{' '}
            <span className="leading-[1.2] font-normal tracking-[0.0125rem] text-[#f1f1f1]">
              {data?.motorbike}
            </span>
          </li>
          <li className="flex items-center gap-[0.25rem] text-[1rem] leading-[1.5] font-bold">
            Tour guide:{' '}
            <span className="leading-[1.2] font-normal tracking-[0.0125rem] text-[#f1f1f1]">
              {data?.tourGuide}
            </span>
          </li>
          <li className="flex items-center gap-[0.25rem] text-[1rem] leading-[1.5] font-bold">
            Transport:{' '}
            <span className="leading-[1.2] font-normal tracking-[0.0125rem] text-[#f1f1f1]">
              {data?.transport}
            </span>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-[3rem] left-[1rem] flex items-center gap-[0.5rem] text-right transition-transform duration-500 group-hover:-translate-y-full lg:right-[1.785rem] lg:bottom-[1.875rem] lg:left-auto lg:block">
        <p className="text-[1rem] leading-[1.2] font-bold tracking-[0.0125rem] text-white/60">
          From to
        </p>
        <p className="text-[1rem] leading-[1.2] font-bold lg:text-[3rem]">
          ${data?.price || 0}
        </p>
      </div>
      <button className="bg-orange-normal absolute right-[1.5rem] bottom-[1.875rem] inline-flex translate-x-[200%] cursor-pointer items-center rounded-[0.5rem] border border-solid border-[#da4b19] px-[2rem] py-[1rem] text-[0.875rem] font-extrabold uppercase transition-transform duration-500 group-hover:translate-0">
        <span>Detail</span>
        <Image
          alt="Hong Hao Travel"
          width={20}
          height={20}
          src="/images/arrow/arrow-right.svg"
          className="h-[0.65625rem] w-[0.75rem] shrink-0 transition-transform duration-500 group-hover:translate-x-1/2"
        />
      </button>
      <button className="absolute inline-flex items-center gap-[0.5rem] rounded-[1.5rem] border border-solid border-white/50 bg-white/20 px-[0.75rem] py-[0.25rem] backdrop-blur-[2px] max-lg:bottom-[5rem] max-lg:left-[1rem] md:py-[0.375rem] lg:top-[2rem] lg:right-[1.125rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#E64827"
          />
          <path
            d="M15.7106 15.9298C15.5806 15.9298 15.4506 15.8998 15.3306 15.8198L12.2306 13.9698C11.4606 13.5098 10.8906 12.4998 10.8906 11.6098V7.50977C10.8906 7.09977 11.2306 6.75977 11.6406 6.75977C12.0506 6.75977 12.3906 7.09977 12.3906 7.50977V11.6098C12.3906 11.9698 12.6906 12.4998 13.0006 12.6798L16.1006 14.5298C16.4606 14.7398 16.5706 15.1998 16.3606 15.5598C16.2106 15.7998 15.9606 15.9298 15.7106 15.9298Z"
            fill="#FEEEE8"
          />
        </svg>
        <span className="text-[1rem] leading-[1.2] tracking-[0.0125rem] text-white/80">
          {data?.time}
        </span>
      </button>
    </article>
  );
}

CardDefault.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardDefault;
