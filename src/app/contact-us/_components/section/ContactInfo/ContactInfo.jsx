import Image from 'next/image';
import React from 'react';
import ContactInfoList from './ContactInfoList';
import ContactMap from './ContactMap';
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <section data-aos="fade-up" data-aos-offset="300" id="contact-information">
      <div className="mx-auto w-full md:w-[87.5rem] md:pt-[4.38rem]">
        <div className="flex justify-center gap-[2.5rem] max-md:flex-wrap md:gap-[6.3125rem]">
          <div className="flex basis-full flex-col gap-[1.5rem] max-md:px-[1rem] max-md:pt-8 md:basis-1/2">
            <div className="flex flex-col gap-[1.125rem] md:gap-[3.5rem]">
              <div className="flex flex-col gap-[0.75rem]">
                <h3 className="text-[0.875rem] leading-none font-extrabold text-[#262626]/40 md:text-[1.125rem]">
                  HONG HAO TRAVEL
                </h3>
                <h2 className="font-londrina-solid text-[2rem] leading-none font-black text-[#262626] md:text-[3.5rem]">
                  CONTACT US
                </h2>
              </div>
              <p className="text-[1rem] leading-[1.5] font-bold text-[#6a6a6a]">
                Experience the raw beauty of Hà Giang with our immersive travel
                adventures. From rugged mountain landscapes to vibrant ethnic
                cultures, Hà Giang offers a truly unique and authentic
                experience.
              </p>
            </div>
            <ContactInfoList />
          </div>
          <div className="relative basis-full md:basis-1/2">
            <div className="hidden h-[30.25rem] w-[44.875rem] overflow-hidden rounded-[2rem] md:block">
              <ContactMap />
            </div>
            <div className="relative h-[35.25rem] bg-red-500 md:hidden">
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
                    'linear-gradient(180deg, hsla(0, 0%, 100%, 0) 39.54%, #fff 99.98%)',
                }}
              ></div>
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/10+Ph%E1%BA%A1m+H%E1%BB%93ng+Th%C3%A1i,+P.+Minh+Khai,+Ward,+H%C3%A0+Giang+31000,+Vietnam/@22.8241142,104.986955,17z/data=!3m1!4b1!4m6!3m5!1s0x36cc784c691466c1:0x9ec124689672e05!8m2!3d22.8241093!4d104.9895299!16s%2Fg%2F11jzsdqjx0?entry=ttu"
                className="text-orange-normal absolute top-[1.74rem] left-[1.38rem] flex h-12 items-center justify-center overflow-hidden !rounded-[2rem] bg-white/20 px-6 py-3 text-center text-[0.875rem] leading-[1.2] font-extrabold uppercase backdrop-blur-[10px]"
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
