"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ComboboxField from "../../form-controls/ComboboxField";
import NumberField from "../../form-controls/NumberField";
import CustomTourForm from "./CustomTourForm";

export default function FilterTour() {
  const tourByDay = [
    { id: 1, value: "2 days 3 night" },
    { id: 2, value: "3 days 4 night" },
    { id: 3, value: "4 days 5 night" },
  ];
  const tourByType = [
    { id: 1, value: "Best budget" },
    { id: 2, value: "Premium" },
    { id: 3, value: "Standard" },
  ];

  return (
    <div className="inline-flex pl-[2rem] py-[0.75rem] pr-[0.75rem] bg-white rounded-[0.75rem] items-center">
      <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
        <ComboboxField
          label="Days"
          values={tourByDay}
          defaultValue={tourByDay[0]?.value}
        />
      </div>
      <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
        <ComboboxField
          label="Type of tour"
          values={tourByType}
          defaultValue={tourByType[0]?.value}
        />
      </div>
      <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
        <NumberField label="Self driving" defaultValue={0} unit="pax" />
      </div>
      <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
        <NumberField label="Local driving" defaultValue={0} unit="pax" />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-orange-normal px-[1.5rem] py-[0.75rem] rounded-[0.5rem] flex flex-col items-center cursor-pointer">
            <span className="text-[0.875rem] font-bold tracking-[0.00875rem] text-white uppercase whitespace-nowrap">
              Customize
            </span>
            <span className="text-[0.875rem] font-bold tracking-[0.00875rem] text-white uppercase whitespace-nowrap">
              tour
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="rounded-[1.5rem] sm:max-w-[70rem] max-h-[85vh] flex justify-center bg-white">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <CustomTourForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
