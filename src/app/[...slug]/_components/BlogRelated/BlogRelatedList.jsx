import Link from 'next/link';
import BlogRelatedItem from './BlogRelatedItem';

export default function BlogRelatedList({ blogs }) {
  return (
    <div className="hidden_scrollbar flex w-fit items-center overflow-auto">
      {blogs.map(({ id, tag, title, createdDate }) => (
        <Link
          href="#"
          key={id}
          className="inline-block h-[15.3125rem] w-[18.625rem] shrink-0 not-first:ml-[0.875rem] md:h-[25.8125rem] md:w-[44.25rem] md:not-first:ml-[1.4rem]"
        >
          <BlogRelatedItem
            key={id}
            tag={tag}
            title={title}
            createdDate={createdDate}
          />
        </Link>
      ))}
    </div>
  );
}
