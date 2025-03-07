import React from "react";

export default function InputFieldV1({
  type,
  name,
  placeholder,
  defaultValue,
  onChange,
}) {
  const handleChange = (e) => {
    const { value, name } = e.target;
    onChange && onChange({ value, name });
  };
  return (
    <div className="border-b border-solid border-[#BBD3C8CC]">
      <input
        type={type || "text"}
        name={name || ""}
        placeholder={placeholder || ""}
        value={defaultValue || ""}
        onChange={handleChange}
        className="w-full py-[0.625rem] outline-none text-white text-[0.875rem] leading-[1.2] tracking-[0.00875rem]"
      />
    </div>
  );
}
