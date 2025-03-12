"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

export default function ComboboxFieldV2({
  label,
  name,
  options = [],
  control,
  errorMessage,
  placeholder,
  disabled,
}) {
  console.log("options", options);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-[0.5rem]">
          <FormControl>
            <DropdownMenu>
              <Label className="text-[#2E2E2E] text-[0.875rem] leading-[1.2] tracking-[0.00875rem] font-bold">
                {label}
              </Label>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  disabled={disabled}
                  className={`text-[#2E2E2E] inline-flex w-full justify-between items-center border-2 border-solid border-[#C5C5C5] rounded-[0.5rem] px-[1rem] py-[0.75rem] text-left text-[0.875rem] leading-[1.2] tracking-[0.00875rem] ${
                    disabled
                      ? "opacity-50 border-gray-300 cursor-not-allowed pointer-events-none"
                      : "opacity-100"
                  }`}
                >
                  <p className="line-clamp-1">
                    {field.value ? (
                      options.find((option) => option.value === field.value)
                        ?.value
                    ) : (
                      <span className="">{placeholder}</span>
                    )}
                  </p>
                  <ChevronDown className="w-4 h-4 text-red-500" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="md:w-[18rem] bg-white border-none ">
                {options.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onSelect={() => field.onChange(option.value)}
                    className="text-[#2E2E2E] font-bold leading-[1.5] py-[1rem] cursor-pointer hover:bg-gray-200 transition-all duration-300 text-[1rem] w-full"
                  >
                    {option.value}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
