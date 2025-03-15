import Image from "next/image";
import React from "react";

export default function SubmitButton({ label, isPrimary = false, disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`h-14 max-md:w-full flex items-center justify-center px-8 py-4 gap-2 flex-1 rounded-lg border border-orange-normal uppercase text-sm font-bold leading-tight ${
        isPrimary
          ? "bg-orange-normal text-white"
          : "bg-white text-orange-normal"
      } ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      }`}
    >
      {label}
      {isPrimary && (
        <Image
          alt="Arrow"
          width={14}
          height={14}
          src="/images/arrow/arrow-right.svg"
        />
      )}
    </button>
  );
}
