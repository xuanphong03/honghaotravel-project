"use client"
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const CheckboxList = () => {
  const items = [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
    { id: "3", label: "Option 3" },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="space-y-2 flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center  gap-[0.375rem]">
          <Checkbox
            id={item.id}
            checked={selectedId === item.id}
                  onCheckedChange={() => handleCheckboxChange(item.id)}
                  className={` ${selectedId === item.id ? "!bg-orange-500 !text-greyscaletext-0":"!border-greyscaletext-10"}`}
          />
          <label
            htmlFor={item.id}
            className={`btn-bold ${selectedId === item.id ? "!text-greyscaletext-80-main":"!text-greyscaletext-40" }`}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;