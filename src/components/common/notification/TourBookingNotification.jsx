import React from "react";

export default function TourBookingNotification({
  success = false,
  error = false,
}) {
  return (
    <div className="w-[47.25rem] h-[30.3125rem] bg-white rounded-[1.5rem]  bg-[linear-gradient(0deg,rgba(19,52,28,0.60)_0%,rgba(19,52,28,0.60)_100%)]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-16">
        <p className="font-londrina-solid w-[19.625rem] text-green-normal text-[3rem] leading-none font-black text-center">
          Successfully booked the tour
        </p>
        <button className="flex w-[13.4375rem] h-[3.5rem] px-[2rem] py-[1rem] justify-center items-center gap-2 shrink-0 rounded-[0.5rem] border-solid border border-orange-normal bg-orange-normal">
          <span className="text-white text-[0.875rem] font-bold leading-[1.2] uppercase">
            Home page
          </span>
        </button>
      </div>
    </div>
  );
}
