import BreadcrumbCustom from '@/components/common/breadcrumb/BreadcrumbCustom';
import OurTeam from '../../../components/section/ourteam/OurTeam';
import Activity from './_components/sections/activity';
import Banner from './_components/sections/banner';

export const metadata = {
  title: 'Activity',
};

export default function ActivityPage() {
  return (
    <>
      <Banner />
      <div className="hidden flex-col items-start gap-[1.25rem] pt-[1.25rem] md:flex">
        <BreadcrumbCustom
          data={[{ id: 1, page: 'Activity', to: '/activity' }]}
        />
        <div className="h-[0.0625rem] w-full bg-gray-200"></div>
      </div>
      <Activity />
      <OurTeam secondary />
    </>
  );
}
