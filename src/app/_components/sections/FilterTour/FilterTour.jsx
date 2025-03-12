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
          {/* Tour by day */}
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <ComboboxField
              name="tourByDay"
              options={TOURS_BY_DAY}
              label="Days"
              control={form.control}
            />
          </div>

          {/* Tour by type */}
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <ComboboxField
              label="Type of tour"
              name="tourByType"
              options={TOURS_BY_TYPE}
              control={form.control}
            />
          </div>

          {/* Self driving */}
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <NumberField
              name="selfDriving"
              label="Self driving"
              control={form.control}
            />
          </div>

          {/* Local driving */}
          <div className="mr-[1.5rem] pr-[1.5rem] border-r border-solid border-gray-200 w-[12rem]">
            <NumberField
              name="localDriving"
              label="Local driving"
              control={form.control}
            />
          </div>

          {/* Dialog for customizing tour */}
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
              <DialogTitle className="hidden"></DialogTitle>
              <form
                onSubmit={form.handleSubmit(handleFormSubmit)}
                className="bg-white flex gap-x-[1.5rem] !w-full"
              >
                <div className="!w-[34.75rem] flex flex-col gap-[1rem]">
                  <div className="w-full">
                    <div className="text-[#2E2E2E] text-[0.875rem] font-bold leading-[1.2] tracking-[0.00875rem] uppercase mb-[0.5rem]">
                      Customer information:
                    </div>
                    {/* Customer name */}
                    <div className="grid grid-cols-2 gap-[0.75rem]">
                      <div className="col-span-2">
                        <InputField
                          name="customerName"
                          type="text"
                          control={form.control}
                          placeholder="Peter Nguyen Tuan Anh"
                          errorMessage={
                            form.formState.errors?.customerName?.message
                          }
                        />
                      </div>
                      {/* Phone number */}
                      <div className="col-span-1">
                        <InputField
                          type="text"
                          name="phoneNumber"
                          placeholder="(Whatsapp) +84 *"
                          control={form.control}
                          errorMessage={
                            form.formState.errors?.phoneNumber?.message
                          }
                        />
                      </div>
                      {/* Email */}
                      <div className="col-span-1">
                        <InputField
                          type="email"
                          name="email"
                          placeholder="Email *"
                          control={form.control}
                          errorMessage={form.formState.errors?.email?.message}
                        />
                        {/* Message */}
                      </div>
                      <div className="col-span-2">
                        <TextareaField
                          rows={2}
                          name="message"
                          placeholder="Message"
                          control={form.control}
                          errorMessage={form.formState.errors?.message?.message}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-4 gap-x-[0.5rem] gap-y-[1rem]">
                    {/* Type of tour */}
                    <div className="col-span-2">
                      <ComboboxFieldV2
                        name="tourByType"
                        label="Type of tour"
                        options={TOURS_BY_TYPE}
                        control={form.control}
                        errorMessage={
                          form.formState.errors?.tourByType?.message
                        }
                      />
                    </div>
                    {/* Tour by day */}
                    <div className="col-span-2">
                      <ComboboxFieldV2
                        name="tourByDay"
                        label="Choose days"
                        options={TOURS_BY_DAY}
                        control={form.control}
                        errorMessage={form.formState.errors?.tourByDay?.message}
                      />
                    </div>
                    {/* Pick up location */}
                    <div className="col-span-1">
                      <ComboboxFieldV2
                        name="pickUpLocation"
                        label="Pick up"
                        options={PICK_UP_LOCATION}
                        control={form.control}
                        placeholder="Pick up"
                        errorMessage={
                          form.formState.errors?.pickUpLocation?.message
                        }
                      />
                    </div>
                    {/* Departure date */}
                    <div className="col-span-1">
                      <DatePickerField
                        name="departureDate"
                        label="Departure date"
                        control={form.control}
                        errorMessage={
                          form.formState.errors?.departureDate?.message
                        }
                      />
                    </div>
                    {/* Address */}
                    <div className="col-span-2">
                      <InputField
                        label="Address"
                        name="departAddress"
                        placeholder="Address"
                        control={form.control}
                        errorMessage={
                          form.formState.errors?.departAddress?.message
                        }
                      />
                    </div>
                    {/* Drop off location */}
                    <div className="col-span-1">
                      <ComboboxFieldV2
                        name="dropOffLocation"
                        label="Drop off"
                        options={DROP_OFF_LOCATION}
                        control={form.control}
                        placeholder="Drop off"
                        errorMessage={
                          form.formState.errors?.dropOffLocation?.message
                        }
                      />
                    </div>
                    {/* End date */}
                    <div className="col-span-1">
                      <DatePickerField
                        name="endDate"
                        label="End date"
                        disabled={true}
                        control={form.control}
                      />
                    </div>
                    {/* Drop off address */}
                    <div className="col-span-2">
                      <ComboboxFieldV2
                        label="Address"
                        name="dropOffAddress"
                        options={[{ id: 1, value: "Item" }]}
                        control={form.control}
                        disabled={!dropOffLocation}
                        placeholder="Please Select Drop off"
                        errorMessage={
                          form.formState.errors?.dropOffAddress?.message
                        }
                      />
                    </div>
                  </div>
                  {/* Self driving and local driver*/}
                  <div className="w-full">
                    <div className="flex items-center justify-between py-[0.75rem]">
                      <div className="text-[#3F3F3F] text-[0.875rem] leading-[1.2] tracking-[0.00875rem]">
                        {tourDuration?.days} days of self-driving
                      </div>
                      <div className="flex items-center">
                        <div className="text-[#6A6A6A] text-[0.875rem] font-bold leading-[1.2] tracking-[0.00875rem]">
                          $172
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>{tourDuration?.days} days of local driver</div>
                    </div>
                  </div>
                </div>
                <div className="!w-[35.5rem] flex flex-col gap-[0.75rem]">
                  <div className="text-[#262626]/40 text-[0.875rem] font-bold leading-[1.2] tracking-[0.00875rem] uppercase">
                    Confirmed tour booking
                  </div>
                  <div className="bg-[#F8F8F8] rounded-[0.5rem] overflow-hidden">
                    {/* Type of tour */}
                    <div className="flex items-center">
                      <div className="h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                        Type of tour
                      </div>
                      <div className="max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                        Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
                      </div>
                    </div>
                    {/* Name */}
                    <div className="flex items-center">
                      <div className="h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                        Name
                      </div>
                      <div className="max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                        <p className="text-[0.75rem] text-[#727272] line-clamp-2 text-ellipsis">
                          <span className="text-[0.875rem] text-[#2E2E2E] font-semibold">
                            0 px
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* Contact Info */}
                    <div className="flex items-center">
                      <div className="h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                        Contact Info
                      </div>
                      <div className="max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                        tuanminh2024@gmail.com - 0941556338
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Form>
  );
}
