import { FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function NumberField({
  label,
  name,
  control,
  unit,
  errorMessage,
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const handleIncrement = () => {
          field.onChange((field.value || 0) + 1);
        };
        const handleDecrement = () => {
          field.value > 0 && field.onChange((field.value || 0) - 1);
        };
        return (
          <FormItem className="gap-0">
            <Label className="text-[0.75rem] leading-[1.2] tracking-[0.00375rem] text-[#727272] uppercase">
              {label}
            </Label>
            <div className="w-full relative flex justify-between items-center">
              <Input
                {...field}
                readOnly
                name={name}
                type="number"
                hidden
                className="font-medium text-[1rem] leading-[1.5] p-0 outline-none border-none focus-visible:ring-0"
              />
              <div className="font-medium text-[1rem] leading-[1.5]">
                {field.value} {unit}
              </div>
              <div className=" flex flex-col absolute top-1/2 right-0 -translate-y-1/2">
                <button
                  onClick={handleIncrement}
                  className="cursor-pointer rotate-180 inline-flex size-4 items-center justify-center group"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDecrement}
                  className="cursor-pointer inline-flex size-4 items-center justify-center group"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FormItem>
        );
      }}
    />
  );
}
