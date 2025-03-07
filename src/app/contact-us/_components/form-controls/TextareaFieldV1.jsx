import React from "react";

export default function TextareaFieldV1({
  name,
  placeholder,
  rows,
  value,
  onChange,
}) {
  const handleChange = (e) => {
    const { value, name } = e.target;
    onChange && onChange({ value, name });
  };
  return (
    <div className="border-b border-solid border-[#BBD3C8CC]">
      <textarea
        name={name || ""}
        rows={rows || 4}
        value={value || ""}
        onChange={handleChange}
        placeholder={placeholder || ""}
        className="resize-y w-full py-[0.625rem] outline-none text-white text-[0.875rem] leading-[1.2] tracking-[0.00875rem]"
      ></textarea>
    </div>
  );
}
