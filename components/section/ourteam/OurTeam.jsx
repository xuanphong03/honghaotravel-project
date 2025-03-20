'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs-v2';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OurTeamSlide from './OurTeamSlide';
import './OurTeam.css';
import { cn } from '@/lib/utils';

function OurTeam({ primary = false, secondary = false, className }) {
  const [tourGuideList, setTourGuideList] = useState([]);
  const [riderTeamList, setRiderTeamList] = useState([]);

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

  return (
    <section
      id="our-team"
      className={`relative z-10 h-full w-full bg-white ${className}`}
    >
      <div className="relative z-[2] mx-auto w-full px-[1rem] md:pl-[4rem] lg:w-[87.5rem] lg:px-0">
        <div className="relative flex w-full justify-start gap-x-[3.875rem] pt-[4.37rem] max-md:flex-wrap">
          <div className="flex flex-col">
            <div className="flex flex-col text-white">
              <h3
                className={cn(
                  'mb-[0.75rem] text-[1.125rem] font-bold uppercase max-md:text-[0.875rem]',
                  primary ? 'text-white/40' : '',
                  secondary ? 'text-[#262626]/40' : '',
                )}
              >
                HONG HAO TRAVEL
              </h3>
              <h2
                className={cn(
                  'font-londrina-solid text-[3.5rem] leading-none font-black uppercase max-md:pb-[3rem] max-md:!text-[2.5rem]',
                  primary ? 'text-white' : '',
                  secondary ? 'text-black' : '',
                )}
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
                <ArrowRight className="size-[0.875rem] duration-300 ease-in-out group-hover:translate-x-[0.25rem]" />
              </Link>
              <Link
                href="/tours"
                className={cn(
                  'group our_team-btn hover:bg-orange-normal inline-flex flex-1 cursor-pointer items-center justify-center gap-[0.5rem] rounded-[0.5rem] border border-solid bg-transparent uppercase',
                  primary
                    ? 'border-grey-green-light__active text-grey-green-light__active hover:border-orange-normal hover:text-white'
                    : '',
                  secondary
                    ? 'border-orange-normal text-orange-normal hover:text-white'
                    : '',
                )}
              >
                All tour
                <ArrowRight
                  className={cn(
                    'size-[0.875rem] duration-300 ease-in-out group-hover:translate-x-[0.25rem] group-hover:text-white',
                    primary ? 'text-grey-green-light__active' : '',
                    secondary ? 'text-orange-normal' : '',
                  )}
                />
              </Link>
            </div>
          </div>
          <div className="hidden_scrollbar relative w-[66.0625rem] overflow-x-auto max-md:mt-[3rem]">
            <Tabs
              defaultValue="tour_guide"
              className="flex w-full items-end justify-center gap-y-[1rem] md:gap-y-[2.125rem]"
            >
              <TabsList className="flex items-center gap-[2.25rem] bg-transparent max-md:hidden">
                <TabsTrigger
                  value="tour_guide"
                  className="text-[0.875rem] leading-[1.2] font-extrabold uppercase"
                >
                  Tour guide
                </TabsTrigger>
                <TabsTrigger
                  value="rider_team"
                  className="text-[0.875rem] leading-[1.2] font-extrabold uppercase"
                >
                  Rider team
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tour_guide" className="w-full">
                <OurTeamSlide
                  data={tourGuideList}
                  primary={primary}
                  secondary={secondary}
                />
              </TabsContent>
              <TabsContent value="rider_team" className="w-full">
                <OurTeamSlide
                  data={riderTeamList}
                  primary={primary}
                  secondary={secondary}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
