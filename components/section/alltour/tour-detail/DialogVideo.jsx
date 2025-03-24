import {
  Dialog,
  DialogClose,
  DialogContentCustom,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog-v3';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { X } from 'lucide-react';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative flex h-[26.69638rem] cursor-pointer items-center justify-center overflow-hidden rounded-2xl">
          <div className="yt-click border-s-greyscaletext-0 hover:bg-orange-normal relative z-10 flex items-center justify-center rounded-full border-[1px] border-solid p-4 duration-300 ease-in-out hover:scale-90">
            <svg
              className="z-[51] size-[1.5rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.5 10.6603C20.1667 11.0452 20.1667 12.0074 19.5 12.3923L6 20.1865C5.33333 20.5714 4.5 20.0903 4.5 19.3205L4.5 3.73205C4.5 2.96225 5.33333 2.48112 6 2.86602L19.5 10.6603Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <Image
            src={'/images/alltour/banner.jpeg'}
            alt="banner"
            fill
            className="z-0 object-cover"
          />
        </div>
      </DialogTrigger>
      <DialogContentCustom className="!border-none !bg-transparent md:max-w-[82rem]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <iframe
          className="!h-[40.875rem] w-full rounded-3xl"
          src="https://www.youtube.com/embed/Y1ezkq1RWkg"
          title="Hà Giang Ơi - Quách Beem (OFFICIAL MV 4K) || Sự trở lại của siêu phẩm hát tặng Hà Giang!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className={
              'absolute top-10 -right-12 !h-[3.25rem] !w-[3.25rem] cursor-pointer rounded-full bg-gray-400'
            }
          >
            <X className="h-6 w-6" />
          </Button>
        </DialogClose>
      </DialogContentCustom>
    </Dialog>
  );
}
