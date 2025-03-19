import React from 'react';
import BannerTourDetail from './BannerTourDetail';
import Breadcrumb from '../../../common/Breadcrumb';
import Schedule from './Schedule';
import ImediateMb from './ImediateMb';
import BookTour from './BookTour';
import FAQAboutTrip from './FAQAboutTrip';
import OurTeam from '../../ourteam/OurTeam';
import Explore from '../../../common/Explore';

const dataBreadcrumb = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M13.3327 11.3334V7.63482C13.3327 7.27859 13.3324 7.10038 13.2891 6.93462C13.2507 6.78772 13.1877 6.64871 13.1024 6.52309C13.0062 6.38134 12.8724 6.26379 12.6043 6.02922L9.4043 3.22922C8.90656 2.79369 8.65769 2.57604 8.3776 2.49321C8.13081 2.42023 7.86776 2.42023 7.62096 2.49321C7.34109 2.57598 7.09258 2.79343 6.59559 3.22829L3.39453 6.02922C3.12644 6.2638 2.99271 6.38134 2.89648 6.52309C2.81121 6.64871 2.74771 6.78772 2.70933 6.93462C2.66602 7.10038 2.66602 7.27859 2.66602 7.63482V11.3334C2.66602 11.9547 2.66602 12.2652 2.76751 12.5102C2.90283 12.8369 3.16223 13.0968 3.48893 13.2321C3.73396 13.3336 4.04459 13.3336 4.66584 13.3336C5.2871 13.3336 5.59807 13.3336 5.8431 13.2321C6.1698 13.0968 6.42913 12.837 6.56445 12.5103C6.66595 12.2653 6.66602 11.9546 6.66602 11.3334V10.6667C6.66602 9.93034 7.26297 9.33338 7.99935 9.33338C8.73573 9.33338 9.33268 9.93034 9.33268 10.6667V11.3334C9.33268 11.9546 9.33268 12.2653 9.43418 12.5103C9.5695 12.837 9.8289 13.0968 10.1556 13.2321C10.4006 13.3336 10.7113 13.3336 11.3325 13.3336C11.9538 13.3336 12.2647 13.3336 12.5098 13.2321C12.8365 13.0968 13.0958 12.8369 13.2311 12.5102C13.3326 12.2652 13.3327 11.9547 13.3327 11.3334Z"
          fill="#C5C5C5"
        />
      </svg>
    ),
    title: 'Home',
    url: '',
    classNameTitle: 'body2-regular__mb !text-greyscaletext-10',
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="8"
        viewBox="0 0 5 8"
        fill="none"
      >
        <path
          d="M1 1L4 4L1 7"
          stroke="#C5C5C5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Tour',
    url: '',
    classNameTitle: 'body2-regular__mb !text-greyscaletext-10',
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 5 8"
        fill="none"
      >
        <path
          d="M1 1L4 4L1 7"
          stroke="#E64827"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Ha Giang Loop tour: Itinerary in 3 Days 4 Nights',
    url: '',
    classNameTitle: 'body2-regular__mb !text-greyscaletext-80-main',
  },
];
export default function TourDetail() {
  return (
    <div className="tourdetail">
      <BannerTourDetail />
      <Breadcrumb data={dataBreadcrumb} />
      <ImediateMb />
      <Schedule />
      <BookTour />
      <FAQAboutTrip />
      <OurTeam secondary />
      <Explore className={'pb-12 md:pb-16'} />
    </div>
  );
}
