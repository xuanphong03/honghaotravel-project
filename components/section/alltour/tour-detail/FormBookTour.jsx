'use client';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDays, format } from 'date-fns';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import LocationData from '@/app/services/location.json';
import TourData from '@/app/services/tour.json';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { TOUR_BOOKING_FORM } from '@/constants/schema';
import { mapWithUuid } from '@/lib/utils';
import ComboboxFieldV2 from '@/app/_components/form-controls/ComboboxFieldV2';
import DatePickerField from '@/app/_components/form-controls/DatePickerField';
import InputField from '@/app/_components/form-controls/InputField';
import TextareaField from '@/app/_components/form-controls/TextareaField';
import SubmitButton from '@/app/_components/common/form/SubmitButton';
import NumberFieldV2 from '@/app/_components/form-controls/NumberFieldV2';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function TourBookingForm({ defaultValues = null }) {
  const [tourData, setTourData] = useState({
    typeTours: [],
    durationTours: [],
    pickUpLocations: [],
    dropOffLocations: [],
  });

  const [dropOffAddresses, setDropOffAddresses] = useState([]);

  const text = useRef(null);
  const container = useRef(null);

  const form = useForm({
    resolver: zodResolver(TOUR_BOOKING_FORM),
    defaultValues: {
      tourByDay: '',
      tourByType: '',
      selfDriving: 0,
      localDriving: 0,
      customerName: '',
      phoneNumber: '',
      email: '',
      message: '',
      pickUpLocation: '',
      dropOffLocation: '',
      departAddress: '',
      dropOffAddress: '',
      endDate: null,
      ...defaultValues,
    },
  });
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const formValues = watch();
  const {
    tourByDay,
    tourByType,
    pickUpLocation,
    departureDate,
    dropOffLocation,
    selfDriving,
    localDriving,
  } = formValues;
  const disabledStatus = useMemo(() => {
    return (
      !(selfDriving > 0 || localDriving > 0) ||
      !tourByDay ||
      !tourByType ||
      !pickUpLocation ||
      !departureDate ||
      !dropOffLocation
    );
  }, [
    tourByDay,
    tourByType,
    pickUpLocation,
    departureDate,
    dropOffLocation,
    selfDriving,
    localDriving,
  ]);

  const tourDuration = useMemo(() => {
    if (!tourByDay) return { days: 0, nights: 0 };
    const match = tourByDay.match(/^(\d+)\s+days\s+(\d+)\s+night/);
    return match
      ? { days: parseInt(match[1], 10), nights: parseInt(match[2], 10) }
      : { days: 0, nights: 0 };
  }, [tourByDay]);

  const handleFormSubmit = async (data) => {
    console.log('Data:', data);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: '-30% center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });

    tl.to(
      text.current,
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      },
      's',
    );
  });

  useEffect(() => {
    if (
      formValues?.departureDate &&
      formValues?.tourByDay &&
      tourDuration.days > 0
    ) {
      const calculatedEndDate = addDays(
        formValues?.departureDate,
        tourDuration.days,
      );
      setValue('endDate', calculatedEndDate);
    }
    if (!formValues?.departureDate) {
      form.setValue('endDate', null);
    }
  }, [departureDate, tourByDay, tourDuration.days, setValue]);

  // Cập nhật lại danh sách trả khách theo thành phố
  useEffect(() => {
    if (dropOffLocation) {
      const location = tourData.dropOffLocations.find(
        (loc) => loc.value === dropOffLocation,
      );
      setValue('dropOffAddress', '');
      setDropOffAddresses(
        location?.addresses?.map((addr) => ({
          id: uuidv4(),
          value: addr.address,
        })) || [],
      );
    }
  }, [dropOffLocation, tourData.dropOffLocations, setValue]);

  // Khởi tạo dữ liệu mặc định cho form
  useEffect(() => {
    const typeTours = mapWithUuid(TourData.typeOfTours, 'type');
    const durationTours = mapWithUuid(TourData.durationTours, 'duration');
    const pickUpLocations = mapWithUuid(
      LocationData.pickUpLocations,
      'location',
    );
    const dropOffLocations = LocationData.dropOffLocations.map(
      ({ location, addresses }) => ({
        id: uuidv4(),
        value: location,
        addresses,
      }),
    );

    setTourData({
      typeTours,
      durationTours,
      pickUpLocations,
      dropOffLocations,
    });

    setValue(
      'tourByType',
      defaultValues?.tourByType || typeTours[0]?.value || '',
    );
    setValue(
      'tourByDay',
      defaultValues?.tourByDay || durationTours[0]?.value || '',
    );
  }, [setValue, defaultValues]);

  return (
    <div ref={container} className="relative !w-full">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="relative flex max-h-fit w-full max-md:flex-wrap max-md:gap-y-12 md:flex md:max-h-[85vh] md:justify-between"
        >
          <div
            ref={text}
            className="title absolute -top-28 left-0 flex translate-y-12 transform flex-col gap-3 opacity-0 max-md:hidden"
          >
            <p className="sub2-regular caption-regular !text-greyscaletext-0 !text-xl !leading-[100%] !font-bold opacity-40">
              EASY WITH HONG HA TRAVEL
            </p>
            <h2 className="h3-bold__mb h2-bold !text-greyscaletext-0">
              ONLINE BOOKING
            </h2>
          </div>
          <div className="sub1-bold !text-greyscaletext-80-main md:!text-greyscaletext-0 absolute -top-8 text-[0.875rem] leading-[1.2] font-bold tracking-[0.00875rem] uppercase md:hidden">
            Confirmed Information :
          </div>
          <div className="form-left flex w-full shrink-0 flex-col gap-[1rem] rounded-[1.5rem] bg-white md:w-[65%] md:py-[1.5rem] md:pr-[0.75rem] md:pl-[1.5rem]">
            <div className="w-full">
              <div className="mb-3 flex w-full items-center gap-5">
                <span className="sub2-bold !text-gray-scale-80">
                  Type of tour:
                </span>
                <span className="body1-regular !text-grey-50">
                  Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
                </span>
              </div>
              <div className="mb-3 flex w-full flex-col gap-[0.75rem]">
                <div className="flex h-[2.5rem] items-center justify-between py-[0.75rem]">
                  <div className="text-[0.875rem] leading-[1.2] tracking-[0.00875rem] text-[#3F3F3F]">
                    {tourDuration?.days} days of self-driving
                  </div>
                  <div className="flex items-center gap-[0.5rem]">
                    <div className="w-[3.3125rem] text-[0.875rem] leading-[1.2] font-bold tracking-[0.00875rem] text-[#6A6A6A]">
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

                    <NumberFieldV2
                      name="selfDriving"
                      control={control}
                      unit="Pax"
                      errorMessage="Please select the number of people"
                    />
                  </div>
                </div>
                <div className="h-[0.0625rem] w-full bg-[rgba(217,217,217,0.20)]"></div>
                <div className="flex h-[2.5rem] items-center justify-between py-[0.75rem]">
                  <div className="text-[0.875rem] leading-[1.2] tracking-[0.00875rem] text-[#3F3F3F]">
                    {tourDuration?.days} days with local driver
                  </div>
                  <div className="flex items-center gap-[0.5rem]">
                    <div className="w-[3.3125rem] text-[0.875rem] leading-[1.2] font-bold tracking-[0.00875rem] text-[#6A6A6A]">
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
                    <div className="flex items-center gap-[0.625rem] rounded-[0.25rem] bg-[#F1F1F1] px-[0.75rem] py-[0.375rem]">
                      <span className="text-[0.875rem] leading-[1.2] tracking-[0.00875rem] text-[#3F3F3F]">
                        Pax
                      </span>
                      <div className="relative">
                        <FormField
                          name="localDriving"
                          control={control}
                          render={({ field }) => {
                            const handleIncrement = () => {
                              field.onChange(field.value + 1);
                            };
                            const handleDecrement = () => {
                              if (field.value > 0) {
                                field.onChange(field.value - 1);
                              }
                            };
                            return (
                              <FormItem className="flex items-center gap-[0.25rem] leading-[1.2]">
                                <FormControl>
                                  <Input
                                    readOnly
                                    {...field}
                                    type="number"
                                    className="text-orange-normal h-full w-[1.25rem] shrink-0 !border-none !p-0 text-right text-[0.875rem] leading-[1.2] font-bold tracking-[0.00875rem] shadow-none !outline-none focus-visible:ring-0"
                                  />
                                </FormControl>
                                <div className="flex flex-col">
                                  <button
                                    type="button"
                                    onClick={handleIncrement}
                                    className="cursor-pointer"
                                  >
                                    <ChevronUp className="size-[0.875rem]" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={handleDecrement}
                                    className="cursor-pointer"
                                  >
                                    <ChevronDown className="size-[0.875rem]" />
                                  </button>
                                </div>
                              </FormItem>
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[0.0625rem] w-full bg-[rgba(217,217,217,0.20)]"></div>
                <div className="flex w-full items-center justify-between">
                  <div className="text-[1rem] leading-[1.5] font-extrabold tracking-[0.005rem] text-[#551D0A]">
                    TOTAL
                  </div>
                  <div className="flex w-[10.5625rem] items-center justify-center rounded-[0.25rem] bg-[#F1F1F1] px-[0.5rem] py-[0.25rem] text-[1.25rem] leading-[1.2] font-bold text-[#262626]">
                    $567
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[0.75rem]">
                <div className="col-span-2">
                  <InputField
                    name="customerName"
                    type="text"
                    control={control}
                    placeholder="Peter Nguyen Tuan Anh"
                    errorMessage={form.formState.errors?.customerName?.message}
                  />
                </div>
                <div className="col-span-1">
                  <InputField
                    type="text"
                    name="phoneNumber"
                    placeholder="(Whatsapp) +84 *"
                    control={control}
                    errorMessage={form.formState.errors?.phoneNumber?.message}
                  />
                </div>
                <div className="col-span-1">
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Email *"
                    control={control}
                    errorMessage={form.formState.errors?.email?.message}
                  />
                </div>
                <div className="col-span-2">
                  <TextareaField
                    rows={2}
                    name="message"
                    placeholder="Message"
                    control={control}
                    errorMessage={form.formState.errors?.message?.message}
                  />
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-4 gap-x-[0.5rem] gap-y-[1rem]">
              <div className="col-span-2 md:col-span-1">
                <ComboboxFieldV2
                  name="pickUpLocation"
                  label="Pick up"
                  options={tourData.pickUpLocations}
                  control={control}
                  placeholder="Pick up"
                  errorMessage={form.formState.errors?.pickUpLocation?.message}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <DatePickerField
                  name="departureDate"
                  label="Departure date"
                  control={control}
                  errorMessage={form.formState.errors?.departureDate?.message}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <InputField
                  label="Address"
                  name="departAddress"
                  placeholder="Address"
                  control={control}
                  errorMessage={form.formState.errors?.departAddress?.message}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ComboboxFieldV2
                  name="dropOffLocation"
                  label="Drop off"
                  options={tourData.dropOffLocations}
                  control={control}
                  placeholder="Drop off"
                  errorMessage={form.formState.errors?.dropOffLocation?.message}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <DatePickerField
                  name="endDate"
                  label="End date"
                  disabled={true}
                  control={control}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <ComboboxFieldV2
                  label="Address"
                  name="dropOffAddress"
                  control={control}
                  options={dropOffAddresses}
                  disabled={!dropOffAddresses.length}
                  placeholder="Please Select Drop off"
                  errorMessage={form.formState.errors?.dropOffAddress?.message}
                />
              </div>
            </div>
            <div className="flex items-center gap-3 max-md:hidden">
              <div className="flex w-[58%] flex-col items-center gap-[0.5rem] md:flex-row">
                <SubmitButton label="PAY NOW" disabled={disabledStatus} />
                <SubmitButton
                  label="BOOK NOW, PAY NOW"
                  isPrimary
                  disabled={disabledStatus}
                />
              </div>
              <div className="paycard flex items-center gap-2">
                <Image
                  src={'/images/alltour/detail/paycard-visa.png'}
                  alt="visa"
                  width={35}
                  height={21.96096}
                  className="object-contain"
                />
                <Image
                  src={'/images/alltour/detail/paymentcard2.png'}
                  alt=""
                  width={35}
                  height={21.96096}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="form-right relative flex w-full shrink-0 flex-col gap-[0.75rem] md:w-[33.5%]">
            <div className="sub1-bold !text-greyscaletext-80-main md:!text-greyscaletext-0 absolute -top-8 text-[0.875rem] leading-[1.2] font-bold tracking-[0.00875rem] uppercase">
              Confirmed tour booking :
            </div>
            <div className="overflow-hidden rounded-[0.5rem] border-[0.5px] border-solid border-[#eee] bg-[#F8F8F8]">
              <div className="flex w-full">
                <div className="flex h-[2.5rem] w-[12.1875rem] items-center border-r-[0.5px] border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.875rem] font-extrabold text-[#2E2E2E] max-md:w-[7.4375rem]">
                  Type of tour
                </div>
                <div className="line-clamp-2 flex h-[2.5rem] flex-1 items-center border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.75rem] text-ellipsis text-[#727272]">
                  Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex h-[2.5rem] w-[12.1875rem] items-center border-r-[0.5px] border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.875rem] font-extrabold text-[#2E2E2E] max-md:w-[7.4375rem]">
                  Name
                </div>
                <div className="line-clamp-2 flex h-[2.5rem] flex-1 items-center border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.75rem] text-ellipsis text-[#727272]">
                  <p className="line-clamp-2 text-[0.75rem] text-ellipsis text-[#727272]">
                    {formValues?.customerName &&
                      formValues?.customerName + ' - '}
                    <span className="text-[0.875rem] font-semibold text-[#2E2E2E]">
                      {(formValues?.selfDriving || formValues?.localDriving) &&
                        (formValues?.selfDriving || 0) +
                          (formValues?.localDriving || 0)}{' '}
                      px
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex h-[2.5rem] w-[12.1875rem] items-center border-r-[0.5px] border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.875rem] font-extrabold text-[#2E2E2E] max-md:w-[7.4375rem]">
                  Contact Info
                </div>
                <div className="line-clamp-2 flex h-[2.5rem] flex-1 items-center border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.75rem] text-ellipsis text-[#727272]">
                  {formValues?.email}{' '}
                  {formValues?.email && formValues?.phoneNumber && ' - '}{' '}
                  {formValues?.phoneNumber}
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex h-[3.5rem] w-[12.1875rem] items-center border-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] max-md:w-[7.4375rem]">
                  <span className="text-[#2e2e2e text-[0.875rem] leading-[1.2] font-extrabold tracking-[0.00875rem]">
                    Pick up
                  </span>
                </div>
                <div className="flex h-[3.5rem] flex-1 items-center border-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem]">
                  <p className="text-[0.75rem] leading-[1.2] tracking-[0.00375rem] text-[#727272]">
                    <span className="text-[0.875rem] font-semibold text-[#2E2E2E]">
                      {formValues?.departureDate &&
                        format(formValues?.departureDate, 'dd/MM/yyyy')}
                    </span>{' '}
                    {formValues?.pickUpLocation && 'from '}
                    <span className="text-[0.875rem] font-semibold text-[#2E2E2E]">
                      {formValues?.pickUpLocation}
                    </span>
                    {formValues?.departAddress && ' at '}
                    {formValues?.departAddress}
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex h-[2.5rem] w-[12.1875rem] items-center border-r-[0.5px] border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.875rem] font-extrabold text-[#2E2E2E] max-md:w-[7.4375rem]">
                  Tour duration
                </div>
                <div className="line-clamp-2 flex h-[2.5rem] flex-1 items-center border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.75rem] text-ellipsis text-[#727272]">
                  3 Days 4 Nights
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex h-[3.5rem] w-[12.1875rem] items-center border-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] max-md:w-[7.4375rem]">
                  <span className="text-[#2e2e2e text-[0.875rem] leading-[1.2] font-extrabold tracking-[0.00875rem]">
                    Drop off
                  </span>
                </div>
                <div className="flex h-[3.5rem] flex-1 items-center border-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem]">
                  <p className="text-[0.75rem] leading-[1.2] tracking-[0.00375rem] text-[#727272]">
                    <span className="text-[0.875rem] font-semibold text-[#2E2E2E]">
                      {formValues?.endDate &&
                        format(formValues?.endDate, 'dd/MM/yyyy')}
                    </span>{' '}
                    {formValues?.dropOffLocation && ' - '}
                    {formValues?.dropOffLocation}
                    {formValues?.dropOffAddress && ', '}
                    {formValues?.dropOffAddress}
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex h-[2.5rem] w-[12.1875rem] items-center border-r-[0.5px] border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.875rem] font-extrabold text-[#2E2E2E] max-md:w-[7.4375rem]">
                  Self-driving
                </div>
                <div className="line-clamp-2 flex h-[2.5rem] flex-1 items-center border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.75rem] text-ellipsis text-[#727272]">
                  <p className="flex items-center gap-[0.25rem]">
                    <span className="font-semibold text-[#2E2E2E]">
                      {formValues?.selfDriving}
                    </span>
                    <span>x</span>
                    <span className="font-semibold text-[#2E2E2E]">$200</span>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex h-[2.5rem] w-[12.1875rem] items-center border-r-[0.5px] border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.875rem] font-extrabold text-[#2E2E2E] max-md:w-[7.4375rem]">
                  Easy driver
                </div>
                <div className="line-clamp-2 flex h-[2.5rem] flex-1 items-center border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.75rem] text-ellipsis text-[#727272]">
                  <p className="flex items-center gap-[0.25rem]">
                    <span className="font-semibold text-[#2E2E2E]">
                      {formValues?.localDriving}
                    </span>
                    <span>x</span>
                    <span className="font-semibold text-[#2E2E2E]">$200</span>
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex h-[3.5rem] w-[12.1875rem] items-center border-r-[0.5px] border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.875rem] font-extrabold text-[#2E2E2E] max-md:w-[7.4375rem]">
                  Message
                </div>
                <div className="flex h-[3.5rem] flex-1 items-center border-b-[0.5px] border-solid border-[#eee] px-[1rem] py-[0.5rem] text-[0.75rem] text-ellipsis text-[#727272]">
                  <p className="line-clamp-1">{formValues?.message}</p>
                </div>
              </div>
            </div>
            <div className="bg-green-normal flex flex-col gap-[0.5rem] rounded-[0.5rem] px-[1rem] py-[0.75rem]">
              <div className="flex items-center justify-between leading-[1.2] font-bold text-[#F1F1F1]">
                <div className="text-[0.875rem]tracking-[0.00875rem]">
                  Provisional
                </div>
                <div className="text-[1rem] tracking-[0.0125rem]">$567</div>
              </div>

              <div className="h-[0.0625rem] w-full bg-[rgba(217,217,217,0.20)]"></div>
              <div className="flex items-center justify-between leading-[1.2] font-bold text-white">
                <div className="text-[1.25rem]">Total amount:</div>
                <div className="text-[1.5rem]">$567</div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-3 md:hidden">
              <div className="col-span-2">
                <SubmitButton
                  label="BOOK NOW, PAY NOW"
                  isPrimary
                  disabled={disabledStatus}
                />
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <SubmitButton label="PAY NOW" disabled={disabledStatus} />
                <div className="paycard flex items-center gap-2">
                  <Image
                    src={'/images/alltour/detail/paycard-visa.png'}
                    alt="visa"
                    width={35}
                    height={21.96096}
                    className="object-contain"
                  />
                  <Image
                    src={'/images/alltour/detail/paymentcard2.png'}
                    alt=""
                    width={35}
                    height={21.96096}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
