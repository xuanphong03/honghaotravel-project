"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import OurTeamSlide from "./OurTeamSlide";
import "./OurTeam.css";

function OurTeam({ primary = false, secondary = false }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tourGuideList, setTourGuideList] = useState([]);
  const [riderTeamList, setRiderTeamList] = useState([]);
  const dataSlide = useMemo(() => {
    return selectedTab === 0 ? tourGuideList : riderTeamList;
  }, [selectedTab, tourGuideList, riderTeamList]);

  useEffect(() => {
    const fakeData1 = [...Array(20)].map((_, index) => ({
      id: index,
      name: "Mr. Thanh Nguyen",
      image: "/images/common/our-team-item1.png",
      role: "Tour Leader",
      exp: "3 years EXP",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perspiciatis explicabo necessitatibus voluptatibus autem accusamus. Rem quidem officiis, nulla atque veritatis consequatur possimus ipsa consectetur soluta quos corrupti animi quae?`,
    }));
    const fakeData2 = [...Array(20)].map((_, index) => ({
      id: index,
      name: "Mr. Tinh",
      image: "/images/common/our-team-item2.jpeg",
      role: "Tour Leader",
      exp: "3 years EXP",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perspiciatis explicabo necessitatibus voluptatibus autem accusamus. Rem quidem officiis, nulla atque veritatis consequatur possimus ipsa consectetur soluta quos corrupti animi quae?`,
    }));
    setTourGuideList(fakeData1);
    setRiderTeamList(fakeData2);
  }, []);

  const handleChangeTab = (e) => {
    setSelectedTab(+e.target.value);
  };

  return (
    <section id="our-team" className="relative bg-white">
      {primary && (
        <>
          <Image
            alt="Hong Hao Travel"
            width={2000}
            height={1000}
            src="/images/common/bg-our-team.jpeg"
            className="absolute inset-0 w-full h-full object-cover z-[0]"
          />
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(180deg,#122718_7.6%,rgba(18,39,24,0.71)_43.62%,#122718_79.64%)] z-[1]"></div>
        </>
      )}
      <div className="max-w-[100rem] mx-auto h-[44.86263rem] relative z-[2]">
        <div className="relative w-full px-[5rem] mt-[4.37rem] inline-flex gap-x-[3.875rem] justify-start">
          <div className="flex flex-col gap-y-[2.125rem]">
            <div className="flex flex-col gap-y-[0.75rem] text-white">
              <h3
                className={`text-[1.125rem] font-bold uppercase 
                ${primary ? "text-white/40 " : ""} 
                ${secondary ? "text-[#262626]/40" : ""}`}
              >
                HONG HAO TRAVEL
              </h3>
              <h2
                className={`uppercase font-londrina-solid text-[3.5rem] font-black leading-none
               ${primary ? "text-white " : ""} 
                ${secondary ? "text-black" : ""}
              `}
              >
                Our team
              </h2>
            </div>
            <p
              className={`w-[25.0625rem] tracking-[0.00875rem] leading-[1.2] text-[0.875rem] 
              ${primary ? "text-[#f1f1f1]/50" : ""} 
              ${secondary ? "text-[#6a6a6a]" : ""}
              `}
            >
              We pride ourselves on having a team of dedicated and passionate
              individuals who are committed to providing exceptional service and
              unforgettable experiences to our guests. Our team is comprised of
              knowledgeable professionals with diverse backgrounds and expertise
              in various aspects of the tourism industry.
            </p>
            <div className="text-[0.875rem] leading-[1.2rem] font-bold flex items-center gap-[1rem]">
              <button className="cursor-pointer px-[1.25rem] py-[0.625rem] inline-flex gap-[0.5rem] h-[2.75rem] items-center justify-center rounded-[0.5rem] border border-solid border-orange-normal bg-orange-normal text-white uppercase">
                Join with us
              </button>
              <button
                className={`cursor-pointer px-[1.25rem] py-[0.625rem] inline-flex gap-[0.5rem] h-[2.75rem] items-center justify-center rounded-[0.5rem] border border-solid bg-transparent  uppercase
               ${
                 primary ? "border-grey-green-light text-grey-green-light" : ""
               } 
              ${secondary ? "border-orange-normal text-orange-normal" : ""}
              `}
              >
                Call us
              </button>
            </div>
          </div>
          <div className="relative w-[66.0625rem] overflow-x-auto hidden_scrollbar">
            <div className="justify-end flex gap-[0.75rem] mb-[2.125rem] pr-[6.25rem]">
              <label
                aria-selected={selectedTab === 0}
                className={`${
                  selectedTab === 0
                    ? "text-orange-normal"
                    : `hover:text-orange-500 ${primary ? "text-white" : ""} ${
                        secondary ? "text-[#c5c5c5]" : ""
                      }`
                } group transition-colors duration-500 relative inline-block pb-[0.75rem] text-[0.875rem] font-bold uppercase leading-[1.2] cursor-pointer`}
              >
                Tour guide
                <input
                  hidden
                  value={0}
                  type="radio"
                  name="rdo_tab"
                  onChange={handleChangeTab}
                />
                <span
                  className={`inline-block absolute bottom-0 h-0.5 bg-orange-normal left-0 transition-all duration-500 ${
                    selectedTab === 0
                      ? "right-0"
                      : "right-full group-hover:right-0"
                  }`}
                ></span>
              </label>
              <label
                aria-selected={selectedTab === 1}
                className={`${
                  selectedTab === 1
                    ? "text-orange-normal"
                    : `hover:text-orange-500 ${primary ? "text-white" : ""} ${
                        secondary ? "text-[#c5c5c5]" : ""
                      }`
                } group transition-colors duration-500 relative inline-block pb-[0.75rem] text-[0.875rem] font-bold uppercase leading-[1.2] cursor-pointer`}
              >
                Rider team
                <input
                  hidden
                  value={1}
                  type="radio"
                  name="rdo_tab"
                  onChange={handleChangeTab}
                />
                <span
                  className={`inline-block absolute bottom-0 h-0.5 bg-orange-normal left-0 transition-all duration-500 ${
                    selectedTab === 1
                      ? "right-0"
                      : "right-full group-hover:right-0"
                  }`}
                ></span>
              </label>
            </div>
            <div className="">
              <OurTeamSlide
                data={dataSlide}
                primary={primary}
                secondary={secondary}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
