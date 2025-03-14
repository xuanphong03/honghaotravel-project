import React from "react";
import BlogThumbnail from "./BlogThumbnail";
import BlogContent from "./BlogContent";
import BlogBreadcrumb from "./BlogBreadcrumb";
import "./BlogDetail.css";

export default function BlogDetail() {
  return (
    <section
      id="blog-detail"
      className="flex flex-col items-center bg-[#1A543A]"
    >
      <BlogThumbnail />
      <div className="hidden sm:block relative bg-white w-full py-[1.75rem] text-[#262626] ">
        <BlogBreadcrumb />
      </div>
      <BlogContent />
    </section>
  );
}
