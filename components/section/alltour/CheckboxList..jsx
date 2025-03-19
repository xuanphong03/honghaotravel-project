'use client';
import React, { useState } from 'react';
import { CheckboxCustom } from '@/components/ui/checkbox-v2';

const CheckboxList = () => {
  const items = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 space-y-2">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-[0.375rem]">
          <CheckboxCustom
            id={item.id}
            checked={selectedId === item.id}
            onCheckedChange={() => handleCheckboxChange(item.id)}
            className={` ${selectedId === item.id ? '!text-greyscaletext-0 !bg-orange-normal__hover' : '!border-greyscaletext-10'}`}
          />
          <label
            htmlFor={item.id}
            className={`btn-bold ${selectedId === item.id ? '!text-greyscaletext-80-main' : '!text-greyscaletext-40'}`}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
