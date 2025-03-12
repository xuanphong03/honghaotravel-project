import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";

export default function InputFieldV1({
  name,
  placeholder,
  control,
  errorMessage,
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="border-b border-solid border-[#BBD3C8CC]">
              <input
                type="text"
                placeholder={placeholder || ""}
                {...field}
                className="w-full py-[0.625rem] outline-none text-white text-[0.875rem] leading-[1.2] tracking-[0.00875rem] placeholder:text-[#BBD3C8CC]"
              />
            </div>
          </FormControl>
          {errorMessage && (
            <p className="px-1 text-red-500 text-sm">{errorMessage}</p>
          )}
        </FormItem>
      )}
    />
  );
}
