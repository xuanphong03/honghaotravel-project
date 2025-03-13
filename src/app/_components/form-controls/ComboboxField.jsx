"use client";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";
import { Label } from "@/components/ui/label";

export default function ComboboxField({
  label,
  name,
  options = [],
  control,
  errorMessage,
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-0">
          <FormControl>
            <DropdownMenu>
              <Label className="text-[#727272] text-[0.75rem] leading-[1.2] tracking-[0.00375rem] uppercase font-normal">
                {label}
              </Label>
              <DropdownMenuTrigger asChild>
                <button className="flex w-full outline-none justify-between leading-[1.5] text-[1rem] text-black font-medium">
                  {
                    options.find((option) => option.value === field.value)
                      ?.value
                  }
                  <ChevronDown className="w-4 h-4 text-red-500" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="md:w-[14rem] bg-white border-none">
                {options.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onSelect={() => field.onChange(option.value)}
                    className="cursor-pointer hover:bg-gray-200 transition-all duration-300 text-[0.875rem] w-full"
                  >
                    {option.value}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </FormControl>
          {errorMessage && (
            <p className="px-1 text-red-500 text-sm">{errorMessage}</p>
          )}
        </FormItem>
      )}
    />
  );
}
