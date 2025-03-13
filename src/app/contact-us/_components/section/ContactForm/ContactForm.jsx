"use client";

import React from "react";
import InputFieldV1 from "../../form-controls/InputFieldV1";
import TextareaFieldV1 from "../../form-controls/TextareaFieldV1";
import SelectFieldV1 from "../../form-controls/SelectFieldV1";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

const phoneRegex = /^(0[2-9]|84[2-9])\d{8}$/;
const formSchema = z.object({
  fullname: z
    .string({ required_error: "Please enter your name" })
    .nonempty("Fullname is required"),
  phone: z
    .string({ required_error: "Please enter your phone number" })
    .nonempty("Phone number is required")
    .regex(phoneRegex, "Invalid phone number"),
  email: z
    .string({ required_error: "Please enter your email" })
    .email({ message: "Invalid email address" }),
  country: z
    .string({ required_error: "Please select your country" })
    .nonempty("Fullname is required"),
  subject: z
    .string({ required_error: "Please enter subject" })
    .nonempty("Fullname is required"),
  message: z
    .string({ required_error: "Please enter your message" })
    .min(2, "Must be 2 or more characters long")
    .max(200, "Must be 200 or fewer characters long"),
});

export default function ContactForm() {
  const COUNTRY_LIST = [
    { id: 1, value: "America" },
    { id: 2, value: "France" },
    { id: 3, value: "Canada" },
    { id: 4, value: "Japan" },
    { id: 5, value: "Việt Nam" },
    { id: 6, value: "Spain" },
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      country: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (data) => {
    console.log("Data:", data);
  };

  return (
    <section id="contact-form" className="relative bg-green-800">
      <div className="flex flex-col gap-[5.3125rem] items-center w-full md:w-[32rem] mx-auto">
        <div className="text-center uppercase">
          <h3 className="text-white/40 text-[1.125rem] leading-none font-extrabold">
            Contact
          </h3>
          <h2 className="text-[3.5rem] leading-none font-black font-londrina-solid text-white">
            Get in touch
          </h2>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="grid grid-cols-2 gap-[1rem] w-full"
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
                className="cursor-pointer w-full inline-flex items-center justify-center h-[2.75rem] px-[1.25rem] py-[0.625rem] rounded-[0.5rem] bg-orange-normal hover:bg-orange-normal__hover transition-colors"
              >
                <span className="text-white font-bold leading-[1.2] text-[0.875rem] uppercase">
                  Send a message
                </span>
              </button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
