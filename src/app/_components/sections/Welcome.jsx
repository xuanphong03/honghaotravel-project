import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="xl:min-w-full xl:min-h-screen min-w-full min-h-0 flex flex-col items-center md:mt-0 mt-[2.63rem] lg:mt-[10rem] relative z-[1]"
    >
      <div className="xl:absolute xl:top-0 xl:left-1/2 xl:-translate-x-1/2 text-center py-[1rem] z-10">
        <h3 className="lg:text-[1.125rem] text-[0.875rem] md:text-[2rem] font-bold leading-[1] text-white/40 mb-[0.5rem]">
          Welcome to...
        </h3>
        <h2 className="text-green-light font-black text-[1.45rem] md:text-[5rem] font-londrina-solid leading-none">
          Ha Giang Naturally
        </h2>
        <Image
          alt=""
          width={500}
          height={500}
          src="/images/beautiful-text.png"
          className="lg:w-[23.875rem] lg:h-[18.75rem] mx-auto object-contain mt-[-1rem] w-[9rem] h-[7rem] md:w-[30rem] md:h-[20rem]"
        />
      </div>
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="w-full h-full hidden lg:block"
      >
        <video
          type="video/mp4"
          loop
          autoPlay
          playsInline
          src="https://cms.honghaotravel.com/wp-content/uploads/0622.mov"
          className="w-full h-auto 2xl:h-full rounded-[1rem] overflow-hidden object-cover"
        ></video>
      </motion.div>
      <video
        type="video/mp4"
        loop
        autoPlay
        playsInline
        src="https://cms.honghaotravel.com/wp-content/uploads/0622.mov"
        className="lg:hidden w-full h-auto 2xl:h-full rounded-[1rem] overflow-hidden object-cover"
      ></video>
    </section>
  );
}
