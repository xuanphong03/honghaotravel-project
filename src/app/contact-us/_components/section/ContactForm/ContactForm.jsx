"use client";
import React, { useState } from "react";
import InputFieldV1 from "../../form-controls/InputFieldV1";
import TextareaFieldV1 from "../../form-controls/TextareaFieldV1";
import SelectFieldV1 from "../../form-controls/SelectFieldV1";

export default function ContactForm() {
  const COUNTRY_LIST = [
    { id: 1, value: "America" },
    { id: 2, value: "France" },
    { id: 3, value: "Canada" },
    { id: 4, value: "Japan" },
    { id: 5, value: "Việt Nam" },
    { id: 6, value: "Spain" },
  ];
  const [formData, setFormData] = useState({
    fullname: null,
    phone: null,
    email: null,
    country: null,
    subject: null,
    message: null,
  });

  const handleFormDataChange = ({ name, value }) => {
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact-form" className="relative bg-green-800">
      <div className="flex flex-col gap-[5.3125rem] items-center">
        <div className="text-center uppercase">
          <h3 className="text-white/40 text-[1.125rem] leading-none font-extrabold">
            Contact
          </h3>
          <h2 className="text-[3.5rem] leading-none font-black font-londrina-solid text-white">
            Get in touch
          </h2>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-2 gap-[1rem]"
        >
          <div className="col-span-1">
            <InputFieldV1
              name="fullname"
              placeholder="Full name *"
              onChange={handleFormDataChange}
              defaultValue={formData.fullname}
            />
          </div>
          <div className="col-span-1">
            <InputFieldV1
              name="phone"
              placeholder="Phone *"
              onChange={handleFormDataChange}
              defaultValue={formData.phone}
            />
          </div>
          <div className="col-span-1">
            <InputFieldV1
              name="email"
              placeholder="Your email"
              onChange={handleFormDataChange}
              defaultValue={formData.email}
            />
          </div>
          <div className="col-span-1">
            <SelectFieldV1
              name="country"
              placeholder="Select country"
              options={COUNTRY_LIST}
              onChange={handleFormDataChange}
              defaultValue={formData.country}
            />
          </div>
          <div className="col-span-2">
            <InputFieldV1
              name="subject"
              placeholder="Contact subject"
              onChange={handleFormDataChange}
              defaultValue={formData.subject}
            />
          </div>
          <div className="col-span-2">
            <TextareaFieldV1
              rows={3}
              name="message"
              placeholder="Message"
              onChange={handleFormDataChange}
              defaultValue={formData.message}
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
      </div>
    </section>
  );
}
