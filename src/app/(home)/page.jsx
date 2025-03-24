import Banner from '@/app/(home)/_sections/banner';
import BestTrips from '@/app/(home)/_sections/best-trips';
import Feedback from '@/app/(home)/_sections/feedback';
import Introduction from '@/app/(home)/_sections/intro-container';
import AboutUs from '@/app/(home)/_sections/intro-container/about-us';
import OurTour from '@/app/(home)/_sections/intro-container/our-tour';
import Welcome from '@/app/(home)/_sections/intro-container/welcome';
import Moment from '@/app/(home)/_sections/moment';
import Image from 'next/image';
import OurTeam from '../../../components/section/ourteam/OurTeam';
import Weather from '@/app/(home)/_sections/weather';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata = {
  title: 'Homepage',
  openGraph: {
    ...sharedOpenGraph,
    title: 'Homepage',
    description: 'Hong Hao Travel',
    images: [
      {
        width: 800,
        height: 600,
        alt: 'Hong Hao Travel',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ftXowa4rFMRHmSSVlQpd_-U1pbx2rQ7Tlg&s',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <Introduction>
        <AboutUs />
        <OurTour />
        <Welcome />
      </Introduction>
      <BestTrips />
      <Moment />
      <Feedback />
      <div className="relative flex h-fit w-full bg-[linear-gradient(180deg,#122718_7.6%,rgba(18,39,24,0.71)_43.62%,#122718_79.64%)] pb-[14.5rem] max-md:pb-[6rem]">
        <Image
          alt="Hong Hao Travel"
          width={2000}
          height={1000}
          src="/images/common/bg-our-team.jpeg"
          className="absolute inset-0 z-[0] h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-[1] h-full w-full bg-[linear-gradient(180deg,#122718_7.6%,rgba(18,39,24,0.71)_43.62%,#122718_79.64%)]"></div>
        <OurTeam primary />
      </div>
      <Weather />
    </>
  );
}
