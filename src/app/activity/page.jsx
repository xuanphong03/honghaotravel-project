import OurTeam from '../../../components/section/ourteam/OurTeam';
import Activity from './_components/sections/activity/Activity';
import Banner from './_components/sections/banner/Banner';
import BreadcrumbCustom from '@/components/common/breadcrumb/BreadcrumbCustom';

export const metadata = {
  title: 'Activity - Hong Hao Travel',
  description: '',
};

export default function ActivityPage() {
  return (
    <>
      <Banner />
      <BreadcrumbCustom data={[{ id: 1, page: 'Activity', to: '/activity' }]} />
      <Activity />
      <OurTeam secondary />
    </>
  );
}
