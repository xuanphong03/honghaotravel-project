import { fetchTours } from '@/app/services/api';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import PinSpacer from './PinSpacer';
import TourList from './TourList';

export default async function Discovery({ searchParams }) {
  const page = parseInt(searchParams.page || 1);
  const pageSize = parseInt(searchParams.pageSize || 4);
  const { tours, totalCount } = await fetchTours(page, pageSize);
  return (
    <section
      id="discovery"
      className="relative pt-[4rem] max-md:min-h-[130vh] md:mb-[2rem] md:min-h-[88vh] lg:min-h-[90vh]"
    >
      <PinSpacer />
      <div className="mx-auto flex w-full gap-x-[2.88rem] max-md:flex-wrap max-md:px-[1rem] md:w-[87.5rem] xl:w-[93rem]">
        <div className="z-[2] md:sticky md:top-28 md:max-h-screen">
          <h3 className="mb-[0.75rem] text-[0.875rem] leading-none font-bold text-[#103223]/40 md:text-[1.125rem]">
            Discovery Ha Giang
          </h3>
          <h2 className="font-londrina-solid mb-[1.5rem] text-[2.5rem] leading-[1.5] font-black text-[#206545] uppercase md:text-[3.5rem] md:leading-none">
            Destinations
          </h2>
          <p className="w-full text-[0.875rem] leading-[1.5] tracking-[0.005rem] text-[#454545] md:w-[27.5625rem] md:text-[1rem]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam,
            beckons adventurers with its breathtaking scenery and vibrant
            cultural tapestry. From the towering peaks of the Dong Van Karst
            Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers
            an unforgettable journey through some of Vietnam's most
            awe-inspiring landscapes.
          </p>
        </div>
        <div className="inline-flex flex-col items-center gap-[2rem] max-md:mt-[1.7rem]">
          <div className="relative z-[2] flex flex-col items-center gap-[2rem]">
            <TourList tours={tours} />
            <div className="py-[2rem]">
              <PaginationWithLinks
                page={page}
                pageSize={pageSize}
                totalCount={totalCount}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
