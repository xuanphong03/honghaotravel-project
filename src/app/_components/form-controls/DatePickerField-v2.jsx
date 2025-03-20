'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Calendar } from '@/components/ui/calendar';
import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

function DatePickerField({ label, name, control, errorMessage, disabled }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-[0.5rem]">
          <Label className="text-[0.875rem] leading-[1.2] font-bold tracking-[0.00875rem] text-[#2E2E2E]">
            {label}
          </Label>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  disabled={disabled}
                  className={cn(
                    `sub2-regular inline-flex w-full items-center justify-between rounded-[0.5rem] border-[1px] border-solid px-[0.5rem] py-[0.75rem] text-left ${
                      disabled
                        ? 'border-gray-200 bg-gray-200 opacity-30'
                        : 'border-[#C5C5C5] opacity-100'
                    }`,
                    !field?.value && 'text-muted-foreground',
                  )}
                >
                  {field?.value ? (
                    format(field?.value, 'dd/M/yyyy')
                  ) : (
                    <span className="text-[#262626]">Pick a date</span>
                  )}
                  <CalendarIcon className="text-orange-normal h-4 w-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
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
            <p className="px-1 text-sm font-medium text-red-500">
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
