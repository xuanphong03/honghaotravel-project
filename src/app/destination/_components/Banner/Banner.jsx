import * as motion from "motion/react-client";
import React from "react";
import Image from "next/image";
import InfinitySlide from "../../../../../components/common/InfinitySlide/InfinitySlide";

import "./Banner.css";

export default function Banner() {
  return (
    <section
      id="banner"
      className="relative w-full h-[21.04713rem] md:h-[43.3125rem]"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/destination/banner-bg.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 w-full h-full custom-bg-gradient"></div>
      <motion.div
        initial={{ y: "5%", opacity: 0, visibility: "hidden" }}
        whileInView={{ y: "0%", opacity: 1, visibility: "visible" }}
        transition={{
          duration: 0.3,
        }}
        viewport={{ once: true }}
        className="hidden md:block absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          width={500}
          height={500}
          alt="Hong Hao Travel"
          src="/images/destination/map.png"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ y: "5%", opacity: 0, visibility: "hidden" }}
        whileInView={{ y: "0%", opacity: 1, visibility: "visible" }}
        transition={{
          duration: 0.3,
        }}
        viewport={{ once: true }}
        className="absolute xl:max-w-[100rem] left-1/2 z-10 h-full w-full -translate-x-1/2 top-0"
      >
        <Image
          width={2000}
          height={1000}
          alt="Hong Hao Travel"
          src="/images/destination/banner-text.png"
          className="w-[18.09813rem] h-[7.55425rem] md:w-[41.10125rem] md:h-[17.50006rem] absolute left-[1.25rem] top-[36%] md:left-[5rem] md:top-[9rem]"
        />
      </motion.div>
      <motion.div
        initial={{ x: "5%", opacity: 0, visibility: "hidden" }}
        whileInView={{ x: "0%", opacity: 1, visibility: "visible" }}
        transition={{
          duration: 0.3,
        }}
        viewport={{ once: true }}
        className="absolute top-0 bottom-0 right-[4.75rem] z-20 hidden md:block"
      >
        <InfinitySlide />
      </motion.div>
    </section>
  );
}
