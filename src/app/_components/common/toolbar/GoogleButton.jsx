import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GoogleButton() {
  return (
    <Link
      target="_blank"
      href="mailto:honghaotravel@gmail.com"
      className="cursor-pointer inline-block"
    >
      <button className="cursor-pointer rounded-full size-[3.625rem]">
        <Image
          alt="Email"
          width={50}
          height={50}
          src="/images/tool/gmail.svg"
          className="size-full object-cover"
        />
      </button>
    </Link>
  );
}
