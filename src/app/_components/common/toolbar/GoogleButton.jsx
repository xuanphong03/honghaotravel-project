import Image from 'next/image';
import Link from 'next/link';

export default function GoogleButton() {
  return (
    <Link
      target="_blank"
      data-aos="fade-up"
      data-aos-duration="500"
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
