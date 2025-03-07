"use client";
import React, { useEffect, useRef, useState } from "react";

export default function SelectFieldV1({
  name,
  options = [],
  placeholder,
  defaultValue,
  onChange,
}) {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [openDropdown, setOpenDropdown] = useState(false);
  const selectedRef = useRef(null);
  const selectFieldRef = useRef(null);

  const handleToggleDropdown = (e) => {
    const status = e.target.checked;
    setOpenDropdown(status);
  };

  const handleSelectOption = (e) => {
    const { name, value } = e.target;
    onChange && onChange({ value, name });
    setSelectedOption(value);
    selectedRef.current.checked = false;
    setOpenDropdown(false);
  };

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        selectFieldRef.current &&
        openDropdown &&
        !selectFieldRef.current.contains(e.target)
      ) {
        setOpenDropdown(false);
        selectedRef.current.checked = false;
      }
    };
    window.addEventListener("click", handleClickOutSide);

    return () => window.removeEventListener("click", handleClickOutSide);
  }, [openDropdown]);

  return (
    <div className="relative cursor-pointer w-full" ref={selectFieldRef}>
      <label
        htmlFor="toggle_dropdown"
        className="cursor-pointer w-full inline-flex justify-between items-center border-b border-solid border-[#BBD3C8CC]"
      >
        <span className="text-[0.875rem] w-full py-[0.625rem] outline-none leading-[1.2] tracking-[0.00875rem]">
          {selectedOption ? (
            <span className="text-white">{selectedOption}</span>
          ) : (
            <span className="text-white/60">{placeholder}</span>
          )}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M15.8346 7.5L10.0013 13.3333L4.16797 7.5"
            stroke="#BBD3C8"
            strokeOpacity="0.8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
      <input
        hidden
        type="checkbox"
        id="toggle_dropdown"
        name="toggle_dropdown"
        ref={selectedRef}
        onChange={handleToggleDropdown}
      />
      <div
        className={`absolute top-[calc(100%+6px)] left-0 right-0 w-full transition-all ${
          openDropdown ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="bg-white rounded-[0.5rem] p-[0.25rem]">
          {options.map((option, index) => (
            <li key={index} className="">
              <label className="inline-block px-[1rem] py-[0.5rem] w-full cursor-pointer hover:bg-gray-200 rounded-[0.5rem] transition-colors">
                <span>{option.value}</span>
                <input
                  hidden
                  type="radio"
                  name={name}
                  value={option.value || ""}
                  onChange={handleSelectOption}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
