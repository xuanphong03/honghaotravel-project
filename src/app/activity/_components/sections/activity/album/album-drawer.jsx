'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer-v2';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs-v2';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Image from 'next/image';
import CarouselActivity from './album-carousel';
import styles from './album.module.css';

export default function AlbumItem({ thumbnailURL }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <article className="h-full w-full">
          <Image
            alt="Hong Hao Travel"
            width={500}
            height={500}
            src={thumbnailURL}
            className="size-full object-cover transition-all duration-500 hover:scale-120"
          />
        </article>
      </DrawerTrigger>
      <DrawerContent className="border-none" data-vaul-no-drag>
        <DrawerHeader className="hidden">
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <Tabs defaultValue="people" className="flex w-full gap-0">
          <div className="relative h-[4rem]">
            <TabsList>
              <TabsTrigger
                value="people"
                className={cn(
                  styles.shadowRight,
                  'text-orange-normal__active hover:bg-orange-normal__hover data-[state=active]:bg-orange-normal__hover absolute top-0 left-0 z-[4] flex h-[4rem] min-w-[10.81256rem] items-center justify-center rounded-tr-md bg-white py-0 text-[1.5rem] normal-case before:hidden hover:text-white data-[state=active]:text-white',
                )}
              >
                People
              </TabsTrigger>
              <TabsTrigger
                value="hiking"
                className={cn(
                  styles.shadowRight,
                  'text-orange-normal__active hover:bg-orange-normal__hover data-[state=active]:bg-orange-normal__hover absolute top-0 left-[7rem] z-[3] flex h-[4rem] min-w-[10.81256rem] items-center justify-center rounded-tr-md bg-white py-0 pl-[3.5rem] text-[1.5rem] normal-case before:hidden hover:text-white data-[state=active]:text-white',
                )}
              >
                Hiking...
              </TabsTrigger>
              <TabsTrigger
                value="discovery"
                className={cn(
                  styles.shadowRight,
                  'text-orange-normal__active hover:bg-orange-normal__hover data-[state=active]:bg-orange-normal__hover absolute top-0 left-[11rem] z-[2] flex h-[4rem] min-w-[10.81256rem] items-center justify-center rounded-tr-md bg-white py-0 pr-[2rem] pl-[8rem] text-[1.5rem] normal-case before:hidden hover:text-white data-[state=active]:text-white',
                )}
              >
                Discovery
              </TabsTrigger>
              <TabsTrigger
                value="food"
                className={cn(
                  styles.shadowRight,
                  'text-orange-normal__active hover:bg-orange-normal__hover data-[state=active]:bg-orange-normal__hover absolute top-0 left-[21rem] z-[1] flex h-[4rem] min-w-[10.81256rem] items-center justify-center rounded-tr-md bg-white py-0 pr-[4rem] pl-[9.5rem] text-[1.5rem] normal-case before:hidden hover:text-white data-[state=active]:text-white',
                )}
              >
                Food
              </TabsTrigger>
            </TabsList>
            <DrawerClose className="absolute top-1/2 right-[1.25rem] inline-flex size-[2.75rem] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden disabled:pointer-events-none md:top-[1.5rem] md:right-[2.25rem]">
              <X className="text-white" />
            </DrawerClose>
          </div>
          <TabsContent value="people" className="relative z-10 bg-white">
            <CarouselActivity />
          </TabsContent>
          <TabsContent value="hiking" className="relative z-10 bg-white">
            <CarouselActivity />
          </TabsContent>
          <TabsContent value="discovery" className="relative z-10 bg-white">
            <CarouselActivity />
          </TabsContent>
          <TabsContent value="food" className="relative z-10 bg-white">
            <CarouselActivity />
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
}
