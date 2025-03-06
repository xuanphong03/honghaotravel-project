import React from "react";
import PropTypes from "prop-types";
import { Input } from "@/components/ui/input";

function InputField({ placeholder, type = "text" }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      className="placeholder:text-slate-500 h-10 outline-none border-2 border-solid border-[#c5c5c5] focus-visible:border-orange-normal focus-visible:ring-0"
    />
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
