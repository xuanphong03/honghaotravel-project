import React, { useState } from "react";

export default function NumberField({ label, defaultValue, unit }) {
  const [value, setValue] = useState(defaultValue);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (!value) return;
    setValue(value - 1);
  };
  return (
    <div className="inline-flex gap-[0.25rem] flex-col w-full">
      <p className="text-[0.75rem] leading-[1.2] tracking-[0.00375rem] text-[#727272] uppercase">
        {label}
      </p>
      <div className="w-full relative flex justify-between items-center gap-[2rem] cursor-pointer">
        <p className="text-[1rem] font-bold leading-[1.5] text-[#2e2e2e]">
          {value} {unit}
        </p>
        <div className="flex flex-col gap-[0.25rem]">
          <button
            onClick={handleIncrement}
            className="cursor-pointer rotate-180 inline-flex size-4 items-center justify-center group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M6.00329 4.39139L2.38713 0.775389C2.20358 0.591657 1.97909 0.5 1.71368 0.5C1.4483 0.5 1.22392 0.591683 1.04039 0.775389L0.482264 1.33333C0.298793 1.51678 0.207031 1.7413 0.207031 2.0066C0.207031 2.27191 0.298793 2.49632 0.482264 2.68005L5.32612 7.53128C5.50967 7.71485 5.73413 7.80664 5.99957 7.80664C6.265 7.80664 6.48928 7.71488 6.67291 7.53128L11.5168 2.68008C11.7003 2.49634 11.7921 2.27196 11.7921 2.00663C11.7921 1.7413 11.7003 1.51681 11.5168 1.33336L10.9587 0.775415C10.7753 0.591683 10.5521 0.500025 10.289 0.500025C10.0262 0.500025 9.8005 0.591709 9.61202 0.775415L6.00329 4.39139Z"
                className="fill-[#727272] group-hover:fill-red-500 transition-colors"
              />
            </svg>
          </button>
          <button
            onClick={handleDecrement}
            className="cursor-pointer inline-flex size-4 items-center justify-center group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M6.00329 4.39139L2.38713 0.775389C2.20358 0.591657 1.97909 0.5 1.71368 0.5C1.4483 0.5 1.22392 0.591683 1.04039 0.775389L0.482264 1.33333C0.298793 1.51678 0.207031 1.7413 0.207031 2.0066C0.207031 2.27191 0.298793 2.49632 0.482264 2.68005L5.32612 7.53128C5.50967 7.71485 5.73413 7.80664 5.99957 7.80664C6.265 7.80664 6.48928 7.71488 6.67291 7.53128L11.5168 2.68008C11.7003 2.49634 11.7921 2.27196 11.7921 2.00663C11.7921 1.7413 11.7003 1.51681 11.5168 1.33336L10.9587 0.775415C10.7753 0.591683 10.5521 0.500025 10.289 0.500025C10.0262 0.500025 9.8005 0.591709 9.61202 0.775415L6.00329 4.39139Z"
                className="fill-[#727272] group-hover:fill-red-500 transition-colors"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
