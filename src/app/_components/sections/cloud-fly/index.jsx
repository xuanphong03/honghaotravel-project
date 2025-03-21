import Image from 'next/image';
import styles from './cloud-fly.module.css';
import { cn } from '@/lib/utils';

export default function CloudFly() {
  return (
    <div
      id="cloud_fly"
      className="cloud_container relative z-10 h-[4rem] w-full overflow-hidden bg-transparent md:h-[13.5rem]"
    >
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        src="/images/home/weather/cloud1.png"
        className={cn(
          styles.animationCloud1,
          'min-w-[108vw] object-cover object-top',
        )}
      />
      <div
        className="absolute bottom-0 left-0 z-20 h-6 w-full md:h-[6rem]"
        style={{
          background:
            'linear-gradient(0deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        className={cn(
          styles.animationCloud2,
          'absolute -top-4 left-0 z-10 w-[50rem] object-cover md:-top-6 md:left-[10%]',
        )}
        src="/images/home/weather/cloud2.png"
      />
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        className={cn(
          styles.animationCloud3,
          'absolute top-0 right-0 z-10 w-[50rem] object-cover md:top-5',
        )}
        src="/images/home/weather/cloud3.png"
      />
      <Image
        width={1920}
        height={1080}
        alt="Hong Hao Travel"
        src="/images/home/weather/cloud4.png"
        className={cn(
          styles.animationCloud4,
          'absolute top-0 right-0 z-10 w-[50rem] object-cover md:top-4 md:right-[30%]',
        )}
      />
    </div>
  );
}
