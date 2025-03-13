import React from "react";
import BlogTitle from "./_components/BlogTitle/BlogTitle";
import BlogDetail from "./_components/BlogDetail/BlogDetail";
import BlogPlanning from "./_components/BlogPlanning/BlogPlanning";
import BlogRelated from "./_components/BlogRelated/BlogRelated";

export default function BlogDetailPage() {
  return (
    <main id="blog-detail" className="">
      <BlogTitle />
      <BlogDetail />
      <BlogPlanning />
      <BlogRelated />
    </main>
  );
}
