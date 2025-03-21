import React from 'react';

export default function PrevButton({ onClick }) {
  const handleClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="hover:bg-orange-normal__hover size-[2.5rem] cursor-pointer rounded-full transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="h-full w-full rotate-180 object-cover"
      >
        <g clipPath="url(#clip0_7872_25841)">
          <circle
            cx="20"
            cy="20"
            r="19.5"
            transform="matrix(-1 0 0 1 40 0)"
            stroke="white"
          />
          <path
            d="M25.5 20L12 20"
            stroke="url(#paint0_linear_7872_25841)"
            strokeWidth="2"
          />
          <g filter="url(#filter0_i_7872_25841)">
            <path d="M28 20L20 27L23.2184 20L20 13L28 20Z" fill="white" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_i_7872_25841"
            x="20"
            y="13"
            width="28"
            height="18"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="20" dy="4" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_7872_25841"
            />
          </filter>
          <linearGradient
            id="paint0_linear_7872_25841"
            x1="13"
            y1="20"
            x2="24"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#CBCBCB" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_7872_25841">
            <rect
              width="40"
              height="40"
              rx="20"
              transform="matrix(-1 0 0 1 40 0)"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
