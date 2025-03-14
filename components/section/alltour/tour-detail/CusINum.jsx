"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CustomNumberInput = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <div className="relative flex items-center !border-none">
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        className="w-24 pr-10 text-center hide-arrows !border-none"
        min="0"
      />
      <div className="absolute right-2 flex flex-col gap-1 !border-none">
        <Button
          type="button"
          onClick={handleIncrement}
          variant="ghost"
          size="sm"
          className="h-4 w-4 p-0"
        >
          ^
        </Button>
        <Button
          type="button"
          onClick={handleDecrement}
          variant="ghost"
          size="sm"
          className="h-4 w-4 p-0 rotate-[-180deg]"
        >
          ^
        </Button>
      </div>
    </div>
  );
};

export default CustomNumberInput;