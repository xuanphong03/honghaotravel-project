import React from "react";
import BlogRelatedItem from "./BlogRelatedItem";
import Link from "next/link";

export default function BlogRelatedList({ blogs }) {
  return (
    <div className="flex w-fit items-center overflow-auto hidden_scrollbar">
      {blogs.map(({ id, tag, title, createdDate }) => (
        <Link
          href="#"
          key={id}
          className="inline-block not-first:ml-[0.875rem] md:not-first:ml-[1.4rem] shrink-0 w-[18.625rem] md:w-[21.4375rem] h-[15.3125rem] md:w-[44.25rem] md:h-[25.8125rem] "
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
