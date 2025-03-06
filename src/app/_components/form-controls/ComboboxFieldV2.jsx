import React from "react";
import PropTypes from "prop-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ComboboxFieldV2({ values = [], defaultValue, placeholder }) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="w-full h-10 border-2 border-solid border-[#c5c5c5] focus-visible:border-orange-normal focus-visible:ring-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white p-[0.5rem]">
        {values.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
            className="hover:bg-slate-100 p-[0.75rem] font-bold text-[1rem]"
          >
            {item.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

ComboboxFieldV2.propTypes = {
  defaultValue: PropTypes.string,
  values: PropTypes.array.isRequired,
};

export default ComboboxFieldV2;
