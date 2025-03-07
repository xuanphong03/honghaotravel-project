import Image from "next/image";
import React from "react";
import ContactInfoList from "./ContactInfoList";
import ContactMap from "./ContactMap";

export default function ContactInfo() {
  return (
    <section id="contact-information">
      <div className="max-w-[100rem] mx-auto pt-[4.38rem]">
        <div className="flex justify-center gap-[6.3125rem]">
          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[3.5rem]">
              <div className="flex flex-col gap-[0.75rem]">
                <h3 className="text-[1.125rem] font-extrabold leading-none text-[#262626]/40">
                  Hong Hao Travel
                </h3>
                <h2 className="font-londrina-solid text-[3.5rem] font-black leading-none text-[#262626]">
                  Contact us
                </h2>
              </div>
              <p className="text-[#6a6a6a] font-bold leading-[1.5] text-[1rem] w-[38.8125rem]">
                Experience the raw beauty of Hà Giang with our immersive travel
                adventures. From rugged mountain landscapes to vibrant ethnic
                cultures, Hà Giang offers a truly unique and authentic
                experience.
              </p>
            </div>
            <ContactInfoList />
          </div>
          <div className="w-[44.875rem] h-[30.25rem] rounded-[2rem] overflow-hidden">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}
