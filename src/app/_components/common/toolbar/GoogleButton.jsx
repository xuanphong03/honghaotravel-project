import Image from 'next/image';
import Link from 'next/link';

export default function GoogleButton() {
  return (
    <Link
      data-aos="fade-up"
      data-aos-offset="0"
      target="_blank"
      href="mailto:honghaotravel@gmail.com"
      className="inline-block cursor-pointer"
    >
      <Image
        alt="Email"
        width={50}
        height={50}
        src="/images/tool/gmail.svg"
        className="size-[3.625rem] rounded-full object-cover"
      />
    </Link>
  );
}
