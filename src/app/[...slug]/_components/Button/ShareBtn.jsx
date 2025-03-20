'use client';
import Image from 'next/image';

export default function ShareBtn() {
  const handleShare = () => {
    const url = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookShareUrl, '_blank', 'width=600,height=400');
  };
  return (
    <button onClick={handleShare} className="cursor-pointer">
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
