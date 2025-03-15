import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp } from "lucide-react";

function NumberFieldV2({ name, control, unit, errorMessage }) {
  return (
    <div className="flex px-[0.75rem] py-[0.375rem] items-center gap-[0.625rem] rounded-[0.25rem] bg-[#F1F1F1]">
      <span className="text-[#3F3F3F] text-[0.875rem] leading-[1.2] tracking-[0.00875rem]">
        {unit}:
      </span>
      <div className="relative">
        <FormField
          name={name}
          control={control}
          render={({ field }) => {
            const handleIncrement = () => {
              field.onChange(field.value + 1);
            };
            const handleDecrement = () => {
              if (field.value > 0) {
                field.onChange(field.value - 1);
              }
            };
            return (
              <FormItem className="relative leading-[1.2] flex items-center gap-[0.25rem]">
                <FormControl>
                  <Input
                    readOnly
                    {...field}
                    type="number"
                    className="shadow-none shrink-0 !p-0 !outline-none !border-none focus-visible:ring-0 w-[1.25rem] text-orange-normal text-right font-bold leading-[1.2] text-[0.875rem] tracking-[0.00875rem] h-full"
                  />
                </FormControl>
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="cursor-pointer"
                  >
                    <ChevronUp className="size-[0.875rem]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="cursor-pointer"
                  >
                    <ChevronDown className="size-[0.875rem]" />
                  </button>
                </div>
              </FormItem>
            );
          }}
        />
      </div>
    </div>
  );
}

NumberFieldV2.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  unit: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default NumberFieldV2;
