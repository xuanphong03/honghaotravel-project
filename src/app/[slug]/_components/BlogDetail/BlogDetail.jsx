import BreadcrumbCustom from '@/components/common/breadcrumb/BreadcrumbCustom';
import BlogContent from './BlogContent';
import BlogThumbnail from './BlogThumbnail';
import './BlogDetail.scss';

export default function BlogDetail() {
  const BreadcrumbLinks = [
    { id: 1, page: 'Blog', to: '/blog' },
    {
      id: 2,
      page: `Tanzania is known for it world-class opportunities for big game
            spotting and stunning National Parks. But what don't you know about
            this wonderful destination?`,
      to: '#',
    },
  ];
  return (
    <section
      id="blog-detail"
      className="flex flex-col items-center bg-[#1A543A]"
    >
      <BlogThumbnail />
      <div className="relative hidden w-full bg-white py-[1.75rem] text-[#262626] md:block">
        <BreadcrumbCustom data={BreadcrumbLinks} />
      </div>
      <BlogContent />
    </section>
  );
}
