'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet-v2';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs-v2';
import Image from 'next/image';
import Activity from './Activity';
import { X } from 'lucide-react';

export default function AlbumItem({ thumbnailURL }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <article className="h-full w-full">
          <Image
            alt="Hong Hao Travel"
            width={500}
            height={500}
            src={thumbnailURL}
            className="size-full object-cover transition-all duration-500 hover:scale-120"
          />
        </article>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="relative border-none bg-transparent"
      >
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <Tabs defaultValue="people" className="flex w-full gap-0">
          <div className="relative h-[4rem]">
            <TabsList>
              <TabsTrigger
                value="people"
                className="activity shadow-right hover:bg-orange-normal__hover data-[state=active]:bg-orange-normal__hover absolute top-0 left-0 z-[4] flex h-[4rem] min-w-[10.81256rem] items-center justify-center rounded-tr-md bg-white py-0 text-[1.5rem] normal-case before:hidden hover:text-white data-[state=active]:text-white"
              >
                People
              </TabsTrigger>
              <TabsTrigger
                value="hiking"
                className="activity shadow-right hover:bg-orange-normal__hover data-[state=active]:bg-orange-normal__hover absolute top-0 left-[7rem] z-[3] flex h-[4rem] min-w-[10.81256rem] items-center justify-center rounded-tr-md bg-white py-0 pl-[3.5rem] text-[1.5rem] normal-case before:hidden hover:text-white data-[state=active]:text-white"
              >
                Hiking...
              </TabsTrigger>
              <TabsTrigger
                value="discovery"
                className="activity shadow-right hover:bg-orange-normal__hover data-[state=active]:bg-orange-normal__hover absolute top-0 left-[11rem] z-[2] flex h-[4rem] min-w-[10.81256rem] items-center justify-center rounded-tr-md bg-white py-0 pr-[2rem] pl-[8rem] text-[1.5rem] normal-case before:hidden hover:text-white data-[state=active]:text-white"
              >
                Discovery
              </TabsTrigger>
              <TabsTrigger
                value="food"
                className="activity shadow-right hover:bg-orange-normal__hover data-[state=active]:bg-orange-normal__hover absolute top-0 left-[21rem] z-[1] flex h-[4rem] min-w-[10.81256rem] items-center justify-center rounded-tr-md bg-white py-0 pr-[4rem] pl-[9.5rem] text-[1.5rem] normal-case before:hidden hover:text-white data-[state=active]:text-white"
              >
                Food
              </TabsTrigger>
            </TabsList>
            <SheetClose className="absolute top-1/2 right-[1.25rem] inline-flex size-[2.75rem] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden disabled:pointer-events-none md:top-[1.5rem] md:right-[2.25rem]">
              <X className="text-white" />
            </SheetClose>
          </div>
          <TabsContent value="people" className="bg-white">
            <Activity />
          </TabsContent>
          <TabsContent value="hiking" className="bg-white">
            <Activity />
          </TabsContent>
          <TabsContent value="discovery" className="bg-white">
            <Activity />
          </TabsContent>
          <TabsContent value="food" className="bg-white">
            <Activity />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
