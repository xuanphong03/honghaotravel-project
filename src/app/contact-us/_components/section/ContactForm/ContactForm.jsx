'use client';

import React from 'react';
import InputFieldV1 from '../../form-controls/InputFieldV1';
import TextareaFieldV1 from '../../form-controls/TextareaFieldV1';
import SelectFieldV1 from '../../form-controls/SelectFieldV1';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import BackgroundMotorbike from '@/components/common/background-motorbike/BackgroundMotorbike';
import BackgroundMotorbikeMb from '@/components/common/background-motorbike/BackgroundMotorbikeMb';
import Image from 'next/image';

const phoneRegex = /^(0[2-9]|84[2-9])\d{8}$/;
const formSchema = z.object({
  fullname: z
    .string({ required_error: 'Please enter your name' })
    .nonempty('Fullname is required'),
  phone: z
    .string({ required_error: 'Please enter your phone number' })
    .nonempty('Phone number is required')
    .regex(phoneRegex, 'Invalid phone number'),
  email: z
    .string({ required_error: 'Please enter your email' })
    .email({ message: 'Invalid email address' }),
  country: z
    .string({ required_error: 'Please select your country' })
    .nonempty('Fullname is required'),
  subject: z
    .string({ required_error: 'Please enter subject' })
    .nonempty('Fullname is required'),
  message: z
    .string({ required_error: 'Please enter your message' })
    .min(2, 'Must be 2 or more characters long')
    .max(200, 'Must be 200 or fewer characters long'),
});

export default function ContactForm() {
  const COUNTRY_LIST = [
    { id: 1, value: 'America' },
    { id: 2, value: 'France' },
    { id: 3, value: 'Canada' },
    { id: 4, value: 'Japan' },
    { id: 5, value: 'Việt Nam' },
    { id: 6, value: 'Spain' },
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      phone: '',
      email: '',
      country: '',
      subject: '',
      message: '',
    },
  });

  const handleFormSubmit = async (data) => {
    console.log('Data:', data);
  };

  return (
    <section id="contact-form" className="">
      <div className="relative h-full w-full max-md:h-[81.2695rem] md:pt-[8rem]">
        <div className="absolute bottom-[-5rem] h-[41.2695rem] w-[23.43744rem] bg-[#13341C] max-md:h-[51.2695rem] md:hidden"></div>
        <div className="hidden md:block">
          <BackgroundMotorbike />
        </div>
        <div className="block md:hidden">
          <BackgroundMotorbikeMb />
        </div>
        <Image
          alt=""
          width={500}
          height={500}
          src="/images/contact-us/mountain-deco-mb.png"
          className="absolute top-[10%] left-0 md:hidden"
        />
        <div className="absolute top-[9rem] w-full max-md:px-4 md:top-[20rem] md:left-[36%] md:w-[32rem]">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            className="relative mx-auto flex w-full flex-col items-center gap-8 max-md:px-4 md:w-[32rem]"
          >
            <div className="text-center uppercase">
              <h3 className="text-[0.875rem] leading-none font-extrabold text-white/40 max-md:mb-3 md:text-[1.125rem]">
                Contact
              </h3>
              <h2 className="font-londrina-solid text-[2.5rem] leading-none font-black text-white md:text-[3.5rem]">
                Get in touch
              </h2>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleFormSubmit)}
                className="grid w-full grid-cols-2 gap-[1rem]"
              >
                <div className="col-span-1">
                  <InputFieldV1
                    name="fullname"
                    placeholder="Full name *"
                    control={form.control}
                    errorMessage={form.formState.errors?.fullname?.message}
                  />
                </div>
                <div className="col-span-1">
                  <InputFieldV1
                    name="phone"
                    placeholder="Phone *"
                    control={form.control}
                    errorMessage={form.formState.errors?.phone?.message}
                  />
                </div>
                <div className="col-span-1">
                  <InputFieldV1
                    name="email"
                    placeholder="Your email"
                    control={form.control}
                    errorMessage={form.formState.errors?.email?.message}
                  />
                </div>
                <div className="col-span-1">
                  <SelectFieldV1
                    name="country"
                    placeholder="Select country"
                    options={COUNTRY_LIST}
                    control={form.control}
                    errorMessage={form.formState.errors?.country?.message}
                  />
                </div>
                <div className="col-span-2">
                  <InputFieldV1
                    name="subject"
                    placeholder="Contact subject"
                    control={form.control}
                    errorMessage={form.formState.errors?.subject?.message}
                  />
                </div>
                <div className="col-span-2">
                  <TextareaFieldV1
                    rows={4}
                    name="message"
                    placeholder="Message"
                    control={form.control}
                    errorMessage={form.formState.errors?.message?.message}
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="bg-orange-normal hover:bg-orange-normal__hover inline-flex h-[2.75rem] w-full cursor-pointer items-center justify-center rounded-[0.5rem] px-[1.25rem] py-[0.625rem] transition-colors"
                  >
                    <span className="text-[0.875rem] leading-[1.2] font-bold text-white uppercase">
                      Send a message
                    </span>
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
