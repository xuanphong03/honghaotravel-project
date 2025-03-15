import Image from "next/image";
import React from "react";
import ContactInfoList from "./ContactInfoList";
import ContactMap from "./ContactMap";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <section id="contact-information">
      <div className="w-full md:w-[87.5rem] mx-auto md:pt-[4.38rem]">
        <div className="flex justify-center gap-[2.5rem] md:gap-[6.3125rem] max-md:flex-wrap">
          <div className="flex flex-col gap-[1.5rem] basis-full md:basis-1/2 max-md:pt-8 max-md:px-[1rem]">
            <div className="flex flex-col gap-[1.125rem] md:gap-[3.5rem]">
              <div className="flex flex-col gap-[0.75rem]">
                <h3 className="text-[0.875rem] md:text-[1.125rem] font-extrabold leading-none text-[#262626]/40">
                  HONG HAO TRAVEL
                </h3>
                <h2 className=" font-londrina-solid text-[2rem] md:text-[3.5rem] font-black leading-none text-[#262626]">
                  CONTACT US
                </h2>
              </div>
              <p className="text-[#6a6a6a] font-bold leading-[1.5] text-[1rem]">
                Experience the raw beauty of Hà Giang with our immersive travel
                adventures. From rugged mountain landscapes to vibrant ethnic
                cultures, Hà Giang offers a truly unique and authentic
                experience.
              </p>
            </div>
            <ContactInfoList />
          </div>
          <div className="relative basis-full md:basis-1/2">
            <div className="hidden md:block w-[44.875rem] h-[30.25rem] rounded-[2rem] overflow-hidden">
              <ContactMap />
            </div>
            <div className="relative md:hidden h-[35.25rem] bg-red-500">
              <Image
                alt=""
                width={500}
                height={700}
                src="/images/contact-us/bg-contact-us-mobile.jpeg"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, hsla(0, 0%, 100%, 0) 39.54%, #fff 99.98%)",
                }}
              ></div>
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/10+Ph%E1%BA%A1m+H%E1%BB%93ng+Th%C3%A1i,+P.+Minh+Khai,+Ward,+H%C3%A0+Giang+31000,+Vietnam/@22.8241142,104.986955,17z/data=!3m1!4b1!4m6!3m5!1s0x36cc784c691466c1:0x9ec124689672e05!8m2!3d22.8241093!4d104.9895299!16s%2Fg%2F11jzsdqjx0?entry=ttu"
                className="absolute top-[1.74rem] overflow-hidden left-[1.38rem] py-3 h-12 flex justify-center items-center px-6 !rounded-[2rem] bg-white/20 backdrop-blur-[10px] text-orange-normal text-center text-[0.875rem] font-extrabold leading-[1.2] uppercase"
              >
                GOOGLE MAP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
