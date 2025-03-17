'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs-v2';
import Album from './album/Album';

export default function Content() {
  return (
    <div className="relative">
      <div className="flex w-full items-center justify-center">
        <Tabs
          defaultValue="people"
          className="flex w-full items-center justify-center gap-y-[1rem] md:gap-y-[4.56rem]"
        >
          <TabsList className="flex items-center gap-[2.25rem] bg-transparent">
            <TabsTrigger value="people">PEOPLE</TabsTrigger>
            <TabsTrigger value="hiking">HIKING</TabsTrigger>
            <TabsTrigger value="discovery">DISCOVERY</TabsTrigger>
            <TabsTrigger value="food">FOOD</TabsTrigger>
          </TabsList>
          <TabsContent value="people">
            <Album />
          </TabsContent>
          <TabsContent value="hiking">
            <Album />
          </TabsContent>
          <TabsContent value="discovery">
            <Album />
          </TabsContent>
          <TabsContent value="food">
            <Album />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
