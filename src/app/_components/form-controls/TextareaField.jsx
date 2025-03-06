import React from "react";
import PropTypes from "prop-types";
import { Textarea } from "@/components/ui/textarea";

function TextareaField({ label, placeholder, rows = 2 }) {
  return (
    <Textarea
      rows={rows}
      placeholder={placeholder}
      className="placeholder:text-slate-500 w-full resize-none border-2 border-solid border-[#c5c5c5] focus-visible:border-orange-normal focus-visible:ring-0"
    />
  );
}

TextareaField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

export default TextareaField;
