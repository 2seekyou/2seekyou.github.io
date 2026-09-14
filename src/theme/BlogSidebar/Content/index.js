import React from 'react';
import Link from '@docusaurus/Link';
import BlogSidebarContent from '@theme-original/BlogSidebar/Content';

export default function BlogSidebarContentWithArchive(props) {
  return (
    <>
      <BlogSidebarContent {...props} />
      <Link className="blogSidebarMore" to="/blog/archive">查看更多文章 →</Link>
    </>
  );
}
