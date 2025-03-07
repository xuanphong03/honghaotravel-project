import Image from "next/image";
import FeedbackItem from "./FeedbackItem";
import FeedbackSlide from "./FeedbackSlide";

export default function Feedback() {
  const Maps = [
    { id: 1, path: "/images/home/clients-say/map-hg-item1.png" },
    { id: 2, path: "/images/home/clients-say/map-hg-item2.png" },
    { id: 3, path: "/images/home/clients-say/map-hg-item3.png" },
  ];

  return (
    <section id="feedback" className="bg-white relative text-white">
      <div className="mx-auto h-[61.1875rem]">
        <Image
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          className="w-full h-full object-cover"
          src="/images/home/clients-say/bg-clients-say.jpeg"
        />
        <div className="absolute inset-0 z-[1] w-full h-full custom-bg-gradient"></div>
        <div className="absolute inset-0 px-[1rem] pt-[4.54rem] lg:p-0 z-[2]">
          <h5 className="lg:hidden mb-3 text-[0.875rem] leading-[1.2] font-extrabold text-white/40 uppercase">
            Read what our recent
          </h5>
          <h2 className="uppercase lg:mt-[8.125rem] lg:w-fit lg:mx-auto font-londrina-solid text-[2rem] lg:text-[3.5rem] font-black leading-none mb-[2rem] lg:mb-[5.6125rem]">
            Clients say
          </h2>
          <ul className="lg:hidden flex flex-row overflow-x-auto hidden_scrollbar gap-x-[0.75rem]">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="w-[18rem] md:w-[22rem] shrink-0">
                <FeedbackItem
                  author={"Athony Ng"}
                  vote={5}
                  createdDate={"2024-03-20"}
                  avatar={
                    "https://honghaotravel.com/_next/image?url=https%3A…ge-2024-07-22-at-10.56.31_9138baea.jpg&w=256&q=75"
                  }
                  content={
                    "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!"
                  }
                />
              </li>
            ))}
          </ul>
          <div className="hidden relative size-[31.375rem] lg:flex items-center justify-center mx-auto">
            <div className="absolute inset-0 z-20">
              <Image
                width={500}
                height={500}
                alt="Hong Hao Travel"
                className="w-full h-full object-contain"
                src="/images/home/clients-say/map-hg-line.png"
              />
              <div className="absolute top-[7.5rem] left-[13.5rem]">
                <button className="inline-flex items-center justify-center border-2 border-solid border-white/60 rounded-full size-7 bg-transparent cursor-pointer">
                  <span className="rounded-full size-2 bg-white/60"></span>
                </button>
                <div className="absolute top-0 right-full -translate-y-1/2">
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
                      author={"Athony Ng"}
                      vote={5}
                      createdDate={"2024-03-20"}
                      avatar={
                        "https://honghaotravel.com/_next/image?url=https%3A…ge-2024-07-22-at-10.56.31_9138baea.jpg&w=256&q=75"
                      }
                      content={
                        "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[2.5rem] left-[23.5rem]">
                <button className="inline-flex items-center justify-center border-2 border-solid border-white/60 rounded-full size-7 bg-transparent cursor-pointer">
                  <span className="rounded-full size-2 bg-white/60"></span>
                </button>
              </div>
              <div className="absolute top-[16rem] left-[20rem]">
                <button className="inline-flex items-center justify-center border-2 border-solid border-white/60 rounded-full size-7 bg-transparent cursor-pointer">
                  <span className="rounded-full size-2 bg-white/60"></span>
                </button>
                <div className="absolute left-full bottom-full">
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
                      author={"Athony Ng"}
                      vote={5}
                      createdDate={"2024-03-20"}
                      avatar={
                        "https://honghaotravel.com/_next/image?url=https%3A…ge-2024-07-22-at-10.56.31_9138baea.jpg&w=256&q=75"
                      }
                      content={
                        "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[26rem] left-[8rem]">
                <button className="inline-flex items-center justify-center border-2 border-solid border-white/60 rounded-full size-7 bg-transparent cursor-pointer">
                  <span className="rounded-full size-2 bg-white/60"></span>
                </button>
                <div className="absolute top-0 right-full -translate-y-1/2">
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
                      author={"Athony Ng"}
                      vote={5}
                      createdDate={"2024-03-20"}
                      avatar={
                        "https://honghaotravel.com/_next/image?url=https%3A…ge-2024-07-22-at-10.56.31_9138baea.jpg&w=256&q=75"
                      }
                      content={
                        "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!"
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
        </div>
      </div>
    </section>
  );
}
