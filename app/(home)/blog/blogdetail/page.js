"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Metadata } from "next";

export default function BlogDetail() {
  const params = useParams();
  const id = params.id;

  // Placeholder data (replace with actual data fetching logic)
  const post = {
    title: "Sample Blog Post",
    date: "April 1, 2023",
    author: "John Doe",
    content: "This is the content of the blog post...",
  };

  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <div className="post-meta">
        <span>Published on {post.date}</span>
        <span>By {post.author}</span>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
