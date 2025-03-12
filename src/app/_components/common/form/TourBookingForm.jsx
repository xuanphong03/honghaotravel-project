"use client";
import React, { useEffect, useMemo, useState } from "react";
import InputField from "../../form-controls/InputField";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextareaField from "../../form-controls/TextareaField";
import ComboboxFieldV2 from "../../form-controls/ComboboxFieldV2";
import DatePickerField from "../../form-controls/DatePickerField";
import { Form } from "@/components/ui/form";
import { addDays } from "date-fns";

import { v4 as uuidv4 } from "uuid";
import LocationData from "@/app/services/location.json";
import TourData from "@/app/services/tour.json";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp } from "lucide-react";

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

export default function TourBookingForm() {
  const [tourData, setTourData] = useState({
    typeTours: [],
    durationTours: [],
    pickUpLocations: [],
    dropOffLocations: [],
  });

  const [dropOffAddresses, setDropOffAddresses] = useState([]);
  // Initialize the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tourByDay: "",
      tourByType: "",
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
  const { watch, setValue } = form;

  const tourByDay = watch("tourByDay");
  const departureDate = watch("departureDate");
  const dropOffLocation = watch("dropOffLocation");

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

  useEffect(() => {
    if (dropOffLocation) {
      const location = tourData.dropOffLocations.find(
        ({ value }) => value === dropOffLocation
      );
      setValue("dropOffAddress", "");
      const addresses = location?.addresses?.map(({ address }) => ({
        id: uuidv4(),
        value: address,
      }));
      setDropOffAddresses(addresses || []);
    }
  }, [dropOffLocation, setValue]);

  // Giả sử call api
  useEffect(() => {
    const pickUpLocations = LocationData.pickUpLocations.map(
      ({ location }) => ({
        id: uuidv4(),
        value: location,
      })
    );
    const dropOffLocations = LocationData.dropOffLocations.map(
      ({ location, addresses }) => ({
        id: uuidv4(),
        value: location,
        addresses: addresses,
      })
    );
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
      pickUpLocations: pickUpLocations,
      dropOffLocations: dropOffLocations,
    });
    setValue("tourByType", typeOfTours[0].value);
    setValue("tourByDay", durationTours[0].value);
  }, [setValue]);

  return (
    <Form {...form}>
      <form
        id="tour-booking-form"
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="relative bg-white !w-full rounded-[1.5rem]"
      >
        <div className="flex gap-[1.5rem] max-h-[85vh] overflow-y-auto w-full px-[1.5rem] py-[1.5rem] ">
          <div className="!w-[34.75rem] flex flex-col gap-[1rem] shrink-0">
            <div className="w-full">
              <div className="text-[#2E2E2E] text-[0.875rem] font-bold leading-[1.2] tracking-[0.00875rem] uppercase mb-[0.5rem]">
                Customer information:
              </div>
              <div className="grid grid-cols-2 gap-[0.75rem]">
                <div className="col-span-2">
                  <InputField
                    name="customerName"
                    type="text"
                    control={form.control}
                    placeholder="Peter Nguyen Tuan Anh"
                    errorMessage={form.formState.errors?.customerName?.message}
                  />
                </div>
                <div className="col-span-1">
                  <InputField
                    type="text"
                    name="phoneNumber"
                    placeholder="(Whatsapp) +84 *"
                    control={form.control}
                    errorMessage={form.formState.errors?.phoneNumber?.message}
                  />
                </div>
                <div className="col-span-1">
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Email *"
                    control={form.control}
                    errorMessage={form.formState.errors?.email?.message}
                  />
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
              <div className="col-span-2">
                <ComboboxFieldV2
                  name="tourByType"
                  label="Type of tour"
                  options={tourData.typeTours}
                  control={form.control}
                  errorMessage={form.formState.errors?.tourByType?.message}
                />
              </div>
              <div className="col-span-2">
                <ComboboxFieldV2
                  name="tourByDay"
                  label="Choose days"
                  options={tourData.durationTours}
                  control={form.control}
                  errorMessage={form.formState.errors?.tourByDay?.message}
                />
              </div>
              <div className="col-span-1">
                <ComboboxFieldV2
                  name="pickUpLocation"
                  label="Pick up"
                  options={tourData.pickUpLocations}
                  control={form.control}
                  placeholder="Pick up"
                  errorMessage={form.formState.errors?.pickUpLocation?.message}
                />
              </div>
              <div className="col-span-1">
                <DatePickerField
                  name="departureDate"
                  label="Departure date"
                  control={form.control}
                  errorMessage={form.formState.errors?.departureDate?.message}
                />
              </div>
              <div className="col-span-2">
                <InputField
                  label="Address"
                  name="departAddress"
                  placeholder="Address"
                  control={form.control}
                  errorMessage={form.formState.errors?.departAddress?.message}
                />
              </div>
              <div className="col-span-1">
                <ComboboxFieldV2
                  name="dropOffLocation"
                  label="Drop off"
                  options={tourData.dropOffLocations}
                  control={form.control}
                  placeholder="Drop off"
                  errorMessage={form.formState.errors?.dropOffLocation?.message}
                />
              </div>
              <div className="col-span-1">
                <DatePickerField
                  name="endDate"
                  label="End date"
                  disabled={true}
                  control={form.control}
                />
              </div>
              <div className="col-span-2">
                <ComboboxFieldV2
                  label="Address"
                  name="dropOffAddress"
                  control={form.control}
                  options={dropOffAddresses}
                  disabled={!dropOffAddresses.length}
                  placeholder=""
                  errorMessage={form.formState.errors?.dropOffAddress?.message}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-[0.75rem]">
              <div className="flex items-center justify-between py-[0.75rem] h-[2.5rem]">
                <div className="text-[#3F3F3F] text-[0.875rem] leading-[1.2] tracking-[0.00875rem]">
                  4 days of self-driving
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <div className="text-[#6A6A6A] text-[0.875rem] font-bold leading-[1.2] tracking-[0.00875rem] w-[3.3125rem]">
                    $172
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="18"
                    viewBox="0 0 2 18"
                    fill="none"
                  >
                    <path
                      d="M1 1L1 17"
                      stroke="#D9D9D9"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="flex px-[0.75rem] py-[0.375rem] items-center gap-[0.625rem] rounded-[0.25rem] bg-[#F1F1F1]">
                    <span className="text-[#3F3F3F] text-[0.875rem] leading-[1.2] tracking-[0.00875rem]">
                      Pax
                    </span>
                    <div className="relative flex items-center gap-[0.25rem] leading-[1.2]">
                      <Input
                        readOnly
                        type="number"
                        defaultValue={10}
                        className="shadow-none shrink-0 !p-0 !outline-none !border-none focus-visible:ring-0 w-[1.25rem] text-orange-normal text-right font-bold leading-[1.2] text-[0.875rem] tracking-[0.00875rem] h-full"
                      />
                      <div className="flex flex-col">
                        <button type="button" className="cursor-pointer">
                          <ChevronUp className="size-[0.875rem]" />
                        </button>
                        <button type="button" className="cursor-pointer">
                          <ChevronDown className="size-[0.875rem]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[0.0625rem] bg-[rgba(217,217,217,0.20)]"></div>
              <div className="flex items-center justify-between py-[0.75rem] h-[2.5rem]">
                <div className="text-[#3F3F3F] text-[0.875rem] leading-[1.2] tracking-[0.00875rem]">
                  4 days of self-driving
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <div className="text-[#6A6A6A] text-[0.875rem] font-bold leading-[1.2] tracking-[0.00875rem] w-[3.3125rem]">
                    $172
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="18"
                    viewBox="0 0 2 18"
                    fill="none"
                  >
                    <path
                      d="M1 1L1 17"
                      stroke="#D9D9D9"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="flex px-[0.75rem] py-[0.375rem] items-center gap-[0.625rem] rounded-[0.25rem] bg-[#F1F1F1]">
                    <span className="text-[#3F3F3F] text-[0.875rem] leading-[1.2] tracking-[0.00875rem]">
                      Pax
                    </span>
                    <div className="relative flex items-center gap-[0.25rem] leading-[1.2]">
                      <Input
                        readOnly
                        type="number"
                        defaultValue={10}
                        className="shadow-none shrink-0 !p-0 !outline-none !border-none focus-visible:ring-0 w-[1.25rem] text-orange-normal text-right font-bold leading-[1.2] text-[0.875rem] tracking-[0.00875rem] h-full"
                      />
                      <div className="flex flex-col">
                        <button type="button" className="cursor-pointer">
                          <ChevronUp className="size-[0.875rem]" />
                        </button>
                        <button type="button" className="cursor-pointer">
                          <ChevronDown className="size-[0.875rem]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[0.0625rem] bg-[rgba(217,217,217,0.20)]"></div>
              <div className="w-full flex items-center justify-between">
                <div className="text-[#551D0A] font-extrabold text-[1rem] leading-[1.5] tracking-[0.005rem]">
                  TOTAL
                </div>
                <div className="text-[1.25rem] font-bold leading-[1.2] text-[#262626] w-[10.5625rem] px-[0.5rem] py-[0.25rem] flex items-center justify-center rounded-[0.25rem] bg-[#F1F1F1]">
                  $567
                </div>
              </div>
            </div>
          </div>
          <div className="!w-[35.5rem] flex flex-col gap-[0.75rem] shrink-0">
            <div className="text-[#262626]/40 text-[0.875rem] font-bold leading-[1.2] tracking-[0.00875rem] uppercase">
              Confirmed tour booking
            </div>
            <div className="bg-[#F8F8F8] rounded-[0.5rem] overflow-hidden border-[0.5px] border-solid border-[#eee]">
              <div className="flex w-full">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Type of tour
                </div>
                <div className="max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
                </div>
              </div>
              <div className="flex w-full">
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
              <div className="flex w-full">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Contact Info
                </div>
                <div className="max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  tuanminh2024@gmail.com - 0941556338
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex items-center h-[3.5rem] w-[12.1875rem] px-[1rem] py-[0.5rem] border-[0.5px] border-solid border-[#eee]">
                  <span className="text-[#2e2e2e text-[0.875rem] font-extrabold leading-[1.2] tracking-[0.00875rem]">
                    Pick up
                  </span>
                </div>
                <div className="flex items-center px-[1rem] py-[0.5rem] h-[3.5rem] border-[0.5px] border-solid border-[#eee] flex-1">
                  <p className="text-[#727272] text-[0.75rem] leading-[1.2] tracking-[0.00375rem]">
                    <span className="text-[#2E2E2E] text-[0.875rem] font-semibold">
                      15/9/2023
                    </span>{" "}
                    from Hanoi at{" "}
                    <span className="text-[#2E2E2E] text-[0.875rem] font-semibold">
                      20:00
                    </span>{" "}
                    Hong Hao Hostel No. 10 Pham Hong Thai, Minh Khai Ward, Ha
                    Noi
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Tour duration
                </div>
                <div className="max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  3 Days 4 Nights
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex items-center h-[3.5rem] w-[12.1875rem] px-[1rem] py-[0.5rem] border-[0.5px] border-solid border-[#eee]">
                  <span className="text-[#2e2e2e text-[0.875rem] font-extrabold leading-[1.2] tracking-[0.00875rem]">
                    Droff off
                  </span>
                </div>
                <div className="flex items-center px-[1rem] py-[0.5rem] h-[3.5rem] border-[0.5px] border-solid border-[#eee] flex-1">
                  <p className="text-[#727272] text-[0.75rem] leading-[1.2] tracking-[0.00375rem]">
                    <span className="text-[#2E2E2E] text-[0.875rem] font-semibold">
                      18/9/2023
                    </span>{" "}
                    - My Dinh Station, Ha Noi
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Self-driving
                </div>
                <div className="max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  <p className="flex items-center gap-[0.25rem]">
                    <span className="text-[#2E2E2E] font-semibold">01</span>
                    <span>x</span>
                    <span className="text-[#2E2E2E] font-semibold">$169</span>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Easy driver
                </div>
                <div className="max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  <p className="flex items-center gap-[0.25rem]">
                    <span className="text-[#2E2E2E] font-semibold">01</span>
                    <span>x</span>
                    <span className="text-[#2E2E2E] font-semibold">$169</span>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="h-[3.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-[0.875rem] text-[#2E2E2E]">
                  Message
                </div>
                <div className="max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] text-ellipsis flex flex-1 items-center h-[3.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-[0.75rem] text-[#727272]">
                  <p className="line-clamp-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis ea cum assumenda, eum eos a dolorem doloribus
                    esse aspernatur similique dolorum accusantium magni commodi
                    dignissimos odit? Odit quasi nesciunt minus?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-[1rem] py-[0.75rem] gap-[0.5rem] rounded-[0.5rem] bg-green-normal">
              <div className="flex items-center justify-between text-[#F1F1F1] leading-[1.2] font-bold">
                <div className="text-[0.875rem]tracking-[0.00875rem]">
                  Provisional
                </div>
                <div className="text-[1rem] tracking-[0.0125rem]">$567</div>
              </div>
              <div className="flex items-center justify-between text-[#F1F1F1] leading-[1.2] font-bold">
                <div className="text-[0.875rem]tracking-[0.00875rem]">
                  Service Charge 3%:
                </div>
                <div className="text-[1rem] tracking-[0.0125rem]">$17,01</div>
              </div>
              <div className="w-full h-[0.0625rem] bg-[rgba(217,217,217,0.20)]"></div>
              <div className="flex items-center justify-between text-white leading-[1.2] font-bold">
                <div className="text-[1.25rem]">Provisional</div>
                <div className="text-[1.5rem]">$567</div>
              </div>
            </div>
            <div className="flex items-center gap-[0.5rem]">
              <button
                type="button"
                className="h-[3.5rem] flex items-center justify-center px-[2rem] py-[1rem] gap-[0.5rem] flex-1 rounded-[0.5rem] border border-solid border-orange-normal bg-orange-normal uppercase text-[0.875rem] font-bold leading-[1.2] text-white"
              >
                BOOK NOW, PAY LATER
                <Image
                  alt=""
                  width={50}
                  height={50}
                  className="size-[0.875rem]"
                  src="/images/arrow/arrow-right.svg"
                />
              </button>
              <button
                type="button"
                className="h-[3.5rem] flex items-center justify-center px-[2rem] py-[1rem] gap-[0.5rem] flex-1 rounded-[0.5rem] border border-solid border-orange-normal bg-white uppercase text-[0.875rem] font-bold leading-[1.2] text-orange-normal"
              >
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
