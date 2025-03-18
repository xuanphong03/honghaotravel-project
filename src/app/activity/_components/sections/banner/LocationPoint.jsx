import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog-v2';
import Image from 'next/image';
import SlideImage from './SlideImage';
import { X } from 'lucide-react';

export default function LocationPoint() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative">
            <Image
              width={50}
              height={50}
              alt="location point"
              src="/images/activity/album.png"
              className="h-[4.55rem] w-[4.75rem] cursor-pointer"
            />
            <Badge className="bg-orange-normal absolute top-0 right-0 inline-flex items-center justify-center rounded-[1.25rem] text-[0.875rem] font-medium tracking-[0.00875rem] text-white">
              10
            </Badge>
          </div>
        </DialogTrigger>
        <DialogContent className="!z-[9999] p-0">
          <DialogHeader className="hidden">
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <SlideImage />
          <DialogClose className="absolute top-0 !right-[-3.75rem] z-[1] inline-flex size-[2.75rem] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden disabled:pointer-events-none md:top-[1.5rem] md:right-[2.25rem]">
            <X className="text-white" />
          </DialogClose>
        </DialogContent>
      </Dialog>
      <svg
        className="circle mr-[0.95rem] size-[2.25rem]"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle
          cx="10"
          cy="10"
          r="3.5"
          fill="#E64827"
          stroke="#E64827"
        ></circle>
        <circle cx="10" cy="10" r="9.5" stroke="#E64827" className=""></circle>
      </svg>
    </>
  );
}
