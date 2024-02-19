import React from "react";
import { getPostBySlug } from "../lib/posts";
import { useParams } from "react-router-dom";

export default function PostPage() {
  // STEP 5: Getting the slug of the dynamic post from URL
  let { slug } = useParams();
  // STEP 6: Fetching the post that has that slug
  let post = getPostBySlug(slug);
  return <h1>{post.caption}</h1>;
}
