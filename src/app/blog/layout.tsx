import React from "react";

interface BlogLayoutProps {
  children: any;
}

function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div>
      <h1>Hi this is blog</h1>
      {children}
    </div>
  );
}

export default BlogLayout;
