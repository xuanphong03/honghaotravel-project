import React from "react";
import PropTypes from "prop-types";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

function TextareaField({ name, control, placeholder, rows = 2 }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              rows={rows}
              {...field}
              placeholder={placeholder}
              className="placeholder:text-slate-500 w-full resize-none border-2 border-solid border-[#c5c5c5] focus-visible:border-orange-normal focus-visible:ring-0"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

TextareaField.propTypes = {
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};

export default TextareaField;
