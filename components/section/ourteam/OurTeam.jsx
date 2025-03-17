'use client';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import OurTeamSlide from './OurTeamSlide';
import './OurTeam.css';
import Link from 'next/link';

function OurTeam({ primary = false, secondary = false, className }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tourGuideList, setTourGuideList] = useState([]);
  const [riderTeamList, setRiderTeamList] = useState([]);
  const dataSlide = useMemo(() => {
    return selectedTab === 0 ? tourGuideList : riderTeamList;
  }, [selectedTab, tourGuideList, riderTeamList]);

  useEffect(() => {
    const fakeData1 = [...Array(20)].map((_, index) => ({
      id: index,
      name: 'Mr. Thanh Nguyen',
      image: '/images/common/our-team-item1.png',
      role: 'Tour Leader',
      exp: '3 years EXP',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perspiciatis explicabo necessitatibus voluptatibus autem accusamus. Rem quidem officiis, nulla atque veritatis consequatur possimus ipsa consectetur soluta quos corrupti animi quae?`,
    }));
    const fakeData2 = [...Array(20)].map((_, index) => ({
      id: index,
      name: 'Mr. Tinh',
      image: '/images/common/our-team-item2.jpeg',
      role: 'Tour Leader',
      exp: '3 years EXP',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perspiciatis explicabo necessitatibus voluptatibus autem accusamus. Rem quidem officiis, nulla atque veritatis consequatur possimus ipsa consectetur soluta quos corrupti animi quae?`,
    }));
    setTourGuideList(fakeData1);
    setRiderTeamList(fakeData2);
  }, []);

  const handleChangeTab = (e) => {
    setSelectedTab(+e.target.value);
  };

  return (
    <section id="our-team" className={`h-full w-full ${className}`}>
      <div className="relative z-[2] mx-auto w-full md:w-[87.5rem]">
        <div className="relative flex w-full justify-start gap-x-[3.875rem] pt-[4.37rem] max-md:flex-wrap md:px-[5rem]">
          <div className="flex flex-col max-md:px-[1rem]">
            <div className="flex flex-col text-white">
              <h3
                className={`mb-[0.75rem] text-[1.125rem] font-bold uppercase max-md:text-[0.875rem] ${primary ? 'text-white/40' : ''} ${secondary ? 'text-[#262626]/40' : ''}`}
              >
                HONG HAO TRAVEL
              </h3>
              <h2
                className={`font-londrina-solid text-[3.5rem] leading-none font-black uppercase max-md:pb-[3rem] max-md:!text-[2.5rem] ${primary ? 'text-white' : ''} ${secondary ? 'text-black' : ''} `}
              >
                Our team
              </h2>
            </div>
            <p
              className={`text-[0.875rem] tracking-[0.00875rem] md:mt-[2.125rem] md:w-[25.0625rem] ${primary ? 'text-[#f1f1f1]/50' : ''} ${secondary ? 'text-[#6a6a6a]' : ''} `}
            >
              We pride ourselves on having a team of dedicated and passionate
              individuals who are committed to providing exceptional service and
              unforgettable experiences to our guests. Our team is comprised of
              knowledgeable professionals with diverse backgrounds and expertise
              in various aspects of the tourism industry.
            </p>
            <div className="mt-[2.125rem] flex items-center gap-[1rem] text-[0.875rem] leading-[1.2rem] font-bold">
              <Link
                href="/about-us"
                className="group our_team-btn border-orange-normal bg-orange-normal inline-flex flex-1 cursor-pointer items-center justify-center gap-[0.5rem] rounded-[0.5rem] border border-solid text-white uppercase"
              >
                About us
                <Image
                  alt="Hong Hao Travel"
                  width={50}
                  height={50}
                  src="/images/arrow/arrow-right.svg"
                  className="size-[0.875rem] object-contain duration-300 ease-in-out group-hover:translate-x-[0.25rem]"
                />
              </Link>
              <Link
                href="/tours"
                className={`group our_team-btn hover:bg-orange-normal inline-flex flex-1 cursor-pointer items-center justify-center gap-[0.5rem] rounded-[0.5rem] border border-solid bg-transparent uppercase ${
                  primary ? 'border-grey-green-light text-grey-green-light' : ''
                } ${
                  secondary
                    ? 'border-orange-normal text-orange-normal hover:text-white'
                    : ''
                } `}
              >
                All tour
                <Image
                  alt="Hong Hao Travel"
                  width={50}
                  height={50}
                  src="/images/arrow/arrow-right.svg"
                  className="size-[0.875rem] object-contain duration-300 ease-in-out group-hover:translate-x-[0.25rem]"
                />
              </Link>
            </div>
          </div>
          <div className="hidden_scrollbar relative w-[66.0625rem] overflow-x-auto max-md:mt-[3rem]">
            <div className="mb-[2.125rem] hidden justify-end gap-[0.75rem] pr-[6.25rem] md:flex">
              <label
                aria-selected={selectedTab === 0}
                className={`${
                  selectedTab === 0
                    ? 'text-orange-normal'
                    : `hover:text-orange-500 ${primary ? 'text-white' : ''} ${
                        secondary ? 'text-[#c5c5c5]' : ''
                      }`
                } group relative inline-block cursor-pointer pb-[0.75rem] text-[0.875rem] leading-[1.2] font-bold uppercase transition-colors duration-500`}
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
                  className={`bg-orange-normal absolute bottom-0 left-0 inline-block h-0.5 transition-all duration-500 ${
                    selectedTab === 0
                      ? 'right-0'
                      : 'right-full group-hover:right-0'
                  }`}
                ></span>
              </label>
              <label
                aria-selected={selectedTab === 1}
                className={`${
                  selectedTab === 1
                    ? 'text-orange-normal'
                    : `hover:text-orange-500 ${primary ? 'text-white' : ''} ${
                        secondary ? 'text-[#c5c5c5]' : ''
                      }`
                } group relative inline-block cursor-pointer pb-[0.75rem] text-[0.875rem] leading-[1.2] font-bold uppercase transition-colors duration-500`}
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
                  className={`bg-orange-normal absolute bottom-0 left-0 inline-block h-0.5 transition-all duration-500 ${
                    selectedTab === 1
                      ? 'right-0'
                      : 'right-full group-hover:right-0'
                  }`}
                ></span>
              </label>
            </div>
            <div className="max-md:px-[1rem]">
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
