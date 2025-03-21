'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import FeedbackItem from './feedback-item';
import FeedbackSlide from './feedback-mobile';
import SiteList from './site-list';
import styles from './feedback.module.css';

export default function Feedback() {
  const Maps = [
    { id: 1, path: '/images/home/clients-say/map-hg-item1.png' },
    { id: 2, path: '/images/home/clients-say/map-hg-item2.png' },
    { id: 3, path: '/images/home/clients-say/map-hg-item3.png' },
  ];
  const [activeFeedbackStatus, setActiveFeedbackStatus] = useState(true);

  return (
    <section id="feedback" className="relative bg-white text-white">
      <div className="mx-auto md:h-[61.1875rem]">
        <Image
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          className="h-full w-full object-cover max-md:absolute max-md:inset-0"
          src="/images/home/clients-say/bg-clients-say.jpeg"
        />
        <div
          className={cn(
            styles.backgroundLinearGradient,
            'absolute inset-0 z-[1] h-full w-full',
          )}
        ></div>
        <div className="relative inset-0 z-[2] px-[1rem] pt-[4.54rem] md:absolute md:p-0">
          <h5 className="mb-3 text-[0.875rem] leading-[1.2] font-extrabold text-white/40 uppercase md:hidden">
            Read what our recent
          </h5>
          <h2 className="font-londrina-solid mb-[2rem] text-[2rem] leading-none font-black uppercase md:mx-auto md:mt-[8.125rem] md:mb-[5.6125rem] md:w-fit md:text-[3.5rem]">
            Clients say
          </h2>
          <ul className="hidden_scrollbar flex flex-row gap-x-[0.75rem] overflow-x-auto md:hidden">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="w-[18rem] shrink-0 md:w-[22rem]">
                <FeedbackItem
                  vote={5}
                  author="Athony Ng"
                  createdDate={'2024-03-20'}
                  avatar="/images/home/clients-say/user1.jpeg"
                  content={
                    'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! '
                  }
                />
              </li>
            ))}
          </ul>
          <div className="relative mx-auto hidden size-[31.375rem] items-center justify-center md:flex">
            <div className="absolute inset-0 z-20">
              <Image
                width={500}
                height={500}
                alt="Hong Hao Travel"
                className="h-full w-full object-contain"
                src="/images/home/clients-say/map-hg-line.png"
              />
              <div className="absolute top-[7.5rem] left-[13.5rem]">
                <button className="inline-flex size-7 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-white/60 bg-transparent">
                  <span className="size-2 rounded-full bg-white/60"></span>
                </button>
                <div
                  className={cn(
                    'absolute top-0 right-full -translate-y-1/2 transition-all duration-700',
                    activeFeedbackStatus
                      ? 'pointer-events-auto visible opacity-100'
                      : 'pointer-events-none invisible opacity-0',
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="126"
                    height="26"
                    viewBox="0 0 126 26"
                    fill="none"
                  >
                    <path
                      d="M4 4H95L125 25"
                      stroke="white"
                      strokeDasharray="4 4"
                    />
                    <circle cx="4" cy="4" r="4" fill="#D9D9D9" />
                  </svg>
                  <div className="absolute top-1/2 right-full -translate-y-1/2">
                    <FeedbackItem
                      vote={5}
                      author="Athony Ng"
                      createdDate={'2024-03-20'}
                      avatar="/images/home/clients-say/user1.jpeg"
                      content={
                        'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!'
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[2.5rem] left-[23.5rem]">
                <button className="inline-flex size-7 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-white/60 bg-[#d20000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    className="size-[1.125rem]"
                  >
                    <path
                      d="M9.20898 0.578125L11.2721 6.73848L17.7685 6.79697L12.5472 10.6628L14.4991 16.8593L9.20898 13.0881L3.91892 16.8593L5.87078 10.6628L0.649476 6.79697L7.14586 6.73848L9.20898 0.578125Z"
                      fill="#FFE191"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-[16rem] left-[20rem]">
                <button className="inline-flex size-7 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-white/60 bg-transparent">
                  <span className="size-2 rounded-full bg-white/60"></span>
                </button>
                <div className="absolute bottom-full left-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="224"
                    height="63"
                    viewBox="0 0 224 63"
                    fill="none"
                  >
                    <path
                      d="M0.5 62.5L25.5 1L224 1"
                      stroke="white"
                      strokeDasharray="4 4"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-full -translate-y-1/2">
                    <FeedbackItem
                      vote={5}
                      author="Athony Ng"
                      createdDate={'2024-03-20'}
                      avatar="/images/home/clients-say/user1.jpeg"
                      content={
                        'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!'
                      }
                    />
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={() => setActiveFeedbackStatus(false)}
                onMouseLeave={() => setActiveFeedbackStatus(true)}
                className="absolute top-[26rem] left-[8rem]"
              >
                <button className="inline-flex size-7 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-white/60 bg-transparent">
                  <span className="size-2 rounded-full bg-white/60"></span>
                </button>
                <div className="absolute top-0 right-full h-[15rem] w-[20rem] -translate-y-1/2 bg-transparent"></div>
                <div
                  className={cn(
                    'absolute top-0 right-full -translate-y-1/2 transition-all duration-700',
                    activeFeedbackStatus
                      ? 'pointer-events-none invisible opacity-0'
                      : 'pointer-events-auto visible opacity-100',
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="126"
                    height="26"
                    viewBox="0 0 126 26"
                    fill="none"
                  >
                    <path
                      d="M4 4H95L125 25"
                      stroke="white"
                      strokeDasharray="4 4"
                    />
                    <circle cx="4" cy="4" r="4" fill="#D9D9D9" />
                  </svg>
                  <div className="absolute top-1/2 right-full -translate-y-1/2">
                    <FeedbackItem
                      author={'Athony Ng'}
                      vote={5}
                      createdDate={'2024-03-20'}
                      avatar="/images/home/clients-say/user1.jpeg"
                      content={
                        'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 z-10">
              <FeedbackSlide data={Maps} />
            </div>
          </div>
          <div className="md:mt-[2rem]">
            <SiteList />
          </div>
        </div>
      </div>
    </section>
  );
}
