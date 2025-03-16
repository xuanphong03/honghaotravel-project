import Image from "next/image";
import PropTypes from "prop-types";

function CardDefault({ data }) {
  return (
    <article className="group relative mb-[2rem] h-[23.33956rem] w-[16.8755rem] md:h-[43.33956rem] md:w-[36rem] lg:w-[47.3125rem] lg:h-[34.375rem] shrink-0 rounded-[0.75rem] lg:rounded-[1.5rem] text-white bg-white pb-[1.5rem] overflow-hidden">
      <Image
        width={800}
        height={550}
        alt={data?.name || ""}
        src={data?.background || ""}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)",
        }}
      ></div>
      <div className="absolute left-[1rem] bottom-[1rem] lg:left-[1.5rem] lg:bottom-[1.5rem] flex flex-col gap-[0.75rem] items-start">
        <h4 className="group-hover:underline text-[1rem] md:text-[3rem] lg:text-[1.5rem] font-black leading-[120%]">
          {data?.name}
        </h4>
        <ul className="hidden lg:block">
          <li className="text-[1rem] font-bold leading-[1.5] flex items-center gap-[0.25rem]">
            Accommodation:{" "}
            <span className="text-[#f1f1f1] tracking-[0.0125rem] leading-[1.2] font-normal">
              {data?.accommodation}
            </span>
          </li>
          <li className="text-[1rem] font-bold leading-[1.5] flex items-center gap-[0.25rem]">
            Motorbike:{" "}
            <span className="text-[#f1f1f1] tracking-[0.0125rem] leading-[1.2] font-normal">
              {data?.motorbike}
            </span>
          </li>
          <li className="text-[1rem] font-bold leading-[1.5] flex items-center gap-[0.25rem]">
            Tour guide:{" "}
            <span className="text-[#f1f1f1] tracking-[0.0125rem] leading-[1.2] font-normal">
              {data?.tourGuide}
            </span>
          </li>
          <li className="text-[1rem] font-bold leading-[1.5] flex items-center gap-[0.25rem]">
            Transport:{" "}
            <span className="text-[#f1f1f1] tracking-[0.0125rem] leading-[1.2] font-normal">
              {data?.transport}
            </span>
          </li>
        </ul>
      </div>
      <div className="transition-transform duration-500 group-hover:-translate-y-full absolute left-[1rem] bottom-[3rem] lg:left-auto lg:right-[1.785rem] lg:bottom-[1.875rem] text-right flex items-center gap-[0.5rem] lg:block">
        <p className="text-white/60 tracking-[0.0125rem] leading-[1.2] text-[1rem] font-bold">
          From to
        </p>
        <p className="lg:text-[3rem] font-bold leading-[1.2] text-[1rem]">
          ${data?.price || 0}
        </p>
      </div>
      <button className="inline-flex items-center cursor-pointer font-extrabold border border-solid border-[#da4b19] text-[0.875rem] px-[2rem] py-[1rem] uppercase rounded-[0.5rem] absolute right-[1.5rem] bottom-[1.875rem] bg-orange-normal transition-transform duration-500 translate-x-[200%] group-hover:translate-0">
        <span>Detail</span>
        <Image
          alt="Hong Hao Travel"
          width={20}
          height={20}
          src="/images/arrow/arrow-right.svg"
          className="group-hover:translate-x-1/2 transition-transform duration-500 w-[0.75rem] h-[0.65625rem] shrink-0"
        />
      </button>
      <button className="max-lg:left-[1rem] max-lg:bottom-[5rem] lg:top-[2rem] lg:right-[1.125rem] absolute px-[0.75rem] py-[0.25rem] md:py-[0.375rem] rounded-[1.5rem] border border-solid border-white/50 bg-white/20 backdrop-blur-[2px] inline-flex items-center gap-[0.5rem]">
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
