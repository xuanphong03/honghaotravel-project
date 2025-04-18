import JourneyPlan from '@/components/common/journey-plan/journey-plan';
import BlogDetail from './_components/BlogDetail/BlogDetail';
import BlogRelated from './_components/BlogRelated/BlogRelated';
import BlogTitle from './_components/BlogTitle/BlogTitle';

export async function generateMetadata({ params }) {
  return {
    title: 'Blog detail ',
  };
}

export default async function BlogDetailPage() {
  return (
    <>
      <BlogTitle />
      <BlogDetail />
      <JourneyPlan />
      <BlogRelated />
    </>
  );
}
