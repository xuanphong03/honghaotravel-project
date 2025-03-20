'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ShareBtn() {
  const handleClick = () => {
    const url = 'https://honghaotravel.com/';
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(
      'Khám phá ngay tại honghaotravel.com #honghaotravel',
    )}`;
    window.open(
      facebookShareUrl,
      'targetWindow',
      'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250',
    );
  };
  return (
    <button onClick={handleClick} className="cursor-pointer">
      <Image
        alt="copy"
        width={20}
        height={20}
        src="/images/blog-detail/facebook.svg"
        className="size-[2rem] shrink-0 object-contain"
      />
    </button>
  );
}
