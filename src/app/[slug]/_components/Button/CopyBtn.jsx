'use client';
import Image from 'next/image';
import { toast } from 'sonner';

export default function CopyBtn() {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast('Copy link thành công');
    } catch (error) {
      toast('Copy link thành thất bại');
    }
  };
  return (
    <button
      onClick={handleCopyLink}
      className="cursor-pointer transition-all hover:opacity-80"
    >
      <Image
        alt="copy"
        width={20}
        height={20}
        src="/images/blog-detail/copy.svg"
        className="size-[1.75rem] shrink-0 object-contain"
      />
    </button>
  );
}
