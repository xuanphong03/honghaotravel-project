"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "./Moment.css";
import MomentSlideItem from "./MomentSlideItem";

export default function Moment() {
  const containerRef = useRef(null);
  const gsapRef = useRef(null);
  const hasAnimated = useRef(false);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const items = container.querySelectorAll(".slide-item");
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;

          gsapRef.current = gsap.to(items, {
            x: `-${scrollWidth - clientWidth}px`,
            duration: 10,
            ease: "linear",
            scrollTrigger: {
              trigger: container,
              toggleActions: "play none none none",
            },
          });

          container.addEventListener("mouseenter", () =>
            gsapRef.current.pause()
          );
          container.addEventListener("mouseleave", () =>
            gsapRef.current.resume()
          );
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => {
      container.removeEventListener("mouseenter", () =>
        gsapRef.current.pause()
      );
      container.removeEventListener("mouseleave", () =>
        gsapRef.current.resume()
      );
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="moment"
      className="relative bg-white pb-[0.8rem] hidden lg:block z-20"
    >
      <div className="mb-[3rem] flex justify-between items-center w-[calc(100%-16.665rem)] ml-auto">
        <h2 className="text-[3.5rem] font-black leading-[1] text-[#222] font-londrina-solid whitespace-nowrap">
          THE GLADDEST MOMENT
        </h2>
        <div className="size-[6.5625rem] relative">
          <Image
            width={100}
            height={100}
            loading="lazy"
            alt="Hong Hao Travel"
            src="/images/home/moment/hong-hao-travel.svg"
            className="size-full object-cover animate-spin-slow !duration-[10s]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-1/2 size-[2.375rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38 38"
              fill="none"
              className="size-full"
            >
              <path
                d="M37.0342 8.00971C37.0342 8.16932 37.0359 8.32893 37.0342 8.48854C37.0325 8.67244 36.9409 8.7748 36.7559 8.77827C36.5743 8.78174 36.4205 8.84766 36.2942 8.97604C36.2458 9.02635 36.2199 9.08361 36.2061 9.15821C36.0954 9.75327 36.0055 10.3518 35.8534 10.9365C35.7669 11.2678 35.5664 11.561 35.2534 11.7501C35.0045 11.9011 34.7452 11.8022 34.5187 11.7397C34.1383 11.6374 33.8409 11.7345 33.5643 11.9687C33.2721 12.2185 33.0716 12.543 32.8745 12.8674C32.4682 13.5388 31.9322 14.0991 31.3392 14.5901C30.8586 14.9874 30.3053 15.2962 29.7867 15.6467C29.5377 15.8149 29.5464 16.011 29.7988 16.1741C30.1411 16.3944 30.5128 16.5609 30.8707 16.7535C32.0169 17.3694 33.177 17.9593 34.3008 18.6133C34.7106 18.851 35.0028 19.2656 35.2898 19.6612C35.8084 20.3742 36.0366 21.2243 36.4343 21.9929C36.6711 22.4491 36.9806 22.8534 37.2624 23.2767C37.4958 23.6271 37.7327 23.9741 37.9644 24.3263C38.056 24.4651 37.9609 24.6524 37.7932 24.6819C37.1933 24.7895 36.5933 24.8953 35.9951 25.0064C35.6649 25.0671 35.3503 24.9543 35.0356 24.9023C34.8091 24.8658 34.5757 24.8259 34.3492 24.7826C33.8859 24.6958 33.4174 24.6264 32.9557 24.5258C32.9419 24.5223 32.9281 24.5206 32.9142 24.5223C32.4647 24.557 32.0221 24.4148 31.5761 24.4408C31.0712 24.4703 30.6148 24.3072 30.1532 24.1493C29.204 23.8284 28.2739 23.4519 27.3109 23.1778C26.9305 23.0685 26.5502 22.9436 26.1491 22.9384C25.7895 22.9332 25.6425 23.0893 25.5733 23.4398C25.454 24.0608 25.314 24.675 25.0529 25.2579C24.8731 25.6587 24.74 26.0802 24.5775 26.4897C24.453 26.8002 24.2715 27.083 24.0485 27.3242C23.6543 27.7492 23.2393 28.1534 22.9195 28.6409C22.6722 29.0191 22.4855 29.4286 22.3559 29.8554C22.1622 30.499 22.0291 31.1617 21.8389 31.8054C21.685 32.3258 21.2338 32.6607 20.6373 32.4473C20.3088 32.3293 19.9804 32.2044 19.6415 32.1228C19.2196 32.0205 18.6647 32.1228 18.4935 32.5028C18.4209 32.6641 18.3742 32.8394 18.3656 33.0198C18.3604 33.11 18.3552 33.2002 18.3656 33.2904C18.4468 34.0555 18.1322 34.6853 17.6999 35.2803C17.3922 35.7036 17.0914 36.1322 16.794 36.5624C16.6349 36.7931 16.4309 36.984 16.2217 37.1592C15.9883 37.3552 15.7757 37.5704 15.5578 37.7803C15.4627 37.8722 15.3642 37.9243 15.2293 37.9243C15.0443 37.9226 14.8628 37.9399 14.6778 37.9833C14.4185 38.044 14.1643 37.9226 13.9085 37.8861C13.5817 37.8428 13.2774 37.7005 12.9714 37.5808C12.7708 37.501 12.6273 37.3327 12.4596 37.2026C12.0585 36.8886 11.8286 36.4392 11.5606 36.0246C11.2684 35.5701 10.9209 35.1814 10.4161 34.9923C9.86283 34.7859 9.28711 34.7269 8.74769 35.0513C8.53504 35.1797 8.37252 35.3792 8.23594 35.5874C8.1443 35.7279 8.02501 35.8251 7.87978 35.8927C7.60489 36.0246 7.26775 35.806 7.23144 35.4573C7.18822 35.0496 7.21761 34.6454 7.34901 34.2498C7.57895 33.5593 7.52709 32.9296 6.98594 32.3744C6.56928 31.9459 6.10074 31.6215 5.5475 31.3994C4.97869 31.1704 4.43581 30.8789 3.92579 30.5406C3.6094 30.3307 3.39329 30.0323 3.30684 29.6263C3.23077 29.2724 3.24633 28.9255 3.2446 28.575C3.2446 28.1222 3.13914 27.6989 2.93513 27.3033C2.68271 26.8141 2.50118 26.3023 2.47178 25.7524C2.45968 25.5424 2.42683 25.2943 2.6464 25.1243C2.75532 25.0393 2.85906 24.9769 3.00083 24.9873C3.06998 24.9925 3.13914 24.9942 3.2083 24.9873C3.35352 24.9734 3.55235 25.0567 3.61977 24.8832C3.67856 24.7322 3.51604 24.6073 3.42614 24.4998C3.21002 24.2413 3.00601 23.9706 2.7657 23.7312C2.53575 23.5022 2.34212 23.2402 2.15021 22.98C1.98251 22.7527 1.74565 22.6434 1.47075 22.5966C1.01432 22.5185 0.53023 22.4995 0.203468 22.0952C0.0253912 21.8749 -0.0282047 21.6147 0.0132889 21.3371C0.028849 21.2347 0.113565 21.1723 0.196552 21.122C0.820685 20.7455 1.45173 20.3794 2.07241 19.996C2.46833 19.7514 2.87635 19.5241 3.19619 19.1667C3.61804 18.6983 4.154 18.3618 4.65193 17.9818C5.11873 17.6244 5.56824 17.2497 5.96416 16.8142C6.07135 16.6963 6.19065 16.6338 6.34971 16.6911C6.49839 16.7431 6.59521 16.8212 6.58829 17.0051C6.58138 17.2133 6.98421 17.5776 7.19341 17.5724C7.36111 17.5672 7.43545 17.4214 7.53054 17.3208C7.71208 17.13 7.92473 17.0398 8.18061 17.0918C8.54195 17.1664 8.90502 17.2428 9.25944 17.3503C9.69513 17.4822 10.1291 17.4544 10.5527 17.2913C11.0955 17.0814 11.4707 16.672 11.8096 16.2174C12.0776 15.8583 12.3421 15.4957 12.6222 15.1488C12.7864 14.944 12.9852 14.7792 13.2273 14.656C13.618 14.4565 13.9932 14.2206 14.3753 14.0037C14.4738 13.9482 14.5291 13.8719 14.5326 13.7556C14.5464 13.3185 14.5222 12.8899 14.3925 12.4666C14.2992 12.1596 14.2577 11.8369 14.1903 11.5194C14.1263 11.2175 14.0623 10.9156 13.9949 10.6138C13.9257 10.3067 13.8428 10.0014 13.7822 9.69255C13.7459 9.51039 13.6923 9.33343 13.6699 9.14606C13.6578 9.0385 13.6612 8.93441 13.7217 8.87542C13.9015 8.70193 14.0762 8.51803 14.3597 8.49374C14.7176 8.46425 15.0616 8.37577 15.3175 8.08952C15.3452 8.05829 15.3746 8.02533 15.4109 8.00798C15.7203 7.85531 15.7549 7.55691 15.7601 7.27065C15.7636 7.03818 15.8293 6.82132 15.869 6.59925C15.9019 6.41362 16.2338 6.18462 16.4326 6.16553C16.7508 6.13431 17.0308 6.22452 17.2885 6.40495C17.323 6.42923 17.3542 6.45699 17.3887 6.47781C17.8538 6.76407 18.1183 6.72763 18.5367 6.35464C19.0295 5.91398 19.5205 5.47505 20.155 5.2287C20.5734 5.06562 20.9433 4.80539 21.3133 4.55209C21.6764 4.304 22.0931 4.21726 22.4976 4.09582C22.897 3.97611 23.3033 3.87549 23.7096 3.78007C23.9171 3.73149 24.1193 3.66383 24.3233 3.61179C24.472 3.57362 24.5637 3.49208 24.6432 3.37411C24.785 3.16419 24.9855 3.10173 25.1913 3.24226C25.4229 3.40013 25.7013 3.43309 25.9433 3.56321C26.0557 3.62393 26.2009 3.60832 26.3254 3.5528C26.6989 3.38625 26.9132 3.10867 26.9807 2.69577C27.0654 2.17357 27.2314 1.67739 27.6065 1.28357C27.7431 1.13958 27.9004 1.0112 28.0595 0.893225C28.4295 0.619114 28.7303 0.240909 29.1764 0.0865049C29.7573 -0.116476 30.1688 0.0223143 30.3105 0.667691C30.4886 1.47962 30.9243 2.08162 31.6228 2.50667C31.7161 2.56392 31.8095 2.6229 31.9028 2.68015C32.2054 2.87099 32.5149 2.93865 32.8745 2.83803C33.2289 2.73914 33.6041 2.93518 33.7873 3.26481C34.083 3.79395 34.3804 4.32309 34.6362 4.87305C34.8247 5.27727 35.148 5.53577 35.5214 5.76131C35.8897 5.98337 36.2804 6.17421 36.583 6.50384C36.8734 6.82132 36.9702 7.20646 37.0273 7.61069C37.048 7.74428 37.0325 7.87786 37.0342 8.00971C37.0331 8.00971 37.0331 8.00971 37.0342 8.00971Z"
                fill="#E64828"
              />
            </svg>
          </div>
        </div>
        <div className="w-[42.6875rem] h-[4.9375rem] bg-[linear-gradient(90deg,rgba(255,255,255,0.00)_-48.55%,rgba(12,140,30,0.14)_100%)] flex items-center">
          <p className="text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] text-[#262626] ml-[2.13rem]">
            Don't hesitate to pick up your backpack and go. When you reach your
            destination and <br /> see all the beautiful things in sight, you
            will know that your efforts were worth it...
          </p>
        </div>
      </div>
      <div className="relative w-full h-fit">
        <Image
          alt="Hong Hao Travel"
          width={100}
          height={800}
          src="/images/home/moment/our-gallery-text.svg"
          className="absolute top-[20.435rem] left-[8.3325rem] -translate-y-full -translate-x-1/2 w-[5rem] h-[33.8125rem] object-cover z-[100]"
        />
        <div className="absolute top-0 left-0 h-[21.125rem] w-[21.5rem] flex z-[99]">
          <div className="w-full bg-white"></div>
          <div className="h-full w-[6.5rem] bg-[linear-gradient(270deg,rgba(255,255,255,0.00)_36.51%,#FFF_92.5%)]"></div>
        </div>
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden flex flex-col gap-3 container_slide cursor-grab"
        >
          <div className="relative flex items-center gap-3 translate-x-[17.75rem]">
            {[...Array(6)].map((_, index) => (
              <MomentSlideItem key={index} />
            ))}
            <div
              id="slide-item"
              className="slide-item shrink-0 w-[10rem] h-[21.125rem] flex justify-center items-center"
            >
              <Link
                href="#"
                className="select-none size-[7.625rem] relative group rounded-full lg:hover:bg-[#E64828] transition-all duration-200 flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="172"
                  height="172"
                  viewBox="0 0 172 172"
                  fill="none"
                  className="absolute top-0 left-0 animate-spin size-full"
                >
                  <circle
                    cx="86"
                    cy="86"
                    r="85.25"
                    className="stroke-orange-normal"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>
                <div className="text-transparent text-[0.875rem] font-bold leading-[1.2] uppercase relative overflow-hidden">
                  DISCOVERY
                  <span className="text-orange-normal text-[0.875rem] font-bold leading-[1.2] uppercase absolute top-0 left-0 group-hover:-translate-y-full transition-all duration-300">
                    DISCOVERY
                  </span>
                  <span className="text-white text-[0.875rem] font-bold leading-[1.2] uppercase absolute bottom-0 left-0 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    DISCOVERY
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center gap-3">
            {[...Array(8)].map((_, index) => (
              <MomentSlideItem key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
