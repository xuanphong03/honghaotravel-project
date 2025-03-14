"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ComboboxField from "../../form-controls/ComboboxField";
import NumberField from "../../form-controls/NumberField";
import TourBookingForm from "../../common/form/TourBookingForm";
import { QUICK_TOUR_BOOKING_FORM } from "@/constants/schema";
import { useEffect, useState } from "react";
import TourData from "@/app/services/tour.json";
import { v4 as uuidv4 } from "uuid";

export default function FilterTour() {
  const form = useForm({
    resolver: zodResolver(QUICK_TOUR_BOOKING_FORM),
    defaultValues: {
      tourByDay: "",
      tourByType: "",
      selfDriving: 0,
      localDriving: 0,
    },
  });
  const { setValue } = form;

  const [tourData, setTourData] = useState({
    typeTours: [],
    durationTours: [],
  });

  const handleSubmitForm = (data) => {
    console.log("Customize data", data);
  };

  useEffect(() => {
    const durationTours = TourData.durationTours.map(({ duration }) => ({
      id: uuidv4(),
      value: duration,
    }));
    const typeOfTours = TourData.typeOfTours.map(({ type }) => ({
      id: uuidv4(),
      value: type,
    }));
    setTourData({
      typeTours: typeOfTours,
      durationTours: durationTours,
    });
    setValue("tourByType", typeOfTours[0].value);
    setValue("tourByDay", durationTours[0].value);
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="hidden md:block"
      >
        <div className="inline-flex pl-[2rem] py-[0.75rem] pr-[0.75rem] bg-white rounded-[0.75rem] items-center">
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <ComboboxField
              label="Days"
              name="tourByDay"
              control={form.control}
              options={tourData.durationTours}
              placeholder="Select tour by day"
            />
          </div>
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <ComboboxField
              name="tourByType"
              label="Type of tour"
              control={form.control}
              options={tourData.typeTours}
              placeholder="Select tour by type"
            />
          </div>
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <NumberField
              unit="Pax"
              name="selfDriving"
              label="Self driving"
              control={form.control}
            />
          </div>
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <NumberField
              unit="Pax"
              name="localDriving"
              label="Local driving"
              control={form.control}
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="submit"
                className="bg-orange-normal px-[1.5rem] py-[0.75rem] rounded-[0.5rem] flex flex-col items-center cursor-pointer"
              >
                <span className="text-[0.875rem] font-bold tracking-[0.00875rem] text-white uppercase whitespace-nowrap">
                  Customize
                </span>
                <span className="text-[0.875rem] font-bold tracking-[0.00875rem] text-white uppercase whitespace-nowrap">
                  tour
                </span>
              </button>
            </DialogTrigger>

            <DialogContent className="bg-white px-[1.5rem] py-[1.5rem] !max-w-fit">
              <DialogHeader className="hidden">
                <DialogTitle className="hidden"></DialogTitle>
                <DialogDescription className="hidden"></DialogDescription>
              </DialogHeader>
              <TourBookingForm />
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </Form>
  );
}
