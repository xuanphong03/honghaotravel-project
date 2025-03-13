"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ComboboxField from "../../form-controls/ComboboxField";
import NumberField from "../../form-controls/NumberField";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useMemo, useState } from "react";
import { addDays } from "date-fns";
import InputField from "../../form-controls/InputField";
import TextareaField from "../../form-controls/TextareaField";
import ComboboxFieldV2 from "../../form-controls/ComboboxFieldV2";
import DatePickerField from "../../form-controls/DatePickerField";

// Define the form schema using Zod
const formSchema = z.object({
  tourByDay: z.string().nonempty("Please select tour by day"), // Use min(1) instead of nonempty
  tourByType: z.string().nonempty("Please select tour by type"), // Use min(1) instead of nonempty
  selfDriving: z
    .number()
    .min(0, "Please enter quantity self driving")
    .default(0),
  localDriving: z
    .number()
    .min(0, "Please enter quantity local driving")
    .default(0),

  // Customer information
  customerName: z
    .string({ required_error: "Please enter your name" })
    .min(2, "Username must be at least 2 characters"),
  phoneNumber: z
    .string({ required_error: "Please fill out this field" })
    .nonempty("Please fill out this field")
    .regex(/^(0[2-9]|84[2-9])\d{8}$/, "Invalid format!"),
  email: z
    .string({ required_error: "Please enter your email" })
    .nonempty("Please enter your email!")
    .email("Enter the correct email format!"),
  message: z.string({ required_error: "Please enter your email" }),

  pickUpLocation: z
    .string({ required_error: "Please fill out this field" })
    .nonempty("Please fill out this field"),
  dropOffLocation: z
    .string({ required_error: "Please select drop off location" })
    .nonempty("Please select drop off location"),

  departureDate: z
    .date({ required_error: "Please fill out this field" })
    .refine((date) => date !== null, {
      message: "Please select a departure date",
    }),
  departAddress: z
    .string("Please enter depart address")
    .nonempty("Please enter depart address"),

  endDate: z.date().nullable(),
  dropOffAddress: z
    .string("Please fill out this field")
    .nonempty("Please fill out this field"),
});

export default function FilterTour() {
  // Define options for the combobox fields
  const TOURS_BY_DAY = [
    { id: 1, value: "2 days 3 night" },
    { id: 2, value: "3 days 4 night" },
    { id: 3, value: "4 days 5 night" },
  ];
  const TOURS_BY_TYPE = [
    { id: 1, value: "Best budget" },
    { id: 2, value: "Premium" },
    { id: 3, value: "Standard" },
  ];
  const PICK_UP_LOCATION = [
    { id: 1, value: "Ha Noi" },
    { id: 2, value: "Sapa" },
    { id: 3, value: "Da Nang" },
  ];
  const DROP_OFF_LOCATION = [
    { id: 1, value: "Ha Noi" },
    { id: 2, value: "Ninh Binh" },
    { id: 3, value: "Ha Long" },
  ];

  // Initialize the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tourByDay: TOURS_BY_DAY[0].value,
      tourByType: TOURS_BY_TYPE[0].value,
      selfDriving: 0,
      localDriving: 0,
      customerName: "",
      phoneNumber: "",
      email: "",
      message: "",
      pickUpLocation: "",
      dropOffLocation: "",
      departAddress: "",
      dropOffAddress: "",
      endDate: null,
    },
  });

  // State to manage the dialog open/close
  const [isOpenFormBookTour, setIsOpenFormBookTour] = useState(false);
  const { watch, setValue } = form;

  // Customer Information
  const customerName = watch("customerName");
  const phoneNumber = watch("phoneNumber");
  const email = watch("email");
  const message = watch("message");

  const tourByDay = watch("tourByDay");
  const tourByType = watch("tourByType");
  const departureDate = watch("departureDate");
  const dropOffLocation = watch("dropOffLocation");

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    // You can add your form submission logic here
  };

  const tourDuration = useMemo(() => {
    if (!tourByDay) return { days: 0, nights: 0 };
    const match = tourByDay.match(/^(\d+)\s+days\s+(\d+)\s+night/);
    if (match) {
      return {
        days: parseInt(match[1], 10),
        nights: parseInt(match[2], 10),
      };
    }
    return { days: 0, nights: 0 };
  }, [tourByDay]);

  const tourBookingInfo = useMemo(() => {
    const customerInfo = {
      name: customerName,
      phone: phoneNumber,
      email: email,
      message: message,
    };
    const tourInfo = {};

    return { customer: customerInfo, tour: tourInfo };
  }, [customerName, phoneNumber, email, message]);

  const handleFormSubmit = async (data) => {
    console.log("Data:", data);
  };

  useEffect(() => {
    if (departureDate && tourByDay) {
      const days = tourDuration.days;
      if (days > 0) {
        const calculatedEndDate = addDays(departureDate, days);
        setValue("endDate", calculatedEndDate);
      }
    }
    if (!departureDate) {
      form.setValue("endDate", null);
    }
  }, [departureDate, tourByDay, setValue]);

  return (
    <Form {...form}>
      <div className="hidden md:block">
        <div className="inline-flex pl-[2rem] py-[0.75rem] pr-[0.75rem] bg-white rounded-[0.75rem] items-center">
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <ComboboxField
              name="tourByDay"
              options={TOURS_BY_DAY}
              label="Days"
              control={form.control}
            />
          </div>
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <ComboboxField
              label="Type of tour"
              name="tourByType"
              options={TOURS_BY_TYPE}
              control={form.control}
            />
          </div>
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <NumberField
              name="selfDriving"
              label="Self driving"
              control={form.control}
              unit="Pax"
            />
          </div>
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <NumberField
              name="localDriving"
              label="Local driving"
              control={form.control}
              unit="Pax"
            />
          </div>
          <Dialog
            open={isOpenFormBookTour}
            onOpenChange={setIsOpenFormBookTour}
          >
            <DialogTrigger>
              <div className="bg-orange-normal px-[1.5rem] py-[0.75rem] rounded-[0.5rem] flex flex-col items-center cursor-pointer">
                <span className="text-[0.875rem] font-bold tracking-[0.00875rem] text-white uppercase whitespace-nowrap">
                  Customize
                </span>
                <span className="text-[0.875rem] font-bold tracking-[0.00875rem] text-white uppercase whitespace-nowrap">
                  tour
                </span>
              </div>
            </DialogTrigger>

            <DialogContent
              aria-describedby=""
              className="bg-white px-[1.5rem] py-[1.5rem] !max-w-fit"
            >
              <DialogHeader className="hidden">
                <DialogTitle className="hidden"></DialogTitle>
                <DialogDescription className="hidden"></DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Form>
  );
}
