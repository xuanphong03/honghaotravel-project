'use client';
import { Plus, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { AccordionDemo } from '../alltour/tour-detail/Accordion';
import FormAsk from './FormAsk';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function FAQQuestion() {
  const [ans, setAns] = useState(false);
  const [active, setActive] = useState(0);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const text5 = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: '-10% center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: '10% center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: '65% center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: '75% center',
        end: '70% center',
        end: false,
        markers: false,
        once: true, // Hiệu ứng chỉ chạy một lần
        scrub: false,
      },
    });

    tl.to(
      text1.current,
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      },
      's',
    );
    tl2.to(
      text2.current,
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      },
      'a',
    );
    tl3.to(text3.current, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    });
    tl4.to(text4.current, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    });
    tl5.to(text5.current, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    });
  });
  return (
    <div
      ref={container}
      className="mx-auto flex max-w-[87.5rem] flex-col max-md:px-3 max-md:pt-8 md:gap-[3.56rem] md:py-16"
    >
      <div
        ref={text1}
        className="title flex w-full translate-y-12 transform flex-col gap-3 opacity-0 max-md:mb-[1.12rem]"
      >
        <p className="sub2-regular__mb caption-regular !text-greyscaletext-80-main !text-xl !leading-[100%] !font-bold opacity-40">
          FAQS
        </p>
        <h2 className="h2-bold__mb h2-bold !text-greyscaletext-80-main max-md:!text-[2rem]">
          QUESTIONS ? LOOK HERE
        </h2>
      </div>
      <p
        ref={text2}
        className="body1-bold__mb body1-bold !text-greyscaletext-40 w-[38.8125rem] max-w-full translate-y-12 transform opacity-0 max-md:mb-[1.56rem]"
      >
        Experience the raw beauty of Hà Giang with our immersive travel
        adventures. From rugged mountain landscapes to vibrant ethnic cultures,
        Hà Giang offers a truly unique and authentic experience........
      </p>

      <div
        ref={text3}
        className="questions translate-y-12 transform gap-[1.125rem] opacity-0 max-md:flex max-md:overflow-x-scroll md:grid md:grid-cols-4"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setAns(true);
              setActive(index);
            }}
            onMouseLeave={() => {
              setAns(false);
              setActive(index);
            }}
            className={`h-[16.75rem] w-[16.8125rem] shrink-0 rounded-3xl md:col-span-1 md:h-[21.75rem] md:w-full md:overflow-hidden ${ans && active === index ? 'bg-greyscaletext-5 opacity-100' : 'bg-[#F8EAE4] opacity-100'} relative p-8 duration-500 ease-in-out`}
          >
            <div className="flex h-full w-full flex-col justify-between">
              <div className="plus flex w-full justify-end">
                <div
                  onClick={() => {
                    setAns(true);
                    setActive(index);
                  }}
                  className={`bg-orange-normal rounded-md ${ans && active === index ? 'translate-x-14 transform opacity-0' : ''} flex h-fit w-fit cursor-pointer items-center justify-center p-2 duration-500 ease-in-out md:p-3`}
                >
                  <Plus className="h-4 w-4" color="#fff" />
                </div>
              </div>
              <p
                className={`sub2-medium__mb sub2-medium ${ans && active === index ? 'translate-y-14 transform opacity-0' : ''} !text-greyscaletext-80-main !text-[2.75rem] duration-500 ease-in-out max-md:!text-[2rem]`}
              >
                What is excluded?
              </p>
            </div>
            <div
              className={`absolute top-0 left-0 flex h-full w-full flex-col gap-3 p-8 md:gap-6 ${ans && active === index ? 'opacity-100' : 'opacity-0'} duration-500 ease-in-out`}
            >
              <X
                className="absolute top-8 right-8 h-3 w-3 cursor-pointer"
                color={'#6a6a6a '}
                onClick={() => {
                  setAns(false);
                  setActive(index);
                }}
              />
              <strong
                className={`sub2-medium sub2-medium__mb !text-greyscaletext-80-main !text-[1.125rem]`}
              >
                What is excluded?
              </strong>
              <p
                className={`body1-regular__mb body1-regular !text-greyscaletext-40 overflow-y-scroll`}
              >
                Included: Experienced tour guide Bike rentals (semi-automatic or
                manual) Fuel for the bikes Accommodation (private rooms
                available) Meals (breakfast, lunch, and dinner) Entrance fees to
                attractions Protective gear (helmet, knee, and elbow pads)
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="asked max-md:mt-12">
        <h2
          ref={text4}
          className="h2-bold-tripsan__mb h2-bold-tripsan !text-greyscaletext-80-main translate-y-12 transform !text-[2.5rem] !font-bold opacity-0 max-md:mb-6 max-md:!text-[1.5rem]"
        >
          Frequently asked Questions
        </h2>
        <div
          ref={text5}
          className="flex translate-y-12 transform opacity-0 max-md:flex-col max-md:gap-8 md:mt-[2.81rem] md:justify-between"
        >
          <AccordionDemo />
          <FormAsk />
        </div>
      </div>
    </div>
  );
}
