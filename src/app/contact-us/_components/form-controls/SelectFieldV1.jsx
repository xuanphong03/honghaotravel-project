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

export default function SelectFieldV1({
  name,
  options = [],
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex w-full outline-none justify-between py-[0.625rem] leading-[1.2] !text-[0.875rem] text-white border-b border-solid border-[#BBD3C8CC]">
                  {field.value ? (
                    options.find((option) => option.value === field.value)
                      ?.value
                  ) : (
                    <span className="text-[#BBD3C8CC]">{placeholder}</span>
                  )}
                  <ChevronDown className="w-4 h-4 text-[#BBD3C8CC]" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="md:w-[16rem] bg-white border-none">
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
