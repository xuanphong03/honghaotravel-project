import Image from 'next/image';
import React from 'react';

export default function ImediateMb() {
  return (
    <div className="relative px-3 py-5 md:hidden">
      <div className="tourdetail-banner-cont w-full md:hidden">
        <div className="top flex flex-col gap-3">
          <div className="top-time flex items-center gap-6">
            <div className="top-time-oclock flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M12.8738 22.1362C18.3679 22.1362 22.8218 17.6823 22.8218 12.1882C22.8218 6.6941 18.3679 2.24023 12.8738 2.24023C7.37965 2.24023 2.92578 6.6941 2.92578 12.1882C2.92578 17.6823 7.37965 22.1362 12.8738 22.1362Z"
                  fill="#E64827"
                />
                <path
                  d="M16.5645 16.0979C16.4351 16.0979 16.3058 16.068 16.1864 15.9885L13.1026 14.1481C12.3366 13.6905 11.7695 12.6857 11.7695 11.8004V7.72168C11.7695 7.31382 12.1078 6.97559 12.5156 6.97559C12.9235 6.97559 13.2617 7.31382 13.2617 7.72168V11.8004C13.2617 12.1585 13.5602 12.6857 13.8686 12.8648L16.9524 14.7052C17.3106 14.9141 17.42 15.3717 17.2111 15.7298C17.0619 15.9686 16.8132 16.0979 16.5645 16.0979Z"
                  fill="#E64827"
                />
              </svg>
              <span className="body1-bold__mb !text-greyscaletext-80-main !font-bold">
                Intermediate
              </span>
            </div>
            <div className="top-time-letter">
              <ul className="sub1-regular__mb !text-greyscaletext-60 list-disc !font-normal text-ellipsis">
                <li>3 Days / 4 Night</li>
              </ul>
            </div>
          </div>
          <h2 className="top-h2 h4-semibold__mb !text-greyscaletext-80-main">
            Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
          </h2>
        </div>
        <div className="mid mt-[1.55rem] flex flex-col gap-5">
          <div className="mid-special flex flex-col gap-5">
            <div className="mid-special-top">
              <div className="mid-special-title flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M6.64744 15.9125C6.75687 15.4251 6.55791 14.7287 6.20973 14.3805L3.79237 11.9632C3.03632 11.2071 2.73788 10.4013 2.95674 9.70499C3.18554 9.00863 3.89185 8.53113 4.94634 8.35206L8.05011 7.83477C8.49777 7.75518 9.04491 7.35726 9.25381 6.9494L10.9649 3.51734C11.4623 2.53249 12.1387 1.98535 12.8749 1.98535C13.611 1.98535 14.2875 2.53249 14.7849 3.51734L16.4959 6.9494C16.6253 7.20804 16.8939 7.45674 17.1824 7.62586L6.46838 18.3398C6.32911 18.4791 6.09035 18.3498 6.13015 18.1508L6.64744 15.9125Z"
                    fill="#E64827"
                  />
                  <path
                    d="M19.5399 14.3805C19.1818 14.7386 18.9829 15.425 19.1022 15.9125L19.7886 18.9068C20.0771 20.1503 19.8981 21.0854 19.2813 21.5331C19.0326 21.7121 18.7342 21.8017 18.386 21.8017C17.8786 21.8017 17.2817 21.6127 16.6252 21.2247L13.7104 19.4937C13.2528 19.2251 12.4968 19.2251 12.0392 19.4937L9.1244 21.2247C8.02017 21.8713 7.07511 21.9807 6.46828 21.5331C6.23948 21.364 6.07037 21.1352 5.96094 20.8367L18.0577 8.73996C18.5153 8.28235 19.1619 8.07344 19.7886 8.18287L20.7934 8.35199C21.8479 8.53105 22.5542 9.00856 22.783 9.70492C23.0018 10.4013 22.7034 11.2071 21.9474 11.9631L19.5399 14.3805Z"
                    fill="#E64827"
                  />
                </svg>
                <span className="body2-regular__mb !text-greyscaletext-10 !text-[0.875rem] !font-normal">
                  SPECIAL
                </span>
              </div>
              <div className="mid-special-hr my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="273"
                  height="2"
                  viewBox="0 0 273 2"
                  fill="none"
                >
                  <path
                    d="M0.9375 0.830078H271.523"
                    stroke="url(#paint0_linear_8549_51569)"
                    strokeWidth="0.994799"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8549_51569"
                      x1="2.27043"
                      y1="1.32983"
                      x2="269.523"
                      y2="1.32983"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D9D9D9" />
                      <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <ul className="mid-special-list body2-bold__mb !text-greyscaletext-80-main ms-4 flex list-disc flex-col gap-[0.625rem] py-2">
                <li>Expert Local Guides good English</li>
                <li>Book now, pay later</li>
                <li>Flexible cancellation policy</li>
                <li>Tours accommodate a maximum of 10 guests</li>
                <li>Creating job opportunities for the Vietnamese community</li>
              </ul>
            </div>
            <div className="mid-special-bot">
              <div className="mid-special-title flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[1.2435rem] w-[1.2435rem]"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M18.0348 7.30234C17.1644 3.47236 13.8235 1.74805 10.8888 1.74805C10.8888 1.74805 10.8888 1.74805 10.8805 1.74805C7.95418 1.74805 4.60502 3.46407 3.73458 7.29405C2.76465 11.5717 5.38428 15.1944 7.75522 17.4742C8.63396 18.3197 9.7614 18.7425 10.8888 18.7425C12.0163 18.7425 13.1437 18.3197 14.0142 17.4742C16.3851 15.1944 19.0047 11.58 18.0348 7.30234Z"
                    fill="#E64827"
                  />
                  <path
                    d="M10.8848 11.4561C12.327 11.4561 13.4961 10.287 13.4961 8.84475C13.4961 7.40254 12.327 6.2334 10.8848 6.2334C9.44258 6.2334 8.27344 7.40254 8.27344 8.84475C8.27344 10.287 9.44258 11.4561 10.8848 11.4561Z"
                    fill="#FEEEE8"
                  />
                </svg>
                <span className="body2-regular__mb !text-greyscaletext-10 !text-[0.875rem] !font-normal">
                  DESTINATION:
                </span>
              </div>
              <div className="mid-special-hr my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="273"
                  height="2"
                  viewBox="0 0 273 2"
                  fill="none"
                >
                  <path
                    d="M0.9375 0.830078H271.523"
                    stroke="url(#paint0_linear_8549_51569)"
                    strokeWidth="0.994799"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8549_51569"
                      x1="2.27043"
                      y1="1.32983"
                      x2="269.523"
                      y2="1.32983"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D9D9D9" />
                      <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <ul className="mid-special-list body2-bold__mb !text-greyscaletext-80-main ms-4 flex list-disc flex-col gap-[0.625rem] py-2">
                <li>Hanoi - Ba Be - Meo Vac - Dong Van - Ha Giang</li>
              </ul>
            </div>
          </div>
          <div className="mid-accomodation flex flex-col gap-5">
            <div className="mid-accomodation-top">
              <div className="mid-accomodation-title flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[1.24375rem] w-[1.25763rem]"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M20.6746 8.60065L17.8056 6.1827V2.75028C17.8057 2.66598 17.7892 2.58249 17.757 2.50458C17.7248 2.42667 17.6776 2.35586 17.618 2.29622C17.5584 2.23657 17.4877 2.18925 17.4098 2.15697C17.332 2.12468 17.2485 2.10806 17.1642 2.10806H15.1311C15.0467 2.10795 14.9631 2.12449 14.8852 2.15673C14.8072 2.18896 14.7364 2.23626 14.6767 2.29592C14.617 2.35558 14.5697 2.42642 14.5375 2.50438C14.5053 2.58235 14.4887 2.66591 14.4888 2.75028V3.38663L11.4371 0.814411C11.2846 0.670798 11.0831 0.59082 10.8737 0.59082C10.6642 0.59082 10.4627 0.670798 10.3103 0.814411L1.08113 8.60065C0.959018 8.71433 0.873959 8.86213 0.837024 9.02483C0.800088 9.18752 0.812988 9.35757 0.874042 9.51283C0.935508 9.66713 1.0419 9.79942 1.17942 9.89255C1.31695 9.98568 1.47928 10.0354 1.64537 10.0352H2.98011V19.6617C2.98011 20.1169 3.3532 20.4909 3.81013 20.4909H17.9456C18.1656 20.4904 18.3764 20.4028 18.532 20.2473C18.6876 20.0917 18.7752 19.8808 18.7756 19.6608V10.036H20.1103C20.2776 10.0362 20.4409 9.9856 20.5787 9.89081C20.7164 9.79601 20.8221 9.66155 20.8817 9.50528C20.9421 9.3513 20.9547 9.18264 20.9178 9.02138C20.8808 8.86012 20.7961 8.71294 20.6746 8.60065ZM11.5041 17.476C11.4205 17.5898 11.3112 17.6824 11.1852 17.7462C11.0591 17.81 10.9198 17.8433 10.7785 17.8433C10.6372 17.8433 10.4979 17.81 10.3719 17.7462C10.2458 17.6824 10.1365 17.5898 10.0529 17.476C8.90845 15.9006 6.80238 12.7994 6.80238 11.2081C6.80416 10.1538 7.22428 9.14329 7.97049 8.3985C8.71669 7.65371 9.72798 7.23551 10.7823 7.23573C11.8366 7.23551 12.8479 7.65371 13.5941 8.3985C14.3403 9.14329 14.7604 10.1538 14.7622 11.2081C14.7622 12.7994 12.6561 15.9006 11.5041 17.476Z"
                    fill="#E64827"
                  />
                  <path
                    opacity="0.4"
                    d="M10.8786 13.4476C12.2678 13.4476 13.3939 12.3215 13.3939 10.9323C13.3939 9.54314 12.2678 8.41699 10.8786 8.41699C9.48943 8.41699 8.36328 9.54314 8.36328 10.9323C8.36328 12.3215 9.48943 13.4476 10.8786 13.4476Z"
                    fill="#E64827"
                  />
                </svg>
                <span className="body2-regular__mb !text-greyscaletext-10 !text-[0.875rem] !font-normal">
                  ACCOMODATION
                </span>
              </div>
              <div className="mid-acommodation-hr my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="273"
                  height="2"
                  viewBox="0 0 273 2"
                  fill="none"
                >
                  <path
                    d="M0.9375 0.830078H271.523"
                    stroke="url(#paint0_linear_8549_51569)"
                    strokeWidth="0.994799"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8549_51569"
                      x1="2.27043"
                      y1="1.32983"
                      x2="269.523"
                      y2="1.32983"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D9D9D9" />
                      <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <ul className="mid-special-list body2-bold__mb !text-greyscaletext-80-main ms-4 flex list-disc flex-col gap-[0.625rem] py-2">
                <li>Doom Room</li>
              </ul>
            </div>
            <div className="mid-accomodation-bot">
              <div className="mid-accomodation-title flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[1.04919rem] w-[1.49219rem]"
                  viewBox="0 0 25 18"
                  fill="none"
                >
                  <path
                    d="M20.6148 9.26758C18.3065 9.26758 16.418 11.1561 16.418 13.4644C16.418 15.7727 18.3065 17.6612 20.6148 17.6612C22.9231 17.6612 24.8116 15.7727 24.8116 13.4644C24.8116 11.1561 22.9231 9.26758 20.6148 9.26758ZM20.6148 16.2623C19.076 16.2623 17.8169 15.0032 17.8169 13.4644C17.8169 11.9256 19.076 10.6665 20.6148 10.6665C22.1536 10.6665 23.4126 11.9256 23.4126 13.4644C23.4126 15.0032 22.1536 16.2623 20.6148 16.2623Z"
                    fill="#E64827"
                  />
                  <path
                    d="M5.13431 9.26758C2.82602 9.26758 0.9375 11.1561 0.9375 13.4644C0.9375 15.7727 2.82602 17.6612 5.13431 17.6612C7.4426 17.6612 9.33111 15.7727 9.33111 13.4644C9.33111 11.1561 7.4426 9.26758 5.13431 9.26758ZM5.13431 16.2623C3.59552 16.2623 2.33644 15.0032 2.33644 13.4644C2.33644 11.9256 3.59552 10.6665 5.13431 10.6665C6.67309 10.6665 7.93218 11.9256 7.93218 13.4644C7.93218 15.0032 6.67309 16.2623 5.13431 16.2623Z"
                    fill="#E64827"
                  />
                  <path
                    opacity="0.4"
                    d="M6.53516 5.07083H13.6231V9.26764H6.53516V5.07083ZM17.1204 2.27296H15.7215C15.3349 2.27296 15.022 1.96011 15.022 1.57349C15.022 1.18687 15.3349 0.874023 15.7215 0.874023H17.1204C17.5071 0.874023 17.8199 1.18687 17.8199 1.57349C17.8199 1.96011 17.5071 2.27296 17.1204 2.27296Z"
                    fill="#E64827"
                  />
                  <path
                    opacity="0.4"
                    d="M21.0066 14.0497C20.8807 14.1197 20.7547 14.1617 20.6149 14.1617C20.3911 14.1617 20.1672 14.0497 20.0274 13.8539L16.7538 8.95767C16.53 8.63587 16.6279 8.2022 16.9357 7.97842C17.2574 7.76853 17.691 7.85247 17.9149 8.17422L20.6149 12.1893L21.2024 13.0705C21.4123 13.3923 21.3283 13.8259 21.0066 14.0497ZM12.9207 12.0633V14.8611H5.13331C4.3639 14.8611 3.73438 14.2316 3.73438 13.4622C3.73438 12.6928 4.3639 12.0633 5.13331 12.0633H12.9207Z"
                    fill="#E64827"
                  />
                  <path
                    d="M17.1185 0.874023C16.7268 0.874023 16.4191 1.18174 16.4191 1.57349V3.67189H14.3206C14.0829 3.67189 13.873 3.78386 13.7331 3.97961L11.0984 7.8687H9.00936L6.78505 4.53923C6.42133 3.99365 5.81978 3.67189 5.16233 3.67189H1.63697C1.24522 3.67189 0.9375 3.97961 0.9375 4.37136C0.9375 6.16205 2.29442 7.65881 4.04309 7.84068L6.28143 11.1982C6.64516 11.7438 7.2467 12.0655 7.90415 12.0655H9.59691L10.0772 12.9468L10.4969 13.7862C10.8326 14.4437 11.5042 14.8634 12.2596 14.8634H13.2854C14.2227 14.8634 15.0201 14.2059 15.202 13.2826L15.3139 12.793C15.8735 9.93908 18.4055 7.8687 21.3153 7.8687C21.7071 7.8687 22.0148 7.56098 22.0148 7.16923V5.7703C22.0148 3.07035 19.8185 0.874023 17.1185 0.874023Z"
                    fill="#E64827"
                  />
                </svg>
                <span className="body2-regular__mb !text-greyscaletext-10 !text-[0.875rem] !font-normal">
                  TRANSPORT
                </span>
              </div>
              <div className="mid-acommodation-hr my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="273"
                  height="2"
                  viewBox="0 0 273 2"
                  fill="none"
                >
                  <path
                    d="M0.9375 0.830078H271.523"
                    stroke="url(#paint0_linear_8549_51569)"
                    strokeWidth="0.994799"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8549_51569"
                      x1="2.27043"
                      y1="1.32983"
                      x2="269.523"
                      y2="1.32983"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D9D9D9" />
                      <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <ul className="mid-special-list body2-bold__mb !text-greyscaletext-80-main ms-4 flex list-disc flex-col gap-[0.625rem] py-2">
                <li>Sleeper bus</li>
                <li>Xe Wave, Vision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tourdetail-banner-xoay absolute right-4 bottom-5 z-0 h-[9.375rem] w-[9.375rem] md:hidden">
        <div className="logo-xoay absolute top-[41.5%] left-1/2 h-[7.5rem] w-[9.375rem] -translate-x-1/2 -translate-y-1/2 transform">
          <Image
            src={'/images/alltour/detail/logo-xoay.png'}
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="chu-xoay animate-spin-slow absolute top-1/2 left-1/2 h-[8.77831rem] w-[8.77rem] -translate-x-1/2 -translate-y-1/2 transform">
          <Image src={'/images/alltour/detail/chu-xoay2.svg'} alt="" fill />
        </div>
      </div>
    </div>
  );
}
