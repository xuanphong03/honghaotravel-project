"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

function DatePickerField({ label, name, control, errorMessage, disabled }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-[0.5rem]">
          <Label className="text-[#2E2E2E] text-[0.875rem] leading-[1.2] tracking-[0.00875rem] font-bold">
            {label}
          </Label>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  disabled={disabled}
                  className={cn(
                    `inline-flex w-full justify-between items-center border-2 border-solid  rounded-[0.5rem] px-[1rem] py-[0.75rem] text-left text-[0.875rem] leading-[1.2] tracking-[0.00875rem] ${
                      disabled
                        ? "opacity-30 bg-gray-200 border-gray-200"
                        : "opacity-100 border-[#C5C5C5]"
                    }`,
                    !field?.value && "text-muted-foreground"
                  )}
                >
                  {field?.value ? (
                    format(field?.value, "dd/M/yyyy")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="h-4 w-4 text-orange-normal" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(date) => field.onChange(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>
          {errorMessage && (
            <p className="px-1 text-red-500 text-sm font-medium">
              {errorMessage}
            </p>
          )}
        </FormItem>
      )}
    />
  );
}

DatePickerField.propTypes = {};

export default DatePickerField;
