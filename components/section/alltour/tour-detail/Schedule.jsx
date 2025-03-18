"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "./schedule.css";
import MousewheelSwiper from "./Swiper";

const schedules = [
  {
    id: 0,
    map: "/images/alltour/detail/Schedule-N1.png",
    name: "",
    title: "Night 1 : Hanoi – Ha Giang City",
    des: "7:30pm to 8:00pm: The bus picks up from your hotel/hostel in Hanoi the sleeping bus will leave Hanoi. You will arrive to Ha Giang around 4:00am, check in stay at Hong Hao hostel for few hours before start.",
  },
  {
    id: 1,
    map: "/images/alltour/detail/Schedule-D1",
    name: "TP. Ha Giang",
    title: "Day 1 : Ha Giang City - Quan Ba - Yen Minh - Dong Van town",
    des: "- 8:00 am : Have breakfast at Hong Hao hostel - 8:30 am : Meet up with the guide and start to go on the loop.",
  },
  {
    id: 2,
    map: "/images/alltour/detail/Schedule-D2",
    name: "TP. Ha Giang",
    title: "Day 2 : Dong Van Town - Ma Pi Leng Pass - Meo Vac - Yen Minh - Quan Ba - Ha Giang City",
    des: "- 8:00 am : Have breakfast - 8:30 am : Continue the journey through Ma Pi Leng Pass and other scenic spots.",
  },
  {
    id: 3,
    map: "/images/alltour/detail/Schedule-D3",
    name: "TP. Ha Giang",
    title: "Day 3 : Ha Giang City - Quan Ba - Yen Minh - Dong Van town",
    des: "- 8:00 am : Have breakfast at Hong Hao hostel - 8:30 am : Meet up with the guide and start to go on the loop.",
  },
  {
    id: 4,
    map: "/images/alltour/detail/Schedule-D4",
    name: "TP. Ha Giang",
    title: "Day 4 : Ha Giang City - Quan Ba - Yen Minh - Dong Van town",
    des: "- 8:00 am : Have breakfast at Hong Hao hostel - 8:30 am : Meet up with the guide and start to go on the loop.",
  },
  {
    id: 5,
    map: "/images/alltour/detail/Schedule-D5",
    name: "TP. Ha Giang",
    title: "Day 5 : Ha Giang City - Quan Ba - Yen Minh - Dong Van town",
    des: "- 8:00 am : Have breakfast at Hong Hao hostel - 8:30 am : Meet up with the guide and start to go on the loop.",
  },
];

const imgs = [{
    id: 0,
    url:"/images/alltour/detail/Schedule-N1.png"
},
{
    id: 1,
    url:"/images/alltour/detail/Schedule-D1.png"
    },
{
    id: 2,
    url:"/images/alltour/detail/Schedule-D2.png"
},
{
    id: 3,
    url:"/images/alltour/detail/Schedule-D3.png"
    },
{
    id: 4,
    url:"/images/alltour/detail/Schedule-D4.png"
    },
{
    id: 5,
    url:"/images/alltour/detail/Schedule-D5.png"
}]

export default function Schedule() {
    const [activeIndex, setActiveIndex] = useState(0); // State để lưu index của slide hiện tại

  const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex); // Cập nhật index của slide hiện tại
      
  };

  return (
    <div className="schedule flex justify-between items-center gap-12 max-w-[87.5rem] mx-auto py-20  max-md:hidden">
      <div className="schedule-left w-[33.75rem] h-[39.38113rem] relative">
        <Image
          src={imgs[activeIndex].url}
          alt="map"
          fill
          className="object-contain"
        />
      </div>
      <div className="schedule-right overflow-hidden w-[63.5rem] h-[49.25rem] ps-[3.2rem] pe-20 rounded-4xl shadow-schedule py-10">
        <div className="head flex justify-between items-center">
          <div className="title flex flex-col gap-[0.9rem]">
            <div className="time flex items-center gap-6">
              <div className="time-icon flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="#E64827"
                  />
                  <path
                    d="M15.7106 15.9298C15.5806 15.9298 15.4506 15.8998 15.3306 15.8198L12.2306 13.9698C11.4606 13.5098 10.8906 12.4998 10.8906 11.6098V7.50977C10.8906 7.09977 11.2306 6.75977 11.6406 6.75977C12.0506 6.75977 12.3906 7.09977 12.3906 7.50977V11.6098C12.3906 11.9698 12.6906 12.4998 13.0006 12.6798L16.1006 14.5298C16.4606 14.7398 16.5706 15.1998 16.3606 15.5598C16.2106 15.7998 15.9606 15.9298 15.7106 15.9298Z"
                    fill="white"
                  />
                </svg>
                <span className="text body1-bold !text-greyscaletext-80-main">
                  Time
                </span>
              </div>
              <ul className="list-disc time-text sub1-regular !text-greyscaletext-20 text-ellipsis">
                <li>3 Days / 4 Night</li>
              </ul>
            </div>
            <h2 className="h2 h4-semibold !text-greyscaletext-80-main">
              Schedule tour: 3 Days 4 Nights
            </h2>
          </div>
          <div className="price flex items-center gap-5">
            <div className="flex items-center gap-[0.4375rem]">
              <span className="price-number h5-bold !text-2xl text-orange-normal">
                $169
              </span>
              <span className="price-text body2-regular !text-greyscaletext-80-main underline underline-offset-8">
                Self - Driving
              </span>
            </div>
            <div className="flex items-center gap-[0.4375rem]">
              <span className="price-number h5-bold !text-2xl text-orange-normal">
                $169
              </span>
              <span className="price-text body2-regular !text-greyscaletext-80-main underline underline-offset-8">
                Self - Driving
              </span>
            </div>
          </div>
        </div>
        <div className="pick">
          <div className="pick-text flex flex-col gap-2 mt-9">
            <span className="sub1-bold !text-greyscaletext-80-main">
              Pick up at :
            </span>
            <span className="caption-regular !text-greyscaletext-20">
              Ha Noi, Noi Bai
            </span>
          </div>
                  <div className="pick-action mt-8 h-fit max-h-[35rem] ">
                      <MousewheelSwiper handleSlideChange={handleSlideChange} activeIndex={ activeIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}