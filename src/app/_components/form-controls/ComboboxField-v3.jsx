'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ChevronDown } from 'lucide-react';

export default function ComboboxFieldV2({
  label,
  name,
  options = [],
  control,
  errorMessage,
  placeholder,
  disabled,
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-[0.5rem]">
          <FormControl>
            <DropdownMenu>
              <Label className="sub2-bold__mb sub2-bold !text-Gray-Scale-80">
                {label}
              </Label>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  disabled={disabled}
                  className={`sub2-regular__mb sub2-regular !text-greyscaletext-60 inline-flex w-full items-center justify-between rounded-[0.5rem] border-[1px] border-solid border-[#C5C5C5] px-[1rem] py-[0.75rem] !text-left ${
                    disabled
                      ? 'pointer-events-none cursor-not-allowed border-gray-300 opacity-50'
                      : 'opacity-100'
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
                  <ChevronDown className="h-4 w-4 text-red-500" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-none bg-white md:w-[18rem]">
                {options.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onSelect={() => field.onChange(option.value)}
                    className="w-full cursor-pointer py-[1rem] text-[1rem] leading-[1.5] font-bold text-[#2E2E2E] transition-all duration-300 hover:bg-gray-200"
                  >
                    {option.value}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </FormControl>
          {errorMessage && (
            <p className="px-1 text-sm font-medium text-red-500">
              {errorMessage}
            </p>
          )}
        </FormItem>
      )}
    />
  );
}
