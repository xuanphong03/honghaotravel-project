import BreadcrumbCustom from '@/components/common/breadcrumb/BreadcrumbCustom';
import OurTeam from '../../../components/section/ourteam/OurTeam';
import Banner from './_components/Banner/Banner';
import Discovery from './_components/Discovery/Discovery';
import ExploreTrip from './_components/ExploreTrip/ExploreTrip';

export const metadata = {
  title: 'Destination',
};

export default async function DestinationPage({ searchParams }) {
  const _searchParams = await searchParams;

  return (
    <>
      <Banner />
      <div className="hidden flex-col items-start gap-[1.25rem] pt-[1.25rem] md:flex">
        <BreadcrumbCustom
          data={[{ id: 1, page: 'Destination', to: '/destination' }]}
        />
        <div className="h-[0.0625rem] w-full bg-gray-200"></div>
      </div>
      <Discovery searchParams={_searchParams} />
      <OurTeam secondary className="relative z-10 bg-white" />
      <ExploreTrip />
    </>
  );
}
